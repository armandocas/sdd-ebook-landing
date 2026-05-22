import React from 'react'
import { motion } from 'framer-motion'

const Pricing = () => {
  return (
    <section className="section-container bg-gradient-to-b from-deep via-graphite/50 to-deep">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="font-mono text-sm text-yamber uppercase tracking-wider">Oferta Especial</span>
          <h2 className="text-4xl md:text-6xl font-black text-white mt-4 mb-6">
            Invista no Seu <span className="gradient-text">Futuro</span>
          </h2>
          <p className="text-xl text-silver">
            Aprenda a metodologia que vai transformar sua produtividade com IA
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative"
        >
          {/* Glow effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-cobalt/20 via-violet/20 to-cobalt/20 blur-3xl rounded-3xl"></div>
          
          {/* Pricing card */}
          <div className="relative bg-panel border-2 border-cobalt rounded-2xl p-8 md:p-12">
            <div className="text-center mb-8">
              <div className="inline-flex items-center gap-2 bg-yamber/20 border border-yamber rounded-full px-4 py-2 mb-6">
                <svg className="w-5 h-5 text-yamber" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd"/>
                </svg>
                <span className="font-mono text-sm text-yamber font-bold">LANÇAMENTO</span>
              </div>
              
              <div className="mb-4">
                <div className="flex items-center justify-center gap-4 mb-2">
                  <span className="text-2xl text-mist line-through font-mono">R$ 49,90</span>
                  <div className="bg-signal/20 border border-signal rounded-lg px-3 py-1">
                    <span className="text-signal font-bold text-sm">-60%</span>
                  </div>
                </div>
                <div className="text-6xl md:text-7xl font-black text-white mb-2">
                  R$ 19<span className="text-4xl">,90</span>
                </div>
                <p className="text-silver font-mono text-sm">pagamento único • acesso imediato</p>
              </div>
            </div>

            <div className="space-y-4 mb-8">
              {[
                "✓ Ebook completo em PDF (171 páginas)",
                "✓ Todos os 12 capítulos + Apêndices",
                "✓ Templates de especificação prontos para uso",
                "✓ Mais de 20 exemplos práticos e casos de estudo",
                "✓ Acesso vitalício e atualizações futuras",
                "✓ Suporte da comunidade SDD"
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-cobalt flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                  </svg>
                  <span className="text-cloud text-lg">{item}</span>
                </div>
              ))}
            </div>

            <a
              href="https://pay.cakto.com.br/wj4v78h_894807"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full btn-primary text-center text-xl py-6 mb-6"
            >
              🚀 QUERO DOMINAR O SDD AGORA
            </a>

            <div className="flex flex-wrap justify-center gap-6 text-sm text-mist">
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-cobalt" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                </svg>
                <span>Pagamento 100% seguro</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-cobalt" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V7.414A2 2 0 0015.414 6L12 2.586A2 2 0 0010.586 2H6zm5 6a1 1 0 10-2 0v3.586l-1.293-1.293a1 1 0 10-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 11.586V8z" clipRule="evenodd"/>
                </svg>
                <span>Download imediato</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-cobalt" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M8 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM15 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z"/>
                  <path d="M3 4a1 1 0 00-1 1v10a1 1 0 001 1h1.05a2.5 2.5 0 014.9 0H10a1 1 0 001-1V5a1 1 0 00-1-1H3zM14 7a1 1 0 00-1 1v6.05A2.5 2.5 0 0115.95 16H17a1 1 0 001-1v-5a1 1 0 00-.293-.707l-2-2A1 1 0 0015 7h-1z"/>
                </svg>
                <span>Acesso vitalício</span>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <p className="text-silver text-sm mb-2">
            💡 Dúvidas? Entre em contato: <a href="mailto:armandoneto18@gmail.com" className="text-cobalt hover:text-cblue underline">armandoneto18@gmail.com</a>
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default Pricing
