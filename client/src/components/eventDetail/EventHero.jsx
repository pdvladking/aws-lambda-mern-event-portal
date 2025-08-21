export default function EventHero({ data }) {
  return (
    <section className="bg-gray-900 text-white py-16 px-6 text-center">
      <h1 className="text-4xl font-bold mb-4">{data.title}</h1>
      <p className="text-lg mb-2">{data.date}</p>
      <a
        href={data.ctaLink}
        className="inline-block bg-blue-600 px-6 py-2 rounded hover:bg-blue-700"
      >
        {data.ctaText}
      </a>
    </section>
  );
}
