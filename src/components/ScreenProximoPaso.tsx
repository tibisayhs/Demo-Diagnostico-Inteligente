import React, { useState } from 'react';
import { MessageCircle, RotateCcw, ArrowLeft, Calculator, Users, Cpu, ArrowUpRight } from 'lucide-react';
import { WHATSAPP_NUMBER, WHATSAPP_MESSAGE } from '../constants/config';
import { WhatsAppConfigModal } from './WhatsAppConfigModal';

interface ScreenProximoPasoProps {
  onReset: () => void;
  onBackToRecommendations: () => void;
}

export const ScreenProximoPaso: React.FC<ScreenProximoPasoProps> = ({
  onReset,
  onBackToRecommendations,
}) => {
  const [showConfigModal, setShowConfigModal] = useState(false);

  const openWhatsApp = (numberToUse: string) => {
    const cleanNumber = numberToUse.replace(/\D/g, '');
    const encodedMessage = encodeURIComponent(WHATSAPP_MESSAGE);
    const url = `https://wa.me/${cleanNumber}?text=${encodedMessage}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const handleWhatsAppClick = () => {
    const clean = WHATSAPP_NUMBER.trim().replace(/\D/g, '');
    if (!clean || clean.length < 7) {
      // Not configured: present notice as required
      setShowConfigModal(true);
    } else {
      openWhatsApp(clean);
    }
  };

  return (
    <div className="w-full max-w-3xl mx-auto px-4 sm:px-6 py-8 sm:py-12 space-y-10">
      {/* Header section */}
      <div className="space-y-4 text-center sm:text-left">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#C1FF72] text-[#020202] text-xs font-bold uppercase tracking-wider">
          <span>Próximo Paso</span>
        </div>

        <h2 className="text-2xl sm:text-4xl font-extrabold text-[#020202] tracking-tight leading-tight">
          Tu diagnóstico es el punto de partida. Ahora puedes transformar estas oportunidades en soluciones.
        </h2>

        <p className="text-base sm:text-lg text-[#020202]/80 leading-relaxed max-w-2xl">
          Con la consultoría en implementación de soluciones digitales con IA de Tiby Hernández puedes diseñar y desarrollar herramientas adaptadas a las necesidades de tu negocio.
        </p>
      </div>

      {/* 3 Solution Examples */}
      <div className="space-y-4">
        <div className="flex items-center gap-2 text-xs font-bold text-[#020202]/70 uppercase tracking-wider">
          <span>Ejemplos de soluciones a la medida</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Example 1 */}
          <div className="bg-white border border-black/10 rounded-2xl p-6 shadow-sm space-y-3 hover:border-black/30 transition-all flex flex-col justify-between">
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-xl bg-black/5 text-[#020202] flex items-center justify-center">
                <Calculator className="w-5 h-5 text-[#FF751F]" />
              </div>
              <h3 className="text-base font-bold text-[#020202] tracking-tight">
                Cotizadores y simuladores comerciales
              </h3>
              <p className="text-xs sm:text-sm text-[#020202]/70 leading-relaxed">
                Herramientas interactivas que calculan precios, simulan escenarios y envían propuestas comerciales al instante.
              </p>
            </div>
            <div className="pt-2 text-[11px] font-semibold text-[#FF751F] flex items-center gap-1">
              <span>Agiliza el cierre comercial</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </div>
          </div>

          {/* Example 2 */}
          <div className="bg-white border border-black/10 rounded-2xl p-6 shadow-sm space-y-3 hover:border-black/30 transition-all flex flex-col justify-between">
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-xl bg-black/5 text-[#020202] flex items-center justify-center">
                <Users className="w-5 h-5 text-[#020202]" />
              </div>
              <h3 className="text-base font-bold text-[#020202] tracking-tight">
                Aplicaciones para seguimiento de clientes
              </h3>
              <p className="text-xs sm:text-sm text-[#020202]/70 leading-relaxed">
                Sistemas centralizados sin fricciones para gestionar prospectos, historial de contacto y alertas preventivas.
              </p>
            </div>
            <div className="pt-2 text-[11px] font-semibold text-[#020202] flex items-center gap-1">
              <span>Cero prospectos perdidos</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </div>
          </div>

          {/* Example 3 */}
          <div className="bg-white border border-black/10 rounded-2xl p-6 shadow-sm space-y-3 hover:border-black/30 transition-all flex flex-col justify-between">
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-xl bg-black/5 text-[#020202] flex items-center justify-center">
                <Cpu className="w-5 h-5 text-[#C1FF72]" />
              </div>
              <h3 className="text-base font-bold text-[#020202] tracking-tight">
                Herramientas para automatizar procesos
              </h3>
              <p className="text-xs sm:text-sm text-[#020202]/70 leading-relaxed">
                Flujos con IA para clasificar correos, redactar respuestas, procesar reportes y eliminar trabajo manual repetitivo.
              </p>
            </div>
            <div className="pt-2 text-[11px] font-semibold text-[#020202] flex items-center gap-1">
              <span>Ahorra horas cada semana</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </div>
          </div>
        </div>
      </div>

      {/* Main WhatsApp CTA Card */}
      <div className="bg-[#020202] text-white rounded-3xl p-6 sm:p-8 space-y-6 shadow-xl relative overflow-hidden">
        <div className="space-y-3 max-w-xl">
          <span className="text-xs font-bold uppercase tracking-wider text-[#C1FF72]">
            Asesoría Personalizada
          </span>
          <h3 className="text-xl sm:text-2xl font-extrabold tracking-tight">
            ¿Listo para construir la solución digital de tu negocio?
          </h3>
          <p className="text-sm text-white/75 leading-relaxed">
            Conversemos sobre tu diagnóstico y diseñemos una hoja de ruta con herramientas digitales e inteligencia artificial ajustadas a tus necesidades reales.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
          <button
            onClick={handleWhatsAppClick}
            className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-[#25D366] text-[#020202] hover:bg-[#20bd5a] font-extrabold text-base transition-all shadow-md active:scale-[0.98] focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
          >
            <MessageCircle className="w-5 h-5 fill-current" />
            <span>Solicitar una asesoría por WhatsApp</span>
          </button>
        </div>
      </div>

      {/* Secondary Actions */}
      <div className="pt-4 border-t border-black/10 flex flex-col sm:flex-row items-center justify-between gap-4">
        <button
          onClick={onBackToRecommendations}
          className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl border border-black/15 bg-white text-[#020202] hover:bg-black/5 font-semibold text-sm transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FF751F]"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Ver recomendaciones</span>
        </button>

        <button
          onClick={onReset}
          className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-[#020202] text-white hover:bg-[#020202]/90 font-bold text-sm transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FF751F]"
        >
          <RotateCcw className="w-4 h-4" />
          <span>Realizar nuevamente el diagnóstico</span>
        </button>
      </div>

      {/* Configuration modal if WHATSAPP_NUMBER is pending */}
      <WhatsAppConfigModal
        isOpen={showConfigModal}
        onClose={() => setShowConfigModal(false)}
        onTestNumber={(num) => {
          setShowConfigModal(false);
          openWhatsApp(num);
        }}
      />
    </div>
  );
};
