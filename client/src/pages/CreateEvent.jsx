import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createEvent } from '../api';
import ClassicForm from './ClassicForm';
import ModernForm from './ModernForm';

const CreateEvent = () => {
  const selectedTemplate =
    localStorage.getItem('selectedTemplate') || 'classic';
  const navigate = useNavigate();

  const [form, setForm] = useState({
    template: selectedTemplate,
    title: '',
    date: '',
    description: '',
    purpose: '',
    organizer: {
      name: '',
      email: '',
      whatsapp: '',
      message: '',
    },
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name.startsWith('organizer.')) {
      const key = name.split('.')[1];
      setForm((prev) => ({
        ...prev,
        organizer: { ...prev.organizer, [key]: value },
      }));
    } else {
      setForm((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await createEvent(form);
    navigate('/events');
  };

  return selectedTemplate === 'modern' ? (
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
  );
};

export default CreateEvent;
