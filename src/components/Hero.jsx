import React from 'react'
import { motion } from 'framer-motion'

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Grid background */}
      <div className="absolute inset-0 grid-pattern opacity-50"></div>
      
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-deep/50 to-deep"></div>
      
      {/* Content */}
      <div className="relative z-10 section-container text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-panel border border-cobalt/30 rounded-full px-4 py-2 mb-8">
            <span className="w-2 h-2 bg-cobalt rounded-full animate-pulse"></span>
            <span className="font-mono text-sm text-silver">1ª Edição • 2026 • eBook</span>
          </div>
          
          {/* Main headline */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-6 leading-tight">
            <span className="text-white">SPEC DRIVEN</span>
            <br />
            <span className="gradient-text">DEVELOPMENT</span>
          </h1>
          
          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-silver mb-4 max-w-3xl mx-auto leading-relaxed">
            A Metodologia que Garante a Criação de Código de IA 
            <span className="text-white font-semibold"> Correto na Primeira Tentativa</span>
          </p>
          
          <p className="text-lg text-mist mb-12 font-mono">
            Do "Vibe Coding" ao Desenvolvimento Preciso com Especificações Executáveis
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a 
              href="https://pay.cakto.com.br/wj4v78h_894807"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-flex items-center gap-2"
            >
              <span>COMPRAR AGORA POR R$ 19,90</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
            <a href="#benefits" className="btn-secondary">
              VER BENEFÍCIOS
            </a>
          </div>
          
          {/* Trust indicators */}
          <div className="mt-16 flex flex-wrap justify-center gap-8 text-sm text-mist font-mono">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-cobalt" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"/>
                <path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd"/>
              </svg>
              <span>171 páginas</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-cobalt" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V7.414A2 2 0 0015.414 6L12 2.586A2 2 0 0010.586 2H6zm5 6a1 1 0 10-2 0v3.586l-1.293-1.293a1 1 0 10-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 11.586V8z" clipRule="evenodd"/>
              </svg>
              <span>PDF Digital</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-cobalt" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z"/>
              </svg>
              <span>Templates inclusos</span>
            </div>
          </div>
        </motion.div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-cobalt rounded-full flex justify-center pt-2">
          <div className="w-1 h-2 bg-cobalt rounded-full"></div>
        </div>
      </motion.div>
    </section>
  )
}

export default Hero
