"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import type { Property } from "@/data/properties";
import { getPropertyWhatsAppLink } from "@/lib/whatsapp";

type HeroPropertyCarouselProps = {
  properties: Property[];
};

export function HeroPropertyCarousel({ properties }: HeroPropertyCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeProperty = properties[activeIndex] ?? properties[0];

  useEffect(() => {
    if (properties.length === 0) {
      return;
    }

    const timer = window.setInterval(() => {
      setActiveIndex((index) => (index + 1) % properties.length);
    }, 5600);

    return () => window.clearInterval(timer);
  }, [properties.length]);

  if (!activeProperty) {
    return null;
  }

  const heroStats = [
    { label: "Perfil", value: activeProperty.propertyType },
    { label: "Área", value: activeProperty.area },
    { label: "Valor", value: activeProperty.priceLabel },
  ];

  return (
    <section className="relative min-h-[calc(100svh-84px)] overflow-hidden bg-deep text-pearl">
      {properties.map((property, index) => (
        <img
          key={property.id}
          src={property.images[0]}
          alt={property.title}
          className={`absolute inset-0 h-full w-full object-cover transition duration-700 ${
            index === activeIndex ? "scale-100 opacity-100" : "scale-105 opacity-0"
          }`}
        />
      ))}
      <div className="absolute inset-0 bg-gradient-to-r from-deep via-deep/72 to-deep/20" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_82%,rgb(var(--color-accent)/0.28),transparent_26rem)]" />
      <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-deep to-transparent" />

      <div className="site-shell relative z-10 flex min-h-[calc(100svh-84px)] items-end pb-14 pt-20">
        <div className="grid max-w-3xl gap-7 reveal">
          <div>
            <p className="eyebrow text-accentSoft">Cláudia Carlini</p>
            <h1 className="display-font mt-4 text-5xl leading-[0.95] text-pearl sm:text-6xl lg:text-7xl">
              Empreendimentos selecionados em Campinas.
            </h1>
          </div>

          <div className="max-w-2xl border-l border-accent pl-5">
            <p className="text-sm uppercase tracking-[0.18em] text-pearl/60">
              {activeProperty.status} · {activeProperty.neighborhood}, {activeProperty.city}
            </p>
            <h2 className="display-font mt-2 text-3xl text-pearl">{activeProperty.title}</h2>
            <p className="mt-3 max-w-xl text-base leading-7 text-pearl/76">{activeProperty.shortDescription}</p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row">
            <Link className="button-primary" href={`/imoveis/${activeProperty.slug}`}>
              Ver detalhes
            </Link>
            <a className="button-secondary" href={getPropertyWhatsAppLink(activeProperty.title)} target="_blank">
              Falar com a Cláudia
            </a>
          </div>

          <div className="grid max-w-2xl grid-cols-3 gap-px overflow-hidden rounded-2xl border border-pearl/12 bg-pearl/12 backdrop-blur-md">
            {heroStats.map((stat) => (
              <div key={stat.label} className="bg-pearl/8 p-4">
                <p className="text-[0.68rem] uppercase tracking-[0.16em] text-pearl/50">{stat.label}</p>
                <p className="mt-1 text-sm font-bold text-pearl">{stat.value}</p>
              </div>
            ))}
          </div>

          <div className="flex gap-2">
            {properties.map((property, index) => (
              <button
                key={property.id}
                type="button"
                aria-label={`Mostrar ${property.title}`}
                className={`h-1.5 rounded-full transition-all ${
                  index === activeIndex ? "w-10 bg-accent" : "w-4 bg-pearl/38"
                }`}
                onClick={() => setActiveIndex(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
