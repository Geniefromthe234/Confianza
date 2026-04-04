import { ArrowRight, Phone } from 'lucide-react';
import { useScrollReveal } from '@/hooks/useScrollReveal';

export function CTA() {
  const { ref: headingRef, isRevealed: headingRevealed } = useScrollReveal<HTMLHeadingElement>();
  const { ref: descRef, isRevealed: descRevealed } = useScrollReveal<HTMLParagraphElement>();
  const { ref: btnsRef, isRevealed: btnsRevealed } = useScrollReveal<HTMLDivElement>();

  return (
    <section className="py-28 md:py-40 px-6" aria-label="Call to action">
      <div className="max-w-3xl mx-auto text-center">
        <h2
          ref={headingRef}
          className={`reveal text-3xl md:text-5xl lg:text-6xl font-semibold tracking-tight leading-[1.05] ${
            headingRevealed ? 'revealed' : ''
          }`}
        >
          Ready to get
          <br />
          started?
        </h2>
        <p
          ref={descRef}
          className={`reveal text-zinc-500 font-light leading-relaxed mt-6 max-w-md mx-auto ${
            descRevealed ? 'revealed' : ''
          }`}
          style={{ transitionDelay: '100ms' }}
        >
          Tell us about your project and we'll get back to you within 24 hours.
        </p>
        <div
          ref={btnsRef}
          className={`reveal flex flex-col sm:flex-row items-center justify-center gap-4 mt-10 ${
            btnsRevealed ? 'revealed' : ''
          }`}
          style={{ transitionDelay: '200ms' }}
        >
          <a
            href="#contact"
            className="btn-fill text-[#09090b] text-sm font-semibold tracking-wider uppercase px-10 py-4 rounded-lg inline-flex items-center gap-2"
          >
            Start a Project
            <ArrowRight size={15} />
          </a>
          <a
            href="tel:09010036051"
            className="btn-ghost text-white text-sm font-medium px-10 py-4 rounded-lg inline-flex items-center gap-2"
          >
            <Phone size={14} />
            0901 003 6051
          </a>
        </div>
      </div>
    </section>
  );
}
