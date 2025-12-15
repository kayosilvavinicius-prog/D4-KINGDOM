import React from 'react';
import { Stethoscope, Building2, Scissors, Sparkles, Wrench, Cpu, Briefcase, Store } from 'lucide-react';

const SocialProof: React.FC = () => {
  const niches = [
    { icon: Stethoscope, label: "Clínicas & Saúde" },
    { icon: Building2, label: "Imobiliárias" },
    { icon: Sparkles, label: "Estética & Beleza" },
    { icon: Scissors, label: "Barbearias" },
    { icon: Wrench, label: "Serviços Técnicos" },
    { icon: Cpu, label: "Empresas de Tech" },
    { icon: Briefcase, label: "Serviços B2B" },
    { icon: Store, label: "Varejo Premium" }
  ];

  return (
    <section className="py-20 bg-slate-50 border-y border-slate-200">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-10">
          <span className="text-xs font-bold text-slate-400 uppercase tracking-[0.2em]">
            Engenharia de Vendas Validada
          </span>
          <h3 className="mt-2 text-2xl font-bold text-slate-900">
            Treinado para performar no seu mercado
          </h3>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
          {niches.map((item, idx) => (
            <div 
              key={idx} 
              className="group flex flex-col items-center justify-center p-4 bg-white rounded-xl border border-slate-100 shadow-sm hover:shadow-lg hover:-translate-y-1 hover:border-slate-200 transition-all duration-300 cursor-default"
            >
              <div className="mb-3 p-2 bg-slate-50 rounded-lg group-hover:bg-slate-900 transition-colors duration-300">
                <item.icon className="w-6 h-6 text-slate-400 group-hover:text-emerald-400 transition-colors duration-300" />
              </div>
              <span className="text-xs font-semibold text-slate-600 text-center leading-tight group-hover:text-slate-900">
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialProof;