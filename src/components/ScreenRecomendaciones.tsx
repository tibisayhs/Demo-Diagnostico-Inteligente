import React from 'react';
import { ArrowLeft, ArrowRight, CheckCircle2, TrendingUp, Lightbulb, Zap } from 'lucide-react';
import { Recommendation } from '../types';

interface ScreenRecomendacionesProps {
  recommendations: Recommendation[];
  onContinue: () => void;
  onBackToResults: () => void;
}

export const ScreenRecomendaciones: React.FC<ScreenRecomendacionesProps> = ({
  recommendations,
  onContinue,
  onBackToResults,
}) => {
  return (
    <div className="w-full max-w-3xl mx-auto px-4 sm:px-6 py-8 sm:py-12 space-y-8">
      {/* Title & Introduction */}
      <div className="space-y-2 text-center sm:text-left">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/5 text-[#020202] text-xs font-semibold uppercase tracking-wider">
          <span>Plan de Acción Personalizado</span>
        </div>
        <h2 className="text-2xl sm:text-4xl font-extrabold text-[#020202] tracking-tight">
          3 Recomendaciones Prácticas
        </h2>
        <p className="text-sm sm:text-base text-[#020202]/70 max-w-2xl">
          Seleccionadas priorizando las áreas con mayor potencial de optimización y retorno inmediato según tus respuestas.
        </p>
      </div>

      {/* 3 Recommendation Cards */}
      <div className="space-y-5">
        {recommendations.map((rec, index) => (
          <div
            key={rec.questionId}
            className="bg-white border border-black/10 rounded-3xl p-6 sm:p-7 shadow-sm space-y-5 hover:border-black/25 transition-all"
          >
            {/* Header of the recommendation */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-black/5 pb-4">
              <div className="flex items-center gap-3">
                <span className="w-7 h-7 rounded-full bg-[#020202] text-[#C1FF72] flex items-center justify-center font-bold text-xs">
                  0{index + 1}
                </span>
                <h3 className="text-lg font-bold text-[#020202] tracking-tight">
                  {rec.area}
                </h3>
              </div>
              <div className="text-xs font-mono text-[#020202]/60 bg-black/5 px-2.5 py-1 rounded-lg self-start sm:self-auto">
                Puntaje actual: {rec.userScore} / 4 pts
              </div>
            </div>

            {/* 3 structured fields: Oportunidad, Acción sugerida, Beneficio esperado */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs sm:text-sm">
              {/* Oportunidad identificada */}
              <div className="p-4 rounded-2xl bg-[#FBF8F4] space-y-2 border border-black/5">
                <div className="flex items-center gap-1.5 text-xs font-bold text-[#FF751F] uppercase tracking-wide">
                  <Lightbulb className="w-3.5 h-3.5" />
                  <span>Oportunidad</span>
                </div>
                <p className="text-[#020202]/80 leading-relaxed">
                  {rec.opportunity}
                </p>
              </div>

              {/* Acción sugerida */}
              <div className="p-4 rounded-2xl bg-[#020202]/5 space-y-2 border border-black/5">
                <div className="flex items-center gap-1.5 text-xs font-bold text-[#020202] uppercase tracking-wide">
                  <Zap className="w-3.5 h-3.5" />
                  <span>Acción sugerida</span>
                </div>
                <p className="text-[#020202] leading-relaxed font-medium">
                  {rec.action}
                </p>
              </div>

              {/* Beneficio esperado */}
              <div className="p-4 rounded-2xl bg-[#C1FF72]/20 space-y-2 border border-[#C1FF72]/40">
                <div className="flex items-center gap-1.5 text-xs font-bold text-[#020202] uppercase tracking-wide">
                  <TrendingUp className="w-3.5 h-3.5 text-[#020202]" />
                  <span>Beneficio esperado</span>
                </div>
                <p className="text-[#020202]/90 leading-relaxed font-medium">
                  {rec.benefit}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Buttons */}
      <div className="pt-6 border-t border-black/10 flex flex-col sm:flex-row items-center justify-between gap-4">
        <button
          onClick={onBackToResults}
          className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl border border-black/15 bg-white text-[#020202] hover:bg-black/5 font-semibold text-sm transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FF751F]"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Volver a resultados</span>
        </button>

        <button
          onClick={onContinue}
          className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-3.5 rounded-xl bg-[#020202] text-white hover:bg-[#020202]/90 active:scale-[0.99] font-bold text-sm sm:text-base transition-all shadow-md group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FF751F]"
        >
          <span>Continuar al próximo paso</span>
          <ArrowRight className="w-4 h-4 text-[#C1FF72] group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
    </div>
  );
};
