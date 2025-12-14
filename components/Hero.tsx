import React from 'react';
import { CheckCircle2, Play } from 'lucide-react';
import Button from './Button';

const Hero: React.FC = () => {
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
            <span>Use gratuitamente por 7 dias</span>
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
          <Button>
            Quero testar o D4 Seller gratuitamente
          </Button>
        </div>

        {/* VSL Section */}
        <div className="relative w-full max-w-3xl mx-auto rounded-xl shadow-2xl overflow-hidden bg-slate-900 aspect-video border-4 border-slate-100 group cursor-pointer ring-1 ring-slate-900/5">
            {/* Overlay for Play Button */}
            <div className="absolute inset-0 flex items-center justify-center z-10">
                <div className="w-20 h-20 bg-white/90 backdrop-blur rounded-full flex items-center justify-center shadow-lg transition-transform duration-300 group-hover:scale-110">
                    <Play className="w-8 h-8 text-slate-900 fill-slate-900 ml-1" />
                </div>
            </div>
            
            <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent z-10 text-left">
                <p className="text-white font-bold text-lg">Entenda o D4 Seller em 1 minuto</p>
                <p className="text-slate-300 text-sm">Veja como a Engenharia de Vendas funciona na prática</p>
            </div>

            {/* Video Thumbnail Placeholder - In a real app, replace with actual video embed or video tag */}
            <img 
              src="https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=2070&auto=format&fit=crop" 
              alt="Vídeo D4 Seller" 
              className="w-full h-full object-cover opacity-60 transition-opacity duration-300 group-hover:opacity-50"
            />
        </div>
        
        <p className="mt-8 text-xs text-slate-400 uppercase tracking-widest">
          Plataforma Segura • Instalação Simples
        </p>
      </div>
    </section>
  );
};

export default Hero;