import Image from "next/image";
import Link from "next/link";
import type { Product } from "@/lib/products";

type ProductCardProps = {
  product: Product;
  viewHref?: string;
  showCategory?: boolean;
  active?: boolean;
};

const WA_NUMBER = "919000000000";

const getPackSize = (name: string) => {
  const match = name.match(/\b\d+\s?(ml|g|l)\b/i);
  return match?.[0]?.toUpperCase() ?? "Standard Pack";
};

export default function ProductCard({
  product,
  viewHref = `/products?item=${product.slug}#product-detail`,
  showCategory = true,
  active = false,
}: ProductCardProps) {
  const packSize = getPackSize(product.name);
  const whatsappHref = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(
    `Hi Neat & Fresh, I want to place an order for ${product.name}. Please share details.`
  )}`;

  return (
    <article
      className={`group relative overflow-hidden rounded-3xl border bg-white shadow-sm transition duration-300 ${
        active
          ? "border-[#1E3A8A] shadow-[0_16px_32px_rgba(30,58,138,0.22)]"
          : "border-slate-200 hover:-translate-y-1 hover:border-[#60A5FA] hover:shadow-[0_18px_28px_rgba(30,58,138,0.14)]"
      }`}
    >
      <div className="relative h-52 overflow-hidden">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover transition duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a]/70 via-[#0f172a]/5 to-transparent" />
        <div className="absolute left-4 top-4 flex flex-wrap gap-2">
          <span className="rounded-full bg-white/90 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.12em] text-[#1E3A8A]">
            {packSize}
          </span>
          <span className="rounded-full bg-[#1E3A8A]/90 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.12em] text-white">
            Quick View
          </span>
        </div>
      </div>

      <div className="space-y-4 p-6">
        {showCategory ? (
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#1E3A8A]">
            {product.category}
          </p>
        ) : null}

        <div>
          <h3 className="text-lg font-semibold text-slate-900">{product.name}</h3>
          <p className="mt-2 text-sm leading-6 text-slate-600">{product.description}</p>
        </div>

        <div className="space-y-2 border-t border-slate-100 pt-4">
          <div className="flex items-center justify-between gap-3">
            <p className="text-lg font-semibold text-[#1E3A8A]">{product.price}</p>
          </div>

          <div className="flex flex-wrap gap-2">
            <Link
              href={viewHref}
              className="inline-flex items-center gap-2 rounded-full border border-[#93C5FD] bg-[#EFF6FF] px-4 py-2 text-sm font-semibold text-[#1E3A8A] transition hover:border-[#60A5FA] hover:bg-white"
            >
              View Details
              <span aria-hidden="true">→</span>
            </Link>
            <Link
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-[#25D366] px-4 py-2 text-sm font-semibold text-white transition hover:bg-[#1fb759]"
            >
              WhatsApp Order
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
}
