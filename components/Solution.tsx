import React from 'react';
import { Bot, BrainCircuit, GitBranch, CalendarCheck, MessageSquare } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Solution: React.FC = () => {
  const { ref, isVisible } = useScrollAnimation();
  const steps = [
    {
      icon: MessageSquare,
      title: "1. Recepção Imediata",
      desc: "O lead entra pelo WhatsApp e é atendido em segundos, independentemente do horário."
    },
    {
      icon: BrainCircuit,
      title: "2. Diagnóstico & SPIN",
      desc: "O D4 Seller aplica perguntas de Situação, Problema, Implicação e Necessidade para qualificar."
    },
    {
      icon: GitBranch,
      title: "3. Direcionamento",
      desc: "Leads qualificados são agendados ou fechados. Curiosos são filtrados."
    }
  ];

  return (
    <section ref={ref} className="py-24 bg-white overflow-hidden">
      <div className={`max-w-7xl mx-auto px-6 transition-all duration-1000 delay-100 ease-out transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        
        {/* Definition */}
        <div className="max-w-3xl mx-auto text-center mb-20">
          <div className="inline-flex items-center justify-center p-3 bg-slate-100 rounded-full mb-6">
            <Bot className="w-6 h-6 text-slate-900" />
          </div>
          <h2 className="text-3xl font-bold text-slate-900 mb-6">O que é o D4 Seller?</h2>
          <p className="text-xl text-slate-600 leading-relaxed mb-8">
            Esqueça os robôs engessados. O D4 Seller é um sistema de vendas com inteligência artificial treinado para <strong>entender</strong> o cliente, conduzir <strong>conversas estratégicas</strong> e buscar o <strong>fechamento</strong>.
          </p>
        </div>

        {/* Process Flow */}
        <div className="relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden lg:block absolute top-12 left-0 right-0 h-0.5 bg-slate-100 z-0"></div>
          
          <div className="grid lg:grid-cols-3 gap-12 relative z-10">
            {steps.map((step, index) => (
              <div key={index} className="bg-white pt-4 text-center group">
                <div className="w-24 h-24 mx-auto bg-slate-50 rounded-full border-4 border-white shadow-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <step.icon className="w-10 h-10 text-slate-800" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{step.title}</h3>
                <p className="text-slate-600 px-4">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Solution;