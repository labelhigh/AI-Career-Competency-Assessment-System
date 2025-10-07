import React, { useState, useMemo } from 'react';
import { Question } from '../../types';
import { X, Check } from 'lucide-react';

interface Props {
  question: Question;
  onAnswer: (questionId: string, answerValue: string[]) => void;
}

const QuestionCardSwipe: React.FC<Props> = ({ question, onAnswer }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [likedIds, setLikedIds] = useState<string[]>([]);
  const [exitAnimation, setExitAnimation] = useState<'left' | 'right' | null>(null);

  const allCards = useMemo(() => question.cards || [], [question.cards]);
  const hasMoreCards = currentIndex < allCards.length;

  const handleSwipe = (direction: 'left' | 'right') => {
    if (exitAnimation || !hasMoreCards) return;

    setExitAnimation(direction);

    setTimeout(() => {
      const swipedCard = allCards[currentIndex];
      const newLikedIds = direction === 'right' ? [...likedIds, swipedCard.id] : likedIds;
      setLikedIds(newLikedIds);

      const nextIndex = currentIndex + 1;

      if (nextIndex >= allCards.length) {
        // Last card was swiped, finish.
        onAnswer(question.id, newLikedIds);
      } else {
        // Move to next card
        setCurrentIndex(nextIndex);
        setExitAnimation(null);
      }
    }, 500); // Corresponds to animation duration in tailwind.config
  };
  
  // We want to render a few cards to show a stack effect
  const CARDS_TO_DISPLAY = 3;
  const cardsInStack = useMemo(() => {
      if (!hasMoreCards) return [];
      return allCards.slice(currentIndex, currentIndex + CARDS_TO_DISPLAY);
  }, [currentIndex, allCards, hasMoreCards]);


  return (
    <div>
      <p className="text-sm font-semibold text-primary mb-2">{question.dimension}</p>
      <h2 className="text-2xl font-bold text-slate-800 mb-6 text-center">{question.text}</h2>
      
      <div className="relative h-64 flex items-center justify-center">
        {hasMoreCards ? (
          cardsInStack.reverse().map((card, index) => {
            const cardPosition = cardsInStack.length - 1 - index; // 0 for the top card, 1 for the next, etc.
            const isTopCard = cardPosition === 0;

            const style: React.CSSProperties = {
              transform: `scale(${1 - cardPosition * 0.05}) translateY(${cardPosition * 15}px)`,
              zIndex: 10 - cardPosition,
              opacity: 1 - cardPosition * 0.4,
              transition: 'transform 0.4s ease-out, opacity 0.4s ease-out',
            };
            
            let animationClass = '';
            if (isTopCard && exitAnimation) {
              animationClass = exitAnimation === 'left' ? 'animate-card-slide-out-left' : 'animate-card-slide-out-right';
              // When animating out, we don't want the transition to fight it
              style.transition = '';
            }

            return (
              <div
                key={card.id}
                className={`absolute w-full max-w-sm h-56 p-6 bg-white rounded-2xl shadow-xl border flex items-center justify-center text-center ${animationClass}`}
                style={style}
              >
                <p className="text-xl font-semibold text-slate-700">{card.text}</p>
              </div>
            );
          })
        ) : (
          <div className="text-center animate-fade-in">
            <p className="text-xl font-semibold text-slate-500">已完成此部分！</p>
          </div>
        )}
      </div>

      <div className="flex justify-center items-center space-x-8 mt-8">
        <button 
          onClick={() => handleSwipe('left')} 
          disabled={!hasMoreCards || exitAnimation !== null}
          aria-label="不感興趣"
          className="w-20 h-20 rounded-full bg-white border-2 border-red-500 text-red-500 flex items-center justify-center shadow-lg transform hover:scale-110 transition-transform duration-200 disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus:ring-4 focus:ring-red-200">
          <X size={40} />
        </button>
        <button 
          onClick={() => handleSwipe('right')}
          disabled={!hasMoreCards || exitAnimation !== null}
          aria-label="感興趣"
          className="w-20 h-20 rounded-full bg-white border-2 border-green-500 text-green-500 flex items-center justify-center shadow-lg transform hover:scale-110 transition-transform duration-200 disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus:ring-4 focus:ring-green-200">
          <Check size={40} />
        </button>
      </div>
    </div>
  );
};

export default QuestionCardSwipe;
