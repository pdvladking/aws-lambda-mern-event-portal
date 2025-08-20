import React from 'react';

const tagColors = {
  Featured: 'bg-yellow-500',
  Upcoming: 'bg-green-600',
  Premium: 'bg-orange-600',
  Past: 'bg-gray-400',
};

const EventCard = ({ event }) => {
  return (
    <div className="bg-white rounded-xl shadow-md p-6">
      <div className="flex gap-2 mb-3">
        {event.tags.map((tag) => (
          <span
            key={tag}
            className={`text-xs font-semibold px-2 py-1 rounded text-white ${tagColors[tag] || 'bg-gray-500'}`}
          >
            {tag}
          </span>
        ))}
      </div>
      <h2 className="text-xl font-bold mb-1">{event.title}</h2>
      <p className="text-gray-700 mb-3">{event.description}</p>
      <div className="text-sm text-gray-600 space-y-1">
        <p>📅 {event.date}</p>
        <p>📍 {event.location}</p>
      </div>
    </div>
  );
};

export default EventCard;
