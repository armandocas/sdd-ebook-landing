import React from 'react'
import { motion } from 'framer-motion'

const ContentPreview = () => {
  const chapters = [
    {
      number: "00",
      title: "Prefácio",
      subtitle: "Por Armando Castellan Neto",
      color: "cobalt"
    },
    {
      number: "01",
      title: "Introdução",
      subtitle: "O Problema do Vibe Coding",
      color: "violet"
    },
    {
      number: "02",
      title: "O que é Spec Driven Development?",
      subtitle: "Fundamentos e filosofia do SDD",
      color: "teal"
    },
    {
      number: "03",
      title: "Os Princípios Fundamentais do SDD",
      subtitle: "Design by Contract, Property-Based Testing e mais",
      color: "cobalt"
    },
    {
      number: "04",
      title: "Como Escrever Especificações Excelentes",
      subtitle: "Técnicas práticas para specs eficazes",
      color: "violet"
    },
    {
      number: "05",
      title: "O Fluxo Completo de Trabalho com SDD",
      subtitle: "Da spec à implementação validada",
      color: "teal"
    },
    {
      number: "06",
      title: "SDD na Prática: Estudos de Caso",
      subtitle: "Implementações reais e lições aprendidas",
      color: "cobalt"
    },
    {
      number: "07",
      title: "Ferramentas e Ecossistema do SDD",
      subtitle: "Stack completa para produtividade máxima",
      color: "amber"
    },
    {
      number: "08",
      title: "Benefícios Quantitativos e Desafios",
      subtitle: "Métricas de impacto e pontos de atenção",
      color: "violet"
    },
    {
      number: "09",
      title: "SDD Avançado",
      subtitle: "Técnicas de composição, reuso e padrões",
      color: "cobalt"
    },
    {
      number: "10",
      title: "Conclusão",
      subtitle: "O Futuro do Desenvolvimento com IA",
      color: "violet"
    },
    {
      number: "++",
      title: "Apêndices",
      subtitle: "Templates, Glossário e Exemplos Completos",
      color: "amber"
    }
  ]

  const colorClasses = {
    cobalt: "border-cobalt text-cobalt",
    violet: "border-violet text-violet",
    teal: "border-teal text-teal",
    amber: "border-yamber text-yamber"
  }

  return (
    <section className="section-container">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="font-mono text-sm text-cobalt uppercase tracking-wider">Sumário</span>
          <h2 className="text-4xl md:text-6xl font-black text-white mt-4 mb-6">
            171 Páginas de <span className="gradient-text">Conhecimento Prático</span>
          </h2>
          <p className="text-xl text-silver max-w-3xl mx-auto leading-relaxed">
            Uma jornada completa do problema à solução, com exemplos reais e templates prontos para uso
          </p>
        </motion.div>

        <div className="space-y-4">
          {chapters.map((chapter, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className={`bg-panel border-l-4 ${colorClasses[chapter.color]} p-6 rounded-lg hover:bg-steel transition-all group`}
            >
              <div className="flex items-start gap-4">
                <div className={`font-mono font-bold text-2xl ${colorClasses[chapter.color]} flex-shrink-0 w-12`}>
                  {chapter.number}
                </div>
                <div className="flex-1">
                  <h3 className="text-lg md:text-xl font-bold text-white mb-1 group-hover:text-cobalt transition-colors">
                    {chapter.title}
                  </h3>
                  <p className="text-sm text-silver">{chapter.subtitle}</p>
                </div>
                <svg className="w-5 h-5 text-mist group-hover:text-cobalt transition-colors flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-12 grid md:grid-cols-3 gap-6"
        >
          <div className="bg-panel border border-cobalt p-6 rounded-lg text-center">
            <div className="text-4xl font-black text-cobalt mb-2">171</div>
            <div className="text-sm text-silver font-mono">Páginas</div>
          </div>
          <div className="bg-panel border border-violet p-6 rounded-lg text-center">
            <div className="text-4xl font-black text-violet mb-2">12</div>
            <div className="text-sm text-silver font-mono">Capítulos</div>
          </div>
          <div className="bg-panel border border-yamber p-6 rounded-lg text-center">
            <div className="text-4xl font-black text-yamber mb-2">20+</div>
            <div className="text-sm text-silver font-mono">Exemplos Práticos</div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default ContentPreview
