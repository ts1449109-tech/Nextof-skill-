import React, { useState, useEffect } from 'react';
import { DownloadedItem, Language } from '../types';
import {
  FolderDown,
  Trash2,
  FileText,
  Image as ImageIcon,
  HardDrive,
  Download,
  CheckCircle,
  ExternalLink,
  BookOpen,
} from 'lucide-react';

interface DownloadsLibraryProps {
  language: Language;
}

export const DownloadsLibrary: React.FC<DownloadsLibraryProps> = ({ language }) => {
  const [items, setItems] = useState<DownloadedItem[]>([]);
  const [activeItem, setActiveItem] = useState<DownloadedItem | null>(null);

  useEffect(() => {
    // Load from localStorage or seed initial default revision materials
    const saved = localStorage.getItem('nextof_downloads');
    if (saved) {
      try {
        setItems(JSON.parse(saved));
      } catch {
        // ignore
      }
    } else {
      const defaultPacks: DownloadedItem[] = [
        {
          id: 'dl-1',
          title: 'Class 10 Biology - Complete Heart & Circulation Formula Sheet',
          category: 'formula_sheet',
          sizeKb: 240,
          dateDownloaded: 'Nov 6, 2026',
          content: `NEXTOF REVISION SHEET · FOUNDER: TARUN SIR
Topic: Human Heart & Double Circulation
Grade: Class 10 Biology

1. Cardiac Output Formula:
CO = Stroke Volume (SV) × Heart Rate (HR)
Average SV = 70 mL
Average HR = 72 beats/min
Normal CO = 5040 mL/min ≈ 5.04 Liters/minute

2. Blood Pressure Benchmark:
120/80 mmHg
120 mmHg = Systolic (Contraction phase)
80 mmHg = Diastolic (Relaxation phase)
Measured with Sphygmomanometer

3. Chambers & Valves:
- Right Atrium: Receives deoxygenated blood from Vena Cava
- Right Ventricle: Pumps deoxygenated blood to lungs via Pulmonary Artery
- Left Atrium: Receives oxygenated blood via Pulmonary Vein
- Left Ventricle: Thickest walls, pumps to body through Aorta
- Tricuspid & Bicuspid valves prevent backward flow.`,
        },
        {
          id: 'dl-2',
          title: 'Smartphone Hardware Teardown Blueprint & Diagnostic Sheet',
          category: 'diagram',
          sizeKb: 512,
          dateDownloaded: 'Nov 6, 2026',
          content: `NEXTOF SKILL DEVELOPMENT · FOUNDER: TARUN SIR
Smartphone Hardware Architecture & Diagnostic Guide

Key Components:
1. Qualcomm Snapdragon SoC: 4nm FinFET processor, Adreno GPU, Hexagon NPU.
2. AMOLED Panel: Self-emissive pixels with capacitive touch digitizer matrix.
3. Lithium-Ion Battery: 4800mAh, 3.85V nominal, with PCM protection circuit.
4. Triple Camera: 50MP primary sensor with voice-coil motor OIS.

Essential Diagnostics:
- No power / dead phone: Check VBUS line for 5V input, check battery voltage (>3.7V).
- Display black with sound: AMOLED display flex damaged or backlight rail shorted.`,
          imageUrl: '/src/assets/images/diagram_smartphone_teardown_1793979149213.jpg',
        },
        {
          id: 'dl-3',
          title: 'Class 12 Physics - Current Electricity 70-Practice Question Bank',
          category: 'practice_set',
          sizeKb: 380,
          dateDownloaded: 'Nov 6, 2026',
          content: `NEXTOF QUESTION BANK · CLASS 12 PHYSICS
Current Electricity Practice Paper (70 Conceptual & Numerical Questions)

Topics Included:
- Drift Velocity & Mobility derivations
- Ohm's Law & Temperature coefficient of resistance
- Kirchhoff's Junction & Loop Rules
- Wheatstone Bridge balanced bridge conditions
- Potentiometer EMF comparison

All answers include step-by-step verified derivations and SI unit checks.`,
        },
      ];
      setItems(defaultPacks);
      localStorage.setItem('nextof_downloads', JSON.stringify(defaultPacks));
    }
  }, []);

  const totalSizeKb = items.reduce((acc, curr) => acc + curr.sizeKb, 0);

  const handleDeleteItem = (id: string) => {
    const updated = items.filter((item) => item.id !== id);
    setItems(updated);
    localStorage.setItem('nextof_downloads', JSON.stringify(updated));
    if (activeItem?.id === id) setActiveItem(null);
  };

  const handleClearAll = () => {
    setItems([]);
    localStorage.removeItem('nextof_downloads');
    setActiveItem(null);
  };

  const downloadTextFile = (item: DownloadedItem) => {
    const blob = new Blob([item.content], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `${item.title.replace(/\s+/g, '_')}.txt`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="space-y-6">
      {/* Top Header & Storage Status */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
        <div>
          <div className="flex items-center gap-2 text-indigo-600 dark:text-indigo-400 text-xs font-bold uppercase tracking-wider">
            <FolderDown className="w-4 h-4" />
            <span>{language === 'hi' ? 'ऑफलाइन स्टडी लाइब्रेरी' : 'My Offline Study Library'}</span>
          </div>
          <h2 className="text-xl font-bold text-slate-900 dark:text-white mt-1">
            {language === 'hi' ? 'डाउनलोड किए गए नोट्स व डायग्राम्स' : 'Downloaded Notes & Diagrams'}
          </h2>
          <div className="flex items-center gap-2 text-xs text-slate-500 mt-1">
            <HardDrive className="w-3.5 h-3.5" />
            <span>
              {items.length} {language === 'hi' ? 'फाइलें' : 'files'} ·{' '}
              {(totalSizeKb / 1024).toFixed(2)} MB {language === 'hi' ? 'मेमोरी' : 'storage used'}
            </span>
          </div>
        </div>

        {items.length > 0 && (
          <button
            onClick={handleClearAll}
            className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-xl border border-rose-200 dark:border-rose-900 text-rose-600 dark:text-rose-400 hover:bg-rose-50 dark:hover:bg-rose-950/40 transition-colors"
          >
            <Trash2 className="w-3.5 h-3.5" />
            <span>{language === 'hi' ? 'सभी हटाएं' : 'Clear All'}</span>
          </button>
        )}
      </div>

      {/* Main Grid: List of downloads + Active Viewer */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Left List (5 cols) */}
        <div className="lg:col-span-5 space-y-3">
          {items.length === 0 ? (
            <div className="p-8 text-center bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 text-slate-500 text-xs space-y-2">
              <FolderDown className="w-8 h-8 mx-auto opacity-40" />
              <p>
                {language === 'hi'
                  ? 'आपकी ऑफलाइन लाइब्रेरी अभी खाली है। किसी भी पाठ या डायग्राम से "Save" पर क्लिक करके यहाँ जोड़ें।'
                  : 'Your offline library is empty. Save notes or diagrams from any lesson to access them offline.'}
              </p>
            </div>
          ) : (
            items.map((item) => {
              const isSelected = activeItem?.id === item.id;
              return (
                <div
                  key={item.id}
                  onClick={() => setActiveItem(item)}
                  className={`p-4 rounded-2xl border transition-all cursor-pointer text-xs flex flex-col justify-between gap-3 ${
                    isSelected
                      ? 'border-indigo-600 bg-indigo-50/70 dark:bg-indigo-950/40'
                      : 'border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:border-slate-300'
                  }`}
                >
                  <div className="flex items-start justify-between gap-2">
                    <div className="flex items-start gap-2.5">
                      <div className="w-8 h-8 rounded-lg bg-slate-100 dark:bg-slate-800 text-indigo-600 dark:text-indigo-400 flex items-center justify-center shrink-0 mt-0.5">
                        {item.imageUrl ? <ImageIcon className="w-4 h-4" /> : <FileText className="w-4 h-4" />}
                      </div>
                      <div>
                        <h4 className="font-bold text-sm text-slate-900 dark:text-white leading-snug">
                          {item.title}
                        </h4>
                        <div className="text-[11px] text-slate-400 mt-1">
                          {item.dateDownloaded} · {item.sizeKb} KB
                        </div>
                      </div>
                    </div>

                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleDeleteItem(item.id);
                      }}
                      className="p-1 text-slate-400 hover:text-rose-500 transition-colors"
                      title="Delete"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              );
            })
          )}

          {/* Legal / Protection Notice */}
          <div className="p-3.5 rounded-xl bg-slate-100 dark:bg-slate-800/60 text-[11px] text-slate-500 dark:text-slate-400 leading-relaxed">
            {language === 'hi'
              ? '🔒 सुरक्षा नियम: नोट्स, फॉर्मूले और स्वीकृत डायग्राम्स ऑफलाइन पढ़ाई के लिए उपलब्ध हैं। सुरक्षा नीतियों के तहत वीडियो डाउनलोड निषिद्ध है।'
              : '🔒 Security Rule: Notes, formulas, and verified educational diagrams are permitted for offline study. Direct video downloads are prohibited to protect educational stream integrity.'}
          </div>
        </div>

        {/* Right Active Viewer (7 cols) */}
        <div className="lg:col-span-7">
          {activeItem ? (
            <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-4 shadow-sm animate-in fade-in duration-200">
              <div className="flex items-center justify-between pb-3 border-b border-slate-100 dark:border-slate-800">
                <div>
                  <span className="text-[10px] font-mono uppercase text-indigo-600 dark:text-indigo-400 tracking-wider">
                    {activeItem.category}
                  </span>
                  <h3 className="text-base font-bold text-slate-900 dark:text-white">
                    {activeItem.title}
                  </h3>
                </div>

                <button
                  onClick={() => downloadTextFile(activeItem)}
                  className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white shadow-xs transition-colors"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>{language === 'hi' ? 'टेक्स्ट डाउनलोड' : 'Export TXT'}</span>
                </button>
              </div>

              {activeItem.imageUrl && (
                <div className="rounded-xl overflow-hidden bg-slate-950 border border-slate-800 max-h-72 flex items-center justify-center">
                  <img
                    src={activeItem.imageUrl}
                    alt={activeItem.title}
                    className="w-full h-full object-contain"
                  />
                </div>
              )}

              <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/50 font-mono text-xs text-slate-800 dark:text-slate-200 whitespace-pre-wrap leading-relaxed max-h-[380px] overflow-y-auto border border-slate-100 dark:border-slate-800">
                {activeItem.content}
              </div>
            </div>
          ) : (
            <div className="p-12 text-center bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 text-slate-400 text-xs">
              {language === 'hi'
                ? 'पढ़ने या एक्सपोर्ट करने के लिए किसी भी फ़ाइल पर क्लिक करें'
                : 'Select any study item from the left to view notes or export'}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
