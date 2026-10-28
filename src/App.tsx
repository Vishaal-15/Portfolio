import React from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { Navbar } from './components/Navbar/Navbar';
import { Hero } from './components/Hero/Hero';
import { About } from './components/About/About';
import { Experience } from './components/Experience/Experience';
import { Projects } from './components/Projects/Projects';
import { Research } from './components/Research/Research';
import { Skills } from './components/Skills/Skills';
import { Contact } from './components/Contact/Contact';
import { Footer } from './components/Footer/Footer';

export const App: React.FC = () => {
  return (
    <ThemeProvider>
      <div className="portfolio-app-root">
        {/* Subtle modern ambient background mesh */}
        <div className="bg-grid-overlay" aria-hidden="true" />

        {/* Fixed Sticky Header */}
        <Navbar />

        {/* Main Content Area */}
        <main id="main-content">
          <Hero />
          <About />
          <Experience />
          <Projects />
          <Research />
          <Skills />
          <Contact />
        </main>

        {/* Final Footer Section */}
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default App;
