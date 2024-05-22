import React from 'react';

function Sidebar({ onAddNote, onLogout }) {
  return (
    <div className="w-full md:w-56 md:h-full bg-gray-900 text-white flex flex-col md:shadow-lg fixed top-0 left-0 z-10">
      <div className="flex items-center justify-center h-16 bg-gray-800">
        <h1 className="text-xl md:text-3xl text-red-600 font-semibold">Tailwebs</h1>
      </div>
      <nav className="flex-grow p-4">
        <ul>
          <li className="mb-2 md:mb-4">
            <button
              className="py-2 md:py-3 px-2 md:px-4 bg-blue-500 text-white rounded-lg w-full text-left hover:bg-blue-600 transition duration-300 text-sm md:text-base"
              onClick={onAddNote}
            >
              Add Student
            </button>
          </li>
          <li>
            <button
              className="py-2 md:py-3 px-2 md:px-4 bg-red-500 text-white rounded-lg w-full text-left hover:bg-red-600 transition duration-300 text-sm md:text-base"
              onClick={onLogout}
            >
              Logout
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Sidebar;
