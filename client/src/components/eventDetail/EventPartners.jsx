export default function EventPartners({ data }) {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-screen-xl mx-auto text-center">
        <h2 className="text-4xl font-extrabold text-gray-900 mb-12 tracking-tight">
          Our Partners
        </h2>
        <div className="flex flex-wrap justify-center items-center gap-10">
          {data.map((partner, idx) => (
            <a
              key={idx}
              href={partner.link}
              target="_blank"
              rel="noopener noreferrer"
              className="block hover:scale-105 transition-transform duration-300 ease-in-out"
            >
              <img
                src={partner.logo}
                alt={partner.name}
                className="h-16 object-contain grayscale hover:grayscale-0 transition duration-300"
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
