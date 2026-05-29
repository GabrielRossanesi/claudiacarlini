"use client";

import { useState } from "react";
import Image from "next/image";
import { PropertyPhotoLightbox } from "./PropertyPhotoLightbox";

type PropertyPhotosGridProps = {
  title: string;
  images: string[];
};

export function PropertyPhotosGrid({ title, images }: PropertyPhotosGridProps) {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  return (
    <>
      <div className="grid gap-4 md:grid-cols-2">
        {images.map((image, index) => (
          <button
            key={image}
            type="button"
            onClick={() => setLightboxIndex(index)}
            className={[
              "group relative block overflow-hidden rounded-[24px] border border-pearl/10 bg-deep-soft shadow-lift transition duration-300 text-left w-full outline-none",
              "hover:-translate-y-1 hover:border-accent/40 hover:shadow-[0_20px_50px_rgba(0,0,0,0.5)] focus-visible:border-accent focus-visible:ring-1 focus-visible:ring-accent",
              index === 0 ? "md:col-span-2" : "",
            ].join(" ")}
            aria-label={`Ver foto ${index + 1} de ${title} em tela cheia`}
          >
            <div className={index === 0 ? "relative aspect-[16/9]" : "relative aspect-[4/3]"}>
              <Image
                src={image}
                alt={`${title} - foto ${index + 1}`}
                fill
                priority={index === 0}
                sizes={index === 0 ? "(min-width: 768px) 1160px, 100vw" : "(min-width: 768px) 50vw, 100vw"}
                className="object-cover transition duration-700 group-hover:scale-[1.025]"
              />
              <span className="absolute inset-0 bg-deep/0 transition duration-300 group-hover:bg-deep/15" />
            </div>
          </button>
        ))}
      </div>

      {/* Render Lightbox Modal */}
      {lightboxIndex !== null && (
        <PropertyPhotoLightbox
          images={images}
          initialIndex={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
          title={title}
        />
      )}
    </>
  );
}
