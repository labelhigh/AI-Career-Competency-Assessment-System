import React from 'react';
import { Star } from 'lucide-react';

interface StrengthsProps {
  strengths: string[];
}

const Strengths: React.FC<StrengthsProps> = ({ strengths }) => (
  <section className="p-6 bg-primary-light rounded-xl animate-slide-in" style={{ animationDelay: '500ms' }}>
    <h3 className="text-xl font-bold text-primary-dark mb-4 flex items-center">
      <Star className="w-5 h-5 mr-2" />
      您的主要優勢
    </h3>
    <ul className="space-y-3">
      {strengths.map((strength, index) => (
        <li key={index} className="flex items-start text-slate-700">
          <svg className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
          <span>{strength}</span>
        </li>
      ))}
    </ul>
  </section>
);

export default Strengths;