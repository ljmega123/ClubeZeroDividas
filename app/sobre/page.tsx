import type { Metadata } from "next"
import { ScrollReveal } from "@/components/shared/scroll-reveal"
import { Target, Eye, Heart } from "lucide-react"
import { AboutSection } from "@/components/sections/about"
import { SolutionsSection } from "@/components/sections/solutions"
import { TestimonialsSection } from "@/components/sections/testimonials"
import { FaqSection } from "@/components/sections/faq"
import { CtaSection } from "@/components/sections/cta"

export const metadata: Metadata = {
  title: "Sobre Nós",
  description:
    "Conheça a história do Clube Zero Dívidas. Mais que uma fintech, um ecossistema de soluções financeiras inteligentes.",
}

const values = [
  { icon: Target, title: "Missão", desc: "Democratizar o acesso a soluções financeiras inteligentes." },
  { icon: Eye, title: "Visão", desc: "Ser referência em educação e inclusão financeira no Brasil." },
  { icon: Heart, title: "Valores", desc: "Transparência, inovação, confiança e resultado." },
]

export default function SobrePage() {
  return (
    <>
      <section className="pt-40 pb-20 px-4 dark-gradient text-white">
        <div className="mx-auto max-w-4xl text-center">
          <ScrollReveal>
            <h1 className="text-4xl font-bold md:text-5xl lg:text-6xl mb-6">
              Nossa História
            </h1>
            <p className="text-xl text-white/80 max-w-2xl mx-auto">
              Mais que uma fintech — um ecossistema de soluções financeiras inteligentes
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="mx-auto max-w-4xl">
          <ScrollReveal>
            <div className="prose prose-gray max-w-none">
              <p className="text-lg text-gray-600 leading-relaxed">
                O Clube Zero Dívidas nasceu da visão de que o brasileiro merece acesso a soluções financeiras justas, 
                transparentes e inteligentes. Em um mercado dominado por juros abusivos e burocracia desnecessária, 
                criamos um ecossistema completo de produtos financeiros que colocam o cliente em primeiro lugar.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed mt-6">
                Atendemos desde consórcios sem juros até recuperação de crédito, passando por empréstimos, financiamentos, seguros e soluções empresariais. 
                Nossa equipe é dedicada a transformar a relação das pessoas com o dinheiro.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="py-20 px-4 bg-gray-50">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-8 md:grid-cols-3">
            {values.map((item, i) => (
              <ScrollReveal key={item.title} delay={i * 0.1}>
                <div className="rounded-3xl bg-white p-8 border border-gray-100 shadow-sm text-center hover:shadow-xl hover:border-blue-100 transition-all">
                  <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-100 text-blue-600">
                    <item.icon className="h-7 w-7" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                  <p className="text-gray-500">{item.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="mx-auto max-w-4xl text-center">
          <ScrollReveal>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Aliança Afiliados Digital LTDA
            </h2>
            <p className="text-gray-500">
              CNPJ: 66.298.322/0001-77
            </p>
          </ScrollReveal>
        </div>
      </section>

      <AboutSection />
      <SolutionsSection />
      <TestimonialsSection />
      <FaqSection />
      <CtaSection />
    </>
  )
}
