import Link from "next/link";
import type { Property } from "@/data/properties";
import { getPropertyWhatsAppLink } from "@/lib/whatsapp";

type PropertyCardProps = {
  property: Property;
};

export function PropertyCard({ property }: PropertyCardProps) {
  return (
    <article className="group overflow-hidden rounded-site border border-line/80 bg-surface shadow-soft transition duration-300 hover:-translate-y-1 hover:border-accent/50 hover:shadow-lift">
      <Link href={`/imoveis/${property.slug}`} className="block">
        <div className="relative aspect-[4/3] overflow-hidden bg-accentSoft">
          <img
            src={property.images[0]}
            alt={property.title}
            className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
          />
          <div className="absolute left-4 top-4 flex flex-wrap gap-2">
            <span className="rounded-full bg-deep/78 px-3 py-1 text-xs font-bold text-pearl backdrop-blur-md">
              {property.status}
            </span>
            {property.featuredTag ? (
              <span className="rounded-full bg-accent px-3 py-1 text-xs font-bold text-deep shadow-gold">
                {property.featuredTag}
              </span>
            ) : null}
          </div>
        </div>
      </Link>

      <div className="grid gap-5 p-5">
        <div>
          <p className="text-xs uppercase tracking-[0.18em] text-muted">
            {property.neighborhood}, {property.city}
          </p>
          <Link href={`/imoveis/${property.slug}`}>
            <h3 className="display-font mt-2 text-2xl leading-tight transition group-hover:text-accent">
              {property.title}
            </h3>
          </Link>
          <p className="mt-3 line-clamp-2 text-sm leading-6 text-muted">{property.shortDescription}</p>
        </div>

        <div className="grid grid-cols-2 gap-3 border-y border-line/90 py-4 text-sm">
          <span>
            <strong className="block text-ink">{property.area}</strong>
            <span className="text-muted">Metragem</span>
          </span>
          <span>
            <strong className="block text-ink">{property.bedrooms ?? "Sob consulta"}</strong>
            <span className="text-muted">Dormitórios</span>
          </span>
          <span>
            <strong className="block text-ink">{property.propertyType}</strong>
            <span className="text-muted">Tipo</span>
          </span>
          <span>
            <strong className="block text-ink">{property.priceLabel}</strong>
            <span className="text-muted">Valor</span>
          </span>
        </div>

        <div className="flex flex-col gap-3 sm:flex-row">
          <Link className="button-dark flex-1" href={`/imoveis/${property.slug}`}>
            Ver detalhes
          </Link>
          <a className="button-primary flex-1" href={getPropertyWhatsAppLink(property.title)} target="_blank">
            Tenho interesse
          </a>
        </div>
      </div>
    </article>
  );
}
