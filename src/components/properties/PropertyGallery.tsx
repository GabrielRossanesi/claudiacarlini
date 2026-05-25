"use client";

import { useState } from "react";

type PropertyGalleryProps = {
  title: string;
  images: string[];
};

export function PropertyGallery({ title, images }: PropertyGalleryProps) {
  const [activeImage, setActiveImage] = useState(images[0]);

  return (
    <div className="grid gap-4">
      <div className="aspect-[16/10] overflow-hidden rounded-[28px] border border-line bg-accentSoft shadow-soft">
        <img src={activeImage} alt={title} className="h-full w-full object-cover" />
      </div>
      <div className="grid grid-cols-3 gap-3">
        {images.map((image) => (
          <button
            key={image}
            type="button"
            className={`aspect-[4/3] overflow-hidden rounded-2xl border transition ${
              activeImage === image ? "border-accent shadow-gold" : "border-transparent opacity-[0.76] hover:opacity-100"
            }`}
            onClick={() => setActiveImage(image)}
          >
            <img src={image} alt={`${title} - imagem`} className="h-full w-full object-cover" />
          </button>
        ))}
      </div>
    </div>
  );
}
