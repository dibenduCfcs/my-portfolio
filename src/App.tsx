import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './sections/Hero';
import { About } from './sections/About';
import { Workflow } from './sections/Workflow';
import { Skills } from './sections/Skills';
import { Projects } from './sections/Projects';
import { CtaBanner } from './sections/CtaBanner';
import { Experience } from './sections/Experience';
import { Services } from './sections/Services';
import { Faq } from './sections/Faq';
import { Contact } from './sections/Contact';
import { Footer } from './components/Footer';

export const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans antialiased selection:bg-blue-100 selection:text-blue-900">
      {/* Accessible Skip Link for SEO and Screen Readers */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-[#3875DE] focus:text-white focus:rounded-xl focus:shadow-lg focus:font-bold focus:text-xs"
      >
        Skip to main content
      </a>

      {/* Sticky Glassmorphic Navbar */}
      <Navbar />

      {/* Main Content Sections with Landmark */}
      <main id="main-content" role="main">
        <Hero />
        <About />
        <Workflow />
        <Skills />
        <Projects />
        <CtaBanner />
        <Experience />
        <Services />
        <Faq />
        <Contact />
      </main>

      {/* Global Footer */}
      <Footer />
    </div>
  );
};

export default App;
