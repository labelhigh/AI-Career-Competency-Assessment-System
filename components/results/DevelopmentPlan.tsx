import React from 'react';
import { DevelopmentSuggestion } from '../../types';
import { Zap } from 'lucide-react';

interface DevelopmentPlanProps {
  suggestions: DevelopmentSuggestion[];
}

const DevelopmentPlan: React.FC<DevelopmentPlanProps> = ({ suggestions }) => (
  <section className="p-6 bg-amber-50 border border-amber-200 rounded-xl animate-slide-in" style={{ animationDelay: '600ms' }}>
    <h3 className="text-xl font-bold text-amber-800 mb-4 flex items-center">
      <Zap className="w-5 h-5 mr-2" />
      個人成長建議
    </h3>
    <div className="space-y-4">
      {suggestions.map((dev, index) => (
        <div key={index}>
          <p className="font-semibold text-slate-800 text-md">{dev.area}</p>
          <p className="text-slate-600">{dev.suggestion}</p>
        </div>
      ))}
    </div>
  </section>
);

export default DevelopmentPlan;