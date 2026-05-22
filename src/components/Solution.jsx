import React from 'react'
import { motion } from 'framer-motion'

const Solution = () => {
  return (
    <section className="section-container bg-graphite/50">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="font-mono text-sm text-cobalt uppercase tracking-wider">A Solução</span>
          <h2 className="text-4xl md:text-6xl font-black text-white mt-4 mb-6">
            Especificação como <span className="gradient-text">Artefato Primário</span>
          </h2>
          <p className="text-xl text-silver max-w-3xl mx-auto leading-relaxed">
            O SDD propõe uma inversão radical de perspectiva
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-panel border-2 border-cobalt rounded-xl p-8 md:p-12 mb-12"
        >
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-signal/20 border-2 border-signal rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-signal" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M13.477 14.89A6 6 0 015.11 6.524l8.367 8.368zm1.414-1.414L6.524 5.11a6 6 0 018.367 8.367zM18 10a8 8 0 11-16 0 8 8 0 0116 0z" clipRule="evenodd"/>
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white">Prompt Engineering</h3>
              </div>
              <div className="space-y-2 text-sm text-mist font-mono">
                <p>❌ Crie uma função que valida CPF</p>
                <p>❌ Artefato efêmero (consumido e descartado)</p>
                <p>❌ Melhora com experiência do prompter</p>
                <p>❌ Difícil de versionar e colaborar</p>
              </div>
            </div>
            
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-cobalt/20 border-2 border-cobalt rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-cobalt" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white">Spec Driven Development</h3>
              </div>
              <div className="space-y-2 text-sm text-cloud font-mono">
                <p>✓ Spec formal descrevendo todos os casos válidos e inválidos</p>
                <p>✓ Artefato persistente (vive no repositório)</p>
                <p>✓ Melhora com qualidade da especificação</p>
                <p>✓ Versionável, revisável, colaborativo</p>
              </div>
            </div>
          </div>
          
          <div className="pt-8 border-t border-steel">
            <p className="text-center text-xl text-white font-semibold mb-4">
              A diferença parece sutil, mas é profunda:
            </p>
            <p className="text-center text-lg text-silver leading-relaxed">
              <span className="text-cobalt font-bold">"Em vez de usar prompts para gerar código, 
              use especificações para contratar o comportamento que o código deve ter — 
              e deixe a IA descobrir como implementar."</span>
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="grid md:grid-cols-3 gap-6"
        >
          <div className="text-center p-6">
            <div className="w-16 h-16 bg-cobalt/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-3xl font-black text-cobalt">1</span>
            </div>
            <h3 className="text-lg font-bold text-white mb-2">Escreva a Spec</h3>
            <p className="text-sm text-silver">Defina o comportamento, invariantes, casos de teste</p>
          </div>
          
          <div className="text-center p-6">
            <div className="w-16 h-16 bg-cobalt/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-3xl font-black text-cobalt">2</span>
            </div>
            <h3 className="text-lg font-bold text-white mb-2">IA Implementa</h3>
            <p className="text-sm text-silver">LLM gera código que satisfaz a especificação</p>
          </div>
          
          <div className="text-center p-6">
            <div className="w-16 h-16 bg-cobalt/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-3xl font-black text-cobalt">3</span>
            </div>
            <h3 className="text-lg font-bold text-white mb-2">Valide</h3>
            <p className="text-sm text-silver">Execute testes gerados automaticamente da spec</p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Solution
