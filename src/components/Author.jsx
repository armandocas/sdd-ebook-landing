import React from 'react'
import { motion } from 'framer-motion'

const Author = () => {
  return (
    <section className="section-container bg-graphite/30">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-12">
            <span className="font-mono text-sm text-cobalt uppercase tracking-wider">Sobre o Autor</span>
            <h2 className="text-4xl md:text-5xl font-black text-white mt-4 mb-6">
              Armando Castellan Neto
            </h2>
          </div>

          <div className="bg-panel border-2 border-cobalt rounded-xl p-8 md:p-12">
            <div className="space-y-6 text-silver leading-relaxed">
              <p className="text-lg">
                Armando Castellan Neto é <span className="text-white font-semibold">desenvolvedor de software, arquiteto de sistemas e especialista em desenvolvimento assistido por IA</span>. Com mais de uma década de experiência em engenharia de software, ele acompanhou de perto a revolução trazida pelos Large Language Models no processo de desenvolvimento.
              </p>

              <p>
                Desde 2022, quando ferramentas como GitHub Copilot e ChatGPT começaram a transformar a forma como código é escrito, Armando vem estudando e refinando metodologias para maximizar a eficácia da colaboração humano-IA. Frustrado com os problemas do <span className="text-white">"vibe coding"</span> — a prática de gerar código através de prompts vagos e iterações sem planejamento — ele começou a aplicar princípios de engenharia de requisitos e especificações formais à interação com modelos de linguagem.
              </p>

              <p>
                O resultado dessa jornada é o <span className="text-cobalt font-semibold">Spec Driven Development (SDD)</span>, uma metodologia que ele tem aplicado com sucesso em projetos reais e que agora compartilha através deste livro.
              </p>

              <p>
                Armando acredita que o futuro do desenvolvimento de software não está em substituir desenvolvedores por IA, mas em <span className="text-white font-semibold">capacitar desenvolvedores a exercer controle criativo e preciso sobre a IA</span> através de especificações bem elaboradas.
              </p>

              <div className="mt-8 pt-8 border-t border-steel">
                <p className="text-sm text-mist font-mono">
                  📍 Baseado em Franca, interior de São Paulo
                  <br />
                  💼 Explorando as fronteiras do desenvolvimento assistido por IA
                  <br />
                  📚 Compartilhando descobertas com a comunidade de desenvolvedores
                </p>
              </div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-8 p-6 bg-cobalt/10 border border-cobalt/30 rounded-lg"
          >
            <blockquote className="text-center">
              <p className="text-xl md:text-2xl text-white font-semibold italic mb-4">
                "Minha esperança é que, ao terminar este livro, você nunca mais olhe para um prompt de geração de código da mesma forma."
              </p>
              <footer className="text-silver font-mono text-sm">
                — Armando Castellan Neto, Prefácio do SDD
              </footer>
            </blockquote>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Author
