"use client"

import { useState } from "react"
import Link from "next/link"
import { ScrollReveal } from "@/components/shared/scroll-reveal"
import { formatCurrency } from "@/lib/utils"
import { motion } from "framer-motion"

const QUICK_VALUES = [100000, 150000, 300000, 500000, 1000000]

export default function SimularPage() {
  const [valor, setValor] = useState(150000)
  const [prazo, setPrazo] = useState(220)
  const [lance, setLance] = useState(30)

  const lanceValue = valor * (lance / 100)
  const saldo = valor - lanceValue
  const parcela = saldo / prazo

  const sliderClass =
    "h-3 w-full appearance-none rounded-full bg-blue-100 accent-blue-600 cursor-pointer"

  return (
    <>
      <section className="pt-40 pb-20 px-4 dark-gradient text-white">
        <div className="mx-auto max-w-4xl text-center">
          <ScrollReveal>
            <h1 className="text-4xl font-bold md:text-5xl lg:text-6xl mb-6">
              Simulador de Consórcio
            </h1>
            <p className="text-xl text-white/80 max-w-2xl mx-auto">
              Ajuste os valores e veja a parcela em tempo real. Sem compromisso.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="mx-auto max-w-4xl">
          <div className="grid gap-12 md:grid-cols-2">
            <ScrollReveal>
              <div className="rounded-3xl bg-white p-8 border border-gray-100 shadow-sm space-y-10">
                <div className="space-y-3">
                  <div className="flex justify-between items-baseline">
                    <label htmlFor="valor-bem" className="text-sm font-medium text-gray-700">
                      Valor do bem
                    </label>
                    <span className="text-2xl font-bold text-blue-600">{formatCurrency(valor)}</span>
                  </div>
                  <input
                    id="valor-bem"
                    type="range"
                    min={50000}
                    max={1000000}
                    step={10000}
                    value={valor}
                    onChange={(e) => setValor(Number(e.target.value))}
                    className={sliderClass}
                    aria-label="Valor do bem"
                  />
                  <div className="flex flex-wrap gap-2 pt-2">
                    {QUICK_VALUES.map((v) => (
                      <button
                        key={v}
                        type="button"
                        onClick={() => setValor(v)}
                        aria-pressed={valor === v}
                        className={`min-h-11 rounded-full px-4 py-2 text-sm font-semibold transition-all focus-ring ${
                          valor === v
                            ? "bg-blue-600 text-white"
                            : "bg-blue-50 text-blue-700 hover:bg-blue-100"
                        }`}
                      >
                        {formatCurrency(v)}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex justify-between items-baseline">
                    <label htmlFor="prazo-meses" className="text-sm font-medium text-gray-700">
                      Prazo
                    </label>
                    <span className="text-2xl font-bold text-blue-600">{prazo} meses</span>
                  </div>
                  <input
                    id="prazo-meses"
                    type="range"
                    min={12}
                    max={240}
                    step={1}
                    value={prazo}
                    onChange={(e) => setPrazo(Number(e.target.value))}
                    className={sliderClass}
                    aria-label="Prazo em meses"
                  />
                  <div className="flex justify-between text-xs text-gray-400">
                    <span>12 meses</span>
                    <span>240 meses (20 anos)</span>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex justify-between items-baseline">
                    <label htmlFor="lance-percent" className="text-sm font-medium text-gray-700">
                      Lance embutido
                    </label>
                    <span className="text-2xl font-bold text-blue-600">{lance}%</span>
                  </div>
                  <input
                    id="lance-percent"
                    type="range"
                    min={10}
                    max={50}
                    step={1}
                    value={lance}
                    onChange={(e) => setLance(Number(e.target.value))}
                    className={sliderClass}
                    aria-label="Percentual de lance"
                  />
                  <div className="flex justify-between text-xs text-gray-400">
                    <span>10%</span>
                    <span>50%</span>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <div className="rounded-3xl blue-gradient p-8 text-white md:p-10">
                <h3 className="text-lg font-semibold text-white/80 mb-6">
                  Resultado da Simulação
                </h3>
                <div className="space-y-6">
                  <div>
                    <p className="text-sm text-white/60">Valor do bem</p>
                    <motion.p
                      key={valor}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-3xl font-bold"
                    >
                      {formatCurrency(valor)}
                    </motion.p>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-white/60">Lance ({lance}%)</span>
                    <span className="font-semibold">{formatCurrency(lanceValue)}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-white/60">Saldo financiado</span>
                    <span className="font-semibold">{formatCurrency(saldo)}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-white/60">Prazo</span>
                    <span className="font-semibold">{prazo} meses ({Math.floor(prazo / 12)} anos)</span>
                  </div>
                  <div className="pt-6 border-t border-white/20">
                    <p className="text-sm text-white/60 mb-1">Parcelas a partir de</p>
                    <motion.p
                      key={parcela}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="text-4xl font-bold"
                    >
                      {formatCurrency(parcela)}
                    </motion.p>
                  </div>
                  <Link
                    href="/contato"
                    className="mt-4 block w-full rounded-2xl bg-white py-4 text-center text-base font-semibold text-blue-700 transition-all hover:bg-blue-50 focus-ring"
                  >
                    Quero este plano
                  </Link>
                  <p className="text-center text-xs text-white/50">
                    Fale com um especialista para simular sem compromisso
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>

          <ScrollReveal>
            <p className="mt-8 text-center text-sm text-gray-400">
              *Simulação ilustrativa. Valores sujeitos a análise de crédito e condições vigentes.
            </p>
          </ScrollReveal>
        </div>
      </section>
    </>
  )
}
