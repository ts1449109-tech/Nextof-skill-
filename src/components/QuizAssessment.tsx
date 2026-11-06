import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { Question, Language } from '../types';
import {
  CheckCircle2,
  XCircle,
  HelpCircle,
  Award,
  RotateCcw,
  Sparkles,
  ChevronRight,
  Filter,
} from 'lucide-react';

interface QuizAssessmentProps {
  questions: Question[];
  language: Language;
  onLessonComplete?: () => void;
}

export const QuizAssessment: React.FC<QuizAssessmentProps> = ({
  questions,
  language,
  onLessonComplete,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<{ [key: string]: number | string }>({});
  const [showExplanation, setShowExplanation] = useState<{ [key: string]: boolean }>({});
  const [filterDifficulty, setFilterDifficulty] = useState<'all' | 'beginner' | 'intermediate' | 'advanced'>('all');
  const [score, setScore] = useState(0);
  const [isCompleted, setIsCompleted] = useState(false);

  // Filtered question set
  const filteredQuestions =
    filterDifficulty === 'all'
      ? questions
      : questions.filter((q) => q.difficulty === filterDifficulty);

  const activeQuestion = filteredQuestions[currentIndex] || filteredQuestions[0];

  const handleSelectOption = (qId: string, optionIdx: number) => {
    if (selectedAnswers[qId] !== undefined) return; // Already answered

    const isCorrect = optionIdx === activeQuestion.correctAnswer;
    setSelectedAnswers((prev) => ({ ...prev, [qId]: optionIdx }));
    setShowExplanation((prev) => ({ ...prev, [qId]: true }));

    if (isCorrect) {
      setScore((s) => s + 1);
    }
  };

  const handleNextQuestion = () => {
    if (currentIndex < filteredQuestions.length - 1) {
      setCurrentIndex((i) => i + 1);
    } else {
      setIsCompleted(true);
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
      });
      if (onLessonComplete) onLessonComplete();
    }
  };

  const handleReset = () => {
    setCurrentIndex(0);
    setSelectedAnswers({});
    setShowExplanation({});
    setScore(0);
    setIsCompleted(false);
  };

  if (!activeQuestion) {
    return (
      <div className="p-8 text-center text-slate-500 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800">
        {language === 'hi'
          ? 'इस स्तर के प्रश्न तैयार किए जा रहे हैं।'
          : 'Questions for this filter are being populated.'}
      </div>
    );
  }

  const hasAnsweredCurrent = selectedAnswers[activeQuestion.id] !== undefined;
  const isCurrentCorrect = selectedAnswers[activeQuestion.id] === activeQuestion.correctAnswer;

  return (
    <div className="space-y-6">
      {/* Quiz Top Status & Difficulty Filter */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
        <div className="flex items-center gap-2">
          <div className="w-9 h-9 rounded-xl bg-amber-50 dark:bg-amber-950/60 text-amber-600 dark:text-amber-400 flex items-center justify-center font-bold">
            <Award className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-sm font-bold text-slate-900 dark:text-white">
              {language === 'hi' ? 'अध्याय अभ्यास एवं मूल्यांकन' : 'Practice & Concept Evaluation'}
            </h3>
            <div className="text-xs text-slate-500">
              {language === 'hi' ? 'प्रश्न' : 'Question'} {currentIndex + 1} of {filteredQuestions.length} · {score} {language === 'hi' ? 'सही उत्तर' : 'Correct'}
            </div>
          </div>
        </div>

        {/* Filter Controls (Segmented buttons) */}
        <div className="flex items-center gap-1 p-1 bg-slate-100 dark:bg-slate-800 rounded-xl">
          {(['all', 'beginner', 'intermediate', 'advanced'] as const).map((lvl) => (
            <button
              key={lvl}
              onClick={() => {
                setFilterDifficulty(lvl);
                setCurrentIndex(0);
              }}
              className={`px-2.5 py-1 text-xs font-medium rounded-lg transition-colors capitalize ${
                filterDifficulty === lvl
                  ? 'bg-white dark:bg-slate-700 text-slate-900 dark:text-white shadow-xs'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900'
              }`}
            >
              {lvl}
            </button>
          ))}
        </div>
      </div>

      {isCompleted ? (
        /* Final Scorecard */
        <div className="p-8 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-center space-y-4 shadow-sm animate-in zoom-in-95 duration-200">
          <div className="w-16 h-16 rounded-2xl bg-emerald-100 dark:bg-emerald-950/70 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mx-auto text-2xl">
            🏆
          </div>
          <h3 className="text-xl font-bold text-slate-900 dark:text-white">
            {language === 'hi' ? 'उत्कृष्ट प्रदर्शन!' : 'Assessment Complete!'}
          </h3>
          <p className="text-sm text-slate-600 dark:text-slate-300 max-w-md mx-auto">
            {language === 'hi'
              ? `आपने ${filteredQuestions.length} में से ${score} प्रश्नों के सही उत्तर दिए हैं। तरुन सर के विज़न के अनुसार निरंतर अभ्यास ही सफलता की कुंजी है।`
              : `You scored ${score} out of ${filteredQuestions.length}. Keep practicing to master all technical formulas and conceptual questions.`}
          </p>

          <div className="pt-2 flex items-center justify-center gap-3">
            <button
              onClick={handleReset}
              className="flex items-center gap-2 px-4 py-2 text-xs font-semibold rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
            >
              <RotateCcw className="w-4 h-4" />
              <span>{language === 'hi' ? 'पुनः प्रयास करें' : 'Try Again'}</span>
            </button>
          </div>
        </div>
      ) : (
        /* Question Active Card */
        <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-6 shadow-sm">
          {/* Question Text */}
          <div className="space-y-2">
            <div className="flex items-center justify-between text-xs text-slate-400">
              <span className="font-mono uppercase">
                {activeQuestion.type} · {activeQuestion.difficulty}
              </span>
              <span>
                {Math.round(((currentIndex + 1) / filteredQuestions.length) * 100)}%
              </span>
            </div>
            <h4 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white leading-relaxed">
              {language === 'hi' ? activeQuestion.questionHi : activeQuestion.questionEn}
            </h4>
          </div>

          {/* Options Grid */}
          <div className="space-y-2.5">
            {activeQuestion.optionsEn?.map((optEn, idx) => {
              const optHi = activeQuestion.optionsHi?.[idx] || optEn;
              const isSelected = selectedAnswers[activeQuestion.id] === idx;
              const isCorrectOpt = idx === activeQuestion.correctAnswer;

              let optionStyle = 'border-slate-200 dark:border-slate-700 bg-slate-50/50 dark:bg-slate-800/40 hover:border-indigo-400';

              if (hasAnsweredCurrent) {
                if (isCorrectOpt) {
                  optionStyle = 'border-emerald-500 bg-emerald-50 dark:bg-emerald-950/40 text-emerald-900 dark:text-emerald-200';
                } else if (isSelected && !isCurrentCorrect) {
                  optionStyle = 'border-rose-500 bg-rose-50 dark:bg-rose-950/40 text-rose-900 dark:text-rose-200';
                }
              }

              return (
                <button
                  key={idx}
                  onClick={() => handleSelectOption(activeQuestion.id, idx)}
                  disabled={hasAnsweredCurrent}
                  className={`w-full text-left p-3.5 rounded-xl border transition-all text-xs sm:text-sm font-medium flex items-center justify-between ${optionStyle}`}
                >
                  <div className="flex items-center gap-3">
                    <span className="w-6 h-6 rounded-lg bg-slate-200 dark:bg-slate-700 flex items-center justify-center text-xs font-bold text-slate-700 dark:text-slate-300">
                      {String.fromCharCode(65 + idx)}
                    </span>
                    <span>{language === 'hi' ? optHi : optEn}</span>
                  </div>

                  {hasAnsweredCurrent && (
                    <div>
                      {isCorrectOpt && <CheckCircle2 className="w-5 h-5 text-emerald-500" />}
                      {isSelected && !isCurrentCorrect && <XCircle className="w-5 h-5 text-rose-500" />}
                    </div>
                  )}
                </button>
              );
            })}
          </div>

          {/* Explanation Callout */}
          {showExplanation[activeQuestion.id] && (
            <div className="p-4 rounded-xl bg-indigo-50/70 dark:bg-indigo-950/40 border border-indigo-100 dark:border-indigo-900/60 text-xs sm:text-sm space-y-1.5 animate-in fade-in duration-200">
              <div className="flex items-center gap-1.5 font-bold text-indigo-700 dark:text-indigo-300">
                <Sparkles className="w-4 h-4" />
                <span>
                  {language === 'hi' ? 'विस्तृत समाधान व स्पष्टीकरण:' : 'Detailed Solution & Concept:'}
                </span>
              </div>
              <p className="text-slate-700 dark:text-slate-200 leading-relaxed">
                {language === 'hi' ? activeQuestion.explanationHi : activeQuestion.explanationEn}
              </p>
            </div>
          )}

          {/* Bottom Next Trigger */}
          <div className="flex items-center justify-between pt-2">
            <span className="text-xs text-slate-400">
              {hasAnsweredCurrent
                ? isCurrentCorrect
                  ? '✅ Correct Answer!'
                  : '❌ Review explanation'
                : 'Select an option to evaluate'}
            </span>

            <button
              onClick={handleNextQuestion}
              disabled={!hasAnsweredCurrent}
              className="flex items-center gap-1.5 px-4 py-2 text-xs font-semibold rounded-xl bg-indigo-600 hover:bg-indigo-700 disabled:opacity-40 text-white transition-all shadow-sm"
            >
              <span>{currentIndex === filteredQuestions.length - 1 ? (language === 'hi' ? 'समाप्त करें' : 'Finish') : (language === 'hi' ? 'अगला प्रश्न' : 'Next Question')}</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
