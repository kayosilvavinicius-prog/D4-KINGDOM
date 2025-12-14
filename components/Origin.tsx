import React from 'react';

const Origin: React.FC = () => {
  return (
    <section className="py-24 bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <div className="inline-block px-4 py-1.5 bg-slate-800 rounded-full text-xs font-semibold tracking-wider uppercase text-slate-300 mb-6">
            A Origem
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
            Engenharia de Vendas + Tecnologia + SPIN Selling
          </h2>
          <div className="space-y-6 text-slate-300 text-lg leading-relaxed">
            <p>
              Após atender mais de <strong className="text-white">500 empresas</strong>, identificamos um padrão de dor recorrente: treinar pessoas funcionava, mas não escalava na velocidade que o mercado exigia.
            </p>
            <p>
              O turnover era alto, a consistência era baixa e o custo operacional engolia a margem de lucro.
            </p>
            <p>
              Decidimos resolver isso na raiz. Criamos uma inteligência capaz de replicar o comportamento dos melhores vendedores do mundo, 24 horas por dia.
            </p>
          </div>
        </div>
        <div className="relative">
          <div className="absolute -inset-4 bg-gradient-to-r from-slate-700 to-slate-800 opacity-30 blur-2xl rounded-full"></div>
          <div className="relative bg-slate-800 p-10 rounded-2xl border border-slate-700">
             <blockquote className="text-2xl font-serif italic text-slate-100 text-center">
              "O D4 Seller não nasceu em laboratório.<br/> 
              Nasceu no campo de batalha."
             </blockquote>
             <div className="mt-8 flex justify-center">
               <span className="h-1 w-20 bg-slate-500 rounded-full"></span>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Origin;