import { useNavigate } from 'react-router-dom';

const SelectTemplate = () => {
  const navigate = useNavigate();

  const handleSelect = (template) => {
    localStorage.setItem('selectedTemplate', template);
    navigate('/create-event');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-gray-100 flex flex-col items-center justify-center px-6 py-12">
      <div className="text-center space-y-5">
        <h1 className="text-5xl font-bold text-gray-900 tracking-tight">
          Choose Your Event Style
        </h1>
        <p className="text-lg text-gray-600 max-w-xl mx-auto">
          Select a template that reflects your event’s personality—whether you
          prefer timeless structure or sleek innovation.
        </p>
      </div>

      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-10 w-full max-w-4xl">
        <button
          onClick={() => handleSelect('classic')}
          className="group relative bg-white border border-gray-300 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 p-8 text-left overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-black to-white opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl z-0" />
          <div className="relative z-10 space-y-3">
            <h2 className="text-3xl font-semibold text-gray-900 group-hover:text-white transition-colors">
              Classic
            </h2>
            <p className="text-gray-700 group-hover:text-gray-200 leading-relaxed transition-colors">
              A structured layout with formal agenda, speaker highlights, and
              gallery sections. Ideal for traditional conferences and
              ceremonies.
            </p>
          </div>
        </button>

        <button
          onClick={() => handleSelect('modern')}
          className="group relative bg-white border border-gray-300 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 p-8 text-left overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl z-0" />
          <div className="relative z-10 space-y-3">
            <h2 className="text-3xl font-semibold text-indigo-700 group-hover:text-white transition-colors">
              Modern
            </h2>
            <p className="text-gray-700 group-hover:text-gray-100 leading-relaxed transition-colors">
              A sleek, modular design with dynamic media blocks and flexible
              agenda. Perfect for tech events, product launches, and creative
              showcases.
            </p>
          </div>
        </button>
      </div>
    </div>
  );
};

export default SelectTemplate;
