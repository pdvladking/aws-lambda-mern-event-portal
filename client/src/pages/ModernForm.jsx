const ModernForm = ({ handleChange, handleSubmit }) => (
  <form
    onSubmit={handleSubmit}
    className="bg-white border border-gray-200 rounded-xl p-10 space-y-8 max-w-3xl mx-auto"
  >
    <h1 className="text-4xl font-semibold text-gray-900 text-center tracking-tight">
      Modern Event Creation
    </h1>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <input
        name="title"
        placeholder="Event Title (e.g. Drone Expo 2025)"
        onChange={handleChange}
        className="px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 text-sm"
      />
      <input
        name="date"
        type="date"
        onChange={handleChange}
        className="px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 text-sm"
      />
    </div>

    <input
      name="banner"
      type="file"
      accept="image/*"
      onChange={handleChange}
      className="w-full px-4 py-3 border border-gray-300 rounded-md text-sm"
    />

    <textarea
      name="description"
      placeholder="Describe the event purpose, audience, and theme"
      onChange={handleChange}
      rows={4}
      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 text-sm"
    />

    <textarea
      name="purpose"
      placeholder="What is the goal or mission of this event?"
      onChange={handleChange}
      rows={4}
      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 text-sm"
    />

    <div className="space-y-6">
      {[0, 1, 2, 3].map((i) => (
        <div key={i} className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <input
            name={`speakers[${i}].name`}
            placeholder={`Speaker ${i + 1} Name`}
            onChange={handleChange}
            className="px-4 py-3 border border-gray-300 rounded-md text-sm"
          />
          <input
            name={`speakers[${i}].designation`}
            placeholder="Designation (e.g. CTO, DGCA)"
            onChange={handleChange}
            className="px-4 py-3 border border-gray-300 rounded-md text-sm"
          />
          <input
            name={`speakers[${i}].photo`}
            type="file"
            accept="image/*"
            onChange={handleChange}
            className="px-4 py-3 border border-gray-300 rounded-md text-sm"
          />
        </div>
      ))}
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <input
        name="agenda[0].title"
        placeholder="Agenda Item Title (e.g. Keynote)"
        onChange={handleChange}
        className="px-4 py-3 border border-gray-300 rounded-md text-sm"
      />
      <input
        name="agenda[0].time"
        placeholder="Time (e.g. 10:00 AM)"
        onChange={handleChange}
        className="px-4 py-3 border border-gray-300 rounded-md text-sm"
      />
    </div>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {[0, 1, 2, 3, 4].map((i) => (
        <input
          key={i}
          name={`partners[${i}]`}
          placeholder={`Partner ${i + 1} Name or Logo URL`}
          onChange={handleChange}
          className="px-4 py-3 border border-gray-300 rounded-md text-sm"
        />
      ))}
    </div>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {[0, 1, 2].map((i) => (
        <input
          key={i}
          name={`videos[${i}]`}
          placeholder="YouTube Embed Link"
          onChange={handleChange}
          className="px-4 py-3 border border-gray-300 rounded-md text-sm"
        />
      ))}
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <input
        name="organizer.name"
        placeholder="Organizer Name"
        onChange={handleChange}
        className="px-4 py-3 border border-gray-300 rounded-md text-sm"
      />
      <input
        name="organizer.email"
        placeholder="Organizer Email"
        onChange={handleChange}
        className="px-4 py-3 border border-gray-300 rounded-md text-sm"
      />
      <input
        name="organizer.whatsapp"
        placeholder="WhatsApp Number"
        onChange={handleChange}
        className="px-4 py-3 border border-gray-300 rounded-md text-sm"
      />
    </div>

    <textarea
      name="organizer.message"
      placeholder="Message for attendees or registration info"
      onChange={handleChange}
      rows={2}
      className="w-full px-4 py-3 border border-gray-300 rounded-md text-sm"
    />

    <button
      type="submit"
      className="w-full py-3 bg-indigo-600 text-white font-semibold rounded-md hover:bg-indigo-700 transition text-sm"
    >
      Create Event
    </button>
  </form>
);

export default ModernForm;
