import React, { useState } from 'react';
import { ASSESSMENT_QUESTIONS } from '../../constants';
import { UserAnswers, Answer } from '../../types';

// 動態引入所有問題元件
import QuestionMultipleChoice from './assessment/QuestionMultipleChoice';
import QuestionRanking from './assessment/QuestionRanking';
import QuestionSliders from './assessment/QuestionSliders';
import QuestionCardSwipe from './assessment/QuestionCardSwipe';

const Assessment: React.FC<{ onComplete: (answers: UserAnswers) => void }> = ({ onComplete }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<UserAnswers>({});
  const [animationState, setAnimationState] = useState<'in' | 'out'>('in');
  
  const currentQuestion = ASSESSMENT_QUESTIONS[currentQuestionIndex];
  const progress = ((currentQuestionIndex + 1) / ASSESSMENT_QUESTIONS.length) * 100;

  const handleNext = (questionId: string, answerValue: Answer) => {
    setAnimationState('out');
    
    setTimeout(() => {
      const newAnswers = { ...answers, [questionId]: answerValue };
      setAnswers(newAnswers);

      if (currentQuestionIndex < ASSESSMENT_QUESTIONS.length - 1) {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
        setAnimationState('in');
      } else {
        onComplete(newAnswers);
      }
    }, 300); // 對應滑出動畫時長
  };
  
  const animationClasses = animationState === 'in' ? 'animate-slide-in-right' : 'animate-slide-out-left';

  const renderQuestionComponent = () => {
    switch (currentQuestion.type) {
      case 'ranking':
        return <QuestionRanking question={currentQuestion} onAnswer={handleNext} />;
      case 'sliders':
        return <QuestionSliders question={currentQuestion} onAnswer={handleNext} />;
      case 'card-swipe':
        return <QuestionCardSwipe question={currentQuestion} onAnswer={handleNext} />;
      case 'multiple-choice':
      case 'sjt':
      default:
        return <QuestionMultipleChoice question={currentQuestion} onAnswer={handleNext} />;
    }
  };

  return (
    <div className="bg-white p-8 rounded-2xl shadow-xl w-full overflow-hidden min-h-[500px]">
      {/* 進度條 */}
      <div className="mb-8">
        <div className="flex justify-between mb-2">
          <span className="text-base font-medium text-primary-dark">進度</span>
          <span className="text-sm font-medium text-primary-dark">{currentQuestionIndex + 1} / {ASSESSMENT_QUESTIONS.length}</span>
        </div>
        <div className="w-full bg-primary-light rounded-full h-3">
          <div className="bg-primary h-3 rounded-full transition-all duration-500 ease-out" style={{ width: `${progress}%` }}></div>
        </div>
      </div>

      {/* 問題容器 */}
      <div key={currentQuestionIndex} className={animationClasses}>
        {renderQuestionComponent()}
      </div>
    </div>
  );
};

export default Assessment;