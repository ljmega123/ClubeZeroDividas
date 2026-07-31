import Link from "next/link"
import { ScrollReveal } from "@/components/shared/scroll-reveal"

export function CtaSection() {
  return (
    <section className="py-20 px-4 md:py-32">
      <div className="mx-auto max-w-4xl">
        <ScrollReveal>
          <div className="rounded-3xl blue-gradient p-12 text-center text-white md:p-16">
            <h2 className="text-3xl font-bold md:text-4xl">
              Pronto para transformar sua vida financeira?
            </h2>
            <p className="mt-4 text-lg text-white/80 max-w-xl mx-auto">
              Simule agora mesmo, sem compromisso. Descubra a solução ideal para você.
            </p>
            <Link
              href="/simular"
              className="mt-8 inline-flex items-center rounded-full bg-white px-8 py-4 text-base font-semibold text-blue-700 transition-all hover:shadow-xl hover:shadow-black/20 focus-ring"
            >
              Simular meu consórcio agora
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
