import { SectionHeading } from "@/components/SectionHeading";

const CLIENTS = [
  {
    src: "/clients/caltranslogo.png",
    alt: "Caltrans",
    description: "Trusted transportation partner.",
  },
  {
    src: "/clients/DSH_header_logo.png",
    alt: "California Department of State Hospitals",
    description: "Supporting healthcare transformation.",
  },
  {
    src: "/clients/calstrs_logo.avif",
    alt: "CalSTRS",
    description: "Reliable pension technology solutions.",
  },
  {
    src: "/clients/california_public_utilities.png",
    alt: "California Public Utilities Commission",
    description: "Modernizing public utility systems.",
  },
  {
    src: "/clients/dmv_log.png",
    alt: "California DMV",
    description: "Digital government services.",
  },
  {
    src: "/clients/shartsis_logo.svg",
    alt: "Shartsis",
    description: "Secure legal technology.",
  },
  {
    src: "/clients/Xterra_Web-Logo_Horz-wht.svg",
    alt: "Xterra",
    invert: true,
    description: "Cloud-first enterprise solutions.",
  },
  {
    src: "/clients/logo-biomarin.svg",
    alt: "Biomarin",
    description: "Innovative biotechnology solutions.",
  },
];

function ClientCard({ client, borderRight, borderBottom }) {
  return (
    <div
      className={`group relative flex h-36 items-center justify-center overflow-hidden bg-white transition-all duration-300 ${
        borderRight ? "border-r border-neutral-200" : ""
      } ${borderBottom ? "border-b border-neutral-200" : ""}`}
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
      <div className="absolute inset-0 flex items-center justify-center bg-primary px-8 text-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
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
          <div className="grid grid-cols-1 border border-neutral-200 md:grid-cols-2 lg:grid-cols-3">
            {topClients.map((client, index) => (
              <ClientCard
                key={client.alt}
                client={client}
                borderRight={index % 3 !== 2}
                borderBottom={index < 3}
              />
            ))}
          </div>

          {/* Bottom 2 Clients */}
          <div className="flex justify-center">
            <div className="grid w-full md:w-2/3 grid-cols-1 md:grid-cols-2 border-x border-b border-neutral-200">
              {bottomClients.map((client, index) => (
                <ClientCard
                  key={client.alt}
                  client={client}
                  borderRight={index === 0}
                  borderBottom={false}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}