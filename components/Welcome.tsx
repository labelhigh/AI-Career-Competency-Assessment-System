import React from 'react';
import { Compass } from 'lucide-react';

interface WelcomeProps {
  onStart: () => void;
}

const Welcome: React.FC<WelcomeProps> = ({ onStart }) => {
  return (
    <div className="text-center p-8 bg-white shadow-xl rounded-2xl animate-fade-in">
      <div className="flex justify-center items-center mb-6">
        <div className="p-4 bg-primary-light rounded-full">
            <Compass className="w-12 h-12 text-primary" />
        </div>
      </div>
      <h1 className="text-4xl font-bold text-primary-dark mb-4">探索您的未來職涯</h1>
      <p className="text-slate-600 max-w-2xl mx-auto mb-8">
        這不僅僅是又一個性格測驗。我們由 AI 驅動的評估會分析您獨特的技能、價值觀和潛力，提供一份前瞻性、個人化的職涯路線圖。在這裡找到的不只是一份工作，而是一份使命。
      </p>
      <button
        onClick={onStart}
        className="bg-primary hover:bg-primary-dark text-white font-bold py-3 px-8 rounded-full shadow-lg transform hover:scale-105 transition-all duration-300 ease-in-out focus:outline-none focus:ring-4 focus:ring-primary/50"
      >
        開始評估 (約 2 分鐘)
      </button>
    </div>
  );
};

export default Welcome;