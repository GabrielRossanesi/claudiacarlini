import type { Metadata } from "next";
import { properties } from "@/data/properties";
import { PropertyCatalog } from "@/components/properties/PropertyCatalog";

export const metadata: Metadata = {
  title: "Empreendimentos | Cláudia Carlini",
  description: "Catálogo de empreendimentos em Campinas: lançamentos, entrega prevista, prontos para morar e oportunidades para investir.",
};

export default function PropertiesPage() {
  return (
    <section className="section-y bg-background">
      <div className="site-shell grid gap-10">
        <div className="max-w-3xl reveal">
          <p className="eyebrow">Imóveis</p>
          <h1 className="display-font mt-3 text-5xl leading-tight sm:text-6xl">Catálogo de empreendimentos</h1>
          <p className="mt-5 text-lg leading-8 text-muted">
            Uma vitrine com os empreendimentos reais da Cláudia Carlini em Campinas, incluindo lançamentos,
            imóveis com entrega prevista, oportunidades para investidores e informações sob consulta quando
            os dados comerciais ainda dependem de confirmação.
          </p>
        </div>
        <PropertyCatalog properties={properties} />
      </div>
    </section>
  );
}
