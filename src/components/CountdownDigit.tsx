import React from 'react';

interface CountdownDigitProps {
  value: number;
  label: string;
}

const CountdownDigit: React.FC<CountdownDigitProps> = ({ value, label }) => {
  // Ensure value is displayed as 2 digits
  const displayValue = value < 10 ? `0${value}` : value.toString();
  
  return (
    <div className="flex flex-col items-center">
      <div className="bg-gray-800 text-white text-2xl md:text-3xl font-mono font-bold 
                     w-14 h-14 md:w-16 md:h-16 flex items-center justify-center rounded-md 
                     animate-pulse">
        {displayValue}
      </div>
      <span className="text-xs mt-1 text-gray-600">{label}</span>
    </div>
  );
};

export default CountdownDigit;