import React from 'react';
import { X, Check } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Comparison: React.FC = () => {
  const { ref, isVisible } = useScrollAnimation();
  const rows = [
    { feature: "Tipo de Interação", common: "Script Engessado", d4: "Conversa Estratégica" },
    { feature: "Objetivo", common: "Responder Dúvidas", d4: "Conduzir à Decisão" },
    { feature: "Aprendizado", common: "Não Aprende", d4: "Aprende seu Negócio" },
    { feature: "Metodologia", common: "Nenhuma", d4: "SPIN Selling Aplicado" },
    { feature: "Personalização", common: "Genérica", d4: "Adapta ao Tom de Voz" },
  ];

  return (
    <section ref={ref} className="py-24 bg-slate-50 overflow-hidden">
      <div className={`max-w-5xl mx-auto px-6 transition-all duration-1000 ease-out transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
        <h2 className="text-3xl font-bold text-center text-slate-900 mb-12">
          Por que o D4 Seller é superior?
        </h2>

        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
          <div className="grid grid-cols-3 bg-slate-900 text-white p-6 text-sm md:text-base font-semibold tracking-wide">
            <div className="col-span-1">Critério</div>
            <div className="col-span-1 text-center opacity-70">Chatbots Comuns</div>
            <div className="col-span-1 text-center text-emerald-400">D4 Seller</div>
          </div>
          
          {rows.map((row, idx) => (
            <div key={idx} className="grid grid-cols-3 p-6 border-b border-slate-100 hover:bg-slate-50 transition-colors items-center">
              <div className="font-medium text-slate-900 text-sm md:text-base">{row.feature}</div>
              <div className="flex flex-col items-center justify-center text-center">
                <div className="flex items-center text-red-400 font-medium text-sm md:text-base">
                  <X className="w-4 h-4 mr-1.5 hidden md:block" />
                  {row.common}
                </div>
              </div>
              <div className="flex flex-col items-center justify-center text-center">
                <div className="flex items-center text-emerald-600 font-bold text-sm md:text-base">
                  <Check className="w-4 h-4 mr-1.5 hidden md:block" />
                  {row.d4}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Comparison;