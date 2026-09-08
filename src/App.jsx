import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Process from './components/Process';
import Testimonials from './components/Testimonials';
import Numbers from './components/Numbers';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-[#0B0E14] text-[#E8EAED] flex flex-col selection:bg-accent/25 selection:text-white font-sans antialiased">
      {/* Sticky / Fixed Navbar */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="flex-grow">
        <Hero />
        <About />
        <Portfolio />
        <Process />
        <Testimonials />
        <Numbers />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
