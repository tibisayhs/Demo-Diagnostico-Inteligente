import React from 'react';
import { X, Folder, FileCode, Download, ExternalLink } from 'lucide-react';

interface FileTreeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const FileTreeModal: React.FC<FileTreeModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200"
      role="dialog"
      aria-modal="true"
    >
      <div className="bg-[#FBF8F4] border border-black/15 rounded-3xl max-w-xl w-full p-6 sm:p-8 space-y-5 shadow-2xl relative max-h-[90vh] overflow-y-auto">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full hover:bg-black/5 text-[#020202]/60 hover:text-[#020202] transition-colors"
          title="Cerrar"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="space-y-1">
          <div className="flex items-center gap-2 text-xs font-bold text-[#FF751F] uppercase tracking-wider">
            <span>Estructura del Proyecto</span>
          </div>
          <h3 className="text-xl font-extrabold text-[#020202] tracking-tight">
            Carpetas y Archivos del Diagnóstico
          </h3>
          <p className="text-xs text-[#020202]/70 leading-relaxed">
            Estos son exactamente los archivos que contiene el proyecto. Puedes descargarlos todos en un solo clic con el botón verde.
          </p>
        </div>

        {/* Download Callout */}
        <div className="p-4 rounded-2xl bg-[#020202] text-white flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="space-y-0.5 text-center sm:text-left">
            <span className="text-xs font-bold text-[#C1FF72] uppercase tracking-wide">
              Descarga directa
            </span>
            <p className="text-xs text-white/80">
              Archivo .ZIP listo para descomprimir o subir a GitHub
            </p>
          </div>
          <div className="flex items-center gap-2">
            <a
              href="/diagnostico-inteligente-negocios.zip"
              target="_blank"
              rel="noopener noreferrer"
              download="diagnostico-inteligente-negocios.zip"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#C1FF72] text-[#020202] hover:bg-[#b0f25e] font-bold text-xs shadow transition-all shrink-0"
            >
              <Download className="w-4 h-4" />
              <span>Descargar .ZIP</span>
            </a>
          </div>
        </div>

        {/* Link directo de respaldo */}
        <div className="p-3 rounded-xl bg-black/5 text-[11px] text-[#020202]/70 space-y-1">
          <span className="font-bold text-[#020202]">¿El navegador bloqueó la descarga dentro de la vista previa?</span>
          <p>
            Copia y pega este enlace directo en una pestaña nueva de tu navegador:
          </p>
          <code className="block bg-white p-2 rounded border border-black/10 font-mono text-[10px] break-all select-all text-[#020202]">
            {window.location.origin}/diagnostico-inteligente-negocios.zip
          </code>
        </div>

        {/* File tree visual representation */}
        <div className="bg-white border border-black/10 rounded-2xl p-4 font-mono text-xs text-[#020202] space-y-1.5 overflow-x-auto">
          <div className="flex items-center gap-2 font-bold text-[#FF751F]">
            <Folder className="w-4 h-4 text-[#FF751F]" />
            <span>diagnostico-inteligente/</span>
          </div>

          <div className="pl-4 space-y-1 text-[#020202]/80">
            <div className="flex items-center gap-2 text-[#020202]">
              <Folder className="w-4 h-4 text-[#020202]/60" />
              <span className="font-bold">src/</span>
            </div>

            <div className="pl-6 space-y-1">
              <div className="flex items-center gap-2 text-[#020202]">
                <Folder className="w-4 h-4 text-[#020202]/40" />
                <span className="font-semibold">components/</span>
                <span className="text-[10px] text-[#020202]/50 font-sans italic">(Las 5 pantallas y componentes)</span>
              </div>
              <div className="pl-6 space-y-0.5 text-[11px] text-[#020202]/70">
                <div>├── Header.tsx</div>
                <div>├── ProgressBar.tsx</div>
                <div>├── ScreenInicio.tsx <span className="font-sans italic">(Pantalla 1)</span></div>
                <div>├── ScreenCuestionario.tsx <span className="font-sans italic">(Pantalla 2)</span></div>
                <div>├── ScreenResultados.tsx <span className="font-sans italic">(Pantalla 3)</span></div>
                <div>├── ScreenRecomendaciones.tsx <span className="font-sans italic">(Pantalla 4)</span></div>
                <div>├── ScreenProximoPaso.tsx <span className="font-sans italic">(Pantalla 5)</span></div>
                <div>└── WhatsAppConfigModal.tsx</div>
              </div>

              <div className="flex items-center gap-2 text-[#020202]">
                <Folder className="w-4 h-4 text-[#020202]/40" />
                <span className="font-semibold">constants/</span>
              </div>
              <div className="pl-6 text-[11px] text-[#020202]/70">
                <div>└── config.ts <span className="font-sans italic font-bold text-[#FF751F]">(Aquí se configura WHATSAPP_NUMBER)</span></div>
              </div>

              <div className="flex items-center gap-2 text-[#020202]">
                <Folder className="w-4 h-4 text-[#020202]/40" />
                <span className="font-semibold">data/</span>
              </div>
              <div className="pl-6 text-[11px] text-[#020202]/70">
                <div>└── diagnosticData.ts <span className="font-sans italic">(Preguntas, reglas y recomendaciones)</span></div>
              </div>

              <div className="flex items-center gap-2">
                <FileCode className="w-3.5 h-3.5 text-blue-500" />
                <span>App.tsx</span>
              </div>
              <div className="flex items-center gap-2">
                <FileCode className="w-3.5 h-3.5 text-blue-500" />
                <span>main.tsx</span>
              </div>
              <div className="flex items-center gap-2">
                <FileCode className="w-3.5 h-3.5 text-purple-500" />
                <span>index.css</span>
              </div>
              <div className="flex items-center gap-2">
                <FileCode className="w-3.5 h-3.5 text-blue-500" />
                <span>types.ts</span>
              </div>
            </div>

            <div className="pt-2 border-t border-black/5 space-y-1">
              <div className="flex items-center gap-2">
                <FileCode className="w-3.5 h-3.5 text-orange-500" />
                <span>index.html</span>
              </div>
              <div className="flex items-center gap-2">
                <FileCode className="w-3.5 h-3.5 text-yellow-600" />
                <span>package.json</span>
              </div>
              <div className="flex items-center gap-2">
                <FileCode className="w-3.5 h-3.5 text-blue-600" />
                <span>vite.config.ts</span>
              </div>
              <div className="flex items-center gap-2">
                <FileCode className="w-3.5 h-3.5 text-blue-600" />
                <span>tsconfig.json</span>
              </div>
            </div>
          </div>
        </div>

        {/* GitHub link directly */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-2">
          <a
            href="https://github.com/tibisayhs/Demo-Diagnostico-Inteligente"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-semibold text-[#020202] hover:text-[#FF751F] inline-flex items-center gap-1.5"
          >
            <span>Ir a tu repositorio en GitHub</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>

          <button
            onClick={onClose}
            className="px-5 py-2 rounded-xl bg-black/5 hover:bg-black/10 text-xs font-bold text-[#020202] transition-colors"
          >
            Cerrar
          </button>
        </div>
      </div>
    </div>
  );
};
