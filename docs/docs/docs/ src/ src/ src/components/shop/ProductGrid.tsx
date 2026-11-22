
import React from "react";

export interface ShopProduct {
  id: string;
  name: string;
  category: string;
  image: string;
  imageAlt: string;
  price?: string;
  href?: string;
}

interface ProductGridProps {
  products?: ShopProduct[];
  heading?: string;
  description?: string;
  columns?: 2 | 3 | 4;
}

export default function ProductGrid({
  products = [],
  heading = "Our Furniture Collection",
  description = "Explore the available furniture collection.",
  columns = 3,
}: ProductGridProps) {
  const gridColumns = {
    2: "sm:grid-cols-2",
    3: "sm:grid-cols-2 lg:grid-cols-3",
    4: "sm:grid-cols-2 lg:grid-cols-4",
  };

  return (
    <section
      aria-labelledby="product-grid-heading"
      className="w-full bg-[#f8f7f4] px-5 py-16 md:px-10 lg:px-16"
    >
      <div className="mx-auto max-w-7xl">
        <header className="mb-10">
          <span className="text-xs uppercase tracking-[0.25em] text-neutral-500">
            AURELLE LIVING
          </span>

          <h2
            id="product-grid-heading"
            className="mt-4 font-serif text-3xl font-light text-neutral-900 md:text-5xl"
          >
            {heading}
          </h2>

          <p className="mt-4 max-w-xl text-sm leading-7 text-neutral-600">
            {description}
          </p>
        </header>

        {products.length > 0 ? (
          <div className={`grid grid-cols-1 ${gridColumns[columns]} gap-x-7 gap-y-12`}>
            {products.map((product) => (
              <article key={product.id} className="group min-w-0">
                <a
                  href={product.href || "#"}
                  aria-label={`View ${product.name}`}
                  className="block overflow-hidden bg-[#eeece6] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-neutral-900"
                >
                  <div className="aspect-[4/5] overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.imageAlt}
                      loading="lazy"
                      decoding="async"
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                </a>

                <div className="pt-5">
                  <p className="text-[10px] uppercase tracking-[0.2em] text-neutral-500">
                    {product.category}
                  </p>

                  <h3 className="mt-2 font-serif text-xl text-neutral-900">
                    {product.name}
                  </h3>

                  {product.price && (
                    <p className="mt-2 text-sm text-neutral-700">
                      {product.price}
                    </p>
                  )}
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div
            role="status"
            className="border-y border-neutral-200 py-14 text-center"
          >
            <h3 className="font-serif text-2xl text-neutral-800">
              Collection coming soon
            </h3>

            <p className="mt-3 text-sm text-neutral-500">
              Product details will appear here when the verified catalogue is available.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
