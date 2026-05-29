import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getPropertyBySlug, properties, testProperties } from "@/data/properties";
import { PropertyPhotosGrid } from "@/components/properties/PropertyPhotosGrid";
import { PremiumSectionTitle } from "@/components/site/PremiumSectionTitle";

type PropertyPhotosPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return [...properties, ...testProperties].map((property) => ({ slug: property.slug }));
}

export async function generateMetadata({ params }: PropertyPhotosPageProps): Promise<Metadata> {
  const { slug } = await params;
  const property = getPropertyBySlug(slug);

  if (!property) {
    return {
      title: "Fotos do imóvel | Cláudia Carlini",
    };
  }

  return {
    title: `Fotos de ${property.title} | Cláudia Carlini`,
    description: property.description,
    openGraph: {
      title: `Fotos de ${property.title} | Cláudia Carlini`,
      description: property.description,
      images: [{ url: property.images[0], width: 1200, height: 630, alt: property.title }],
    },
  };
}

export default async function PropertyPhotosPage({ params }: PropertyPhotosPageProps) {
  const { slug } = await params;
  const property = getPropertyBySlug(slug);

  if (!property) {
    notFound();
  }

  return (
    <>
      <section className="bg-deep py-10 text-pearl sm:py-12">
        <div className="site-shell grid gap-6">
          <Link href={`/imoveis/${property.slug}`} className="text-sm font-bold text-pearl/[0.58] transition hover:text-pearl">
            Voltar para o imóvel
          </Link>

          <div className="grid gap-4 lg:grid-cols-[1fr_auto] lg:items-end">
            <PremiumSectionTitle
              kicker={`${property.neighborhood}, ${property.city}`}
              title={`Fotos de ${property.title}`}
              theme="dark"
              align="left"
              titleAs="h1"
            />
            <p className="text-sm font-bold text-pearl/[0.58]">
              {property.images.length} {property.images.length === 1 ? "foto" : "fotos"}
            </p>
          </div>
        </div>
      </section>

      <section className="section-y bg-deep border-t border-pearl/10">
        <div className="site-shell grid gap-8">
          <PropertyPhotosGrid title={property.title} images={property.images} />

          <p className="text-xs leading-relaxed text-pearl/[0.42] italic">
            * Imagens, valores, disponibilidade, metragens e condições comerciais estão sujeitos à confirmação.
          </p>
        </div>
      </section>
    </>
  );
}
