import React from 'react';
import { ArrowLeft, ArrowRight, Check } from 'lucide-react';
import { Question, UserAnswers } from '../types';
import { ProgressBar } from './ProgressBar';

interface ScreenCuestionarioProps {
  questions: Question[];
  currentQuestionIndex: number;
  answers: UserAnswers;
  onSelectOption: (questionId: number, points: number) => void;
  onNext: () => void;
  onPrevious: () => void;
}

export const ScreenCuestionario: React.FC<ScreenCuestionarioProps> = ({
  questions,
  currentQuestionIndex,
  answers,
  onSelectOption,
  onNext,
  onPrevious,
}) => {
  const currentQuestion = questions[currentQuestionIndex];
  const isLastQuestion = currentQuestionIndex === questions.length - 1;
  const currentAnswer = answers[currentQuestion.id];
  const hasAnswered = currentAnswer !== undefined;

  return (
    <div className="w-full max-w-2xl mx-auto px-4 sm:px-6 py-8 sm:py-12 space-y-8">
      {/* Progress Bar & Header */}
      <div className="space-y-4">
        <ProgressBar
          currentStep={currentQuestionIndex + 1}
          totalSteps={questions.length}
        />
        <div className="flex items-center gap-2 text-xs font-semibold text-[#FF751F] uppercase tracking-wider">
          <span>Área {currentQuestion.id}</span>
          <span aria-hidden="true">·</span>
          <span>{currentQuestion.area}</span>
        </div>
      </div>

      {/* Question Card */}
      <div className="space-y-6">
        <div className="space-y-2">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#020202] tracking-tight leading-snug">
            {currentQuestion.title}
          </h2>
          {currentQuestion.description && (
            <p className="text-sm sm:text-base text-[#020202]/70 leading-relaxed">
              {currentQuestion.description}
            </p>
          )}
        </div>

        {/* Options list */}
        <div className="space-y-3" role="radiogroup" aria-labelledby="question-heading">
          {currentQuestion.options.map((option) => {
            const isSelected = currentAnswer === option.points;

            return (
              <button
                key={option.points}
                type="button"
                role="radio"
                aria-checked={isSelected}
                onClick={() => onSelectOption(currentQuestion.id, option.points)}
                className={`w-full text-left p-4 sm:p-5 rounded-2xl border transition-all duration-150 flex items-center justify-between gap-4 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FF751F] ${
                  isSelected
                    ? 'bg-[#020202] text-white border-[#020202] shadow-md transform scale-[1.01]'
                    : 'bg-white/90 text-[#020202] border-black/10 hover:border-black/30 hover:bg-white'
                }`}
              >
                <div className="flex items-center gap-3.5">
                  {/* Custom Radio Circle */}
                  <div
                    className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 border transition-all ${
                      isSelected
                        ? 'border-[#C1FF72] bg-[#C1FF72] text-[#020202]'
                        : 'border-black/30 bg-transparent'
                    }`}
                  >
                    {isSelected && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                  </div>

                  <span className={`text-sm sm:text-base font-medium leading-relaxed ${
                    isSelected ? 'text-white' : 'text-[#020202]'
                  }`}>
                    {option.label}
                  </span>
                </div>

                <span
                  className={`text-xs font-semibold px-2 py-1 rounded-md shrink-0 ${
                    isSelected
                      ? 'bg-white/20 text-[#C1FF72]'
                      : 'bg-black/5 text-[#020202]/60'
                  }`}
                >
                  {option.points} {option.points === 1 ? 'pto' : 'ptos'}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Navigation Buttons */}
      <div className="pt-6 border-t border-black/10 flex items-center justify-between gap-4">
        <button
          type="button"
          onClick={onPrevious}
          className="inline-flex items-center gap-2 px-5 py-3 rounded-xl border border-black/15 bg-white text-[#020202] hover:bg-black/5 font-semibold text-sm transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FF751F]"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>{currentQuestionIndex === 0 ? 'Inicio' : 'Anterior'}</span>
        </button>

        <button
          type="button"
          onClick={onNext}
          disabled={!hasAnswered}
          className={`inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-sm transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FF751F] ${
            hasAnswered
              ? 'bg-[#020202] text-white hover:bg-[#020202]/90 shadow-md active:scale-[0.98]'
              : 'bg-black/10 text-[#020202]/30 cursor-not-allowed'
          }`}
        >
          <span>{isLastQuestion ? 'Ver resultados' : 'Siguiente'}</span>
          <ArrowRight className={`w-4 h-4 ${hasAnswered ? 'text-[#C1FF72]' : 'text-[#020202]/30'}`} />
        </button>
      </div>

      {/* Helper notice if not selected */}
      {!hasAnswered && (
        <p className="text-center text-xs text-[#020202]/50 italic">
          Selecciona una opción para poder continuar
        </p>
      )}
    </div>
  );
};
