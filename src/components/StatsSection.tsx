import React from 'react';
import { Star, Users, Award, Globe } from 'lucide-react';

const StatsSection: React.FC = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Class Awards Card */}
            <div className="bg-gradient-to-br from-pink-500 to-purple-600 rounded-2xl p-8 shadow-lg transform hover:scale-105 transition-all duration-300">
              <div className="flex items-center justify-center w-16 h-16 bg-white bg-opacity-20 rounded-full mb-4 backdrop-blur-sm">
                <Award className="text-white" size={32} />
              </div>
              <div className="text-3xl font-bold text-white mb-2">100+</div>
              <div className="text-pink-100">Class Awards</div>
            </div>

            {/* Happy Students Card */}
            <div className="bg-gradient-to-br from-blue-500 to-cyan-600 rounded-2xl p-8 shadow-lg transform hover:scale-105 transition-all duration-300">
              <div className="flex items-center justify-center w-16 h-16 bg-white bg-opacity-20 rounded-full mb-4 backdrop-blur-sm">
                <Users className="text-white" size={32} />
              </div>
              <div className="text-3xl font-bold text-white mb-2">10,000+</div>
              <div className="text-blue-100">Happy Students</div>
            </div>

            {/* Five Stars Card */}
            <div className="bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl p-8 shadow-lg transform hover:scale-105 transition-all duration-300">
              <div className="flex items-center justify-center w-16 h-16 bg-white bg-opacity-20 rounded-full mb-4 backdrop-blur-sm">
                <Globe className="text-white" size={32} />
              </div>
              <div className="text-3xl font-bold text-white mb-2">2000+</div>
              <div className="text-green-100">Five Stars</div>
            </div>
          </div>

          {/* Rating Card */}
          <div className="mt-12 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-2xl p-8 shadow-lg">
            <div className="flex items-center justify-center space-x-3">
              <div className="flex">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star 
                    key={star}
                    size={32} 
                    className="text-white fill-current drop-shadow-md"
                  />
                ))}
              </div>
              <span className="text-2xl font-bold text-white">Excellent 4.7 out of 5</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;