export default function EventNav({ sections }) {
  return (
    <nav className="sticky top-0 bg-white shadow-md z-50">
      <div className="max-w-screen-xl mx-auto px-6 py-4">
        <ul className="flex justify-center gap-8 overflow-x-auto">
          {sections.map((section, idx) => (
            <li key={idx}>
              <a
                href={`#${section.toLowerCase()}`}
                className="text-gray-800 font-semibold hover:text-blue-600 transition-colors duration-200 ease-in-out whitespace-nowrap"
              >
                {section}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
