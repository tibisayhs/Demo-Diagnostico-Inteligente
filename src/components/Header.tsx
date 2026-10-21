import React from 'react';
import { Sparkles, RotateCcw } from 'lucide-react';
import { Screen } from '../types';

interface HeaderProps {
  currentScreen: Screen;
  onReset: () => void;
  onGoHome: () => void;
}

export const Header: React.FC<HeaderProps> = ({ currentScreen, onReset, onGoHome }) => {
  const isStarted = currentScreen !== 'inicio';

  return (
    <header className="border-b border-black/10 bg-[#FBF8F4]/80 backdrop-blur-md sticky top-0 z-30">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        {/* Brand / Logo */}
        <button
          onClick={onGoHome}
          className="flex items-center gap-2.5 text-left group transition-opacity hover:opacity-80 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FF751F] rounded-lg p-1"
          title="Ir al inicio"
        >
          <div className="w-8 h-8 rounded-lg bg-[#020202] text-[#C1FF72] flex items-center justify-center font-bold text-sm tracking-wider shadow-sm">
            TH
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-sm sm:text-base tracking-tight text-[#020202] leading-tight">
              Diagnóstico Inteligente
            </span>
            <span className="text-[11px] text-[#020202]/60 font-medium tracking-wide">
              Tiby Hernández
            </span>
          </div>
        </button>

        {/* Right side controls */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Botón directo de descarga de código ZIP */}
          <a
            href="/diagnostico-inteligente-negocios.zip"
            target="_blank"
            rel="noopener noreferrer"
            download="diagnostico-inteligente-negocios.zip"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#C1FF72] hover:bg-[#b0f25e] text-[#020202] font-bold text-xs shadow-sm transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FF751F]"
            title="Descargar todos los archivos y carpetas en un archivo ZIP"
          >
            <span>⬇️ Descargar ZIP</span>
          </a>

          {isStarted && (
            <button
              onClick={onReset}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-[#020202]/70 hover:text-[#020202] hover:bg-black/5 rounded-full transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FF751F]"
              title="Reiniciar todo el diagnóstico"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Reiniciar</span>
            </button>
          )}

          <div className="hidden sm:flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-black/5 text-[#020202] text-xs font-medium">
            <Sparkles className="w-3 h-3 text-[#FF751F]" />
            <span>Vibe Coding Workshop</span>
          </div>
        </div>
      </div>
    </header>
  );
};
