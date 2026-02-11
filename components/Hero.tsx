import Image from "next/image";
import Link from "next/link";

const heroImages = [
  {
    src: "https://images.unsplash.com/photo-1527515545081-5db817172677?auto=format&fit=crop&w=1200&q=80",
    alt: "Cleaning spray with fresh setup",
  },
  {
    src: "https://images.unsplash.com/photo-1583947215259-38e31be8751f?auto=format&fit=crop&w=1200&q=80",
    alt: "Hygiene hand wash pump bottle",
  },
  {
    src: "https://images.unsplash.com/photo-1603712725038-e9334ae8f39f?auto=format&fit=crop&w=1200&q=80",
    alt: "Household cleaning tools and products",
  },
];

export default function Hero() {
  return (
    <section className="border-b border-green-100 bg-gradient-to-br from-green-50 via-white to-green-100/40">
      <div className="mx-auto grid w-full max-w-7xl items-center gap-10 px-4 py-14 sm:px-6 lg:grid-cols-2 lg:px-8 lg:py-20">
        <div>
          <p className="inline-flex rounded-full border border-green-200 bg-white px-4 py-1 text-xs font-semibold uppercase tracking-[0.15em] text-green-700">
            Hygiene &amp; Lifestyle Essentials
          </p>
          <h1 className="mt-5 text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
            Pure. Clean. Everyday Fresh.
          </h1>
          <p className="mt-5 max-w-xl text-base leading-7 text-slate-600 sm:text-lg">
            Discover premium hygiene and housekeeping products crafted for cleaner homes, safer spaces,
            and everyday confidence.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Link
              href="/products"
              className="rounded-full bg-green-600 px-7 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-green-700"
            >
              Shop Products
            </Link>
            <Link
              href="/about"
              className="rounded-full border border-green-200 bg-white px-7 py-3 text-sm font-semibold text-green-700 transition hover:border-green-300 hover:bg-green-50"
            >
              Our Story
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="relative col-span-2 h-56 overflow-hidden rounded-3xl shadow-lg sm:h-64">
            <Image src={heroImages[0].src} alt={heroImages[0].alt} fill className="object-cover" priority />
          </div>
          <div className="relative h-44 overflow-hidden rounded-2xl shadow-md sm:h-48">
            <Image src={heroImages[1].src} alt={heroImages[1].alt} fill className="object-cover" />
          </div>
          <div className="relative h-44 overflow-hidden rounded-2xl shadow-md sm:h-48">
            <Image src={heroImages[2].src} alt={heroImages[2].alt} fill className="object-cover" />
          </div>
        </div>
      </div>
    </section>
  );
}
