import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { registerUser } from '../services/api';
import Header from '../components/Header'
import Footer from '../components/Footer'
import backgroundImage from '../../public/bg.jpg';

function Signup() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await registerUser({ name, email, password });
      navigate('/login');
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <>
    <Header/>
    <div className="min-h-screen flex items-center justify-center bg-cover" style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <div className="bg-white p-12 rounded-lg shadow-2xl max-w-lg w-full">
        <h2 className="text-3xl font-bold mb-6 text-red-600">Signup</h2>
        {error && <p className="text-red-500 mb-4">{error}</p>}
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-gray-700 font-medium">Name:</label>
            <input id="name" type="text" value={name} onChange={(e) => setName(e.target.value)} className="border border-gray-300 rounded px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-indigo-400" />
          </div>
          <div>
            <label htmlFor="email" className="block text-gray-700 font-medium">Email:</label>
            <input id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="border border-gray-300 rounded px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-indigo-400" />
          </div>
          <div>
            <label htmlFor="password" className="block text-gray-700 font-medium">Password:</label>
            <input id="password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="border border-gray-300 rounded px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-indigo-400" />
          </div>
          <button type="submit" className="bg-red-400 text-white py-2 px-4 w-full rounded hover:bg-red-600 transition duration-300">Signup</button>
        </form>
      </div>
    </div>
    <Footer/> 
    </>
    
      
  );
}

export default Signup;
