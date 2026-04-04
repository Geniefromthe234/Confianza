import { useState } from 'react';
import emailjs from '@emailjs/browser';
import { ArrowRight, ExternalLink, ChevronDown } from 'lucide-react';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const services = [
  { value: 'solar', label: 'Solar & Inverter Installation' },
  { value: 'cctv', label: 'Surveillance Cameras' },
  { value: 'fencing', label: 'Electric Fencing' },
  { value: 'starlink', label: 'Starlink Installation' },
  { value: 'electrical', label: 'General Electrical' },
  { value: 'grounding', label: 'Grounding & Lightning Protection' },
  { value: 'other', label: 'Other' },
];

interface FormData {
  name: string;
  phone: string;
  email: string;
  service: string;
  message: string;
}

interface ContactProps {
  onShowToast: (message: string) => void;
}

export function Contact({ onShowToast }: ContactProps) {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    phone: '',
    email: '',
    service: '',
    message: '',
  });

  const { ref: formRef, isRevealed: formRevealed } = useScrollReveal<HTMLDivElement>();
  const { ref: infoRef, isRevealed: infoRevealed } = useScrollReveal<HTMLDivElement>();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.phone || !formData.service || !formData.message) return;

    emailjs.send(
      'service_rm7fjtk',
      'template_qh3ygg2',
      {
        name: formData.name,
        phone: formData.phone,
        email: formData.email,
        service: formData.service,
        message: formData.message,
        title: formData.service,
      },
      'k5-JVAMISBV7k0r8K'
    )
    .then(() => {
      onShowToast("Message sent. We'll be in touch shortly.");
      setFormData({ name: '', phone: '', email: '', service: '', message: '' });
    })
    .catch((error) => {
      console.error('EmailJS error:', error);
      onShowToast("Something went wrong. Please try again.");
    });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <section id="contact" className="py-28 md:py-40 px-6 border-t border-white/[0.03]" aria-label="Contact form">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-16 lg:gap-24">
          {/* Form */}
          <div
            ref={formRef}
            className={`reveal lg:col-span-3 ${formRevealed ? 'revealed' : ''}`}
          >
            <span className="text-zinc-600 text-xs font-medium tracking-[0.2em] uppercase mb-4 block">
              Contact
            </span>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-10">Get in touch</h2>

            <form onSubmit={handleSubmit} className="space-y-5" noValidate>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label
                    htmlFor="form-name"
                    className="block text-[10px] font-medium text-zinc-600 tracking-[0.15em] uppercase mb-2"
                  >
                    Full Name
                  </label>
                  <input
                    id="form-name"
                    name="name"
                    type="text"
                    required
                    placeholder="Your name"
                    value={formData.name}
                    onChange={handleChange}
                    className="input-field w-full bg-transparent border border-white/[0.06] rounded-lg px-4 py-3 text-sm text-white placeholder-zinc-700 font-light"
                  />
                </div>
                <div>
                  <label
                    htmlFor="form-phone"
                    className="block text-[10px] font-medium text-zinc-600 tracking-[0.15em] uppercase mb-2"
                  >
                    Phone
                  </label>
                  <input
                    id="form-phone"
                    name="phone"
                    type="tel"
                    required
                    placeholder="0901 234 5678"
                    value={formData.phone}
                    onChange={handleChange}
                    className="input-field w-full bg-transparent border border-white/[0.06] rounded-lg px-4 py-3 text-sm text-white placeholder-zinc-700 font-light"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="form-email"
                  className="block text-[10px] font-medium text-zinc-600 tracking-[0.15em] uppercase mb-2"
                >
                  Email
                </label>
                <input
                  id="form-email"
                  name="email"
                  type="email"
                  placeholder="you@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  className="input-field w-full bg-transparent border border-white/[0.06] rounded-lg px-4 py-3 text-sm text-white placeholder-zinc-700 font-light"
                />
              </div>

              <div>
                <label
                  htmlFor="form-service"
                  className="block text-[10px] font-medium text-zinc-600 tracking-[0.15em] uppercase mb-2"
                >
                  Service
                </label>
                <div className="select-wrapper">
                  <select
                    id="form-service"
                    name="service"
                    required
                    value={formData.service}
                    onChange={handleChange}
                    className="input-field w-full bg-transparent border border-white/[0.06] rounded-lg px-4 py-3 text-sm text-zinc-500 font-light cursor-pointer"
                  >
                    <option value="" disabled>
                      Select a service
                    </option>
                    {services.map((service) => (
                      <option
                        key={service.value}
                        value={service.value}
                        className="bg-[#18181b] text-zinc-400"
                      >
                        {service.label}
                      </option>
                    ))}
                  </select>
                  <ChevronDown size={16} className="select-chevron" />
                </div>
              </div>

              <div>
                <label
                  htmlFor="form-message"
                  className="block text-[10px] font-medium text-zinc-600 tracking-[0.15em] uppercase mb-2"
                >
                  Message
                </label>
                <textarea
                  id="form-message"
                  name="message"
                  rows={4}
                  required
                  placeholder="Tell us about your project..."
                  value={formData.message}
                  onChange={handleChange}
                  className="input-field w-full bg-transparent border border-white/[0.06] rounded-lg px-4 py-3 text-sm text-white placeholder-zinc-700 font-light resize-none"
                />
              </div>

              <button
                type="submit"
                className="btn-fill w-full text-[#09090b] text-sm font-semibold tracking-wider uppercase px-8 py-4 rounded-lg inline-flex items-center justify-center gap-2 mt-2"
              >
                Send Message
                <ArrowRight size={15} />
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div
            ref={infoRef}
            className={`reveal lg:col-span-2 lg:pt-[52px] ${infoRevealed ? 'revealed' : ''}`}
            style={{ transitionDelay: '120ms' }}
          >
            <div className="space-y-10">
              <div>
                <div className="text-[10px] font-medium text-zinc-700 tracking-[0.15em] uppercase mb-2">
                  Phone
                </div>
                <a
                  href="tel:09010036051"
                  className="text-white text-sm font-medium hover:text-brand-400 transition-colors"
                >
                  0901 003 6051
                </a>
              </div>

              <div>
                <div className="text-[10px] font-medium text-zinc-700 tracking-[0.15em] uppercase mb-2">
                  WhatsApp
                </div>
                <a
                  href="https://wa.me/2349010036051"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white text-sm font-medium hover:text-brand-400 transition-colors inline-flex items-center gap-1.5"
                >
                  Chat with us
                  <ExternalLink size={12} className="text-zinc-600" />
                </a>
              </div>

              <div>
                <div className="text-[10px] font-medium text-zinc-700 tracking-[0.15em] uppercase mb-2">
                  Social
                </div>
                <a
                  href="https://instagram.com/Confianza_tech"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white text-sm font-medium hover:text-brand-400 transition-colors inline-flex items-center gap-1.5"
                >
                  @Confianza_tech
                  <ExternalLink size={12} className="text-zinc-600" />
                </a>
              </div>

              <div>
                <div className="text-[10px] font-medium text-zinc-700 tracking-[0.15em] uppercase mb-2">
                  Links
                </div>
                <a
                  href="https://linktr.ee/confianza_tech"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white text-sm font-medium hover:text-brand-400 transition-colors inline-flex items-center gap-1.5"
                >
                  linktr.ee/confianza_tech
                  <ExternalLink size={12} className="text-zinc-600" />
                </a>
              </div>

              <div>
                <div className="text-[10px] font-medium text-zinc-700 tracking-[0.15em] uppercase mb-2">
                  Office
                </div>
                <p className="text-zinc-400 text-sm font-light leading-relaxed">
                  Igun Street off Akpakpava Road,
                  <br />
                  Benin City, Edo State, Nigeria
                </p>
              </div>

              <div>
                <div className="text-[10px] font-medium text-zinc-700 tracking-[0.15em] uppercase mb-2">
                  Hours
                </div>
                <p className="text-zinc-400 text-sm font-light">Mon – Sat: 8AM – 6PM</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}