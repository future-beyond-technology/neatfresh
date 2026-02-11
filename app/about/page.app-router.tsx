import Link from "next/link";
import SectionTitle from "@/components/SectionTitle";

const aboutSections = [
  {
    title: "Brand Mission",
    description:
      "Our mission is to make everyday hygiene simple, reliable, and accessible through high-performance cleaning and personal care products.",
  },
  {
    title: "Hygiene Commitment",
    description:
      "Neat & Fresh products are designed with practical hygiene priorities in mind, helping homes and workplaces stay cleaner and healthier.",
  },
  {
    title: "Quality Standards",
    description:
      "We follow strict quality checks and consistent production practices to ensure dependable results across every product category.",
  },
  {
    title: "Sustainability",
    description:
      "From thoughtful formulations to responsible packaging improvements, we continue to evolve toward a more sustainable product ecosystem.",
  },
];

export default function AboutPage() {
  return (
    <section className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <SectionTitle
        eyebrow="About"
        title="Neat & Fresh"
        description="Neat & Fresh is a brand of FIROSE ENTERPRISES. We build trusted hygiene and lifestyle products for modern households and businesses."
      />

      <div className="mt-10 grid gap-6 md:grid-cols-2">
        {aboutSections.map((section) => (
          <article
            key={section.title}
            className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm"
          >
            <h2 className="text-2xl font-semibold text-slate-900">{section.title}</h2>
            <p className="mt-3 text-sm leading-6 text-slate-600">{section.description}</p>
          </article>
        ))}
      </div>

      <div className="mt-10 rounded-2xl border border-green-200 bg-green-50 p-6">
        <p className="text-sm leading-6 text-slate-700">
          Learn more about our parent company at{" "}
          <Link
            href="https://firoseenterprises.com"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-green-700 hover:text-green-800"
          >
            firoseenterprises.com
          </Link>
          .
        </p>
      </div>
    </section>
  );
}
