import { getWhatsAppLink, whatsappMessages } from "@/lib/whatsapp";

export function FloatingWhatsAppButton() {
  return (
    <a
      href={getWhatsAppLink(whatsappMessages.general)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar com a Claudia pelo WhatsApp"
      className="group fixed bottom-24 right-4 z-[70] inline-flex h-14 w-14 items-center justify-center rounded-full border border-[#25d366]/80 bg-deep/55 text-[#25d366] shadow-[0_18px_42px_rgba(0,0,0,0.24)] backdrop-blur-md transition duration-300 hover:-translate-y-1 hover:border-[#25d366] hover:bg-[#25d366]/10 hover:shadow-[0_22px_52px_rgba(37,211,102,0.22)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#25d366] focus-visible:ring-offset-2 focus-visible:ring-offset-deep md:bottom-6 md:right-6"
    >
      <svg
        aria-hidden="true"
        viewBox="0 0 32 32"
        className="h-7 w-7 shrink-0 transition duration-300 group-hover:scale-105"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.8"
      >
        <path d="M16 4.5A11.5 11.5 0 0 0 6.2 22l-1.4 5.2 5.35-1.25A11.5 11.5 0 1 0 16 4.5Z" />
        <path d="M12 10.8c-.3 0-.78.1-1.18.54-.4.43-1.52 1.48-1.52 3.62 0 2.13 1.56 4.2 1.78 4.48.22.3 3.02 4.78 7.42 6.48 3.1 1.2 4.24 1.02 5 .9.76-.11 2.44-1 2.78-1.98.34-.98.34-1.8.24-1.98-.1-.18-.38-.28-.8-.5-.42-.2-2.46-1.21-2.84-1.34-.38-.14-.66-.2-.94.22-.28.42-1.08 1.34-1.33 1.62-.24.28-.48.31-.9.1-.42-.2-1.76-.65-3.36-2.08-1.24-1.1-2.08-2.48-2.32-2.9-.24-.42-.03-.65.18-.86.2-.2.42-.5.63-.74.2-.25.28-.42.42-.7.14-.28.07-.52-.04-.74-.1-.2-.94-2.26-1.28-3.1-.34-.8-.68-.74-.94-.75H12Z" />
      </svg>
    </a>
  );
}
