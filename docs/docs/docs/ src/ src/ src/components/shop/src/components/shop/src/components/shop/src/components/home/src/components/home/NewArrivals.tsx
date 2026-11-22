import React from 'react';
import { useCart } from '../cart/CartContext';

interface NewArrivalProduct {
  id: string;
  name: string;
  category: string;
  price: number;
  image: string;
  label: string;
}

const newArrivals: NewArrivalProduct[] = [
  {
    id: 'aurelle-new-001',
    name: 'Luna Bouclé Lounge Chair',
    category: 'Lounge Furniture',
    price: 1199,
    image:
      'https://images.unsplash.com/photo-1598300056393-4aac492f4344?w=900&q=85',
    label: 'JUST ARRIVED',
  },
  {
    id: 'aurelle-new-002',
    name: 'Forma Minimalist Console',
    category: 'Living Room',
    price: 1599,
    image:
      'https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?w=900&q=85',
    label: 'NEW DESIGN',
  },
  {
    id: 'aurelle-new-003',
    name: 'Atelier Sculptural Side Table',
    category: 'Tables',
    price: 749,
    image:
      'https://images.unsplash.com/photo-1499933374294-4584851497cc?w=900&q=85',
    label: 'JUST ARRIVED',
  },
];

const NewArrivals: React.FC = () => {
  const { addToCart } = useCart();

  return (
    <section
      id="new-arrivals"
      className="bg-white px-5 py-20 sm:px-8 lg:px-16 lg:py-28"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <div>
            <span className="mb-4 block text-xs font-medium uppercase tracking-[0.3em] text-[#9B8065]">
              Fresh Perspectives
            </span>

            <h2 className="font-serif text-4xl font-normal leading-tight text-[#292822] sm:text-5xl lg:text-6xl">
              Newly
              <span className="block italic text-[#9B8065]">
                Discovered.
              </span>
            </h2>

            <p className="mt-5 max-w-lg text-sm leading-7 text-[#77736D]">
              Introducing the latest additions to our collection,
              where considered design meets exceptional craftsmanship.
            </p>
          </div>

          <a
            href="/shop?sort=newest"
            className="group inline-flex w-fit items-center gap-3 border-b border-[#9B8065] pb-2 text-xs font-medium uppercase tracking-[0.18em] text-[#39352F] transition-colors hover:text-[#9B8065]"
          >
            Discover What's New
            <span className="transition-transform group-hover:translate-x-1">
              →
            </span>
          </a>
        </div>

        <div className="grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {newArrivals.map((product, index) => (
            <article
              key={product.id}
              className="group"
            >
              <div className="relative aspect-[4/5] overflow-hidden bg-[#F0EEE9]">
                <img
                  src={product.image}
                  alt={product.name}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />

                <span className="absolute left-5 top-5 bg-white/90 px-3 py-2 text-[9px] font-medium tracking-[0.18em] text-[#39352F]">
                  {product.label}
                </span>

                <span className="absolute right-5 top-5 font-serif text-sm text-white drop-shadow-md">
                  0{index + 1}
                </span>

                <button
                  type="button"
                  onClick={() =>
                    addToCart({
                      id: product.id,
                      name: product.name,
                      price: product.price,
                      image: product.image,
                      category: product.category,
                    })
                  }
                  className="absolute bottom-5 left-5 right-5 translate-y-3 bg-[#292822] px-5 py-4 text-xs font-medium uppercase tracking-[0.16em] text-white opacity-0 transition-all duration-300 hover:bg-[#9B8065] group-hover:translate-y-0 group-hover:opacity-100 focus:translate-y-0 focus:opacity-100"
                >
                  Add to Cart
                </button>
              </div>

              <div className="flex items-start justify-between gap-4 pt-5">
                <div>
                  <p className="mb-2 text-[10px] uppercase tracking-[0.18em] text-[#9B8065]">
                    {product.category}
                  </p>

                  <h3 className="font-serif text-xl text-[#292822]">
                    {product.name}
                  </h3>
                </div>

                <p className="shrink-0 pt-1 text-sm font-medium text-[#292822]">
                  ${product.price.toLocaleString('en-US')}
                </p>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-14 flex justify-center">
          <a
            href="/shop?sort=newest"
            className="border border-[#292822] px-9 py-4 text-xs font-medium uppercase tracking-[0.2em] text-[#292822] transition-colors duration-300 hover:bg-[#292822] hover:text-white"
          >
            View All New Arrivals
          </a>
        </div>
      </div>
    </section>
  );
};

export default NewArrivals;

