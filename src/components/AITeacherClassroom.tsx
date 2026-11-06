import React, { useState } from 'react';
import { Language, ChapterLesson } from '../types';
import { useSpeech } from '../hooks/useSpeech';
import {
  Volume2,
  VolumeX,
  Send,
  Sparkles,
  HelpCircle,
  RotateCcw,
  BookOpen,
  PenTool,
  CheckCircle2,
  MessageSquare,
  AlertCircle,
  Copy,
  Check,
} from 'lucide-react';

interface AITeacherClassroomProps {
  lesson: ChapterLesson;
  language: Language;
  onSelectDiagram?: () => void;
}

export const AITeacherClassroom: React.FC<AITeacherClassroomProps> = ({
  lesson,
  language,
  onSelectDiagram,
}) => {
  const { speak, stop, isSpeaking, isSupported } = useSpeech();
  const [boardStep, setBoardStep] = useState(0);
  const [studentInput, setStudentInput] = useState('');
  const [isAskingAI, setIsAskingAI] = useState(false);
  const [copiedNote, setCopiedNote] = useState(false);
  const [chatLog, setChatLog] = useState<{ sender: 'teacher' | 'student'; text: string }[]>([
    {
      sender: 'teacher',
      text:
        language === 'hi'
          ? `नमस्ते प्रिय विद्यार्थी! मैं आपकी NEXTOF AI Teacher हूँ। तरुन सर के मार्गदर्शन में, आज हम '${lesson.titleHi}' को बहुत सरल और रोचक तरीके से समझेंगे। नीचे दिए गए डिजिटल बोर्ड पर ध्यान दें!`
          : `Hello student! I am your NEXTOF AI Teacher. Following Tarun Sir's learning framework, today we will master '${lesson.titleEn}' step by step. Look at the digital teaching board below!`,
    },
  ]);

  const teachingPoints = [
    {
      titleEn: '1. Foundation & Real-World Context',
      titleHi: '1. बुनियादी समझ और वास्तविक उदाहरण',
      theoryEn: lesson.introductionEn,
      theoryHi: lesson.introductionHi,
      chalkNotes: [
        `Topic: ${lesson.titleEn}`,
        `Grade: ${lesson.grade} · ${lesson.subject}`,
        'Core Objective: Conceptual clarity without rote memorization',
      ],
      formulaNote: lesson.formulas[0] ? `${lesson.formulas[0].nameEn}: ${lesson.formulas[0].formula}` : 'E = mc²',
    },
    {
      titleEn: '2. Deep Theory & Working Principle',
      titleHi: '2. गहरा सिद्धांत और कार्यप्रणाली',
      theoryEn: lesson.theoryEn,
      theoryHi: lesson.theoryHi,
      chalkNotes: [
        'Principle 1: Continuous balance and conservation',
        'Principle 2: Unidirectional regulated flow',
        'Observe the schematic diagram closely',
      ],
      formulaNote: lesson.formulas[1] ? `${lesson.formulas[1].nameEn}: ${lesson.formulas[1].formula}` : 'V = I × R',
    },
    {
      titleEn: '3. Definitions & Mathematical Formulations',
      titleHi: '3. महत्वपूर्ण परिभाषाएं एवं सूत्र',
      theoryEn: lesson.definitions.map((d) => `• ${d.termEn}: ${d.meaningEn}`).join('\n\n'),
      theoryHi: lesson.definitions.map((d) => `• ${d.termHi}: ${d.meaningHi}`).join('\n\n'),
      chalkNotes: lesson.formulas.map((f) => `${f.nameEn}: ${f.formula}`),
      formulaNote: lesson.formulas[0]?.formula || 'F = m × a',
    },
  ];

  const currentPoint = teachingPoints[boardStep] || teachingPoints[0];

  // Voice narration trigger
  const handleReadLesson = () => {
    if (isSpeaking) {
      stop();
    } else {
      const speechText = language === 'hi' ? currentPoint.theoryHi : currentPoint.theoryEn;
      speak(speechText, language);
    }
  };

  // Submit student doubt
  const handleSendDoubt = async (customPrompt?: string) => {
    const questionText = customPrompt || studentInput.trim();
    if (!questionText || isAskingAI) return;

    setChatLog((prev) => [...prev, { sender: 'student', text: questionText }]);
    setStudentInput('');
    setIsAskingAI(true);

    try {
      const res = await fetch('/api/ai/teacher', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          topic: lesson.titleEn,
          subject: lesson.subject,
          grade: lesson.grade,
          language,
          studentQuestion: questionText,
          mode: 'classroom',
        }),
      });

      const data = await res.json();
      if (data.teachingText) {
        setChatLog((prev) => [...prev, { sender: 'teacher', text: data.teachingText }]);
        // Speak answer
        speak(data.teachingText, language);
      } else {
        throw new Error('No answer received');
      }
    } catch {
      const fallbackText =
        language === 'hi'
          ? `आपके सवाल "${questionText}" पर: यह बहुत अच्छा सवाल है! हमेशा याद रखें कि जब भी कोई सिद्धांत समझ न आए, तो उसके बुनियादी घटक और फॉर्मूले को तोड़कर देखें। इस अध्याय के नोट्स भी अवश्य पढ़ें।`
          : `Regarding your question "${questionText}": Excellent curiosity! Remember that whenever a principle seems difficult, break down its core variables and consult the labeled diagram.`;
      setChatLog((prev) => [...prev, { sender: 'teacher', text: fallbackText }]);
      speak(fallbackText, language);
    } finally {
      setIsAskingAI(false);
    }
  };

  const copyBoardNotes = () => {
    const textToCopy = `NEXTOF Classroom - ${lesson.titleEn}\n\n${currentPoint.chalkNotes.join('\n')}\nFormula: ${currentPoint.formulaNote}`;
    navigator.clipboard.writeText(textToCopy);
    setCopiedNote(true);
    setTimeout(() => setCopiedNote(false), 2000);
  };

  return (
    <div className="space-y-6">
      {/* Header and Voice Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-xl bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 flex items-center justify-center shrink-0 border border-indigo-100 dark:border-indigo-900">
            <Sparkles className="w-6 h-6" />
          </div>
          <div>
            <div className="text-xs font-semibold text-indigo-600 dark:text-indigo-400 tracking-wide uppercase">
              {lesson.grade} · {lesson.subject}
            </div>
            <h2 className="text-lg font-bold text-slate-900 dark:text-white">
              {language === 'hi' ? lesson.titleHi : lesson.titleEn}
            </h2>
          </div>
        </div>

        {/* Audio Controls */}
        <div className="flex items-center gap-2">
          {isSupported && (
            <button
              onClick={handleReadLesson}
              className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-semibold transition-all shadow-sm ${
                isSpeaking
                  ? 'bg-rose-500 text-white animate-pulse'
                  : 'bg-indigo-600 hover:bg-indigo-700 text-white'
              }`}
            >
              {isSpeaking ? (
                <>
                  <VolumeX className="w-4 h-4" />
                  <span>{language === 'hi' ? 'आवाज़ रोकें' : 'Stop Voice'}</span>
                </>
              ) : (
                <>
                  <Volume2 className="w-4 h-4" />
                  <span>{language === 'hi' ? 'AI टीचर से सुनें' : 'Listen AI Teacher'}</span>
                </>
              )}
            </button>
          )}

          {lesson.diagram && onSelectDiagram && (
            <button
              onClick={onSelectDiagram}
              className="flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-medium border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            >
              <PenTool className="w-3.5 h-3.5" />
              <span>{language === 'hi' ? 'डायग्राम देखें' : 'View Diagram'}</span>
            </button>
          )}
        </div>
      </div>

      {/* Main Classroom Grid: Digital Blackboard (Left/Top) + Interactive Chat (Right/Bottom) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Digital Chalkboard (7 cols) */}
        <div className="lg:col-span-7 space-y-4">
          <div className="relative rounded-2xl p-6 digital-blackboard text-white border-4 border-amber-900/40 shadow-xl overflow-hidden min-h-[380px] flex flex-col justify-between">
            {/* Wooden Board Border Header */}
            <div className="flex items-center justify-between pb-3 border-b border-slate-700/60 text-xs text-amber-200 font-mono">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                <span className="tracking-wider uppercase">NEXTOF SMART BOARD · TARUN SIR</span>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={copyBoardNotes}
                  className="flex items-center gap-1 px-2 py-1 rounded bg-slate-800/80 hover:bg-slate-700 text-[11px] text-slate-300 transition-colors"
                >
                  {copiedNote ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                  <span>{copiedNote ? 'Copied' : 'Copy Board'}</span>
                </button>
              </div>
            </div>

            {/* Board Core Content */}
            <div className="my-4 space-y-4">
              <h3 className="text-xl sm:text-2xl font-bold font-mono tracking-tight text-yellow-300">
                {language === 'hi' ? currentPoint.titleHi : currentPoint.titleEn}
              </h3>

              {/* Step Chalk Notes */}
              <div className="space-y-2 font-mono text-sm sm:text-base text-slate-100 pl-3 border-l-2 border-emerald-400/80">
                {currentPoint.chalkNotes.map((note, idx) => (
                  <div key={idx} className="flex items-start gap-2">
                    <span className="text-emerald-400">►</span>
                    <span>{note}</span>
                  </div>
                ))}
              </div>

              {/* Glowing Chalk Formula Box */}
              <div className="mt-4 p-4 rounded-xl bg-slate-950/70 border border-amber-500/30 text-amber-300 font-mono">
                <div className="text-[11px] text-amber-400/80 uppercase tracking-widest mb-1">
                  {language === 'hi' ? 'महत्वपूर्ण सूत्र / सिद्धांत' : 'Key Formula & Equation'}
                </div>
                <div className="text-lg sm:text-xl font-bold tracking-wider">
                  {currentPoint.formulaNote}
                </div>
              </div>
            </div>

            {/* Blackboard Step Switcher */}
            <div className="pt-3 border-t border-slate-700/60 flex items-center justify-between gap-2">
              <div className="flex items-center gap-1.5">
                {teachingPoints.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => {
                      setBoardStep(idx);
                      stop();
                    }}
                    className={`w-7 h-7 rounded-lg text-xs font-mono font-bold transition-all ${
                      boardStep === idx
                        ? 'bg-amber-400 text-slate-900 shadow-sm scale-105'
                        : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                    }`}
                  >
                    0{idx + 1}
                  </button>
                ))}
              </div>

              <div className="text-xs text-slate-400 font-mono">
                Step {boardStep + 1} of {teachingPoints.length}
              </div>
            </div>
          </div>

          {/* Teacher's Explanatory Prose Box */}
          <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                {language === 'hi' ? 'अध्यापकीय व्याख्या (Teacher Lecture)' : 'Detailed Teacher Lecture'}
              </span>
              <button
                onClick={handleReadLesson}
                className="text-xs text-indigo-600 dark:text-indigo-400 hover:underline flex items-center gap-1"
              >
                <Volume2 className="w-3.5 h-3.5" />
                <span>{language === 'hi' ? 'दोबारा सुनें' : 'Read aloud'}</span>
              </button>
            </div>
            <p className="text-sm sm:text-base leading-relaxed text-slate-700 dark:text-slate-200 whitespace-pre-line">
              {language === 'hi' ? currentPoint.theoryHi : currentPoint.theoryEn}
            </p>
          </div>
        </div>

        {/* AI Teacher Classroom Interactive Q&A (5 cols) */}
        <div className="lg:col-span-5 flex flex-col rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm h-[560px]">
          {/* Classroom Header */}
          <div className="p-4 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="relative">
                <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-indigo-600 to-amber-500 text-white flex items-center justify-center font-bold text-xs shadow-sm">
                  AI
                </div>
                <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 rounded-full bg-emerald-500 border-2 border-white dark:border-slate-900" />
              </div>
              <div>
                <div className="text-sm font-bold text-slate-900 dark:text-white">
                  {language === 'hi' ? 'AI शिक्षक बातचीत' : 'AI Teacher Live Q&A'}
                </div>
                <div className="text-[11px] text-slate-500 dark:text-slate-400">
                  {language === 'hi' ? 'कोई भी प्रश्न पूछें' : 'Ask any conceptual doubt'}
                </div>
              </div>
            </div>

            <button
              onClick={() => {
                setChatLog([
                  {
                    sender: 'teacher',
                    text:
                      language === 'hi'
                        ? 'चैट रीसेट हो गई है। आप अपनी शंकाएं पूछ सकते हैं!'
                        : 'Chat reset. Feel free to ask any doubt!',
                  },
                ]);
                stop();
              }}
              title="Reset Chat"
              className="p-1.5 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800"
            >
              <RotateCcw className="w-4 h-4" />
            </button>
          </div>

          {/* Chat Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3.5">
            {chatLog.map((msg, index) => {
              const isTeacher = msg.sender === 'teacher';
              return (
                <div
                  key={index}
                  className={`flex flex-col ${isTeacher ? 'items-start' : 'items-end'}`}
                >
                  <div
                    className={`max-w-[88%] p-3.5 rounded-2xl text-xs sm:text-sm leading-relaxed shadow-xs ${
                      isTeacher
                        ? 'bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-100 rounded-tl-sm'
                        : 'bg-indigo-600 text-white rounded-tr-sm'
                    }`}
                  >
                    {msg.text}
                  </div>
                  <span className="text-[10px] text-slate-400 mt-1 px-1">
                    {isTeacher ? 'AI Teacher' : 'You (Student)'}
                  </span>
                </div>
              );
            })}

            {isAskingAI && (
              <div className="flex items-center gap-2 p-3 text-xs text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-950/40 rounded-xl">
                <Sparkles className="w-4 h-4 animate-spin" />
                <span>
                  {language === 'hi' ? 'शिक्षक उत्तर तैयार कर रहे हैं...' : 'Teacher is preparing the explanation...'}
                </span>
              </div>
            )}
          </div>

          {/* Quick Doubt Buttons */}
          <div className="p-2 border-t border-slate-100 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/50 flex flex-wrap gap-1.5">
            <button
              onClick={() =>
                handleSendDoubt(
                  language === 'hi'
                    ? 'मुझे यह सरल हिंदी में एक दैनिक जीवन के उदाहरण के साथ समझाइए।'
                    : 'Explain this in simpler terms with an everyday life example.'
                )
              }
              className="px-2.5 py-1 text-[11px] rounded-lg bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:border-indigo-500 transition-colors"
            >
              💡 {language === 'hi' ? 'सरल उदाहरण दें' : 'Give Real Example'}
            </button>

            <button
              onClick={() =>
                handleSendDoubt(
                  language === 'hi'
                    ? 'इस टॉपिक से बोर्ड परीक्षा में क्या प्रश्न पूछे जाते हैं?'
                    : 'What are the most frequent exam questions on this topic?'
                )
              }
              className="px-2.5 py-1 text-[11px] rounded-lg bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:border-indigo-500 transition-colors"
            >
              📝 {language === 'hi' ? 'महत्वपूर्ण प्रश्न' : 'Exam Questions'}
            </button>
          </div>

          {/* Input Box */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSendDoubt();
            }}
            className="p-3 border-t border-slate-200 dark:border-slate-800 flex items-center gap-2"
          >
            <input
              type="text"
              value={studentInput}
              onChange={(e) => setStudentInput(e.target.value)}
              placeholder={
                language === 'hi'
                  ? 'अपना सवाल यहाँ टाइप करें...'
                  : 'Type your doubt or question here...'
              }
              className="flex-1 bg-slate-100 dark:bg-slate-800 border-none rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-slate-900 dark:text-white placeholder-slate-400 focus:ring-2 focus:ring-indigo-500 outline-none"
            />
            <button
              type="submit"
              disabled={!studentInput.trim() || isAskingAI}
              className="w-10 h-10 rounded-xl bg-indigo-600 hover:bg-indigo-700 disabled:opacity-50 text-white flex items-center justify-center shrink-0 transition-colors shadow-sm"
            >
              <Send className="w-4 h-4" />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
