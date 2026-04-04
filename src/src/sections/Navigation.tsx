import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { useActiveSection } from '@/hooks/useActiveSection';

const navLinks = [
  { href: '#home', label: 'Home' },
  { href: '#services', label: 'Services' },
  { href: '#portfolio', label: 'Our Work' },
  { href: '#about', label: 'About' },
  { href: '#testimonials', label: 'Reviews' },
  { href: '#contact', label: 'Contact' },
];

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const activeSection = useActiveSection(['home', 'services', 'portfolio', 'about', 'testimonials', 'contact']);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 60);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    };
    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isMobileMenuOpen]);

  const handleLinkClick = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? 'bg-[#09090b]/90 backdrop-blur-xl border-b border-white/[0.03]'
            : 'bg-transparent'
        }`}
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <a href="#home" className="flex items-center gap-3" aria-label="Confianza Tech — Home">
            <img
              src="https://z-cdn-media.chatglm.cn/files/d00d489e-7eea-4d72-b3c3-bad7976cab39.png?auth_key=1875140345-ff5cc5006d31463cbcdf3ce46dc6cbd9-0-433ec9de62dc39d975dfa1e9c2bd3071"
              alt=""
className="logo h-16 w-auto mix-blend-screen"
style={{}}
            />
            <div className="hidden sm:block">
              <div className="text-sm font-semibold tracking-wide text-white leading-none">CONFIANZA</div>
              <div className="text-[10px] font-medium tracking-[0.2em] text-brand-400 uppercase leading-none mt-0.5">
                Tech Ltd
              </div>
            </div>
          </a>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`nav-link text-sm font-medium ${
                  activeSection === link.href.slice(1) ? 'active' : ''
                }`}
                aria-current={activeSection === link.href.slice(1) ? 'page' : undefined}
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <a
              href="#contact"
              className="hidden md:inline-flex btn-fill text-xs font-semibold tracking-wider uppercase px-5 py-2.5 rounded-lg"
            >
              Get a Quote
            </a>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden w-10 h-10 flex items-center justify-center text-zinc-400 hover:text-white transition-colors"
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-menu"
              aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
            >
              {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Backdrop */}
      <div
        id="mobile-backdrop"
        className={`mobile-backdrop fixed inset-0 z-40 bg-black/60 backdrop-blur-sm ${
          isMobileMenuOpen ? 'visible' : ''
        }`}
        aria-hidden="true"
        onClick={() => setIsMobileMenuOpen(false)}
        style={{ display: isMobileMenuOpen ? 'block' : 'none' }}
      />

      {/* Mobile Menu */}
      <div
        id="mobile-menu"
        className={`mobile-menu fixed inset-0 z-[45] bg-[#09090b] flex flex-col items-center justify-center gap-8 ${
          isMobileMenuOpen ? 'open' : ''
        }`}
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation"
        style={{ display: isMobileMenuOpen ? 'flex' : 'none' }}
      >
        {navLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            onClick={handleLinkClick}
            className="mobile-link text-2xl font-medium text-zinc-300 hover:text-white transition-colors"
          >
            {link.label}
          </a>
        ))}
        <a
          href="#contact"
          onClick={handleLinkClick}
          className="btn-fill text-[#09090b] text-sm font-semibold tracking-wider uppercase px-8 py-3 rounded-lg mt-4"
        >
          Get a Quote
        </a>
      </div>
    </>
  );
}
