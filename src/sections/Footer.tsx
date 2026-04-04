const navigationLinks = [
  { href: '#home', label: 'Home' },
  { href: '#services', label: 'Services' },
  { href: '#portfolio', label: 'Our Work' },
  { href: '#about', label: 'About' },
  { href: '#testimonials', label: 'Reviews' },
  { href: '#contact', label: 'Contact' },
];

const serviceLinks = [
  { href: '#services', label: 'Solar & Inverter' },
  { href: '#services', label: 'Surveillance' },
  { href: '#services', label: 'Electric Fencing' },
  { href: '#services', label: 'Starlink' },
  { href: '#services', label: 'Electrical Wiring' },
  { href: '#services', label: 'Lightning Protection' },
];

const reachUsLinks = [
  { href: 'tel:09010036051', label: '0901 003 6051', external: false },
  { href: 'https://wa.me/2349010036051', label: 'WhatsApp', external: true },
  { href: 'https://instagram.com/Confianza_tech', label: '@Confianza_tech', external: true },
  { href: 'https://linktr.ee/confianza_tech', label: 'linktr.ee/confianza_tech', external: true },
];

import { useTheme } from '@/context/ThemeContext';

export function Footer() {
  const { theme } = useTheme();
  return (

    <footer className="border-t border-white/[0.03] px-6" role="contentinfo">
      <div className="max-w-7xl mx-auto py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-5">
              <img
                src="https://z-cdn-media.chatglm.cn/files/d00d489e-7eea-4d72-b3c3-bad7976cab39.png?auth_key=1875140345-ff5cc5006d31463cbcdf3ce46dc6cbd9-0-433ec9de62dc39d975dfa1e9c2bd3071"
                alt=""
                className="logo h-7 w-auto"
                style={{ mixBlendMode: theme === 'light' ? 'normal' : 'screen', filter: 'contrast(1.15) brightness(1.1)' }}
              />

              <div>
                <div className="text-xs font-semibold tracking-wide text-white leading-none">CONFIANZA</div>
                <div className="text-[9px] font-medium tracking-[0.18em] text-brand-400 uppercase leading-none mt-0.5">
                  Tech Ltd
                </div>
              </div>
            </div>
            <p className="text-sm text-zinc-600 font-light leading-relaxed">
              Your trusted partner for electrical and technology installations across Nigeria.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-[10px] font-semibold text-zinc-500 tracking-[0.15em] uppercase mb-5">
              Navigation
            </h4>
            <ul className="space-y-2.5">
              {navigationLinks.map((link) => (
                <li key={link.href + link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-zinc-600 hover:text-white transition-colors font-light"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-[10px] font-semibold text-zinc-500 tracking-[0.15em] uppercase mb-5">
              Services
            </h4>
            <ul className="space-y-2.5">
              {serviceLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-zinc-600 hover:text-white transition-colors font-light"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Reach Us */}
          <div>
            <h4 className="text-[10px] font-semibold text-zinc-500 tracking-[0.15em] uppercase mb-5">
              Reach Us
            </h4>
            <ul className="space-y-2.5">
              {reachUsLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target={link.external ? '_blank' : undefined}
                    rel={link.external ? 'noopener noreferrer' : undefined}
                    className="text-sm text-zinc-600 hover:text-white transition-colors font-light"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-14 pt-8 border-t border-white/[0.03] flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-zinc-700 font-light">
            &copy; {new Date().getFullYear()} Confianza Tech Ltd. All rights reserved.
          </p>
          <p className="text-xs text-zinc-800 font-light">Powering Trust. Delivering Excellence.</p>
        </div>
      </div>
    </footer>
  );
}
