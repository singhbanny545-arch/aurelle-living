
import React from 'react';
import { useCart } from '../cart/CartContext';

interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  originalPrice?: number;
  image: string;
  badge?: string;
}

const featuredProducts: Product[] = [
  {
    id: 'aurelle-sofa-01',
    name: 'The Serene Cloud Sofa',
    category: 'Living Room',
    price: 2499,
    originalPrice: 2899,
    image:
      'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=900&q=85',
    badge: 'BESTSELLER',
  },
  {
    id: 'aurelle-chair-01',
    name: 'Monarch Accent Chair',
    category: 'Lounge Collection',
    price: 899,
    image:
      'https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=900&q=85',
    badge: 'NEW ARRIVAL',
  },
  {
    id: 'aurelle-table-01',
    name: 'The Solstice Coffee Table',
    category: 'Tables & Surfaces',
    price: 1299,
    image:
      'https://images.unsplash.com/photo-1499933374294-4584851497cc?w=900&q=85',
  },
  {
    id: 'aurelle-lamp-01',
    name: 'Aura Sculptural Lamp',
    category: 'Lighting',
    price: 449,
    image:
      'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=900&q=85',
  },
];

const FeaturedProducts: React.FC = () => {
  const { addToCart } = useCart();

  const handleAddToCart = (product: Product) => {
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      category: product.category,
    });
  };

  return (
    <section
      id="featured-products"
      className="bg-[#F8F7F4] px-5 py-20 sm:px-8 lg:px-16 lg:py-28"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <span className="mb-4 block text-xs font-medium uppercase tracking-[0.3em] text-[#9B8065]">
              Curated for Exceptional Living
            </span>

            <h2 className="font-serif text-4xl font-normal leading-tight text-[#25231F] sm:text-5xl lg:text-6xl">
              Objects of
              <span className="block italic text-[#9B8065]">
                Desire.
              </span>
            </h2>

            <p className="mt-5 max-w-md text-sm leading-7 text-[#77736D]">
              Discover thoughtfully crafted furniture pieces that
              bring timeless character and effortless elegance into
              your home.
            </p>
          </div>

          <a
            href="/shop"
            className="group inline-flex w-fit items-center gap-3 border-b border-[#9B8065] pb-2 text-xs font-medium uppercase tracking-[0.18em] text-[#39352F] transition-colors hover:text-[#9B8065]"
          >
            Explore Collection
            <span className="transition-transform group-hover:translate-x-1">
              →
            </span>
          </a>
        </div>

        <div className="grid grid-cols-1 gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
          {featuredProducts.map((product) => (
            <article key={product.id} className="group">
              <div className="relative aspect-[4/5] overflow-hidden bg-[#EAE7E1]">
                <img
                  src={product.image}
                  alt={product.name}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />

                {product.badge && (
                  <span className="absolute left-4 top-4 bg-white/90 px-3 py-2 text-[9px] font-medium tracking-[0.18em] text-[#39352F]">
                    {product.badge}
                  </span>
                )}

                <button
                  type="button"
                  onClick={() => handleAddToCart(product)}
                  className="absolute bottom-4 left-4 right-4 translate-y-3 bg-[#292822] px-5 py-4 text-xs font-medium uppercase tracking-[0.15em] text-white opacity-0 transition-all duration-300 hover:bg-[#9B8065] group-hover:translate-y-0 group-hover:opacity-100 focus:translate-y-0 focus:opacity-100"
                >
                  Add to Cart
                </button>
              </div>

              <div className="flex items-start justify-between gap-3 pt-5">
                <div>
                  <p className="mb-2 text-[10px] uppercase tracking-[0.18em] text-[#9B8065]">
                    {product.category}
                  </p>

                  <h3 className="font-serif text-lg text-[#292822]">
                    {product.name}
                  </h3>
                </div>

                <div className="shrink-0 text-right">
                  <p className="text-sm font-medium text-[#292822]">
                    ${product.price.toLocaleString('en-US')}
                  </p>

                  {product.originalPrice && (
                    <p className="mt-1 text-xs text-[#A7A29A] line-through">
                      ${product.originalPrice.toLocaleString('en-US')}
                    </p>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
