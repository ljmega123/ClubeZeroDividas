import { ScrollReveal } from "@/components/shared/scroll-reveal"
import { COMPANY } from "@/lib/constants"

export function AboutSection() {
  return (
    <section className="py-20 px-4 md:py-32">
      <div className="mx-auto max-w-4xl">
        <ScrollReveal>
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">
              O que é o {COMPANY.name}?
            </h2>
            <div className="mt-8 space-y-5 text-left text-base text-gray-600 leading-relaxed md:text-lg">
              <p>
                O <strong>{COMPANY.name}</strong> é um ecossistema completo de soluções financeiras, criado para ajudar você a conquistar seus objetivos sem pagar juros abusivos. Somos mais que uma corretora — somos parceiros na sua jornada rumo à liberdade financeira.
              </p>
              <p>
                Oferecemos consórcios imobiliários e automotivos sem juros, cartas contempladas prontas para uso, crédito consignado, recuperação de crédito, seguros, planos de saúde e muito mais.
              </p>
              <p>
                Nosso compromisso é simples: transformar o seu futuro com transparência, agilidade e soluções que realmente cabem no seu bolso. Seja para comprar a casa própria, trocar de carro, limpar seu nome ou empreender, estamos aqui para te ajudar a dar o próximo passo.
              </p>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
