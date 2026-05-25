import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/lib/site-config";
import { getWhatsAppLink, whatsappMessages } from "@/lib/whatsapp";

export function Footer() {
  return (
    <footer className="bg-deep text-pearl">
      <div className="site-shell grid gap-10 py-12 md:grid-cols-[1.2fr_0.8fr_0.8fr]">
        <div>
          <div className="brand-logo-frame mb-5 h-20 w-48 rounded-[26px]">
            <Image src={siteConfig.logo} alt={siteConfig.name} fill sizes="176px" className="object-cover" />
          </div>
          <p className="display-font text-3xl">{siteConfig.name}</p>
          <p className="mt-2 text-sm uppercase tracking-[0.2em] text-pearl/50">{siteConfig.role}</p>
          <p className="mt-5 max-w-sm text-sm leading-7 text-pearl/62">
            Atendimento consultivo para compra, venda e investimento em empreendimentos, com foco em
            confiança, clareza e estratégia.
          </p>
        </div>

        <div>
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-pearl/45">Contato</p>
          <div className="mt-5 grid gap-3 text-sm text-pearl/72">
            <a href={siteConfig.instagramUrl} target="_blank" className="hover:text-pearl">
              Instagram
            </a>
            <a href={getWhatsAppLink(whatsappMessages.general)} target="_blank" className="hover:text-pearl">
              WhatsApp
            </a>
            <span>{siteConfig.creciLabel}</span>
          </div>
        </div>

        <div>
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-pearl/45">Institucional</p>
          <div className="mt-5 grid gap-3 text-sm text-pearl/72">
            <Link href="/imoveis" className="hover:text-pearl">
              Empreendimentos disponíveis
            </Link>
            <Link href="/#lancamentos" className="hover:text-pearl">
              Lançamentos
            </Link>
            <Link href="/#investidores" className="hover:text-pearl">
              Investidores
            </Link>
          </div>
        </div>
      </div>

      <div className="border-t border-pearl/10">
        <div className="site-shell flex flex-col gap-3 py-5 text-xs text-pearl/45 sm:flex-row sm:items-center sm:justify-between">
          <span>© 2026 {siteConfig.name}. Todos os direitos reservados.</span>
          <a href={siteConfig.moralesUrl} className="hover:text-pearl">
            Desenvolvido por Morales Soluções
          </a>
        </div>
      </div>
    </footer>
  );
}
