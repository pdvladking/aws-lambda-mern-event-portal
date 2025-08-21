export default function EventAgenda({ data }) {
  return (
    <section className="py-20 px-6 bg-gray-50">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-4xl font-extrabold text-center text-gray-900 mb-12 tracking-tight">
          Event Agenda
        </h2>
        <ul className="space-y-8">
          {data.map((item, idx) => (
            <li key={idx} className="relative pl-6 border-l-4 border-blue-600">
              <div className="absolute -left-2 top-1 w-4 h-4 bg-blue-600 rounded-full"></div>
              <p className="text-lg font-semibold text-gray-800 mb-1">
                {item.time} — {item.title}
              </p>
              <p className="text-gray-600 leading-relaxed text-sm">
                {item.description}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
