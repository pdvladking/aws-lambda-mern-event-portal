import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getEventById } from '../api';

const EventDetail = () => {
  const { id } = useParams();
  const [event, setEvent] = useState(null);

  useEffect(() => {
    getEventById(id).then((res) => setEvent(res.data));
  }, [id]);

  if (!event) return <div className="text-center mt-20">Loading...</div>;

  return (
    <div className="max-w-3xl mx-auto mt-10 space-y-4">
      <h1 className="text-3xl font-bold">{event.title}</h1>
      <p className="text-gray-600">
        {new Date(event.date).toLocaleDateString()}
      </p>
      <p>{event.description}</p>
      <p>
        <strong>Purpose:</strong> {event.purpose}
      </p>
      <div>
        <h2 className="text-xl font-semibold mt-6">Organizer</h2>
        <p>{event.organizer.name}</p>
        <p>{event.organizer.email}</p>
        <p>{event.organizer.whatsapp}</p>
        <p>{event.organizer.message}</p>
      </div>
    </div>
  );
};

export default EventDetail;
