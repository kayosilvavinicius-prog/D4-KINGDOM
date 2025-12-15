import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Problem from './components/Problem';
import Origin from './components/Origin';
import Solution from './components/Solution';
import HowItWorks from './components/HowItWorks';
import Comparison from './components/Comparison';
import SocialProof from './components/SocialProof';
import Testimonials from './components/Testimonials';
import Offer from './components/Offer';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-white font-sans text-slate-900 selection:bg-slate-900 selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <SocialProof />
        <Problem />
        <Origin />
        <Solution />
        <HowItWorks />
        <Comparison />
        <Testimonials />
        <Offer />
        <FAQ />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default App;