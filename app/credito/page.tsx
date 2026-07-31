import type { Metadata } from "next"
import Link from "next/link"
import { ScrollReveal } from "@/components/shared/scroll-reveal"
import { CtaSection } from "@/components/sections/cta"
import {
  Banknote,
  Wallet,
  PiggyBank,
  Building2,
  Briefcase,
  Landmark,
} from "lucide-react"

export const metadata: Metadata = {
  title: "Crédito e Empréstimos",
  description:
    "Crédito consignado, FGTS, empréstimos pessoais e financiamentos. Taxas especiais para você e sua empresa.",
}

const creditServices = [
  {
    icon: Banknote,
    title: "Crédito Consignado",
    desc: "Taxas baixas com parcelas debitadas em folha. Para INSS, servidores públicos, militares e trabalhadores privados.",
    items: ["Beneficiários do INSS", "Servidores Públicos e SIAPE", "Militares (Forças Armadas)", "Trabalhadores de Empresas Privadas"],
  },
  {
    icon: Wallet,
    title: "Empréstimos",
    desc: "Crédito rápido disponível para pessoas físicas, inclusive negativados, com múltiplas opções de pagamento.",
    items: ["Débito em Conta ou Energia", "No cartão de crédito", "No boleto ou cheque", "Sem burocracia desnecessária"],
  },
  {
    icon: PiggyBank,
    title: "Antecipação FGTS",
    desc: "Antecipe até 10 parcelas do Saque-Aniversário de uma vez só e receba o dinheiro na hora.",
    items: ["Disponível para negativados", "Dinheiro na sua conta na hora", "Excelente para pagar dívidas", "Sem parcelas mensais pesadas"],
  },
  {
    icon: Building2,
    title: "Financiamentos",
    desc: "Contrate o seu financiamento com rapidez, de forma facilitada e muito segura.",
    items: ["Financiamento de Carros & Motos", "Financiamento de Caminhões", "Financiamento de Imóveis", "As melhores taxas do mercado"],
  },
  {
    icon: Briefcase,
    title: "Crédito do Trabalhador",
    desc: "Empréstimo especial com desconto direto na folha de pagamento de trabalhadores elegíveis.",
    items: ["Condições e taxas especiais", "Processo simples e seguro", "Ideal para reformar ou viajar", "Tranquilidade com as contas em dia"],
  },
  {
    icon: Landmark,
    title: "Capital de Giro",
    desc: "Insira tração financeira no seu negócio usando o seu próprio imóvel quitado.",
    items: ["Empréstimos a partir de R$ 30 mil", "Seu imóvel quitado em crédito", "Condições de até 240 meses", "Menores taxas do mercado"],
  },
]

export default function CreditoPage() {
  return (
    <>
      <section className="pt-40 pb-20 px-4 dark-gradient text-white">
        <div className="mx-auto max-w-4xl text-center">
          <ScrollReveal>
            <h1 className="text-4xl font-bold md:text-5xl lg:text-6xl mb-6">
              Crédito e Serviços
            </h1>
            <p className="text-xl text-white/80 max-w-2xl mx-auto">
              Dinheiro rápido, proteção e planejamento para todas as etapas da sua vida.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="mx-auto max-w-6xl">
          <div className="space-y-16">
            {creditServices.map((service, i) => (
              <ScrollReveal key={service.title} delay={i * 0.1}>
                <div className="grid gap-8 md:grid-cols-2 items-center">
                  <div>
                    <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-100 text-blue-600">
                      <service.icon className="h-7 w-7" />
                    </div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-3">{service.title}</h2>
                    <p className="text-gray-500 mb-6 leading-relaxed">{service.desc}</p>
                    <ul className="space-y-2">
                      {service.items.map((item) => (
                        <li key={item} className="flex items-center gap-3 text-sm text-gray-600">
                          <div className="h-1.5 w-1.5 rounded-full bg-blue-500 shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                    <Link
                      href="/contato"
                      className="mt-6 inline-flex items-center rounded-full bg-blue-600 px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-blue-700 focus-ring"
                    >
                      Quero saber mais
                    </Link>
                  </div>
                  <div className="hidden md:block">
                    <div className="rounded-3xl bg-gradient-to-br from-blue-50 to-emerald-50 p-12 flex items-center justify-center">
                      <service.icon className="h-24 w-24 text-blue-200" />
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <CtaSection />
    </>
  )
}
