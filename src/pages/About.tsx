import React from 'react';

const About: React.FC = () => {
  return (
    <main className="pt-24 pb-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-gray-800 mb-8">About Us</h1>
        <div className="bg-white rounded-2xl p-8 shadow-lg">
          <div className="prose max-w-none">
            <p className="text-lg text-gray-700 mb-6">
              We are passionate educators dedicated to revolutionizing early childhood education. Our mission is to empower parents with the knowledge and tools they need to give their children the best possible start in life through early reading.
            </p>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Our Mission</h2>
            <p className="text-lg text-gray-700 mb-6">
              To make early reading education accessible to every child, regardless of their background or circumstances. We believe that every child deserves the opportunity to develop strong literacy skills from an early age.
            </p>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Our Approach</h2>
            <p className="text-lg text-gray-700">
              Our methodology is based on years of research in early childhood development and education. We combine proven techniques with engaging, age-appropriate activities that make learning to read fun and natural for young children.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default About;