"use client";

import { useEffect, useRef, useState, ReactNode } from "react";

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  activeClassName?: string;
  delayMs?: number;
}

export function ScrollReveal({
  children,
  className = "opacity-0 translate-y-6 transition-all duration-700 cubic-bezier(0.16, 1, 0.3, 1)",
  activeClassName = "opacity-100 translate-y-0",
  delayMs = 0,
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Verificar se o usuário prefere movimentos reduzidos (acessibilidade)
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mediaQuery.matches) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsVisible(true);
          }, delayMs);
          if (ref.current) {
            observer.unobserve(ref.current);
          }
        }
      },
      {
        threshold: 0.05,
        rootMargin: "0px 0px -40px 0px", // Dispara um pouco antes de entrar completamente
      }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
      observer.disconnect();
    };
  }, [delayMs]);

  return (
    <div ref={ref} className={`${className} ${isVisible ? activeClassName : ""}`}>
      {children}
    </div>
  );
}
