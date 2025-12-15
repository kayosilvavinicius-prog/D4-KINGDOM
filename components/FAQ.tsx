import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { FaqItem } from '../types';

const FAQ: React.FC = () => {
  const items: FaqItem[] = [
    {
      question: "Isso é apenas um chatbot?",
      answer: "Não. Chatbots seguem árvores de decisão fixas (Se A, então B). O D4 Seller usa Inteligência Artificial Generativa treinada com Engenharia de Vendas para entender contexto, intenção e persuadir o cliente, como um humano faria."
    },
    {
      question: "Preciso de uma equipe técnica para instalar?",
      answer: "Não. A conexão é feita através da leitura de um QR Code, similar ao WhatsApp Web. Nossa equipe de onboarding acompanha todo o processo."
    },
    {
      question: "Funciona para o meu nicho?",
      answer: "O D4 Seller foi treinado em vendas consultivas. Se o seu produto ou serviço exige conversa, explicação e quebra de objeções para ser vendido, ele funciona para você."
    },
    {
      question: "E se eu não gostar durante o teste?",
      answer: "Simplesmente paramos o uso. Não há multa, não há taxa de cancelamento e você não fica preso a nenhum contrato."
    },
    {
      question: "O D4 Seller substitui meus vendedores?",
      answer: "Ele substitui o trabalho braçal e repetitivo de qualificação e agendamento. Seus vendedores receberão leads muito mais prontos para fechar, ou você pode configurar o D4 Seller para fazer a venda completa dependendo do ticket."
    }
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="py-24 bg-white">
      <div className="max-w-3xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-slate-900 mb-12">Perguntas Frequentes</h2>
        <div className="space-y-4">
          {items.map((item, idx) => (
            <div key={idx} className="border border-slate-200 rounded-lg overflow-hidden">
              <button
                className="w-full flex justify-between items-center p-6 text-left bg-white hover:bg-slate-50 transition-colors focus:outline-none"
                onClick={() => toggle(idx)}
              >
                <span className="font-semibold text-slate-900 pr-8">{item.question}</span>
                {openIndex === idx ? (
                  <ChevronUp className="w-5 h-5 text-slate-500" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-slate-500" />
                )}
              </button>
              {openIndex === idx && (
                <div className="p-6 pt-0 text-slate-600 bg-slate-50 border-t border-slate-100">
                  {item.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;