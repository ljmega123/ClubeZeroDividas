import type { Metadata } from "next"
import Link from "next/link"
import { ScrollReveal } from "@/components/shared/scroll-reveal"
import { CtaSection } from "@/components/sections/cta"
import { ShieldCheck, TrendingUp, FileSearch } from "lucide-react"

export const metadata: Metadata = {
  title: "Recuperação de Crédito",
  description:
    "Limpa nome, score e Bacen. Recupere seu crédito e volte ao mercado financeiro com força total.",
}

const services = [
  {
    icon: ShieldCheck,
    title: "Limpa Nome",
    desc: "Retirada de apontamentos nos órgãos de proteção ao crédito. Foco em SPC e Serasa. Processo 100% legalizado.",
  },
  {
    icon: TrendingUp,
    title: "Score e Rating",
    desc: "Melhoria na sua pontuação de crédito para facilitar financiamentos e aprovações. Destrava Score e melhora do Rating Bancário.",
  },
  {
    icon: FileSearch,
    title: "Limpa Bacen",
    desc: "Remoção de restrições internas no Banco Central (Registrato). Limpeza de histórico interno para recuperar crédito em bancos.",
  },
]

export default function RecuperacaoPage() {
  return (
    <>
      <section className="pt-40 pb-20 px-4 dark-gradient text-white">
        <div className="mx-auto max-w-4xl text-center">
          <ScrollReveal>
            <h1 className="text-4xl font-bold md:text-5xl lg:text-6xl mb-6">
              Recuperação de Crédito
            </h1>
            <p className="text-xl text-white/80 max-w-2xl mx-auto">
              Tudo o que você precisa para voltar ao mercado financeiro com força total.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-8 md:grid-cols-3">
            {services.map((service, i) => (
              <ScrollReveal key={service.title} delay={i * 0.1}>
                <div className="rounded-3xl bg-white p-8 border border-gray-100 shadow-sm hover-lift h-full">
                  <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-green-100 to-emerald-100 text-green-600">
                    <service.icon className="h-7 w-7" />
                  </div>
                  <h2 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h2>
                  <p className="text-gray-500 leading-relaxed">{service.desc}</p>
                  <Link
                    href="/contato"
                    className="mt-6 inline-flex items-center rounded-full bg-blue-600 px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-blue-700 focus-ring"
                  >
                    Quero recuperar meu crédito
                  </Link>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-gray-50">
        <div className="mx-auto max-w-3xl">
          <ScrollReveal>
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Como funciona?
            </h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {[
                { step: "1", title: "Consulta", desc: "Analisamos sua situação cadastral gratuitamente." },
                { step: "2", title: "Contrata", desc: "Escolha o serviço ideal para seu caso." },
                { step: "3", title: "Regularização", desc: "Cuidamos de todo o processo burocrático." },
                { step: "4", title: "Pronto", desc: "Crédito recuperado e nome limpo." },
              ].map((item) => (
                <div key={item.step} className="text-center">
                  <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-green-100 text-green-600 text-lg font-bold">
                    {item.step}
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-1">{item.title}</h3>
                  <p className="text-sm text-gray-500">{item.desc}</p>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      <CtaSection />
    </>
  )
}
