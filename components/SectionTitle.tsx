type SectionTitleProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  center?: boolean;
};

export default function SectionTitle({
  eyebrow,
  title,
  description,
  center = false,
}: SectionTitleProps) {
  return (
    <header className={center ? "text-center" : "text-left"}>
      {eyebrow ? (
        <div
          className={`inline-flex items-center gap-3 rounded-full border border-[#BFDBFE] bg-[#EFF6FF] px-4 py-1.5 ${
            center ? "mx-auto" : ""
          }`}
        >
          <span className="h-2 w-2 rounded-full bg-[#1E3A8A]" />
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#1E3A8A]">
            {eyebrow}
          </p>
        </div>
      ) : null}
      <h2 className="mt-4 text-3xl font-semibold text-slate-900 sm:text-4xl">{title}</h2>
      {description ? (
        <p className={`mt-3 text-base text-slate-600 ${center ? "mx-auto max-w-2xl" : "max-w-2xl"}`}>
          {description}
        </p>
      ) : null}
    </header>
  );
}
