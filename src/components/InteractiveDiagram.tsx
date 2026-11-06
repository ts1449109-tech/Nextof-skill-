import React, { useState } from 'react';
import { EducationalDiagram, Language, DiagramHotspot } from '../types';
import {
  ZoomIn,
  ZoomOut,
  RotateCcw,
  Download,
  Info,
  CheckCircle,
  Eye,
  Layers,
} from 'lucide-react';

interface InteractiveDiagramProps {
  diagram: EducationalDiagram;
  language: Language;
  onSaveToDownloads?: (diagram: EducationalDiagram) => void;
}

export const InteractiveDiagram: React.FC<InteractiveDiagramProps> = ({
  diagram,
  language,
  onSaveToDownloads,
}) => {
  const [selectedHotspot, setSelectedHotspot] = useState<DiagramHotspot | null>(
    diagram.hotspots[0] || null
  );
  const [zoomLevel, setZoomLevel] = useState(1);
  const [isSaved, setIsSaved] = useState(false);

  const handleZoom = (delta: number) => {
    setZoomLevel((prev) => Math.min(Math.max(1, prev + delta), 2.2));
  };

  const handleDownload = () => {
    if (onSaveToDownloads) {
      onSaveToDownloads(diagram);
    }
    // Also trigger standard browser image download for permitted diagrams
    const link = document.createElement('a');
    link.href = diagram.imageUrl;
    link.download = `NEXTOF_${diagram.id}.jpg`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    setIsSaved(true);
    setTimeout(() => setIsSaved(false), 2500);
  };

  return (
    <div className="space-y-4">
      {/* Visual Canvas Stage & Info Deck */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Left / Top Stage: Visual Diagram with Interactive Hotspots (7-8 cols) */}
        <div className="lg:col-span-8 space-y-3">
          <div className="relative rounded-2xl bg-slate-900 border border-slate-200 dark:border-slate-800 overflow-hidden shadow-md flex items-center justify-center min-h-[380px] max-h-[560px]">
            {/* Visual Image with transform zoom */}
            <div
              className="relative w-full h-full flex items-center justify-center transition-transform duration-200 ease-out select-none"
              style={{ transform: `scale(${zoomLevel})` }}
            >
              <img
                src={diagram.imageUrl}
                alt={diagram.titleEn}
                className="w-full h-auto max-h-[540px] object-contain"
                referrerPolicy="no-referrer"
              />

              {/* Interactive Hotspot Pins */}
              {diagram.hotspots.map((hs) => {
                const isSelected = selectedHotspot?.id === hs.id;
                return (
                  <button
                    key={hs.id}
                    onClick={() => setSelectedHotspot(hs)}
                    style={{ left: `${hs.x}%`, top: `${hs.y}%` }}
                    className={`absolute -translate-x-1/2 -translate-y-1/2 min-h-[44px] min-w-[44px] flex items-center justify-center group focus:outline-none`}
                    title={language === 'hi' ? hs.titleHi : hs.titleEn}
                  >
                    <span className="relative flex h-6 w-6">
                      <span
                        className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${
                          isSelected ? 'bg-amber-400' : 'bg-indigo-400'
                        }`}
                      />
                      <span
                        className={`relative inline-flex rounded-full h-6 w-6 border-2 border-white items-center justify-center text-[10px] font-bold text-white shadow-lg ${
                          isSelected ? 'bg-amber-500 scale-110' : 'bg-indigo-600'
                        }`}
                      >
                        +
                      </span>
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Floating Zoom & Action Toolbar */}
            <div className="absolute bottom-3 right-3 flex items-center gap-1.5 p-1 rounded-xl bg-black/75 backdrop-blur-md text-white border border-slate-700/60 shadow-lg">
              <button
                onClick={() => handleZoom(0.25)}
                className="p-1.5 hover:bg-white/20 rounded-lg transition-colors"
                title="Zoom In"
              >
                <ZoomIn className="w-4 h-4" />
              </button>
              <button
                onClick={() => handleZoom(-0.25)}
                className="p-1.5 hover:bg-white/20 rounded-lg transition-colors"
                title="Zoom Out"
              >
                <ZoomOut className="w-4 h-4" />
              </button>
              <button
                onClick={() => setZoomLevel(1)}
                className="p-1.5 hover:bg-white/20 rounded-lg transition-colors"
                title="Reset Zoom"
              >
                <RotateCcw className="w-4 h-4" />
              </button>
              <div className="w-[1px] h-4 bg-slate-700 mx-1" />
              <button
                onClick={handleDownload}
                className="flex items-center gap-1 px-2.5 py-1 text-xs font-medium rounded-lg bg-indigo-600 hover:bg-indigo-700 transition-colors"
              >
                {isSaved ? <CheckCircle className="w-3.5 h-3.5" /> : <Download className="w-3.5 h-3.5" />}
                <span>{isSaved ? 'Saved' : 'Save'}</span>
              </button>
            </div>

            {/* Top Badge */}
            <div className="absolute top-3 left-3 flex items-center gap-2 px-3 py-1 rounded-lg bg-black/70 backdrop-blur-md text-white text-xs border border-slate-700/50">
              <Layers className="w-3.5 h-3.5 text-indigo-400" />
              <span>{language === 'hi' ? 'इंटरैक्टिव लेबल डायग्राम' : 'Interactive Hotspot Model'}</span>
            </div>
          </div>

          <div className="flex items-center justify-between text-xs text-slate-500 dark:text-slate-400 px-1">
            <span>
              {language === 'hi'
                ? 'डायग्राम के किसी भी (+) बिंदु पर टैप करें'
                : 'Tap any (+) hotspot pin to inspect structure details'}
            </span>
            <span className="font-mono">{Math.round(zoomLevel * 100)}% scale</span>
          </div>
        </div>

        {/* Right Stage: Detailed Hotspot Inspector (4-5 cols) */}
        <div className="lg:col-span-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-5 shadow-sm space-y-4">
          <div className="flex items-center gap-2 text-indigo-600 dark:text-indigo-400">
            <Info className="w-4 h-4" />
            <h4 className="text-xs font-bold uppercase tracking-wider">
              {language === 'hi' ? 'कॉम्पोनेन्ट विश्लेषण' : 'Component Breakdown'}
            </h4>
          </div>

          {selectedHotspot ? (
            <div className="space-y-4 animate-in fade-in duration-200">
              <div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                  {language === 'hi' ? selectedHotspot.titleHi : selectedHotspot.titleEn}
                </h3>
                <div className="text-xs text-slate-400 font-mono mt-0.5">
                  ID: {selectedHotspot.id} · Hotspot Coordinates ({selectedHotspot.x}%, {selectedHotspot.y}%)
                </div>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-800 text-sm leading-relaxed text-slate-700 dark:text-slate-200">
                {language === 'hi' ? selectedHotspot.descHi : selectedHotspot.descEn}
              </div>

              {/* Hotspot List Quick Switcher */}
              <div className="space-y-2 pt-2 border-t border-slate-100 dark:border-slate-800">
                <span className="text-xs font-medium text-slate-500">
                  {language === 'hi' ? 'सभी मुख्य भाग:' : 'All Labeled Hotspots:'}
                </span>
                <div className="flex flex-col gap-1.5">
                  {diagram.hotspots.map((hs) => (
                    <button
                      key={hs.id}
                      onClick={() => setSelectedHotspot(hs)}
                      className={`text-left px-3 py-2 rounded-xl text-xs flex items-center justify-between transition-colors ${
                        selectedHotspot.id === hs.id
                          ? 'bg-indigo-600 text-white font-semibold'
                          : 'bg-slate-100 dark:bg-slate-800/80 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
                      }`}
                    >
                      <span className="truncate">{language === 'hi' ? hs.titleHi : hs.titleEn}</span>
                      <Eye className="w-3.5 h-3.5 ml-2 opacity-70 shrink-0" />
                    </button>
                  ))}
                </div>
              </div>
            </div>
          ) : (
            <div className="text-center py-10 text-slate-400 text-xs">
              {language === 'hi'
                ? 'विवरण देखने के लिए डायग्राम पर टैप करें'
                : 'Select a hotspot to view details'}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
