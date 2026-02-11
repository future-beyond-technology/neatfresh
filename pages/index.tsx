import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import CategoryCard from "@/components/CategoryCard";
import ProductCard from "@/components/ProductCard";
import SectionTitle from "@/components/SectionTitle";
import { categories } from "@/lib/categories";
import { products } from "@/lib/products";

const highlights = [
  { value: "34+", label: "Catalog Variations" },
  { value: "9", label: "Core Categories" },
  { value: "100%", label: "Household Focused" },
  { value: "24/7", label: "Business Inquiry" },
];

export default function HomePage() {
  const featuredProducts = products.slice(0, 6);
  const trendingProducts = products.slice(6, 9);

  return (
    <>
      <Head>
        <title>Neat & Fresh | FMCG Hygiene Product Catalog</title>
        <meta
          name="description"
          content="Explore Neat & Fresh hygiene and household FMCG products across phenyl, dishwash, fabric care, and cleaning categories."
        />
      </Head>

      <section className="relative overflow-hidden border-b border-[#DBEAFE] text-white">
        <div className="absolute inset-0 nf-gradient-primary" />
        <div className="nf-mesh-bg absolute inset-0 opacity-60" />
        <div className="absolute -left-24 top-20 h-56 w-56 rounded-full bg-white/10 blur-2xl" />
        <div className="absolute -right-16 bottom-10 h-52 w-52 rounded-full bg-[#93C5FD]/25 blur-2xl" />

        <div className="relative mx-auto grid w-full max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:px-8 lg:py-20">
          <div className="animate-fade-up">
            <p className="inline-flex rounded-full border border-white/25 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-blue-100">
              Advanced FMCG Catalog Experience
            </p>
            <h1 className="mt-5 text-4xl font-semibold leading-tight sm:text-5xl">
              Discover Hygiene Essentials with a Faster, Smarter Product Journey
            </h1>
            <p className="mt-5 max-w-xl text-base text-blue-100 sm:text-lg">
              Compare categories quickly, scan variants visually, and jump into detailed product
              views with seamless transitions.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/products"
                className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-[#1E3A8A] hover:bg-[#F3F4F6]"
              >
                Browse Full Catalog
              </Link>
              <Link
                href="/products?category=phenyl-products"
                className="rounded-full border border-white/35 bg-white/10 px-6 py-3 text-sm font-semibold text-white hover:bg-white/20"
              >
                Explore Phenyl Products
              </Link>
            </div>
          </div>

          <div className="space-y-4">
            {trendingProducts.map((product) => (
              <article
                key={product.id}
                className="group flex items-center gap-4 rounded-2xl border border-white/20 bg-white/10 p-3 backdrop-blur-md transition hover:bg-white/15"
              >
                <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-xl">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover transition duration-500 group-hover:scale-110"
                  />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.14em] text-blue-100">Trending SKU</p>
                  <h2 className="mt-1 text-sm font-semibold text-white sm:text-base">{product.name}</h2>
                  <p className="mt-1 text-sm text-blue-100">{product.price}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto -mt-8 w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-4 rounded-3xl border border-[#BFDBFE] bg-white p-4 shadow-lg sm:grid-cols-2 sm:p-6 lg:grid-cols-4">
          {highlights.map((item) => (
            <article key={item.label} className="rounded-2xl bg-[#F8FAFC] p-4">
              <p className="text-2xl font-semibold text-[#1E3A8A]">{item.value}</p>
              <p className="mt-1 text-sm text-slate-600">{item.label}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <SectionTitle
          eyebrow="Categories"
          title="Shop by Product Category"
          description="Jump into specialized groups and explore complete variations with one click."
        />

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((category) => (
            <CategoryCard key={category.id} category={category} />
          ))}
        </div>
      </section>

      <section className="border-y border-[#DBEAFE] bg-white py-16">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionTitle
            eyebrow="Featured"
            title="Viewer Attention Picks"
            description="Designed to pull users deeper into the catalog with high-clarity product cards and direct detail CTAs."
          />

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          <div className="mt-10 rounded-3xl border border-[#BFDBFE] bg-[#EFF6FF] p-6 sm:p-8">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#1E3A8A]">
                  Bulk Order and Business Requirement
                </p>
                <h3 className="mt-2 text-2xl font-semibold text-slate-900">
                  For bulk order or business requirement, visit our FIROSE ENTERPRISES.
                </h3>
              </div>
              <div className="flex flex-wrap gap-3">
                <Link
                  href="https://firoseenterprises.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex w-fit items-center gap-2 rounded-full bg-[#1E3A8A] px-6 py-3 text-sm font-semibold text-white hover:bg-[#1E40AF]"
                >
                  Visit FIROSE
                  <span aria-hidden="true">↗</span>
                </Link>
                <Link
                  href="https://wa.me/919000000000?text=Hi%20Neat%20%26%20Fresh%2C%20I%20want%20to%20place%20a%20bulk%20order.%20Please%20share%20business%20pricing."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex w-fit items-center gap-2 rounded-full bg-[#25D366] px-6 py-3 text-sm font-semibold text-white hover:bg-[#1fb759]"
                >
                  WhatsApp Direct Order
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
