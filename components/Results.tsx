import React from 'react';
import { AssessmentResult } from '../types';
import { Download, Share2, RefreshCw } from 'lucide-react';
import SkillChart from './results/SkillChart';
import CareerMatches from './results/CareerMatches';
import Strengths from './results/Strengths';
import DevelopmentPlan from './results/DevelopmentPlan';

// Declare jsPDF from global window object
declare const jspdf: any;

interface ResultsProps {
  result: AssessmentResult | null;
  error: string | null;
  onRetake: () => void;
}

const Results: React.FC<ResultsProps> = ({ result, error, onRetake }) => {

  const handleDownload = () => {
    if (!result) return;
    const { jsPDF } = jspdf;
    const doc = new jsPDF();
    
    // This is a very basic PDF generation.
    // A more advanced implementation would require more complex formatting.
    doc.text(`職業檔案: ${result.personaTitle}`, 10, 10);
    doc.text(`摘要: ${result.summary}`, 10, 20);
    // ... add more content from result object
    doc.save('my-career-report.pdf');
  };

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href).then(() => {
      alert('報告連結已複製到剪貼簿！');
    });
  };

  if (error) {
    return (
      <div className="p-8 bg-white shadow-xl rounded-2xl animate-fade-in text-center">
        <h2 className="text-2xl font-bold text-red-600 mb-4">發生錯誤</h2>
        <p className="text-slate-600 mb-6">{error}</p>
        <button onClick={onRetake} className="bg-primary hover:bg-primary-dark text-white font-bold py-2 px-6 rounded-full flex items-center mx-auto">
          <RefreshCw className="w-4 h-4 mr-2" /> 再試一次
        </button>
      </div>
    );
  }

  if (!result) {
    // This state can be improved, maybe with a skeleton loader if data was being fetched.
    // For a mock, this is sufficient.
    return (
      <div className="p-8 bg-white shadow-xl rounded-2xl animate-fade-in text-center">
        <h2 className="text-2xl font-bold text-slate-700">正在載入報告...</h2>
      </div>
    );
  }

  const { personaTitle, summary, skillAnalysis, topStrengths, developmentSuggestions, careerMatches } = result;

  return (
    <div className="p-4 md:p-8 bg-slate-50 shadow-xl rounded-2xl animate-fade-in space-y-12">
      {/* Header */}
      <header className="text-center border-b border-slate-200 pb-8">
        <h1 className="text-4xl font-extrabold text-primary-dark mb-3 animate-slide-in" style={{ animationDelay: '100ms' }}>您的職涯檔案：<span className="text-primary">{personaTitle}</span></h1>
        <p className="text-slate-600 max-w-3xl mx-auto animate-slide-in" style={{ animationDelay: '200ms' }}>{summary}</p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
        {/* Main Content */}
        <div className="lg:col-span-3 space-y-8">
          <SkillChart skills={skillAnalysis} />
          <CareerMatches matches={careerMatches} />
        </div>

        {/* Sidebar */}
        <aside className="lg:col-span-2 space-y-8">
          <Strengths strengths={topStrengths} />
          <DevelopmentPlan suggestions={developmentSuggestions} />
        </aside>
      </div>
      
      {/* Next Steps & Actions */}
       <footer className="text-center pt-8 mt-8 border-t border-slate-200">
          <h2 className="text-2xl font-bold text-slate-800 mb-4">準備好邁出下一步了嗎？</h2>
           <p className="text-slate-600 max-w-2xl mx-auto mb-8">運用這些洞察來建立您的履歷、準備面試，或探索新的學習機會。</p>
          <div className="flex justify-center items-center gap-4 flex-wrap">
            <button onClick={onRetake} className="bg-primary hover:bg-primary-dark text-white font-bold py-3 px-6 rounded-full shadow-lg transform hover:scale-105 transition-all duration-300 ease-in-out focus:outline-none focus:ring-4 focus:ring-primary/50 flex items-center">
              <RefreshCw className="w-5 h-5 mr-2" /> 再次進行評估
            </button>
             <button onClick={handleDownload} className="bg-white border border-slate-300 hover:bg-slate-100 text-slate-700 font-bold py-3 px-6 rounded-full shadow-lg transform hover:scale-105 transition-all duration-300 ease-in-out focus:outline-none focus:ring-4 focus:ring-slate-200 flex items-center">
              <Download className="w-5 h-5 mr-2" /> 下載報告 (PDF)
            </button>
            <button onClick={handleShare} className="bg-white border border-slate-300 hover:bg-slate-100 text-slate-700 font-bold py-3 px-6 rounded-full shadow-lg transform hover:scale-105 transition-all duration-300 ease-in-out focus:outline-none focus:ring-4 focus:ring-slate-200 flex items-center">
              <Share2 className="w-5 h-5 mr-2" /> 分享結果
            </button>
          </div>
      </footer>
    </div>
  );
};

export default Results;