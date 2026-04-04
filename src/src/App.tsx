import { useState } from 'react';
import './App.css';
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

function App() {
  const [toast, setToast] = useState({ message: '', isVisible: false });

  const showToast = (message: string) => {
    setToast({ message, isVisible: true });
    setTimeout(() => {
      setToast((prev) => ({ ...prev, isVisible: false }));
    }, 4000);
  };

  return (
    <div className="bg-[#09090b] text-white min-h-screen">
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
      <Toast message={toast.message} isVisible={toast.isVisible} />
    </div>
  );
}

export default App;
