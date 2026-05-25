"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { siteConfig } from "@/lib/site-config";
import { getWhatsAppLink, whatsappMessages } from "@/lib/whatsapp";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-pearl/10 bg-deep/90 text-pearl backdrop-blur-xl">
      <div className="site-shell flex h-[84px] items-center justify-between gap-5">
        <Link href="/" className="flex items-center" aria-label="Ir para a página inicial">
          <Image
            src={siteConfig.logo}
            alt="Cláudia Carlini Consultoria Imobiliária"
            width={180}
            height={64}
            sizes="(min-width: 768px) 180px, 138px"
            className="h-10 w-auto object-contain md:h-12"
            priority
          />
        </Link>

        <nav className="hidden items-center gap-7 text-sm text-pearl/72 lg:flex">
          {siteConfig.nav.map((item) => (
            <Link key={item.href} href={item.href} className="transition hover:text-pearl">
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a className="button-primary" href={getWhatsAppLink(whatsappMessages.general)} target="_blank">
            Falar com a Cláudia
          </a>
        </div>

        <button
          type="button"
          className="flex h-11 w-11 items-center justify-center rounded-full border border-pearl/20 lg:hidden"
          onClick={() => setIsOpen((value) => !value)}
          aria-label="Abrir menu"
          aria-expanded={isOpen}
        >
          <span className="grid gap-1.5">
            <span className="block h-px w-5 bg-pearl" />
            <span className="block h-px w-5 bg-pearl" />
          </span>
        </button>
      </div>

      {isOpen ? (
        <div className="border-t border-pearl/10 bg-deep px-4 pb-5 lg:hidden">
          <nav className="site-shell grid gap-1 py-3">
            {siteConfig.nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-2xl px-2 py-3 text-sm text-pearl/78 transition hover:bg-pearl/5 hover:text-pearl"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <a
            className="button-primary site-shell flex"
            href={getWhatsAppLink(whatsappMessages.general)}
            target="_blank"
          >
            Falar com a Cláudia
          </a>
        </div>
      ) : null}
    </header>
  );
}
