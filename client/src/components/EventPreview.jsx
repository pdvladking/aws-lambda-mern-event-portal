const EventPreview = ({ form }) => {
  const {
    title,
    date,
    description,
    purpose,
    banner,
    speakers = [],
    agenda = [],
    partners = [],
    videos = [],
    organizer = {},
  } = form;

  return (
    <div
      className={`max-w-4xl mx-auto p-8 rounded-xl border ${form.template === 'modern' ? 'bg-white shadow-md' : 'bg-gray-100 border-gray-400'}`}
    >
      <h1 className="text-4xl font-bold mb-4">{title}</h1>
      <p className="text-sm text-gray-600 mb-2">{date}</p>
      <img
        src={banner}
        alt="Event Banner"
        className="w-full h-64 object-cover rounded-md mb-6"
      />

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Description</h2>
        <p className="text-gray-700">{description}</p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Purpose</h2>
        <p className="text-gray-700">{purpose}</p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Speakers</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {speakers.map((s, i) => (
            <div key={i} className="border p-4 rounded-md bg-gray-50">
              <img
                src={s.photo}
                alt={s.name}
                className="w-full h-40 object-cover rounded mb-2"
              />
              <h3 className="font-bold">{s.name}</h3>
              <p className="text-sm text-gray-600">{s.designation}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Agenda</h2>
        <ul className="list-disc pl-5 text-gray-700">
          {agenda.map((item, i) => (
            <li key={i}>
              <strong>{item.time}</strong>: {item.title}
            </li>
          ))}
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Partners</h2>
        <div className="flex flex-wrap gap-4">
          {partners.map((p, i) => (
            <div key={i} className="border px-4 py-2 rounded bg-white text-sm">
              {p}
            </div>
          ))}
        </div>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Videos</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {videos.map((v, i) => (
            <iframe
              key={i}
              src={v}
              className="w-full h-64 rounded"
              allowFullScreen
            />
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-2">Contact</h2>
        <p className="text-gray-700">{organizer.name}</p>
        <p className="text-gray-700">{organizer.email}</p>
        <p className="text-gray-700">{organizer.whatsapp}</p>
        <p className="text-gray-700 mt-2">{organizer.message}</p>
      </section>
    </div>
  );
};

export default EventPreview;
