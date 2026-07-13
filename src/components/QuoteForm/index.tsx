import { FormEvent, useRef, useState } from 'react';
import { buildWhatsAppUrl, trackWhatsAppClick } from '@configs/contact';

type City = `São José dos Campos` | `Jacareí`;

type Props = {
  initialCity?: City;
  placement?: string;
  title?: string;
};

const materials = [
  `Entulho de obra`,
  `Madeira`,
  `Gesso`,
  `Materiais recicláveis`,
  `Ainda não sei`,
] as const;

const deadlines = [`Hoje`, `Nos próximos 3 dias`, `Nesta semana`, `Só estou pesquisando`] as const;

type FieldName = `neighborhood` | `material` | `deadline`;
type FormErrors = Partial<Record<FieldName, string>>;

export default function QuoteForm({
  initialCity,
  placement = `formulario_orcamento`,
  title = `Receba seu orçamento pelo WhatsApp`,
}: Props) {
  const [city, setCity] = useState<City>(initialCity || `São José dos Campos`);
  const [neighborhood, setNeighborhood] = useState(``);
  const [material, setMaterial] = useState(``);
  const [deadline, setDeadline] = useState(``);
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitError, setSubmitError] = useState(``);
  const neighborhoodRef = useRef<HTMLInputElement>(null);
  const materialRef = useRef<HTMLSelectElement>(null);
  const deadlineRef = useRef<HTMLSelectElement>(null);

  const clearError = (field: FieldName) => {
    setErrors((current) => {
      if (!current[field]) return current;

      const next = { ...current };
      delete next[field];
      return next;
    });
    setSubmitError(``);
  };

  const fieldClass = (hasError: boolean) =>
    `mt-2 h-12 w-full rounded-lg border bg-white px-3 text-base text-[#151719] outline-none transition ${
      hasError
        ? `border-[#b42318] focus:border-[#b42318] focus:ring-2 focus:ring-[#b42318]/20`
        : `border-black/15 focus:border-[#9b7d00] focus:ring-2 focus:ring-[#fcd535]/50`
    }`;

  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const nextErrors: FormErrors = {};
    if (!neighborhood.trim()) nextErrors.neighborhood = `Informe seu bairro.`;
    if (!material) nextErrors.material = `Selecione o tipo de material.`;
    if (!deadline) nextErrors.deadline = `Selecione quando você precisa da caçamba.`;

    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors);
      setSubmitError(`Revise os campos destacados para continuar.`);

      let firstInvalidField: HTMLElement | null = deadlineRef.current;
      if (nextErrors.material) firstInvalidField = materialRef.current;
      if (nextErrors.neighborhood) firstInvalidField = neighborhoodRef.current;
      window.requestAnimationFrame(() => firstInvalidField?.focus());
      return;
    }

    setErrors({});
    setSubmitError(``);

    const message = [
      `Olá, vim pelo site da N&N e quero um orçamento de caçamba.`,
      `Cidade: ${city}`,
      `Bairro: ${neighborhood.trim()}`,
      `Material: ${material}`,
      `Quando preciso: ${deadline}`,
    ].join(`\n`);

    const whatsappUrl = buildWhatsAppUrl({ message });

    try {
      const whatsappWindow = window.open(whatsappUrl, `_blank`);

      if (whatsappWindow) {
        whatsappWindow.opener = null;
        trackWhatsAppClick(city, placement);
        return;
      }

      trackWhatsAppClick(city, placement);
      window.location.assign(whatsappUrl);
    } catch {
      setSubmitError(`Não foi possível abrir o WhatsApp. Verifique sua conexão e tente novamente.`);
    }
  };

  return (
    <form
      onSubmit={submit}
      noValidate
      lang="pt-BR"
      className="rounded-2xl bg-white p-5 text-[#151719] shadow-2xl md:p-7"
    >
      <p className="text-xs font-black uppercase tracking-[0.16em] text-[#897000]">
        Resposta pelo WhatsApp
      </p>
      <h2 className="mt-2 text-2xl font-extrabold leading-tight md:text-3xl">{title}</h2>
      <p className="mt-2 text-sm leading-6 text-[#62676b]">
        Informe só o essencial. A mensagem chegará pronta para nossa equipe.
      </p>

      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        <label className="text-sm font-bold">
          Cidade
          {initialCity ? (
            <span className={`${fieldClass(false)} flex items-center bg-[#f7f7f5]`}>
              {initialCity}
            </span>
          ) : (
            <select
              className={fieldClass(false)}
              value={city}
              onChange={(event) => setCity(event.target.value as City)}
            >
              <option>São José dos Campos</option>
              <option>Jacareí</option>
            </select>
          )}
        </label>

        <label className="text-sm font-bold">
          Bairro
          <input
            ref={neighborhoodRef}
            className={fieldClass(Boolean(errors.neighborhood))}
            value={neighborhood}
            onChange={(event) => {
              setNeighborhood(event.target.value);
              clearError(`neighborhood`);
            }}
            placeholder="Ex.: Centro"
            autoComplete="address-level3"
            aria-invalid={Boolean(errors.neighborhood)}
            aria-describedby={errors.neighborhood ? `neighborhood-error` : undefined}
          />
          {errors.neighborhood && (
            <span
              id="neighborhood-error"
              className="mt-1 block text-sm font-semibold text-[#b42318]"
            >
              {errors.neighborhood}
            </span>
          )}
        </label>

        <label className="text-sm font-bold">
          Material
          <select
            ref={materialRef}
            className={fieldClass(Boolean(errors.material))}
            value={material}
            onChange={(event) => {
              setMaterial(event.target.value);
              clearError(`material`);
            }}
            aria-invalid={Boolean(errors.material)}
            aria-describedby={errors.material ? `material-error` : undefined}
          >
            <option value="" disabled>
              Selecione
            </option>
            {materials.map((option) => (
              <option key={option}>{option}</option>
            ))}
          </select>
          {errors.material && (
            <span id="material-error" className="mt-1 block text-sm font-semibold text-[#b42318]">
              {errors.material}
            </span>
          )}
        </label>

        <label className="text-sm font-bold">
          Quando precisa?
          <select
            ref={deadlineRef}
            className={fieldClass(Boolean(errors.deadline))}
            value={deadline}
            onChange={(event) => {
              setDeadline(event.target.value);
              clearError(`deadline`);
            }}
            aria-invalid={Boolean(errors.deadline)}
            aria-describedby={errors.deadline ? `deadline-error` : undefined}
          >
            <option value="" disabled>
              Selecione
            </option>
            {deadlines.map((option) => (
              <option key={option}>{option}</option>
            ))}
          </select>
          {errors.deadline && (
            <span id="deadline-error" className="mt-1 block text-sm font-semibold text-[#b42318]">
              {errors.deadline}
            </span>
          )}
        </label>
      </div>

      {submitError && (
        <p
          role="alert"
          aria-live="assertive"
          className="mt-4 rounded-lg border border-[#fecdca] bg-[#fef3f2] px-3 py-2 text-sm font-semibold text-[#b42318]"
        >
          {submitError}
        </p>
      )}

      <button
        type="submit"
        className="mt-5 flex min-h-[52px] w-full items-center justify-center rounded-lg bg-[#14950f] px-5 text-base font-extrabold text-white shadow-lg transition hover:bg-[#107b0c] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#14950f]"
      >
        Continuar no WhatsApp →
      </button>
      <p className="mt-3 text-center text-xs text-[#73787c]">
        Sem cadastro. Você continua o atendimento diretamente no WhatsApp.
      </p>
    </form>
  );
}
