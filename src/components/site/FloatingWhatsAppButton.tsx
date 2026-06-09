"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { getWhatsAppLink, whatsappMessages } from "@/lib/whatsapp";

export function FloatingWhatsAppButton() {
  const pathname = usePathname();
  const [isInHero, setIsInHero] = useState(false);

  useEffect(() => {
    const checkMobile = () => window.innerWidth < 768;

    const heroElement = document.getElementById("home-hero");
    if (!heroElement || !checkMobile()) {
      setIsInHero(false);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInHero(entry.isIntersecting);
      },
      {
        threshold: 0, // Trigger when any part of the hero is visible
      }
    );

    observer.observe(heroElement);

    const handleResize = () => {
      const isMobile = checkMobile();
      const element = document.getElementById("home-hero");

      if (!isMobile || !element) {
        setIsInHero(false);
        observer.disconnect();
      } else {
        observer.observe(element);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      observer.disconnect();
      window.removeEventListener("resize", handleResize);
    };
  }, [pathname]);

  const showButton = !isInHero;

  return (
    <a
      href={getWhatsAppLink(whatsappMessages.general)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar com a Claudia pelo WhatsApp"
      className={`group fixed bottom-24 right-4 z-[70] inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] shadow-[0_4px_14px_rgba(0,0,0,0.25)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#20ba5a] hover:shadow-[0_6px_20px_rgba(32,186,90,0.4)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#25d366] focus-visible:ring-offset-2 md:bottom-6 md:right-6 ${
        showButton
          ? "opacity-100 translate-y-0 pointer-events-auto"
          : "opacity-0 translate-y-10 pointer-events-none md:opacity-100 md:translate-y-0 md:pointer-events-auto"
      }`}
    >
      <svg
        aria-hidden="true"
        viewBox="0 0 24 24"
        className="h-8 w-8 shrink-0 transition duration-300 group-hover:scale-105"
        fill="currentColor"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M12.031 2C6.49 2 2 6.49 2 12.03c0 1.8.48 3.56 1.39 5.11L2 22l5.05-1.33c1.5.82 3.19 1.25 4.98 1.25 5.54 0 10.03-4.49 10.03-10.03C22.062 6.49 17.57 2 12.03 2zm6.01 13.9c-.25.68-1.24 1.25-1.85 1.33-.48.06-1.1.28-3.23-.61-2.73-1.14-4.51-3.92-4.65-4.1-.14-.18-1.12-1.49-1.12-2.84 0-1.35.7-2.02.95-2.29.25-.27.54-.34.72-.34.18 0 .36 0 .52.01.17 0 .4.06.6.53.21.5.73 1.77.79 1.9.06.12.1.27.02.43-.08.16-.12.26-.25.41-.12.14-.26.31-.37.42-.12.12-.25.26-.11.5.14.24.62 1.02 1.33 1.66.92.82 1.69 1.07 1.93 1.19.24.12.38.1.52-.06.14-.16.6-.7.76-.94.16-.24.32-.2.54-.12.22.08 1.4.66 1.64.78.24.12.4.18.46.28.06.1.06.58-.19 1.26z"
          fill="#FFF"
        />
        <path
          d="M18.04 15.9c-.25.68-1.24 1.25-1.85 1.33-.48.06-1.1.28-3.23-.61-2.73-1.14-4.51-3.92-4.65-4.1-.14-.18-1.12-1.49-1.12-2.84 0-1.35.7-2.02.95-2.29.25-.27.54-.34.72-.34.18 0 .36 0 .52.01.17 0 .4.06.6.53.21.5.73 1.77.79 1.9.06.12.1.27.02.43-.08.16-.12.26-.25.41-.12.14-.26.31-.37.42-.12.12-.25.26-.11.5.14.24.62 1.02 1.33 1.66.92.82 1.69 1.07 1.93 1.19.24.12.38.1.52-.06.14-.16.6-.7.76-.94.16-.24.32-.2.54-.12.22.08 1.4.66 1.64.78.24.12.4.18.46.28.06.1.06.58-.19 1.26z"
          fill="#25D366"
        />
      </svg>
    </a>
  );
}
