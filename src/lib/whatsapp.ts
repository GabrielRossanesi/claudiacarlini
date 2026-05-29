export const WHATSAPP_NUMBER = "551994313805";

export const whatsappMessages = {
  general:
    "Olá, Cláudia! Vim pelo site e gostaria de mais informações sobre os empreendimentos disponíveis.",
  launches:
    "Olá, Cláudia! Gostaria de saber mais sobre os lançamentos Gallery Cambuí, Belgravia, Alto das Mansões e HOX Cambuí.",
  investors:
    "Olá, Cláudia! Tenho interesse em empreendimentos para investimento, especialmente studios, lofts e compactos. Pode me ajudar?",
};

export function getWhatsAppLink(message: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export function getPropertyWhatsAppMessage(propertyTitle: string) {
  return `Olá, Cláudia! Vim pelo site e tenho interesse no empreendimento ${propertyTitle}. Pode me passar mais informações?`;
}

export function getPropertyWhatsAppLink(propertyTitle: string) {
  return getWhatsAppLink(getPropertyWhatsAppMessage(propertyTitle));
}
