# Skill: Marketing da Clube Zero Dívidas

Este skill fornece diretrizes e frameworks profissionais para criar prompts de marketing, anúncios e conteúdos de alta conversão para o Clube Zero Dívidas.

## 🚀 Framework R.I.C.E. (O Segredo do Prompt Perfeito)
Para resultados de alta performance, utilize sempre este framework em seus prompts:

*   **R - Role (Papel):** Defina quem a IA é. (Ex: "Você é um Copywriter Sênior especializado em recuperação de crédito").
*   **I - Intent (Intenção):** O que você quer exatamente? (Ex: "Escrever 3 variações de anúncios de alta conversão").
*   **C - Context (Contexto):** Dados sobre o público, a dor e o cenário. **Dica:** Prompts com ~250 palavras de contexto tendem a performar melhor.
*   **E - Expectation (Expectativa):** O formato, tom de voz e o que NÃO deve ser feito.

---

## 🧠 Engenharia de Prompt de Alta Performance
Baseado em estudos de performance e neurociência aplicada ao marketing:

### 1. A Regra do Colega Sênior
Trate o Claude como um **Colega Sênior** que acabou de chegar no Clube Zero Dívidas. Ele é muito inteligente, mas você precisa "ambientá-lo" com as regras, o tom de voz e os valores da nossa marca para que ele não invente promessas milagrosas.

### 2. Pensamento em Cadeia (Chain of Thought - CoT)
Não peça tudo de uma vez. Peça para a IA:
1.  Primeiro, analisar os 3 maiores medos do nosso público.
2.  Depois, criar ganchos (hooks) baseados nesses medos.
3.  Por fim, escrever o anúncio completo.

### 3. Fatos sobre Promessas
O público financeiro é cético. Instrua o Claude a ser **factual e autoritário**. Evite adjetivos vazios como "incrível", "mágico" ou "rápido demais". Use termos como "Processo Estratégico", "Defesa do Consumidor" e "Histórico de Crédito".

---

## 🛠 Exemplos de Prompts XML (Copie e Use)

### Prompt para Novos Anúncios
```xml
<company_knowledge>
Informações Oficiais do Clube Zero Dívidas:
- Ecossistema de Serviços: Consultas Completas, Limpa Nome, Aumento de Score, Limpa Bacen (SCR), Limpa Bacen PJ (Empresas), Melhoria de Rating Bancário.
- Modelo de Negócio para Afiliados: O parceiro paga uma **Adesão de R$ 70,00** para ter acesso ao portal e direito de revenda de toda a grade.
- Comissões e Lucratividade:
    1. **Indicação Direta:** O afiliado ganha **R$ 49,00 por cada nova adesão** de R$ 70 que ele indicar (Lucro de 70% na indicação!).
    2. **Recorrência:** O afiliado também ganha uma **porcentagem sobre todos os serviços** (Limpa Nome, Score, Bacen, etc) vendidos pelos afiliados da sua rede.
- Método Técnico: Ação coletiva baseada nos Artigos 42 e 43 do CDC (Associação de Defesa do Consumidor).
- Prazo: 4 a 30 dias úteis.
- Autoridade: Solução completa para PF e PJ com alta taxa de conversão.
</company_knowledge>

<context>
Público 1 (Clientes): Brasileiros ou empresas (PJ) negativados ou sem crédito.
Público 2 (Empreendedores): Pessoas que querem criar uma renda extra ou um negócio próprio escalável no mercado de crédito com baixo investimento e alta comissão (R$ 49 por indicação e % sobre serviços).
</context>

<task>
[Descreva aqui sua tarefa: Ex. Criar um post convidando novos afiliados ou vendendo a adesão de R$ 70]
</task>

<constraints>
- Use o valor de adesão de R$ 70 como um forte gatilho de acessibilidade.
- Mencione os Artigos 42 e 43 para autoridade jurídica.
- Prazo real: 4 a 30 dias úteis.
- Fale da variedade de serviços: Score, Bacen e Rating.
</constraints>

<instructions>
Siga a lógica da **Jornada do Cliente Clube Zero Dívidas**:
1. **Fase 1 (Entrada):** Limpa Nome (Remoção de restrições via Art. 42 e 43). Este é o foco principal para atrair novos clientes via adesão de R$ 70.
2. **Fase 2 (Recuperação):** Aumento de Score e Limpa Bacen (SCR).
3. **Fase 3 (Autoridade):** Melhoria de Rating Bancário para aprovação de crédito alto.

Use os detalhes técnicos da <company_knowledge> para embasar cada fase, mas sempre venda o 'Limpa Nome' como o primeiro passo essencial para os novos clientes.
</instructions>
```

---

## 📊 Métricas e Melhorias
- **Teste A/B:** Sempre peça para o Claude criar 2 versões: uma com foco na *Dor* e outra com foco no *Benefício*.
- **Prova Social:** Integre nomes de serviços reais: Limpa Nome, Score, Bacen e Rating.
- **Transparência:** Sempre destaque que o processo é jurídico e estratégico, respeitando os prazos legais de 30 a 60 dias.

