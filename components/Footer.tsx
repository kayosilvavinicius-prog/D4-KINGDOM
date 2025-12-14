import React from 'react';
import { PARENT_COMPANY, BRAND_NAME } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 py-12 text-slate-400 text-sm">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-center md:text-left">
          <h5 className="text-white font-bold text-lg mb-2">{BRAND_NAME}</h5>
          <p>Uma solução {PARENT_COMPANY}. Todos os direitos reservados.</p>
        </div>
        <div className="flex gap-6">
          <a href="#" className="hover:text-white transition-colors">Termos de Uso</a>
          <a href="#" className="hover:text-white transition-colors">Política de Privacidade</a>
          <a href="#" className="hover:text-white transition-colors">Suporte</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;