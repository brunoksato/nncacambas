import { FormEvent, useState } from 'react';
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

export default function QuoteForm({
  initialCity,
  placement = `formulario_orcamento`,
  title = `Receba seu orçamento pelo WhatsApp`,
}: Props) {
  const [city, setCity] = useState<City>(initialCity || `São José dos Campos`);
  const [neighborhood, setNeighborhood] = useState(``);
  const [material, setMaterial] = useState(``);
  const [deadline, setDeadline] = useState(``);

  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const message = [
      `Olá, vim pelo site da N&N e quero um orçamento de caçamba.`,
      `Cidade: ${city}`,
      `Bairro: ${neighborhood.trim()}`,
      `Material: ${material}`,
      `Quando preciso: ${deadline}`,
    ].join(`\n`);

    trackWhatsAppClick(city, placement);
    window.open(buildWhatsAppUrl({ message }), `_blank`, `noopener,noreferrer`);
  };

  const fieldClass = `mt-2 h-12 w-full rounded-lg border border-black/15 bg-white px-3 text-base text-[#151719] outline-none transition focus:border-[#9b7d00] focus:ring-2 focus:ring-[#fcd535]/50`;

  return (
    <form onSubmit={submit} className="rounded-2xl bg-white p-5 text-[#151719] shadow-2xl md:p-7">
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
            <span className={`${fieldClass} flex items-center bg-[#f7f7f5]`}>{initialCity}</span>
          ) : (
            <select
              className={fieldClass}
              value={city}
              onChange={(event) => setCity(event.target.value as City)}
              required
            >
              <option>São José dos Campos</option>
              <option>Jacareí</option>
            </select>
          )}
        </label>

        <label className="text-sm font-bold">
          Bairro
          <input
            className={fieldClass}
            value={neighborhood}
            onChange={(event) => setNeighborhood(event.target.value)}
            placeholder="Ex.: Centro"
            autoComplete="address-level3"
            required
          />
        </label>

        <label className="text-sm font-bold">
          Material
          <select
            className={fieldClass}
            value={material}
            onChange={(event) => setMaterial(event.target.value)}
            required
          >
            <option value="" disabled>
              Selecione
            </option>
            {materials.map((option) => (
              <option key={option}>{option}</option>
            ))}
          </select>
        </label>

        <label className="text-sm font-bold">
          Quando precisa?
          <select
            className={fieldClass}
            value={deadline}
            onChange={(event) => setDeadline(event.target.value)}
            required
          >
            <option value="" disabled>
              Selecione
            </option>
            {deadlines.map((option) => (
              <option key={option}>{option}</option>
            ))}
          </select>
        </label>
      </div>

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
