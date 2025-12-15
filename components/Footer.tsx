import React from 'react';
import { Instagram } from 'lucide-react';
import { BRAND_NAME } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 py-12 text-slate-400 text-sm">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="text-center md:text-left">
          <h5 className="text-white font-bold text-lg mb-2">{BRAND_NAME}</h5>
          <div className="flex flex-col gap-1">
            <p>Digital Kingdom CNPJ 54.706.912/0001-02</p>
            <p>Todos os direitos reservados.</p>
          </div>
        </div>
        
        <div className="flex flex-col items-center md:items-end gap-4">
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Termos de Uso</a>
            <a href="#" className="hover:text-white transition-colors">Política de Privacidade</a>
            <a href="#" className="hover:text-white transition-colors">Suporte</a>
          </div>
          
          <a 
            href="https://www.instagram.com/d4_kingdom" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors"
          >
            <Instagram className="w-4 h-4" />
            <span>@d4_kingdom</span>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;