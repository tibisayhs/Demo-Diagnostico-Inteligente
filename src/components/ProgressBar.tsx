import React from 'react';

interface ProgressBarProps {
  currentStep: number;
  totalSteps: number;
}

export const ProgressBar: React.FC<ProgressBarProps> = ({ currentStep, totalSteps }) => {
  const percentage = Math.round((currentStep / totalSteps) * 100);

  return (
    <div className="w-full space-y-2">
      <div className="flex items-center justify-between text-xs font-semibold tracking-wide text-[#020202]/70 uppercase">
        <span>Pregunta {currentStep} de {totalSteps}</span>
        <span className="font-mono text-[#020202]">{percentage}% completado</span>
      </div>
      <div className="w-full h-2 bg-black/10 rounded-full overflow-hidden p-0.5">
        <div
          className="h-full bg-[#020202] rounded-full transition-all duration-300 ease-out"
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
};
