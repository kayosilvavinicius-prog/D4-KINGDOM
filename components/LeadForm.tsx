import React, { useState } from 'react';
import { User, Phone, Mail, Lock } from 'lucide-react';
import Button from './Button';
import { CTA_LINK } from '../constants';

// Estendendo a interface Window para evitar erros de TypeScript
declare global {
  interface Window {
    fbq?: any;
    gtag?: any;
    ttq?: any;
    dataLayer?: any[]; // Adicionado suporte ao Data Layer do GTM
  }
}

const LeadForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    whatsapp: '',
    email: ''
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Estrutura do objeto para salvar no Banco de Dados
    const leadData = {
      ...formData,
      submitted_at: new Date().toISOString(),
      source: 'landing_page_d4_seller',
      offer: 'free_trial'
    };

    try {
      // ============================================================
      // 1. REGISTRO DE CONVERSÃO (GTM / PIXELS)
      // ============================================================
      
      // Google Tag Manager (Data Layer)
      // Isso permite que você configure Tags no GTM que disparam quando o evento 'generate_lead' ocorre
      if (window.dataLayer) {
        window.dataLayer.push({
          event: 'generate_lead',
          formLocation: 'hero_section',
          userEmail: formData.email
        });
      }

      // Facebook / Meta Ads (Fallback direto)
      if (typeof window.fbq === 'function') {
        window.fbq('track', 'Lead', {
          content_name: 'Cadastro Trial D4 Seller',
          content_category: 'Sign Up'
        });
      }
      
      console.log('🎯 Evento de conversão disparado (GTM/Pixels)');

      // ============================================================
      // 2. INTEGRAÇÃO COM BANCO DE DADOS / CRM
      // ============================================================
      
      console.log('💾 Registrando no Banco de Dados:', leadData);

      // Simula delay de rede (1.5 segundos) para feedback visual
      await new Promise(resolve => setTimeout(resolve, 1500));

      // Redirecionamento após "salvar"
      window.open(CTA_LINK, '_blank');
      
    } catch (error) {
      console.error('Erro ao registrar lead:', error);
      alert('Houve um erro ao processar. Tente novamente.');
    } finally {
      setLoading(false);
    }
  };

  const isValid = formData.name.length > 2 && formData.whatsapp.length > 8 && formData.email.includes('@');

  return (
    <div className="bg-white rounded-2xl shadow-2xl p-8 border border-slate-100">
      <div className="mb-8 text-center border-b border-slate-100 pb-6">
        <h3 className="text-xl font-bold text-slate-900 mb-2">Preencha para liberar seu acesso</h3>
        <p className="text-sm text-slate-500">
          Acesso imediato à versão completa para teste.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-5">
        <div className="space-y-1">
          <label htmlFor="name" className="text-sm font-medium text-slate-700 ml-1">Nome Completo</label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <User className="h-5 w-5 text-slate-400" />
            </div>
            <input
              type="text"
              id="name"
              name="name"
              required
              className="block w-full pl-10 pr-3 py-3 border border-slate-300 rounded-lg leading-5 bg-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-900 focus:border-slate-900 sm:text-sm transition-all"
              placeholder="Seu nome"
              value={formData.name}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="space-y-1">
          <label htmlFor="whatsapp" className="text-sm font-medium text-slate-700 ml-1">WhatsApp</label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Phone className="h-5 w-5 text-slate-400" />
            </div>
            <input
              type="tel"
              id="whatsapp"
              name="whatsapp"
              required
              className="block w-full pl-10 pr-3 py-3 border border-slate-300 rounded-lg leading-5 bg-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-900 focus:border-slate-900 sm:text-sm transition-all"
              placeholder="(00) 00000-0000"
              value={formData.whatsapp}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="space-y-1">
          <label htmlFor="email" className="text-sm font-medium text-slate-700 ml-1">E-mail Corporativo</label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Mail className="h-5 w-5 text-slate-400" />
            </div>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="block w-full pl-10 pr-3 py-3 border border-slate-300 rounded-lg leading-5 bg-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-900 focus:border-slate-900 sm:text-sm transition-all"
              placeholder="seu@email.com"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="pt-4">
          <Button 
            fullWidth 
            type="submit" 
            disabled={!isValid || loading}
            variant="primary"
          >
            {loading ? 'Processando Registro...' : 'Acessar Plataforma Agora'}
          </Button>
        </div>

        <div className="flex items-center justify-center gap-2 text-xs text-slate-400 mt-4">
          <Lock className="w-3 h-3" />
          <span>Seus dados estão 100% seguros</span>
        </div>
      </form>
    </div>
  );
};

export default LeadForm;