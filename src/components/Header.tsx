import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Menu, X, BookOpen } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-lg">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <BookOpen className="text-pink-600" size={32} />
            <span className="text-xl font-bold text-gray-800">Lokendra Lodhi</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-600 hover:text-pink-600 transition-colors">Home</Link>
            <Link to="/about" className="text-gray-600 hover:text-pink-600 transition-colors">About</Link>
            <Link to="/program" className="text-gray-600 hover:text-pink-600 transition-colors">Program</Link>
            <button 
              onClick={() => navigate('/register')}
              className="bg-pink-600 text-white px-6 py-2 rounded-full hover:bg-pink-700 transition-colors"
            >
              Register Now
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-gray-600 hover:text-pink-600 transition-colors"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4">
            <div className="flex flex-col space-y-4">
              <Link to="/" className="text-gray-600 hover:text-pink-600 transition-colors">Home</Link>
              <Link to="/about" className="text-gray-600 hover:text-pink-600 transition-colors">About</Link>
              <Link to="/program" className="text-gray-600 hover:text-pink-600 transition-colors">Program</Link>
              <button 
                onClick={() => {
                  navigate('/register');
                  setIsMenuOpen(false);
                }}
                className="bg-pink-600 text-white px-6 py-2 rounded-full hover:bg-pink-700 transition-colors"
              >
                Register Now
              </button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;