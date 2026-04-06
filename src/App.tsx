import { useState } from 'react';
import './App.css';
import { ThemeProvider } from '@/context/ThemeContext';
import { Navigation } from '@/sections/Navigation';
import { Hero } from '@/sections/Hero';
import { Services } from '@/sections/Services';
import { Portfolio } from '@/sections/Portfolio';
import { About } from '@/sections/About';
import { WhyUs } from '@/sections/WhyUs';
import { Testimonials } from '@/sections/Testimonials';
import { CTA } from '@/sections/CTA';
import { Contact } from '@/sections/Contact';
import { Footer } from '@/sections/Footer';
import { ScrollToTop } from '@/components/ScrollToTop';
import { Toast } from '@/components/Toast';
import { WhatsAppButton } from '@/components/WhatsAppButton';

function App() {
  const [toast, setToast] = useState({ message: '', isVisible: false });

  const showToast = (message: string) => {
    setToast({ message, isVisible: true });
    setTimeout(() => {
      setToast((prev) => ({ ...prev, isVisible: false }));
    }, 4000);
  };

  return (
    <ThemeProvider>
      <div className="theme-root min-h-screen">
        <a href="#main-content" className="skip-link">
          Skip to content
        </a>

        <Navigation />

        <main id="main-content">
          <Hero />
          <Services />
          <Portfolio />
          <About />
          <WhyUs />
          <Testimonials />
          <CTA />
          <Contact onShowToast={showToast} />
        </main>

        <Footer />

        <ScrollToTop />
        <WhatsAppButton />
        <Toast message={toast.message} isVisible={toast.isVisible} />
      </div>
    </ThemeProvider>
  );
}

export default App;
