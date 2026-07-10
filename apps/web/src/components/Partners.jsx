const PARTNERS = [
  { src: "/partners/microsoft-partner.png", alt: "Microsoft Partner" },
  { src: "/partners/Google-partner.png", alt: "Google Partner" },
  { src: "/partners/aws-partner.png", alt: "AWS Partner" },
];

export function Partners() {
  return (
    <section
      id="partners"
      className="relative overflow-hidden bg-slate-950 py-15 text-white"
    >
      <div className="absolute inset-0 bg-brand-navy" />

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-sm font-semibold uppercase tracking-[0.2em] text-primary-500">
            Our Partners
          </span>

          <h2 className="mt-4 text-4xl font-bold">
            Building Enterprise Solutions Together
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-300">
            Through strategic partnerships with leading cloud providers, we
            deliver secure, scalable, and innovative enterprise solutions.
          </p>
        </div>

        <div className="mt-10 flex flex-wrap justify-center gap-8">
          {PARTNERS.map((partner) => (
            <div
              key={partner.alt}
              className="flex h-25 w-65 items-center justify-center bg-white p-8 shadow-lg transition-all duration-300"
            >
              <img
                src={partner.src}
                alt={partner.alt}
                className="max-h-12 object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}