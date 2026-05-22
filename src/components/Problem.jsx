import React from 'react'
import { motion } from 'framer-motion'

const Problem = () => {
  const problems = [
    {
      title: "Código que Funciona... Até Não Funcionar",
      description: "O código gerado parece perfeito. Compila, testa superficialmente, parece bem estruturado. Mas não trata autenticação, não lida com timeouts, não valida entrada, não tem logging adequado."
    },
    {
      title: "A IA \"Esquece\" o Contexto",
      description: "Você menciona uma restrição na mensagem #3, mas três iterações depois a IA ignora completamente aquela regra — como se nunca tivesse existido."
    },
    {
      title: "Iteração Infinita Sem Progresso",
      description: "Você tenta corrigir um problema e outro surge. Cada fix quebra algo que estava funcionando. É como apertar um balão cheio d'água."
    },
    {
      title: "A Dívida Técnica Acelerada",
      description: "Código gerado por IA sem especificação clara tende a ser funcionalmente correto mas arquiteturalmente pobre. Estruturas de dados subótimas, dependências desnecessárias, violações de princípios SOLID."
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
        >
          <div className="text-center mb-16">
            <span className="font-mono text-sm text-yamber uppercase tracking-wider">O Problema</span>
            <h2 className="text-4xl md:text-5xl font-black text-white mt-4 mb-6">
              O "Vibe Coding" Está <span className="text-signal">Matando</span> Sua Produtividade
            </h2>
            <p className="text-xl text-silver leading-relaxed">
              Você está usando ChatGPT, GitHub Copilot ou Claude para gerar código. 
              Mas está enfrentando estes problemas:
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {problems.map((problem, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-panel border-l-4 border-signal p-6 rounded-lg hover:bg-steel transition-colors"
              >
                <div className="flex items-start gap-3 mb-3">
                  <svg className="w-6 h-6 text-signal flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd"/>
                  </svg>
                  <div>
                    <h3 className="text-lg font-bold text-white mb-2">{problem.title}</h3>
                    <p className="text-silver text-sm leading-relaxed">{problem.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-12 p-8 bg-gradient-to-r from-signal/10 to-transparent border border-signal/30 rounded-lg"
          >
            <p className="text-lg text-cloud italic leading-relaxed">
              <span className="text-yamber font-bold not-italic">"Um prompt, mesmo bem elaborado, é efêmero e não verificável."</span> 
              <br />
              <span className="text-silver">
                Ele não é um artefato que persiste no repositório, que pode ser revisado pelo time, 
                que pode ser executado como teste automatizado. O prompt engineering trata o sintoma (prompts ruins) 
                sem tratar a causa (ausência de especificação formal).
              </span>
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Problem
