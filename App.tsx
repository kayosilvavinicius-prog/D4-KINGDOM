import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Problem from './components/Problem';
import Origin from './components/Origin';
import Solution from './components/Solution';
import Comparison from './components/Comparison';
import SocialProof from './components/SocialProof';
import Offer from './components/Offer';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

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
        <Comparison />
        <Offer />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
};

export default App;