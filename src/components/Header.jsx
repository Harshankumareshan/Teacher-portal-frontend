import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleSignup = () => {
    navigate('/signup');
  };

  const handleHomepage = () => {
    navigate('/');
  };

  const handleLogin = () => {
    navigate('/login');
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="top-0 py-1 lg:py-2 w-full bg-transparent lg:relative z-50 bg-white">
      <nav className="z-10 sticky top-0 left-0 right-0 max-w-4xl xl:max-w-5xl mx-auto px-5 py-2.5 lg:border-none lg:py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <h2 className="text-red-600 dark:text-white font-bold text-4xl">Tailwebs.</h2>
          </div>
          <div className="hidden lg:flex lg:items-center gap-x-2">
            <ul className="flex space-x-10 text-base font-bold text-black">
              <li>
                <a href="#" onClick={handleHomepage}>Home</a>
              </li>
              <li>
                <a href="#">Our services</a>
              </li>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
            </ul>
            <button
              className="flex items-center text-black justify-center px-6 py-2.5 font-semibold"
              onClick={handleSignup}
            >
              Sign up
            </button>
            <button
              className="flex items-center justify-center rounded-md bg-red-500 px-6 py-2.5 font-semibold hover:shadow-lg hover:drop-shadow transition duration-200"
              onClick={handleLogin}
            >
              Login
            </button>
          </div>
          <button onClick={toggleMenu} className="lg:hidden focus:outline-none">
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 20 20"
              aria-hidden="true"
              className="text-2xl text-slate-800 dark:text-white focus:outline-none active:scale-110 active:text-red-500"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>
        </div>
        <div className={`lg:hidden ${isMenuOpen ? '' : 'hidden'}`}>
          <ul className="flex flex-col items-center space-y-4 text-base font-bold text-black">
            <li>
              <a href="#" onClick={handleHomepage}>Home</a>
            </li>
            <li>
              <a href="#">Our services</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
          <div className="flex justify-center space-x-2 mt-4">
            <button
              className="flex items-center text-black justify-center px-6 py-2.5 font-semibold"
              onClick={handleSignup}
            >
              Sign up
            </button>
            <button
              className="flex items-center justify-center rounded-md bg-red-500 px-6 py-2.5 font-semibold hover:shadow-lg hover:drop-shadow transition duration-200"
              onClick={handleLogin}
            >
              Login
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
