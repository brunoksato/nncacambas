import { FormEvent, useRef, useState } from 'react';
import { buildWhatsAppUrl, trackWhatsAppClick } from '@configs/contact';

type City = `São José dos Campos` | `Jacareí`;
type FieldName = `company` | `city` | `service` | `period`;
type FormErrors = Partial<Record<FieldName, string>>;

const services = [
  `Caminhão sem motorista`,
  `Caminhão e caçamba`,
  `Caçamba estacionária`,
  `Caixa fechada`,
  `Ainda preciso de orientação`,
] as const;

const periods = [
  `Até 1 dia`,
  `De 2 a 7 dias`,
  `Mais de 1 semana`,
  `Uso mensal ou recorrente`,
  `Ainda estou avaliando`,
] as const;

export default function CompanyRentalForm() {
  const [company, setCompany] = useState(``);
  const [city, setCity] = useState<City | ``>(``);
  const [service, setService] = useState(``);
  const [period, setPeriod] = useState(``);
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitError, setSubmitError] = useState(``);
  const companyRef = useRef<HTMLInputElement>(null);
  const cityRef = useRef<HTMLSelectElement>(null);
  const serviceRef = useRef<HTMLSelectElement>(null);
  const periodRef = useRef<HTMLSelectElement>(null);

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
    if (!company.trim()) nextErrors.company = `Informe o nome da empresa.`;
    if (!city) nextErrors.city = `Selecione a cidade.`;
    if (!service) nextErrors.service = `Selecione o que sua empresa precisa.`;
    if (!period) nextErrors.period = `Selecione o período estimado.`;

    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors);
      setSubmitError(`Revise os campos destacados para continuar.`);

      let firstInvalidField: HTMLElement | null = periodRef.current;
      if (nextErrors.service) firstInvalidField = serviceRef.current;
      if (nextErrors.city) firstInvalidField = cityRef.current;
      if (nextErrors.company) firstInvalidField = companyRef.current;
      window.requestAnimationFrame(() => firstInvalidField?.focus());
      return;
    }

    const message = [
      `Olá, vim pelo site da N&N e quero uma cotação para empresa.`,
      `Empresa: ${company.trim()}`,
      `Cidade da operação: ${city}`,
      `Equipamento: ${service}`,
      `Período estimado: ${period}`,
      `Estou ciente de que a locação de caminhão é sem motorista.`,
    ].join(`\n`);
    const whatsappUrl = buildWhatsAppUrl({ message });

    setErrors({});
    setSubmitError(``);

    try {
      const whatsappWindow = window.open(whatsappUrl, `_blank`);
      const trackingOptions = {
        destinationUrl: whatsappUrl,
        eventDetails: {
          lead_segment: `empresas`,
          lead_service: service,
          rental_period: period,
        },
      };

      if (whatsappWindow) {
        whatsappWindow.opener = null;
        void trackWhatsAppClick(city, `form_hero_caminhoes_b2b`, trackingOptions);
        return;
      }

      void trackWhatsAppClick(city, `form_hero_caminhoes_b2b`, trackingOptions).then(() => {
        window.location.assign(whatsappUrl);
      });
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
        Cotação empresarial
      </p>
      <h2 className="mt-2 text-2xl font-extrabold leading-tight md:text-3xl">
        Informe sua necessidade
      </h2>
      <p className="mt-2 text-sm leading-6 text-[#62676b]">
        A mensagem chegará organizada para nossa equipe continuar pelo WhatsApp.
      </p>

      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        <label className="text-sm font-bold sm:col-span-2">
          Empresa
          <input
            ref={companyRef}
            className={fieldClass(Boolean(errors.company))}
            value={company}
            onChange={(event) => {
              setCompany(event.target.value);
              clearError(`company`);
            }}
            placeholder="Nome da empresa"
            autoComplete="organization"
            aria-invalid={Boolean(errors.company)}
            aria-describedby={errors.company ? `company-error` : undefined}
          />
          {errors.company && (
            <span id="company-error" className="mt-1 block text-sm font-semibold text-[#b42318]">
              {errors.company}
            </span>
          )}
        </label>

        <label className="text-sm font-bold">
          Cidade da operação
          <select
            ref={cityRef}
            className={fieldClass(Boolean(errors.city))}
            value={city}
            onChange={(event) => {
              setCity(event.target.value as City);
              clearError(`city`);
            }}
            aria-invalid={Boolean(errors.city)}
            aria-describedby={errors.city ? `company-city-error` : undefined}
          >
            <option value="" disabled>
              Selecione
            </option>
            <option>São José dos Campos</option>
            <option>Jacareí</option>
          </select>
          {errors.city && (
            <span
              id="company-city-error"
              className="mt-1 block text-sm font-semibold text-[#b42318]"
            >
              {errors.city}
            </span>
          )}
        </label>

        <label className="text-sm font-bold">
          O que precisa?
          <select
            ref={serviceRef}
            className={fieldClass(Boolean(errors.service))}
            value={service}
            onChange={(event) => {
              setService(event.target.value);
              clearError(`service`);
            }}
            aria-invalid={Boolean(errors.service)}
            aria-describedby={errors.service ? `service-error` : undefined}
          >
            <option value="" disabled>
              Selecione
            </option>
            {services.map((option) => (
              <option key={option}>{option}</option>
            ))}
          </select>
          {errors.service && (
            <span id="service-error" className="mt-1 block text-sm font-semibold text-[#b42318]">
              {errors.service}
            </span>
          )}
        </label>

        <label className="text-sm font-bold sm:col-span-2">
          Período estimado
          <select
            ref={periodRef}
            className={fieldClass(Boolean(errors.period))}
            value={period}
            onChange={(event) => {
              setPeriod(event.target.value);
              clearError(`period`);
            }}
            aria-invalid={Boolean(errors.period)}
            aria-describedby={errors.period ? `period-error` : undefined}
          >
            <option value="" disabled>
              Selecione
            </option>
            {periods.map((option) => (
              <option key={option}>{option}</option>
            ))}
          </select>
          {errors.period && (
            <span id="period-error" className="mt-1 block text-sm font-semibold text-[#b42318]">
              {errors.period}
            </span>
          )}
        </label>
      </div>

      <div className="mt-4 rounded-lg border border-[#ead57e] bg-[#fff8d9] px-3 py-3 text-sm font-bold">
        A locação dos caminhões é sem motorista.
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
        Solicitar cotação no WhatsApp →
      </button>
      <p className="mt-3 text-center text-xs text-[#73787c]">
        Atendimento voltado a empresas de São José dos Campos e Jacareí.
      </p>
    </form>
  );
}
