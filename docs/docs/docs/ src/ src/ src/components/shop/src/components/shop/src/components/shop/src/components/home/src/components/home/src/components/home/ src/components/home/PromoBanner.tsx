
import React from 'react';

const PromoBanner: React.FC = () => {
  return (
    <section
      id="promo-banner"
      className="relative isolate min-h-[480px] overflow-hidden bg-[#292822] sm:min-h-[540px] lg:min-h-[620px]"
    >
      {/* Background Image */}
      <img
        src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=2000&q=90"
        alt="Elegant luxury contemporary living room"
        loading="lazy"
        className="absolute inset-0 -z-20 h-full w-full object-cover object-center"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-black/75 via-black/45 to-black/10" />

      {/* Content */}
      <div className="mx-auto flex min-h-[480px] max-w-7xl items-center px-6 py-20 sm:min-h-[540px] sm:px-10 lg:min-h-[620px] lg:px-16">
        <div className="max-w-2xl">
          <span className="mb-6 inline-block border border-white/50 px-4 py-2 text-[9px] font-medium uppercase tracking-[0.3em] text-white">
            The Art of Refined Living
          </span>

          <h2 className="font-serif text-4xl font-normal leading-[1.15] text-white sm:text-5xl lg:text-7xl">
            Make Room
            <span className="block italic text-[#D6C4AC]">
              for Beautiful.
            </span>
          </h2>

          <p className="mt-7 max-w-lg text-sm leading-8 text-white/80 sm:text-base">
            Transform everyday spaces with thoughtfully selected
            furniture and timeless designs that express your
            individuality.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-5">
            <a
              href="/shop"
              className="group inline-flex items-center gap-4 bg-white px-7 py-4 text-[10px] font-medium uppercase tracking-[0.2em] text-[#292822] transition-colors duration-300 hover:bg-[#D6C4AC]"
            >
              Explore Collection
              <span className="transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </a>

            <a
              href="/about"
              className="border-b border-white/60 pb-2 text-[10px] font-medium uppercase tracking-[0.2em] text-white transition-colors hover:border-[#D6C4AC] hover:text-[#D6C4AC]"
            >
              Our Philosophy
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Brand Label */}
      <div className="absolute bottom-6 right-6 hidden text-right sm:block">
        <p className="font-serif text-xl tracking-[0.15em] text-white/90">
          AURELLE
        </p>
        <p className="mt-1 text-[8px] uppercase tracking-[0.3em] text-white/60">
          Living, Beautifully.
        </p>
      </div>
    </section>
  );
};

export default PromoBanner;
