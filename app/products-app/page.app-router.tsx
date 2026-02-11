import Link from "next/link";
import ProductCard from "@/components/ProductCard";
import SectionTitle from "@/components/SectionTitle";
import { categories } from "@/lib/categories";
import { products } from "@/lib/products";

const toSlug = (value: string) =>
  value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

type ProductsPageProps = {
  searchParams: Promise<{
    category?: string;
  }>;
};

export default async function ProductsPage({ searchParams }: ProductsPageProps) {
  const params = await searchParams;
  const activeCategory = params.category ?? "all";

  const filteredProducts =
    activeCategory === "all"
      ? products
      : products.filter((product) => toSlug(product.category) === activeCategory);

  return (
    <section className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <SectionTitle
        eyebrow="Catalog"
        title="Our Products"
        description="Browse all Neat & Fresh hygiene and lifestyle essentials. Use category filters to quickly find what you need."
      />

      <div className="mt-8 flex flex-wrap gap-3" role="tablist" aria-label="Product category filters">
        <Link
          href="/products"
          className={`rounded-full px-5 py-2 text-sm font-semibold transition ${
            activeCategory === "all"
              ? "bg-green-600 text-white"
              : "border border-green-200 bg-white text-green-700 hover:bg-green-50"
          }`}
        >
          All
        </Link>
        {categories.map((category) => {
          const isActive = activeCategory === category.slug;

          return (
            <Link
              key={category.id}
              href={`/products?category=${category.slug}`}
              className={`rounded-full px-5 py-2 text-sm font-semibold transition ${
                isActive
                  ? "bg-green-600 text-white"
                  : "border border-green-200 bg-white text-green-700 hover:bg-green-50"
              }`}
            >
              {category.name}
            </Link>
          );
        })}
      </div>

      {filteredProducts.length > 0 ? (
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <p className="mt-10 rounded-2xl border border-slate-200 bg-white p-6 text-slate-600">
          No products found for this category.
        </p>
      )}
    </section>
  );
}
