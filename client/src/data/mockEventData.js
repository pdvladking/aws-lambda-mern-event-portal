const mockEvent = {
  hero: {
    title: 'Future of Tech Summit 2025',
    date: 'August 30, 2025',
    ctaText: 'Register Now',
    ctaLink: '#register',
  },
  about: {
    description:
      'Join us for a day of innovation, insight, and inspiration as industry leaders explore the future of technology.',
  },
  speakers: [
    {
      name: 'Raja Dev',
      bio: 'Architect of modular systems.',
      image: '/images/raja.jpg',
    },
    {
      name: 'Ava Flux',
      bio: 'UX visionary and design strategist.',
      image: '/images/ava.jpg',
    },
  ],
  agenda: [
    {
      time: '10:00 AM',
      title: 'Opening Keynote',
      description: 'Welcome and vision for the future.',
    },
    {
      time: '11:30 AM',
      title: 'Panel: AI & Ethics',
      description: 'Exploring responsible innovation.',
    },
  ],
  partners: [
    {
      name: 'TechNova',
      logo: '/logos/technova.png',
      link: 'https://technova.com',
    },
    {
      name: 'CodeSphere',
      logo: '/logos/codesphere.png',
      link: 'https://codesphere.io',
    },
  ],
  videos: [
    {
      title: '2024 Highlights',
      embedUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    },
  ],
  contact: {
    email: 'info@techsummit.com',
    phone: '+1 555 123 4567',
    address: '123 Innovation Blvd, Kathmandu',
  },
};

export default mockEvent;
