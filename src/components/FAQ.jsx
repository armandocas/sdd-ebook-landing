import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null)

  const faqs = [
    {
      question: "Para quem é este ebook?",
      answer: "Este ebook é para desenvolvedores de qualquer nível que já usam (ou querem usar) ferramentas de IA como ChatGPT, GitHub Copilot ou Claude para gerar código. Se você está frustrado com código gerado que funciona apenas parcialmente, ou se quer dominar a arte de criar especificações que resultem em código correto na primeira tentativa, este livro é para você."
    },
    {
      question: "Preciso ter experiência com IA para aproveitar o conteúdo?",
      answer: "Não! O livro começa pelos fundamentos e explica desde o básico do problema até técnicas avançadas. Se você já usa ferramentas de IA, vai entender imediatamente os problemas descritos. Se ainda não usa, vai aprender a forma correta desde o início, evitando os erros comuns do 'vibe coding'."
    },
    {
      question: "Qual a diferença entre SDD e Prompt Engineering?",
      answer: "Prompt engineering é sobre escrever prompts melhores — uma habilidade de comunicação. SDD é sobre criar especificações formais que persistem no repositório, podem ser versionadas, revisadas pelo time e executadas como testes. A spec não é consumida e descartada como um prompt — ela vive junto com o código e serve como documentação executável."
    },
    {
      question: "O livro inclui exemplos práticos?",
      answer: "Sim! O ebook contém mais de 20 exemplos práticos, estudos de caso reais, templates prontos para uso e código completo. Você vai ver desde validações simples (como CPF) até sistemas complexos (APIs REST, pipelines de dados) implementados com SDD."
    },
    {
      question: "Funciona com qualquer LLM?",
      answer: "Sim! O SDD é agnóstico em relação à ferramenta de IA. Os princípios funcionam com ChatGPT, Claude, GitHub Copilot, ou qualquer LLM que você usar. A metodologia foca em especificações bem escritas, não em qual IA você usa para implementá-las."
    },
    {
      question: "Vou receber atualizações futuras?",
      answer: "Sim! Ao comprar o ebook, você tem acesso vitalício e receberá todas as atualizações futuras gratuitamente. À medida que a metodologia evolui e novos exemplos são adicionados, você recebe as versões atualizadas."
    },
    {
      question: "Qual o formato do ebook?",
      answer: "O ebook é entregue em formato PDF de alta qualidade (171 páginas), otimizado para leitura em qualquer dispositivo (computador, tablet, celular). O PDF inclui índice clicável, código colorido e design profissional."
    },
    {
      question: "Como funciona o pagamento?",
      answer: "O pagamento é único de R$ 19,90 via plataforma segura Cakto. Após a confirmação do pagamento, você recebe o link de download imediatamente por email. Aceitamos cartão de crédito e PIX."
    }
  ]

  return (
    <section className="section-container">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="font-mono text-sm text-cobalt uppercase tracking-wider">FAQ</span>
          <h2 className="text-4xl md:text-6xl font-black text-white mt-4 mb-6">
            Perguntas <span className="gradient-text">Frequentes</span>
          </h2>
          <p className="text-xl text-silver">
            Tire suas dúvidas antes de começar sua jornada no SDD
          </p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="bg-panel border border-steel rounded-lg overflow-hidden hover:border-cobalt transition-colors"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-steel/50 transition-colors"
              >
                <span className="text-lg font-semibold text-white pr-4">{faq.question}</span>
                <motion.svg
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="w-6 h-6 text-cobalt flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </motion.svg>
              </button>
              
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-5 text-silver leading-relaxed">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <p className="text-silver mb-6">
            Ainda tem dúvidas? Entre em contato!
          </p>
          <a 
            href="mailto:armandoneto18@gmail.com"
            className="inline-flex items-center gap-2 text-cobalt hover:text-cblue font-mono font-semibold transition-colors"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
              <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
            </svg>
            armandoneto18@gmail.com
          </a>
        </motion.div>
      </div>
    </section>
  )
}

export default FAQ
