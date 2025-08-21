export default function EventVideos({ data }) {
  return (
    <section className="py-20 px-6 bg-gray-50">
      <div className="max-w-screen-xl mx-auto">
        <h2 className="text-4xl font-extrabold text-center text-gray-900 mb-12 tracking-tight">
          Event Highlights
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {data.map((video, idx) => (
            <div
              key={idx}
              className="rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out"
            >
              <iframe
                src={video.embedUrl}
                title={video.title}
                className="w-full h-64 md:h-80"
                allowFullScreen
              />
              <div className="px-4 py-3 bg-white">
                <h3 className="text-lg font-semibold text-gray-800">
                  {video.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
