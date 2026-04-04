import { ShieldCheck, Gem, Timer, Headphones } from 'lucide-react';
import { useScrollReveal } from '@/hooks/useScrollReveal';

interface Feature {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const features: Feature[] = [
  {
    icon: <ShieldCheck size={22} className="text-zinc-600" />,
    title: 'Certified Professionals',
    description:
      'Fully licensed technicians trained to the highest standards. Every installation is safe, compliant, and built to last.',
  },
  {
    icon: <Gem size={22} className="text-zinc-600" />,
    title: 'Premium Materials',
    description:
      'We source only grade-A equipment from trusted manufacturers. No shortcuts, no compromises on quality.',
  },
  {
    icon: <Timer size={22} className="text-zinc-600" />,
    title: 'Timely Delivery',
    description:
      'We respect your schedule. Projects are completed within agreed timelines without sacrificing quality or detail.',
  },
  {
    icon: <Headphones size={22} className="text-zinc-600" />,
    title: 'Ongoing Support',
    description:
      "Our relationship doesn't end at installation. Continuous maintenance support and a team that's always a call away.",
  },
];

function FeatureCard({ feature, delay }: { feature: Feature; delay: number }) {
  const { ref, isRevealed } = useScrollReveal<HTMLDivElement>();

  return (
    <div
      ref={ref}
      className={`reveal feature-card bg-[#09090b] p-8 md:p-10 ${isRevealed ? 'revealed' : ''}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="mb-6">{feature.icon}</div>
      <h3 className="text-base font-medium tracking-tight text-white mb-2">{feature.title}</h3>
      <p className="text-sm text-zinc-600 font-light leading-relaxed">{feature.description}</p>
    </div>
  );
}

export function WhyUs() {
  const { ref: titleRef, isRevealed: titleRevealed } = useScrollReveal<HTMLDivElement>();
  const { ref: headingRef, isRevealed: headingRevealed } = useScrollReveal<HTMLDivElement>();

  return (
    <section id="why-us" className="py-28 md:py-40 px-6 border-t border-white/[0.03]" aria-label="Why choose us">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-xl mx-auto mb-16 md:mb-20">
          <span
            className={`reveal text-zinc-600 text-xs font-medium tracking-[0.2em] uppercase mb-4 block ${
              titleRevealed ? 'revealed' : ''
            }`}
            ref={titleRef}
          >
            Why Confianza
          </span>
          <h2
            className={`reveal text-3xl md:text-5xl font-semibold tracking-tight ${
              headingRevealed ? 'revealed' : ''
            }`}
            ref={headingRef}
            style={{ transitionDelay: '80ms' }}
          >
            The difference
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/[0.04] rounded-2xl overflow-hidden">
          {features.map((feature, index) => (
            <FeatureCard key={feature.title} feature={feature} delay={index * 80} />
          ))}
        </div>
      </div>
    </section>
  );
}
