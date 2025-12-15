import React from 'react';
import { Calendar, ShieldCheck, Lock, CreditCard } from 'lucide-react';
import LeadForm from './LeadForm';

const Offer: React.FC = () => {
  return (
    <section id="capture-form" className="py-24 bg-slate-900 text-white relative overflow-hidden">
        {/* Abstract Background Shapes */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-slate-800 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-slate-700 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Column: Text & Benefits */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight leading-tight">
              Você não compra o D4 Seller. <br/>
              <span className="text-slate-400">Você prova.</span>
            </h2>
            
            <p className="text-xl text-slate-300 mb-10 leading-relaxed">
              Decida com base no resultado real. Estamos liberando o sistema completo para teste, sem custo de adesão e sem contratos de fidelidade.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4 p-4 bg-slate-800/50 rounded-xl border border-slate-700/50">
                 <div className="bg-slate-800 p-2 rounded-lg shrink-0"><Calendar className="w-6 h-6 text-emerald-400"/></div>
                 <div>
                   <h4 className="font-bold text-lg">Teste Gratuito</h4>
                   <p className="text-sm text-slate-400">Acesso ilimitado a todas as funcionalidades.</p>
                 </div>
              </div>
              <div className="flex items-start gap-4 p-4 bg-slate-800/50 rounded-xl border border-slate-700/50">
                 <div className="bg-slate-800 p-2 rounded-lg shrink-0"><ShieldCheck className="w-6 h-6 text-emerald-400"/></div>
                 <div>
                   <h4 className="font-bold text-lg">Sem Risco</h4>
                   <p className="text-sm text-slate-400">Se não gostar, basta parar de usar. Simples.</p>
                 </div>
              </div>
              <div className="flex items-start gap-4 p-4 bg-slate-800/50 rounded-xl border border-slate-700/50">
                 <div className="bg-slate-800 p-2 rounded-lg shrink-0"><Lock className="w-6 h-6 text-emerald-400"/></div>
                 <div>
                   <h4 className="font-bold text-lg">Zero Contrato</h4>
                   <p className="text-sm text-slate-400">Sem letras miúdas ou fidelidade forçada.</p>
                 </div>
              </div>
              
              {/* No Credit Card Item */}
              <div className="flex items-start gap-4 p-4 bg-slate-800/50 rounded-xl border border-slate-700/50">
                 <div className="bg-slate-800 p-2 rounded-lg shrink-0">
                    <CreditCard className="w-6 h-6 text-emerald-400" />
                 </div>
                 <div>
                   <h4 className="font-bold text-lg">Sem Cartão</h4>
                   <p className="text-sm text-slate-400">Não precisa cadastrar seu cartão.</p>
                 </div>
              </div>
            </div>

            <div className="mt-8 inline-block px-4 py-2 bg-yellow-500/10 rounded border border-yellow-500/20">
               <p className="text-sm text-yellow-500 font-medium">
                 ⚠️ Vagas limitadas para dezembro: Apenas 50 acessos liberados
               </p>
            </div>
          </div>

          {/* Right Column: Capture Form */}
          <div className="relative">
            {/* Glow effect behind form */}
            <div className="absolute inset-0 bg-slate-800 blur-2xl opacity-50 transform scale-105 rounded-3xl"></div>
            <div className="relative">
              <LeadForm />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Offer;