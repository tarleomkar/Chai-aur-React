// import { Link } from 'react-router-dom';

function Sidebar({ setTheme }) {
  const colors = [
    { name: 'Default', class: '' },
    { name: 'Red', class: 'theme-red' },
    { name: 'Green', class: 'theme-green' },
    { name: 'Black', class: 'theme-black' },
    { name: 'Yellow', class: 'theme-yellow' },
  ];

  return (
    <div className="w-64 bg-gray-800 text-white min-h-screen p-4">
      <h1 className="text-2xl font-bold mb-8">Dashboard</h1>

      <div>
        <h2 className="text-xl mb-4">Theme Colors</h2>
        <div className="space-y-2">
          {colors.map((color) => (
            <button
              key={color.name}
              onClick={() => setTheme(color.class)}
              className="w-full p-2 text-left hover:bg-gray-700 rounded"
            >
              {color.name}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
