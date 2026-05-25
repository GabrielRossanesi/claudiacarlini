"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import type { Property } from "@/data/properties";
import { PropertyFilters, type PropertyFilterState } from "@/components/properties/PropertyFilters";
import { PropertyGrid } from "@/components/properties/PropertyGrid";

type HomePropertySearchProps = {
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

const preferredProfiles = ["Lançamentos", "Prontos para morar", "Entrega prevista", "Investimento"];

export function HomePropertySearch({ properties }: HomePropertySearchProps) {
  const [filters, setFilters] = useState(initialFilters);
  const [hasSearched, setHasSearched] = useState(false);

  const filteredProperties = useMemo(() => {
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
  }, [filters, properties]);

  const visibleProperties = hasSearched ? filteredProperties.slice(0, 3) : properties.filter((item) => item.isFeatured).slice(0, 3);
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
    <section className="section-y bg-background">
      <div className="site-shell grid gap-9">
        <div className="grid gap-4 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <div>
            <p className="eyebrow">Busca consultiva</p>
            <h2 className="display-font mt-3 text-4xl leading-tight sm:text-5xl">Encontre o empreendimento certo.</h2>
          </div>
          <p className="max-w-2xl text-base leading-8 text-muted lg:ml-auto">
            Filtre por cidade, bairro e perfil. A seleção inicial traz lançamentos no Cambuí e Nova Campinas,
            oportunidades para investidores e empreendimentos com entrega prevista.
          </p>
        </div>

        <PropertyFilters
          filters={filters}
          cities={cities}
          neighborhoods={neighborhoods}
          profiles={profiles}
          onChange={setFilters}
          onSubmit={() => setHasSearched(true)}
        />

        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-muted">
            {hasSearched ? `${filteredProperties.length} resultado(s) para a busca` : "Imóveis em destaque"}
          </p>
          <Link href="/imoveis" className="text-sm font-bold text-ink hover:text-accent">
            Ver catálogo completo
          </Link>
        </div>

        <PropertyGrid properties={visibleProperties} />
      </div>
    </section>
  );
}
