"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { siteConfig } from "@/lib/site-config";
import { getWhatsAppLink, whatsappMessages } from "@/lib/whatsapp";

function getNavState(
  href: string,
  pathname: string,
  activeHash: string,
  searchParams: URLSearchParams | null
) {
  if (href === "/") {
    return pathname === "/" && !activeHash;
  }

  if (href.startsWith("/#")) {
    return pathname === "/" && activeHash === href.replace("/", "");
  }

  // If the link contains query parameters
  if (href.includes("?")) {
    const [basePath, searchStr] = href.split("?");
    if (pathname !== basePath) return false;

    if (searchParams) {
      const urlParams = new URLSearchParams(searchStr);
      for (const [key, val] of urlParams.entries()) {
        if (searchParams.get(key) !== val) {
          return false;
        }
      }
      return true;
    }
    return false;
  }

  // For the general catalog link, only show active if no specific status/perfil parameters are set
  if (href === "/imoveis" && pathname === "/imoveis") {
    if (searchParams && (searchParams.get("status") || searchParams.get("perfil") || searchParams.get("profile"))) {
      return false;
    }
    return true;
  }

  return pathname === href || pathname.startsWith(`${href}/`);
}

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeHash, setActiveHash] = useState("");
  const [currentSearch, setCurrentSearch] = useState("");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileImoveisExpanded, setIsMobileImoveisExpanded] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const updateScrolled = () => {
      setIsScrolled(window.scrollY > 24);
    };

    const updateHash = () => {
      setActiveHash(window.location.hash);
      setCurrentSearch(window.location.search);
    };

    updateScrolled();
    updateHash();

    window.addEventListener("scroll", updateScrolled, { passive: true });
    window.addEventListener("hashchange", updateHash);

    return () => {
      window.removeEventListener("scroll", updateScrolled);
      window.removeEventListener("hashchange", updateHash);
    };
  }, []);

  useEffect(() => {
    setIsOpen(false);
    setActiveHash(typeof window !== "undefined" ? window.location.hash : "");
    setCurrentSearch(typeof window !== "undefined" ? window.location.search : "");
  }, [pathname]);

  const hasGlassBackground = isScrolled || pathname !== "/";
  const searchParamsObj = typeof window !== "undefined" ? new URLSearchParams(currentSearch) : null;

  return (
    <header
      className={[
        "site-header-entrance fixed inset-x-0 top-0 z-50 text-pearl",
        "border-b transition-all duration-300 ease-out",
        hasGlassBackground
          ? "border-[#c9aa6c]/20 bg-[#0b0a08]/75 shadow-[0_18px_50px_rgba(0,0,0,0.28)] backdrop-blur-xl"
          : "border-transparent bg-transparent shadow-none backdrop-blur-0",
      ].join(" ")}
    >
      <div
        className={[
          "pointer-events-none absolute inset-0 overflow-hidden transition-opacity duration-300 ease-out",
          hasGlassBackground ? "opacity-100" : "opacity-0",
        ].join(" ")}
      >
        <div className="absolute inset-0 bg-[linear-gradient(110deg,rgba(255,255,255,0.045),transparent_34%,rgba(194,169,118,0.08)_70%,transparent)]" />
        <div className="absolute right-[max(1rem,calc((100vw-1160px)/2))] top-1/2 h-24 w-44 -translate-y-1/2 rounded-full bg-accent/10 blur-3xl" />
      </div>

      <div
        className={[
          "site-shell relative flex h-[78px] items-center justify-between gap-5 transition-all duration-300 ease-out md:h-[82px]",
        ].join(" ")}
      >
        <Link
          href="/"
          className="group flex items-center gap-3.5 rounded-full py-1 outline-none transition focus-visible:ring-2 focus-visible:ring-accent/70 focus-visible:ring-offset-2 focus-visible:ring-offset-deep"
          aria-label="Ir para a página inicial"
        >
          <Image
            src={siteConfig.logo}
            alt="Cláudia Carlini Consultoria Imobiliária"
            width={120}
            height={150}
            sizes="(min-width: 768px) 62px, 52px"
            className={[
              "h-[54px] w-auto object-contain drop-shadow-[0_8px_18px_rgba(0,0,0,0.45)] transition duration-300 md:h-[62px]",
              "group-hover:scale-[1.025] group-active:scale-[0.985]",
            ].join(" ")}
            priority
          />
          <div className="hidden flex-col justify-center gap-0.5 border-l border-pearl/10 pl-3.5 transition-colors duration-300 lg:flex">
            <span className="display-font text-[18px] font-medium leading-[1.1] tracking-wide text-pearl/90 transition-all duration-300 group-hover:text-pearl">
              Cláudia Carlini
            </span>
            <span className="text-[9.5px] uppercase font-bold tracking-[0.15em] text-accent/75 transition-all duration-300 group-hover:text-accent group-hover:drop-shadow-[0_0_8px_rgba(194,169,118,0.25)]">
              Consultoria Imobiliária
            </span>
          </div>
        </Link>

        <nav
          className={[
            "hidden items-center gap-1 rounded-full border px-2 py-1 text-sm text-pearl/70 backdrop-blur-md transition-all duration-300 ease-out lg:flex",
            hasGlassBackground
              ? "border-pearl/[0.10] bg-pearl/[0.06] shadow-[inset_0_1px_0_rgba(255,255,255,0.07)]"
              : "border-pearl/[0.12] bg-black/20 shadow-[0_12px_34px_rgba(0,0,0,0.12),inset_0_1px_0_rgba(255,255,255,0.06)]",
          ].join(" ")}
        >
          {siteConfig.nav.map((item) => {
            const isActive = getNavState(item.href, pathname, activeHash, searchParamsObj);

            if (item.label === "Empreendimentos") {
              return (
                <div
                  key={item.href}
                  className="relative group/nav"
                  onMouseEnter={() => setIsDropdownOpen(true)}
                  onMouseLeave={() => setIsDropdownOpen(false)}
                >
                  <Link
                    href={item.href}
                    className={["site-nav-link flex items-center gap-1.5", isActive ? "is-active" : ""].join(" ")}
                    aria-current={isActive ? "page" : undefined}
                  >
                    <span>{item.label}</span>
                    <svg
                      className={["h-3 w-3 opacity-60 transition-transform duration-200", isDropdownOpen ? "rotate-180 text-accent" : ""].join(" ")}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2.5}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  </Link>

                  {isDropdownOpen ? (
                    <div className="absolute left-1/2 top-full -translate-x-1/2 pt-2.5 z-50 animate-fade-in-dropdown">
                      <div className="w-58 rounded-2xl border border-accent/20 bg-[#11100e] p-2.5 shadow-[0_24px_80px_rgba(0,0,0,0.45)] backdrop-blur-xl">
                        <Link
                          href="/imoveis"
                          className="block rounded-xl px-4 py-2.5 text-xs font-semibold text-pearl/90 hover:bg-accent/10 hover:text-accent transition duration-200"
                        >
                          Todos os empreendimentos
                        </Link>
                        <Link
                          href="/imoveis?status=lancamento"
                          className="block rounded-xl px-4 py-2.5 text-xs font-semibold text-pearl/90 hover:bg-accent/10 hover:text-accent transition duration-200"
                        >
                          Lançamentos
                        </Link>
                        <Link
                          href="/imoveis?status=entrega-prevista"
                          className="block rounded-xl px-4 py-2.5 text-xs font-semibold text-pearl/90 hover:bg-accent/10 hover:text-accent transition duration-200"
                        >
                          Entrega prevista
                        </Link>
                        <Link
                          href="/imoveis?status=pronto-para-morar"
                          className="block rounded-xl px-4 py-2.5 text-xs font-semibold text-pearl/90 hover:bg-accent/10 hover:text-accent transition duration-200"
                        >
                          Prontos para morar
                        </Link>
                        <Link
                          href="/imoveis?perfil=investidores"
                          className="block rounded-xl px-4 py-2.5 text-xs font-semibold text-pearl/90 hover:bg-accent/10 hover:text-accent transition duration-200"
                        >
                          Para investidores
                        </Link>
                      </div>
                    </div>
                  ) : null}
                </div>
              );
            }

            return (
              <Link
                key={item.href}
                href={item.href}
                className={["site-nav-link", isActive ? "is-active" : ""].join(" ")}
                aria-current={isActive ? "page" : undefined}
                onClick={() => {
                  if (item.href.startsWith("/#")) {
                    setActiveHash(item.href.replace("/", ""));
                  }
                }}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a className="header-cta" href={getWhatsAppLink(whatsappMessages.general)} target="_blank">
            Falar com a Cláudia
          </a>
        </div>

        <button
          type="button"
          className={[
            "group relative flex h-11 w-11 items-center justify-center overflow-hidden rounded-full border border-pearl/[0.16] lg:hidden",
            "bg-pearl/[0.055] shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] backdrop-blur-md transition",
            "hover:border-accent/[0.42] hover:bg-pearl/[0.09] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/70",
          ].join(" ")}
          onClick={() => setIsOpen((value) => !value)}
          aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
          aria-expanded={isOpen}
        >
          <span className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(194,169,118,0.18),transparent_58%)] opacity-70" />
          <span className="relative grid gap-1.5">
            <span
              className={[
                "block h-px w-5 bg-pearl transition duration-300",
                isOpen ? "translate-y-[3.5px] rotate-45 bg-accent" : "",
              ].join(" ")}
            />
            <span
              className={[
                "block h-px w-5 bg-pearl transition duration-300",
                isOpen ? "-translate-y-[3.5px] -rotate-45 bg-accent" : "",
              ].join(" ")}
            />
          </span>
        </button>
      </div>

      {isOpen ? (
        <div className="mobile-nav-panel border-t border-accent/[0.12] bg-[rgba(8,8,8,0.94)] px-4 pb-5 shadow-[0_22px_48px_rgba(0,0,0,0.34)] backdrop-blur-2xl lg:hidden">
          <nav className="site-shell grid gap-2 py-4">
            {siteConfig.nav.map((item) => {
              const isActive = getNavState(item.href, pathname, activeHash, searchParamsObj);

              if (item.label === "Empreendimentos") {
                return (
                  <div key={item.href} className="grid gap-1">
                    <button
                      type="button"
                      onClick={() => setIsMobileImoveisExpanded(!isMobileImoveisExpanded)}
                      className={[
                        "mobile-nav-link w-full flex items-center justify-between",
                        isActive ? "border-accent/[0.28] bg-accent/[0.08] text-accent" : "border-pearl/0 text-pearl/[0.78]",
                      ].join(" ")}
                    >
                      <span>{item.label}</span>
                      <svg
                        className={["h-3.5 w-3.5 opacity-60 transition-transform duration-250", isMobileImoveisExpanded ? "rotate-180 text-accent" : ""].join(" ")}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2.5}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>

                    {isMobileImoveisExpanded ? (
                      <div className="grid gap-1 pl-4 pt-1 pb-2 border-l border-pearl/10 ml-4 animate-mobile-dropdown-enter">
                        <Link
                          href="/imoveis"
                          onClick={() => {
                            setIsOpen(false);
                            setIsMobileImoveisExpanded(false);
                          }}
                          className="flex h-11 items-center px-4 text-xs font-semibold text-pearl/72 hover:text-accent transition duration-200"
                        >
                          • Todos os empreendimentos
                        </Link>
                        <Link
                          href="/imoveis?status=lancamento"
                          onClick={() => {
                            setIsOpen(false);
                            setIsMobileImoveisExpanded(false);
                          }}
                          className="flex h-11 items-center px-4 text-xs font-semibold text-pearl/72 hover:text-accent transition duration-200"
                        >
                          • Lançamentos
                        </Link>
                        <Link
                          href="/imoveis?status=entrega-prevista"
                          onClick={() => {
                            setIsOpen(false);
                            setIsMobileImoveisExpanded(false);
                          }}
                          className="flex h-11 items-center px-4 text-xs font-semibold text-pearl/72 hover:text-accent transition duration-200"
                        >
                          • Entrega prevista
                        </Link>
                        <Link
                          href="/imoveis?status=pronto-para-morar"
                          onClick={() => {
                            setIsOpen(false);
                            setIsMobileImoveisExpanded(false);
                          }}
                          className="flex h-11 items-center px-4 text-xs font-semibold text-pearl/72 hover:text-accent transition duration-200"
                        >
                          • Prontos para morar
                        </Link>
                        <Link
                          href="/imoveis?perfil=investidores"
                          onClick={() => {
                            setIsOpen(false);
                            setIsMobileImoveisExpanded(false);
                          }}
                          className="flex h-11 items-center px-4 text-xs font-semibold text-pearl/72 hover:text-accent transition duration-200"
                        >
                          • Para investidores
                        </Link>
                      </div>
                    ) : null}
                  </div>
                );
              }

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={[
                    "mobile-nav-link",
                    isActive ? "border-accent/[0.28] bg-accent/[0.08] text-accent" : "border-pearl/0 text-pearl/[0.78]",
                  ].join(" ")}
                  aria-current={isActive ? "page" : undefined}
                  onClick={() => {
                    if (item.href.startsWith("/#")) {
                      setActiveHash(item.href.replace("/", ""));
                    }
                    setIsOpen(false);
                  }}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>
          <a
            className="header-cta site-shell flex w-full"
            href={getWhatsAppLink(whatsappMessages.general)}
            target="_blank"
            onClick={() => setIsOpen(false)}
          >
            Falar com a Cláudia
          </a>
        </div>
      ) : null}
    </header>
  );
}
