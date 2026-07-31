import { ScrollReveal } from "@/components/shared/scroll-reveal"
import { formatCurrency } from "@/lib/utils"
import { CONSORCIO_PLANS, CARTA_PLANS } from "@/lib/constants"
import Link from "next/link"
import { ChevronRight } from "lucide-react"

function PlanCard({
  title,
  value,
  entrada,
  prazo,
  destaque,
}: {
  title: string
  value: number
  entrada: number
  prazo: number
  destaque?: boolean
}) {
  const lance = value * (entrada / 100)
  const saldo = value - lance
  const parcela = saldo / prazo

  return (
    <div
      className={`rounded-3xl p-8 border transition-all hover-lift ${
        destaque
          ? "bg-blue-600 text-white border-blue-400 shadow-xl shadow-blue-500/20"
          : "bg-white border-gray-100 shadow-sm"
      }`}
    >
      {destaque && (
        <span className="inline-block px-3 py-1 rounded-full bg-white/20 text-xs font-semibold text-white mb-4">
          Mais popular
        </span>
      )}
      <h3 className={`text-lg font-semibold mb-1 ${destaque ? "text-white" : "text-gray-900"}`}>
        {title}
      </h3>
      <p className={`text-3xl font-bold mb-6 ${destaque ? "text-white" : "text-gray-900"}`}>
        {formatCurrency(value)}
      </p>
      <div className={`space-y-3 text-sm ${destaque ? "text-white/80" : "text-gray-500"}`}>
        <div className="flex justify-between">
          <span>Lance embutido</span>
          <span className="font-semibold">{entrada}%</span>
        </div>
        <div className="flex justify-between">
          <span>Prazo</span>
          <span className="font-semibold">{prazo} meses</span>
        </div>
        <div className={`pt-3 border-t flex justify-between items-baseline ${destaque ? "border-white/20" : "border-gray-100"}`}>
          <span>Parcelas a partir de</span>
          <span className={`text-2xl font-bold ${destaque ? "text-white" : "text-gray-900"}`}>
            {formatCurrency(parcela)}
          </span>
        </div>
      </div>
      <Link
        href="/simular"
        className={`mt-8 block w-full rounded-2xl py-3.5 text-center text-sm font-semibold transition-all focus-ring ${
          destaque
            ? "bg-white text-blue-700 hover:bg-blue-50"
            : "bg-blue-600 text-white hover:bg-blue-700"
        }`}
      >
        Simular este plano
      </Link>
    </div>
  )
}

function CartaCard({
  valor,
  entrada,
  parcelas,
  valorParcela,
}: {
  valor: number
  entrada: number
  parcelas: number
  valorParcela: number
}) {
  return (
    <div className="rounded-3xl bg-white p-8 border border-gray-100 shadow-sm hover-lift">
      <p className="text-sm text-gray-500 mb-1">Pronta para Uso</p>
      <p className="text-3xl font-bold text-gray-900 mb-6">{formatCurrency(valor)}</p>
      <div className="space-y-3 text-sm text-gray-500">
        <div className="flex justify-between">
          <span>Entrada</span>
          <span className="font-semibold text-gray-900">{formatCurrency(entrada)}</span>
        </div>
        <div className="flex justify-between">
          <span>Saldo Restante</span>
          <span className="font-semibold text-gray-900">{parcelas}x parcelas</span>
        </div>
        <div className="pt-3 border-t border-gray-100 flex justify-between items-baseline">
          <span>Parcelas mensais de</span>
          <span className="text-2xl font-bold text-gray-900">{formatCurrency(valorParcela)}</span>
        </div>
      </div>
      <Link
        href="/simular"
        className="mt-8 block w-full rounded-2xl bg-blue-600 py-3.5 text-center text-sm font-semibold text-white transition-all hover:bg-blue-700 focus-ring"
      >
        Simular minha carta
      </Link>
    </div>
  )
}

export function PlansSection() {
  return (
    <section className="py-20 px-4 md:py-32">
      <div className="mx-auto max-w-6xl">
        <ScrollReveal>
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">
              Modelo de Consórcios Imobiliários
            </h2>
            <p className="mt-3 text-gray-500">
              A oportunidade de conquistar seus sonhos de casa própria ou investimento sem pagar juros.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid gap-6 md:grid-cols-3 mb-20">
          {CONSORCIO_PLANS.imovel.map((plan, i) => (
            <ScrollReveal key={plan.label} delay={i * 0.1}>
              <PlanCard
                title="Consórcio Imóvel"
                value={plan.value}
                entrada={plan.entrada}
                prazo={plan.prazo}
                destaque={i === 1}
              />
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal>
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">
              Modelo de Consórcios Automotivos
            </h2>
            <p className="mt-3 text-gray-500">
              Conquiste seu carro ou moto nova sem pagar juros abusivos de financiamento.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid gap-6 md:grid-cols-3 mb-20">
          {CONSORCIO_PLANS.auto.map((plan, i) => (
            <ScrollReveal key={plan.label} delay={i * 0.1}>
              <PlanCard
                title="Consórcio Auto"
                value={plan.value}
                entrada={plan.entrada}
                prazo={plan.prazo}
                destaque={i === 1}
              />
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal>
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">
              Modelo de Cartas Contempladas
            </h2>
            <p className="mt-3 text-gray-500">
              Crédito pronto para utilização imediata com condições e taxas excelentes.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid gap-6 md:grid-cols-3">
          {CARTA_PLANS.map((plan, i) => (
            <ScrollReveal key={i} delay={i * 0.1}>
              <CartaCard {...plan} />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
