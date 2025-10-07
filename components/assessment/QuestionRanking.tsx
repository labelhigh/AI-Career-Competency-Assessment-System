import React, { useState, useRef } from 'react';
import { Question, QuestionOption } from '../../types';
import { GripVertical } from 'lucide-react';

interface Props {
  question: Question;
  onAnswer: (questionId: string, answerValue: string[]) => void;
}

const QuestionRanking: React.FC<Props> = ({ question, onAnswer }) => {
  const [items, setItems] = useState<QuestionOption[]>(question.items || []);
  const draggedItem = useRef<number | null>(null);
  const dragOverItem = useRef<number | null>(null);

  const handleDragStart = (e: React.DragEvent<HTMLLIElement>, position: number) => {
    draggedItem.current = position;
    e.dataTransfer.effectAllowed = 'move';
  };

  const handleDragEnter = (e: React.DragEvent<HTMLLIElement>, position: number) => {
    dragOverItem.current = position;
    const newItems = [...items];
    const item = newItems[draggedItem.current!];
    newItems.splice(draggedItem.current!, 1);
    newItems.splice(dragOverItem.current!, 0, item);
    draggedItem.current = dragOverItem.current;
    dragOverItem.current = null;
    setItems(newItems);
  };

  const handleSubmit = () => {
    const answerValue = items.map(item => item.value);
    onAnswer(question.id, answerValue);
  };

  return (
    <div>
      <p className="text-sm font-semibold text-primary mb-2">{question.dimension}</p>
      <h2 className="text-2xl font-bold text-slate-800 mb-6">{question.text}</h2>
      
      <ul className="space-y-3">
        {items.map((item, index) => (
          <li
            key={item.value}
            className="flex items-center p-4 bg-white border-2 border-slate-200 rounded-lg cursor-grab active:cursor-grabbing active:bg-primary-light"
            draggable
            onDragStart={(e) => handleDragStart(e, index)}
            onDragEnter={(e) => handleDragEnter(e, index)}
            onDragOver={(e) => e.preventDefault()}
          >
            <GripVertical className="w-5 h-5 text-slate-400 mr-4" />
            <span className="font-medium text-slate-700">{item.text}</span>
          </li>
        ))}
      </ul>

      <div className="mt-8 text-center">
        <button
          onClick={handleSubmit}
          className="bg-primary hover:bg-primary-dark text-white font-bold py-3 px-8 rounded-full shadow-lg transform hover:scale-105 transition-all duration-300"
        >
          確認排序並繼續
        </button>
      </div>
    </div>
  );
};

export default QuestionRanking;