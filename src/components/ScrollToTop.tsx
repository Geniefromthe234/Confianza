import { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

export function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > window.innerHeight * 0.8);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`scroll-top fixed bottom-6 left-6 z-40 w-10 h-10 bg-[#18181b] border border-white/[0.06] rounded-lg flex items-center justify-center text-zinc-500 hover:text-white hover:border-white/[0.12] transition-all ${
        isVisible ? 'visible' : ''
      }`}
      aria-label="Scroll to top"
    >
      <ArrowUp size={16} />
    </button>
  );
}
