import React, { useState, useCallback } from 'react';
import Welcome from './components/Welcome';
import Assessment from './components/Assessment';
import Loading from './components/Loading';
import Results from './components/Results';
import { AssessmentResult, UserAnswers } from './types';
import { generateCareerReport } from './services/geminiService';

type AppState = 'welcome' | 'assessment' | 'loading' | 'results';

const App: React.FC = () => {
  const [appState, setAppState] = useState<AppState>('welcome');
  const [results, setResults] = useState<AssessmentResult | null>(null);
  const [error, setError] = useState<string | null>(null);

  const startAssessment = () => {
    setAppState('assessment');
    setResults(null);
    setError(null);
  };

  const handleAssessmentComplete = useCallback(async (answers: UserAnswers) => {
    setAppState('loading');
    try {
      const report = await generateCareerReport(answers);
      setResults(report);
      setAppState('results');
    } catch (err) {
      console.error("Error generating report:", err);
      setError("產生報告時發生問題，請稍後再試。");
      setAppState('results'); // Show results screen with error message
    }
  }, []);

  const renderContent = () => {
    switch (appState) {
      case 'assessment':
        return <Assessment onComplete={handleAssessmentComplete} />;
      case 'loading':
        return <Loading />;
      case 'results':
        return <Results result={results} error={error} onRetake={startAssessment} />;
      case 'welcome':
      default:
        return <Welcome onStart={startAssessment} />;
    }
  };

  return (
    <div className="bg-gradient-to-br from-primary-light via-slate-50 to-white min-h-screen text-slate-800 font-sans flex flex-col items-center justify-center p-4 selection:bg-primary/20">
      <main className="w-full max-w-4xl mx-auto">
        {renderContent()}
      </main>
       <footer className="w-full max-w-4xl mx-auto text-center py-4 mt-8">
          <p className="text-sm text-slate-500">&copy; {new Date().getFullYear()} AI 職業合格度測試. 保留所有權利.</p>
      </footer>
    </div>
  );
};

export default App;