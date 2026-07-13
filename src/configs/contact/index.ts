export const WHATSAPP_NUMBER = `5512996611332`;
export const WHATSAPP_DISPLAY = `(12) 99661-1332`;
export const GOOGLE_ADS_CONVERSION = `AW-11103703335/Z0u8CLuJ6KkYEKei1K4p`;

type WhatsAppUrlOptions = {
  city?: string;
  message?: string;
};

export function buildWhatsAppUrl({ city, message }: WhatsAppUrlOptions = {}) {
  const defaultMessage = city
    ? `Olá, vim pelo site e quero um orçamento para aluguel de caçamba em ${city}. Meu bairro é: `
    : `Olá, vim pelo site e quero um orçamento para aluguel de caçamba. Minha cidade e bairro são: `;

  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message || defaultMessage)}`;
}

export function trackWhatsAppClick(city: string, placement: string) {
  if (typeof window === `undefined`) return;

  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    event: `whatsapp_click`,
    lead_city: city,
    cta_placement: placement,
  });

  if (window.gtag) {
    window.gtag(`event`, `conversion`, {
      send_to: GOOGLE_ADS_CONVERSION,
    });
    window.gtag(`event`, `generate_lead`, {
      method: `WhatsApp`,
      lead_city: city,
      cta_placement: placement,
    });
  }
}
