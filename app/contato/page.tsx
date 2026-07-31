import type { Metadata } from "next"
import { ScrollReveal } from "@/components/shared/scroll-reveal"
import { Mail, Phone, Clock, MapPin } from "lucide-react"
import { COMPANY } from "@/lib/constants"

export const metadata: Metadata = {
  title: "Contato",
  description:
    "Entre em contato com o Clube Zero Dívidas. Tire dúvidas, solicite informações ou dê seu feedback.",
}

export default function ContatoPage() {
  return (
    <>
      <section className="pt-40 pb-20 px-4 dark-gradient text-white">
        <div className="mx-auto max-w-4xl text-center">
          <ScrollReveal>
            <h1 className="text-4xl font-bold md:text-5xl lg:text-6xl mb-6">
              Fale Conosco
            </h1>
            <p className="text-xl text-white/80 max-w-2xl mx-auto">
              Tire suas dúvidas, solicite informações ou dê seu feedback
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="mx-auto max-w-4xl">
          <div className="grid gap-12 md:grid-cols-2">
            <ScrollReveal>
              <div className="rounded-3xl bg-white p-8 border border-gray-100 shadow-sm">
                <form className="space-y-5">
                  <div className="space-y-1.5">
                    <label htmlFor="nome" className="text-sm font-medium text-gray-700">
                      Seu nome
                    </label>
                    <input
                      id="nome"
                      type="text"
                      placeholder="Como podemos chamar você?"
                      className="w-full px-4 py-3 rounded-2xl border-2 border-gray-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-100 transition-all outline-none"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label htmlFor="email" className="text-sm font-medium text-gray-700">
                      E-mail
                    </label>
                    <input
                      id="email"
                      type="email"
                      placeholder="seu@email.com"
                      className="w-full px-4 py-3 rounded-2xl border-2 border-gray-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-100 transition-all outline-none"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label htmlFor="mensagem" className="text-sm font-medium text-gray-700">
                      Mensagem
                    </label>
                    <textarea
                      id="mensagem"
                      rows={4}
                      className="w-full px-4 py-3 rounded-2xl border-2 border-gray-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-100 transition-all outline-none resize-none"
                      placeholder="Como podemos ajudar?"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full py-3.5 bg-gradient-to-r bg-blue-600 text-white rounded-full font-semibold hover:shadow-lg hover:shadow-blue-500/25 transition-all focus-ring"
                  >
                    Enviar mensagem
                  </button>
                </form>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <div className="space-y-8 pt-4">
                {[
                  { icon: Mail, title: "E-mail", desc: COMPANY.email },
                  { icon: Phone, title: "Telefone", desc: COMPANY.phone },
                  { icon: Clock, title: "Horário", desc: COMPANY.hours },
                  { icon: MapPin, title: "CNPJ", desc: COMPANY.cnpj },
                ].map((item) => (
                  <div key={item.title} className="flex items-start gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-blue-100 text-blue-600">
                      <item.icon className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">{item.title}</h3>
                      <p className="text-gray-500">{item.desc}</p>
                    </div>
                  </div>
                ))}

                <div className="flex flex-wrap gap-3 pt-4">
                  <span className="px-4 py-2 rounded-full bg-green-50 text-green-700 text-sm font-medium">
                    LGPD
                  </span>
                  <span className="px-4 py-2 rounded-full bg-blue-50 text-blue-700 text-sm font-medium">
                    SSL
                  </span>
                  <span className="px-4 py-2 rounded-full bg-blue-50 text-blue-700 text-sm font-medium">
                    Reclame Aqui
                  </span>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </>
  )
}
