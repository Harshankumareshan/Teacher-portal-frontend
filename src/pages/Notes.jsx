import React, { useState, useEffect } from 'react';
import { getNotes, createNote, deleteNoteById, updateNoteById } from '../services/api';
import { useNavigate } from 'react-router-dom';
import EditNoteModal from '../components/EditNoteModal';
import Sidebar from '../components/Sidebar';

function Notes() {
  const [notes, setNotes] = useState([]);
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [standard, setStandard] = useState('');
  const [marks, setMarks] = useState(0);
  const [error, setError] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editNote, setEditNote] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      navigate('/login');
    } else {
      const fetchNotes = async () => {
        try {
          const data = await getNotes(token);
          setNotes(data);
        } catch (err) {
          setError(err.message);
        }
      };
      fetchNotes();
    }
  }, [navigate]);

  const handleAddNote = () => {
    setTitle('');
    setBody('');
    setStandard('');
    setMarks(0);
    setIsModalOpen(true);
    setEditNote(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem('token');
    if (!token) {
      setError('No token found, please login');
      navigate('/login');
      return;
    }
    try {
      if (editNote) {
        await updateNoteById(editNote._id, { title, body, standard, marks }, token);
      } else {
        await createNote({ title, body, standard, marks }, token);
      }
      const data = await getNotes(token);
      setNotes(data);
      setError('');
      setIsModalOpen(false);
    } catch (err) {
      setError(err.message);
    }
  };

  const handleEdit = (note) => {
    setEditNote(note);
    setTitle(note.title);
    setBody(note.body);
    setStandard(note.standard);
    setMarks(note.marks);
    setIsModalOpen(true);
  };

  const handleDelete = async (noteId) => {
    const token = localStorage.getItem('token');
    if (!token) {
      setError('No token found, please login');
      navigate('/login');
      return;
    }
    try {
      await deleteNoteById(noteId, token);
      const updatedNotes = notes.filter((note) => note._id !== noteId);
      setNotes(updatedNotes);
    } catch (err) {
      setError(err.message);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  return (
    <div className="flex flex-col md:flex-row h-screen">
      <Sidebar onAddNote={handleAddNote} onLogout={handleLogout} />
      <div className="flex-grow overflow-auto pl-0 md:pl-64">
        <h1 className='text-4xl text-center font-bold pt-6 pb-6 mb-6 bg-gray-900 text-white'>Welcome To Teacher Portal</h1>
        <div className="mb-4 pl-0 md:pl-64">
          <h2 className="text-2xl font-bold">Students List</h2>
        </div>
        {error && <p className="text-red-500">{error}</p>}
        <EditNoteModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          onSubmit={handleSubmit}
          title={title}
          setTitle={setTitle}
          body={body}
          setBody={setBody}
          standard={standard}
          setStandard={setStandard}
          marks={marks}
          setMarks={setMarks}
          editNote={editNote}
        />
        <div className="overflow-x-auto pl-4 pr-4 md:pr-0">
          <table className="min-w-full bg-white border">
            <thead>
              <tr>
                <th className="border px-4 py-2">S.No</th>
                <th className="border px-4 py-2">Name</th>
                <th className="border px-4 py-2">Subject</th>
                <th className="border px-4 py-2">Class</th>
                <th className="border px-4 py-2">Marks</th>
                <th className="border px-4 py-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              {notes.map((note, index) => (
                <tr key={note._id} className="bg-white text-center md:bg-gray-100">
                  <td className="border px-4 py-2">{index + 1}</td>
                  <td className="border px-4 py-2">{note.title}</td>
                  <td className="border px-4 py-2">{note.body}</td>
                  <td className="border px-4 py-2">{note.standard}</td>
                  <td className="border px-4 py-2">{note.marks}</td>
                  <td className="border px-4 py-2">
                    <button
                      className="inline-block px-4 py-2 bg-green-600 hover:bg-green-700 text-white text-sm font-medium rounded-md mr-2 mb-2 md:mb-0"
                      onClick={() => handleEdit(note)}
                    >
                      Edit
                    </button>
                    <button
                      className="inline-block px-4 py-2 bg-red-600 hover:bg-red-700 text-white text-sm font-medium rounded-md"
                      onClick={() => handleDelete(note._id)}
                    >
                     Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Notes;
