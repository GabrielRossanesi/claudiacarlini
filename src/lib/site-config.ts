const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export const siteConfig = {
  name: "Cláudia Carlini",
  role: "Consultoria Imobiliária",
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  logo: `${basePath}/img/logo.png`,
  instagramUrl: "https://www.instagram.com/corretoraclaudiacarlini/?g=5",
  whatsappLabel: "WhatsApp a confirmar",
  creciLabel: "CRECI: confirmar com a cliente",
  moralesUrl: "#",
  nav: [
    { label: "Início", href: "/" },
    { label: "Imóveis", href: "/imoveis" },
    { label: "Lançamentos", href: "/#lancamentos" },
    { label: "Investidores", href: "/#investidores" },
    { label: "Sobre", href: "/#sobre" },
    { label: "Contato", href: "/#contato" },
  ],
  seo: {
    title: "Cláudia Carlini | Consultoria Imobiliária",
    description:
      "Consultoria imobiliária personalizada para quem busca empreendimentos em Campinas, lançamentos, entrega prevista e oportunidades para investir.",
  },
};

export const brandTokens = {
  colors: {
    deep: "3 3 3",
    deepSoft: "18 17 15",
    ink: "18 17 15",
    background: "248 246 241",
    surface: "255 252 247",
    pearl: "255 255 255",
    muted: "112 106 95",
    line: "222 216 205",
    accent: "194 169 118",
    accentSoft: "241 231 211",
  },
  fonts: {
    body: "Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, sans-serif",
    display: "Didot, Bodoni 72, Cormorant Garamond, Georgia, serif",
  },
};
