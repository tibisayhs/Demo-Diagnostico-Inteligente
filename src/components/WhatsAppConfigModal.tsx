import React, { useState } from 'react';
import { X, MessageSquare, AlertTriangle, ExternalLink, Copy, Check } from 'lucide-react';
import { WHATSAPP_MESSAGE } from '../constants/config';

interface WhatsAppConfigModalProps {
  isOpen: boolean;
  onClose: () => void;
  onTestNumber: (number: string) => void;
}

export const WhatsAppConfigModal: React.FC<WhatsAppConfigModalProps> = ({
  isOpen,
  onClose,
  onTestNumber,
}) => {
  const [testNumber, setTestNumber] = useState('');
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handleCopyMessage = () => {
    navigator.clipboard.writeText(WHATSAPP_MESSAGE);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleDirectTest = (e: React.FormEvent) => {
    e.preventDefault();
    const clean = testNumber.replace(/\D/g, '');
    if (clean.length >= 7) {
      onTestNumber(clean);
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200"
      role="dialog"
      aria-modal="true"
    >
      <div className="bg-[#FBF8F4] border border-black/15 rounded-3xl max-w-lg w-full p-6 sm:p-8 space-y-6 shadow-2xl relative">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full hover:bg-black/5 text-[#020202]/60 hover:text-[#020202] transition-colors"
          title="Cerrar aviso"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Warning Header */}
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 rounded-2xl bg-[#FF751F]/15 text-[#FF751F] flex items-center justify-center shrink-0">
            <AlertTriangle className="w-6 h-6" />
          </div>
          <div className="space-y-1">
            <h3 className="text-xl font-extrabold text-[#020202] tracking-tight">
              Aviso de configuración
            </h3>
            <p className="text-xs font-semibold text-[#FF751F] uppercase tracking-wider">
              WHATSAPP_NUMBER pendiente
            </p>
          </div>
        </div>

        {/* Explanation */}
        <p className="text-sm text-[#020202]/80 leading-relaxed">
          Para proteger la privacidad y evitar enlaces a números ficticios, el número de contacto debe configurarse en la constante <code className="bg-black/10 px-1.5 py-0.5 rounded font-mono text-xs text-[#020202] font-bold">WHATSAPP_NUMBER</code> en el archivo <code className="bg-black/10 px-1.5 py-0.5 rounded font-mono text-xs text-[#020202]">src/constants/config.ts</code>.
        </p>

        {/* Prepared Message Preview */}
        <div className="p-4 rounded-2xl bg-white border border-black/10 space-y-2">
          <div className="flex items-center justify-between text-xs font-bold text-[#020202]/70 uppercase tracking-wider">
            <span className="flex items-center gap-1.5">
              <MessageSquare className="w-3.5 h-3.5 text-[#020202]" />
              Mensaje preparado para el chat
            </span>
            <button
              onClick={handleCopyMessage}
              className="inline-flex items-center gap-1 text-[11px] font-semibold text-[#020202] hover:text-[#FF751F] transition-colors"
            >
              {copied ? (
                <>
                  <Check className="w-3 h-3 text-[#020202]" />
                  <span>Copiado</span>
                </>
              ) : (
                <>
                  <Copy className="w-3 h-3" />
                  <span>Copiar</span>
                </>
              )}
            </button>
          </div>
          <p className="text-xs text-[#020202]/80 font-mono bg-[#FBF8F4] p-3 rounded-xl border border-black/5 leading-relaxed">
            "{WHATSAPP_MESSAGE}"
          </p>
        </div>

        {/* Interactive Workshop Tester Form */}
        <form onSubmit={handleDirectTest} className="space-y-3 pt-1">
          <label className="block text-xs font-bold text-[#020202] uppercase tracking-wider">
            Probar enlace en vivo durante el taller:
          </label>
          <div className="flex gap-2">
            <input
              type="tel"
              value={testNumber}
              onChange={(e) => setTestNumber(e.target.value)}
              placeholder="Ej: 5215512345678"
              className="flex-1 px-4 py-2.5 rounded-xl border border-black/20 bg-white text-sm text-[#020202] placeholder-[#020202]/40 focus:outline-none focus:ring-2 focus:ring-[#FF751F]"
            />
            <button
              type="submit"
              disabled={testNumber.replace(/\D/g, '').length < 7}
              className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-[#020202] text-white hover:bg-[#020202]/90 disabled:opacity-40 disabled:cursor-not-allowed font-semibold text-xs tracking-wide transition-all"
            >
              <span>Abrir WhatsApp</span>
              <ExternalLink className="w-3.5 h-3.5 text-[#C1FF72]" />
            </button>
          </div>
          <p className="text-[11px] text-[#020202]/50">
            Ingresa tu número con código de país para verificar la apertura de la conversación.
          </p>
        </form>

        {/* Footer */}
        <div className="pt-2 flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2.5 rounded-xl border border-black/15 bg-white text-[#020202] hover:bg-black/5 font-semibold text-xs uppercase tracking-wider transition-all"
          >
            Entendido
          </button>
        </div>
      </div>
    </div>
  );
};
