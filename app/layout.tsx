import type { Metadata } from "next"
import { Inter, Sora } from "next/font/google"
import "./globals.css"
import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  display: "swap",
})

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

export const metadata: Metadata = {
  title: {
    default: "Clube Zero Dívidas | Consórcios, Crédito & Recuperação Financeira",
    template: "%s | Clube Zero Dívidas",
  },
  description:
    "Soluções financeiras inteligentes: consórcios sem juros, cartas contempladas, crédito consignado, recuperação de crédito e mais.",
  openGraph: {
    title: "Clube Zero Dívidas",
    description:
      "Soluções financeiras inteligentes — Infinitas possibilidades!",
    siteName: "Clube Zero Dívidas",
    type: "website",
    locale: "pt_BR",
  },
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR" className={`${sora.variable} ${inter.variable}`}>
      <body className="min-h-screen bg-white font-sans text-gray-900 antialiased">
        <Navbar />
        <main id="main-content">{children}</main>
        <Footer />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Clube Zero Dívidas",
              legalName: "Aliança Afiliados Digital LTDA",
              taxID: "66.298.322/0001-77",
              url: "https://clubzerodividas.com.br",
              description:
                "Soluções financeiras inteligentes: consórcios, cartas contempladas, crédito e recuperação financeira.",
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+55-11-99999-9999",
                contactType: "customer service",
              },
            }),
          }}
        />
      </body>
    </html>
  )
}
