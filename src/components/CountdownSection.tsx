import React, { useState, useEffect } from 'react';
import CountdownDigit from './CountdownDigit';

const CountdownSection: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 30,
    hours: 1,
    minutes: 42,
    seconds: 20
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        let { days, hours, minutes, seconds } = prev;
        
        if (seconds > 0) {
          seconds -= 1;
        } else {
          seconds = 59;
          if (minutes > 0) {
            minutes -= 1;
          } else {
            minutes = 59;
            if (hours > 0) {
              hours -= 1;
            } else {
              hours = 23;
              if (days > 0) {
                days -= 1;
              }
            }
          }
        }
        
        return { days, hours, minutes, seconds };
      });
    }, 1000);
    
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-6">
          REGISTRATION FOR THE NEXT MASTERCLASS CLOSES SOON
        </h2>
        
        <div className="flex justify-center gap-4 mb-8">
          <CountdownDigit value={timeLeft.days} label="DAYS" />
          <CountdownDigit value={timeLeft.hours} label="HOURS" />
          <CountdownDigit value={timeLeft.minutes} label="MINUTES" />
          <CountdownDigit value={timeLeft.seconds} label="SECONDS" />
        </div>
        
        <button className="bg-yellow-400 px-6 py-3 font-bold text-gray-800 transform hover:scale-105 transition duration-300">
          RESERVE YOUR SPOT
        </button>
      </div>
    </section>
  );
};

export default CountdownSection;