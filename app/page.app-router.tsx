import Hero from "@/components/Hero";
import SectionTitle from "@/components/SectionTitle";
import CategoryCard from "@/components/CategoryCard";
import ProductCard from "@/components/ProductCard";
import CTASection from "@/components/CTASection";
import { categories } from "@/lib/categories";
import { products } from "@/lib/products";

const highlights = [
  {
    title: "Antibacterial Protection",
    description: "Formulations crafted to support safer and cleaner spaces every day.",
  },
  {
    title: "Quality Assured",
    description: "Every batch follows strict quality controls for consistent performance.",
  },
  {
    title: "Safe for Family",
    description: "Carefully balanced ingredients suitable for regular household use.",
  },
  {
    title: "Affordable Pricing",
    description: "Premium cleaning and hygiene value at practical everyday price points.",
  },
];

export default function HomePage() {
  const featuredProducts = products.slice(0, 6);

  return (
    <>
      <Hero />

      <section className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <SectionTitle
          eyebrow="Categories"
          title="Product Categories"
          description="Explore our complete hygiene and housekeeping range designed for homes, institutions, and businesses."
        />

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((category) => (
            <CategoryCard key={category.id} category={category} />
          ))}
        </div>
      </section>

      <section className="border-y border-green-100 bg-green-50/40 py-16">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionTitle
            eyebrow="Featured"
            title="Top Picks From Neat & Fresh"
            description="High-demand products trusted for daily hygiene, cleanliness, and freshness."
          />

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <SectionTitle
          eyebrow="Why Neat & Fresh"
          title="Why Choose Us"
          description="A practical FMCG partner for dependable hygiene and housekeeping products."
        />

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {highlights.map((item) => (
            <article
              key={item.title}
              className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm"
            >
              <h3 className="text-xl font-semibold text-slate-900">{item.title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">{item.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
        <CTASection title="Become a Distributor" />
      </section>
    </>
  );
}
