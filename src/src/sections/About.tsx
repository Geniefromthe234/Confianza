import { useScrollReveal } from '@/hooks/useScrollReveal';
import { useCounter } from '@/hooks/useCounter';
import { VideoReel } from '@/components/VideoReel';

interface StatProps {
  target: number;
  suffix: string;
  label: string;
  delay?: number;
}

function Stat({ target, suffix, label, delay = 0 }: StatProps) {
  const { count, ref } = useCounter({ target, duration: 1800 });

  return (
    <div ref={ref} style={{ transitionDelay: `${delay}ms` }}>
      <div className="text-2xl md:text-3xl font-bold stat-number">
        {count}
        {suffix}
      </div>
      <div className="text-[10px] text-zinc-700 font-medium tracking-[0.15em] uppercase mt-1">{label}</div>
    </div>
  );
}

export function About() {
  const { ref: imageRef, isRevealed: imageRevealed } = useScrollReveal<HTMLDivElement>();
  const { ref: contentRef, isRevealed: contentRevealed } = useScrollReveal<HTMLDivElement>();

  return (
    <section id="about" className="py-28 md:py-40 px-6" aria-label="About us">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Video Reel */}
          <div
            ref={imageRef}
            className={`reveal-scale relative order-2 lg:order-1 ${imageRevealed ? 'revealed' : ''}`}
          >
            <div className="relative overflow-hidden rounded-xl h-[480px] lg:h-[580px]">
              <VideoReel />
            </div>
            <div className="absolute -bottom-5 -right-5 lg:-right-8 bg-[#111113] border border-white/[0.06] rounded-xl px-6 py-5">
              <div className="text-3xl font-bold stat-number">60+</div>
              <div className="text-[10px] text-zinc-600 font-medium tracking-[0.15em] uppercase mt-0.5">
                Projects Completed
              </div>
            </div>
          </div>

          {/* Content */}
          <div ref={contentRef} className="order-1 lg:order-2">
            <span
              className={`reveal text-zinc-600 text-xs font-medium tracking-[0.2em] uppercase mb-4 block ${
                contentRevealed ? 'revealed' : ''
              }`}
            >
              About
            </span>
            <h2
              className={`reveal text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight leading-[1.1] mb-7 ${
                contentRevealed ? 'revealed' : ''
              }`}
              style={{ transitionDelay: '80ms' }}
            >
              Built on trust.
              <br />
              Driven by craft.
            </h2>
            <p
              className={`reveal text-zinc-400 font-light leading-[1.7] mb-5 ${
                contentRevealed ? 'revealed' : ''
              }`}
              style={{ transitionDelay: '160ms' }}
            >
              Confianza Tech Ltd is a premier electrical and technology services company operating
              nationwide across Nigeria. Our name means trust — and that's exactly what we deliver
              with every installation.
            </p>
            <p
              className={`reveal text-zinc-600 font-light leading-[1.7] mb-12 ${
                contentRevealed ? 'revealed' : ''
              }`}
              style={{ transitionDelay: '200ms' }}
            >
              Our certified professionals bring deep expertise across solar energy, security
              systems, satellite communications, and general electrical work. Every project reflects
              our commitment to safety, precision, and lasting quality.
            </p>

            {/* Stats */}
            <div
              className={`reveal grid grid-cols-3 gap-8 ${contentRevealed ? 'revealed' : ''}`}
              style={{ transitionDelay: '280ms' }}
            >
              <Stat target={60} suffix="+" label="Projects" delay={0} />
              <Stat target={100} suffix="%" label="Satisfaction" delay={100} />
              <Stat target={36} suffix="" label="States Served" delay={200} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}