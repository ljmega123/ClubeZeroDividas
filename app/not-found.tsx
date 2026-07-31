import Link from "next/link"

export default function NotFound() {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 bg-gradient-to-br from-blue-50 to-emerald-50">
      <div className="text-center max-w-md">
        <div className="text-8xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent mb-4">
          404
        </div>
        <h1 className="text-3xl font-bold text-gray-900 mb-3">
          Página não encontrada
        </h1>
        <p className="text-gray-500 mb-8">
          Parece que você se perdeu. Que tal voltar para o início?
        </p>
        <Link
          href="/"
          className="inline-flex px-8 py-3.5 bg-gradient-to-r bg-blue-600 text-white rounded-full font-semibold hover:shadow-lg hover:shadow-blue-500/25 transition-all focus-ring"
        >
          Voltar ao início
        </Link>
      </div>
    </section>
  )
}
