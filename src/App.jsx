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
import SectionDivider from './components/ui/SectionDivider';

// Lazy-loaded pages
const CVPage = lazy(() => import('./pages/CVPage'));
const FinanceNexusPage = lazy(() => import('./pages/FinanceNexusPage'));

function PageLoader() {
  return (
    <div className="min-h-screen bg-base flex items-center justify-center">
      <div className="w-8 h-8 rounded-full border-2 border-accent/30 border-t-accent animate-spin" />
    </div>
  );
}

function MainSite() {
  return (
    <div className="bg-base text-text-main">
      <CustomCursor />
      <Navbar />
      <main>
        <Hero />
        <SectionDivider fromColor="#0B0E14" toColor="#151A24" variant="wave" />
        <About />
        <SectionDivider fromColor="#151A24" toColor="#0B0E14" variant="curve" flip />
        <Portfolio />
        <SectionDivider fromColor="#0B0E14" toColor="#151A24" variant="angle" />
        <Services />
        <SectionDivider fromColor="#151A24" toColor="#0B0E14" variant="wave" flip />
        <Numbers />
        <SectionDivider fromColor="#0B0E14" toColor="#151A24" variant="curve" />
        <Process />
        <SectionDivider fromColor="#151A24" toColor="#0B0E14" variant="wave" />
        <Certifications />
        <SectionDivider fromColor="#0B0E14" toColor="#151A24" variant="angle" flip />
        <HobbiesLanguages />
        <SectionDivider fromColor="#151A24" toColor="#0B0E14" variant="wave" />
        <Testimonials />
        <SectionDivider fromColor="#0B0E14" toColor="#151A24" variant="curve" />
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
