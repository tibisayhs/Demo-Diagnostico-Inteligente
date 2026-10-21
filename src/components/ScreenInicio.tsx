import React from 'react';
import { ArrowRight, Compass, Target, Sparkles, CheckCircle2 } from 'lucide-react';

interface ScreenInicioProps {
  onStart: () => void;
}

export const ScreenInicio: React.FC<ScreenInicioProps> = ({ onStart }) => {
  return (
    <div className="w-full max-w-3xl mx-auto px-4 sm:px-6 py-8 sm:py-16 space-y-12">
      {/* Kicker & App Title */}
      <div className="space-y-4 text-center sm:text-left">
        <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2 text-xs font-semibold tracking-wider uppercase text-[#020202]/70">
          <span className="text-[#FF751F] font-bold">Diagnóstico Inteligente de Negocios</span>
          <span aria-hidden="true">·</span>
          <span>5 preguntas</span>
          <span aria-hidden="true">·</span>
          <span className="text-[#020202]">Resultado inmediato</span>
        </div>

        {/* Main Title */}
        <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[#020202] leading-[1.15]">
          ¿Qué tan preparado está tu negocio para crecer con tecnología e inteligencia artificial?
        </h1>

        {/* Subtitle */}
        <p className="text-lg sm:text-xl text-[#020202]/80 font-normal leading-relaxed max-w-2xl">
          Descubre en pocos minutos cómo estás utilizando las herramientas digitales en tu negocio y qué oportunidades tienes para mejorar.
        </p>

        {/* Explicación breve */}
        <p className="text-sm text-[#020202]/65 leading-relaxed pt-1">
          Una autoevaluación ágil para emprendedores, consultores y líderes de negocio que desean simplificar operaciones, optimizar procesos comerciales y adoptar IA práctica.
        </p>
      </div>

      {/* 3 Benefits Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
        {/* Benefit 1 */}
        <div className="bg-white/80 border border-black/10 rounded-2xl p-6 shadow-sm flex flex-col justify-between hover:border-black/30 transition-all">
          <div className="space-y-3">
            <div className="w-10 h-10 rounded-xl bg-[#C1FF72] text-[#020202] flex items-center justify-center font-bold">
              <Compass className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-[#020202] tracking-tight">
              Identificar oportunidades
            </h3>
            <p className="text-sm text-[#020202]/70 leading-relaxed">
              Detecta cuellos de botella y áreas clave donde la automatización genera impacto directo.
            </p>
          </div>
        </div>

        {/* Benefit 2 */}
        <div className="bg-white/80 border border-black/10 rounded-2xl p-6 shadow-sm flex flex-col justify-between hover:border-black/30 transition-all">
          <div className="space-y-3">
            <div className="w-10 h-10 rounded-xl bg-[#FF751F] text-white flex items-center justify-center font-bold">
              <Target className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-[#020202] tracking-tight">
              Reconocer prioridades
            </h3>
            <p className="text-sm text-[#020202]/70 leading-relaxed">
              Enfoca tus recursos y tiempo en las acciones con mayor retorno operativo y comercial.
            </p>
          </div>
        </div>

        {/* Benefit 3 */}
        <div className="bg-white/80 border border-black/10 rounded-2xl p-6 shadow-sm flex flex-col justify-between hover:border-black/30 transition-all">
          <div className="space-y-3">
            <div className="w-10 h-10 rounded-xl bg-[#020202] text-[#C1FF72] flex items-center justify-center font-bold">
              <Sparkles className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-[#020202] tracking-tight">
              Recibir recomendaciones
            </h3>
            <p className="text-sm text-[#020202]/70 leading-relaxed">
              Obtén tres sugerencias prácticas aplicables desde hoy mismo en tu empresa.
            </p>
          </div>
        </div>
      </div>

      {/* Action Area */}
      <div className="pt-4 flex flex-col sm:flex-row items-center gap-4 justify-between border-t border-black/10">
        <div className="space-y-1 text-center sm:text-left">
          <div className="flex items-center gap-1.5 justify-center sm:justify-start text-xs font-semibold text-[#020202]/70">
            <CheckCircle2 className="w-4 h-4 text-[#020202]" />
            <span>5 preguntas de opción múltiple</span>
          </div>
          <p className="text-xs text-[#020202]/50">
            Sin registro previo · En memoria de sesión · 100% privado
          </p>
        </div>

        <button
          onClick={onStart}
          className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-[#020202] text-white hover:bg-[#020202]/90 active:scale-[0.99] font-bold text-base transition-all shadow-md group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FF751F]"
        >
          <span>Comenzar diagnóstico</span>
          <ArrowRight className="w-5 h-5 text-[#C1FF72] group-hover:translate-x-1 transition-transform" />
        </button>
      </div>

      {/* Discreta identificación */}
      <div className="pt-2 text-center text-xs text-[#020202]/50 tracking-wide font-medium">
        Una herramienta de <span className="text-[#020202] font-semibold">Tiby Hernández</span>
      </div>
    </div>
  );
};
