"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import type { Property } from "@/data/properties";
import { PropertyFilters, type PropertyFilterState } from "@/components/properties/PropertyFilters";
import { getWhatsAppLink, whatsappMessages } from "@/lib/whatsapp";
import { PremiumSectionTitle } from "@/components/site/PremiumSectionTitle";

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
  const router = useRouter();

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

  function handleSearchSubmit() {
    const params = new URLSearchParams();
    if (filters.city) params.set("city", filters.city);
    if (filters.neighborhood) params.set("neighborhood", filters.neighborhood);
    if (filters.profile) params.set("profile", filters.profile);

    router.push(`/imoveis?${params.toString()}`);
  }

  return (
    <section className="section-y bg-background">
      <div className="site-shell grid gap-8">
        <div className="grid gap-4 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
          <div className="reveal">
            <PremiumSectionTitle
              kicker="Busca rápida"
              title="Encontre o imóvel ideal em Campinas."
              theme="light"
              align="left"
            />
          </div>
          <p className="text-base leading-8 text-muted lg:max-w-xl lg:ml-auto reveal-late">
            Explore uma curadoria de empreendimentos selecionados para moradia, investimento patrimonial e novas fases de vida.
          </p>
        </div>

        <div className="mt-4">
          <PropertyFilters
            filters={filters}
            cities={cities}
            neighborhoods={neighborhoods}
            profiles={profiles}
            onChange={setFilters}
            onSubmit={handleSearchSubmit}
          />
        </div>

        <div className="flex flex-wrap items-center justify-center gap-4 mt-6">
          <Link href="/imoveis" className="button-dark">
            Ver catálogo completo
          </Link>
          <a
            href={getWhatsAppLink(whatsappMessages.general)}
            target="_blank"
            rel="noreferrer"
            className="button-primary"
          >
            Falar com a Cláudia
          </a>
        </div>
      </div>
    </section>
  );
}
