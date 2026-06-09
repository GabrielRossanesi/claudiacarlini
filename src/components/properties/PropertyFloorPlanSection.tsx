"use client";

import { useState } from "react";
import Image from "next/image";
import { PropertyPhotoLightbox } from "./PropertyPhotoLightbox";
import { PremiumSectionTitle } from "@/components/site/PremiumSectionTitle";

type PropertyFloorPlanSectionProps = {
  title: string;
  floorPlans?: string[];
  floorPlanImage?: string | null;
  allImages: string[];
};

export function PropertyFloorPlanSection({
  title,
  floorPlans,
  floorPlanImage,
  allImages,
}: PropertyFloorPlanSectionProps) {
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  const hasFloorPlansText = floorPlans && floorPlans.length > 0;
  const hasFloorPlanImage = !!floorPlanImage;

  if (!hasFloorPlansText && !hasFloorPlanImage) {
    return null;
  }

  // Find index of floorPlanImage in the overall gallery
  const plantIndex = floorPlanImage ? allImages.indexOf(floorPlanImage) : -1;
  const lightboxImages = floorPlanImage
    ? (plantIndex !== -1 ? allImages : [floorPlanImage])
    : [];
  const initialIndex = plantIndex !== -1 ? plantIndex : 0;

  return (
    <div className="grid gap-4">
      <PremiumSectionTitle
        title="Plantas e Tipologias"
        theme="light"
        intensity="subtle"
        titleAs="h2"
        align="left"
        className="mb-1"
      />
      
      {hasFloorPlansText && (
        <div className="grid gap-3 sm:grid-cols-2">
          {floorPlans.map((plan) => (
            <div
              key={plan}
              className="rounded-xl border border-line bg-surface p-4 text-sm font-semibold text-muted/90 flex items-center gap-2"
            >
              <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
              {plan}
            </div>
          ))}
        </div>
      )}

      {hasFloorPlanImage && floorPlanImage && (
        <div className="mt-4 overflow-hidden rounded-[20px] border border-line bg-surface group transition hover:border-accent/40 shadow-soft">
          <div className="relative aspect-[16/10] w-full">
            <Image
              src={floorPlanImage}
              alt={`Planta do empreendimento ${title}`}
              fill
              sizes="(min-width: 1024px) 58vw, 100vw"
              className="object-cover transition duration-700 group-hover:scale-[1.015]"
            />
          </div>
          <div className="bg-surface border-t border-line px-5 py-3.5 flex justify-between items-center">
            <span className="text-xs font-bold text-muted uppercase tracking-wider">
              {floorPlanImage.toLowerCase().includes("planta") ||
               floorPlanImage.toLowerCase().includes("gallery-cambui-residence/page-08") ||
               floorPlanImage.toLowerCase().includes("hox-cambui/page-37")
                ? "Planta Ilustrativa"
                : "Imagem Ilustrativa"}
            </span>
            <button
              type="button"
              onClick={() => setIsLightboxOpen(true)}
              className="text-xs font-extrabold text-accent hover:text-ink transition duration-200 uppercase tracking-wider flex items-center gap-1 cursor-pointer focus:outline-none"
            >
              Ver em alta definição
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2.5}
                stroke="currentColor"
                className="w-3 h-3"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </button>
          </div>
        </div>
      )}

      {isLightboxOpen && hasFloorPlanImage && (
        <PropertyPhotoLightbox
          images={lightboxImages}
          initialIndex={initialIndex}
          onClose={() => setIsLightboxOpen(false)}
          title={title}
        />
      )}
    </div>
  );
}
