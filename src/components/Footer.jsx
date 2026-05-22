import React from 'react'

const Footer = () => {
  return (
    <footer className="border-t border-steel">
      <div className="section-container py-12">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* Brand */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 bg-cobalt rounded-lg flex items-center justify-center">
                  <span className="text-white font-black text-xl">S</span>
                </div>
                <div>
                  <div className="font-black text-white text-lg">SDD</div>
                  <div className="text-xs text-mist font-mono">Spec Driven Development</div>
                </div>
              </div>
              <p className="text-sm text-silver leading-relaxed">
                A metodologia que garante código de IA correto na primeira tentativa.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="font-bold text-white mb-4">Links Rápidos</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#benefits" className="text-silver hover:text-cobalt transition-colors">
                    Benefícios
                  </a>
                </li>
                <li>
                  <a href="https://pay.cakto.com.br/wj4v78h_894807" target="_blank" rel="noopener noreferrer" className="text-silver hover:text-cobalt transition-colors">
                    Comprar Ebook
                  </a>
                </li>
                <li>
                  <a href="https://github.com/armandocas" target="_blank" rel="noopener noreferrer" className="text-silver hover:text-cobalt transition-colors">
                    GitHub do Autor
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="font-bold text-white mb-4">Contato</h3>
              <ul className="space-y-3 text-sm">
                <li className="flex items-center gap-2 text-silver">
                  <svg className="w-4 h-4 text-cobalt" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
                  </svg>
                  <a href="mailto:armandoneto18@gmail.com" className="hover:text-cobalt transition-colors">
                    armandoneto18@gmail.com
                  </a>
                </li>
                <li className="flex items-center gap-2 text-silver">
                  <svg className="w-4 h-4 text-cobalt" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"/>
                  </svg>
                  <span>Franca-SP, Brasil</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="pt-8 border-t border-steel">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-sm text-mist font-mono">
                © 2026 Armando Castellan Neto. Todos os direitos reservados.
              </p>
              <div className="flex items-center gap-6 text-xs text-mist">
                <span className="font-mono">SDD v1.2026</span>
                <span className="font-mono">Made with 💙 in Franca-SP</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
