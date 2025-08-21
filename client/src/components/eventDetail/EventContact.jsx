export default function EventContact({ data }) {
  return (
    <section className="py-20 px-6 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-xl mx-auto text-center">
        <h2 className="text-4xl font-extrabold text-gray-900 mb-8 tracking-tight">
          Get in Touch
        </h2>
        <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
          <p>
            📧{' '}
            <a
              href={`mailto:${data.email}`}
              className="text-blue-600 hover:underline"
            >
              {data.email}
            </a>
          </p>
          <p>
            📞{' '}
            <a
              href={`tel:${data.phone}`}
              className="text-blue-600 hover:underline"
            >
              {data.phone}
            </a>
          </p>
          <p>📍 {data.address}</p>
        </div>
      </div>
    </section>
  );
}
