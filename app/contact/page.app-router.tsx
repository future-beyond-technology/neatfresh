import SectionTitle from "@/components/SectionTitle";

export default function ContactPage() {
  return (
    <section className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <SectionTitle
        eyebrow="Contact"
        title="Business Inquiries"
        description="Reach out for product inquiries, bulk orders, and distribution opportunities."
      />

      <div className="mt-10 grid gap-8 lg:grid-cols-2">
        <article className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm sm:p-8">
          <h2 className="text-2xl font-semibold text-slate-900">Business Inquiry Form</h2>

          <form className="mt-6 space-y-5" method="post" aria-label="Business Inquiry Form">
            <div>
              <label htmlFor="name" className="mb-2 block text-sm font-medium text-slate-700">
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm text-slate-900 outline-none ring-green-200 transition focus:ring-2"
                placeholder="Enter your name"
              />
            </div>

            <div>
              <label htmlFor="email" className="mb-2 block text-sm font-medium text-slate-700">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm text-slate-900 outline-none ring-green-200 transition focus:ring-2"
                placeholder="Enter your email"
              />
            </div>

            <div>
              <label htmlFor="message" className="mb-2 block text-sm font-medium text-slate-700">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm text-slate-900 outline-none ring-green-200 transition focus:ring-2"
                placeholder="Tell us about your requirement"
              />
            </div>

            <button
              type="submit"
              className="rounded-full bg-green-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-green-700"
            >
              Submit Inquiry
            </button>
          </form>
        </article>

        <article className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm sm:p-8">
          <h2 className="text-2xl font-semibold text-slate-900">Distributor Partnership</h2>
          <p className="mt-4 text-sm leading-6 text-slate-600">
            Interested in distributing Neat & Fresh products? Our team is open to regional and channel
            partnerships for strong market coverage.
          </p>

          <div className="mt-6 space-y-4 rounded-xl border border-green-200 bg-green-50 p-5 text-sm text-slate-700">
            <p>
              <span className="font-semibold text-slate-900">Email:</span> distributor@neatfresh.online
            </p>
            <p>
              <span className="font-semibold text-slate-900">Phone:</span> +91-00000-00000
            </p>
          </div>
        </article>
      </div>
    </section>
  );
}
