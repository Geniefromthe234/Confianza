import { useScrollReveal } from '@/hooks/useScrollReveal';
import { Star } from 'lucide-react';
import { useRef, useCallback } from 'react';

interface Testimonial {
  id: number;
  name: string;
  location: string;
  service: string;
  rating: number;
  text: string;
  initials: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Chidi O.',
    location: 'Lagos',
    service: 'Solar & Inverter',
    rating: 5,
    text: "I was spending almost 200k every month on fuel for my gen. My wife showed me Confianza on Instagram and I said let me try them. They came, did the survey, gave me a fair quote. Since they installed the 5kVA system in December, I've only put on the gen like twice. I must confess — I should have done this since.",
    initials: 'CO',
  },
  {
    id: 2,
    name: 'Amina B.',
    location: 'Abuja',
    service: 'CCTV Surveillance',
    rating: 5,
    text: "I travel a lot for work and I needed something to monitor my house. These people installed 8 cameras for me and connected it to my phone. The picture quality is very clear even at night. What I like most is that when I message them on WhatsApp with any question, they reply same day.",
    initials: 'AB',
  },
  {
    id: 3,
    name: 'Emeka N.',
    location: 'Port Harcourt',
    service: 'Electric Fencing',
    rating: 5,
    text: "We had thieves enter our compound twice last year. My neighbor recommended Confianza for the fence. They came with their materials, finished in two days, and showed me how it works. It's been over a year now — no more wahala. My family sleeps well at night.",
    initials: 'EN',
  },
  {
    id: 4,
    name: 'Funke A.',
    location: 'Benin City',
    service: 'Inverter System',
    rating: 5,
    text: "Not going to lie, I was scared. A different person did my inverter before and it spoiled after 3 months — the guy stopped picking my calls. But they explained everything, used good materials, and it's been 8 months now with zero issues. They even called me after one week to check.",
    initials: 'FA',
  },
  {
    id: 5,
    name: 'Dr. Uchenna E.',
    location: 'Enugu',
    service: 'Electrical Wiring',
    rating: 5,
    text: "I just finished building my house and needed proper wiring. A friend who is an engineer told me to use Confianza. The way they handled the job — very neat, very organized. The supervising engineer was on site every day. They even helped me with the grounding.",
    initials: 'UE',
  },
  {
    id: 6,
    name: 'Ibrahim M.',
    location: 'Ibadan',
    service: 'Starlink Setup',
    rating: 5,
    text: "Where I stay, network is very bad. MTN, Airtel — nothing works well. My children do online school and it was always 'Daddy the video is not loading.' I saw Starlink on Confianza's page and asked them. They came and set everything up the same week. Now my children's school runs smoothly.",
    initials: 'IM',
  },
  {
    id: 7,
    name: 'Ngozi K.',
    location: 'Onitsha',
    service: 'Solar Installation',
    rating: 5,
    text: "My shop used to close early because of NEPA issues. Since Confianza installed my solar system, I stay open till 9pm daily. My sales have increased by 40%. Best investment I ever made for my business. The installation was professional and they cleaned up after themselves.",
    initials: 'NK',
  },
  {
    id: 8,
    name: 'Yusuf A.',
    location: 'Kano',
    service: 'CCTV & Fencing',
    rating: 5,
    text: "I needed both cameras and electric fence for my factory. Confianza gave me a package deal that saved me money. The cameras are HD quality and I can watch everything from my phone in Dubai. The fence has already stopped two attempted break-ins. These guys know their work.",
    initials: 'YA',
  },
  {
    id: 9,
    name: 'Grace O.',
    location: 'Warri',
    service: 'Solar & CCTV',
    rating: 5,
    text: "My shop was always dark when NEPA goes and customers no dey come. Confianza installed solar plus CCTV complete. Now I dey see everything clear-clear and light dey 24/7. Installation was fast, no drama. I don recommend give all my fellow traders.",
    initials: 'GO',
  },
  {
    id: 10,
    name: 'Tunde R.',
    location: 'Ilorin',
    service: 'Full Wiring Rewire',
    rating: 5,
    text: "I inherited old house wey wiring don weak. One small spark for kitchen nearly catch fire. Confianza rewired everywhere — new DB board, proper earthing, everything. Engineer explain say dem use fire-rated cables. Peace of mind now.",
    initials: 'TR',
  },
  {
    id: 11,
    name: 'Zainab S.',
    location: 'Jos',
    service: 'Inverter Upgrade',
    rating: 5,
    text: "My old 3kVA inverter no fit carry AC plus fridge. These people upgrade me to 7.5kVA with lithium batteries. Now everything dey work smooth, even when PHCN dey bring light. Dem test everything before dem commot. Excellent service.",
    initials: 'ZS',
  },
  {
    id: 12,
    name: 'Victor U.',
    location: 'Asaba',
    service: 'Electric Gate Automation',
    rating: 5,
    text: "Manual gate tire me. Confianza automated am with motor and remote. Rain, sun — no wahala. Even add safety sensor so e no go jam car. Installation clean, no damage to wall. My neighbors dey ask for their number.",
    initials: 'VU',
  },
];

const baseTestimonials = testimonials.slice(0, 8);
const row1Testimonials = Array(3).fill(baseTestimonials).flat();
const row2Testimonials = Array(3).fill(baseTestimonials).flat();

const CARD_WIDTH = 410;

function TestimonialCard({ testimonial, index, total }: { testimonial: Testimonial; index: number; total: number }) {
  const position = index % total;
  const normalizedPos = (position / (total - 1)) * 2 - 1;
  const rotateY = normalizedPos * -8;
  const rotateX = Math.abs(normalizedPos) * 2;

  return (
    <div
      className="testimonial-card flex-shrink-0 w-[380px] bg-[#09090b] border border-white/[0.06] rounded-xl p-7 flex flex-col"
      style={{
        transform: `perspective(1000px) rotateY(${rotateY}deg) rotateX(${rotateX}deg)`,
        transformStyle: 'preserve-3d',
      }}
    >
      <div className="flex items-center gap-3 mb-4">
        <div className="w-10 h-10 rounded-full bg-brand-400/20 flex items-center justify-center">
          <span className="text-xs font-semibold text-brand-400">{testimonial.initials}</span>
        </div>
        <div className="flex-1">
          <div className="text-sm font-medium text-white">{testimonial.name}</div>
          <div className="text-xs text-zinc-600 font-light">
            {testimonial.location} — {testimonial.service}
          </div>
        </div>
      </div>
      <div className="flex gap-0.5 mb-4">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            size={12}
            className={i < testimonial.rating ? 'text-brand-400 fill-brand-400' : 'text-zinc-700'}
          />
        ))}
      </div>
      <p className="text-sm text-zinc-400 font-light leading-[1.8] flex-1">"{testimonial.text}"</p>
    </div>
  );
}

/**
 * THE ROOT CAUSE OF ALL PREVIOUS FAILURES:
 * CSS animations and inline style `transform` fight over the same property on the same element.
 * The animation always wins — your drag translateX gets ignored.
 *
 * THE FIX — two separate layers:
 *   Layer A (drag layer, ref-controlled): gets translateX from drag. Has NO CSS animation.
 *   Layer B (scroll layer, CSS-controlled): runs the infinite scroll animation. Has NO inline transform.
 *
 * We also write to the DOM directly via ref (no useState) so there's zero re-render lag during drag.
 */
function useCarouselDrag(dragLayerRef: React.RefObject<HTMLDivElement | null>) {
  const isDragging = useRef(false);
  const startX = useRef(0);
  const currentX = useRef(0);

  const applyTransform = (x: number) => {
    if (dragLayerRef.current) {
      dragLayerRef.current.style.transform = `translateX(${x}px)`;
    }
  };

  const onMouseDown = useCallback((e: React.MouseEvent) => {
    e.preventDefault();
    isDragging.current = true;
    startX.current = e.clientX - currentX.current;
    document.body.style.userSelect = 'none';
    document.body.style.cursor = 'grabbing';

    const onMove = (ev: MouseEvent) => {
      if (!isDragging.current) return;
      const x = ev.clientX - startX.current;
      currentX.current = x;
      applyTransform(x);
    };

    const onUp = () => {
      isDragging.current = false;
      document.body.style.userSelect = '';
      document.body.style.cursor = '';
      document.removeEventListener('mousemove', onMove);
      document.removeEventListener('mouseup', onUp);
      // Snap to nearest card boundary
      const snapped = Math.round(currentX.current / CARD_WIDTH) * CARD_WIDTH;
      currentX.current = snapped;
      applyTransform(snapped);
    };

    document.addEventListener('mousemove', onMove);
    document.addEventListener('mouseup', onUp);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dragLayerRef]);

  const onTouchStart = useCallback((e: React.TouchEvent) => {
    isDragging.current = true;
    startX.current = e.touches[0].clientX - currentX.current;
  }, []);

  const onTouchMove = useCallback((e: React.TouchEvent) => {
    if (!isDragging.current) return;
    e.preventDefault();
    const x = e.touches[0].clientX - startX.current;
    currentX.current = x;
    applyTransform(x);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dragLayerRef]);

  const onTouchEnd = useCallback(() => {
    isDragging.current = false;
    const snapped = Math.round(currentX.current / CARD_WIDTH) * CARD_WIDTH;
    currentX.current = snapped;
    applyTransform(snapped);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dragLayerRef]);

  return {
    onMouseDown,
    onTouchStart,
    onTouchMove,
    onTouchEnd,
    onDragStart: (e: React.DragEvent) => e.preventDefault(),
  };
}

export function Testimonials() {
  const { ref: titleRef, isRevealed: titleRevealed } = useScrollReveal<HTMLDivElement>();
  const { ref: descRef, isRevealed: descRevealed } = useScrollReveal<HTMLDivElement>();

  const topDragRef = useRef<HTMLDivElement>(null);
  const bottomDragRef = useRef<HTMLDivElement>(null);

  const topDrag = useCarouselDrag(topDragRef);
  const bottomDrag = useCarouselDrag(bottomDragRef);

  return (
    <section id="testimonials" className="py-28 md:py-40 overflow-hidden" aria-label="Client reviews">
      <div className="max-w-7xl mx-auto px-6 mb-16 md:mb-20">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div className="max-w-xl">
            <span
              className={`reveal text-zinc-600 text-xs font-medium tracking-[0.2em] uppercase mb-4 block ${
                titleRevealed ? 'revealed' : ''
              }`}
              ref={titleRef}
            >
              Testimonials
            </span>
            <h2
              className={`reveal text-3xl md:text-5xl font-semibold tracking-tight ${
                descRevealed ? 'revealed' : ''
              }`}
              ref={descRef}
              style={{ transitionDelay: '80ms' }}
            >
              Trusted across Nigeria
            </h2>
          </div>
          <p
            className={`reveal text-zinc-500 font-light leading-relaxed max-w-md text-sm ${
              descRevealed ? 'revealed' : ''
            }`}
            style={{ transitionDelay: '160ms' }}
          >
            Real reviews from real clients — sent to us directly on WhatsApp and Google.
          </p>
        </div>
      </div>

      <div className="space-y-8">

        {/* ── TOP ROW ───────────────────────────────────────────────────────────
            Structure:
              row-container  → 3D tilt + overflow:hidden + drag event listeners
                drag-layer   → translateX written via ref during drag (no animation)
                  scroll-layer → CSS infinite scroll animation (no inline transform)
        ──────────────────────────────────────────────────────────────────────── */}
        <div
          className="testimonials-row-top group relative w-full max-w-[100rem] mx-auto overflow-hidden cursor-grab active:cursor-grabbing select-none"
          style={{ userSelect: 'none', WebkitUserSelect: 'none' } as React.CSSProperties}
          {...topDrag}
        >
          {/* drag layer — NO animation class */}
          <div ref={topDragRef} style={{ willChange: 'transform' }}>
            {/* scroll layer — animation lives here */}
            <div className="testimonials-track-left flex gap-6">
              {row1Testimonials.map((testimonial, index) => (
                <TestimonialCard
                  key={`top-${testimonial.id}-${index}`}
                  testimonial={testimonial}
                  index={index % 8}
                  total={8}
                />
              ))}
            </div>
          </div>
        </div>

        {/* ── BOTTOM ROW ────────────────────────────────────────────────────── */}
        <div
          className="testimonials-row-bottom group relative w-full max-w-[100rem] mx-auto overflow-hidden cursor-grab active:cursor-grabbing select-none"
          style={{ userSelect: 'none', WebkitUserSelect: 'none' } as React.CSSProperties}
          {...bottomDrag}
        >
          <div ref={bottomDragRef} style={{ willChange: 'transform' }}>
            <div className="testimonials-track-right flex gap-6">
              {row2Testimonials.map((testimonial, index) => (
                <TestimonialCard
                  key={`bottom-${testimonial.id}-${index}`}
                  testimonial={testimonial}
                  index={index % 8}
                  total={8}
                />
              ))}
            </div>
          </div>
        </div>

      </div>

      {/* Drag Hint */}
      <div className="text-center mt-12">
        <p className="text-zinc-500 text-sm font-light italic max-w-md mx-auto">
          ← Drag to browse →
        </p>
      </div>

      {/* Trust Bar */}
      <div className="max-w-7xl mx-auto px-6 mt-16 pt-12 border-t border-white/[0.03]">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="flex -space-x-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={14} className="text-brand-400 fill-brand-400" />
              ))}
            </div>
            <span className="text-sm text-zinc-400 font-light">5.0 rating from 60+ verified clients</span>
          </div>
          <div className="flex items-center gap-5">
            <div className="flex items-center gap-1.5">
              <span className="text-xs text-zinc-600 font-light">via WhatsApp</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="text-xs text-zinc-600 font-light">via Google</span>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes scrollLeft {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-33.333%); }
        }
        @keyframes scrollRight {
          0%   { transform: translateX(-33.333%); }
          100% { transform: translateX(0); }
        }

        /* 3D tilt on the outer row containers */
        .testimonials-row-top {
          transform-style: preserve-3d;
          transform: rotateX(5deg);
          transform-origin: center bottom;
        }
        .testimonials-row-bottom {
          transform-style: preserve-3d;
          transform: rotateX(-5deg);
          transform-origin: center top;
        }

        /* Scroll animation ONLY on the innermost track divs */
        .testimonials-track-left {
          animation: scrollLeft 80s linear infinite;
          width: max-content;
        }
        .testimonials-track-right {
          animation: scrollRight 80s linear infinite;
          width: max-content;
        }

        /* Pause animation on hover so drag feels natural */
        .testimonials-row-top:hover .testimonials-track-left,
        .testimonials-row-bottom:hover .testimonials-track-right {
          animation-play-state: paused;
        }

        /* Kill text selection and browser native drag throughout */
        .testimonials-row-top *,
        .testimonials-row-bottom * {
          -webkit-user-select: none;
          -moz-user-select: none;
          user-select: none;
          -webkit-user-drag: none;
        }

        .testimonial-card {
          transition: border-color 0.4s ease, background-color 0.4s ease, transform 0.3s ease;
        }
        .testimonial-card:hover {
          border-color: rgba(255, 255, 255, 0.1);
          background-color: rgba(255, 255, 255, 0.015);
        }
      `}</style>
    </section>
  );
}