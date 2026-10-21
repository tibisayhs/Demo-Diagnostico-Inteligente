/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Screen, UserAnswers } from './types';
import {
  QUESTIONS,
  calculateTotalScore,
  getDiagnosticLevel,
  generateRecommendations,
} from './data/diagnosticData';
import { Header } from './components/Header';
import { ScreenInicio } from './components/ScreenInicio';
import { ScreenCuestionario } from './components/ScreenCuestionario';
import { ScreenResultados } from './components/ScreenResultados';
import { ScreenRecomendaciones } from './components/ScreenRecomendaciones';
import { ScreenProximoPaso } from './components/ScreenProximoPaso';
import { PlayCircle, CheckCircle, RefreshCw } from 'lucide-react';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState<Screen>('inicio');
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
  const [answers, setAnswers] = useState<UserAnswers>({});
  const [showWorkshopPanel, setShowWorkshopPanel] = useState<boolean>(false);

  // Handlers for questionnaire
  const handleStart = () => {
    setCurrentScreen('cuestionario');
    setCurrentQuestionIndex(0);
  };

  const handleSelectOption = (questionId: number, points: number) => {
    setAnswers((prev) => ({
      ...prev,
      [questionId]: points,
    }));
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < QUESTIONS.length - 1) {
      setCurrentQuestionIndex((prev) => prev + 1);
    } else {
      // Finished all 5 questions
      setCurrentScreen('resultados');
    }
  };

  const handlePreviousQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex((prev) => prev - 1);
    } else {
      // Go back to home
      setCurrentScreen('inicio');
    }
  };

  const handleReset = () => {
    setAnswers({});
    setCurrentQuestionIndex(0);
    setCurrentScreen('inicio');
  };

  const handleGoHome = () => {
    setCurrentScreen('inicio');
  };

  // Workshop demo preset helper (quick testing of 0 pts, 10 pts, 20 pts)
  const applyPreset = (presetScore: 0 | 2 | 4) => {
    const mockAnswers: UserAnswers = {};
    QUESTIONS.forEach((q) => {
      mockAnswers[q.id] = presetScore;
    });
    setAnswers(mockAnswers);
    setCurrentQuestionIndex(0);
    setCurrentScreen('resultados');
  };

  // Derived state
  const totalScore = calculateTotalScore(answers);
  const diagnosticLevel = getDiagnosticLevel(totalScore);
  const recommendations = generateRecommendations(answers);

  return (
    <div className="min-h-screen bg-[#FBF8F4] text-[#020202] flex flex-col font-sans selection:bg-[#C1FF72] selection:text-[#020202]">
      {/* Top Header */}
      <Header
        currentScreen={currentScreen}
        onReset={handleReset}
        onGoHome={handleGoHome}
      />

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col justify-center">
        {currentScreen === 'inicio' && <ScreenInicio onStart={handleStart} />}

        {currentScreen === 'cuestionario' && (
          <ScreenCuestionario
            questions={QUESTIONS}
            currentQuestionIndex={currentQuestionIndex}
            answers={answers}
            onSelectOption={handleSelectOption}
            onNext={handleNextQuestion}
            onPrevious={handlePreviousQuestion}
          />
        )}

        {currentScreen === 'resultados' && (
          <ScreenResultados
            score={totalScore}
            maxScore={20}
            level={diagnosticLevel}
            answers={answers}
            questions={QUESTIONS}
            onViewRecommendations={() => setCurrentScreen('recomendaciones')}
            onReset={handleReset}
          />
        )}

        {currentScreen === 'recomendaciones' && (
          <ScreenRecomendaciones
            recommendations={recommendations}
            onContinue={() => setCurrentScreen('proximo_paso')}
            onBackToResults={() => setCurrentScreen('resultados')}
          />
        )}

        {currentScreen === 'proximo_paso' && (
          <ScreenProximoPaso
            onReset={handleReset}
            onBackToRecommendations={() => setCurrentScreen('recomendaciones')}
          />
        )}
      </main>

      {/* Footer & Workshop Facilitator Toolkit */}
      <footer className="border-t border-black/10 py-6 px-4 bg-[#FBF8F4] text-xs text-[#020202]/60 mt-auto">
        <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="font-semibold text-[#020202]">Diagnóstico Inteligente de Negocios</span>
            <span>·</span>
            <span>Tiby Hernández</span>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => setShowWorkshopPanel(!showWorkshopPanel)}
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/5 hover:bg-black/10 text-[#020202] font-semibold text-[11px] transition-all"
            >
              <PlayCircle className="w-3.5 h-3.5 text-[#FF751F]" />
              <span>{showWorkshopPanel ? 'Ocultar Casos de Prueba' : 'Casos de Prueba (Demo)'}</span>
            </button>
          </div>
        </div>

        {/* Live Workshop testing panel */}
        {showWorkshopPanel && (
          <div className="max-w-4xl mx-auto mt-4 p-4 rounded-2xl bg-white border border-black/10 shadow-sm space-y-3">
            <div className="flex items-center justify-between">
              <span className="font-bold text-[#020202] text-xs uppercase tracking-wider">
                Verificación Rápida para Demostración (Workshop)
              </span>
              <span className="text-[11px] text-[#020202]/50">
                Puntuación actual: {totalScore} / 20 pts ({diagnosticLevel.name})
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
              <button
                onClick={() => applyPreset(0)}
                className="px-3 py-2 rounded-xl bg-black/5 hover:bg-[#FF751F]/15 hover:text-[#FF751F] text-left text-xs font-semibold text-[#020202] transition-colors flex items-center justify-between"
              >
                <span>Nivel Inicial (0 pts)</span>
                <span className="font-mono text-[10px]">0/20</span>
              </button>

              <button
                onClick={() => applyPreset(2)}
                className="px-3 py-2 rounded-xl bg-black/5 hover:bg-black/10 text-left text-xs font-semibold text-[#020202] transition-colors flex items-center justify-between"
              >
                <span>Nivel Intermedio (10 pts)</span>
                <span className="font-mono text-[10px]">10/20</span>
              </button>

              <button
                onClick={() => applyPreset(4)}
                className="px-3 py-2 rounded-xl bg-black/5 hover:bg-[#C1FF72]/30 text-left text-xs font-semibold text-[#020202] transition-colors flex items-center justify-between"
              >
                <span>Nivel Avanzado (20 pts)</span>
                <span className="font-mono text-[10px]">20/20</span>
              </button>
            </div>
          </div>
        )}
      </footer>
    </div>
  );
}
