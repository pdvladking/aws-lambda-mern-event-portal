import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ClassicForm from './ClassicForm';
import ModernForm from './ModernForm';
import EventPreview from '../components/EventPreview';
import { createEvent } from '../api';

const CreateEvent = () => {
  const selectedTemplate =
    localStorage.getItem('selectedTemplate') || 'classic';
  const navigate = useNavigate();

  const [form, setForm] = useState({
    template: selectedTemplate,
    title: '',
    date: '',
    bannerImage: '',
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
        speakers: { name: '', designation: '', photo: '' },
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

    // Convert partners array of objects into array of strings (extract first string value)
    const partnersStrings = form.partners
      .map((partner) => {
        if (typeof partner === 'object' && partner !== null) {
          return (
            Object.values(partner).find(
              (v) => typeof v === 'string' && v.trim() !== ''
            ) || ''
          );
        }
        return partner;
      })
      .filter(Boolean);

    // Convert videos array of objects into array of strings (extract first string value)
    const videosStrings = form.videos
      .map((video) => {
        if (typeof video === 'object' && video !== null) {
          return (
            Object.values(video).find(
              (v) => typeof v === 'string' && v.trim() !== ''
            ) || ''
          );
        }
        return video;
      })
      .filter(Boolean);

    const payload = {
      ...form,
      date: new Date(form.date).toISOString(),
      bannerImage: form.bannerImage || '',
      purpose: form.purpose || '',
      partners: partnersStrings,
      videos: videosStrings,
      organizer: {
        name: form.organizer.name || '',
        email: form.organizer.email || '',
        whatsapp: form.organizer.whatsapp || '',
        message: form.organizer.message || '',
      },
    };

    console.log('📦 Submitting payload:', payload);

    try {
      const res = await createEvent(payload);
      const data = res.data;

      if (data._id || data.eventId) {
        navigate(`/event/${data._id || data.eventId}`);
      } else {
        console.error('Event creation failed:', data);
      }
    } catch (err) {
      console.error('❌ Submission error:', err);
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
