import type { Metadata } from "next"
import { ScrollReveal } from "@/components/shared/scroll-reveal"
import { PlansSection } from "@/components/sections/plans"
import { FaqSection } from "@/components/sections/faq"
import { CtaSection } from "@/components/sections/cta"

export const metadata: Metadata = {
  title: "Consórcios",
  description:
    "Consórcios imobiliários e automotivos sem juros. Planos de R$ 50 mil a R$ 500 mil com lance embutido de 30%. Simule grátis.",
}

export default function ConsorcioPage() {
  return (
    <>
      <section className="pt-40 pb-20 px-4 dark-gradient text-white">
        <div className="mx-auto max-w-4xl text-center">
          <ScrollReveal>
            <h1 className="text-4xl font-bold md:text-5xl lg:text-6xl mb-6">
              Consórcios Sem Juros
            </h1>
            <p className="text-xl text-white/80 max-w-2xl mx-auto">
              Realize seus sonhos sem pagar juros abusivos. Planeje sua compra com parcelas que cabem no seu bolso.
            </p>
          </ScrollReveal>
        </div>
      </section>
      <PlansSection />
      <section className="py-20 px-4 bg-gray-50">
        <div className="mx-auto max-w-3xl">
          <ScrollReveal>
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Como funciona o consórcio?
            </h2>
            <div className="grid gap-6 md:grid-cols-3">
              {[
                { step: "01", title: "Escolha o plano", desc: "Selecione o valor e prazo que melhor se encaixa no seu orçamento." },
                { step: "02", title: "Pague as parcelas", desc: "Contribua mensalmente sem juros. Apenas taxa de administração." },
                { step: "03", title: "Seja contemplado", desc: "Por sorteio ou lance. Receba o crédito e adquira seu bem." },
              ].map((item) => (
                <div key={item.step} className="text-center">
                  <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-100 text-blue-600 text-xl font-bold">
                    {item.step}
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-500">{item.desc}</p>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>
      <FaqSection />
      <CtaSection />
    </>
  )
}
