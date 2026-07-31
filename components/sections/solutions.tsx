import { ScrollReveal } from "@/components/shared/scroll-reveal"
import Link from "next/link"
import {
  Banknote,
  Wallet,
  PiggyBank,
  Building2,
  Sun,
  Smartphone,
  Shield,
  Plane,
  Heart,
} from "lucide-react"

const solutions = [
  {
    icon: Banknote,
    title: "Crédito Consignado",
    desc: "Taxas baixas com parcelas debitadas em folha. Para INSS, servidores, militares e empresas privadas.",
  },
  {
    icon: Wallet,
    title: "Empréstimos",
    desc: "Crédito rápido para pessoas físicas, inclusive negativados. Débito em conta, cartão ou boleto.",
  },
  {
    icon: PiggyBank,
    title: "Antecipação FGTS",
    desc: "Antecipe até 10 parcelas do Saque-Aniversário. Dinheiro na conta na hora, sem parcelas mensais.",
  },
  {
    icon: Building2,
    title: "Financiamentos",
    desc: "Carros, motos, caminhões e imóveis com as melhores taxas do mercado.",
  },
  {
    icon: Shield,
    title: "Seguros",
    desc: "Proteja suas conquistas: residencial, vida, veículos e mais de 180 tipos de seguros.",
  },
  {
    icon: Plane,
    title: "Seguro Viagem",
    desc: "Viaje tranquilo com proteção 24h, telemedicina e garantia de reembolso.",
  },
  {
    icon: Heart,
    title: "Planos de Saúde",
    desc: "Planos médicos e odontológicos completos com rede credenciada de excelência.",
  },
  {
    icon: Sun,
    title: "Energia Solar",
    desc: "Economia de até 90% na conta de luz. Instalação completa e retorno garantido.",
  },
  {
    icon: Smartphone,
    title: "Conta Digital",
    desc: "Banco completo no celular com cartão gratuito, PIX na hora e crédito emergencial.",
  },
]

export function SolutionsSection() {
  return (
    <section className="py-20 px-4 bg-gray-50 md:py-32">
      <div className="mx-auto max-w-6xl">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">
              Soluções Completas e Consultoria de Verdade
            </h2>
            <p className="mt-4 text-lg text-gray-500 max-w-3xl mx-auto">
              Somos um ecossistema multi-serviços integrado para transformar o seu futuro, trazer liberdade e te tirar do sufoco das dívidas de juros altos.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {solutions.map((item, i) => (
            <ScrollReveal key={item.title} delay={i * 0.05}>
              <div className="group rounded-3xl bg-white p-6 border border-gray-100 shadow-sm hover-lift cursor-default">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100 text-blue-600">
                  <item.icon className="h-5 w-5" />
                </div>
                <h3 className="text-base font-semibold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal>
          <div className="mt-12 text-center">
            <Link
              href="/contato"
              className="inline-flex items-center justify-center rounded-full bg-blue-600 px-8 py-4 text-base font-semibold text-white transition-all hover:bg-blue-700 hover:shadow-xl hover:shadow-blue-500/25 focus-ring active:scale-95"
            >
              Falar com um especialista
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
