import React from 'react';

function EditNoteModal({ isOpen, onClose, onSubmit, title, setTitle, body, setBody, standard, setStandard, marks, setMarks, editNote }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(e);
  };

  return (
    <div className={`fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 ${isOpen ? '' : 'hidden'}`}>
      <div className="bg-white p-4 rounded shadow-lg w-full md:w-1/2 lg:w-1/3">
        <h2 className="text-xl md:text-2xl font-bold mb-2 md:mb-4">{editNote ? 'Edit student' : 'Add student'}</h2>
        <form onSubmit={handleSubmit} className="space-y-2 md:space-y-4">
          <div>
            <label className="block text-sm md:text-base">Student Name</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full px-2 md:px-4 py-1 md:py-2 border rounded text-sm md:text-base"
              required
            />
          </div>
          <div>
            <label className="block text-sm md:text-base">Subject Name</label>
            <textarea
              value={body}
              onChange={(e) => setBody(e.target.value)}
              className="w-full px-2 md:px-4 py-1 md:py-2 border rounded text-sm md:text-base"
              required
            ></textarea>
          </div>
          <div>
            <label className="block text-sm md:text-base">Standard</label>
            <input
              type="text"
              value={standard}
              onChange={(e) => setStandard(e.target.value)}
              className="w-full px-2 md:px-4 py-1 md:py-2 border rounded text-sm md:text-base"
              required
            />
          </div>
          <div>
            <label className="block text-sm md:text-base">Marks</label>
            <input
              type="number"
              value={marks}
              onChange={(e) => setMarks(e.target.value)}
              className="w-full px-2 md:px-4 py-1 md:py-2 border rounded text-sm md:text-base"
              required
            />
          </div>
          <div className="flex justify-end space-x-2 md:space-x-4">
            <button
              type="button"
              className="py-1 md:py-2 px-2 md:px-4 bg-gray-300 rounded text-sm md:text-base"
              onClick={onClose}
            >
              Cancel
            </button>
            <button type="submit" className="py-1 md:py-2 px-2 md:px-4 bg-blue-500 text-white rounded text-sm md:text-base">
              {editNote ? 'Update' : 'Add'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default EditNoteModal;
