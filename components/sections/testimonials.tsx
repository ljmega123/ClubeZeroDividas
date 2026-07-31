"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"
import { ScrollReveal } from "@/components/shared/scroll-reveal"
import { TESTIMONIALS } from "@/lib/constants"

export function TestimonialsSection() {
  const [current, setCurrent] = useState(0)

  const prev = () => setCurrent((c) => (c === 0 ? TESTIMONIALS.length - 1 : c - 1))
  const next = () => setCurrent((c) => (c === TESTIMONIALS.length - 1 ? 0 : c + 1))

  return (
    <section className="py-20 px-4 md:py-32">
      <div className="mx-auto max-w-4xl">
        <ScrollReveal>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">
              O que nossos clientes dizem
            </h2>
          </div>
        </ScrollReveal>

        <div className="relative">
          <div className="overflow-hidden rounded-3xl bg-gradient-to-br from-blue-50 to-emerald-50 p-8 md:p-12">
            <Quote className="h-10 w-10 text-blue-200 mb-4" />
            <blockquote>
              <p className="text-xl text-gray-700 md:text-2xl leading-relaxed">
                &ldquo;{TESTIMONIALS[current].text}&rdquo;
              </p>
            </blockquote>
            <div className="mt-8 flex items-center gap-4">
              <div className="h-12 w-12 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold text-sm">
                {TESTIMONIALS[current].name.split(" ").map(n => n[0]).join("")}
              </div>
              <div>
                <p className="font-semibold text-gray-900">{TESTIMONIALS[current].name}</p>
                <p className="text-sm text-gray-500">{TESTIMONIALS[current].city}</p>
              </div>
              <div className="ml-auto text-right">
                <p className="text-sm font-semibold text-blue-600">{TESTIMONIALS[current].value}</p>
              </div>
            </div>
          </div>

          <div className="mt-6 flex items-center justify-center gap-4">
            <button
              onClick={prev}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 text-gray-600 transition-colors hover:bg-blue-50 hover:text-blue-600 focus-ring"
              aria-label="Depoimento anterior"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <div className="flex gap-2">
              {TESTIMONIALS.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`h-2 w-2 rounded-full transition-all ${
                    i === current ? "bg-blue-600 w-6" : "bg-gray-300"
                  }`}
                  aria-label={`Ir para depoimento ${i + 1}`}
                />
              ))}
            </div>
            <button
              onClick={next}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 text-gray-600 transition-colors hover:bg-blue-50 hover:text-blue-600 focus-ring"
              aria-label="Próximo depoimento"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
