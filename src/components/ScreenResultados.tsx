import React from 'react';
import { ArrowRight, RotateCcw, AlertCircle, Award, CheckCircle } from 'lucide-react';
import { DiagnosticLevel, Question, UserAnswers } from '../types';

interface ScreenResultadosProps {
  score: number;
  maxScore: number;
  level: DiagnosticLevel;
  answers: UserAnswers;
  questions: Question[];
  onViewRecommendations: () => void;
  onReset: () => void;
}

export const ScreenResultados: React.FC<ScreenResultadosProps> = ({
  score,
  maxScore,
  level,
  answers,
  questions,
  onViewRecommendations,
  onReset,
}) => {
  const percentage = Math.round((score / maxScore) * 100);

  // SVG Gauge calculations
  const radius = 70;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  return (
    <div className="w-full max-w-2xl mx-auto px-4 sm:px-6 py-8 sm:py-12 space-y-8">
      {/* Top Section */}
      <div className="text-center space-y-2">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/5 text-[#020202] text-xs font-semibold uppercase tracking-wider">
          <span>Diagnóstico Completado</span>
        </div>
        <h2 className="text-2xl sm:text-4xl font-extrabold text-[#020202] tracking-tight">
          Tu Nivel de Preparación Digital
        </h2>
        <p className="text-sm sm:text-base text-[#020202]/70">
          Resultados consolidados a partir de tus 5 respuestas
        </p>
      </div>

      {/* Main Score Card */}
      <div className="bg-white border border-black/10 rounded-3xl p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex flex-col sm:flex-row items-center gap-6 sm:gap-8 justify-center">
          {/* Circular Gauge */}
          <div className="relative w-44 h-44 flex items-center justify-center shrink-0">
            <svg className="w-full h-full -rotate-90 transform" viewBox="0 0 160 160">
              {/* Background circle */}
              <circle
                cx="80"
                cy="80"
                r={radius}
                stroke="currentColor"
                strokeWidth="12"
                fill="transparent"
                className="text-black/5"
              />
              {/* Progress arc */}
              <circle
                cx="80"
                cy="80"
                r={radius}
                stroke={level.id === 'avanzado' ? '#C1FF72' : level.id === 'intermedio' ? '#020202' : '#FF751F'}
                strokeWidth="12"
                strokeDasharray={circumference}
                strokeDashoffset={strokeDashoffset}
                strokeLinecap="round"
                fill="transparent"
                className="transition-all duration-1000 ease-out"
              />
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
              <span className="text-4xl font-extrabold text-[#020202] tracking-tight leading-none">
                {score}
              </span>
              <span className="text-xs font-semibold text-[#020202]/50 uppercase tracking-widest mt-1">
                de {maxScore} pts
              </span>
              <span className="text-[11px] font-mono text-[#020202]/70 mt-0.5">
                {percentage}%
              </span>
            </div>
          </div>

          {/* Level Info */}
          <div className="space-y-3 text-center sm:text-left flex-1">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg text-xs font-bold uppercase tracking-wider bg-[#020202] text-white">
              <Award className="w-3.5 h-3.5 text-[#C1FF72]" />
              <span>{level.name}</span>
              <span className="text-white/60 font-mono">({level.scoreRange})</span>
            </div>

            <p className="text-sm sm:text-base text-[#020202]/85 leading-relaxed font-normal">
              {level.message}
            </p>
          </div>
        </div>

        {/* Breakdown by Dimension */}
        <div className="pt-6 border-t border-black/10 space-y-3">
          <h4 className="text-xs font-bold text-[#020202]/70 uppercase tracking-wider">
            Desglose por área evaluada
          </h4>
          <div className="space-y-2.5">
            {questions.map((q) => {
              const qScore = answers[q.id] ?? 0;
              const qPercent = (qScore / 4) * 100;
              return (
                <div key={q.id} className="space-y-1">
                  <div className="flex items-center justify-between text-xs font-medium text-[#020202]">
                    <span className="truncate pr-2">{q.area}</span>
                    <span className="font-mono font-bold shrink-0">
                      {qScore} / 4 pts
                    </span>
                  </div>
                  <div className="w-full h-1.5 bg-black/5 rounded-full overflow-hidden">
                    <div
                      className={`h-full rounded-full transition-all duration-500 ${
                        qScore <= 1
                          ? 'bg-[#FF751F]'
                          : qScore <= 2
                          ? 'bg-[#020202]/60'
                          : 'bg-[#C1FF72]'
                      }`}
                      style={{ width: `${qPercent}%` }}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Mandatory Disclaimer */}
      <div className="flex items-start gap-3 p-4 rounded-2xl bg-black/5 text-[#020202]/70 text-xs leading-relaxed">
        <AlertCircle className="w-4 h-4 text-[#020202]/60 shrink-0 mt-0.5" />
        <p>
          <strong>Aviso importante:</strong> Este diagnóstico es una autoevaluación orientativa basada en tus respuestas, diseñada para identificar prioridades de crecimiento. No constituye una certificación formal ni una auditoría empresarial exhaustiva.
        </p>
      </div>

      {/* Actions */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
        <button
          onClick={onReset}
          className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl border border-black/15 bg-white text-[#020202] hover:bg-black/5 font-semibold text-sm transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FF751F]"
        >
          <RotateCcw className="w-4 h-4" />
          <span>Reiniciar diagnóstico</span>
        </button>

        <button
          onClick={onViewRecommendations}
          className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-3.5 rounded-xl bg-[#020202] text-white hover:bg-[#020202]/90 active:scale-[0.99] font-bold text-sm sm:text-base transition-all shadow-md group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FF751F]"
        >
          <span>Ver mis recomendaciones</span>
          <ArrowRight className="w-4 h-4 text-[#C1FF72] group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
    </div>
  );
};
