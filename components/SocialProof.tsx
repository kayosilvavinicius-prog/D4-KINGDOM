import React from 'react';

const SocialProof: React.FC = () => {
  const niches = ["Clínicas Médicas & Odontológicas", "Imobiliárias", "Empresas de Tecnologia", "Serviços B2B", "Escritórios de Advocacia"];

  return (
    <section className="py-20 bg-white border-y border-slate-100">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h3 className="text-lg font-medium text-slate-500 mb-8 uppercase tracking-widest text-sm">
          Testado, treinado e validado em diferentes mercados
        </h3>
        <div className="flex flex-wrap justify-center gap-4 md:gap-8">
          {niches.map((niche, idx) => (
            <span key={idx} className="px-6 py-3 bg-slate-50 border border-slate-200 rounded-lg text-slate-700 font-semibold text-sm">
              {niche}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialProof;