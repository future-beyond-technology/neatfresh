import Link from "next/link";
import { categories } from "@/lib/categories";

const quickLinks = [
  { href: "/", label: "Home" },
  { href: "/products", label: "Products" },
];

const socialLinks = [
  { href: "#", label: "Instagram" },
  { href: "#", label: "Facebook" },
  { href: "#", label: "LinkedIn" },
];

export default function Footer() {
  return (
    <footer className="mt-16 border-t border-[#BFDBFE] bg-white">
      <div className="mx-auto w-full max-w-7xl px-4 pt-10 sm:px-6 lg:px-8">
        <div className="nf-gradient-primary nf-glow rounded-3xl p-6 text-white sm:p-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-blue-100">
                Bulk Order and Business Requirement
              </p>
              <h3 className="mt-2 text-2xl font-semibold">
                For bulk order or business requirement visit our FIROSE ENTERPRISES.
              </h3>
            </div>
            <div className="flex flex-wrap gap-3">
              <Link
                href="https://firoseenterprises.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-fit items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-[#1E3A8A] hover:bg-[#F3F4F6]"
              >
                Visit FIROSE
                <span aria-hidden="true">↗</span>
              </Link>
              <Link
                href="https://wa.me/919000000000?text=Hi%20Neat%20%26%20Fresh%2C%20I%20want%20to%20place%20a%20bulk%20order.%20Please%20share%20business%20pricing."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-fit items-center gap-2 rounded-full bg-[#25D366] px-5 py-2.5 text-sm font-semibold text-white hover:bg-[#1fb759]"
              >
                WhatsApp Direct Order
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto grid w-full max-w-7xl gap-10 px-4 py-12 sm:grid-cols-2 sm:px-6 lg:grid-cols-4 lg:px-8">
        <section>
          <h3 className="text-sm font-semibold uppercase tracking-[0.15em] text-[#1E3A8A]">
            Quick Links
          </h3>
          <ul className="mt-4 space-y-3 text-sm text-slate-600">
            {quickLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="transition hover:text-[#1E3A8A]">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </section>

        <section>
          <h3 className="text-sm font-semibold uppercase tracking-[0.15em] text-[#1E3A8A]">
            Product Categories
          </h3>
          <ul className="mt-4 grid grid-cols-1 gap-3 text-sm text-slate-600">
            {categories.map((category) => (
              <li key={category.id}>{category.name}</li>
            ))}
          </ul>
        </section>

        <section>
          <h3 className="text-sm font-semibold uppercase tracking-[0.15em] text-[#1E3A8A]">
            Contact Info
          </h3>
          <ul className="mt-4 space-y-3 text-sm text-slate-600">
            <li>Email: sales@neatfresh.online</li>
            <li>Phone: +91-00000-00000</li>
            <li>WhatsApp: +91-90000-00000</li>
            <li>Bulk Orders and Distribution</li>
          </ul>
        </section>

        <section>
          <h3 className="text-sm font-semibold uppercase tracking-[0.15em] text-[#1E3A8A]">
            Social
          </h3>
          <ul className="mt-4 space-y-3 text-sm text-slate-600">
            {socialLinks.map((link) => (
              <li key={link.label}>
                <Link href={link.href} className="transition hover:text-[#1E3A8A]">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </section>
      </div>

      <div className="border-t border-[#DBEAFE] bg-[#EFF6FF]">
        <div className="mx-auto flex w-full max-w-7xl flex-col gap-3 px-4 py-5 text-sm text-slate-600 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
          <p>© {new Date().getFullYear()} Neat &amp; Fresh. All rights reserved.</p>
          <p>
            Neat &amp; Fresh is a brand of{" "}
            <Link
              href="https://firoseenterprises.com"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-[#1E3A8A] hover:text-[#1E40AF]"
            >
              FIROSE ENTERPRISES
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
