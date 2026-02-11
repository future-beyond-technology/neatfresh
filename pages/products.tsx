import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import ProductCard from "@/components/ProductCard";
import SectionTitle from "@/components/SectionTitle";
import { categories } from "@/lib/categories";
import { products } from "@/lib/products";

const WA_NUMBER = "919000000000";

export default function ProductsPage() {
  const router = useRouter();
  const activeCategory =
    typeof router.query.category === "string" ? router.query.category : "all";
  const selectedItem = typeof router.query.item === "string" ? router.query.item : "";

  const filteredProducts =
    activeCategory === "all"
      ? products
      : products.filter((product) => {
          const category = categories.find((item) => item.name === product.category);
          return category?.slug === activeCategory;
        });

  const activeCategoryLabel =
    activeCategory === "all"
      ? "All Categories"
      : categories.find((item) => item.slug === activeCategory)?.name ?? "All Categories";

  const selectedProduct = products.find((product) => product.slug === selectedItem) ?? null;
  const selectedProductWhatsApp = selectedProduct
    ? `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(
        `Hi Neat & Fresh, I want to place an order for ${selectedProduct.name}. Please share details.`
      )}`
    : `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(
        "Hi Neat & Fresh, I am interested in your products. Please share your catalog and pricing."
      )}`;

  return (
    <>
      <Head>
        <title>Products | Neat & Fresh</title>
        <meta
          name="description"
          content="Browse all Neat & Fresh product categories and variations across hygiene and household essentials."
        />
      </Head>

      <section className="border-b border-[#DBEAFE] bg-white">
        <div className="mx-auto w-full max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <SectionTitle
            eyebrow="Catalog"
            title="All Products"
            description="Filter by category, explore every variation, and open quick detail views without leaving the catalog flow."
          />

          <div className="mt-6 flex flex-wrap items-center gap-3 text-sm">
            <span className="rounded-full border border-[#BFDBFE] bg-[#EFF6FF] px-4 py-2 font-semibold text-[#1E3A8A]">
              Viewing: {activeCategoryLabel}
            </span>
            <span className="rounded-full border border-slate-200 bg-white px-4 py-2 text-slate-600">
              {filteredProducts.length} Products Found
            </span>
          </div>

          <div className="mt-5 rounded-2xl border border-[#BFDBFE] bg-[#EFF6FF] p-4 sm:p-5">
            <p className="text-sm text-slate-700">
              For bulk order or business requirement, visit our{" "}
              <Link
                href="https://firoseenterprises.com"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-[#1E3A8A] underline decoration-[#60A5FA] underline-offset-4"
              >
                FIROSE ENTERPRISES
              </Link>
              .
            </p>
            <Link
              href="https://wa.me/919000000000?text=Hi%20Neat%20%26%20Fresh%2C%20I%20want%20to%20place%20a%20bulk%20order.%20Please%20share%20business%20pricing."
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-flex rounded-full bg-[#25D366] px-4 py-2 text-sm font-semibold text-white transition hover:bg-[#1fb759]"
            >
              WhatsApp for Bulk Order
            </Link>
          </div>

          <nav aria-label="Product categories" className="mt-6 flex flex-wrap gap-3">
            <Link
              href="/products"
              className={`rounded-full px-5 py-2 text-sm font-semibold transition ${
                activeCategory === "all"
                  ? "bg-[#1E3A8A] text-white"
                  : "border border-[#60A5FA] bg-white text-[#1E3A8A] hover:bg-[#EFF6FF]"
              }`}
            >
              All Categories
            </Link>

            {categories.map((category) => {
              const isActive = category.slug === activeCategory;

              return (
                <Link
                  key={category.id}
                  href={`/products?category=${category.slug}`}
                  className={`rounded-full px-5 py-2 text-sm font-semibold transition ${
                    isActive
                      ? "bg-[#1E3A8A] text-white"
                      : "border border-[#60A5FA] bg-white text-[#1E3A8A] hover:bg-[#EFF6FF]"
                  }`}
                >
                  {category.name}
                </Link>
              );
            })}
          </nav>
        </div>
      </section>

      <section id="product-detail" className="mx-auto w-full max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        {selectedProduct ? (
          <article className="animate-fade-up overflow-hidden rounded-3xl border border-[#BFDBFE] bg-white shadow-[0_18px_32px_rgba(30,58,138,0.12)]">
            <div className="grid gap-6 md:grid-cols-2">
              <div className="relative h-72 md:h-full">
                <Image
                  src={selectedProduct.image}
                  alt={selectedProduct.name}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="p-6 sm:p-8">
                <p className="inline-flex rounded-full border border-[#BFDBFE] bg-[#EFF6FF] px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-[#1E3A8A]">
                  Selected Product
                </p>
                <h2 className="mt-4 text-3xl font-semibold text-slate-900">{selectedProduct.name}</h2>
                <p className="mt-3 text-sm font-semibold uppercase tracking-[0.14em] text-[#1E3A8A]">
                  {selectedProduct.category}
                </p>
                <p className="mt-4 text-sm leading-7 text-slate-600">{selectedProduct.description}</p>
                <p className="mt-6 text-2xl font-semibold text-[#1E3A8A]">{selectedProduct.price}</p>

                <div className="mt-8 flex flex-wrap gap-3">
                  <Link
                    href="/products"
                    className="rounded-full bg-[#1E3A8A] px-5 py-2.5 text-sm font-semibold text-white hover:bg-[#1E40AF]"
                  >
                    Continue Browsing
                  </Link>
                  <Link
                    href={`/products?category=${categories.find((c) => c.name === selectedProduct.category)?.slug ?? "all"}`}
                    className="rounded-full border border-[#60A5FA] bg-white px-5 py-2.5 text-sm font-semibold text-[#1E3A8A] hover:bg-[#EFF6FF]"
                  >
                    View Similar Products
                  </Link>
                  <Link
                    href={selectedProductWhatsApp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full bg-[#25D366] px-5 py-2.5 text-sm font-semibold text-white hover:bg-[#1fb759]"
                  >
                    Order on WhatsApp
                  </Link>
                </div>
              </div>
            </div>
          </article>
        ) : (
          <div className="rounded-2xl border border-slate-200 bg-white p-5 text-sm text-slate-600">
            Click <span className="font-semibold text-[#1E3A8A]">View Details</span> on any product card
            to open its quick spotlight panel here.
          </div>
        )}

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              active={selectedProduct?.slug === product.slug}
            />
          ))}
        </div>

        {filteredProducts.length === 0 ? (
          <p className="mt-8 rounded-2xl border border-slate-200 bg-white p-6 text-sm text-slate-600">
            No products found in this category.
          </p>
        ) : null}
      </section>
    </>
  );
}
