import React, { useState } from 'react';
import { Question } from '../../types';

interface Props {
  question: Question;
  onAnswer: (questionId: string, answerValue: string) => void;
}

const QuestionMultipleChoice: React.FC<Props> = ({ question, onAnswer }) => {
  const [selectedValue, setSelectedValue] = useState<string | null>(null);

  const handleSelect = (value: string) => {
    // Prevent multiple clicks while transitioning
    if (selectedValue) return;

    setSelectedValue(value);
    
    // Provide visual feedback for 300ms before calling the parent handler
    setTimeout(() => {
      onAnswer(question.id, value);
    }, 300);
  };

  return (
    <div>
      <p className="text-sm font-semibold text-primary mb-2">{question.dimension}</p>
      {question.type === 'sjt' && (
        <div className="bg-slate-100 p-4 rounded-lg mb-4 border-l-4 border-primary">
          <p className="font-semibold text-slate-800">情境:</p>
          <p className="text-slate-600">{question.scenario}</p>
        </div>
      )}
      <h2 className="text-2xl font-bold text-slate-800 mb-6">{question.text}</h2>
      
      <div className="space-y-4">
        {question.options?.map((option) => {
          const isSelected = selectedValue === option.value;
          return (
            <button
              key={option.value}
              onClick={() => handleSelect(option.value)}
              disabled={selectedValue !== null}
              className={`w-full text-left p-4 rounded-lg group transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary/50 disabled:cursor-not-allowed
                ${isSelected
                  ? 'bg-primary border-2 border-primary-dark shadow-lg transform scale-105'
                  : 'bg-white border-2 border-slate-200 hover:bg-primary-light hover:border-primary'
                }`}
            >
              <span className={`font-medium ${isSelected ? 'text-white' : 'text-slate-700 group-hover:text-primary-dark'}`}>
                {option.text}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default QuestionMultipleChoice;