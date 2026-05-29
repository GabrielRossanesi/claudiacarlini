import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { getPropertyBySlug, getRelatedProperties, properties, testProperties } from "@/data/properties";
import { PropertyGrid } from "@/components/properties/PropertyGrid";
import { PropertyPhotoShowcase } from "@/components/properties/PropertyPhotoShowcase";
import { getPropertyWhatsAppLink } from "@/lib/whatsapp";
import { PremiumSectionTitle } from "@/components/site/PremiumSectionTitle";

type PropertyPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return [...properties, ...testProperties].map((property) => ({ slug: property.slug }));
}

export async function generateMetadata({ params }: PropertyPageProps): Promise<Metadata> {
  const { slug } = await params;
  const property = getPropertyBySlug(slug);

  if (!property) {
    return {
      title: "Imóvel não encontrado | Cláudia Carlini",
    };
  }

  return {
    title: `${property.title} | Cláudia Carlini`,
    description: property.description,
    openGraph: {
      title: `${property.title} | Cláudia Carlini`,
      description: property.description,
      images: [{ url: property.images[0], width: 1200, height: 630, alt: property.title }],
    },
  };
}

export default async function PropertyPage({ params }: PropertyPageProps) {
  const { slug } = await params;
  const property = getPropertyBySlug(slug);

  if (!property) {
    notFound();
  }

  const relatedProperties = getRelatedProperties(property);

  return (
    <>
      {/* Galeria no Topo */}
      <PropertyPhotoShowcase title={property.title} slug={property.slug} images={property.images} />

      {/* Conteúdo Principal em Fundo Off-White */}
      <section className="bg-background pb-20 pt-8 sm:pb-24 sm:pt-10">
        <div className="site-shell">
          {/* Breadcrumb */}
          <div className="mb-6">
            <Link
              href="/imoveis"
              className="inline-flex items-center text-xs font-bold text-muted hover:text-accent transition duration-200 gap-1.5 uppercase tracking-wider"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2.5}
                stroke="currentColor"
                className="w-3.5 h-3.5"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
              </svg>
              Voltar para empreendimentos
            </Link>
          </div>

          {/* Grid Geral de Duas Colunas */}
          <div className="grid gap-10 lg:grid-cols-[1fr_380px] items-start">
            {/* Coluna Esquerda: Informações e Seções */}
            <div className="grid gap-10">
              {/* Bloco de Título e Descrição Curta */}
              <div>
                <div className="flex flex-wrap gap-2 items-center mb-3">
                  <span className="rounded-full border border-accent/20 bg-accentSoft/35 px-3 py-1 text-[10px] font-extrabold uppercase tracking-wider text-accent">
                    {property.status}
                  </span>
                  <span className="text-xs font-semibold text-muted">
                    {property.neighborhood} · {property.city}
                  </span>
                </div>
                <h1 className="display-font text-4xl leading-tight sm:text-5xl lg:text-6xl text-ink font-normal">
                  {property.title}
                </h1>
                {property.address ? (
                  <p className="mt-2.5 text-sm text-muted/85 flex items-center gap-1.5">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.8}
                      stroke="currentColor"
                      className="w-4 h-4 text-accent"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                      />
                    </svg>
                    {property.address}
                  </p>
                ) : null}
                <p className="mt-4 text-lg leading-relaxed text-muted font-medium">{property.shortDescription}</p>
              </div>

              {/* Badges de Informações Principais */}
              <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5 border-y border-line py-6">
                <div className="rounded-xl border border-line bg-surface p-4 text-center sm:text-left transition hover:border-accent/40">
                  <span className="text-[10px] uppercase tracking-wider text-muted block mb-1">Metragem</span>
                  <strong className="text-sm sm:text-base text-ink block truncate">{property.area}</strong>
                </div>
                <div className="rounded-xl border border-line bg-surface p-4 text-center sm:text-left transition hover:border-accent/40">
                  <span className="text-[10px] uppercase tracking-wider text-muted block mb-1">Dormitórios</span>
                  <strong className="text-sm sm:text-base text-ink block truncate">
                    {property.bedrooms ?? "Sob consulta"}
                  </strong>
                </div>
                <div className="rounded-xl border border-line bg-surface p-4 text-center sm:text-left transition hover:border-accent/40">
                  <span className="text-[10px] uppercase tracking-wider text-muted block mb-1">Suítes</span>
                  <strong className="text-sm sm:text-base text-ink block truncate">
                    {property.suites ?? "Sob consulta"}
                  </strong>
                </div>
                <div className="rounded-xl border border-line bg-surface p-4 text-center sm:text-left transition hover:border-accent/40">
                  <span className="text-[10px] uppercase tracking-wider text-muted block mb-1">Tipo</span>
                  <strong className="text-sm sm:text-base text-ink block truncate">{property.propertyType}</strong>
                </div>
                <div className="rounded-xl border border-line bg-surface p-4 text-center sm:text-left transition hover:border-accent/40 col-span-2 sm:col-span-1">
                  <span className="text-[10px] uppercase tracking-wider text-muted block mb-1">Valor</span>
                  <strong className="text-sm sm:text-base text-accent block truncate">{property.priceLabel}</strong>
                </div>
              </div>

              {/* Seção: Sobre o Empreendimento */}
              <div className="grid gap-4">
                <PremiumSectionTitle
                  title="Sobre o Empreendimento"
                  theme="light"
                  intensity="subtle"
                  titleAs="h2"
                  align="left"
                  className="mb-1"
                />
                <div className="text-base leading-relaxed text-muted space-y-4 whitespace-pre-line font-normal">
                  {property.fullDescription}
                </div>
              </div>

              {/* Seção: Características e Diferenciais */}
              <div className="grid gap-6 md:grid-cols-2">
                <div className="rounded-2xl border border-line bg-surface p-6 shadow-soft transition hover:border-accent/20">
                  <h3 className="display-font text-xl text-ink border-b border-line pb-2 mb-4 font-normal">
                    Características
                  </h3>
                  <ul className="grid gap-3 text-sm text-muted">
                    {property.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2.5">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                        <span className="leading-tight">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="rounded-2xl border border-line bg-surface p-6 shadow-soft transition hover:border-accent/20">
                  <h3 className="display-font text-xl text-ink border-b border-line pb-2 mb-4 font-normal">
                    Diferenciais
                  </h3>
                  <ul className="grid gap-3 text-sm text-muted">
                    {property.highlights.map((highlight) => (
                      <li key={highlight} className="flex items-start gap-2.5">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                        <span className="leading-tight">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Seção: Plantas e Tipologias */}
              {property.floorPlans ||
              property.images.some(
                (img) =>
                  img.toLowerCase().includes("planta") ||
                  img.toLowerCase().includes("page-06") ||
                  img.toLowerCase().includes("planta-01"),
              ) ? (
                <div className="grid gap-4">
                  <PremiumSectionTitle
                    title="Plantas e Tipologias"
                    theme="light"
                    intensity="subtle"
                    titleAs="h2"
                    align="left"
                    className="mb-1"
                  />
                  {property.floorPlans ? (
                    <div className="grid gap-3 sm:grid-cols-2">
                      {property.floorPlans.map((plan) => (
                        <div
                          key={plan}
                          className="rounded-xl border border-line bg-surface p-4 text-sm font-semibold text-muted/90 flex items-center gap-2"
                        >
                          <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                          {plan}
                        </div>
                      ))}
                    </div>
                  ) : null}

                  {/* Localizador Automático de Imagem da Planta */}
                  {(() => {
                    const plantImage = property.images.find(
                      (img) =>
                        img.toLowerCase().includes("planta") ||
                        img.toLowerCase().includes("page-06") ||
                        img.toLowerCase().includes("planta-01"),
                    );

                    if (!plantImage) return null;

                    return (
                      <div className="mt-4 overflow-hidden rounded-[20px] border border-line bg-surface group transition hover:border-accent/40 shadow-soft">
                        <div className="relative aspect-[16/10] w-full">
                          <Image
                            src={plantImage}
                            alt={`Planta do empreendimento ${property.title}`}
                            fill
                            sizes="(min-width: 1024px) 58vw, 100vw"
                            className="object-cover transition duration-700 group-hover:scale-[1.015]"
                          />
                        </div>
                        <div className="bg-surface border-t border-line px-5 py-3.5 flex justify-between items-center">
                          <span className="text-xs font-bold text-muted uppercase tracking-wider">
                            Planta Ilustrativa
                          </span>
                          <Link
                            href={`/imoveis/${property.slug}/fotos`}
                            className="text-xs font-extrabold text-accent hover:text-ink transition duration-200 uppercase tracking-wider flex items-center gap-1"
                          >
                            Ver em alta definição
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth={2.5}
                              stroke="currentColor"
                              className="w-3 h-3"
                            >
                              <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
                            </svg>
                          </Link>
                        </div>
                      </div>
                    );
                  })()}
                </div>
              ) : null}

              {/* Seção: Localização */}
              <div className="grid gap-4">
                <PremiumSectionTitle
                  title="Localização"
                  theme="light"
                  intensity="subtle"
                  titleAs="h2"
                  align="left"
                  className="mb-1"
                />
                <div className="rounded-2xl border border-line bg-surface p-6 shadow-soft">
                  <div className="grid gap-6 sm:grid-cols-3">
                    <div>
                      <span className="text-[10px] uppercase tracking-wider text-muted block mb-1">Cidade</span>
                      <strong className="text-base text-ink">{property.city}</strong>
                    </div>
                    <div>
                      <span className="text-[10px] uppercase tracking-wider text-muted block mb-1">Bairro</span>
                      <strong className="text-base text-ink">{property.neighborhood}</strong>
                    </div>
                    <div>
                      <span className="text-[10px] uppercase tracking-wider text-muted block mb-1">Endereço</span>
                      <strong className="text-base text-ink">{property.address ?? "Informações sob consulta"}</strong>
                    </div>
                  </div>

                  {property.deliveryLabel ? (
                    <div className="mt-5 pt-4 border-t border-line/60 flex items-center gap-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                        stroke="currentColor"
                        className="w-4 h-4 text-accent shrink-0"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <p className="text-sm font-extrabold text-accent uppercase tracking-wider">
                        Previsão de entrega:{" "}
                        <span className="text-ink normal-case font-semibold">
                          {property.deliveryLabel
                            .replace("Entrega em ", "")
                            .replace("Entrega prevista para ", "")
                            .replace("Previsão de entrega ", "")}
                        </span>
                      </p>
                    </div>
                  ) : null}
                </div>
              </div>

              {/* Disclaimer */}
              <p className="text-[11px] leading-relaxed text-muted/60 mt-4 italic">
                * Valores, disponibilidade, metragens e condições comerciais estão sujeitos à confirmação.
              </p>
            </div>

            {/* Coluna Direita: Sticky Card de Atendimento (Desktop Only) */}
            <aside className="hidden lg:block h-fit rounded-[24px] border border-line bg-deep p-6 text-pearl shadow-lift sticky top-28">
              <span className="eyebrow text-accentSoft">Atendimento Consultivo</span>
              <h2 className="display-font mt-3 text-2xl leading-snug font-normal">
                Quer saber se este empreendimento faz sentido para você?
              </h2>
              <p className="mt-4 text-xs leading-relaxed text-pearl/[0.68]">
                Fale diretamente com a Cláudia Carlini para consultar condições, disponibilidades e agendar sua visita
                exclusiva.
              </p>

              <div className="mt-6 grid gap-3.5 border-y border-pearl/10 py-5 text-xs">
                <span className="flex justify-between gap-4">
                  <span className="text-pearl/[0.48]">Valor</span>
                  <strong className="text-accent">{property.priceLabel}</strong>
                </span>
                <span className="flex justify-between gap-4">
                  <span className="text-pearl/[0.48]">Status</span>
                  <strong>{property.status}</strong>
                </span>
                <span className="flex justify-between gap-4">
                  <span className="text-pearl/[0.48]">Tipo</span>
                  <strong>{property.propertyType}</strong>
                </span>
                {property.deliveryLabel ? (
                  <span className="flex justify-between gap-4">
                    <span className="text-pearl/[0.48]">Entrega</span>
                    <strong>
                      {property.deliveryLabel
                        .replace("Entrega em ", "")
                        .replace("Entrega prevista para ", "")
                        .replace("Previsão de entrega ", "")}
                    </strong>
                  </span>
                ) : null}
              </div>

              <a
                className="button-primary mt-6 w-full"
                href={getPropertyWhatsAppLink(property.title)}
                target="_blank"
                rel="noopener noreferrer"
              >
                Tenho interesse
              </a>
            </aside>

            {/* Mobile Inline Card (Entra no fluxo do mobile no final do conteúdo principal) */}
            <div className="lg:hidden h-fit rounded-[24px] border border-line bg-deep p-6 text-pearl shadow-lift mt-6">
              <span className="eyebrow text-accentSoft">Atendimento Consultivo</span>
              <h2 className="display-font mt-3 text-2xl leading-snug font-normal">
                Quer saber se este empreendimento faz sentido para você?
              </h2>
              <p className="mt-4 text-xs leading-relaxed text-pearl/[0.68]">
                Fale diretamente com a Cláudia Carlini para consultar condições, disponibilidades e agendar sua visita
                exclusiva.
              </p>
              <a
                className="button-primary mt-6 w-full"
                href={getPropertyWhatsAppLink(property.title)}
                target="_blank"
                rel="noopener noreferrer"
              >
                Tenho interesse
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Espaçador Mobile para não ser coberto pela barra fixa inferior */}
      <div className="h-20 lg:hidden" />

      {/* Seção de Relacionados */}
      <section className="section-y bg-surface border-t border-line">
        <div className="site-shell grid gap-8">
          <div>
            <PremiumSectionTitle
              kicker="Relacionados"
              title="Outras oportunidades para comparar"
              theme="light"
              intensity="default"
              titleAs="h2"
              align="left"
              className="mb-4"
            />
          </div>
          <PropertyGrid properties={relatedProperties} emptyTitle="Em breve, mais empreendimentos relacionados" />
        </div>
      </section>

      {/* Barra Fixa Mobile (Mobile-Only) */}
      <div className="fixed bottom-0 left-0 right-0 z-50 border-t border-line bg-surface/95 backdrop-blur-md px-5 py-3 flex items-center justify-between shadow-[0_-8px_30px_rgba(0,0,0,0.08)] lg:hidden">
        <div className="truncate pr-4">
          <p className="text-xs font-extrabold text-ink truncate uppercase tracking-wider">{property.title}</p>
          <p className="text-xs font-semibold text-accent mt-0.5">{property.priceLabel}</p>
        </div>
        <a
          className="button-primary shrink-0 min-h-[38px] py-1.5 px-4 text-xs font-extrabold shadow-sm"
          href={getPropertyWhatsAppLink(property.title)}
          target="_blank"
          rel="noopener noreferrer"
        >
          Contatar Cláudia
        </a>
      </div>
    </>
  );
}

