export const COMPANY = {
  name: "Clube Zero Dívidas",
  shortName: "Zero Dívidas",
  tagline: "Soluções inteligentes — Infinitas possibilidades!",
  cnpj: "66.298.322/0001-77",
  legalName: "Aliança Afiliados Digital LTDA",
  email: "contato@clubzerodividas.com.br",
  phone: "(11) 99999-9999",
  hours: "Seg-Sex: 8h às 18h",
  since: 2026,
}

export const NAV_LINKS = [
  { label: "Quem Somos", href: "/sobre" },
  { label: "O que Oferecemos", href: "/#servicos" },
  { label: "Contato", href: "/contato" },
] as const

export const CONSORCIO_PLANS = {
  imovel: [
    { label: "R$ 150.000", value: 150000, entrada: 30, prazo: 220 },
    { label: "R$ 400.000", value: 400000, entrada: 30, prazo: 220 },
    { label: "R$ 500.000", value: 500000, entrada: 30, prazo: 220 },
  ],
  auto: [
    { label: "R$ 50.000", value: 50000, entrada: 30, prazo: 120 },
    { label: "R$ 100.000", value: 100000, entrada: 30, prazo: 120 },
    { label: "R$ 120.000", value: 120000, entrada: 30, prazo: 120 },
  ],
}

export const CARTA_PLANS = [
  { valor: 8600, entrada: 3100, parcelas: 39, valorParcela: 202 },
  { valor: 15900, entrada: 6000, parcelas: 34, valorParcela: 533 },
  { valor: 40000, entrada: 14400, parcelas: 36, valorParcela: 1390 },
]

export const FAQ_ITEMS = [
  {
    question: "O que é consórcio e como funciona?",
    answer: "Consórcio é uma forma de compra planejada sem juros. Um grupo de pessoas contribui mensalmente para formar uma poupança coletiva. Mensalmente, ocorrem sorteios e lances para contemplar os participantes.",
  },
  {
    question: "Qual a diferença entre consórcio e financiamento?",
    answer: "No consórcio não há juros — apenas taxa de administração. No financiamento, os juros podem mais que dobrar o valor do bem. O consórcio exige planejamento, enquanto o financiamento entrega o bem imediatamente com juros.",
  },
  {
    question: "Como funciona a carta contemplada?",
    answer: "A carta contemplada é um crédito já disponível, de alguém que foi contemplado no consórcio e deseja transferir. Você paga uma entrada e assume as parcelas restantes, usando o crédito imediatamente.",
  },
  {
    question: "Posso simular sem compromisso?",
    answer: "Sim! Nossa simulação é gratuita e não requer cadastro. Você ajusta os valores e vê as parcelas em tempo real.",
  },
  {
    question: "Como ser um afiliado?",
    answer: "Cadastre-se gratuitamente, receba materiais de suporte e comece a indicar nossos serviços. Você ganha comissão por cada venda realizada através do seu link.",
  },
]

export const TESTIMONIALS = [
  {
    name: "Carlos Mendes",
    city: "São Paulo, SP",
    text: "Consegui realizar o sonho da casa própria sem pagar juros abusivos. O consórcio foi a melhor decisão financeira que tomei.",
    value: "R$ 150.000",
  },
  {
    name: "Ana Oliveira",
    city: "Rio de Janeiro, RJ",
    text: "Estava com o nome negativado e achava que não teria soluções. A equipe me ajudou a limpar meu nome e recuperar meu score.",
    value: "Score +850",
  },
  {
    name: "Rafael Santos",
    city: "Belo Horizonte, MG",
    text: "Como afiliado, faço mais de R$ 5.000 por mês. O suporte é excelente e os materiais de venda facilitam tudo.",
    value: "+R$ 5.000/mês",
  },
]
