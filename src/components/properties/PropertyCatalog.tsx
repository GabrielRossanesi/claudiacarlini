"use client";

import { useMemo, useState } from "react";
import type { Property } from "@/data/properties";
import { PropertyFilters, type PropertyFilterState } from "@/components/properties/PropertyFilters";
import { PropertyGrid } from "@/components/properties/PropertyGrid";

type PropertyCatalogProps = {
  properties: Property[];
};

const initialFilters: PropertyFilterState = {
  city: "",
  neighborhood: "",
  profile: "",
};

function unique<T>(items: T[]) {
  return Array.from(new Set(items));
}

function filterProperties(properties: Property[], filters: PropertyFilterState) {
  return properties.filter((property) => {
    const cityMatch = !filters.city || property.city === filters.city;
    const neighborhoodMatch = !filters.neighborhood || property.neighborhood === filters.neighborhood;
    const profileMatch =
      !filters.profile ||
      property.status === filters.profile ||
      property.category === filters.profile ||
      property.tags.includes(filters.profile);
    return cityMatch && neighborhoodMatch && profileMatch;
  });
}

const preferredProfiles = ["Lançamentos", "Prontos para morar", "Entrega prevista", "Investimento"];

export function PropertyCatalog({ properties }: PropertyCatalogProps) {
  const [filters, setFilters] = useState(initialFilters);
  const filteredProperties = useMemo(() => filterProperties(properties, filters), [filters, properties]);
  const cities = useMemo(() => unique(properties.map((property) => property.city)), [properties]);
  const neighborhoods = useMemo(() => unique(properties.map((property) => property.neighborhood)), [properties]);
  const profiles = useMemo(() => {
    const available = unique(
      properties.flatMap((property) => [property.category, property.status, ...property.tags]),
    );
    return [
      ...preferredProfiles.filter((profile) => available.includes(profile)),
      ...available.filter((profile) => !preferredProfiles.includes(profile)),
    ];
  }, [properties]);

  return (
    <div className="grid gap-8">
      <PropertyFilters
        filters={filters}
        cities={cities}
        neighborhoods={neighborhoods}
        profiles={profiles}
        onChange={setFilters}
      />
      <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="eyebrow">Catálogo</p>
          <h2 className="display-font mt-2 text-4xl">{filteredProperties.length} empreendimentos encontrados</h2>
        </div>
        <button type="button" className="text-sm font-bold text-muted hover:text-ink" onClick={() => setFilters(initialFilters)}>
          Limpar filtros
        </button>
      </div>
      <PropertyGrid properties={filteredProperties} />
    </div>
  );
}
