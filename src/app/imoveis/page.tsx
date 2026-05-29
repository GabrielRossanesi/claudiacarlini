import type { Metadata } from "next";
import { Suspense } from "react";
import { properties } from "@/data/properties";
import { PropertyCatalog } from "@/components/properties/PropertyCatalog";
import { PremiumSectionTitle } from "@/components/site/PremiumSectionTitle";

export const metadata: Metadata = {
  title: "Empreendimentos | Cláudia Carlini",
  description: "Catálogo de empreendimentos em Campinas: lançamentos, entrega prevista, prontos para morar e oportunidades para investir.",
};

export default function PropertiesPage() {
  return (
    <section className="section-y bg-background">
      <div className="site-shell grid gap-10">
        <div className="reveal">
          <PremiumSectionTitle
            kicker="Empreendimentos"
            title="Encontre o empreendimento ideal para o seu momento."
            description="Explore a seleção de oportunidades e curadoria exclusiva de empreendimentos para moradia, investimento patrimonial e diferentes momentos de compra em Campinas."
            theme="light"
            align="left"
            titleAs="h1"
            className="max-w-3xl"
          />
        </div>
        <Suspense fallback={<div className="text-muted py-10 text-center">Carregando catálogo...</div>}>
          <PropertyCatalog properties={properties} />
        </Suspense>
      </div>
    </section>
  );
}
