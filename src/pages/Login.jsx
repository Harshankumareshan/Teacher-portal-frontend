import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { loginUser } from '../services/api';
import Header from '../components/Header'
import Footer from '../components/Footer'
import backgroundImage from '../../public/bg.jpg';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await loginUser({ email, password });
      // console.log('Received token:', response.token); 
      
      if (response.token) {
        localStorage.setItem('token', response.token);
        navigate('/notes');
      } else {
        setError('Login failed: token not received');
      }
    } catch (error) {
      setError('Login failed: ' + (error.message || 'Unknown error'));
    }
  };

  return (
    <>
   <Header />
      <div className="min-h-screen flex items-center justify-center bg-cover" style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="bg-white p-8 rounded shadow-lg max-w-lg w-full">
          <h2 className="text-3xl font-bold mb-4 text-red-600">Login</h2>
          {error && <p className="text-red-500 mb-4">{error}</p>}
          <form onSubmit={handleLogin}  className="space-y-4"> 
            <div>
              <label htmlFor="email" className="block text-gray-700">Email:</label>
              <input id="email" type="text" value={email} onChange={(e) => setEmail(e.target.value)} className="border border-gray-300 rounded px-4 py-2 w-full" />
            </div>
            <div>
              <label htmlFor="password" className="block text-gray-700">Password:</label>
              <input id="password" type="text" value={password} onChange={(e) => setPassword(e.target.value)} className="border border-gray-300 rounded px-4 py-2 w-full" />
            </div>
            <button type="submit" className="bg-red-400 text-white py-2 px-4 w-full rounded hover:bg-red-600 transition duration-300">Login</button>
           </form>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Login;
