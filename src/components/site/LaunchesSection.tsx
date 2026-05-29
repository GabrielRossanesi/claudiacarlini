"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import type { Property } from "@/data/properties";

type LaunchesSectionProps = {
  properties: Property[];
  whatsappLink: string;
};

export function LaunchesSection({ properties, whatsappLink }: LaunchesSectionProps) {
  const [itemsPerPage, setItemsPerPage] = useState(6);
  const [page, setPage] = useState(0);
  const [animate, setAnimate] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setItemsPerPage(6);
      } else if (window.innerWidth >= 768) {
        setItemsPerPage(4);
      } else {
        setItemsPerPage(3);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const totalPages = Math.ceil(properties.length / itemsPerPage);

  // Ensure page is within bounds when itemsPerPage changes
  useEffect(() => {
    if (page >= totalPages && totalPages > 0) {
      setPage(totalPages - 1);
    }
  }, [itemsPerPage, totalPages, page]);

  const handlePageChange = (newPage: number) => {
    if (newPage < 0 || newPage >= totalPages) return;
    setAnimate(false);
    setTimeout(() => {
      setPage(newPage);
      setAnimate(true);
    }, 200);
  };

  const startIndex = page * itemsPerPage;
  const visibleProperties = properties.slice(startIndex, startIndex + itemsPerPage);

  return (
    <section id="lancamentos" className="section-y bg-surface">
      <div className="site-shell grid gap-10">
        {/* Header Block with Title and Controls */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div className="max-w-2xl">
            <p className="eyebrow">Lançamentos</p>
            <h2 className="display-font mt-3 text-4xl sm:text-5xl leading-tight font-normal text-ink">
              Acabaram de lançar em Campinas
            </h2>
            <p className="mt-4 text-base sm:text-lg text-muted">
              Uma seleção exclusiva de lançamentos sob medida para moradia de alto padrão ou composição patrimonial nas
              regiões mais desejadas de Campinas.
            </p>
          </div>

          {/* Pagination Controls */}
          {totalPages > 1 && (
            <div className="flex items-center gap-4 self-start md:self-end">
              <span className="text-xs uppercase tracking-wider text-muted font-bold">
                Página {page + 1} de {totalPages}
              </span>
              <div className="flex gap-2">
                <button
                  type="button"
                  disabled={page === 0}
                  onClick={() => handlePageChange(page - 1)}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-line bg-surface text-ink/75 transition duration-300 hover:border-accent hover:text-accent disabled:opacity-30 disabled:hover:border-line disabled:hover:text-ink/75"
                  aria-label="Grupo anterior"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2.5}
                    stroke="currentColor"
                    className="w-4 h-4"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                  </svg>
                </button>
                <button
                  type="button"
                  disabled={page === totalPages - 1}
                  onClick={() => handlePageChange(page + 1)}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-line bg-surface text-ink/75 transition duration-300 hover:border-accent hover:text-accent disabled:opacity-30 disabled:hover:border-line disabled:hover:text-ink/75"
                  aria-label="Próximo grupo"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2.5}
                    stroke="currentColor"
                    className="w-4 h-4"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                  </svg>
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Card Grid with smooth fade transition */}
        <div
          className={`grid gap-6 sm:grid-cols-2 lg:grid-cols-3 transition-opacity duration-300 ${
            animate ? "opacity-100" : "opacity-0"
          }`}
        >
          {visibleProperties.map((property) => (
            <Link
              key={property.id}
              href={`/imoveis/${property.slug}`}
              className="group overflow-hidden rounded-2xl border border-line bg-background shadow-soft transition duration-300 hover:-translate-y-1 hover:border-accent/50 hover:shadow-lift"
            >
              <div className="aspect-[4/3] overflow-hidden relative">
                <img
                  src={property.images[0]}
                  alt={property.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                />
                <span className="absolute inset-0 bg-deep/0 transition duration-300 group-hover:bg-deep/5" />
              </div>
              <div className="p-5">
                <div className="flex justify-between items-center gap-2">
                  <span className="text-[10px] uppercase tracking-wider font-extrabold text-accent">
                    {property.status}
                  </span>
                  <span className="text-[11px] font-semibold text-muted">{property.neighborhood}</span>
                </div>
                <h3 className="display-font mt-2 text-2xl font-normal text-ink leading-tight">{property.title}</h3>
              </div>
            </Link>
          ))}
        </div>

        {/* Footer CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-4">
          <Link href="/imoveis" className="button-dark w-full sm:w-auto">
            Ver todos os imóveis
          </Link>
          <a className="button-primary w-full sm:w-auto" href={whatsappLink} target="_blank" rel="noopener noreferrer">
            Consultar lançamentos disponíveis
          </a>
        </div>
      </div>
    </section>
  );
}
