import { useScrollReveal } from '@/hooks/useScrollReveal';
import { Star } from 'lucide-react';

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
];

// Duplicate testimonials for seamless infinite scroll
const duplicatedTestimonials = [...testimonials, ...testimonials, ...testimonials];

function TestimonialCard({ testimonial, index, total }: { testimonial: Testimonial; index: number; total: number }) {
  // Calculate position-based rotation for curved effect
  // Cards at edges rotate more, center cards are flat
  const position = index % total;
  const normalizedPos = (position / (total - 1)) * 2 - 1; // -1 to 1
  const rotateY = normalizedPos * -8; // Max 8 degrees rotation
  const rotateX = Math.abs(normalizedPos) * 2; // Slight tilt based on distance from center

  return (
    <div
      className="testimonial-card flex-shrink-0 w-[380px] bg-[#09090b] border border-white/[0.06] rounded-xl p-7 flex flex-col"
      style={{
        transform: `perspective(1000px) rotateY(${rotateY}deg) rotateX(${rotateX}deg)`,
        transformStyle: 'preserve-3d',
      }}
    >
      {/* Header */}
      <div className="flex items-center gap-3 mb-4">
        {/* Avatar */}
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

      {/* Stars */}
      <div className="flex gap-0.5 mb-4">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            size={12}
            className={i < testimonial.rating ? 'text-brand-400 fill-brand-400' : 'text-zinc-700'}
          />
        ))}
      </div>

      {/* Quote */}
      <p className="text-sm text-zinc-400 font-light leading-[1.8] flex-1">"{testimonial.text}"</p>
    </div>
  );
}

export function Testimonials() {
  const { ref: titleRef, isRevealed: titleRevealed } = useScrollReveal<HTMLDivElement>();
  const { ref: descRef, isRevealed: descRevealed } = useScrollReveal<HTMLDivElement>();

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

      {/* 3D Curved Carousel */}
      <div className="relative" style={{ perspective: '1200px' }}>
        {/* Top Row - Scrolls Left (inward curve) */}
        <div className="testimonials-row-top mb-4 hover:pause">
          <div className="testimonials-track-left flex gap-4">
            {duplicatedTestimonials.map((testimonial, index) => (
              <TestimonialCard
                key={`top-${testimonial.id}-${index}`}
                testimonial={testimonial}
                index={index}
                total={testimonials.length}
              />
            ))}
          </div>
        </div>

        {/* Bottom Row - Scrolls Right (outward curve) */}
        <div className="testimonials-row-bottom hover:pause">
          <div className="testimonials-track-right flex gap-4">
            {duplicatedTestimonials.map((testimonial, index) => (
              <TestimonialCard
                key={`bottom-${testimonial.id}-${index}`}
                testimonial={testimonial}
                index={index}
                total={testimonials.length}
              />
            ))}
          </div>
        </div>
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
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-33.333%);
          }
        }

        @keyframes scrollRight {
          0% {
            transform: translateX(-33.333%);
          }
          100% {
            transform: translateX(0);
          }
        }

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

        .testimonials-track-left {
          animation: scrollLeft 40s linear infinite;
          width: max-content;
        }

        .testimonials-track-right {
          animation: scrollRight 40s linear infinite;
          width: max-content;
        }

        .testimonials-row-top:hover .testimonials-track-left,
        .testimonials-row-bottom:hover .testimonials-track-right,
        .hover\:pause:hover .testimonials-track-left,
        .hover\:pause:hover .testimonials-track-right {
          animation-play-state: paused;
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
