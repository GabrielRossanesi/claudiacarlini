"use client";

import { useEffect, useState, useRef } from "react";

type PropertyPhotoLightboxProps = {
  images: string[];
  initialIndex: number;
  onClose: () => void;
  title: string;
};

export function PropertyPhotoLightbox({ images, initialIndex, onClose, title }: PropertyPhotoLightboxProps) {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);
  const thumbnailContainerRef = useRef<HTMLDivElement>(null);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
      } else if (e.key === "ArrowLeft") {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
      } else if (e.key === "Escape") {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [images.length, onClose]);

  // Block body scroll
  useEffect(() => {
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, []);

  // Scroll active thumbnail into view
  useEffect(() => {
    if (thumbnailContainerRef.current) {
      const activeBtn = thumbnailContainerRef.current.children[currentIndex] as HTMLElement;
      if (activeBtn) {
        thumbnailContainerRef.current.scrollTo({
          left: activeBtn.offsetLeft - thumbnailContainerRef.current.clientWidth / 2 + activeBtn.clientWidth / 2,
          behavior: "smooth",
        });
      }
    }
  }, [currentIndex]);

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <div
      className="fixed inset-0 z-[100] flex flex-col justify-between bg-[#030303]/98 py-6 px-4 select-none backdrop-blur-md animate-fade-in"
      onClick={onClose}
    >
      {/* Top bar with details and close button */}
      <div className="relative w-full flex items-center justify-between max-w-6xl mx-auto px-4 z-10">
        <div className="pr-4">
          <span className="text-[10px] uppercase tracking-[0.16em] text-accent block font-extrabold mb-1">
            Galeria Exclusiva
          </span>
          <h4 className="display-font text-pearl text-lg sm:text-xl font-normal leading-tight truncate max-w-[240px] sm:max-w-md">
            {title}
          </h4>
        </div>
        <div className="flex items-center gap-4">
          <span className="text-xs font-bold text-pearl/50 uppercase tracking-[0.16em]">
            {currentIndex + 1} de {images.length}
          </span>
          <button
            type="button"
            onClick={onClose}
            className="flex h-10 w-10 items-center justify-center rounded-full bg-pearl/10 text-pearl/80 hover:bg-pearl/20 hover:text-pearl transition duration-200 shadow-lg"
            aria-label="Fechar visualizador"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2.2}
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>

      {/* Main Image View with navigation arrows */}
      <div className="relative flex-1 w-full max-w-5xl mx-auto flex items-center justify-center my-4">
        {/* Navigation arrows (hidden on small mobile or placed elegantly) */}
        <button
          type="button"
          onClick={handlePrev}
          className="absolute left-2 sm:left-4 z-20 flex h-12 w-12 items-center justify-center rounded-full border border-pearl/10 bg-pearl/5 text-pearl/80 hover:bg-pearl/15 hover:text-accent hover:border-accent/40 transition duration-200 shadow-xl"
          aria-label="Foto anterior"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2.5}
            stroke="currentColor"
            className="w-5 h-5"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
          </svg>
        </button>

        {/* Center active photo */}
        <div
          className="relative w-full h-full max-h-[58vh] sm:max-h-[66vh] flex items-center justify-center px-8"
          onClick={(e) => e.stopPropagation()}
        >
          <img
            src={images[currentIndex]}
            alt={`${title} - foto ${currentIndex + 1}`}
            className="max-w-full max-h-full object-contain rounded-xl shadow-2xl border border-pearl/5 select-none animate-scale-up"
          />
        </div>

        <button
          type="button"
          onClick={handleNext}
          className="absolute right-2 sm:right-4 z-20 flex h-12 w-12 items-center justify-center rounded-full border border-pearl/10 bg-pearl/5 text-pearl/80 hover:bg-pearl/15 hover:text-accent hover:border-accent/40 transition duration-200 shadow-xl"
          aria-label="Próxima foto"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2.5}
            stroke="currentColor"
            className="w-5 h-5"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
          </svg>
        </button>
      </div>

      {/* Thumbnails list at the bottom */}
      <div className="w-full max-w-4xl mx-auto border-t border-pearl/10 pt-4 mt-2" onClick={(e) => e.stopPropagation()}>
        <div
          ref={thumbnailContainerRef}
          className="flex gap-2 overflow-x-auto pb-2 scrollbar-thin scrollbar-thumb-pearl/20 scrollbar-track-transparent px-4 justify-start sm:justify-center"
        >
          {images.map((image, index) => (
            <button
              key={image}
              type="button"
              onClick={() => setCurrentIndex(index)}
              className={`relative aspect-[4/3] w-16 sm:w-20 shrink-0 overflow-hidden rounded-lg border-2 transition duration-200 ${
                index === currentIndex
                  ? "border-accent scale-105 shadow-lift"
                  : "border-transparent opacity-40 hover:opacity-100"
              }`}
              aria-label={`Ir para foto ${index + 1}`}
            >
              <img src={image} alt={`Miniatura ${index + 1}`} className="h-full w-full object-cover" />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
