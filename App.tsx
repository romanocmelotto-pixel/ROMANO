import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Menu, X, Leaf, Droplets, Clock, Star, 
  MapPin, Phone, Mail, Instagram, ChevronDown, CheckCircle2, ArrowRight
} from 'lucide-react';

const App = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    setMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: "smooth"
      });
    }
  };

  const fadeUpVariant = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
  };

  return (
    <div className="min-h-screen bg-mura-cream text-mura-dark font-sans selection:bg-mura-lightGreen selection:text-white">
      
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => window.scrollTo(0,0)}>
            <Leaf className={`w-8 h-8 ${scrolled ? 'text-mura-green' : 'text-white'}`} />
            <span className={`font-serif font-bold text-2xl tracking-wide ${scrolled ? 'text-mura-green' : 'text-white'}`}>
              MURA
            </span>
          </div>
          
          <div className="hidden md:flex items-center gap-8 text-sm font-medium tracking-wider uppercase">
            <a href="#diferencial" onClick={scrollToSection('diferencial')} className={`${scrolled ? 'text-mura-dark hover:text-mura-lightGreen' : 'text-white/90 hover:text-white'} transition-colors`}>Diferencial</a>
            <a href="#como-funciona" onClick={scrollToSection('como-funciona')} className={`${scrolled ? 'text-mura-dark hover:text-mura-lightGreen' : 'text-white/90 hover:text-white'} transition-colors`}>Como Funciona</a>
            <a href="#portfolio" onClick={scrollToSection('portfolio')} className={`${scrolled ? 'text-mura-dark hover:text-mura-lightGreen' : 'text-white/90 hover:text-white'} transition-colors`}>Projetos</a>
            <a href="#contato" onClick={scrollToSection('contato')} className={`px-6 py-2.5 rounded-full transition-all ${scrolled ? 'bg-mura-green text-white hover:bg-mura-lightGreen' : 'bg-white text-mura-green hover:bg-white/90 shadow-lg'}`}>
              Solicitar orçamento
            </a>
          </div>

          <button className={`md:hidden p-2 ${scrolled ? 'text-mura-dark' : 'text-white'}`} onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-white flex flex-col items-center justify-center gap-8 text-xl font-medium pt-20"
          >
            <button className="absolute top-6 right-6 p-2 text-mura-dark" onClick={() => setMenuOpen(false)}>
              <X size={28} />
            </button>
            <a href="#diferencial" onClick={scrollToSection('diferencial')} className="text-mura-dark hover:text-mura-green transition-colors">Nosso Diferencial</a>
            <a href="#como-funciona" onClick={scrollToSection('como-funciona')} className="text-mura-dark hover:text-mura-green transition-colors">Como Funciona</a>
            <a href="#portfolio" onClick={scrollToSection('portfolio')} className="text-mura-dark hover:text-mura-green transition-colors">Projetos</a>
            <a href="#faq" onClick={scrollToSection('faq')} className="text-mura-dark hover:text-mura-green transition-colors">Dúvidas Comuns</a>
            <a href="#contato" onClick={scrollToSection('contato')} className="px-8 py-3 bg-mura-green text-white rounded-full mt-4 shadow-lg">
              Solicitar Orçamento
            </a>
          </motion.div>
        )}
      </AnimatePresence>

      {/* HERO SECTION */}
      <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-mura-green">
          <img 
            src="https://images.unsplash.com/photo-1596706935930-b30f81d4da7c?auto=format&fit=crop&q=80&w=2000" 
            alt="Jardim Vertical Premium Mura" 
            className="w-full h-full object-cover opacity-60 mix-blend-overlay"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-mura-green/40 to-mura-green/90" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center pt-20">
          <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="max-w-4xl mx-auto">
            <motion.h1 variants={fadeUpVariant} className="font-serif text-5xl md:text-7xl lg:text-8xl text-white mb-6 leading-tight drop-shadow-md">
              A Natureza, <br/>
              <span className="italic font-light">Elevada à Perfeição.</span>
            </motion.h1>
            <motion.p variants={fadeUpVariant} className="text-lg md:text-2xl text-white/90 font-light mb-10 max-w-2xl mx-auto">
              Jardins verticais inteligentes com tecnologia hidropônica. Um ecossistema automatizado para ambientes de alto padrão.
            </motion.p>
            <motion.div variants={fadeUpVariant} className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href="#contato" onClick={scrollToSection('contato')} className="w-full sm:w-auto px-8 py-4 bg-white text-mura-green font-semibold rounded-full hover:bg-mura-beige transition-colors text-center shadow-lg">
                Solicitar orçamento
              </a>
              <a href="#portfolio" onClick={scrollToSection('portfolio')} className="w-full sm:w-auto px-8 py-4 bg-transparent border-2 border-white text-white font-semibold rounded-full hover:bg-white/10 transition-colors text-center">
                Ver Projetos
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* PROBLEMA + SOLUÇÃO MURA */}
      <section id="diferencial" className="py-24 bg-mura-cream">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="order-2 lg:order-1">
              <motion.div variants={fadeUpVariant} className="text-mura-lightGreen font-bold tracking-widest text-sm uppercase mb-4">
                O Fim dos Jardins Descartáveis
              </motion.div>
              <motion.h2 variants={fadeUpVariant} className="font-serif text-4xl md:text-5xl text-mura-dark mb-6 leading-tight">
                Esqueça os vasos que ressecam e plantas que morrem.
              </motion.h2>
              <motion.p variants={fadeUpVariant} className="text-lg text-gray-600 mb-8 leading-relaxed">
                Jardins verticais comuns dependem de terra, irrigação manual falha e manutenção exaustiva. O resultado é quase sempre o mesmo: plantas secas, paredes manchadas e dinheiro jogado fora.
              </motion.p>
              
              <motion.div variants={fadeUpVariant} className="space-y-6">
                <div className="flex bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                  <div className="bg-mura-green/10 p-3 rounded-full h-fit mr-4">
                    <Droplets className="text-mura-green" size={24} />
                  </div>
                  <div>
                    <h3 className="font-serif text-xl font-semibold mb-2">Sistema Hidropônico Inteligente</h3>
                    <p className="text-gray-600 leading-relaxed">Nutrição direta na raiz através da água, sem terra, sem sujeira e perfeitamente dosado para a necessidade de cada planta.</p>
                  </div>
                </div>
                <div className="flex bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                  <div className="bg-mura-green/10 p-3 rounded-full h-fit mr-4">
                    <Clock className="text-mura-green" size={24} />
                  </div>
                  <div>
                    <h3 className="font-serif text-xl font-semibold mb-2">Irrigação 100% Automatizada</h3>
                    <p className="text-gray-600 leading-relaxed">O sistema cuida de tudo. Sem esquecer de regar, sem regar demais. Plantas vibrantes com manutenção mínima.</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
            
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUpVariant} className="order-1 lg:order-2 relative">
              <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
                <img src="https://69ebabbf7b9aa6e0f06c7f34.imgix.net/jardim%20vertical%20Mura/ChatGPT%20Image%2022%20de%20abr.%20de%202026,%2015_49_55.png" alt="Tecnologia Hidropônica Mura" className="w-full h-full object-cover" />
              </div>
              <div className="absolute -bottom-8 -left-8 bg-white p-6 rounded-2xl shadow-xl max-w-xs hidden sm:block">
                <div className="flex items-center gap-4 mb-2">
                  <CheckCircle2 className="text-mura-lightGreen" size={28} />
                  <span className="font-bold text-xl text-mura-dark">A Solução Definitiva</span>
                </div>
                <p className="text-sm text-gray-500">A Mura entrega um ecossistema autossuficiente que valoriza seu ambiente.</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* COMO FUNCIONA */}
      <section id="como-funciona" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl text-mura-dark mb-4">Como Criamos Seu Oásis</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">Um processo simples, transparente e focado em entregar excelência do design à instalação.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
            {/* Connecting line for desktop */}
            <div className="hidden md:block absolute top-[40px] left-[10%] right-[10%] h-0.5 bg-mura-beige z-0"></div>

            {[
              { num: '01', title: 'Análise', desc: 'Avaliamos luminosidade, espaço e viabilidade hídrica do seu ambiente.' },
              { num: '02', title: 'Projeto', desc: 'Design personalizado selecionando as espécies ideais para o local.' },
              { num: '03', title: 'Instalação', desc: 'Montagem técnica limpa e precisa da estrutura hidropônica.' },
              { num: '04', title: 'Vida', desc: 'Sistema ativado de forma autônoma. Seu jardim pronto e vibrante.' }
            ].map((step, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="relative z-10 flex flex-col items-center text-center group"
              >
                <div className="w-20 h-20 rounded-full bg-white border-4 border-mura-beige flex items-center justify-center text-2xl font-serif text-mura-green mb-6 group-hover:bg-mura-green group-hover:text-white group-hover:border-mura-green transition-all shadow-sm">
                  {step.num}
                </div>
                <h3 className="font-bold text-xl text-mura-dark mb-3">{step.title}</h3>
                <p className="text-gray-600 leading-relaxed text-sm px-4">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* PORTFOLIO */}
      <section id="portfolio" className="py-24 bg-mura-green text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div>
              <div className="text-mura-beige/70 font-bold tracking-widest text-sm uppercase mb-4">Galeria de Projetos</div>
              <h2 className="font-serif text-4xl md:text-5xl leading-tight max-w-2xl">
                Obras Primas Vivas que Transformam Ambientes.
              </h2>
            </div>
            <a href="#contato" onClick={scrollToSection('contato')} className="flex items-center gap-2 text-white hover:text-mura-beige transition-colors border-b border-white pb-1 w-fit">
              Quero um projeto semelhante <ArrowRight size={18} />
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <motion.div initial={{ opacity:0 }} whileInView={{ opacity:1 }} viewport={{ once:true }} className="group relative rounded-2xl overflow-hidden aspect-[3/4]">
              <img src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80&w=800" alt="Residencial" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-8">
                <span className="text-mura-beige text-xs uppercase tracking-widest mb-2 font-semibold">Residencial</span>
                <h3 className="font-serif text-2xl">Varanda Alto Padrão</h3>
              </div>
            </motion.div>
            <motion.div initial={{ opacity:0 }} whileInView={{ opacity:1 }} viewport={{ once:true }} transition={{ delay: 0.2 }} className="group relative rounded-2xl overflow-hidden aspect-[3/4] md:translate-y-8">
              <img src="https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&q=80&w=800" alt="Comercial" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-8">
                <span className="text-mura-beige text-xs uppercase tracking-widest mb-2 font-semibold">Comercial</span>
                <h3 className="font-serif text-2xl">Restaurante Bistrô</h3>
              </div>
            </motion.div>
            <motion.div initial={{ opacity:0 }} whileInView={{ opacity:1 }} viewport={{ once:true }} transition={{ delay: 0.4 }} className="group relative rounded-2xl overflow-hidden aspect-[3/4]">
              <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800" alt="Corporativo" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-8">
                <span className="text-mura-beige text-xs uppercase tracking-widest mb-2 font-semibold">Corporativo</span>
                <h3 className="font-serif text-2xl">Lobby Escritório</h3>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* DIFERENCIAIS COMPARATIVOS */}
      <section className="py-24 bg-mura-beige">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl text-mura-dark mb-4">Mura vs Soluções Comuns</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">Descubra por que arquitetos e proprietários exigentes escolhem nossa tecnologia.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16 max-w-5xl mx-auto">
            <div className="bg-white p-10 rounded-3xl opacity-70">
              <h3 className="text-xl font-bold text-gray-500 mb-6 flex items-center gap-2">
                <X size={24} /> Jardins Comuns
              </h3>
              <ul className="space-y-4 text-gray-600">
                <li className="flex items-start gap-3"><X className="text-red-400 mt-1 flex-shrink-0" size={18} /> Vasos com terra e substrato sujo</li>
                <li className="flex items-start gap-3"><X className="text-red-400 mt-1 flex-shrink-0" size={18} /> Irrigação manual ou gotejamento falho</li>
                <li className="flex items-start gap-3"><X className="text-red-400 mt-1 flex-shrink-0" size={18} /> Plantas com baixa expectativa de vida</li>
                <li className="flex items-start gap-3"><X className="text-red-400 mt-1 flex-shrink-0" size={18} /> Risco de infiltração e mofo na parede</li>
                <li className="flex items-start gap-3"><X className="text-red-400 mt-1 flex-shrink-0" size={18} /> Alta necessidade de manutenção e reposição</li>
              </ul>
            </div>
            
            <div className="bg-mura-green text-white p-10 rounded-3xl shadow-xl transform md:-translate-y-4 border-2 border-mura-lightGreen">
              <h3 className="text-xl font-bold font-serif mb-6 flex items-center gap-2 text-mura-beige">
                <CheckCircle2 size={24} /> Tecnologia Mura
              </h3>
              <ul className="space-y-4 text-white/90">
                <li className="flex items-start gap-3"><CheckCircle2 className="text-mura-lightGreen mt-1 flex-shrink-0" size={18} /> Sistema 100% Hidropônico (sem terra)</li>
                <li className="flex items-start gap-3"><CheckCircle2 className="text-mura-lightGreen mt-1 flex-shrink-0" size={18} /> Irrigação e nutrição totalmente automatizadas</li>
                <li className="flex items-start gap-3"><CheckCircle2 className="text-mura-lightGreen mt-1 flex-shrink-0" size={18} /> Longevidade garantida para as plantas</li>
                <li className="flex items-start gap-3"><CheckCircle2 className="text-mura-lightGreen mt-1 flex-shrink-0" size={18} /> Isolamento total, proteção para sua parede</li>
                <li className="flex items-start gap-3"><CheckCircle2 className="text-mura-lightGreen mt-1 flex-shrink-0" size={18} /> Design exclusivo, manutenção mínima e fácil</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* PROVA SOCIAL */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl text-mura-dark mb-4">Aprovado por Quem Exige o Melhor</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              {
                name: "Meryellen Thoni",
                role: "Cliente",
                text: "Loja com espécies diferenciadas e maravilhosas, atendimento excelente!!",
                stars: 5
              },
              {
                name: "Rafaela Cunha",
                role: "Local Guide",
                text: "Atendimento excelente por Profissionais Paisagistas e plantas maravilhosas! Recomendo a loja e o trabalho.",
                stars: 5
              }
            ].map((review, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-mura-cream p-8 rounded-2xl border border-gray-100"
              >
                <div className="flex gap-1 mb-4 text-mura-lightGreen">
                  {[...Array(review.stars)].map((_, j) => <Star key={j} size={18} fill="currentColor" />)}
                </div>
                <p className="text-gray-700 italic mb-6 leading-relaxed">"{review.text}"</p>
                <div>
                  <p className="font-bold text-mura-dark">{review.name}</p>
                  <p className="text-sm text-gray-500">{review.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA INTERMEDIÁRIO (BENEFÍCIOS) */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-mura-dark">
          <img src="https://images.unsplash.com/photo-1545601445-4d6a0a0565f0?auto=format&fit=crop&q=80&w=2000" alt="Ambiente Mura" className="w-full h-full object-cover opacity-30" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center text-white">
          <h2 className="font-serif text-4xl md:text-6xl mb-8 leading-tight">
            Descubra o bem-estar e a sofisticação da natureza dentro do seu espaço.
          </h2>
          <p className="text-xl text-white/80 font-light mb-10">
            Design exclusivo. Sofisticação incomparável. Um ecossistema vivo que purifica o ar e eleva o padrão do seu imóvel.
          </p>
          <a href="#contato" onClick={scrollToSection('contato')} className="inline-block px-10 py-5 bg-mura-lightGreen text-white font-bold rounded-full hover:bg-[#234F30] transition-colors text-lg shadow-xl hover:scale-105 duration-300">
            Transforme sua parede em um jardim vivo
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-24 bg-white border-t border-gray-100">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl text-mura-dark mb-4">Dúvidas Frequentes</h2>
          </div>

          <div className="space-y-4">
            {[
              { q: "Precisa de muita manutenção?", a: "Não. Nosso sistema é automatizado. O que fazemos é uma visita técnica periódica (a cada 4 a 6 semanas) para podas estéticas e reposição de nutrientes na central." },
              { q: "Funciona em ambiente interno (sem luz solar direta)?", a: "Absolutamente. Nós estudamos as espécies adequadas para a luminosidade do seu local e, quando necessário, instalamos iluminação técnica em LED (Grow Lights) que garantem o desenvolvimento perfeito das plantas." },
              { q: "Quanto tempo duram as plantas?", a: "Graças à tecnologia hidropônica e irrigação constante, a durabilidade é multiplicada em relação aos vasos em terra. Seu quadro vivo se manterá exuberante por anos." },
              { q: "Qual o custo médio do m²?", a: "Como os projetos são altamente personalizados — dependendo da iluminação, estrutura de automação e espécies escolhidas — realizamos o orçamento após a análise inicial para garantir o melhor preço e solução técnica." },
              { q: "A irrigação automatizada vaza ou estraga a parede?", a: "Não. A estrutura Mura possui calhas isolantes de alta resistência e impermeabilização total. A água circula de forma protegida, sem jamais entrar em contato com a alvenaria." }
            ].map((faq, i) => (
              <div key={i} className="border border-gray-200 rounded-2xl overflow-hidden bg-white">
                <button 
                  className="w-full flex justify-between items-center p-6 hover:bg-mura-cream transition-colors text-left font-bold text-lg text-mura-dark"
                  onClick={() => setActiveFaq(activeFaq === i ? null : i)}
                >
                  {faq.q}
                  <ChevronDown className={`transition-transform duration-300 flex-shrink-0 ml-4 ${activeFaq === i ? 'rotate-180 text-mura-lightGreen' : 'text-gray-400'}`} size={20} />
                </button>
                <AnimatePresence>
                  {activeFaq === i && (
                    <motion.div 
                      initial={{ height: 0, opacity: 0 }} 
                      animate={{ height: 'auto', opacity: 1 }} 
                      exit={{ height: 0, opacity: 0 }}
                      className="px-6 pb-6 text-gray-600 leading-relaxed"
                    >
                      {faq.a}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER & CONTATO */}
      <section id="contato" className="bg-mura-dark text-white pt-24 pb-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">
            <div>
              <h2 className="font-serif text-4xl md:text-5xl mb-6 leading-tight">Pronto para criar o seu ecossistema?</h2>
              <p className="text-gray-400 mb-10 text-lg leading-relaxed">Solicite um orçamento sem compromisso. Nossa equipe técnica fará uma análise criteriosa para desenvolver o projeto ideal para o seu espaço.</p>
              
              <div className="space-y-8 text-gray-300">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 bg-white/5 rounded-full flex items-center justify-center border border-white/10">
                    <Phone className="text-mura-lightGreen" size={24} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 uppercase tracking-wider mb-1">WhatsApp / Telefone</p>
                    <a href="tel:2430279609" className="font-bold text-xl hover:text-white transition-colors">(24) 3027-9609</a>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 bg-white/5 rounded-full flex items-center justify-center border border-white/10">
                    <Mail className="text-mura-lightGreen" size={24} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 uppercase tracking-wider mb-1">E-mail</p>
                    <a href="mailto:contato@mura.com.br" className="font-bold text-lg hover:text-white transition-colors">contato@mura.com.br</a>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 bg-white/5 rounded-full flex items-center justify-center border border-white/10">
                    <MapPin className="text-mura-lightGreen" size={24} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 uppercase tracking-wider mb-1">Endereço</p>
                    <p className="font-bold text-lg leading-tight">R. Fernando Tedesco, n585<br/><span className="text-base font-normal">São Lucas, Volta Redonda - RJ</span></p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Contact Form */}
            <div className="bg-white p-8 md:p-10 rounded-3xl text-mura-dark shadow-2xl">
              <h3 className="font-serif text-3xl font-bold mb-8">Inicie seu Projeto</h3>
              <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
                <div>
                  <label className="block text-sm font-semibold text-gray-600 mb-2">Nome Completo</label>
                  <input type="text" className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-mura-green transition-all" placeholder="Como devemos chamar você?" />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-semibold text-gray-600 mb-2">Telefone / WhatsApp</label>
                    <input type="text" className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-mura-green transition-all" placeholder="(00) 00000-0000" />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-600 mb-2">Cidade Base</label>
                    <input type="text" className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-mura-green transition-all" placeholder="Ex: Volta Redonda" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-600 mb-2">Tipo de Ambiente</label>
                  <select className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-mura-green transition-all text-gray-700">
                    <option>Residencial</option>
                    <option>Varanda / Área Externa</option>
                    <option>Escritório / Comercial</option>
                    <option>Consultório / Clínica</option>
                    <option>Outro</option>
                  </select>
                </div>
                <button type="submit" className="w-full py-5 mt-4 bg-mura-green text-white font-bold rounded-xl hover:bg-mura-lightGreen transition-all flex justify-center items-center gap-2 shadow-lg hover:shadow-xl">
                  Solicitar Orçamento Agora <ArrowRight size={20} />
                </button>
              </form>
            </div>
          </div>
          
          <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-2">
              <Leaf className="text-mura-lightGreen" size={28} />
              <span className="font-serif font-bold text-2xl tracking-widest text-white">MURA</span>
            </div>
            <p className="text-gray-500 text-sm text-center">© {new Date().getFullYear()} Mura Ecossistemas Inteligentes. Todos os direitos reservados.</p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 transition-all"><Instagram size={20} /></a>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default App;
