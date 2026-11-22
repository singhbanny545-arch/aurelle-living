import React from "react";

export interface ProductFilterItem {
  id: string;
  category: string;
  price?: number;
}

export type ProductSortOption =
  | "featured"
  | "name-asc"
  | "name-desc"
  | "price-low"
  | "price-high";

interface ProductFiltersProps {
  products: ProductFilterItem[];
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
  sortBy: ProductSortOption;
  onSortChange: (sort: ProductSortOption) => void;
  onClear: () => void;
  categories?: string[];
}

export default function ProductFilters({
  products,
  selectedCategory,
  onCategoryChange,
  sortBy,
  onSortChange,
  onClear,
  categories,
}: ProductFiltersProps) {
  const availableCategories = categories ?? Array.from(
    new Set(products.map((product) => product.category).filter(Boolean))
  );

  const hasActiveFilters =
    selectedCategory !== "all" || sortBy !== "featured";

  return (
    <section
      aria-label="Product filters"
      className="w-full border-y border-neutral-200 py-5"
    >
      <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
        <div className="flex flex-col gap-2">
          <label
            htmlFor="product-category"
            className="text-[10px] uppercase tracking-[0.2em] text-neutral-500"
          >
            Category
          </label>

          <select
            id="product-category"
            value={selectedCategory}
            onChange={(event) => onCategoryChange(event.target.value)}
            className="min-w-48 border border-neutral-300 bg-white px-4 py-3 text-sm text-neutral-800 outline-none focus:border-neutral-900"
          >
            <option value="all">All categories</option>

            {availableCategories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>

        <div className="flex flex-col gap-2">
          <label
            htmlFor="product-sort"
            className="text-[10px] uppercase tracking-[0.2em] text-neutral-500"
          >
            Sort by
          </label>

          <select
            id="product-sort"
            value={sortBy}
            onChange={(event) =>
              onSortChange(event.target.value as ProductSortOption)
            }
            className="min-w-48 border border-neutral-300 bg-white px-4 py-3 text-sm text-neutral-800 outline-none focus:border-neutral-900"
          >
            <option value="featured">Featured</option>
            <option value="name-asc">Name: A to Z</option>
            <option value="name-desc">Name: Z to A</option>
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
          </select>
        </div>

        <button
          type="button"
          onClick={onClear}
          disabled={!hasActiveFilters}
          className="self-start border-b border-neutral-800 pb-1 text-xs uppercase tracking-[0.15em] text-neutral-800 transition-opacity hover:opacity-60 disabled:cursor-not-allowed disabled:opacity-40 md:self-end"
        >
          Clear filters
        </button>
      </div>

      <p className="mt-4 text-xs text-neutral-500" aria-live="polite">
        {products.length} products available
      </p>
    </section>
  );
}

