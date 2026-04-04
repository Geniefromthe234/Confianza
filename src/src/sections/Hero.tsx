import { useState, useEffect, useCallback, useRef } from 'react';
import { ArrowDownRight } from 'lucide-react';

interface Slide {
  line1: string;
  accent: string;
  sub: string;
  image: string;
}

const slides: Slide[] = [
  {
    line1: 'Powering Your',
    accent: 'Future',
    sub: 'Expert solar and inverter systems — clean energy that keeps you powered, anywhere in Nigeria.',
    image:
      'https://z-cdn-media.chatglm.cn/files/9e981c21-4b2f-402a-bfb5-759d920c60c2.jpg?auth_key=1875140345-be4631beed644b0c83450dab6a0ffba3-0-51c5e8e4e845d3a4b5c9a0da92264291',
  },
  {
    line1: 'Eyes on Every',
    accent: 'Corner',
    sub: 'Advanced surveillance systems with crystal-clear footage and remote monitoring capabilities.',
    image:
      'https://z-cdn-media.chatglm.cn/files/9c178235-e690-4cfc-94d9-d1af685c3585.jpg?auth_key=1875141530-20d338fd7e4947efa5c50a4ccc8d0a4b-0-5cb068ce81dd98007d5cda4a40f5fc56',
  },
  {
    line1: 'Wired to',
    accent: 'Perfection',
    sub: 'Complete electrical installations, wiring, and maintenance by certified professionals.',
    image:
      'https://z-cdn-media.chatglm.cn/files/c16b639c-0148-4ec1-8182-b8a041a03e69.jpg?auth_key=1875140345-a044e8aed76d429792fc6cfcb4f80066-0-d14a558aa350538e70ad168cf7abbcb2',
  },
  {
    line1: 'Boundaries That',
    accent: 'Protect',
    sub: 'Electric fencing, grounding, and lightning protection — securing what matters most.',
    image:
      'https://z-cdn-media.chatglm.cn/files/87a0a7e9-9fd7-4c96-bf55-1f319a08d616.jpg?auth_key=1875140345-c4748d7920284750aedda944099b5430-0-cd675a7bd03b871ba3858b177f5aa949',
  },
];

const INTERVAL = 6000;

export function Hero() {
  const [current, setCurrent] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [isTextFading, setIsTextFading] = useState(false);
  const autoTimerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const heroRef = useRef<HTMLElement>(null);

  const goToSlide = useCallback(
    (index: number, skipText = false) => {
      if (isTransitioning || index === current) return;

      setIsTransitioning(true);

      if (!skipText) {
        setIsTextFading(true);
        setTimeout(() => {
          setCurrent(index);
          setIsTextFading(false);
        }, 460);
      } else {
        setCurrent(index);
      }

      setTimeout(() => {
        setIsTransitioning(false);
      }, 1600);
    },
    [current, isTransitioning]
  );

  const nextSlide = useCallback(() => {
    goToSlide((current + 1) % slides.length);
  }, [current, goToSlide]);

  const startAuto = useCallback(() => {
    if (autoTimerRef.current) {
      clearInterval(autoTimerRef.current);
    }
    if (!isPaused) {
      autoTimerRef.current = setInterval(nextSlide, INTERVAL);
    }
  }, [isPaused, nextSlide]);

  useEffect(() => {
    startAuto();
    return () => {
      if (autoTimerRef.current) {
        clearInterval(autoTimerRef.current);
      }
    };
  }, [startAuto]);

  // Touch handling
  const touchStartX = useRef(0);
  const touchStartY = useRef(0);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.changedTouches[0].screenX;
    touchStartY.current = e.changedTouches[0].screenY;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    const dx = e.changedTouches[0].screenX - touchStartX.current;
    const dy = e.changedTouches[0].screenY - touchStartY.current;

    if (Math.abs(dx) > 50 && Math.abs(dx) > Math.abs(dy) * 1.5) {
      if (dx < 0) {
        goToSlide((current + 1) % slides.length);
      } else {
        goToSlide((current - 1 + slides.length) % slides.length);
      }
      startAuto();
    }
  };

  return (
    <section
      id="home"
      ref={heroRef}
      className="relative h-screen min-h-[700px] flex items-center justify-center py-8 md:py-16 lg:py-24 overflow-hidden"
      aria-label="Hero"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* Background Slides */}
      <div className="absolute inset-0">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`hero-slide absolute inset-0 ${index === current ? 'active' : ''}`}
            data-index={index}
          >
            <img
              src={slide.image}
              alt=""
              className="w-full h-full object-cover"
              loading={index === 0 ? 'eager' : 'lazy'}
              style={{ transform: 'scale(1)' }}
            />
          </div>
        ))}
      </div>

      {/* Overlays */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#09090b] via-[#09090b]/55 to-[#09090b]/25 z-[1]" />
      <div className="absolute inset-0 bg-[#09090b]/15 z-[1]" />

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col justify-center items-center min-h-[70vh] px-6 py-8 md:py-16 hero-enter">
        <div className={`hero-text-inner ${isTextFading ? 'fading' : ''}`}>
          <h1 className="hero-headline text-7xl md:text-8xl lg:text-9xl font-semibold tracking-tight leading-[0.95] max-w-4xl">
            <span className="h-line-1 block">{slides[current].line1}</span>
            <span className="h-line-2 block">
              <span className="accent-word">{slides[current].accent}</span>
            </span>
          </h1>
          <p className="h-sub text-zinc-400 text-2xl md:text-xl lg:text-lg font-light leading-relaxed max-w-xl mb-12 md:mb-8 lg:mb-6">
            {slides[current].sub}
          </p>
        </div>
        <div className="h-btns flex flex-col sm:flex-row items-center justify-center gap-6 md:gap-4 space-y-6 md:space-y-0 w-full md:w-auto mt-0 md:mt-10">
          <a
            href="#services"
            className="btn-fill text-[#09090b] text-xl md:text-sm font-semibold tracking-wider uppercase w-full md:w-auto px-10 md:px-8 py-5 md:py-3.5 rounded-lg inline-flex items-center gap-2"
          >
            Our Services
            <ArrowDownRight size={15} />
          </a>
          <a
            href="#contact"
            className="btn-ghost text-white text-xl md:text-sm font-medium w-full md:w-auto px-10 md:px-8 py-5 md:py-3.5 rounded-lg inline-flex items-center gap-2"
          >
            Request a Quote
          </a>
        </div>
      </div>

      {/* Dots */}
      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex items-center gap-2.5"
        role="tablist"
        aria-label="Hero slides"
      >
        {slides.map((slide, index) => (
          <button
            key={index}
            className={`hero-dot ${index === current ? 'active' : ''}`}
            data-index={index}
            role="tab"
            aria-selected={index === current}
            aria-label={`Slide ${index + 1} — ${slide.accent}`}
            onClick={() => {
              goToSlide(index);
              startAuto();
            }}
          />
        ))}
      </div>
    </section>
  );
}
