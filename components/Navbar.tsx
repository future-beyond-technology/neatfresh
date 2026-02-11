import Link from "next/link";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/products", label: "Products" },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-[#DBEAFE] bg-white/90 backdrop-blur-lg">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
        <Link href="/" className="group">
          <p className="text-xl font-semibold leading-none text-slate-900 sm:text-2xl">
            Neat <span className="text-[#1E3A8A]">&amp; Fresh</span>
          </p>
          <p className="mt-1 text-[11px] uppercase tracking-[0.18em] text-slate-500">
            FIROSE ENTERPRISES
          </p>
        </Link>

        <nav
          aria-label="Primary navigation"
          className="hidden items-center gap-2 rounded-full border border-[#BFDBFE] bg-[#EFF6FF] p-1 sm:flex"
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-full px-5 py-2 text-sm font-semibold text-slate-600 transition hover:bg-white hover:text-[#1E3A8A]"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <Link
          href="/products"
          className="rounded-full bg-[#1E3A8A] px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-[#1E40AF] hover:shadow-md"
        >
          View Catalog
        </Link>
      </div>
    </header>
  );
}
