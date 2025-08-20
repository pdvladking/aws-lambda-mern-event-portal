import React, { useState } from 'react';
import { mockEvents } from './mockEvents';
import EventCard from './EventCard';

const EventsCalendar = () => {
  const [search, setSearch] = useState('');
  const [typeFilter, setTypeFilter] = useState('All');

  const filteredEvents = mockEvents.filter((event) => {
    const matchesSearch = event.title
      .toLowerCase()
      .includes(search.toLowerCase());
    const matchesType = typeFilter === 'All' || event.tags.includes(typeFilter);
    return matchesSearch && matchesType;
  });

  return (
    <div className="min-h-screen bg-gradient-to-b from-yellow-300 to-yellow-400 p-8 text-gray-800">
      <header className="mb-8 text-center">
        <h1 className="text-4xl font-bold">Events Calendar</h1>
        <p className="text-lg mt-2">
          Explore upcoming and past events with premium clarity.
        </p>
      </header>

      <div className="flex flex-col md:flex-row gap-4 mb-10 justify-center">
        <input
          type="text"
          placeholder="Search events..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="px-4 py-2 rounded border border-gray-300 w-full md:w-1/3"
        />
        <select
          value={typeFilter}
          onChange={(e) => setTypeFilter(e.target.value)}
          className="px-4 py-2 rounded border border-gray-300 w-full md:w-1/4"
        >
          <option>All</option>
          <option>Featured</option>
          <option>Upcoming</option>
          <option>Premium</option>
          <option>Past</option>
        </select>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {filteredEvents.map((event) => (
          <EventCard key={event.id} event={event} />
        ))}
      </div>
    </div>
  );
};

export default EventsCalendar;
