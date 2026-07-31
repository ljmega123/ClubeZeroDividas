"use client"

import { useRef } from "react"
import Image from "next/image"
import { motion, useScroll, useTransform } from "framer-motion"
import { TrendingUp, Globe, HeadphonesIcon, DollarSign } from "lucide-react"
import { BASE_PATH } from "@/lib/constants"

const beneficios = [
  { icon: DollarSign, text: "Ganhos acima de R$ 5.000,00 por mês" },
  { icon: HeadphonesIcon, text: "Suporte total para vendas e materiais" },
  { icon: Globe, text: "Negócio escalável e 100% online" },
]

export function AfiliadosHero() {
  const sectionRef = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  })

  const fadeOut = useTransform(scrollYProgress, [0, 0.5], [1, 0])
  const bgScale = useTransform(scrollYProgress, [0, 0.5], [1, 1.1])

  return (
    <section ref={sectionRef} className="relative min-h-dvh overflow-hidden">
      {/* Background */}
      <motion.div style={{ scale: bgScale }} className="absolute inset-0">
        <Image
          src={`${BASE_PATH}/images/imagem-hero.jpg`}
          alt=""
          fill
          className="object-cover"
          priority
        />
      </motion.div>

      <div className="absolute inset-0 bg-gradient-to-r from-blue-950/90 via-blue-900/70 to-blue-800/40" />
      <div className="absolute inset-0 bg-gradient-to-t from-blue-950/80 via-blue-900/30 to-transparent" />

      {/* Orbs */}
      <motion.div
        animate={{ y: [0, -30, 0], scale: [1, 1.1, 1] }}
        transition={{ repeat: Infinity, duration: 7, ease: "easeInOut" }}
        className="absolute -top-20 -right-20 h-[600px] w-[600px] rounded-full bg-blue-500/10 blur-3xl"
      />
      <motion.div
        animate={{ y: [0, 25, 0], scale: [1, 0.9, 1] }}
        transition={{ repeat: Infinity, duration: 9, ease: "easeInOut", delay: 1.5 }}
        className="absolute -bottom-40 -left-40 h-[500px] w-[500px] rounded-full bg-emerald-400/10 blur-3xl"
      />

      {/* Top line */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1.2, delay: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
        style={{ originX: 0 }}
        className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-blue-400 via-emerald-400 to-transparent"
      />

      {/* Content */}
      <motion.div
        style={{ opacity: fadeOut }}
        className="relative z-20 mx-auto flex min-h-dvh max-w-7xl flex-col justify-center px-5 pt-36 pb-20 md:px-8"
      >
        <div className="grid items-center gap-16 lg:grid-cols-2 lg:gap-20">
          {/* Left - Text */}
          <div>
            <motion.p
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mb-2 text-sm font-semibold uppercase tracking-[0.2em] text-emerald-300"
            >
              Renda Extra
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="text-4xl font-extrabold leading-[1.06] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-[64px]"
            >
              Seja Afiliado
              <br />
              <span className="bg-gradient-to-r from-emerald-300 to-emerald-400 bg-clip-text text-transparent">
                Clube Zero Dívidas
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="mt-5 max-w-lg text-base leading-relaxed text-white/60 md:text-lg"
            >
              Ajude pessoas a transformar suas vidas financeiras e receba ótimas comissões por cada indicação.
            </motion.p>

            {/* Services affiliates can promote */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
              className="mt-6"
            >
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-white/40">
                Serviços para indicar
              </p>
              <div className="flex flex-wrap gap-2">
                {[
                  "Consórcios",
                  "Cartas Contempladas",
                  "Crédito Consignado",
                  "Empréstimos",
                  "Financiamentos",
                  "Recuperação de Crédito",
                  "Seguros",
                ].map((s) => (
                  <span
                    key={s}
                    className="rounded-full border border-emerald-400/30 bg-emerald-500/10 px-4 py-1.5 text-xs font-semibold text-emerald-300"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Benefits */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mt-8 flex flex-col gap-4"
            >
              {beneficios.map((b) => (
                <div key={b.text} className="flex items-center gap-3 text-sm text-white/60">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-emerald-500/20">
                    <b.icon className="h-4 w-4 text-emerald-400" />
                  </span>
                  {b.text}
                </div>
              ))}
            </motion.div>

            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="mt-10 flex flex-col gap-3 sm:flex-row"
            >
              <a
                href="https://clubezerodividas.com.br/platform/auth/login.php"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-emerald-500 to-emerald-600 px-8 py-3.5 text-base font-bold text-white shadow-lg shadow-emerald-500/25 transition-all duration-200 hover:from-emerald-400 hover:to-emerald-500 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-emerald-500/30 focus-ring active:scale-95"
              >
                Portal do Afiliado
                <svg className="h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
              </a>
              <a
                href="https://clubezerodividas.com.br/platform/consulta-processo.php"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 px-8 py-3.5 text-base font-semibold text-white/70 transition-all duration-200 hover:border-white/40 hover:text-white hover:-translate-y-0.5 focus-ring active:scale-95"
              >
                Consultar Processo
              </a>
            </motion.div>
          </div>

          {/* Right - Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <div className="rounded-3xl border border-white/10 bg-white/[0.06] p-8 backdrop-blur-xl">
              <h3 className="mb-2 text-center text-lg font-bold text-white">
                Seja um parceiro
              </h3>
              <p className="mb-8 text-center text-sm text-white/40">
                Clube Zero Dívidas
              </p>

              <form className="flex flex-col gap-4">
                <input
                  type="text"
                  placeholder="Seu Nome"
                  className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-white/30 backdrop-blur-sm transition-all duration-200 focus:border-emerald-400/50 focus:outline-none focus:ring-2 focus:ring-emerald-400/20"
                />
                <input
                  type="tel"
                  placeholder="(00) 00000-0000"
                  className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-white/30 backdrop-blur-sm transition-all duration-200 focus:border-emerald-400/50 focus:outline-none focus:ring-2 focus:ring-emerald-400/20"
                />
                <a
                  href="https://clubezerodividas.com.br/platform/auth/login.php"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-emerald-500 to-emerald-600 px-8 py-3.5 text-base font-bold text-white shadow-lg shadow-emerald-500/25 transition-all duration-200 hover:from-emerald-400 hover:to-emerald-500 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-emerald-500/30 focus-ring active:scale-95"
                >
                  Quero ser Afiliado
                </a>
              </form>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="mt-6 text-center text-xs text-white/25"
              >
                Ao enviar, você concorda com nossos termos de uso.
              </motion.p>
            </div>
          </motion.div>
        </div>
      </motion.div>

      <div className="absolute bottom-0 left-0 right-0 z-10 h-32 bg-gradient-to-b from-transparent to-gray-50" />
    </section>
  )
}
