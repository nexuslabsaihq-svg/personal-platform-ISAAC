import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Services from './components/Services';
import Process from './components/Process';
import Certifications from './components/Certifications';
import HobbiesLanguages from './components/HobbiesLanguages';
import Testimonials from './components/Testimonials';
import Numbers from './components/Numbers';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CustomCursor from './components/ui/CustomCursor';
import AnimatedMeshBackground from './components/ui/AnimatedMeshBackground';

// Lazy-loaded pages
const CVPage = lazy(() => import('./pages/CVPage'));
const FinanceNexusPage = lazy(() => import('./pages/FinanceNexusPage'));

function PageLoader() {
  return (
    <div className="min-h-screen bg-[#F7F5F0] flex items-center justify-center">
      <div className="w-8 h-8 rounded-full border-2 border-blue-600/30 border-t-blue-600 animate-spin" />
    </div>
  );
}

function MainSite() {
  return (
    <div className="bg-[#F7F5F0] text-slate-900 min-h-screen relative selection:bg-blue-600/20 selection:text-slate-900">
      <AnimatedMeshBackground />
      <CustomCursor />
      <Navbar />
      <main className="relative z-10">
        <Hero />
        <About />
        <Portfolio />
        <Services />
        <Numbers />
        <Process />
        <Certifications />
        <HobbiesLanguages />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<PageLoader />}>
        <Routes>
          <Route path="/" element={<MainSite />} />
          <Route path="/cv" element={<CVPage />} />
          <Route path="/finance-nexus" element={<FinanceNexusPage />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}
