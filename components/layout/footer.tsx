import Link from "next/link"
import { COMPANY } from "@/lib/constants"

export function Footer() {
  return (
    <footer className="border-t border-gray-100 bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 py-12 md:px-6">
        <div className="grid gap-8 md:grid-cols-4">
          <div className="md:col-span-1">
            <Link href="/" className="text-xl font-bold tracking-tight text-gray-900">
              <span className="blue-gradient-text">{COMPANY.shortName}</span>
            </Link>
            <p className="mt-3 text-sm text-gray-500 leading-relaxed max-w-xs">
              Soluções financeiras inteligentes para transformar seu futuro.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-900 mb-4">
              Produtos
            </h3>
            <ul className="space-y-2">
              {[
                { label: "Consórcios", href: "/consorcio" },
                { label: "Cartas Contempladas", href: "/carta-contemplada" },
                { label: "Crédito", href: "/credito" },
                { label: "Recuperação de Crédito", href: "/recuperacao" },
              ].map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-gray-500 transition-colors hover:text-blue-600 focus-ring rounded-lg"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-900 mb-4">
              Institucional
            </h3>
            <ul className="space-y-2">
              {[
                { label: "Sobre Nós", href: "/sobre" },
                { label: "Contato", href: "/contato" },
                { label: "Seja Afiliado", href: "/afiliados" },
              ].map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-gray-500 transition-colors hover:text-blue-600 focus-ring rounded-lg"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-900 mb-4">
              Segurança
            </h3>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1.5 bg-green-50 text-green-700 rounded-full text-xs font-medium">
                LGPD
              </span>
              <span className="px-3 py-1.5 bg-blue-50 text-blue-700 rounded-full text-xs font-medium">
                SSL
              </span>
              <span className="px-3 py-1.5 bg-blue-50 text-blue-700 rounded-full text-xs font-medium">
                Reclame Aqui
              </span>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-gray-200 pt-8">
          <div className="flex flex-col items-center justify-between gap-4 text-center md:flex-row">
            <p className="text-xs text-gray-400">
              {COMPANY.legalName} — CNPJ: {COMPANY.cnpj} — © {COMPANY.since} Todos os direitos reservados.
            </p>
            <div className="flex gap-4 text-xs text-gray-400">
              <Link href="/contato" className="hover:text-blue-600 transition-colors focus-ring rounded-lg">
                Contato
              </Link>
              <Link href="/afiliados" className="hover:text-blue-600 transition-colors focus-ring rounded-lg">
                Seja Afiliado
              </Link>
            </div>
          </div>
          <p className="mt-4 text-center text-xs text-gray-400">
            *Sujeito a análise de crédito. Condições válidas por tempo limitado.
          </p>
        </div>
      </div>
    </footer>
  )
}
