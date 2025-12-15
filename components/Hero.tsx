import React, { useState } from 'react';
import { CheckCircle2, Play } from 'lucide-react';
import Button from './Button';

const Hero: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const scrollToCapture = () => {
    const element = document.getElementById('capture-form');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden bg-white">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 mb-8 leading-[1.1]">
          Empresas não perdem vendas por falta de leads.<br />
          <span className="text-slate-500">Perdem por falhas no atendimento.</span>
        </h1>
        
        <p className="text-xl text-slate-600 mb-10 max-w-2xl mx-auto leading-relaxed">
          Conheça o <strong>D4 Seller</strong> — o atendente e vendedor por WhatsApp treinado em vendas consultivas avançadas, criado para empresas de serviços que não podem perder oportunidades.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10 text-sm font-medium text-slate-700">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-5 h-5 text-green-600" />
            <span>Teste gratuitamente</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-5 h-5 text-green-600" />
            <span>Sem contrato</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-5 h-5 text-green-600" />
            <span>Sem risco</span>
          </div>
        </div>

        <div className="flex justify-center mb-16">
          <Button onClick={scrollToCapture}>
            Quero testar o D4 Seller gratuitamente
          </Button>
        </div>

        {/* VSL Section */}
        <div className="relative w-full max-w-3xl mx-auto rounded-xl shadow-2xl overflow-hidden bg-slate-900 aspect-video border-4 border-slate-100 ring-1 ring-slate-900/5">
            {!isPlaying ? (
                <div 
                    className="group cursor-pointer w-full h-full relative overflow-hidden"
                    onClick={() => setIsPlaying(true)}
                >
                    {/* CSS Generated Cover Background */}
                    <div className="absolute inset-0 bg-slate-900">
                        {/* Dark Gradient Base */}
                        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900"></div>
                        
                        {/* Decorative Gradient Orbs */}
                        <div className="absolute top-0 right-0 w-3/4 h-3/4 bg-indigo-500/10 blur-3xl rounded-full translate-x-1/3 -translate-y-1/4"></div>
                        <div className="absolute bottom-0 left-0 w-3/4 h-3/4 bg-blue-600/10 blur-3xl rounded-full -translate-x-1/3 translate-y-1/4"></div>
                        
                        {/* Subtle Grid Pattern */}
                        <div className="absolute inset-0 opacity-[0.05]" 
                             style={{backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '24px 24px'}}>
                        </div>

                        {/* Large Background Watermark */}
                         <div className="absolute inset-0 flex items-center justify-center opacity-10 pointer-events-none transform scale-150">
                             <span className="text-9xl font-bold tracking-tighter text-white select-none">D4</span>
                         </div>
                    </div>

                    {/* Overlay for Play Button */}
                    <div className="absolute inset-0 flex items-center justify-center z-20 transition-transform duration-300 group-hover:scale-105">
                        <div className="w-20 h-20 bg-white/10 backdrop-blur-md border border-white/20 rounded-full flex items-center justify-center shadow-2xl ring-1 ring-white/30 group-hover:bg-white/20 transition-colors">
                            <Play className="w-8 h-8 text-white fill-white ml-1" />
                        </div>
                    </div>
                    
                    {/* Text Overlay */}
                    <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-slate-900/95 via-slate-900/70 to-transparent z-20 text-left">
                        <p className="text-white font-bold text-xl md:text-2xl leading-tight mb-2 max-w-lg shadow-black drop-shadow-md">
                          Entenda como funciona o D4 SELLER em menos de 1 minuto
                        </p>
                        <p className="text-slate-300 text-sm font-medium drop-shadow-sm">
                          Veja a Engenharia de Vendas na prática
                        </p>
                    </div>
                </div>
            ) : (
                <iframe 
                    className="w-full h-full absolute inset-0"
                    src="https://www.youtube.com/embed/oQkJWIKoFZs?autoplay=1&rel=0&modestbranding=1" 
                    title="D4 Seller Demo"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowFullScreen
                ></iframe>
            )}
        </div>
        
        <p className="mt-8 text-xs text-slate-400 uppercase tracking-widest">
          Plataforma Segura • Instalação Simples
        </p>
      </div>
    </section>
  );
};

export default Hero;