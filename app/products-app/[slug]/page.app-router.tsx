import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { products } from "@/lib/products";

type ProductDetailPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export default async function ProductDetailPage({ params }: ProductDetailPageProps) {
  const { slug } = await params;
  const product = products.find((item) => item.slug === slug);

  if (!product) {
    notFound();
  }

  return (
    <section className="mx-auto w-full max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
      <Link
        href="/products"
        className="inline-flex rounded-full border border-green-200 px-4 py-2 text-sm font-semibold text-green-700 transition hover:bg-green-50"
      >
        Back to Products
      </Link>

      <article className="mt-8 grid gap-8 overflow-hidden rounded-3xl border border-slate-100 bg-white shadow-sm md:grid-cols-2">
        <div className="relative h-72 md:h-full">
          <Image src={product.image} alt={product.name} fill className="object-cover" />
        </div>

        <div className="p-6 sm:p-8">
          <p className="text-xs font-semibold uppercase tracking-[0.15em] text-green-700">
            {product.category}
          </p>
          <h1 className="mt-3 text-4xl font-semibold text-slate-900">{product.name}</h1>
          <p className="mt-4 text-base leading-7 text-slate-600">{product.description}</p>
          <p className="mt-6 text-2xl font-semibold text-green-700">{product.price}</p>
          <Link
            href="/contact"
            className="mt-8 inline-flex rounded-full bg-green-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-green-700"
          >
            Inquire Now
          </Link>
        </div>
      </article>
    </section>
  );
}
