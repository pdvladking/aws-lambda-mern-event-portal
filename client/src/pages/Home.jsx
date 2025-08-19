import Navbar from '../components/Navbar';

const Home = () => {
  const cards = [
    {
      title: 'Upload Files',
      description: 'Trigger backend mutation via clean UI.',
    },
    {
      title: 'Mutation Logs',
      description: 'View history of uploads and feedback.',
    },
    { title: 'System Status', description: 'Monitor backend health and sync.' },
  ];

  return (
    <div className="min-h-screen bg-gray-950 text-white">
      <Navbar />
      <section className="p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {cards.map((card, idx) => (
          <div
            key={idx}
            className="bg-gray-900 border border-gray-700 rounded-xl p-6 hover:scale-[1.02] transition-transform shadow-md"
          >
            <h2 className="text-xl font-semibold mb-2">{card.title}</h2>
            <p className="text-sm text-gray-400">{card.description}</p>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Home;
