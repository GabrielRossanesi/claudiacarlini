import type { Property } from "@/data/properties";
import { PropertyCard } from "@/components/properties/PropertyCard";

type PropertyGridProps = {
  properties: Property[];
  emptyTitle?: string;
};

export function PropertyGrid({ properties, emptyTitle = "Nenhum empreendimento encontrado" }: PropertyGridProps) {
  if (properties.length === 0) {
    return (
      <div className="rounded-site border border-dashed border-line bg-surface p-10 text-center">
        <p className="display-font text-3xl">{emptyTitle}</p>
        <p className="mt-3 text-sm text-muted">Ajuste os filtros ou fale com a Cláudia para uma busca personalizada.</p>
      </div>
    );
  }

  return (
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3 items-stretch">
      {properties.map((property) => (
        <PropertyCard key={property.id} property={property} />
      ))}
    </div>
  );
}
