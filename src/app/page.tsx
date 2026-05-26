import Link from "next/link";
import { featuredProperties, properties } from "@/data/properties";
import { HeroPropertyCarousel } from "@/components/site/HeroPropertyCarousel";
import { HomePropertySearch } from "@/components/site/HomePropertySearch";
import { PropertyGrid } from "@/components/properties/PropertyGrid";
import { getWhatsAppLink, whatsappMessages } from "@/lib/whatsapp";

const categories = [
  {
    title: "Lançamentos",
    text: "Gallery Cambuí, Belgravia, Alto das Mansões e HOX Cambuí em uma curadoria de lançamentos em Campinas.",
    href: "/imoveis",
  },
  {
    title: "Entrega prevista",
    text: "Luce Cambuí com entrega em setembro de 2026 e Intento Cambuí com previsão para março de 2027.",
    href: "/#entrega-prevista",
  },
  {
    title: "Investidores",
    text: "Studios, lofts, compactos e produtos com potencial de locação e valorização, com destaque para HOX e Alto das Mansões.",
    href: "/#investidores",
  },
];

export default function Home() {
  const showcaseProperties = properties.slice(0, 6);
  const launchProperties = properties.filter((property) => property.tags.includes("Lançamentos"));
  const deliveryProperties = properties.filter((property) => property.category === "Entrega prevista");
  const readyProperties = properties.filter((property) => property.category === "Prontos para morar");
  const investorProperties = properties.filter((property) => property.category === "Investimento");

  return (
    <>
      <HeroPropertyCarousel properties={featuredProperties} />
      <HomePropertySearch properties={properties} />

      <section className="section-y bg-surface">
        <div className="site-shell grid gap-10">
          <div className="max-w-3xl reveal">
            <p className="eyebrow">Vitrine</p>
            <h2 className="display-font mt-3 text-4xl leading-tight sm:text-5xl">
              Empreendimentos selecionados pela Cláudia Carlini.
            </h2>
          </div>
          <PropertyGrid properties={showcaseProperties} />
        </div>
      </section>

      <section className="section-y bg-background">
        <div className="site-shell grid gap-6 lg:grid-cols-3">
          {categories.map((category, index) => (
            <Link
              key={category.title}
              href={category.href}
              className="group min-h-72 rounded-site border border-line bg-surface p-7 shadow-soft transition duration-300 hover:-translate-y-1 hover:border-accent/60 hover:shadow-lift"
            >
              <span className="text-sm font-bold text-accent">0{index + 1}</span>
              <h3 className="display-font mt-10 text-3xl leading-tight">{category.title}</h3>
              <p className="mt-5 text-sm leading-7 text-muted">{category.text}</p>
              <span className="mt-8 inline-flex text-sm font-bold text-ink transition group-hover:text-accent">
                Explorar perfil
              </span>
            </Link>
          ))}
        </div>
      </section>

      <section id="sobre" className="section-y bg-deep text-pearl">
        <div className="site-shell grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          <div className="relative min-h-[460px] overflow-hidden rounded-[32px] border border-pearl/10 bg-pearl/10">
            <img
              src={`${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}/img/claudia-portrait.webp`}
              alt="Cláudia Carlini - Consultoria Imobiliária"
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-deep via-deep/50 to-transparent" />
            <div className="absolute inset-x-8 bottom-8 rounded-[28px] border border-pearl/14 bg-deep/74 p-6 backdrop-blur-md">
              <p className="text-sm uppercase tracking-[0.18em] text-accentSoft">Cláudia Carlini</p>
              <p className="display-font mt-2 text-2xl text-pearl">Consultoria Imobiliária Premium</p>
            </div>
          </div>

          <div className="max-w-2xl">
            <p className="eyebrow text-accentSoft">Sobre</p>
            <h2 className="display-font mt-3 text-5xl leading-tight">Conheça Cláudia Carlini</h2>
            <p className="mt-6 text-lg leading-8 text-pearl/72">
              Cláudia Carlini atua no mercado imobiliário oferecendo uma consultoria próxima,
              transparente e personalizada para quem busca comprar, vender ou investir em imóveis.
              Seu atendimento é voltado para entender o momento de cada cliente e apresentar as
              melhores oportunidades com segurança e estratégia.
            </p>
            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              <div className="rounded-2xl border border-pearl/12 p-4">
                <p className="text-xs uppercase tracking-[0.14em] text-pearl/42">Região atendida</p>
                <p className="mt-2 text-sm font-bold text-pearl">Campinas e Região</p>
              </div>
              <div className="rounded-2xl border border-pearl/12 p-4">
                <p className="text-xs uppercase tracking-[0.14em] text-pearl/42">Foco de atuação</p>
                <p className="mt-2 text-sm font-bold text-pearl">Médio e Alto Padrão</p>
              </div>
              <div className="rounded-2xl border border-pearl/12 p-4">
                <p className="text-xs uppercase tracking-[0.14em] text-pearl/42">Especialidades</p>
                <p className="mt-2 text-sm font-bold text-pearl">Moradia e Investimento</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="lancamentos" className="section-y bg-surface">
        <div className="site-shell grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p className="eyebrow">Lançamentos</p>
            <h2 className="display-font mt-3 text-5xl leading-tight">Acabaram de lançar em Campinas</h2>
            <p className="mt-6 text-lg leading-8 text-muted">
              Gallery Cambuí Residence, Belgravia Nova Campinas, Alto das Mansões e HOX Cambuí
              compõem a seleção atual de lançamentos, com diferentes perfis de moradia e investimento.
            </p>
            <a className="button-dark mt-8" href={getWhatsAppLink(whatsappMessages.launches)} target="_blank">
              Consultar lançamentos disponíveis
            </a>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {launchProperties.map((property) => (
                <Link
                  key={property.id}
                  href={`/imoveis/${property.slug}`}
                  className="group overflow-hidden rounded-site border border-line bg-background shadow-soft transition duration-300 hover:-translate-y-1 hover:border-accent/50 hover:shadow-lift"
                >
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src={property.images[0]}
                      alt={property.title}
                      className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-5">
                    <p className="text-xs uppercase tracking-[0.16em] text-muted">{property.status}</p>
                    <h3 className="display-font mt-2 text-2xl">{property.title}</h3>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </section>

      <section id="entrega-prevista" className="section-y bg-background">
        <div className="site-shell grid gap-8">
          <div className="max-w-3xl">
            <p className="eyebrow">Entrega prevista</p>
            <h2 className="display-font mt-3 text-5xl leading-tight">Cambuí com horizonte de entrega definido</h2>
            <p className="mt-5 text-lg leading-8 text-muted">
              Luce Cambuí tem entrega prevista para setembro de 2026. Intento Cambuí tem previsão para março de 2027.
              Prazos e disponibilidade devem ser confirmados no atendimento.
            </p>
          </div>
          <PropertyGrid properties={deliveryProperties} />
        </div>
      </section>

      <section id="pronto-para-morar" className="section-y bg-surface">
        <div className="site-shell grid gap-8">
          <div className="max-w-3xl">
            <p className="eyebrow">Pronto para morar</p>
            <h2 className="display-font mt-3 text-5xl leading-tight">Oportunidades prontas para morar</h2>
            <p className="mt-5 text-lg leading-8 text-muted">
              O Grand Paysage destaca-se como uma excelente oportunidade de moradia pronta no mercado de alto padrão em Campinas.
              Informações sobre metragens, valores, vagas e condições comerciais detalhadas estão disponíveis sob consulta.
            </p>
          </div>
          <PropertyGrid properties={readyProperties} />
        </div>
      </section>

      <section id="investidores" className="bg-deep py-20 text-pearl">
        <div className="site-shell overflow-hidden rounded-[34px] border border-pearl/10 bg-pearl/6">
          <div className="grid lg:grid-cols-[1.1fr_0.9fr]">
            <div className="p-8 sm:p-12 lg:p-16">
              <p className="eyebrow text-accentSoft">Investidores</p>
              <h2 className="display-font mt-3 text-5xl leading-tight">Studios, lofts e compactos com estratégia</h2>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-pearl/72">
                Alto das Mansões e HOX Cambuí concentram os principais produtos da vitrine para investimento,
                com studios, lofts, compactos e tipologias com potencial de locação, conveniência e valorização.
              </p>
              <a className="button-primary mt-8" href={getWhatsAppLink(whatsappMessages.investors)} target="_blank">
                Quero investir em empreendimentos
              </a>
            </div>
            <div className="min-h-[360px]">
              <img
                src={investorProperties[0]?.images[0] ?? properties[0].images[0]}
                alt="Empreendimento para investimento"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="contato" className="section-y bg-background">
        <div className="site-shell rounded-[36px] border border-line bg-surface p-8 text-center shadow-soft sm:p-14">
          <p className="eyebrow">Contato</p>
          <h2 className="display-font mx-auto mt-3 max-w-3xl text-5xl leading-tight">
            Quer entender qual empreendimento combina com seu momento?
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-muted">
            Fale com a Cláudia para receber uma curadoria alinhada ao seu objetivo de moradia, investimento ou compra planejada.
          </p>
          <a className="button-primary mt-8" href={getWhatsAppLink(whatsappMessages.general)} target="_blank">
            Falar com a Cláudia
          </a>
        </div>
      </section>
    </>
  );
}
