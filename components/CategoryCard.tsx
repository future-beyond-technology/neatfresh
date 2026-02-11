import Image from "next/image";
import Link from "next/link";
import type { Category } from "@/lib/categories";

type CategoryCardProps = {
  category: Category;
};

export default function CategoryCard({ category }: CategoryCardProps) {
  return (
    <article className="group nf-card nf-card-hover overflow-hidden rounded-3xl">
      <div className="relative h-48 overflow-hidden">
        <Image
          src={category.image}
          alt={category.name}
          fill
          className="object-cover transition duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a]/65 via-[#0f172a]/20 to-transparent" />
        <div className="absolute bottom-4 left-4">
          <p className="rounded-full bg-white/90 px-3 py-1 text-xs font-semibold uppercase tracking-[0.12em] text-[#1E3A8A]">
            {category.productCount} Products
          </p>
        </div>
      </div>

      <div className="space-y-4 p-6">
        <h3 className="text-xl font-semibold text-slate-900">{category.name}</h3>
        <p className="text-sm leading-6 text-slate-600">{category.description}</p>
        <Link
          href={`/products?category=${category.slug}`}
          className="inline-flex items-center gap-2 rounded-full bg-[#1E3A8A] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[#1E40AF]"
        >
          Explore Range
          <span aria-hidden="true">→</span>
        </Link>
      </div>
    </article>
  );
}
