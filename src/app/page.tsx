import Image from "next/image";

const PHONE = "9084021070";
const EMAIL = "kkcaresllp@gmail.com";
const ADDRESS = "State Bank Colony, Bhoor, Bulandshahr, 203001";

const nav = [
  ["About", "#about"],
  ["Services", "#services"],
  ["Our Lab", "#lab"],
  ["Gallery", "#gallery"],
  ["Contact", "#contact"],
];

const services = [
  {
    title: "Clinical Pathology",
    text: "Routine blood, urine and body-fluid examinations for everyday health checks.",
    icon: "M12 3c3 4 6 7 6 10a6 6 0 0 1-12 0c0-3 3-6 6-10z",
  },
  {
    title: "Hematology",
    text: "Complete blood counts and coagulation tests on automated analyzers.",
    icon: "M9 3h6M10 3v6l-5 9a2 2 0 0 0 2 3h10a2 2 0 0 0 2-3l-5-9V3",
  },
  {
    title: "Biochemistry",
    text: "Sugar, lipid, liver, kidney and thyroid profiles with dependable accuracy.",
    icon: "M4 20h16M7 20V10m5 10V4m5 16v-7",
  },
  {
    title: "Immunoassay",
    text: "Hormone, vitamin and marker testing using modern immunoassay systems.",
    icon: "M12 2v4m0 12v4M2 12h4m12 0h4M5 5l3 3m8 8 3 3M19 5l-3 3M8 16l-3 3",
  },
  {
    title: "Molecular Diagnostics",
    text: "Advanced DNA and RNA based testing for precise, early detection.",
    icon: "M7 3c0 6 10 6 10 12M17 3c0 6-10 6-10 12M7 21c0-3 3-4 5-5m5 5c0-3-3-4-5-5",
  },
  {
    title: "Cytology & Pap Smear",
    text: "Careful cell-level screening handled with privacy and sensitivity.",
    icon: "M11 4a7 7 0 1 0 0 14 7 7 0 0 0 0-14zm9 16-4-4",
  },
];

const reasons = [
  {
    title: "Accurate Reports",
    text: "Every result is double-checked on well-maintained, quality-controlled equipment.",
  },
  {
    title: "Trusted Care",
    text: "A friendly, professional team that explains your tests and respects your time.",
  },
  {
    title: "Better Health",
    text: "Clear reports help you and your doctor act early and stay on top of your health.",
  },
];

const gallery = [
  { src: "/images/inauguration.jpg", alt: "Inauguration day at K.K. Cares", span: "md:col-span-2 md:row-span-2" },
  { src: "/images/lab-analyzers.jpg", alt: "Automated analyzers in the lab", span: "" },
  { src: "/images/reception.jpg", alt: "Reception and help desk", span: "md:row-span-2" },
  { src: "/images/waiting-area.jpg", alt: "Comfortable waiting area", span: "md:row-span-2" },
  { src: "/images/lab-bench.jpg", alt: "Hematology and coagulation bench", span: "" },
  { src: "/images/lab-desk.jpg", alt: "Reporting desk", span: "" },
  { src: "/images/building-night.jpg", alt: "Lab building lit up at night", span: "" },
];

function Icon({ d }: { d: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-7 w-7"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d={d} />
    </svg>
  );
}

export default function Home() {
  return (
    <>
      {/* NAV */}
      <header className="sticky top-0 z-50 border-b border-navy/10 bg-white/90 backdrop-blur">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
          <a href="#top" className="flex items-baseline gap-1 text-xl font-bold tracking-tight">
            <span className="text-navy">K.K.</span>
            <span className="text-brand-green">Cares</span>
            <span className="hidden text-xs font-medium uppercase tracking-widest text-muted sm:inline sm:pl-2">
              Pathology Lab
            </span>
          </a>
          <nav className="hidden items-center gap-7 text-sm font-medium text-ink md:flex">
            {nav.map(([label, href]) => (
              <a key={href} href={href} className="transition hover:text-brand-green">
                {label}
              </a>
            ))}
          </nav>
          <a
            href={`tel:+91${PHONE}`}
            className="rounded-full bg-brand-green px-5 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-navy"
          >
            Call Now
          </a>
        </div>
      </header>

      <main id="top">
        {/* HERO */}
        <section className="brand-gradient relative overflow-hidden text-white">
          <div className="absolute -right-24 -top-24 h-96 w-96 rounded-full bg-lime/20 blur-3xl" />
          <div className="absolute -bottom-32 -left-20 h-96 w-96 rounded-full bg-white/10 blur-3xl" />
          <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-4 py-16 sm:px-6 md:grid-cols-2 md:py-24">
            <div className="rise">
              <p className="mb-4 inline-block rounded-full border border-white/30 px-4 py-1 text-xs font-medium uppercase tracking-[0.2em]">
                Accurate · Reliable · Cares
              </p>
              <h1 className="text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
                Diagnostics you can <span className="text-lime">trust</span>, care you can feel.
              </h1>
              <p className="mt-5 max-w-lg text-lg text-white/85">
                K.K. Cares Pathology Lab brings modern testing and a caring team
                together, right here in Bulandshahr.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href={`tel:+91${PHONE}`}
                  className="rounded-full bg-white px-7 py-3 font-semibold text-navy shadow-lg transition hover:bg-lime hover:text-navy"
                >
                  Book a Test
                </a>
                <a
                  href="#services"
                  className="rounded-full border border-white/60 px-7 py-3 font-semibold transition hover:bg-white/10"
                >
                  Our Services
                </a>
              </div>
            </div>
            <div className="rise relative mx-auto w-full max-w-md [animation-delay:150ms]">
              <div className="overflow-hidden rounded-3xl bg-white p-3 shadow-2xl ring-1 ring-white/40">
                <Image
                  src="/images/logo.jpg"
                  alt="K.K. Cares Pathology Lab logo"
                  width={1536}
                  height={1024}
                  priority
                  className="h-auto w-full rounded-2xl"
                />
              </div>
            </div>
          </div>
        </section>

        {/* STRIP */}
        <section className="border-b border-navy/10 bg-white">
          <div className="mx-auto grid max-w-6xl grid-cols-2 gap-6 px-4 py-8 text-center sm:px-6 md:grid-cols-4">
            {[
              ["Modern", "Automated analyzers"],
              ["Hygienic", "Clean, safe sample handling"],
              ["Quick", "Timely, clear reports"],
              ["Caring", "Friendly, trained staff"],
            ].map(([a, b]) => (
              <div key={a}>
                <p className="text-2xl font-bold text-navy">{a}</p>
                <p className="text-sm text-muted">{b}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ABOUT */}
        <section id="about" className="mx-auto grid max-w-6xl items-center gap-12 px-4 py-20 sm:px-6 md:grid-cols-2">
          <div className="relative">
            <div className="relative aspect-4/5 overflow-hidden rounded-3xl shadow-xl">
              <Image
                src="/images/building-day.jpg"
                alt="K.K. Cares lab building"
                fill
                sizes="(min-width: 768px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-5 -right-2 rounded-2xl bg-brand-green px-6 py-4 text-white shadow-lg sm:-right-6">
              <p className="text-xs uppercase tracking-widest text-white/80">Registered as</p>
              <p className="text-lg font-semibold">K K Cares LLP</p>
            </div>
          </div>
          <div>
            <p className="eyebrow">About us</p>
            <h2 className="mt-2 text-3xl font-bold text-navy sm:text-4xl">
              A neighbourhood lab built on accuracy and care
            </h2>
            <p className="mt-5 text-muted">
              K.K. Cares is a pathology laboratory dedicated to giving patients
              and doctors results they can rely on. Our team combines modern
              equipment with careful processes, so every sample gets the
              attention it deserves.
            </p>
            <p className="mt-4 text-muted">
              From routine health check-ups to advanced diagnostics, we keep
              testing simple, comfortable and dependable for you and your family.
            </p>
            <ul className="mt-6 space-y-3">
              {["Accurate, double-checked reports", "Clean and comfortable environment", "Caring and trained team"].map(
                (t) => (
                  <li key={t} className="flex items-center gap-3 font-medium">
                    <span className="grid h-6 w-6 place-items-center rounded-full bg-mint text-brand-green">✓</span>
                    {t}
                  </li>
                ),
              )}
            </ul>
          </div>
        </section>

        {/* SERVICES */}
        <section id="services" className="bg-sky py-20">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <div className="mx-auto max-w-2xl text-center">
              <p className="eyebrow">What we do</p>
              <h2 className="mt-2 text-3xl font-bold text-navy sm:text-4xl">Our Services</h2>
              <p className="mt-3 text-muted">
                A focused range of tests to support your health, from routine
                screening to advanced diagnostics.
              </p>
            </div>
            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {services.map((s) => (
                <div
                  key={s.title}
                  className="group rounded-2xl border border-navy/5 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
                >
                  <div className="grid h-14 w-14 place-items-center rounded-xl bg-mint text-brand-green transition group-hover:bg-brand-green group-hover:text-white">
                    <Icon d={s.icon} />
                  </div>
                  <h3 className="mt-5 text-lg font-semibold text-navy">{s.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{s.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* LAB TOUR (video) */}
        <section id="lab" className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
          <div className="mx-auto max-w-2xl text-center">
            <p className="eyebrow">Inside the lab</p>
            <h2 className="mt-2 text-3xl font-bold text-navy sm:text-4xl">Take a quick tour</h2>
            <p className="mt-3 text-muted">
              Modern analyzers, organised workstations and a clean workspace.
            </p>
          </div>
          <div className="mt-10 overflow-hidden rounded-3xl bg-navy shadow-2xl ring-1 ring-navy/10">
            <video
              controls
              playsInline
              preload="none"
              poster="/images/video-poster.png"
              className="aspect-video w-full object-cover"
            >
              <source src="/images/lab-tour.mp4" type="video/mp4" />
            </video>
          </div>
          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            {[
              ["/images/lab-analyzers.jpg", "Biochemistry & immunoassay analyzers"],
              ["/images/lab-bench.jpg", "Hematology & coagulation workstation"],
            ].map(([src, cap]) => (
              <figure key={src} className="overflow-hidden rounded-2xl bg-white shadow-md">
                <div className="relative aspect-4/3">
                  <Image src={src} alt={cap} fill sizes="(min-width: 640px) 50vw, 100vw" className="object-cover" />
                </div>
                <figcaption className="px-5 py-3 text-sm font-medium text-navy">{cap}</figcaption>
              </figure>
            ))}
          </div>
        </section>

        {/* WHY US */}
        <section className="brand-gradient py-20 text-white">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <h2 className="text-center text-3xl font-bold sm:text-4xl">Why choose K.K. Cares</h2>
            <div className="mt-12 grid gap-6 md:grid-cols-3">
              {reasons.map((r, i) => (
                <div key={r.title} className="rounded-2xl bg-white/10 p-8 ring-1 ring-white/20 backdrop-blur">
                  <p className="text-5xl font-bold text-lime/90">0{i + 1}</p>
                  <h3 className="mt-3 text-xl font-semibold">{r.title}</h3>
                  <p className="mt-2 text-white/80">{r.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* GALLERY */}
        <section id="gallery" className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
          <div className="mx-auto max-w-2xl text-center">
            <p className="eyebrow">Gallery</p>
            <h2 className="mt-2 text-3xl font-bold text-navy sm:text-4xl">A look around</h2>
          </div>
          <div className="mt-10 grid auto-rows-50 grid-cols-2 gap-3 sm:auto-rows-55 md:grid-cols-4">
            {gallery.map((g) => (
              <div key={g.src} className={`group relative overflow-hidden rounded-2xl ${g.span}`}>
                <Image
                  src={g.src}
                  alt={g.alt}
                  fill
                  sizes="(min-width: 768px) 25vw, 50vw"
                  className="object-cover transition duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-x-0 bottom-0 bg-linear-to-t from-navy/80 to-transparent p-3 text-xs font-medium text-white opacity-0 transition group-hover:opacity-100">
                  {g.alt}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="bg-sky py-20">
          <div className="mx-auto grid max-w-6xl gap-10 px-4 sm:px-6 md:grid-cols-2">
            <div>
              <p className="eyebrow">Get in touch</p>
              <h2 className="mt-2 text-3xl font-bold text-navy sm:text-4xl">Visit or call us</h2>
              <p className="mt-3 text-muted">
                Questions about a test or want to book a visit? We&apos;re happy to help.
              </p>
              <div className="mt-8 space-y-4">
                {(
                  [
                    ["Address", ADDRESS, undefined],
                    ["Phone", `+91 ${PHONE}`, `tel:+91${PHONE}`],
                    ["Email", EMAIL, `mailto:${EMAIL}`],
                  ] as [string, string, string | undefined][]
                ).map(([label, value, href]) => (
                  <div key={label} className="flex items-start gap-4 rounded-2xl bg-white p-5 shadow-sm">
                    <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-mint text-sm font-bold text-brand-green">
                      {label[0]}
                    </span>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-widest text-muted">{label}</p>
                      {href ? (
                        <a href={href} className="font-medium text-navy hover:text-brand-green">
                          {value}
                        </a>
                      ) : (
                        <p className="font-medium text-navy">{value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative min-h-80 overflow-hidden rounded-3xl bg-white shadow-xl">
              <Image
                src="/images/building-night.jpg"
                alt="K.K. Cares building"
                fill
                sizes="(min-width: 768px) 50vw, 100vw"
                className="object-cover"
              />
              <a
                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                  "K K Cares Pathology Lab " + ADDRESS,
                )}`}
                target="_blank"
                rel="noreferrer"
                className="absolute bottom-4 left-4 right-4 rounded-full bg-brand-green py-3 text-center font-semibold text-white shadow-lg transition hover:bg-navy"
              >
                Open in Google Maps
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="bg-navy text-white/80">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-4 py-8 text-sm sm:flex-row sm:px-6">
          <p>
            <span className="font-semibold text-white">K.K. Cares</span> Pathology Lab · Accurate · Reliable · Cares
          </p>
          <p>© 2026 K K Cares LLP. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
}
