export type PropertyStatus =
  | "Lançamento"
  | "Entrega prevista"
  | "Pronto para morar";

export type PropertyCategory =
  | "Lançamentos"
  | "Entrega prevista"
  | "Prontos para morar"
  | "Investimento";

export type Property = {
  id: string;
  slug: string;
  title: string;
  city: string;
  neighborhood: string;
  address?: string;
  status: PropertyStatus;
  category: PropertyCategory;
  description: string;
  shortDescription: string;
  fullDescription: string;
  priceLabel: string;
  area: string;
  bedrooms: number | string | null;
  suites: number | string | null;
  parkingSpaces: number | string | null;
  propertyType: string;
  images: string[];
  features: string[];
  highlights: string[];
  floorPlans?: string[];
  deliveryLabel?: string;
  availabilityNote?: string;
  isFeatured: boolean;
  featuredTag?: string;
  tags: string[];
};

const assetPath = (path: string) => `${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}${path}`;

export const properties: Property[] = [
  {
    id: "gallery-cambui-residence",
    slug: "gallery-cambui-residence",
    title: "Gallery Cambuí Residence",
    city: "Campinas",
    neighborhood: "Cambuí",
    status: "Lançamento",
    category: "Lançamentos",
    description:
      "Empreendimento inspirado em grandes galerias de arte, com arquitetura contemporânea, bem-estar e localização privilegiada no Cambuí, próximo à Norte-Sul.",
    shortDescription:
      "Lançamento no Cambuí com inspiração em galerias de arte, arquitetura contemporânea e foco em qualidade de vida.",
    fullDescription:
      "O Gallery Cambuí Residence nasce com uma proposta residencial inspirada em grandes galerias de arte. O empreendimento combina arquitetura contemporânea, bem-estar, qualidade de vida e uma localização privilegiada no Cambuí, próximo à Norte-Sul.",
    priceLabel: "Sob consulta",
    area: "Informações sob consulta",
    bedrooms: null,
    suites: null,
    parkingSpaces: null,
    propertyType: "Residencial",
    images: [assetPath("/img/properties/gallery/cover.svg")],
    features: [
      "Empreendimento residencial",
      "Localização no Cambuí",
      "Próximo à Norte-Sul",
      "Arquitetura contemporânea",
    ],
    highlights: [
      "Acabou de lançar",
      "Conceito inspirado em galerias de arte",
      "Foco em bem-estar e qualidade de vida",
    ],
    isFeatured: true,
    featuredTag: "Acabou de lançar",
    tags: ["Lançamentos", "Acabou de lançar", "Cambuí", "Campinas"],
  },
  {
    id: "belgravia-nova-campinas",
    slug: "belgravia-nova-campinas",
    title: "Belgravia Nova Campinas",
    city: "Campinas",
    neighborhood: "Nova Campinas",
    status: "Lançamento",
    category: "Lançamentos",
    description:
      "Empreendimento com conceito atemporal inspirado no bairro londrino Belgravia, unindo sofisticação, tradição, modernidade, conforto e bom gosto.",
    shortDescription:
      "Lançamento em Nova Campinas com linguagem atemporal e inspiração no bairro londrino Belgravia.",
    fullDescription:
      "O Belgravia Nova Campinas apresenta um conceito atemporal inspirado no bairro londrino Belgravia. A proposta valoriza sofisticação, tradição, modernidade, conforto e bom gosto em um produto residencial de presença elegante.",
    priceLabel: "Sob consulta",
    area: "Informações sob consulta",
    bedrooms: null,
    suites: null,
    parkingSpaces: null,
    propertyType: "Residencial",
    images: [assetPath("/img/properties/belgravia/cover.svg")],
    features: [
      "Empreendimento residencial",
      "Localização em Nova Campinas",
      "Conceito atemporal",
      "Projeto com proposta sofisticada",
    ],
    highlights: [
      "Acabou de lançar",
      "Inspiração londrina",
      "Tradição, modernidade e conforto",
    ],
    isFeatured: true,
    featuredTag: "Acabou de lançar",
    tags: ["Lançamentos", "Acabou de lançar", "Nova Campinas", "Campinas"],
  },
  {
    id: "alto-das-mansoes",
    slug: "alto-das-mansoes",
    title: "Alto das Mansões",
    city: "Campinas",
    neighborhood: "Santa Cândida",
    address: "Rua Prof. Luiz de Pádua, 185",
    status: "Lançamento",
    category: "Investimento",
    description:
      "Residencial moderno com studios inteligentes e duplex na cobertura, próximo à Unicamp, PUC-Campinas e polos de tecnologia.",
    shortDescription:
      "Lançamento com studios e duplex, parceria Housi e perfil interessante para investidores e locação flexível.",
    fullDescription:
      "O Alto das Mansões é um residencial moderno voltado para praticidade, mobilidade e qualidade de vida. Localizado em Santa Cândida, fica próximo à Unicamp, PUC-Campinas e polos de tecnologia. O produto reúne studios inteligentes e apartamentos duplex com 2 quartos na cobertura, além de parceria com a Housi, tornando-se uma opção interessante para investidores e locação flexível.",
    priceLabel: "Sob consulta",
    area: "30,58 a 62,04 m²",
    bedrooms: "Studio e 2 dormitórios",
    suites: null,
    parkingSpaces: "Sob consulta",
    propertyType: "Studios e duplex",
    images: [assetPath("/img/properties/alto-das-mansoes/cover.svg")],
    features: [
      "188 unidades residenciais",
      "177 studios",
      "4 studios com sky garden",
      "7 apartamentos duplex",
      "Parceria com a Housi",
    ],
    highlights: [
      "Acabou de lançar",
      "Perfil para investimento",
      "Potencial para locação flexível",
      "Próximo a universidades e polos de tecnologia",
    ],
    floorPlans: [
      "Studios de aproximadamente 30,58 a 31,02 m²",
      "Duplex de aproximadamente 62,04 m²",
      "Duplex com 2 quartos na cobertura",
    ],
    isFeatured: true,
    featuredTag: "Investimento",
    tags: ["Lançamentos", "Investimento", "Acabou de lançar", "Santa Cândida", "Campinas", "Studios"],
  },
  {
    id: "hox-cambui",
    slug: "hox-cambui",
    title: "HOX Cambuí",
    city: "Campinas",
    neighborhood: "Cambuí",
    status: "Lançamento",
    category: "Investimento",
    description:
      "Empreendimento no Cambuí com apartamentos, studios e lofts, plantas inteligentes e proposta de exclusividade, praticidade e conveniência.",
    shortDescription:
      "Studios, apartamentos e lofts no Cambuí, com plantas inteligentes e localização premium.",
    fullDescription:
      "O HOX Cambuí foi pensado para um público que valoriza conforto, serviços e localização premium. O empreendimento reúne apartamentos, studios e lofts com plantas inteligentes, em uma proposta de exclusividade, praticidade e conveniência no Cambuí.",
    priceLabel: "A partir de R$ 606.655,61",
    area: "31,04 a 83,50 m²",
    bedrooms: "1 a 2 dormitórios",
    suites: "Até 2 suítes",
    parkingSpaces: "Sob consulta",
    propertyType: "Studios, apartamentos e lofts",
    images: [assetPath("/img/properties/hox/cover.svg")],
    features: [
      "76 unidades",
      "6 tipos de plantas",
      "Studios, apartamentos e lofts",
      "Plantas inteligentes",
      "Localização premium no Cambuí",
    ],
    highlights: [
      "Acabou de lançar",
      "Perfil para investimento",
      "Conveniência, serviços e praticidade",
      "Valores sujeitos à disponibilidade e confirmação",
    ],
    floorPlans: [
      "Studio ONE: 31,04 m², 1 dormitório, a partir de R$ 606.655,61",
      "Studio FIT: 38,68 m², 1 suíte + lavabo, a partir de R$ 717.449,91",
      "Apartamento FLEX: 58,51 m², 2 dormitórios ou 1 suíte com sala estendida, a partir de R$ 907.422,52",
      "Apartamento EDGE: 61,84 m², 2 suítes, a partir de R$ 1.039.830,51",
      "UP Duplex: 56 m², 2 dormitórios sendo 1 suíte, a partir de R$ 999.635,20",
      "MAX: 83,50 m², 2 dormitórios sendo 1 suíte com closet, a partir de R$ 1.374.758,36",
    ],
    availabilityNote:
      "Valores de referência sujeitos à disponibilidade das unidades e confirmação com a incorporadora.",
    isFeatured: true,
    featuredTag: "Investimento",
    tags: ["Lançamentos", "Investimento", "Acabou de lançar", "Cambuí", "Campinas", "Studios", "Lofts"],
  },
  {
    id: "luce-cambui",
    slug: "luce-cambui",
    title: "Luce Cambuí",
    city: "Campinas",
    neighborhood: "Cambuí",
    address: "Rua Américo Brasiliense, 443",
    status: "Entrega prevista",
    category: "Entrega prevista",
    description:
      "Empreendimento no Cambuí com conceito acolhedor, infraestrutura completa ao redor e plantas de 85 m² e 110 m².",
    shortDescription:
      "Apartamentos no Cambuí para quem busca viver em definitivo no bairro, com entrega prevista para setembro de 2026.",
    fullDescription:
      "O Luce Cambuí apresenta um conceito acolhedor, voltado para quem busca viver em definitivo no Cambuí. O empreendimento fica em uma região com infraestrutura completa ao redor e oferece plantas de 85 m² e 110 m².",
    priceLabel: "Sob consulta",
    area: "85 e 110 m²",
    bedrooms: 3,
    suites: "1 a 3 suítes",
    parkingSpaces: 2,
    propertyType: "Apartamentos",
    images: [assetPath("/img/properties/luce/cover.svg")],
    features: [
      "Área do terreno: 3.382,71 m²",
      "136 unidades",
      "2 vagas",
      "Depósito privativo",
      "Infraestrutura completa no entorno",
    ],
    highlights: [
      "Entrega em setembro de 2026",
      "Conceito acolhedor",
      "Endereço no Cambuí",
      "Plantas para moradia definitiva",
    ],
    floorPlans: [
      "85 m², 3 dormitórios, sendo 1 suíte, 2 vagas e 1 depósito privativo",
      "110 m², 3 suítes, 2 vagas e 1 depósito privativo",
    ],
    deliveryLabel: "Entrega em setembro de 2026",
    isFeatured: true,
    featuredTag: "Entrega 2026",
    tags: ["Entrega prevista", "Cambuí", "Campinas", "Apartamentos"],
  },
  {
    id: "intento-cambui",
    slug: "intento-cambui",
    title: "Intento Cambuí",
    city: "Campinas",
    neighborhood: "Cambuí",
    address: "Rua Diogo Prado, 276",
    status: "Entrega prevista",
    category: "Entrega prevista",
    description:
      "Empreendimento no Cambuí com localização privilegiada, opções de plantas de 90 m² e 120 m² e conceito voltado ao viver bem.",
    shortDescription:
      "Apartamentos no Cambuí com plantas de 90 m² e 120 m², até 3 suítes e entrega prevista para março de 2027.",
    fullDescription:
      "O Intento Cambuí reúne localização privilegiada, diversas opções de planta e um conceito voltado ao viver bem. O empreendimento conta com plantas de 90 m² e 120 m², com configurações de até 3 suítes.",
    priceLabel: "Sob consulta",
    area: "90 e 120 m²",
    bedrooms: "Sob consulta",
    suites: "Até 3 suítes",
    parkingSpaces: "Sob consulta",
    propertyType: "Apartamentos",
    images: [assetPath("/img/properties/intento/cover.svg")],
    features: [
      "Plantas de 90 m²",
      "Plantas de 120 m²",
      "Até 3 suítes",
      "Localização privilegiada no Cambuí",
    ],
    highlights: [
      "Entrega prevista para março de 2027",
      "Diversas opções de planta",
      "Conceito voltado ao viver bem",
      "Endereço no Cambuí",
    ],
    floorPlans: [
      "90 m²",
      "120 m²",
      "Configurações com até 3 suítes",
    ],
    deliveryLabel: "Entrega prevista para março de 2027",
    isFeatured: true,
    featuredTag: "Entrega 2027",
    tags: ["Entrega prevista", "Cambuí", "Campinas", "Apartamentos"],
  },
  {
    id: "grand-paysage",
    slug: "grand-paysage",
    title: "Grand Paysage",
    city: "Campinas",
    neighborhood: "Informações sob consulta",
    status: "Pronto para morar",
    category: "Prontos para morar",
    description:
      "Empreendimento pronto para morar. Dados comerciais completos serão atualizados após o recebimento do material final da cliente.",
    shortDescription:
      "Pronto para morar em Campinas, com informações comerciais sob consulta.",
    fullDescription:
      "O Grand Paysage entra no catálogo como imóvel pronto para morar. Como o material completo ainda será confirmado com a cliente, endereço, metragem, dormitórios, vagas, valores e demais condições permanecem como informações sob consulta.",
    priceLabel: "Sob consulta",
    area: "Informações sob consulta",
    bedrooms: null,
    suites: null,
    parkingSpaces: null,
    propertyType: "Residencial",
    images: [
      assetPath("/img/properties/grand-paysage/grand-paysage-1.jpeg"),
      assetPath("/img/properties/grand-paysage/grand-paysage-2.jpeg"),
      assetPath("/img/properties/grand-paysage/grand-paysage-3.jpeg"),
      assetPath("/img/properties/grand-paysage/grand-paysage-4.jpeg"),
      assetPath("/img/properties/grand-paysage/grand-paysage-5.jpeg"),
      assetPath("/img/properties/grand-paysage/grand-paysage-6.jpeg"),
    ],
    features: [
      "Pronto para morar",
      "Informações comerciais sob consulta",
      "Material completo em atualização",
    ],
    highlights: [
      "Disponibilidade sob consulta",
      "Dados provisórios",
      "Sem valores, metragens ou endereço informados no momento",
    ],
    availabilityNote:
      "Informações de endereço, metragem, dormitórios, vagas, valores e disponibilidade serão confirmadas com a cliente antes da divulgação comercial completa.",
    isFeatured: false,
    featuredTag: "Pronto para morar",
    tags: ["Prontos para morar", "Campinas", "Informações sob consulta"],
  },
];

export const featuredProperties = properties.filter((property) => property.isFeatured);

export function getPropertyBySlug(slug: string) {
  return properties.find((property) => property.slug === slug);
}

export function getRelatedProperties(property: Property) {
  const sameCategory = properties.filter(
    (item) => item.slug !== property.slug && item.category === property.category,
  );
  const sameNeighborhood = properties.filter(
    (item) =>
      item.slug !== property.slug &&
      item.neighborhood === property.neighborhood &&
      !sameCategory.some((related) => related.slug === item.slug),
  );
  const fallback = properties.filter(
    (item) =>
      item.slug !== property.slug &&
      !sameCategory.some((related) => related.slug === item.slug) &&
      !sameNeighborhood.some((related) => related.slug === item.slug),
  );

  return [...sameCategory, ...sameNeighborhood, ...fallback].slice(0, 3);
}
