"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import type { Property } from "@/data/properties";
import { PropertyGrid } from "@/components/properties/PropertyGrid";
import { PremiumSectionTitle } from "@/components/site/PremiumSectionTitle";

type HomeFeaturedVitrineProps = {
  properties: Property[];
};

export function HomeFeaturedVitrine({ properties }: HomeFeaturedVitrineProps) {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  const totalPages = Math.ceil(properties.length / itemsPerPage);
  const paginatedProperties = useMemo(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    return properties.slice(startIndex, startIndex + itemsPerPage);
  }, [properties, currentPage]);

  return (
    <section className="section-y bg-surface">
      <div className="site-shell grid gap-10">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between reveal">
          <div className="max-w-2xl">
            <PremiumSectionTitle
              kicker="Destaques"
              title="Empreendimentos em destaque."
              description="Uma curadoria exclusiva de empreendimentos imobiliários com alto padrão e localização privilegiada, selecionados para você."
              theme="light"
              align="left"
            />
          </div>

          {/* Discrete, elegant page numbers on the side for desktop */}
          {totalPages > 1 ? (
            <div className="hidden items-center gap-2 sm:flex">
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                <button
                  key={page}
                  type="button"
                  onClick={() => setCurrentPage(page)}
                  className={[
                    "flex h-9 w-9 items-center justify-center rounded-full border text-xs font-bold transition duration-200",
                    currentPage === page
                      ? "bg-accent border-accent text-deep shadow-gold"
                      : "bg-background border-line text-muted hover:border-accent hover:text-ink",
                  ].join(" ")}
                >
                  {page}
                </button>
              ))}
            </div>
          ) : null}
        </div>

        {/* The active page of 6 properties */}
        <div className="transition duration-300">
          <PropertyGrid properties={paginatedProperties} />
        </div>

        {/* Controls for mobile, and Ver Todos button */}
        <div className="flex flex-col items-center gap-6 mt-6">
          {totalPages > 1 ? (
            <div className="flex items-center gap-2 sm:hidden">
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                <button
                  key={page}
                  type="button"
                  onClick={() => setCurrentPage(page)}
                  className={[
                    "flex h-9 w-9 items-center justify-center rounded-full border text-xs font-bold transition duration-200",
                    currentPage === page
                      ? "bg-accent border-accent text-deep shadow-gold"
                      : "bg-background border-line text-muted hover:border-accent hover:text-ink",
                  ].join(" ")}
                >
                  {page}
                </button>
              ))}
            </div>
          ) : null}

          <Link href="/imoveis" className="button-primary">
            Ver todos os empreendimentos
          </Link>
        </div>
      </div>
    </section>
  );
}
