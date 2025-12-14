import React from 'react';
import { Clock, MessageSquareWarning, UserX, TrendingDown } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Problem: React.FC = () => {
  const { ref, isVisible } = useScrollAnimation();
  const problems = [
    {
      icon: Clock,
      title: "Demora na resposta",
      desc: "O lead esfria em minutos. Se você não responde na hora, seu concorrente responde."
    },
    {
      icon: UserX,
      title: "Atendimento Amador",
      desc: "Vendedores despreparados que queimam oportunidades por falta de técnica."
    },
    {
      icon: MessageSquareWarning,
      title: "Ausência de Padrão",
      desc: "Cada vendedor fala uma coisa. Não existe processo, script ou previsibilidade."
    },
    {
      icon: TrendingDown,
      title: "Perda de Controle",
      desc: "Você não sabe o que está sendo dito no WhatsApp da sua empresa."
    }
  ];

  return (
    <section ref={ref} className="py-24 bg-slate-50 overflow-hidden">
      <div className={`max-w-7xl mx-auto px-6 transition-all duration-1000 ease-out transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">O WhatsApp virou o principal canal de vendas</h2>
          <p className="text-lg text-slate-600">
            Mas é também onde as empresas mais perdem dinheiro todos os dias.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {problems.map((item, index) => (
            <div key={index} className="bg-white p-8 rounded-xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
              <item.icon className="w-10 h-10 text-red-500 mb-6" />
              <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
              <p className="text-slate-600 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-2xl font-serif italic text-slate-800">
            "O problema não é o canal. É o jeito como ele está sendo usado."
          </p>
        </div>
      </div>
    </section>
  );
};

export default Problem;