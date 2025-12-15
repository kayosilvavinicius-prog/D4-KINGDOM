import React from 'react';
import { Star, Quote } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Testimonials: React.FC = () => {
  const { ref, isVisible } = useScrollAnimation();

  const testimonials = [
    {
      name: "Ricardo Mendes",
      role: "Diretor Comercial, Imobiliária Viver",
      content: "Antes do D4 Seller, perdíamos leads nos finais de semana e fora do horário comercial. Agora, acordamos na segunda-feira com visitas já agendadas no CRM. A qualificação é impressionante."
    },
    {
      name: "Dra. Ana Paula",
      role: "Gestora, Clínica Sorriso Premium",
      content: "A IA conversa tão bem que os pacientes agradecem a 'atendente' pela simpatia. Reduzimos nosso no-show em 60% apenas confirmando e reagendando automaticamente."
    },
    {
      name: "Felipe Torres",
      role: "CEO, Torres Seguros",
      content: "A implementação foi simples e o resultado imediato. O script de SPIN Selling funciona muito bem para filtrar curiosos. Minha equipe só fala com quem realmente quer comprar."
    }
  ];

  return (
    <section ref={ref} className="py-24 bg-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent"></div>
      
      <div className={`max-w-7xl mx-auto px-6 transition-all duration-1000 ease-out transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">Resultados reais de quem já usa</h2>
          <p className="text-xl text-slate-600">
            Junte-se a centenas de empresas que modernizaram seu atendimento.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((item, idx) => (
            <div key={idx} className="bg-slate-50 p-8 rounded-2xl relative group hover:bg-white hover:shadow-xl transition-all duration-300 border border-slate-100 flex flex-col h-full">
              <Quote className="absolute top-6 right-6 w-8 h-8 text-slate-200 group-hover:text-indigo-100 transition-colors" />
              
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                ))}
              </div>

              <p className="text-slate-700 mb-8 leading-relaxed relative z-10 flex-grow">
                "{item.content}"
              </p>

              <div className="border-t border-slate-200 pt-4">
                <h4 className="font-bold text-slate-900 text-sm">{item.name}</h4>
                <p className="text-slate-500 text-xs">{item.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;