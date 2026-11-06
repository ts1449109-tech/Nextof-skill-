import React, { useState } from 'react';
import { SKILL_COURSES } from '../data/curriculumData';
import { SkillCourse, SkillComponent, Language } from '../types';
import {
  Wrench,
  Smartphone,
  Zap,
  Cpu,
  ShieldAlert,
  Briefcase,
  PlayCircle,
  CheckCircle,
  HelpCircle,
  ArrowRight,
  Sparkles,
} from 'lucide-react';
import { QuizAssessment } from './QuizAssessment';
import { useSpeech } from '../hooks/useSpeech';

interface SkillLabProps {
  language: Language;
  onOpenAITeacherWithTopic?: (topic: string) => void;
}

export const SkillLab: React.FC<SkillLabProps> = ({
  language,
  onOpenAITeacherWithTopic,
}) => {
  const [selectedCourse, setSelectedCourse] = useState<SkillCourse>(SKILL_COURSES[0]);
  const [selectedComponent, setSelectedComponent] = useState<SkillComponent>(
    SKILL_COURSES[0].components[0]
  );
  const [activeTab, setActiveTab] = useState<'teardown' | 'practical' | 'careers' | 'quiz'>('teardown');
  const { speak } = useSpeech();

  const handleComponentSelect = (comp: SkillComponent) => {
    setSelectedComponent(comp);
  };

  const handleSpeakComponent = (comp: SkillComponent) => {
    const text =
      language === 'hi'
        ? `${comp.nameHi}। कार्य: ${comp.functionHi}। कार्य सिद्धांत: ${comp.workingPrincipleHi}`
        : `${comp.nameEn}. Function: ${comp.functionEn}. Working principle: ${comp.workingPrincipleEn}`;
    speak(text, language);
  };

  return (
    <div className="space-y-6">
      {/* Skill Library Top Categories */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
        <div>
          <div className="flex items-center gap-2 text-indigo-600 dark:text-indigo-400 text-xs font-bold uppercase tracking-wider">
            <Wrench className="w-4 h-4" />
            <span>{language === 'hi' ? 'ग्लोबल स्किल डेवलपमेंट' : 'Global Skill Development Library'}</span>
          </div>
          <h2 className="text-xl font-bold text-slate-900 dark:text-white mt-1">
            {language === 'hi' ? selectedCourse.titleHi : selectedCourse.titleEn}
          </h2>
          <p className="text-xs text-slate-500 mt-0.5">
            {language === 'hi' ? selectedCourse.taglineHi : selectedCourse.taglineEn}
          </p>
        </div>

        {/* Course Switcher Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-1 sm:pb-0">
          {SKILL_COURSES.map((course) => (
            <button
              key={course.id}
              onClick={() => {
                setSelectedCourse(course);
                setSelectedComponent(course.components[0]);
                setActiveTab('teardown');
              }}
              className={`px-3 py-2 rounded-xl text-xs font-medium whitespace-nowrap transition-colors flex items-center gap-1.5 ${
                selectedCourse.id === course.id
                  ? 'bg-indigo-600 text-white font-semibold shadow-xs'
                  : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
              }`}
            >
              {course.category === 'mobile_tech' && <Smartphone className="w-3.5 h-3.5" />}
              {course.category === 'automobile_ev' && <Zap className="w-3.5 h-3.5" />}
              <span>{language === 'hi' ? course.titleHi.split(':')[0] : course.titleEn.split(':')[0]}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Sub Navigation Tabs */}
      <div className="flex items-center gap-2 border-b border-slate-200 dark:border-slate-800 pb-2">
        <button
          onClick={() => setActiveTab('teardown')}
          className={`px-4 py-1.5 text-xs font-medium rounded-lg transition-colors ${
            activeTab === 'teardown'
              ? 'bg-slate-900 text-white dark:bg-white dark:text-slate-900 font-semibold'
              : 'text-slate-600 dark:text-slate-400 hover:text-slate-900'
          }`}
        >
          {language === 'hi' ? 'हार्डवेयर व पुर्जे' : 'Components & Teardown'}
        </button>

        <button
          onClick={() => setActiveTab('practical')}
          className={`px-4 py-1.5 text-xs font-medium rounded-lg transition-colors ${
            activeTab === 'practical'
              ? 'bg-slate-900 text-white dark:bg-white dark:text-slate-900 font-semibold'
              : 'text-slate-600 dark:text-slate-400 hover:text-slate-900'
          }`}
        >
          {language === 'hi' ? 'प्रैक्टिकल व सुरक्षा' : 'Practical & Safety'}
        </button>

        <button
          onClick={() => setActiveTab('careers')}
          className={`px-4 py-1.5 text-xs font-medium rounded-lg transition-colors ${
            activeTab === 'careers'
              ? 'bg-slate-900 text-white dark:bg-white dark:text-slate-900 font-semibold'
              : 'text-slate-600 dark:text-slate-400 hover:text-slate-900'
          }`}
        >
          {language === 'hi' ? 'करियर व उद्योग' : 'Career Pathways'}
        </button>

        <button
          onClick={() => setActiveTab('quiz')}
          className={`px-4 py-1.5 text-xs font-medium rounded-lg transition-colors ${
            activeTab === 'quiz'
              ? 'bg-slate-900 text-white dark:bg-white dark:text-slate-900 font-semibold'
              : 'text-slate-600 dark:text-slate-400 hover:text-slate-900'
          }`}
        >
          {language === 'hi' ? 'स्किल टेस्ट' : 'Skill Assessment'}
        </button>
      </div>

      {/* Tab 1: Components & Teardown Explorer */}
      {activeTab === 'teardown' && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          {/* Component Selection Column (4 cols) */}
          <div className="lg:col-span-4 space-y-2">
            <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider block px-1">
              {language === 'hi' ? 'मुख्य घटक चुनें:' : 'Select Hardware Component:'}
            </span>
            <div className="space-y-2">
              {selectedCourse.components.map((comp) => {
                const isSelected = selectedComponent.id === comp.id;
                return (
                  <button
                    key={comp.id}
                    onClick={() => handleComponentSelect(comp)}
                    className={`w-full text-left p-3.5 rounded-2xl border transition-all text-xs flex items-center justify-between ${
                      isSelected
                        ? 'border-indigo-600 bg-indigo-50/70 dark:bg-indigo-950/40 text-indigo-900 dark:text-white shadow-xs'
                        : 'border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 hover:border-slate-300'
                    }`}
                  >
                    <div>
                      <div className="font-bold text-sm">
                        {language === 'hi' ? comp.nameHi : comp.nameEn}
                      </div>
                      <div className="text-[11px] text-slate-400 mt-0.5 truncate max-w-[220px]">
                        {language === 'hi' ? comp.locationHi : comp.locationEn}
                      </div>
                    </div>
                    <ArrowRight className="w-4 h-4 opacity-50 shrink-0 ml-2" />
                  </button>
                );
              })}
            </div>

            {/* Course Overview Banner */}
            <div className="p-4 rounded-2xl bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-900/60 text-xs text-amber-900 dark:text-amber-200 space-y-1 mt-4">
              <div className="font-bold flex items-center gap-1.5">
                <Sparkles className="w-4 h-4 text-amber-600 dark:text-amber-400" />
                <span>{language === 'hi' ? 'तरुन सर का स्किल सिद्धांत' : 'Tarun Sir Skill Rule'}</span>
              </div>
              <p className="leading-relaxed">
                {language === 'hi'
                  ? 'किसी भी मशीन या फोन को रिपेयर करने से पहले उसके हर एक पुर्जे का सटीक कार्य और कनेक्शन जानना अनिवार्य है।'
                  : 'Before repairing any gadget, mastering the exact function and interconnection of every individual component is mandatory.'}
              </p>
            </div>
          </div>

          {/* Component Deep Detail Deck (8 cols) */}
          <div className="lg:col-span-8 p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-6 shadow-sm">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-100 dark:border-slate-800">
              <div>
                <span className="text-[11px] font-mono text-indigo-600 dark:text-indigo-400 uppercase tracking-widest">
                  Hardware Breakdown
                </span>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mt-0.5">
                  {language === 'hi' ? selectedComponent.nameHi : selectedComponent.nameEn}
                </h3>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => handleSpeakComponent(selectedComponent)}
                  className="px-3 py-1.5 rounded-xl text-xs font-semibold bg-indigo-600 hover:bg-indigo-700 text-white transition-colors"
                >
                  {language === 'hi' ? 'विवरण सुनें' : 'Listen Explanation'}
                </button>
                {onOpenAITeacherWithTopic && (
                  <button
                    onClick={() => onOpenAITeacherWithTopic(selectedComponent.nameEn)}
                    className="px-3 py-1.5 rounded-xl text-xs font-medium border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                  >
                    {language === 'hi' ? 'AI टीचर से समझें' : 'Ask AI Teacher'}
                  </button>
                )}
              </div>
            </div>

            {/* Grid of 4 Core Aspects: Function, Working Principle, Location, Connections */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-800 space-y-1.5">
                <span className="text-xs font-bold text-slate-500 uppercase tracking-wide">
                  {language === 'hi' ? '1. मुख्य कार्य (Function)' : '1. Core Function'}
                </span>
                <p className="text-xs sm:text-sm text-slate-800 dark:text-slate-200 leading-relaxed">
                  {language === 'hi' ? selectedComponent.functionHi : selectedComponent.functionEn}
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-800 space-y-1.5">
                <span className="text-xs font-bold text-slate-500 uppercase tracking-wide">
                  {language === 'hi' ? '2. कार्य सिद्धांत (Working Principle)' : '2. Working Principle'}
                </span>
                <p className="text-xs sm:text-sm text-slate-800 dark:text-slate-200 leading-relaxed">
                  {language === 'hi' ? selectedComponent.workingPrincipleHi : selectedComponent.workingPrincipleEn}
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-800 space-y-1.5">
                <span className="text-xs font-bold text-slate-500 uppercase tracking-wide">
                  {language === 'hi' ? '3. भीतरी स्थिति (Location inside device)' : '3. Location inside Device'}
                </span>
                <p className="text-xs sm:text-sm text-slate-800 dark:text-slate-200 leading-relaxed">
                  {language === 'hi' ? selectedComponent.locationHi : selectedComponent.locationEn}
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-800 space-y-1.5">
                <span className="text-xs font-bold text-slate-500 uppercase tracking-wide">
                  {language === 'hi' ? '4. अन्य पुर्जों से कनेक्शन (Connections)' : '4. Component Connections'}
                </span>
                <p className="text-xs sm:text-sm text-slate-800 dark:text-slate-200 leading-relaxed">
                  {language === 'hi' ? selectedComponent.connectionHi : selectedComponent.connectionEn}
                </p>
              </div>
            </div>

            {/* Mandatory Safety Rule Box */}
            <div className="p-4 rounded-xl bg-rose-50 dark:bg-rose-950/40 border border-rose-200 dark:border-rose-900/60 text-xs sm:text-sm text-rose-900 dark:text-rose-200 flex items-start gap-3">
              <ShieldAlert className="w-5 h-5 text-rose-600 shrink-0 mt-0.5" />
              <div>
                <div className="font-bold">
                  {language === 'hi' ? 'सुरक्षा नियम एवं सावधानियां (Safety Protocol):' : 'Safety Warning & Protocol:'}
                </div>
                <div className="mt-0.5 leading-relaxed">
                  {language === 'hi' ? selectedComponent.safetyTipsHi : selectedComponent.safetyTipsEn}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Tab 2: Practical & Demonstration */}
      {activeTab === 'practical' && (
        <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-4 shadow-sm">
          <div className="flex items-center gap-2 text-indigo-600 dark:text-indigo-400">
            <PlayCircle className="w-5 h-5" />
            <h3 className="text-base font-bold text-slate-900 dark:text-white">
              {language === 'hi' ? 'सुरक्षित प्रैक्टिकल गतिविधि एवं लैब टेस्ट' : 'Safe Practical Learning & Diagnostics'}
            </h3>
          </div>
          <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
            {language === 'hi' ? selectedCourse.practicalDemonstrationHi : selectedCourse.practicalDemonstrationEn}
          </p>

          <div className="p-4 rounded-xl bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-900/60 text-xs text-amber-900 dark:text-amber-200">
            <strong>{language === 'hi' ? 'महत्वपूर्ण चेतावनी:' : 'Important Notice:'}</strong>{' '}
            {language === 'hi'
              ? 'बिजली, बैटरी, भारी मशीनरी या उच्च वोल्टेज वाले प्रयोग कभी भी अकेले या बिना योग्य प्रशिक्षक के न करें।'
              : 'Never execute high-voltage or chemical battery practical work without qualified workshop supervision.'}
          </div>
        </div>
      )}

      {/* Tab 3: Career Opportunities */}
      {activeTab === 'careers' && (
        <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-4 shadow-sm">
          <div className="flex items-center gap-2 text-indigo-600 dark:text-indigo-400">
            <Briefcase className="w-5 h-5" />
            <h3 className="text-base font-bold text-slate-900 dark:text-white">
              {language === 'hi' ? 'उद्योग में रोजगार एवं स्वरोजगार के अवसर' : 'Industry Careers & Entrepreneurship'}
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {(language === 'hi' ? selectedCourse.careerOpportunitiesHi : selectedCourse.careerOpportunitiesEn).map(
              (career, idx) => (
                <div
                  key={idx}
                  className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-800 flex items-center gap-3 text-xs sm:text-sm font-medium text-slate-800 dark:text-slate-200"
                >
                  <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span>{career}</span>
                </div>
              )
            )}
          </div>
        </div>
      )}

      {/* Tab 4: Quiz Assessment */}
      {activeTab === 'quiz' && (
        <QuizAssessment questions={selectedCourse.questions} language={language} />
      )}
    </div>
  );
};
