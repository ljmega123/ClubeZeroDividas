import Link from "next/link"
import { ScrollReveal } from "@/components/shared/scroll-reveal"
import { TrendingUp, Globe, HeadphonesIcon, BarChart3 } from "lucide-react"

const benefits = [
  {
    icon: TrendingUp,
    title: "Ganhos acima de R$ 5.000/mês",
    desc: "Comissões atrativas por cada venda realizada através do seu link.",
  },
  {
    icon: Globe,
    title: "Negócio escalável e 100% online",
    desc: "Trabalhe de onde quiser, no seu ritmo. Sem horário fixo.",
  },
  {
    icon: HeadphonesIcon,
    title: "Suporte total para vendas",
    desc: "Materiais, treinamento e equipe dedicada para o seu sucesso.",
  },
  {
    icon: BarChart3,
    title: "Sem experiência necessária",
    desc: "Tudo que você precisa para começar está pronto. Nós te guiamos.",
  },
]

export function AffiliatesSection() {
  return (
    <section className="py-20 px-4 bg-gray-50 md:py-32">
      <div className="mx-auto max-w-6xl">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">
              Renda Extra — Seja Afiliado
            </h2>
            <p className="mt-4 text-lg text-gray-500 max-w-2xl mx-auto">
              Ajude outras pessoas a terem soluções financeiras inteligentes e receba ótimas comissões por cada indicação.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map((item, i) => (
            <ScrollReveal key={item.title} delay={i * 0.1}>
              <div className="rounded-3xl bg-white p-8 border border-gray-100 shadow-sm hover-lift cursor-default text-center">
                <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-100 text-blue-600">
                  <item.icon className="h-6 w-6" />
                </div>
                <h3 className="text-base font-semibold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-sm text-gray-500">{item.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal>
          <div className="mt-12 text-center">
            <Link
              href="/afiliados"
              className="inline-flex items-center rounded-full bg-blue-600 px-8 py-4 text-base font-semibold text-white transition-all hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-500/25 focus-ring"
            >
              Quero ser afiliado
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
