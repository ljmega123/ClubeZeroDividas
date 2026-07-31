import type { Metadata } from "next"
import Link from "next/link"
import { ScrollReveal } from "@/components/shared/scroll-reveal"
import { CtaSection } from "@/components/sections/cta"
import { formatCurrency } from "@/lib/utils"
import { CARTA_PLANS } from "@/lib/constants"

export const metadata: Metadata = {
  title: "Cartas Contempladas",
  description:
    "Cartas contempladas com crédito pronto para uso imediato. Entrada a partir de R$ 3.100. Parcelas fixas e sem juros.",
}

export default function CartaContempladaPage() {
  return (
    <>
      <section className="pt-40 pb-20 px-4 dark-gradient text-white">
        <div className="mx-auto max-w-4xl text-center">
          <ScrollReveal>
            <h1 className="text-4xl font-bold md:text-5xl lg:text-6xl mb-6">
              Cartas Contempladas
            </h1>
            <p className="text-xl text-white/80 max-w-2xl mx-auto">
              Crédito pronto para uso imediato. Sem juros, sem burocracia.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="mx-auto max-w-6xl">
          <ScrollReveal>
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 md:text-4xl mb-4">
                Modelo de Cartas Contempladas
              </h2>
              <p className="text-gray-500">
                Crédito pronto para utilização imediata com condições e taxas excelentes.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid gap-6 md:grid-cols-3">
            {CARTA_PLANS.map((plan, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <div className="rounded-3xl bg-white p-8 border border-gray-100 shadow-sm hover-lift">
                  <p className="text-sm text-gray-500 mb-1">Pronta para Uso</p>
                  <p className="text-3xl font-bold text-gray-900 mb-6">{formatCurrency(plan.valor)}</p>
                  <div className="space-y-3 text-sm text-gray-500">
                    <div className="flex justify-between">
                      <span>Entrada</span>
                      <span className="font-semibold text-gray-900">{formatCurrency(plan.entrada)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Saldo Restante</span>
                      <span className="font-semibold text-gray-900">{plan.parcelas}x parcelas</span>
                    </div>
                    <div className="pt-3 border-t border-gray-100 flex justify-between items-baseline">
                      <span>Parcelas mensais de</span>
                      <span className="text-2xl font-bold text-gray-900">{formatCurrency(plan.valorParcela)}</span>
                    </div>
                  </div>
                  <Link
                    href="/simular"
                    className="mt-8 block w-full rounded-2xl bg-blue-600 py-3.5 text-center text-sm font-semibold text-white transition-all hover:bg-blue-700 focus-ring"
                  >
                    Simular minha carta
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
              Vantagens da Carta Contemplada
            </h2>
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                "Crédito disponível para uso imediato",
                "Sem juros — apenas taxa de administração",
                "Parcelas fixas que cabem no orçamento",
                "Aceita em todo território nacional",
                "Processo 100% online e seguro",
                "Sem consulta ao SPC/Serasa",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3 rounded-2xl bg-white p-4 border border-gray-100">
                  <div className="h-2 w-2 rounded-full bg-green-500 shrink-0" />
                  <span className="text-sm text-gray-700">{item}</span>
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
