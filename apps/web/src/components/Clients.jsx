import { SectionHeading } from "@/components/SectionHeading";

const CLIENTS = [
  {
    src: "/clients/caltranslogo.png",
    alt: "Caltrans",
    description: "Delivered secure digital solutions supporting transportation operations.",
  },
  {
    src: "/clients/DSH_header_logo.png",
    alt: "California Department of State Hospitals",
    description: "Supported secure healthcare technology and operational modernization.",
  },
  {
    src: "/clients/calstrs_logo.avif",
    alt: "CalSTRS",
    description: "Built reliable enterprise solutions for secure financial and member services.",
  },
  {
    src: "/clients/california_public_utilities.png",
    alt: "California Public Utilities Commission",
    description: "Enabled efficient digital systems for regulatory and public service operations.",
  },
  {
    src: "/clients/dmv_log.png",
    alt: "California DMV",
    description: "Helped modernize citizen-facing digital services and internal workflows.",
  },
  {
    src: "/clients/shartsis_logo.svg",
    alt: "Shartsis",
    description: "Developed secure, reliable technology solutions for legal operations.",
  },
  {
    src: "/clients/Xterra_Web-Logo_Horz-wht.svg",
    alt: "Xterra",
    invert: true,
    description: "Collaborated on enterprise cloud and technology transformation initiatives",
  },
  {
    src: "/clients/logo-biomarin.svg",
    alt: "Biomarin",
    description: "Supported scalable digital platforms for life sciences innovation.",
  },
];

function ClientCard({ client }) {
  return (
    <div className="group relative flex h-36 items-center justify-center overflow-hidden bg-blue-50 transition-all duration-300">
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
      <div className="absolute inset-0 flex items-center justify-center bg-brand-navy px-8 text-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        <p className="text-lg font-medium leading-relaxed text-white">
          {client.description}
        </p>
      </div>
    </div>
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