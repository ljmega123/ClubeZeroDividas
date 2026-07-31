import type { Metadata } from "next"
import { AfiliadosHero } from "./hero"
import { CtaSection } from "@/components/sections/cta"

export const metadata: Metadata = {
  title: "Seja Afiliado",
  description:
    "Ganhe comissões indicando soluções financeiras. Trabalhe 100% online, sem experiência. Suporte completo.",
}

export default function AfiliadosPage() {
  return (
    <>
      <AfiliadosHero />
      <CtaSection />
    </>
  )
}
