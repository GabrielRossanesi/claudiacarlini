"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import type { Property } from "@/data/properties";
import { getPropertyWhatsAppLink } from "@/lib/whatsapp";
import { PremiumSectionTitle } from "@/components/site/PremiumSectionTitle";

type HeroPropertyCarouselProps = {
  properties: Property[];
};

export function HeroPropertyCarousel({ properties }: HeroPropertyCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const activeProperty = properties[activeIndex] ?? properties[0];

  // Touch handlers for swipe gesture navigation on mobile
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const minSwipeDistance = 50;

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      setActiveIndex((index) => (index + 1) % properties.length);
    } else if (isRightSwipe) {
      setActiveIndex((index) => (index - 1 + properties.length) % properties.length);
    }
  };

  useEffect(() => {
    if (properties.length === 0 || isPaused) {
      return;
    }

    const timer = window.setInterval(() => {
      setActiveIndex((index) => (index + 1) % properties.length);
    }, 5600);

    return () => window.clearInterval(timer);
  }, [properties.length, isPaused]);

  if (!activeProperty) {
    return null;
  }

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    setActiveIndex((index) => (index - 1 + properties.length) % properties.length);
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    setActiveIndex((index) => (index + 1) % properties.length);
  };

  const heroStats = [
    { label: "Perfil", value: activeProperty.propertyType },
    { label: "Área", value: activeProperty.area },
    { label: "Valor", value: activeProperty.priceLabel },
  ];

  return (
    <section
      id="home-hero"
      className="relative -mt-[78px] min-h-[100svh] overflow-hidden bg-deep text-pearl md:-mt-[82px]"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {properties.map((property, index) => (
        <img
          key={property.id}
          src={property.heroImage ?? property.images[0]}
          alt={property.title}
          className={`absolute inset-0 h-full w-full object-cover transition duration-1000 ${
            index === activeIndex ? "scale-100 opacity-100" : "scale-105 opacity-0"
          }`}
        />
      ))}

      {/* Mobile overlay: strong black layer + vertical gradient + lateral gradient for optimal readability */}
      <div className="absolute inset-0 bg-black/50 md:hidden z-[1]" />
      <div className="absolute inset-0 bg-gradient-to-t from-deep via-deep/80 to-transparent md:hidden z-[2]" />
      <div className="absolute inset-0 bg-gradient-to-r from-deep/70 via-deep/30 to-transparent md:hidden z-[2]" />

      {/* Desktop overlays: untouched to preserve approved desktop version */}
      <div className="absolute inset-0 hidden md:block bg-gradient-to-r from-deep via-deep/72 to-deep/20 z-[1]" />
      <div className="absolute inset-0 hidden md:block bg-[radial-gradient(circle_at_18%_82%,rgb(var(--color-accent)/0.28),transparent_26rem)] z-[2]" />
      <div className="absolute inset-x-0 bottom-0 hidden md:block h-48 bg-gradient-to-t from-deep to-transparent z-[2]" />

      <div className="site-shell relative z-10 flex min-h-[100svh] items-end pb-[calc(1.5rem+env(safe-area-inset-bottom))] pt-20 md:pb-14 md:pt-28">
        <div className="grid max-w-3xl gap-4 md:gap-7 reveal">
          <PremiumSectionTitle
            kicker="Cláudia Carlini"
            title="Empreendimentos selecionados em Campinas."
            theme="dark"
            align="left"
            titleAs="h1"
            className="mb-1 max-w-[90%] md:max-w-3xl [&_h1]:text-[36px] [&_h1]:min-[360px]:text-[40px] [&_h1]:min-[400px]:text-[44px] md:[&_h1]:text-6xl lg:[&_h1]:text-7xl [&_h1]:leading-[1.05] md:[&_h1]:leading-[0.95]"
          />

          <div className="max-w-2xl border-l border-accent pl-4 md:pl-5">
            <p className="text-[10px] min-[380px]:text-xs md:text-sm uppercase tracking-[0.15em] md:tracking-[0.18em] text-pearl/60">
              {activeProperty.status} · {activeProperty.neighborhood}, {activeProperty.city}
            </p>
            <h2 className="display-font mt-1.5 md:mt-2 text-2xl md:text-3xl text-pearl leading-tight">{activeProperty.title}</h2>
            <p className="mt-2 md:mt-3 max-w-xl text-xs sm:text-sm md:text-base leading-5 sm:leading-6 md:leading-7 text-pearl/76 line-clamp-2 md:line-clamp-none">
              {activeProperty.shortDescription}
            </p>
          </div>

          <div className="flex flex-col gap-2.5 sm:flex-row sm:gap-3">
            <Link className="button-primary w-full sm:w-auto" href={`/imoveis/${activeProperty.slug}`}>
              Ver detalhes
            </Link>
            <a
              className="button-secondary w-full sm:w-auto text-xs min-h-[38px] py-1 md:min-h-[46px] md:py-0 md:text-[0.92rem]"
              href={getPropertyWhatsAppLink(activeProperty.title)}
              target="_blank"
            >
              Falar com a Cláudia
            </a>
          </div>

          <div className="grid max-w-2xl grid-cols-3 gap-px overflow-hidden rounded-xl md:rounded-2xl border border-pearl/12 bg-pearl/12 backdrop-blur-md">
            {heroStats.map((stat) => (
              <div key={stat.label} className="bg-pearl/8 p-2.5 min-[380px]:p-3.5 md:p-4">
                <p className="text-[0.58rem] min-[380px]:text-[0.65rem] md:text-[0.68rem] uppercase tracking-[0.12em] md:tracking-[0.16em] text-pearl/50">{stat.label}</p>
                <p className="mt-0.5 md:mt-1 text-[11px] min-[380px]:text-xs md:text-sm font-bold text-pearl leading-tight">{stat.value}</p>
              </div>
            ))}
          </div>

          {/* Navigation Controls Bar */}
          <div className="flex items-center gap-4 mt-1 md:mt-2">
            {/* Dots Pagination */}
            <div className="flex gap-1 md:gap-1.5 flex-wrap max-w-[280px] sm:max-w-md">
              {properties.map((property, index) => (
                <button
                  key={property.id}
                  type="button"
                  aria-label={`Mostrar ${property.title}`}
                  className={`h-1 md:h-1.5 rounded-full transition-all duration-300 ${
                    index === activeIndex
                      ? "w-4 md:w-6 bg-accent"
                      : "w-1 md:w-1.5 bg-pearl/30 hover:bg-pearl/60"
                  }`}
                  onClick={() => setActiveIndex(index)}
                />
              ))}
            </div>

            {/* Visual separator */}
            <span className="hidden md:block h-4 w-px bg-pearl/20" />

            {/* Arrow navigation buttons */}
            <div className="hidden md:flex gap-2">
              <button
                type="button"
                onClick={handlePrev}
                className="flex h-8 w-8 items-center justify-center rounded-full border border-pearl/10 bg-deep/40 text-pearl/70 backdrop-blur-sm transition duration-300 hover:border-accent hover:text-accent"
                aria-label="Anterior"
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
                onClick={handleNext}
                className="flex h-8 w-8 items-center justify-center rounded-full border border-pearl/10 bg-deep/40 text-pearl/70 backdrop-blur-sm transition duration-300 hover:border-accent hover:text-accent"
                aria-label="Próximo"
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
        </div>
      </div>
    </section>
  );
}
