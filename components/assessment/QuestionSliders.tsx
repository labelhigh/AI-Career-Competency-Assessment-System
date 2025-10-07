import React, { useState } from 'react';
import { Question } from '../../types';

interface Props {
  question: Question;
  onAnswer: (questionId: string, answerValue: Record<string, number>) => void;
}

const QuestionSliders: React.FC<Props> = ({ question, onAnswer }) => {
  const initialAnswers = (question.sliders || []).reduce((acc, slider) => {
    acc[slider.id] = 50; // Default to middle value
    return acc;
  }, {} as Record<string, number>);

  const [sliderValues, setSliderValues] = useState<Record<string, number>>(initialAnswers);

  const handleSliderChange = (id: string, value: number) => {
    setSliderValues(prev => ({ ...prev, [id]: value }));
  };

  const handleSubmit = () => {
    onAnswer(question.id, sliderValues);
  };

  return (
    <div>
      <p className="text-sm font-semibold text-primary mb-2">{question.dimension}</p>
      <h2 className="text-2xl font-bold text-slate-800 mb-6">{question.text}</h2>
      
      <div className="space-y-6">
        {question.sliders?.map(slider => (
          <div key={slider.id}>
            <label htmlFor={slider.id} className="block mb-2 text-md font-medium text-slate-700">{slider.label}</label>
            <div className="flex items-center space-x-4">
              <input
                id={slider.id}
                type="range"
                min="0"
                max="100"
                value={sliderValues[slider.id]}
                onChange={(e) => handleSliderChange(slider.id, parseInt(e.target.value, 10))}
                className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-primary"
              />
              <span className="font-bold text-primary w-12 text-center">{sliderValues[slider.id]}</span>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 text-center">
        <button
          onClick={handleSubmit}
          className="bg-primary hover:bg-primary-dark text-white font-bold py-3 px-8 rounded-full shadow-lg transform hover:scale-105 transition-all duration-300"
        >
          繼續
        </button>
      </div>
    </div>
  );
};

export default QuestionSliders;