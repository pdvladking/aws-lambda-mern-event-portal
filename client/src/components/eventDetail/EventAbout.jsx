export default function EventAbout({ data }) {
  return (
    <section className="py-20 px-6 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-extrabold text-gray-900 mb-6 tracking-tight">
          About the Event
        </h2>
        <p className="text-lg text-gray-700 leading-relaxed transition-opacity duration-500 ease-in-out">
          {data.description}
        </p>
      </div>
    </section>
  );
}
