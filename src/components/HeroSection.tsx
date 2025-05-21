import React from 'react';
import { useNavigate } from 'react-router-dom';
import { BookOpen } from 'lucide-react';

const HeroSection: React.FC = () => {
  const navigate = useNavigate();

  return (
    <section className="relative bg-gradient-to-b from-pink-500 to-pink-400 overflow-hidden pt-16">
      {/* Decorative circles */}
      <div className="absolute top-0 left-0 right-0 h-20 bg-white" style={{
        borderRadius: '0 0 50% 50%/0 0 100% 100%',
        transform: 'scaleX(1.5)'
      }}></div>
      
      {/* Main content */}
      <div className="container mx-auto px-4 pt-8 pb-24">
        <div className="text-center mb-8">
          <div className="inline-flex items-center bg-yellow-300 px-6 py-2 rounded-full text-gray-800 font-semibold">
            <BookOpen size={20} className="mr-2" />
            13TH AND 14TH MAY 2025 6:00 PM - 7:30 PM
          </div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl p-8 shadow-xl">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-black text-gray-800 text-center mb-8 leading-tight">
              YOUR CHILD CAN START READING
              <br />
              AT HOME - EVEN BEFORE AGE 3
            </h1>

            <div className="text-center mb-12">
              <button 
                onClick={() => navigate('/register')}
                className="bg-yellow-400 hover:bg-yellow-500 transform hover:scale-105 transition-all duration-300 px-8 py-4 rounded-full font-bold text-gray-800 text-lg shadow-lg"
              >
                RESERVE YOUR SPOT - ₹5,499
              </button>
              <div className="text-gray-500 mt-3 text-sm">(proof below)</div>
            </div>

            <div className="flex flex-col md:flex-row items-center gap-12">
              <div className="flex-1">
                <img 
                  src="https://images.pexels.com/photos/3755511/pexels-photo-3755511.jpeg"
                  alt="Parent teaching child to read" 
                  className="rounded-2xl shadow-lg w-full object-cover"
                />
              </div>

              <div className="flex-1 space-y-8">
                <div className="bg-pink-50 rounded-xl p-6">
                  <h2 className="text-xl md:text-2xl font-bold text-pink-600 mb-4">
                    Join the World's Highest-Rated Online Masterclass
                  </h2>
                  <p className="text-gray-700">
                    (for Parents) Learn simple, science-backed techniques to teach your child to read — in just 15 minutes a day.
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-6">
                  <div className="bg-green-50 rounded-xl p-6 text-center">
                    <div className="text-2xl font-bold text-green-600">239+</div>
                    <div className="text-sm text-green-700">Happy Parents</div>
                  </div>
                  <div className="bg-blue-50 rounded-xl p-6 text-center">
                    <div className="text-2xl font-bold text-blue-600">59</div>
                    <div className="text-sm text-blue-700">Countries</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;