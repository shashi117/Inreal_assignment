import React from 'react';
import HeroSection from '../components/HeroSection';
import StatsSection from '../components/StatsSection';
import CountdownSection from '../components/CountdownSection';

const Home: React.FC = () => {
  return (
    <main>
      <HeroSection />
      <StatsSection />
      <CountdownSection />
    </main>
  );
};

export default Home;