import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getEventById } from '../api';

const EventDetail = () => {
  const { id } = useParams();
  const [event, setEvent] = useState(null);

  useEffect(() => {
    getEventById(id).then((res) => setEvent(res.data));
  }, [id]);

  if (!event)
    return (
      <div className="text-center mt-20 text-lg">Loading event details...</div>
    );

  return (
    <div className="bg-white text-gray-800">
      {/* Hero Section */}
      <section className="bg-yellow-300 py-12 text-center">
        <h1 className="text-4xl font-bold mb-2">{event.title}</h1>
        <p className="text-lg">{new Date(event.date).toLocaleDateString()}</p>
        {event.bannerUrl && (
          <img
            src={event.bannerUrl}
            alt="Event Banner"
            className="mx-auto mt-6 rounded shadow-md max-h-96"
          />
        )}
      </section>

      {/* About Section */}
      <section className="max-w-4xl mx-auto px-6 py-10 space-y-4">
        <h2 className="text-2xl font-semibold">About the Event</h2>
        <p className="text-gray-700">{event.description}</p>
        <p>
          <strong className="text-gray-800">Purpose:</strong> {event.purpose}
        </p>
      </section>

      {/* Organizer Section */}
      <section className="max-w-4xl mx-auto px-6 py-10 bg-gray-50 rounded-xl shadow">
        <h2 className="text-xl font-semibold mb-4">Organizer</h2>
        <div className="space-y-2">
          <p>
            <strong>Name:</strong> {event.organizer.name}
          </p>
          <p>
            <strong>Email:</strong> {event.organizer.email}
          </p>
          <p>
            <strong>WhatsApp:</strong> {event.organizer.whatsapp}
          </p>
          <p>
            <strong>Message:</strong> {event.organizer.message}
          </p>
        </div>
      </section>
    </div>
  );
};

export default EventDetail;
