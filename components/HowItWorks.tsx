import React from 'react';
import { UserPlus, Brain, Zap, CalendarCheck, RefreshCw, BarChart3 } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const HowItWorks: React.FC = () => {
  const { ref, isVisible } = useScrollAnimation();

  const steps = [
    {
      number: "01",
      title: "Cadastro Rápido",
      desc: "Crie sua conta em menos de 2 minutos. Sem burocracia, sem complicação.",
      icon: UserPlus
    },
    {
      number: "02",
      title: "Configuração Inteligente",
      desc: "Nossa IA aprende sobre seu negócio, produtos e persona ideal em minutos.",
      icon: Brain
    },
    {
      number: "03",
      title: "Ativação Automática",
      desc: "D4 Seller começa a conversar com leads imediatamente, 24/7.",
      icon: Zap
    },
    {
      number: "04",
      title: "Agendamento Direto",
      desc: "Reuniões qualificadas aparecem automaticamente na sua agenda.",
      icon: CalendarCheck
    },
    {
      number: "05",
      title: "Otimização Contínua",
      desc: "Sistema aprende e melhora constantemente com cada interação.",
      icon: RefreshCw
    },
    {
      number: "06",
      title: "Resultados Mensuráveis",
      desc: "Acompanhe ROI, conversões e performance em tempo real no dashboard.",
      icon: BarChart3
    }
  ];

  return (
    <section ref={ref} className="py-24 bg-slate-900 text-white relative overflow-hidden">
       {/* Background Elements */}
       <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-[20%] -right-[10%] w-[500px] h-[500px] bg-emerald-500/10 rounded-full blur-[100px]"></div>
        <div className="absolute -bottom-[20%] -left-[10%] w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[100px]"></div>
      </div>

      <div className={`max-w-7xl mx-auto px-6 relative z-10 transition-all duration-1000 ease-out transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block px-4 py-1.5 bg-slate-800 rounded-full text-xs font-semibold tracking-wider uppercase text-emerald-400 mb-6 border border-slate-700">
            Passo a Passo
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Como Funciona?</h2>
          <p className="text-xl text-slate-400">
            De zero a vendendo em menos de 30 minutos. Simples assim.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {steps.map((step, index) => (
            <div key={index} className="bg-slate-800/50 border border-slate-700 p-8 rounded-2xl hover:bg-slate-800 transition-all duration-300 group hover:border-emerald-500/30">
              <div className="flex justify-between items-start mb-6">
                <div className="p-3 bg-slate-900 rounded-lg group-hover:scale-110 transition-transform duration-300 border border-slate-800 group-hover:border-emerald-500/20">
                  <step.icon className="w-8 h-8 text-emerald-400" />
                </div>
                <span className="text-4xl font-bold text-slate-800 group-hover:text-slate-700 transition-colors select-none">
                  {step.number}
                </span>
              </div>
              
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-emerald-400 transition-colors">
                {step.title}
              </h3>
              <p className="text-slate-400 leading-relaxed">
                {step.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default HowItWorks;