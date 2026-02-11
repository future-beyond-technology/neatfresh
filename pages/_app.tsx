import type { AppProps } from "next/app";
import Link from "next/link";
import { Plus_Jakarta_Sans, Sora } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "@/app/globals.css";

const bodyFont = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-body",
});

const headingFont = Sora({
  subsets: ["latin"],
  variable: "--font-heading",
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div
      className={`${bodyFont.variable} ${headingFont.variable} flex min-h-screen flex-col bg-[#F3F4F6] text-slate-900`}
    >
      <Navbar />
      <main className="flex-1 animate-fade-up">
        <Component {...pageProps} />
      </main>
      <Footer />

      <Link
        href="https://wa.me/919000000000?text=Hi%20Neat%20%26%20Fresh%2C%20I%20want%20to%20place%20an%20order.%20Please%20share%20details."
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-5 right-5 z-50 inline-flex items-center gap-2 rounded-full bg-[#25D366] px-5 py-3 text-sm font-semibold text-white shadow-[0_12px_24px_rgba(37,211,102,0.35)] transition hover:bottom-6 hover:bg-[#1fb759]"
      >
        <span className="text-base" aria-hidden="true">
          WhatsApp
        </span>
        Direct Order
      </Link>
    </div>
  );
}
