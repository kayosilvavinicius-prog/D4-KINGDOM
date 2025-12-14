import React from 'react';
import { ArrowRight } from 'lucide-react';
import { CTA_LINK } from '../constants';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'outline' | 'white';
  className?: string;
  fullWidth?: boolean;
}

const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  className = '',
  fullWidth = false
}) => {
  const baseStyles = "inline-flex items-center justify-center px-8 py-4 text-base font-semibold transition-all duration-300 rounded-md tracking-wide focus:outline-none focus:ring-2 focus:ring-offset-2";
  
  const variants = {
    primary: "bg-slate-900 text-white hover:bg-slate-800 shadow-lg hover:shadow-xl focus:ring-slate-900",
    outline: "border-2 border-slate-900 text-slate-900 hover:bg-slate-50 focus:ring-slate-900",
    white: "bg-white text-slate-900 hover:bg-slate-100 shadow-lg hover:shadow-xl focus:ring-white"
  };

  const widthClass = fullWidth ? "w-full" : "";

  return (
    <a 
      href={CTA_LINK}
      target="_blank"
      rel="noopener noreferrer"
      className={`${baseStyles} ${variants[variant]} ${widthClass} ${className}`}
    >
      {children}
      <ArrowRight className="ml-2 w-5 h-5" />
    </a>
  );
};

export default Button;