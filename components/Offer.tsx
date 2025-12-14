import React from 'react';
import Button from './Button';
import { Calendar, ShieldCheck, Lock } from 'lucide-react';

const Offer: React.FC = () => {
  return (
    <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
        {/* Abstract Background Shapes */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-slate-800 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-slate-700 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>

      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
          Você não compra o D4 Seller. <br/>
          <span className="text-slate-400">Você prova.</span>
        </h2>
        
        <p className="text-xl text-slate-300 mb-12 max-w-2xl mx-auto">
          Decida com base no resultado real. Estamos liberando o sistema completo por 7 dias, sem custo de adesão e sem contratos de fidelidade.
        </p>

        <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-8 md:p-12 mb-12">
          <div className="grid md:grid-cols-3 gap-8 text-left">
            <div className="flex items-start gap-4">
               <div className="bg-slate-800 p-3 rounded-lg"><Calendar className="w-6 h-6 text-white"/></div>
               <div>
                 <h4 className="font-bold text-lg">7 Dias Reais</h4>
                 <p className="text-sm text-slate-400">Uso completo da plataforma.</p>
               </div>
            </div>
            <div className="flex items-start gap-4">
               <div className="bg-slate-800 p-3 rounded-lg"><ShieldCheck className="w-6 h-6 text-white"/></div>
               <div>
                 <h4 className="font-bold text-lg">Sem Risco</h4>
                 <p className="text-sm text-slate-400">Não gostou? Só cancelar.</p>
               </div>
            </div>
            <div className="flex items-start gap-4">
               <div className="bg-slate-800 p-3 rounded-lg"><Lock className="w-6 h-6 text-white"/></div>
               <div>
                 <h4 className="font-bold text-lg">Zero Contrato</h4>
                 <p className="text-sm text-slate-400">Sem letras miúdas.</p>
               </div>
            </div>
          </div>
        </div>

        <Button variant="white" fullWidth={false} className="w-full md:w-auto text-lg px-10 py-5">
          Quero usar o D4 Seller gratuitamente
        </Button>
        
        <div className="mt-8 inline-block px-4 py-2 bg-slate-800/50 rounded border border-slate-700">
           <p className="text-sm text-yellow-500 font-medium">
             ⚠️ Vagas limitadas para dezembro: Apenas 100 acessos liberados
           </p>
        </div>
      </div>
    </section>
  );
};

export default Offer;