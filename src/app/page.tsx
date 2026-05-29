import { featuredProperties, properties } from "@/data/properties";
import { HeroPropertyCarousel } from "@/components/site/HeroPropertyCarousel";
import { HomePropertySearch } from "@/components/site/HomePropertySearch";
import { HomeFeaturedVitrine } from "@/components/site/HomeFeaturedVitrine";
import { getWhatsAppLink, whatsappMessages } from "@/lib/whatsapp";
import { ScrollReveal } from "@/components/site/ScrollReveal";
import { siteConfig } from "@/lib/site-config";
import { PremiumSectionTitle } from "@/components/site/PremiumSectionTitle";

const categories = [
  {
    title: "Lançamentos",
    text: "Gallery Cambuí, Belgravia, Alto das Mansões e HOX Cambuí em uma curadoria de lançamentos em Campinas.",
    href: "/imoveis?status=lancamento",
  },
  {
    title: "Entrega prevista",
    text: "Luce Cambuí com entrega em 2026 e Intento Cambuí com previsão para 2027. Planeje seu novo lar.",
    href: "/imoveis?status=entrega-prevista",
  },
  {
    title: "Prontos para morar",
    text: "Oportunidades prontas de altíssimo padrão, como o Grand Paysage, prontas para receber sua família.",
    href: "/imoveis?status=pronto-para-morar",
  },
  {
    title: "Perfil investidor",
    text: "Studios, lofts e compactos com excelente rentabilidade, alto potencial de locação e valorização patrimonial.",
    href: "/imoveis?perfil=investidor",
  },
];

export default function Home() {
  return (
    <>
      {/* 1. Hero / carrossel de destaques */}
      <HeroPropertyCarousel properties={featuredProperties} />

      {/* 2. Busca rápida / chamada para catálogo */}
      <HomePropertySearch properties={properties} />

      {/* 3. Empreendimentos em destaque com paginação */}
      <HomeFeaturedVitrine properties={featuredProperties} />

      {/* 4. Bloco de navegação por intenção */}
      <section className="section-y bg-background">
        <div className="site-shell grid gap-8">
          <div className="reveal">
            <PremiumSectionTitle
              kicker="Categorias"
              title="Navegação por intenção."
              description="Selecione o momento ou o perfil de imóvel ideal para alinhar a busca ao seu objetivo de vida."
              theme="light"
              align="left"
            />
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {categories.map((category, index) => (
              <a
                key={category.title}
                href={category.href}
                className="group flex flex-col justify-between min-h-[260px] rounded-site border border-line bg-surface p-6 shadow-soft transition duration-300 hover:-translate-y-1 hover:border-accent/60 hover:shadow-lift"
              >
                <div>
                  <span className="text-sm font-bold text-accent">0{index + 1}</span>
                  <h3 className="display-font mt-6 text-2xl leading-tight">{category.title}</h3>
                  <p className="mt-4 text-xs leading-6 text-muted">{category.text}</p>
                </div>
                <span className="mt-6 inline-flex text-xs font-bold text-ink transition group-hover:text-accent">
                  Explorar perfil
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Sobre Cláudia Carlini (fechamento institucional) */}
      <section id="sobre" className="section-y bg-[#080808] text-pearl relative overflow-hidden">
        {/* Living, warm ambient background depth */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#080808] via-[#0f0e0c] to-[#080808] opacity-98" />
        
        {/* Glow 1: Slow-drifting warm spot (optimized size and blur for mobile performance) */}
        <div className="absolute -top-20 -left-20 h-[280px] w-[280px] md:h-[420px] md:w-[420px] rounded-full bg-accent/4 opacity-40 md:opacity-60 blur-[70px] md:blur-[130px] pointer-events-none animate-drift" />
        
        {/* Glow 2: Reverse slow-drifting warm spot (optimized size and blur for mobile performance) */}
        <div className="absolute -bottom-20 -right-20 h-[280px] w-[280px] md:h-[420px] md:w-[420px] rounded-full bg-accent/4 opacity-40 md:opacity-60 blur-[70px] md:blur-[130px] pointer-events-none animate-drift-reverse" />

        <div className="site-shell relative z-10 grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16 lg:items-center">
          
          {/* Column 1: Asymmetrical Editorial Composition */}
          <ScrollReveal delayMs={100} className="relative flex items-center justify-center p-6 lg:p-8 select-none">
            {/* Ambient gold backlight glow with slow pulsing shimmer (optimized for mobile) */}
            <div className="absolute top-1/2 left-1/2 h-[260px] w-[260px] md:h-[350px] md:w-[350px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-tr from-accent/16 via-accent/2 to-transparent opacity-60 blur-[60px] md:blur-[100px] pointer-events-none animate-shimmer-subtle" />
            
            {/* The Editorial Canvas Container */}
            <div className="relative w-full max-w-[340px] h-[460px] rounded-[32px] border border-pearl/10 bg-[#0c0c0c]/80 shadow-2xl overflow-visible flex items-end justify-center">
              
              {/* Internal subtle geometric layout guidelines */}
              <div className="absolute inset-0 rounded-[30px] overflow-hidden pointer-events-none">
                <div className="absolute inset-0 bg-gradient-to-b from-[#141414]/30 via-transparent to-[#080808]" />
                {/* Asymmetric intersecting golden lines for editorial layout detail */}
                <div className="absolute left-6 inset-y-0 w-px bg-pearl/5" />
                <div className="absolute right-12 inset-y-0 w-px bg-pearl/5" />
                <div className="absolute inset-x-0 top-16 h-px bg-pearl/5" />
                <div className="absolute inset-x-0 bottom-24 h-px bg-pearl/5" />
                
              </div>
              
              {/* Overlapping, offset gold frame border inside the canvas */}
              <div className="absolute top-5 bottom-5 left-5 right-5 rounded-[22px] border border-accent/15 bg-gradient-to-b from-accent/[0.02] to-transparent pointer-events-none" />
              
              {/* Optimized Portrait of Cláudia (WebP) rising above the container boundary */}
              <img
                src={`${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}/img/claudia-pessoal.webp`}
                alt="Cláudia Carlini"
                className="absolute -top-12 z-10 h-[calc(100%+48px)] w-[84%] object-contain drop-shadow-[0_20px_35px_rgba(0,0,0,0.9)] transform transition duration-500 hover:scale-[1.02]"
              />
              
              {/* Floating Glassmorphic Interview Quote Badge */}
              <div className="absolute -bottom-6 -right-6 md:-right-10 z-20 max-w-[250px] rounded-2xl border border-accent/20 bg-deep/94 p-5 backdrop-blur-xl shadow-[0_15px_40px_rgba(0,0,0,0.7)] hover:border-accent/40 transition duration-300">
                <span className="text-2xl font-serif text-accent leading-none block mb-1">“</span>
                <p className="text-[11px] italic leading-relaxed text-accentSoft/90 display-font">
                  Mais do que imóveis, histórias, escolhas e novos ciclos.
                </p>
              </div>
            </div>
          </ScrollReveal>

          {/* Column 2: Narrative and Credentials Grid */}
          <div className="max-w-2xl">
            <ScrollReveal delayMs={200}>
              <PremiumSectionTitle
                kicker="Sobre"
                title="Conheça Cláudia Carlini"
                theme="dark"
                align="left"
                className="mb-6"
              />
              
              <p className="mt-8 text-[1.08rem] leading-8 text-pearl/80 font-light">
                Cláudia Carlini construiu uma trajetória marcada por atendimento, relacionamento e experiência no comércio. Foram 34 anos de atuação, sendo 29 deles no segmento de materiais para construção, vivenciando de perto o universo de obras, lares e realizações.
              </p>
              <p className="mt-4 text-[1.08rem] leading-8 text-pearl/80 font-light">
                Hoje, como corretora imobiliária, une essa bagagem à paixão por ajudar pessoas a encontrarem o imóvel ideal para cada momento de vida. Seu trabalho é guiado por propósito, escuta atenta e uma consultoria próxima, transparente e estratégica.
              </p>
              <p className="mt-5 text-xs font-semibold uppercase tracking-[0.18em] text-pearl/45">
                {siteConfig.creciLabel}
              </p>
            </ScrollReveal>
            
            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              {/* Card 1 */}
              <ScrollReveal delayMs={150}>
                <div className="group relative h-full rounded-2xl border border-pearl/6 bg-gradient-to-b from-pearl/[0.02] to-transparent p-5 backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:border-accent/40 hover:bg-pearl/[0.04] hover:shadow-[0_12px_24px_rgba(0,0,0,0.3)]">
                  <span className="absolute top-5 left-0 w-[2px] h-6 bg-accent/40 group-hover:bg-accent group-hover:h-8 transition-all duration-300" />
                  <h3 className="display-font text-2xl font-light text-accent">34 anos</h3>
                  <p className="mt-2 text-xs font-light text-pearl/60 leading-relaxed">de experiência com atendimento e relacionamento</p>
                </div>
              </ScrollReveal>
              
              {/* Card 2 */}
              <ScrollReveal delayMs={250}>
                <div className="group relative h-full rounded-2xl border border-pearl/6 bg-gradient-to-b from-pearl/[0.02] to-transparent p-5 backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:border-accent/40 hover:bg-pearl/[0.04] hover:shadow-[0_12px_24px_rgba(0,0,0,0.3)]">
                  <span className="absolute top-5 left-0 w-[2px] h-6 bg-accent/40 group-hover:bg-accent group-hover:h-8 transition-all duration-300" />
                  <h3 className="display-font text-2xl font-light text-accent">29 anos</h3>
                  <p className="mt-2 text-xs font-light text-pearl/60 leading-relaxed">no segmento de materiais para construção</p>
                </div>
              </ScrollReveal>
              
              {/* Card 3 */}
              <ScrollReveal delayMs={350}>
                <div className="group relative h-full rounded-2xl border border-pearl/6 bg-gradient-to-b from-pearl/[0.02] to-transparent p-5 backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:border-accent/40 hover:bg-pearl/[0.04] hover:shadow-[0_12px_24px_rgba(0,0,0,0.3)]">
                  <span className="absolute top-5 left-0 w-[2px] h-6 bg-accent/40 group-hover:bg-accent group-hover:h-8 transition-all duration-300" />
                  <h3 className="display-font text-2xl font-light text-accent">Propósito</h3>
                  <p className="mt-2 text-xs font-light text-pearl/60 leading-relaxed">consultoria imobiliária próxima e estratégica</p>
                </div>
              </ScrollReveal>
              
              {/* Card 4 */}
              <ScrollReveal delayMs={450}>
                <div className="group relative h-full rounded-2xl border border-pearl/6 bg-gradient-to-b from-pearl/[0.02] to-transparent p-5 backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:border-accent/40 hover:bg-pearl/[0.04] hover:shadow-[0_12px_24px_rgba(0,0,0,0.3)]">
                  <span className="absolute top-5 left-0 w-[2px] h-6 bg-accent/40 group-hover:bg-accent group-hover:h-8 transition-all duration-300" />
                  <h3 className="display-font text-2xl font-light text-accent">Investidora</h3>
                  <p className="mt-2 text-xs font-light text-pearl/60 leading-relaxed">visão prática para moradia e oportunidades</p>
                </div>
              </ScrollReveal>
            </div>
          </div>
          
        </div>
      </section>

      {/* 6. CTA final */}
      <section id="contato" className="section-y bg-surface">
        <div className="site-shell rounded-[36px] border border-line bg-background p-8 text-center shadow-soft sm:p-14">
          <PremiumSectionTitle
            kicker="Contato"
            title="Quer encontrar o imóvel certo com orientação personalizada?"
            description="Fale com a Cláudia e receba uma curadoria alinhada ao seu momento, perfil e objetivo."
            theme="light"
            align="center"
            className="max-w-3xl mx-auto mb-4"
          />
          <a
            className="button-primary mt-8"
            href={getWhatsAppLink(whatsappMessages.general)}
            target="_blank"
            rel="noreferrer"
          >
            Falar com a Cláudia
          </a>
        </div>
      </section>
    </>
  );
}
