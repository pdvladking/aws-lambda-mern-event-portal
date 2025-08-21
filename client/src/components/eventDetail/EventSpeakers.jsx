export default function EventSpeakers({ data }) {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-screen-xl mx-auto">
        <h2 className="text-4xl font-extrabold text-center text-gray-900 mb-12 tracking-tight">
          Meet the Speakers
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {data.map((speaker, idx) => (
            <div
              key={idx}
              className="bg-gray-50 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out overflow-hidden"
            >
              <img
                src={speaker.image}
                alt={speaker.name}
                className="w-full h-56 object-cover"
              />
              <div className="p-6 text-center">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {speaker.name}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {speaker.bio}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
