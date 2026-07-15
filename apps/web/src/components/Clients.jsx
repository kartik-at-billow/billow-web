import { SectionHeading } from "@/components/SectionHeading";

const CLIENTS = [
  {
    src: "/clients/caltranslogo.png",
    alt: "Caltrans",
    url: "https://dot.ca.gov",
    description:
      "Delivered secure digital solutions supporting transportation operations.",
  },
  {
    src: "/clients/DSH_header_logo.png",
    alt: "California Department of State Hospitals",
    url: "https://www.dsh.ca.gov",
    description:
      "Supported secure healthcare technology and operational modernization.",
  },
  {
    src: "/clients/calstrs_logo.avif",
    alt: "CalSTRS",
    url: "https://www.calstrs.com",
    description:
      "Built reliable enterprise solutions for secure financial and member services.",
  },
  {
    src: "/clients/california_public_utilities.png",
    alt: "California Public Utilities Commission",
    url: "https://www.cpuc.ca.gov",
    description:
      "Enabled efficient digital systems for regulatory and public service operations.",
  },
  {
    src: "/clients/dmv_log.png",
    alt: "California DMV",
    url: "https://www.dmv.ca.gov",
    description:
      "Helped modernize citizen-facing digital services and internal workflows.",
  },
  {
    src: "/clients/shartsis_logo.svg",
    alt: "Shartsis",
    url: "https://www.sflaw.com/",
    description:
      "Developed secure, reliable technology solutions for legal operations.",
  },
  {
    src: "/clients/Xterra_Web-Logo_Horz-wht.svg",
    alt: "Xterra",
    url: "",
    invert: true,
    description:
      "Collaborated on enterprise cloud and technology transformation initiatives.",
  },
  {
    src: "/clients/logo-biomarin.svg",
    alt: "BioMarin",
    url: "https://www.biomarin.com",
    description:
      "Supported scalable digital platforms for life sciences innovation.",
  },
];

function ClientCard({ client }) {
  return (
    <a
      href={client.url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Visit ${client.alt} website`}
      className="group relative flex h-36 items-center justify-center overflow-hidden bg-blue-50 transition-all duration-300 hover:z-10"
    >
      {/* Logo */}
      <img
        src={client.src}
        alt={client.alt}
        loading="lazy"
        className={`max-h-20 max-w-[180px] object-contain transition-all duration-300 group-hover:opacity-0 ${
          client.invert ? "invert" : ""
        }`}
      />

      {/* Hover Overlay */}
      <div className="absolute inset-0 flex flex-col items-center justify-center bg-brand-navy px-6 text-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        <p className="text-base font-medium leading-relaxed text-white">
          {client.description}
        </p>
      </div>
    </a>
  );
}

export function Clients() {
  const topClients = CLIENTS.slice(0, 6);
  const bottomClients = CLIENTS.slice(6);

  return (
    <section className="border-b border-black/5 py-20">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading title="Our Customers" />

        <div className="mt-10">
          {/* Top 6 Clients */}
          <div className="grid grid-cols-1 gap-px border border-neutral-300 bg-neutral-300 md:grid-cols-2 lg:grid-cols-3">
            {topClients.map((client) => (
              <ClientCard key={client.alt} client={client} />
            ))}
          </div>

          {/* Bottom 2 Clients */}
          <div className="flex justify-center">
            <div className="grid w-full grid-cols-1 gap-px border-x border-b border-neutral-300 bg-neutral-300 md:w-2/3 md:grid-cols-2">
              {bottomClients.map((client) => (
                <ClientCard key={client.alt} client={client} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}