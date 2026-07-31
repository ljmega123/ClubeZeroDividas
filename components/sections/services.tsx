import { ScrollReveal } from "@/components/shared/scroll-reveal"
import { TrendingUp, Home, Car, CreditCard, ShieldCheck, PiggyBank, ArrowRight } from "lucide-react"
import Link from "next/link"

const services = [
  {
    icon: Home,
    title: "Consórcios Imobiliários",
    desc: "Conquiste a casa própria sem juros. Planos de 150 a 500 mil com lance embutido de 30%.",
    cta: "Ver planos de consórcio",
    href: "/consorcio",
  },
  {
    icon: Car,
    title: "Consórcios Automotivos",
    desc: "Carro ou moto nova sem juros abusivos. Parcelas que cabem no seu bolso.",
    cta: "Simular consórcio de veículo",
    href: "/consorcio",
  },
  {
    icon: CreditCard,
    title: "Cartas Contempladas",
    desc: "Crédito pronto para uso imediato. Entrada a partir de R$ 3.100.",
    cta: "Ver cartas contempladas",
    href: "/carta-contemplada",
  },
  {
    icon: TrendingUp,
    title: "Crédito e Empréstimos",
    desc: "Consignado, FGTS, pessoal. Taxas especiais para você ou sua empresa.",
    cta: "Ver opções de crédito",
    href: "/credito",
  },
  {
    icon: ShieldCheck,
    title: "Recuperação de Crédito",
    desc: "Limpa nome, score e Bacen. Volte ao mercado financeiro com força total.",
    cta: "Recuperar meu crédito",
    href: "/recuperacao",
  },
  {
    icon: PiggyBank,
    title: "Seguros e Planos",
    desc: "Proteja suas conquistas. Seguro vida, residencial, veículos e planos de saúde.",
    cta: "Falar com um especialista",
    href: "/contato",
  },
]

export function ServicesSection() {
  return (
    <section id="servicos" className="py-20 px-4 md:py-32">
      <div className="mx-auto max-w-6xl">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">
              Destaque de Serviços
            </h2>
            <p className="mt-4 text-lg text-gray-500 max-w-2xl mx-auto">
              Conquiste mais no Clube Zero Dívidas!
            </p>
          </div>
        </ScrollReveal>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <ScrollReveal key={service.title} delay={i * 0.1}>
              <Link
                href={service.href}
                className="group flex h-full flex-col rounded-3xl bg-white p-8 border border-gray-100 shadow-sm hover-lift focus-ring"
              >
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-100 text-blue-600 transition-colors group-hover:bg-blue-600 group-hover:text-white">
                  <service.icon className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {service.title}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed">
                  {service.desc}
                </p>
                <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-blue-600">
                  {service.cta}
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
