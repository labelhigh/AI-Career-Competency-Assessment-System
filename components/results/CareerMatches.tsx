import React from 'react';
import { CareerMatch } from '../../types';
import { Target } from 'lucide-react';

interface CareerMatchesProps {
  matches: CareerMatch[];
}

const CareerMatches: React.FC<CareerMatchesProps> = ({ matches }) => (
  <section className="animate-slide-in" style={{ animationDelay: '400ms' }}>
    <h2 className="text-2xl font-bold text-slate-800 mb-4 flex items-center">
      <Target className="w-6 h-6 mr-3 text-primary" />
      最佳職業匹配
    </h2>
    <div className="space-y-4">
      {matches.map((match, index) => (
        <div key={index} className="p-5 border rounded-xl bg-white shadow-sm hover:shadow-lg transition-shadow duration-300">
          <div className="flex justify-between items-start mb-2">
            <h3 className="text-xl font-bold text-primary">{match.career}</h3>
            <span className="text-lg font-bold text-green-600 bg-green-100 px-4 py-1.5 rounded-full text-sm">{match.matchPercentage}% 匹配</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2.5 my-2">
            <div className="bg-green-500 h-2.5 rounded-full" style={{ width: `${match.matchPercentage}%` }}></div>
          </div>
          <p className="text-slate-600 mt-3">{match.reasoning}</p>
        </div>
      ))}
    </div>
  </section>
);

export default CareerMatches;