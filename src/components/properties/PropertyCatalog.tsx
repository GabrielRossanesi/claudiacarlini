"use client";

import { useMemo, useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
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

function normalizeProfileParam(param: string | null): string {
  if (!param) return "";
  const p = param.toLowerCase();
  if (p === "lancamento" || p === "lancamentos" || p === "lançamento") return "Lançamentos";
  if (p === "entrega-prevista") return "Entrega prevista";
  if (p === "pronto-para-morar" || p === "prontos-para-morar") return "Prontos para morar";
  if (p === "investimento" || p === "investidores" || p === "investidor") return "Investimento";
  return param;
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

const tabs = [
  { label: "Todos", value: "" },
  { label: "Lançamentos", value: "Lançamentos" },
  { label: "Entrega prevista", value: "Entrega prevista" },
  { label: "Prontos para morar", value: "Prontos para morar" },
  { label: "Investidores", value: "Investimento" },
];

export function PropertyCatalog({ properties }: PropertyCatalogProps) {
  const searchParams = useSearchParams();

  // Read search parameters initially & memoize them
  const initialFiltersFromUrl = useMemo(() => {
    const city = searchParams.get("city") || "";
    const neighborhood = searchParams.get("neighborhood") || "";
    const profile = normalizeProfileParam(
      searchParams.get("profile") || searchParams.get("status") || searchParams.get("perfil")
    );
    return { city, neighborhood, profile };
  }, [searchParams]);

  const [filters, setFilters] = useState<PropertyFilterState>(() => initialFiltersFromUrl);

  // Keep state updated if URL query parameters change (like clicking menu links)
  useEffect(() => {
    setFilters(initialFiltersFromUrl);
  }, [initialFiltersFromUrl]);

  const filteredProperties = useMemo(() => filterProperties(properties, filters), [filters, properties]);
  const cities = useMemo(() => unique(properties.map((property) => property.city)), [properties]);
  const neighborhoods = useMemo(() => unique(properties.map((property) => property.neighborhood)), [properties]);
  const profiles = useMemo(() => {
    const available = unique(
      properties.flatMap((property) => [property.category, property.status, ...property.tags])
    );
    return [
      ...preferredProfiles.filter((profile) => available.includes(profile)),
      ...available.filter((profile) => !preferredProfiles.includes(profile)),
    ];
  }, [properties]);

  // Pagination states
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9;

  // Whenever filters change, reset back to page 1
  useEffect(() => {
    setCurrentPage(1);
  }, [filters]);

  const totalPages = Math.ceil(filteredProperties.length / itemsPerPage);
  const paginatedProperties = useMemo(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    return filteredProperties.slice(startIndex, startIndex + itemsPerPage);
  }, [filteredProperties, currentPage]);

  return (
    <div className="grid gap-8">
      {/* Dynamic Dropdown Filters */}
      <PropertyFilters
        filters={filters}
        cities={cities}
        neighborhoods={neighborhoods}
        profiles={profiles}
        onChange={setFilters}
      />

      {/* Categories/Abas Pill Selection */}
      <div className="flex flex-wrap gap-2 border-b border-line/60 pb-5">
        {tabs.map((tab) => {
          const isActive = filters.profile === tab.value;
          return (
            <button
              key={tab.label}
              type="button"
              className={[
                "px-5 py-2.5 rounded-full text-sm font-semibold tracking-wide transition duration-200 border",
                isActive
                  ? "bg-accent border-accent text-deep shadow-gold font-bold"
                  : "bg-surface border-line text-muted hover:border-accentSoft hover:text-ink",
              ].join(" ")}
              onClick={() => setFilters((prev) => ({ ...prev, profile: tab.value }))}
            >
              {tab.label}
            </button>
          );
        })}
      </div>

      {/* Search Header / Result Info */}
      <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="eyebrow">Catálogo</p>
          <h2 className="display-font mt-2 text-4xl">{filteredProperties.length} empreendimento(s) encontrado(s)</h2>
        </div>
        <button
          type="button"
          className="text-sm font-bold text-muted hover:text-ink outline-none transition"
          onClick={() => setFilters(initialFilters)}
        >
          Limpar filtros
        </button>
      </div>

      {/* Paginated Property Grid */}
      <PropertyGrid properties={paginatedProperties} />

      {/* Elegant Pagination Control */}
      {totalPages > 1 ? (
        <div className="flex items-center justify-center gap-3 mt-10">
          <button
            type="button"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-line bg-surface transition hover:border-accent hover:text-accent disabled:opacity-30 disabled:pointer-events-none"
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
            aria-label="Página anterior"
          >
            ←
          </button>

          <div className="flex items-center gap-1.5">
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => {
              const isPageActive = currentPage === page;
              return (
                <button
                  key={page}
                  type="button"
                  className={[
                    "flex h-11 w-11 items-center justify-center rounded-full border text-sm font-semibold transition duration-200",
                    isPageActive
                      ? "bg-accent border-accent text-deep shadow-gold font-bold"
                      : "bg-surface border-line text-muted hover:border-accent hover:text-ink",
                  ].join(" ")}
                  onClick={() => setCurrentPage(page)}
                >
                  {page}
                </button>
              );
            })}
          </div>

          <button
            type="button"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-line bg-surface transition hover:border-accent hover:text-accent disabled:opacity-30 disabled:pointer-events-none"
            onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
            disabled={currentPage === totalPages}
            aria-label="Próxima página"
          >
            →
          </button>
        </div>
      ) : null}
    </div>
  );
}
