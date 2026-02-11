import Link from "next/link";

type CTASectionProps = {
  title?: string;
  description?: string;
  buttonLabel?: string;
  buttonHref?: string;
};

export default function CTASection({
  title = "Become a Distributor",
  description = "Partner with Neat & Fresh and bring trusted hygiene and housekeeping products to your region.",
  buttonLabel = "Partner With Us",
  buttonHref = "/contact",
}: CTASectionProps) {
  return (
    <section className="rounded-3xl border border-green-200 bg-gradient-to-r from-green-600 to-green-500 p-8 text-white shadow-lg sm:p-10">
      <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">{title}</h2>
          <p className="mt-3 text-sm leading-6 text-green-50 sm:text-base">{description}</p>
        </div>
        <Link
          href={buttonHref}
          className="inline-flex w-fit rounded-full bg-white px-6 py-3 text-sm font-semibold text-green-700 transition hover:bg-green-100"
        >
          {buttonLabel}
        </Link>
      </div>
    </section>
  );
}
