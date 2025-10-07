import React, { useState, useEffect } from 'react';
import { LOADING_MESSAGES } from '../constants';

const Loading: React.FC = () => {
  const [messageIndex, setMessageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setMessageIndex((prevIndex) => (prevIndex + 1) % LOADING_MESSAGES.length);
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center p-8 bg-white shadow-xl rounded-2xl w-full text-center animate-fade-in min-h-[300px]">
       <svg className="w-16 h-16 text-primary animate-pulse-fast" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
      </svg>
      <h2 className="text-2xl font-bold text-primary-dark mt-6 mb-2">正在為您客製化分析報告...</h2>
      <p className="text-slate-600 transition-opacity duration-500 ease-in-out">
        {LOADING_MESSAGES[messageIndex]}
      </p>
    </div>
  );
};

export default Loading;