"use client"

import { useRef } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion, useScroll, useTransform } from "framer-motion"
import { Home, Car, CreditCard, TrendingUp, ShieldCheck, PiggyBank, ArrowRight } from "lucide-react"
import { BASE_PATH } from "@/lib/constants"

const services = [
  { icon: Home, label: "Consórcios" },
  { icon: Car, label: "Automotivos" },
  { icon: CreditCard, label: "Cartas Contempladas" },
  { icon: TrendingUp, label: "Crédito" },
  { icon: ShieldCheck, label: "Recuperação de Crédito" },
  { icon: PiggyBank, label: "Seguros" },
]

export function HeroSection() {
  const sectionRef = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  })

  const fadeOut = useTransform(scrollYProgress, [0, 0.5], [1, 0])
  const bgScale = useTransform(scrollYProgress, [0, 0.5], [1, 1.12])

  return (
    <section
      ref={sectionRef}
      className="relative flex min-h-screen flex-col justify-end overflow-hidden supports-[min-height:100dvh]:min-h-dvh"
    >
      {/* Background image with parallax */}
      <motion.div style={{ scale: bgScale }} className="absolute inset-0">
        <Image
          src={`${BASE_PATH}/images/imagem-hero.jpg`}
          alt=""
          fill
          sizes="100vw"
          priority
          className="origin-bottom scale-[1.25] object-cover object-[50%_45%] md:scale-100 md:object-[50%_40%]"
        />
      </motion.div>

      {/* Readability scrims — bottom-up on mobile, left-right on desktop */}
      <div className="absolute inset-0 bg-gradient-to-t from-blue-950/90 via-blue-950/25 to-blue-950/10 md:bg-gradient-to-r md:from-blue-950/90 md:via-blue-950/50 md:to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-blue-950/70 via-transparent to-transparent md:hidden" />

      {/* Content on top of the image */}
      <motion.div
        style={{ opacity: fadeOut }}
        className="relative z-10 mx-auto flex w-full max-w-7xl flex-col justify-end px-5 pb-20 pt-32 md:px-8 md:pb-28 md:pt-40"
      >
        <div className="max-w-xl">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-4xl font-extrabold leading-[1.06] tracking-tight text-white drop-shadow-[0_2px_12px_rgba(0,0,0,0.65)] sm:text-5xl md:text-6xl lg:text-[72px]"
          >
            Seu futuro
            <br />
            <span className="text-white">começa aqui.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.32, ease: [0.16, 1, 0.3, 1] }}
            className="mt-4 max-w-lg text-base leading-relaxed text-white/80 drop-shadow-[0_1px_8px_rgba(0,0,0,0.7)] sm:mt-5 sm:text-lg"
          >
            Consórcios sem juros, cartas contempladas, crédito e recuperação financeira para você voltar a realizar sonhos.
          </motion.p>

          {/* CTAs — full width and thumb-friendly on mobile */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="mt-6 flex flex-col gap-3 sm:mt-8 sm:flex-row"
          >
            <Link
              href="/afiliados"
              className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-emerald-500 px-6 py-4 text-base font-bold text-white transition-all duration-200 hover:bg-emerald-400 hover:shadow-xl hover:shadow-emerald-500/30 hover:-translate-y-0.5 focus-ring active:scale-95 sm:w-auto sm:px-8 sm:py-4 sm:text-base"
            >
              Quero fazer parte
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              href="/contato"
              className="inline-flex w-full items-center justify-center rounded-full border border-white/40 bg-white/10 px-6 py-4 text-base font-semibold text-white backdrop-blur-sm transition-all duration-200 hover:bg-white/20 hover:-translate-y-0.5 focus-ring active:scale-95 sm:w-auto sm:px-8 sm:py-4 sm:text-base"
            >
              Falar com um especialista
            </Link>
          </motion.div>

          {/* Brief services list */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.55, ease: [0.16, 1, 0.3, 1] }}
            className="mt-6 flex flex-wrap gap-2 sm:mt-8 sm:gap-2.5"
          >
            {services.map((s) => (
              <span
                key={s.label}
                className="inline-flex items-center gap-1.5 rounded-full border border-white/25 bg-black/35 px-3 py-1.5 text-xs font-semibold text-white backdrop-blur-sm sm:gap-2 sm:px-4 sm:py-2 sm:text-sm"
              >
                <s.icon className="h-3.5 w-3.5 text-emerald-300 sm:h-4 sm:w-4" />
                {s.label}
              </span>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}
