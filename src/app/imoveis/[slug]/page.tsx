import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getPropertyBySlug, getRelatedProperties, properties } from "@/data/properties";
import { PropertyGallery } from "@/components/properties/PropertyGallery";
import { PropertyGrid } from "@/components/properties/PropertyGrid";
import { getPropertyWhatsAppLink } from "@/lib/whatsapp";

type PropertyPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return properties.map((property) => ({ slug: property.slug }));
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
      <section className="relative min-h-[620px] overflow-hidden bg-deep py-10 text-pearl">
        <img
          src={property.images[0]}
          alt={property.title}
          className="absolute inset-0 h-full w-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-deep via-deep/76 to-deep/24" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_10%,rgb(var(--color-accent)/0.22),transparent_24rem)]" />
        <div className="site-shell grid gap-8">
          <Link href="/imoveis" className="relative text-sm font-bold text-pearl/58 hover:text-pearl">
            Voltar para empreendimentos
          </Link>
          <div className="relative grid min-h-[500px] gap-5 lg:grid-cols-[1fr_0.42fr] lg:items-end">
            <div>
              <p className="eyebrow text-accentSoft">
                {property.status} · {property.neighborhood}, {property.city}
              </p>
              <h1 className="display-font mt-3 text-5xl leading-tight sm:text-6xl">{property.title}</h1>
              <p className="mt-5 max-w-3xl text-lg leading-8 text-pearl/72">{property.shortDescription}</p>
              <div className="mt-7 flex flex-wrap gap-2">
                {property.tags.slice(0, 5).map((tag) => (
                  <span key={tag} className="rounded-full border border-pearl/18 bg-pearl/10 px-3 py-1 text-xs font-bold text-pearl/78">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <a className="button-primary lg:justify-self-end" href={getPropertyWhatsAppLink(property.title)} target="_blank">
              Tenho interesse neste empreendimento
            </a>
          </div>
        </div>
      </section>

      <section className="section-y bg-background">
        <div className="site-shell grid gap-10 lg:grid-cols-[1fr_360px]">
          <div className="grid gap-10">
            <div className="grid gap-8 rounded-site border border-line bg-surface p-6 shadow-soft sm:p-8">
              <div>
                <p className="eyebrow">Resumo</p>
                <p className="mt-4 text-lg leading-8 text-muted">{property.fullDescription}</p>
              </div>

              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {[
                  ["Área", property.area],
                  ["Dormitórios", property.bedrooms ?? "Sob consulta"],
                  ["Suítes", property.suites ?? "Sob consulta"],
                  ["Vagas", property.parkingSpaces ?? "Sob consulta"],
                ].map(([label, value]) => (
                  <div key={label} className="rounded-2xl border border-line bg-background/45 p-4">
                    <p className="text-xs uppercase tracking-[0.16em] text-muted">{label}</p>
                    <p className="mt-2 text-lg font-bold">{value}</p>
                  </div>
                ))}
              </div>

              {property.availabilityNote ? (
                <p className="rounded-2xl border border-accent/28 bg-accentSoft/45 p-4 text-sm font-semibold leading-6 text-ink">
                  {property.availabilityNote}
                </p>
              ) : null}
            </div>

            <div className="rounded-site border border-line bg-surface p-6 shadow-soft sm:p-8">
              <p className="eyebrow">Localização</p>
              <div className="mt-5 grid gap-4 sm:grid-cols-3">
                <div>
                  <p className="text-xs uppercase tracking-[0.16em] text-muted">Cidade</p>
                  <p className="mt-2 text-lg font-bold">{property.city}</p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.16em] text-muted">Bairro</p>
                  <p className="mt-2 text-lg font-bold">{property.neighborhood}</p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.16em] text-muted">Endereço</p>
                  <p className="mt-2 text-lg font-bold">{property.address ?? "Informações sob consulta"}</p>
                </div>
              </div>
              {property.deliveryLabel ? (
                <p className="mt-5 text-sm font-bold text-accent">{property.deliveryLabel}</p>
              ) : null}
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              <div className="rounded-site border border-line bg-surface p-6 shadow-soft">
                <p className="eyebrow">Características principais</p>
                <ul className="mt-5 grid gap-3 text-sm text-muted">
                  {property.features.map((feature) => (
                    <li key={feature} className="flex gap-3">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-accent" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-site border border-line bg-surface p-6 shadow-soft">
                <p className="eyebrow">Diferenciais</p>
                <ul className="mt-5 grid gap-3 text-sm text-muted">
                  {property.highlights.map((highlight) => (
                    <li key={highlight} className="flex gap-3">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-accent" />
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {property.floorPlans ? (
              <div className="rounded-site border border-line bg-surface p-6 shadow-soft">
                <p className="eyebrow">Plantas e tipologias</p>
                <div className="mt-5 grid gap-3 md:grid-cols-2">
                  {property.floorPlans.map((plan) => (
                    <div key={plan} className="rounded-2xl border border-line bg-background p-4 text-sm font-bold">
                      {plan}
                    </div>
                  ))}
                </div>
              </div>
            ) : null}

            <div>
              <p className="eyebrow">Galeria</p>
              <div className="mt-5">
                <PropertyGallery title={property.title} images={property.images} />
              </div>
              <p className="mt-6 text-xs leading-relaxed text-muted/68">
                * Valores, disponibilidade, metragens e condições comerciais estão sujeitos à confirmação.
              </p>
            </div>
          </div>

          <aside className="h-fit rounded-site border border-accent/20 bg-deep p-6 text-pearl shadow-lift lg:sticky lg:top-28">
            <p className="eyebrow text-accentSoft">Atendimento</p>
            <h2 className="display-font mt-3 text-3xl">Quer saber se este empreendimento faz sentido para você?</h2>
            <p className="mt-4 text-sm leading-7 text-pearl/66">
              Envie uma mensagem e receba orientação personalizada sobre valores, condições, disponibilidade e próximos passos.
            </p>
            <div className="mt-6 grid gap-3 border-y border-pearl/10 py-5 text-sm">
              <span className="flex justify-between gap-4">
                <span className="text-pearl/48">Valor</span>
                <strong>{property.priceLabel}</strong>
              </span>
              <span className="flex justify-between gap-4">
                <span className="text-pearl/48">Tipo</span>
                <strong>{property.propertyType}</strong>
              </span>
              <span className="flex justify-between gap-4">
                <span className="text-pearl/48">Status</span>
                <strong>{property.status}</strong>
              </span>
              {property.deliveryLabel ? (
                <span className="flex justify-between gap-4">
                  <span className="text-pearl/48">Entrega</span>
                  <strong>{property.deliveryLabel}</strong>
                </span>
              ) : null}
            </div>
            <a className="button-primary mt-6 w-full" href={getPropertyWhatsAppLink(property.title)} target="_blank">
              Tenho interesse
            </a>
          </aside>
        </div>
      </section>

      <section className="section-y bg-surface">
        <div className="site-shell grid gap-8">
          <div>
            <p className="eyebrow">Relacionados</p>
            <h2 className="display-font mt-3 text-4xl">Outras oportunidades para comparar</h2>
          </div>
          <PropertyGrid properties={relatedProperties} emptyTitle="Em breve, mais empreendimentos relacionados" />
        </div>
      </section>
    </>
  );
}
