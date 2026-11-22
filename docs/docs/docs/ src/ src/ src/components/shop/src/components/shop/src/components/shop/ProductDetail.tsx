import React, { useState } from "react";

export interface ProductDetailData {
  id: string;
  name: string;
  category: string;
  description: string;
  images: {
    src: string;
    alt: string;
  }[];
  price?: string;
  availability?: string;
  specifications?: {
    label: string;
    value: string;
  }[];
}

interface ProductDetailProps {
  product: ProductDetailData;
  onAddToCart?: (product: ProductDetailData) => void;
}

export default function ProductDetail({
  product,
  onAddToCart,
}: ProductDetailProps) {
  const [activeImage, setActiveImage] = useState(0);

  const hasImages = product.images.length > 0;
  const currentImage = product.images[activeImage];

  return (
    <main className="w-full bg-[#f8f7f4] px-5 py-12 md:px-10 md:py-20 lg:px-16">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-16">
        <section aria-label="Product images">
          {hasImages ? (
            <>
              <div className="aspect-[4/5] overflow-hidden bg-[#eeece6]">
                <img
                  src={currentImage.src}
                  alt={currentImage.alt}
                  className="h-full w-full object-cover"
                  decoding="async"
                />
              </div>

              {product.images.length > 1 && (
                <div className="mt-4 grid grid-cols-4 gap-3">
                  {product.images.map((image, index) => (
                    <button
                      key={`${image.src}-${index}`}
                      type="button"
                      onClick={() => setActiveImage(index)}
                      aria-label={`View product image ${index + 1}`}
                      aria-pressed={activeImage === index}
                      className={`aspect-square overflow-hidden border ${
                        activeImage === index
                          ? "border-neutral-900"
                          : "border-transparent"
                      }`}
                    >
                      <img
                        src={image.src}
                        alt={image.alt}
                        loading="lazy"
                        className="h-full w-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              )}
            </>
          ) : (
            <div className="flex aspect-[4/5] items-center justify-center bg-[#eeece6] text-sm text-neutral-500">
              Product image unavailable
            </div>
          )}
        </section>

        <section className="flex flex-col justify-center">
          <p className="text-xs uppercase tracking-[0.25em] text-neutral-500">
            {product.category}
          </p>

          <h1 className="mt-5 font-serif text-4xl font-light leading-tight text-neutral-900 md:text-5xl">
            {product.name}
          </h1>

          {product.price && (
            <p className="mt-6 text-lg text-neutral-800">
              {product.price}
            </p>
          )}

          <div className="my-8 h-px w-full bg-neutral-200" />

          <p className="max-w-xl text-sm leading-8 text-neutral-600">
            {product.description}
          </p>

          {product.availability && (
            <p className="mt-6 text-xs uppercase tracking-[0.15em] text-neutral-500">
              {product.availability}
            </p>
          )}

          {onAddToCart && (
            <button
              type="button"
              onClick={() => onAddToCart(product)}
              className="mt-8 w-full bg-neutral-900 px-8 py-4 text-xs uppercase tracking-[0.2em] text-white transition-colors duration-300 hover:bg-neutral-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-neutral-900 sm:w-fit"
            >
              Add to cart
            </button>
          )}

          {product.specifications &&
            product.specifications.length > 0 && (
              <div className="mt-12">
                <h2 className="font-serif text-2xl text-neutral-900">
                  Product Details
                </h2>

                <dl className="mt-5">
                  {product.specifications.map((item, index) => (
                    <div
                      key={`${item.label}-${index}`}
                      className="grid grid-cols-2 gap-4 border-b border-neutral-200 py-4 text-sm"
                    >
                      <dt className="text-neutral-500">{item.label}</dt>
                      <dd className="text-neutral-800">{item.value}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            )}
        </section>
      </div>
    </main>
  );
}

