export const WHATSAPP_NUMBER = `5512996611332`;
export const WHATSAPP_DISPLAY = `(12) 99661-1332`;
export const GOOGLE_ADS_CONVERSION = `AW-11103703335/Z0u8CLuJ6KkYEKei1K4p`;

type WhatsAppUrlOptions = {
  city?: string;
  message?: string;
};

type WhatsAppTrackingOptions = {
  destinationUrl?: string;
  dispatchTimeoutMs?: number;
};

export function buildWhatsAppUrl({ city, message }: WhatsAppUrlOptions = {}) {
  const defaultMessage = city
    ? `Olá, vim pelo site e quero um orçamento para aluguel de caçamba em ${city}. Meu bairro é: `
    : `Olá, vim pelo site e quero um orçamento para aluguel de caçamba. Minha cidade e bairro são: `;

  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message || defaultMessage)}`;
}

function whatsappTrackingUrl(url: string) {
  try {
    const parsed = new URL(url);
    return `${parsed.origin}${parsed.pathname}`;
  } catch {
    return `https://wa.me/${WHATSAPP_NUMBER}`;
  }
}

export function trackWhatsAppClick(
  city: string,
  placement: string,
  { destinationUrl, dispatchTimeoutMs = 600 }: WhatsAppTrackingOptions = {},
) {
  if (typeof window === `undefined`) return Promise.resolve();

  const pagePath = `${window.location.pathname}${window.location.search}`;
  const eventDetails = {
    method: `WhatsApp`,
    lead_city: city,
    cta_placement: placement,
    page_path: pagePath,
    page_location: window.location.href,
    link_url: whatsappTrackingUrl(destinationUrl || buildWhatsAppUrl({ city })),
  };

  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    event: `whatsapp_click`,
    ...eventDetails,
  });

  return new Promise<void>((resolve) => {
    let completed = false;
    const finish = () => {
      if (completed) return;
      completed = true;
      window.clearTimeout(timeoutId);
      resolve();
    };
    const timeoutId = window.setTimeout(finish, dispatchTimeoutMs);

    if (!window.gtag) {
      finish();
      return;
    }

    window.gtag(`event`, `generate_lead`, eventDetails);
    window.gtag(`event`, `conversion`, {
      send_to: GOOGLE_ADS_CONVERSION,
      event_callback: finish,
      event_timeout: dispatchTimeoutMs,
    });
  });
}

export async function redirectToWhatsApp({
  city = `SJC e Jacareí`,
  placement,
  message,
}: {
  city?: string;
  placement: string;
  message?: string;
}) {
  if (typeof window === `undefined`) return;

  const destinationUrl = buildWhatsAppUrl({ city, message });
  await trackWhatsAppClick(city, placement, { destinationUrl });
  window.location.replace(destinationUrl);
}
