import React from 'react';
import { BookOpen, Clock, Video, Award } from 'lucide-react';

const Program: React.FC = () => {
  return (
    <main className="pt-24 pb-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-gray-800 mb-8">Program Details</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">What You'll Learn</h2>
            <div className="space-y-4">
              <div className="flex items-start space-x-4">
                <BookOpen className="text-pink-600 mt-1" size={24} />
                <div>
                  <h3 className="font-bold text-gray-800">Proven Reading Techniques</h3>
                  <p className="text-gray-600">Science-backed methods that work for children under 3</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <Clock className="text-pink-600 mt-1" size={24} />
                <div>
                  <h3 className="font-bold text-gray-800">Time-Efficient Learning</h3>
                  <p className="text-gray-600">Just 15 minutes a day for effective results</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <Video className="text-pink-600 mt-1" size={24} />
                <div>
                  <h3 className="font-bold text-gray-800">Interactive Sessions</h3>
                  <p className="text-gray-600">Engaging video lessons and practical exercises</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Program Benefits</h2>
            <div className="space-y-4">
              <div className="flex items-start space-x-4">
                <Award className="text-pink-600 mt-1" size={24} />
                <div>
                  <h3 className="font-bold text-gray-800">Lifetime Access</h3>
                  <p className="text-gray-600">Access all materials forever, including updates</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <Award className="text-pink-600 mt-1" size={24} />
                <div>
                  <h3 className="font-bold text-gray-800">Community Support</h3>
                  <p className="text-gray-600">Join our community of parents and educators</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <Award className="text-pink-600 mt-1" size={24} />
                <div>
                  <h3 className="font-bold text-gray-800">Expert Guidance</h3>
                  <p className="text-gray-600">Direct access to experienced educators</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Program;