import { useScrollReveal } from '@/hooks/useScrollReveal';

interface PortfolioItem {
  image: string;
  tag: string;
  title: string;
  description: string;
  span?: 'large';
}

const portfolioItems: PortfolioItem[] = [
  {
    image:
      'https://z-cdn-media.chatglm.cn/files/615605be-8dac-4f1b-aae2-2dd4c9af9e5c.jpeg?auth_key=1875142973-fbddbd269bbc4b9a8ecd0c02ee26f8fa-0-1cade6dbce0e60d81381e4dd38b65e6c',
    tag: 'Solar & Inverter',
    title: 'Residential Rooftop Solar System',
    description: 'Full solar + satellite installation — Benin City',
    span: 'large',
  },
  {
    image:
      'https://z-cdn-media.chatglm.cn/files/cfc4d8ea-9093-4c6d-bbc7-9a0164ebad02.jpeg?auth_key=1875142973-5e24fa508a844af3b4a1540f54944149-0-3796568ef9bd9f2c114ab6d54730b406',
    tag: 'Surveillance',
    title: 'Multi-Channel CCTV System',
    description: 'Commercial — Live monitoring setup',
  },
  {
    image:
      'https://z-cdn-media.chatglm.cn/files/a3589061-f13a-42a4-ba5e-49794347bbf6.jpeg?auth_key=1875142973-83d736416b4443c1bc66b4ff3494bbd5-0-9d65dc951c3ecfd4c4e953af9fb750d4',
    tag: 'Solar & Inverter',
    title: 'Dual Battery + Inverter Setup',
    description: 'Residential — Clean power storage system',
  },
  {
    image:
      'https://z-cdn-media.chatglm.cn/files/fc8f7b7b-459d-4080-afef-700ceb909374.jpeg?auth_key=1875142973-0f63b92cb1ae4119b864cb4f37b49934-0-913feb39d688346a33f2ee7d7471b24e',
    tag: 'Electric Fencing & Surveillance',
    title: 'Perimeter Security + Camera Installation',
    description: 'Residential — Combined fencing & CCTV setup',
    span: 'large',
  },
];

function PortfolioCard({ item, delay }: { item: PortfolioItem; delay: number }) {
  const { ref, isRevealed } = useScrollReveal<HTMLDivElement>();

  return (
    <div
      ref={ref}
      className={`reveal portfolio-item rounded-xl h-[320px] md:h-[420px] ${
        item.span === 'large' ? 'lg:col-span-2' : ''
      } ${isRevealed ? 'revealed' : ''}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <img
        src={item.image}
        alt={item.title}
        className="w-full h-full object-cover rounded-xl"
        loading="lazy"
      />
      <div className="portfolio-overlay rounded-xl">
        <span className="portfolio-tag text-[10px] font-medium tracking-[0.15em] uppercase text-zinc-400 mb-1.5 block transition-colors">
          {item.tag}
        </span>
        <h3 className="text-base font-medium text-white tracking-tight">{item.title}</h3>
        <p className="text-xs text-zinc-500 font-light mt-1">{item.description}</p>
      </div>
    </div>
  );
}

export function Portfolio() {
  const { ref: titleRef, isRevealed: titleRevealed } = useScrollReveal<HTMLDivElement>();
  const { ref: descRef, isRevealed: descRevealed } = useScrollReveal<HTMLDivElement>();

  return (
    <section id="portfolio" className="py-28 md:py-40 px-6 border-t border-white/[0.03]" aria-label="Our work">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16 md:mb-20">
          <div className="max-w-xl">
            <span
              className={`reveal text-zinc-600 text-xs font-medium tracking-[0.2em] uppercase mb-4 block ${
                titleRevealed ? 'revealed' : ''
              }`}
              ref={titleRef}
            >
              Our Work
            </span>
            <h2
              className={`reveal text-3xl md:text-5xl font-semibold tracking-tight ${
                descRevealed ? 'revealed' : ''
              }`}
              ref={descRef}
              style={{ transitionDelay: '80ms' }}
            >
              Real installations
              <br />
              across Nigeria
            </h2>
          </div>
          <p
            className={`reveal text-zinc-500 font-light leading-relaxed max-w-md text-sm ${
              descRevealed ? 'revealed' : ''
            }`}
            style={{ transitionDelay: '160ms' }}
          >
            A selection of completed projects — from residential solar setups to commercial security
            systems.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">
          {portfolioItems.map((item, index) => (
            <PortfolioCard key={item.title} item={item} delay={index * 100} />
          ))}
        </div>
      </div>
    </section>
  );
}
