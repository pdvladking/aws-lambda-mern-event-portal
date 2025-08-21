import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ClassicForm from './ClassicForm';
import ModernForm from './ModernForm';
import EventPreview from '../components/EventPreview';

const CreateEvent = () => {
  const selectedTemplate =
    localStorage.getItem('selectedTemplate') || 'classic';
  const navigate = useNavigate();

  const [form, setForm] = useState({
    template: selectedTemplate,
    title: '',
    date: '',
    banner: '',
    description: '',
    purpose: '',
    speakers: [],
    agenda: [],
    partners: [],
    videos: [],
    organizer: {
      name: '',
      email: '',
      whatsapp: '',
      message: '',
    },
  });

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    const val = type === 'file' ? URL.createObjectURL(files[0]) : value;

    if (name.startsWith('organizer.')) {
      const key = name.split('.')[1];
      setForm((prev) => ({
        ...prev,
        organizer: { ...prev.organizer, [key]: val },
      }));
    } else if (name.includes('[')) {
      const [field, index] = name.match(/(\w+)\[(\d+)\]/).slice(1, 3);
      const subfield = name.split('.').pop();

      const defaultShape = {
        speakers: { name: '', title: '', image: '' },
        agenda: { time: '', title: '' },
        partners: { name: '', logo: '' },
        videos: { url: '', title: '' },
      };

      const updated = [...(form[field] || [])];
      const base = defaultShape[field] || {};
      updated[index] = { ...base, ...updated[index], [subfield]: val };

      setForm((prev) => ({ ...prev, [field]: updated }));
    } else {
      setForm((prev) => ({ ...prev, [name]: val }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch(
        'https://your-api-id.execute-api.region.amazonaws.com/dev/create-event',
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(form),
        }
      );

      const data = await res.json();
      if (data.success && data.eventId) {
        navigate(`/event/${data.eventId}`);
      } else {
        console.error('Event creation failed:', data);
      }
    } catch (err) {
      console.error('Submission error:', err);
    }
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 p-6">
      {selectedTemplate === 'modern' ? (
        <ModernForm
          form={form}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
        />
      ) : (
        <ClassicForm
          form={form}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
        />
      )}
      <EventPreview form={form} />
    </div>
  );
};

export default CreateEvent;
