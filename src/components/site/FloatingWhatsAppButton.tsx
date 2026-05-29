import { getWhatsAppLink, whatsappMessages } from "@/lib/whatsapp";

export function FloatingWhatsAppButton() {
  return (
    <a
      href={getWhatsAppLink(whatsappMessages.general)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar com a Claudia pelo WhatsApp"
      className="group fixed bottom-24 right-4 z-[70] inline-flex h-14 min-w-14 items-center justify-center gap-2 rounded-full border border-white/18 bg-[#25d366] px-4 text-sm font-extrabold text-[#06160c] shadow-[0_18px_42px_rgba(0,0,0,0.28)] transition duration-300 hover:-translate-y-1 hover:bg-[#2be06f] hover:shadow-[0_22px_52px_rgba(37,211,102,0.34)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#25d366] focus-visible:ring-offset-2 focus-visible:ring-offset-deep md:bottom-6 md:right-6"
    >
      <svg
        aria-hidden="true"
        viewBox="0 0 32 32"
        className="h-6 w-6 shrink-0 transition duration-300 group-hover:scale-105"
        fill="currentColor"
      >
        <path d="M16.02 3.2A12.72 12.72 0 0 0 5.2 22.6L3.8 28.8l6.34-1.48A12.72 12.72 0 1 0 16.02 3.2Zm0 2.3a10.42 10.42 0 0 1 0 20.84 10.3 10.3 0 0 1-5.28-1.46l-.42-.25-3.36.78.74-3.28-.28-.44A10.42 10.42 0 0 1 16.02 5.5Zm-4.2 4.54c-.24 0-.62.09-.94.43-.32.35-1.23 1.2-1.23 2.93s1.26 3.4 1.43 3.64c.18.23 2.43 3.9 6.02 5.3 2.98 1.18 3.6.94 4.25.88.65-.06 2.1-.86 2.4-1.7.3-.82.3-1.53.2-1.68-.08-.15-.32-.24-.68-.42-.35-.18-2.1-1.04-2.43-1.15-.32-.12-.56-.18-.8.18-.23.35-.91 1.15-1.12 1.39-.2.24-.41.27-.77.09-.35-.18-1.5-.55-2.86-1.76-1.06-.94-1.78-2.11-1.99-2.47-.2-.35-.02-.55.16-.73.16-.16.35-.41.53-.62.18-.2.24-.35.36-.59.12-.24.06-.44-.03-.62-.09-.18-.8-1.93-1.1-2.64-.28-.68-.58-.59-.8-.6l-.68-.01Z" />
      </svg>
      <span className="hidden pr-1 sm:inline">WhatsApp</span>
    </a>
  );
}
