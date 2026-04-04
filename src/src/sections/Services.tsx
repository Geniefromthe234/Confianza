import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { SolarPanel, Cctv, Zap, Satellite, Home, CloudLightning } from 'lucide-react';

interface Service {
  number: string;
  icon: React.ReactNode;
  title: string;
  description: string;
  whatsappText: string;
}

const services: Service[] = [
  {
    number: '01',
    icon: <SolarPanel size={28} className="text-brand-400/70" />,
    title: 'Solar & Inverter Installation',
    description:
      'Premium solar panel and inverter systems tailored to reduce costs and ensure uninterrupted power supply.',
    whatsappText: "Hi Confianza Tech, I'm interested in Solar & Inverter Installation.",
  },
  {
    number: '02',
    icon: <Cctv size={28} className="text-brand-400/70" />,
    title: 'Surveillance Cameras',
    description:
      'Advanced CCTV systems with crystal-clear footage and remote monitoring for complete property protection.',
    whatsappText: "Hi Confianza Tech, I'm interested in Surveillance Camera Installation.",
  },
  {
    number: '03',
    icon: <Zap size={28} className="text-brand-400/70" />,
    title: 'Electric Fencing',
    description:
      'High-performance perimeter fencing designed to deter intruders. Safe, reliable, and standards-compliant.',
    whatsappText: "Hi Confianza Tech, I'm interested in Electric Fencing Installation.",
  },
  {
    number: '04',
    icon: <Satellite size={28} className="text-brand-400/70" />,
    title: 'Starlink Installation',
    description:
      'Professional Starlink setup for high-speed satellite internet — anywhere, anytime.',
    whatsappText: "Hi Confianza Tech, I'm interested in Starlink Installation.",
  },
  {
    number: '05',
    icon: <Home size={28} className="text-brand-400/70" />,
    title: 'General Electrical',
    description:
      'Complete electrical services — house wiring, maintenance, and repairs by licensed professionals.',
    whatsappText: "Hi Confianza Tech, I'm interested in General Electrical Services.",
  },
  {
    number: '06',
    icon: <CloudLightning size={28} className="text-brand-400/70" />,
    title: 'Grounding & Lightning Protection',
    description:
      'Safeguard your property and appliances from electrical surges and lightning strikes.',
    whatsappText: "Hi Confianza Tech, I'm interested in Grounding & Lightning Protection.",
  },
];

function ServiceCard({ service, delay }: { service: Service; delay: number }) {
  const { ref, isRevealed } = useScrollReveal<HTMLDivElement>();

  return (
    <div
      ref={ref}
      className={`reveal service-card bg-[#09090b] p-8 md:p-10 cursor-pointer group ${
        isRevealed ? 'revealed' : ''
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="flex items-start justify-between mb-8">
        <span className="text-xs text-zinc-700 font-mono">{service.number}</span>
        <ArrowUpRight
          size={16}
          className="service-arrow text-zinc-600 opacity-0"
        />
      </div>
      <div className="mb-5">{service.icon}</div>
      <h3 className="text-base font-medium tracking-tight text-white mb-2.5">{service.title}</h3>
      <p className="text-sm text-zinc-600 font-light leading-relaxed mb-6">{service.description}</p>
      <a
        href={`https://wa.me/2349010036051?text=${encodeURIComponent(service.whatsappText)}`}
        target="_blank"
        rel="noopener noreferrer"
        className="service-cta text-xs font-medium text-brand-400/60 inline-flex items-center gap-1.5"
      >
        Get a quote on WhatsApp
        <ArrowRight size={12} />
      </a>
    </div>
  );
}

export function Services() {
  const { ref: titleRef, isRevealed: titleRevealed } = useScrollReveal<HTMLDivElement>();
  const { ref: descRef, isRevealed: descRevealed } = useScrollReveal<HTMLDivElement>();

  return (
    <section id="services" className="py-28 md:py-40 px-6" aria-label="Services">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16 md:mb-20">
          <div className="max-w-xl">
            <span
              className={`reveal text-zinc-600 text-xs font-medium tracking-[0.2em] uppercase mb-4 block ${
                titleRevealed ? 'revealed' : ''
              }`}
              ref={titleRef}
            >
              Services
            </span>
            <h2
              className={`reveal text-3xl md:text-5xl font-semibold tracking-tight ${
                descRevealed ? 'revealed' : ''
              }`}
              ref={descRef}
              style={{ transitionDelay: '80ms' }}
            >
              What we do
            </h2>
          </div>
          <p
            className={`reveal text-zinc-500 font-light leading-relaxed max-w-md text-sm ${
              descRevealed ? 'revealed' : ''
            }`}
            style={{ transitionDelay: '160ms' }}
          >
            A full spectrum of electrical and technology solutions, installed by certified
            professionals across Nigeria.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/[0.04] rounded-2xl overflow-hidden">
          {services.map((service, index) => (
            <ServiceCard
              key={service.number}
              service={service}
              delay={(index % 3) * 80}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
