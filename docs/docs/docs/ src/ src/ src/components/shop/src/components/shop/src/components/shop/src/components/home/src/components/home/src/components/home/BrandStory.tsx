import React from 'react';

const BrandStory: React.FC = () => {
  return (
    <section
      id="brand-story"
      className="overflow-hidden bg-[#F1EFEA] px-5 py-20 sm:px-8 lg:px-16 lg:py-32"
    >
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-14 lg:grid-cols-2 lg:gap-24">

        {/* Brand Imagery */}
        <div className="relative">
          <div className="aspect-[4/5] overflow-hidden bg-[#DEDAD2]">
            <img
              src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=1200&q=90"
              alt="Elegant contemporary luxury living room"
              loading="lazy"
              className="h-full w-full object-cover transition-transform duration-1000 hover:scale-105"
            />
          </div>

          <div className="absolute -bottom-8 -right-3 hidden w-2/5 border-8 border-[#F1EFEA] sm:block lg:-right-10">
            <img
              src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=700&q=85"
              alt="Thoughtfully designed luxury interior"
              loading="lazy"
              className="aspect-square h-full w-full object-cover"
            />
          </div>

          <div className="absolute left-5 top-5 border border-white/70 px-4 py-3 text-[9px] uppercase tracking-[0.25em] text-white">
            The Art of Living
          </div>
        </div>

        {/* Brand Content */}
        <div className="lg:pl-4">
          <span className="mb-6 block text-[10px] font-medium uppercase tracking-[0.35em] text-[#9B8065]">
            The AURELLE Philosophy
          </span>

          <h2 className="font-serif text-4xl font-normal leading-[1.15] text-[#292822] sm:text-5xl lg:text-6xl">
            A Home Is More
            <span className="block italic text-[#9B8065]">
              Than a Space.
            </span>
            It Is a Feeling.
          </h2>

          <div className="my-8 h-px w-16 bg-[#9B8065]" />

          <p className="max-w-xl text-sm leading-8 text-[#706C64]">
            At AURELLE LIVING, we believe that exceptional interiors
            begin with thoughtful choices. Every silhouette, texture
            and detail contributes to a space that feels personal,
            harmonious and timeless.
          </p>

          <p className="mt-5 max-w-xl text-sm leading-8 text-[#706C64]">
            Our design philosophy celebrates understated elegance,
            considered proportions and the beauty of materials.
            Discover furniture that makes everyday living feel
            extraordinary.
          </p>

          <a
            href="/about"
            className="group mt-10 inline-flex items-center gap-4 border-b border-[#9B8065] pb-3 text-xs font-medium uppercase tracking-[0.2em] text-[#292822] transition-colors hover:text-[#9B8065]"
          >
            Discover Our Story
            <span className="transition-transform duration-300 group-hover:translate-x-2">
              →
            </span>
          </a>

          {/* Brand Signature */}
          <div className="mt-16 border-t border-[#D8D3CA] pt-8">
            <p className="font-serif text-3xl italic text-[#9B8065]">
              AURELLE
            </p>
            <p className="mt-2 text-[9px] uppercase tracking-[0.35em] text-[#89847A]">
              Living, Beautifully.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandStory;

