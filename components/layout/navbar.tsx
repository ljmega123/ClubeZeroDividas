"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X } from "lucide-react"
import { NAV_LINKS } from "@/lib/constants"
import { cn } from "@/lib/utils"

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [hidden, setHidden] = useState(false)

  useEffect(() => {
    let lastY = window.scrollY
    const onScroll = () => {
      const y = window.scrollY
      setHidden(y > lastY && y > 80)
      lastY = y
    }
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 border-b border-gray-200/50 bg-white/95 shadow-sm backdrop-blur-xl transition-transform duration-300",
        hidden ? "-translate-y-full" : "translate-y-0"
      )}
    >
      <nav
        className="mx-auto grid max-w-7xl grid-cols-[1fr_auto_1fr] items-center px-3 py-0.5 md:px-6 lg:flex lg:justify-between"
        aria-label="Navegação principal"
      >
        <div className="lg:hidden" aria-hidden="true" />

        <Link
          href="/"
          className="flex items-center justify-self-center rounded-xl px-2 py-1 focus-ring lg:justify-self-start"
          aria-label="Clube Zero Dívidas"
        >
          <Image
            src="/images/Logo.png"
            alt="Clube Zero Dívidas"
            width={180}
            height={54}
            className="h-auto w-36 sm:w-40 lg:w-36 xl:w-44"
            priority
          />
        </Link>

        <div className="hidden items-center gap-1 lg:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-xl px-4 py-2 text-sm font-medium text-gray-600 transition-colors hover:text-gray-900 focus-ring"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="hidden items-center gap-3 lg:flex">
          <Link
            href="/afiliados"
            className="rounded-full border border-blue-200 px-5 py-2.5 text-sm font-semibold text-blue-700 transition-all hover:border-blue-400 hover:bg-blue-50 focus-ring"
          >
            Quero ser afiliado
          </Link>
          <a
            href="https://clubezerodividas.com.br/platform/auth/login.php"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-gradient-to-r from-emerald-500 to-emerald-600 px-6 py-2.5 text-sm font-bold text-white transition-all hover:from-emerald-400 hover:to-emerald-500 hover:shadow-lg hover:shadow-emerald-500/30 focus-ring active:scale-95"
          >
            Portal do Afiliado
          </a>
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center justify-self-end rounded-xl p-2 text-gray-700 transition-colors hover:text-gray-900 lg:hidden focus-ring"
          aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
          aria-expanded={isOpen}
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {isOpen && (
        <div className="border-t border-gray-200/50 bg-white px-5 pb-6 pt-2 lg:hidden">
          <div className="flex flex-col gap-1">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="rounded-xl px-4 py-3 text-sm font-medium text-gray-600 transition-colors hover:text-gray-900 focus-ring"
              >
                {link.label}
              </Link>
            ))}
            <hr className="my-2 border-gray-200" />
            <Link
              href="/afiliados"
              onClick={() => setIsOpen(false)}
              className="mt-2 rounded-full border border-emerald-500/40 px-6 py-3 text-center text-sm font-bold text-emerald-600 transition-all hover:bg-emerald-50 focus-ring"
            >
              Quero ser afiliado
            </Link>
            <a
              href="https://clubezerodividas.com.br/platform/auth/login.php"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsOpen(false)}
              className="mt-2 rounded-full bg-gradient-to-r from-emerald-500 to-emerald-600 px-6 py-3 text-center text-sm font-bold text-white transition-all hover:from-emerald-400 hover:to-emerald-500 focus-ring"
            >
              Portal do Afiliado
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
