"use client";

import type { FormEvent } from "react";

export type PropertyFilterState = {
  city: string;
  neighborhood: string;
  profile: string;
};

type PropertyFiltersProps = {
  filters: PropertyFilterState;
  cities: string[];
  neighborhoods: string[];
  profiles: string[];
  onChange: (filters: PropertyFilterState) => void;
  onSubmit?: () => void;
};

export function PropertyFilters({
  filters,
  cities,
  neighborhoods,
  profiles,
  onChange,
  onSubmit,
}: PropertyFiltersProps) {
  function updateFilter(key: keyof PropertyFilterState, value: string) {
    onChange({ ...filters, [key]: value });
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    onSubmit?.();
  }

  return (
    <form className="surface-panel grid gap-4 rounded-site p-4 md:grid-cols-[1fr_1fr_1fr_auto]" onSubmit={handleSubmit}>
      <label className="grid gap-2 text-sm font-semibold text-ink">
        Cidade
        <select
          className="h-12 rounded-full border border-line bg-surface px-4 text-sm text-muted outline-none transition focus:border-accent focus:ring-4 focus:ring-accent/15"
          value={filters.city}
          onChange={(event) => updateFilter("city", event.target.value)}
        >
          <option value="">Todas as cidades</option>
          {cities.map((city) => (
            <option key={city} value={city}>
              {city}
            </option>
          ))}
        </select>
      </label>

      <label className="grid gap-2 text-sm font-semibold text-ink">
        Bairro
        <select
          className="h-12 rounded-full border border-line bg-surface px-4 text-sm text-muted outline-none transition focus:border-accent focus:ring-4 focus:ring-accent/15"
          value={filters.neighborhood}
          onChange={(event) => updateFilter("neighborhood", event.target.value)}
        >
          <option value="">Todos os bairros</option>
          {neighborhoods.map((neighborhood) => (
            <option key={neighborhood} value={neighborhood}>
              {neighborhood}
            </option>
          ))}
        </select>
      </label>

      <label className="grid gap-2 text-sm font-semibold text-ink">
        Perfil
        <select
          className="h-12 rounded-full border border-line bg-surface px-4 text-sm text-muted outline-none transition focus:border-accent focus:ring-4 focus:ring-accent/15"
          value={filters.profile}
          onChange={(event) => updateFilter("profile", event.target.value)}
        >
          <option value="">Todos os perfis</option>
          {profiles.map((profile) => (
            <option key={profile} value={profile}>
              {profile}
            </option>
          ))}
        </select>
      </label>

      <button type="submit" className="button-dark mt-auto h-12">
        Buscar empreendimento
      </button>
    </form>
  );
}
