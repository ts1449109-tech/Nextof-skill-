import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { BottomNav } from './components/BottomNav';
import { AITeacherClassroom } from './components/AITeacherClassroom';
import { VideoPlayer } from './components/VideoPlayer';
import { InteractiveDiagram } from './components/InteractiveDiagram';
import { QuizAssessment } from './components/QuizAssessment';
import { SkillLab } from './components/SkillLab';
import { DownloadsLibrary } from './components/DownloadsLibrary';
import { FounderRoadmapGuide } from './components/FounderRoadmapGuide';
import { AdminDashboard } from './components/AdminDashboard';
import { SettingsModal } from './components/SettingsModal';
import { CHAPTER_LESSONS, DIAGRAM_HEART, DIAGRAM_SMARTPHONE, DIAGRAM_EV } from './data/curriculumData';
import { ChapterLesson, EducationalDiagram, Language } from './types';
import {
  BookOpen,
  Wrench,
  Sparkles,
  Smartphone,
  Zap,
  GraduationCap,
  ArrowRight,
  Layers,
  FolderDown,
  CheckCircle2,
  Search,
  Award,
  Video,
  FileText,
  ShieldCheck,
  Compass,
  Play,
} from 'lucide-react';

export default function App() {
  const [currentTab, setCurrentTab] = useState<string>('home');
  const [language, setLanguage] = useState<Language>('hi');
  const [isDark, setIsDark] = useState<boolean>(true);
  const [selectedLesson, setSelectedLesson] = useState<ChapterLesson>(CHAPTER_LESSONS[0]);
  const [selectedGrade, setSelectedGrade] = useState<string>('Class 10');
  const [selectedStream, setSelectedStream] = useState<string>('Science');
  const [lessonActiveView, setLessonActiveView] = useState<'teacher' | 'video' | 'diagram' | 'theory' | 'quiz'>('teacher');
  const [showAdmin, setShowAdmin] = useState<boolean>(false);
  const [showSettings, setShowSettings] = useState<boolean>(false);
  const [searchQuery, setSearchQuery] = useState<string>('');

  // Sync theme with document.documentElement
  useEffect(() => {
    const root = document.documentElement;
    if (isDark) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [isDark]);

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === 'hi' ? 'en' : 'hi'));
  };

  const toggleTheme = () => {
    setIsDark((prev) => !prev);
  };

  const handleSaveDiagramToDownloads = (diagram: EducationalDiagram) => {
    const saved = localStorage.getItem('nextof_downloads');
    const existing = saved ? JSON.parse(saved) : [];
    const newItem = {
      id: `dl-${Date.now()}`,
      title: `${diagram.titleEn} (Educational Diagram)`,
      category: 'diagram',
      sizeKb: 450,
      dateDownloaded: 'Today',
      content: `NEXTOF EDUCATIONAL DIAGRAM · FOUNDER: TARUN SIR\nTitle: ${diagram.titleEn}\nCategory: ${diagram.category}\nDescription: ${diagram.descriptionEn}\n\nHotspots:\n${diagram.hotspots.map((h) => `- ${h.titleEn}: ${h.descEn}`).join('\n')}`,
      imageUrl: diagram.imageUrl,
    };
    localStorage.setItem('nextof_downloads', JSON.stringify([newItem, ...existing]));
  };

  const handleSaveNotesToDownloads = (lesson: ChapterLesson) => {
    const saved = localStorage.getItem('nextof_downloads');
    const existing = saved ? JSON.parse(saved) : [];
    const newItem = {
      id: `dl-${Date.now()}`,
      title: `${lesson.titleEn} - Chapter Revision Notes`,
      category: 'notes',
      sizeKb: 180,
      dateDownloaded: 'Today',
      content: `NEXTOF REVISION NOTES · FOUNDER: TARUN SIR\nGrade: ${lesson.grade} · ${lesson.subject}\nChapter: ${lesson.titleEn}\n\nKey Points:\n${lesson.revisionNotesEn.join('\n')}\n\nKey Formulas:\n${lesson.formulas.map((f) => `${f.nameEn}: ${f.formula}`).join('\n')}`,
    };
    localStorage.setItem('nextof_downloads', JSON.stringify([newItem, ...existing]));
    alert(language === 'hi' ? 'रिवीजन नोट्स ऑफलाइन लाइब्रेरी में सेव हो गए!' : 'Revision notes saved to your offline library!');
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900 dark:bg-slate-950 dark:text-slate-100 transition-colors">
      {/* Top Bar Navigation */}
      <Navbar
        currentTab={currentTab}
        onSelectTab={setCurrentTab}
        language={language}
        onToggleLanguage={toggleLanguage}
        isDark={isDark}
        onToggleTheme={toggleTheme}
        onOpenSettings={() => setShowSettings(true)}
        onOpenAdmin={() => setShowAdmin(true)}
      />

      {/* Main Content Area */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6 pb-24 md:pb-12">
        {/* ================= TAB 1: HOME DASHBOARD ================= */}
        {currentTab === 'home' && (
          <div className="space-y-10">
            {/* Hero Section */}
            <div className="relative rounded-3xl overflow-hidden bg-slate-900 text-white border border-slate-800 shadow-2xl min-h-[420px] flex items-center">
              {/* Hero Image Backdrop */}
              <div className="absolute inset-0 z-0">
                <img
                  src="/src/assets/images/hero_nextof_education_1793979148035.jpg"
                  alt="NEXTOF Education"
                  className="w-full h-full object-cover opacity-35"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/80 to-transparent" />
              </div>

              {/* Hero Content */}
              <div className="relative z-10 p-6 sm:p-10 lg:p-12 max-w-2xl space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-400/15 border border-amber-400/30 text-amber-300 text-xs font-semibold tracking-wide">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>{language === 'hi' ? 'संस्थापक: तरुन सर · ग्लोबल AI प्लेटफॉर्म' : 'FOUNDER: TARUN SIR · GLOBAL AI PLATFORM'}</span>
                </div>

                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight text-white">
                  {language === 'hi'
                    ? 'हर विषय सीखें। हर हुनर में माहिर बनें।'
                    : 'Learn Anything. Understand Everything. Develop Every Skill.'}
                </h1>

                <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                  {language === 'hi'
                    ? 'कक्षा 6 से 12 तक की संपूर्ण स्कूल शिक्षा और स्मार्टफोन, ईवी, इलेक्ट्रॉनिक्स जैसी आधुनिक स्किल्स का भारत का पहला सम्पूर्ण AI एजुकेशन प्लेटफॉर्म।'
                    : 'World-class AI Teacher, digital chalkboard, labeled interactive diagrams, and complete hardware skill development for students and professionals.'}
                </p>

                {/* Primary Action Buttons */}
                <div className="pt-2 flex flex-wrap items-center gap-3">
                  <button
                    onClick={() => setCurrentTab('school')}
                    className="flex items-center gap-2 px-5 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-semibold text-xs sm:text-sm shadow-lg shadow-indigo-600/25 transition-all"
                  >
                    <BookOpen className="w-4 h-4" />
                    <span>{language === 'hi' ? 'स्कूल शिक्षा शुरू करें (कक्षा 6-12)' : 'Start School Education (Class 6-12)'}</span>
                  </button>

                  <button
                    onClick={() => setCurrentTab('skills')}
                    className="flex items-center gap-2 px-5 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold text-xs sm:text-sm border border-white/20 backdrop-blur-md transition-all"
                  >
                    <Wrench className="w-4 h-4" />
                    <span>{language === 'hi' ? 'ग्लोबल स्किल लैब' : 'Explore Skill Lab'}</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Quick Curriculum & Stream Navigator */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-xl font-bold text-slate-900 dark:text-white">
                    {language === 'hi' ? 'कक्षा और स्ट्रीम चुनें' : 'Explore Grade & Stream Pathways'}
                  </h2>
                  <p className="text-xs text-slate-500">
                    {language === 'hi'
                      ? 'कक्षा 6 से 12 तक सभी विषय और अध्याय'
                      : 'Comprehensive chapter-wise learning from Class 6 to 12'}
                  </p>
                </div>
                <button
                  onClick={() => setCurrentTab('school')}
                  className="text-xs font-semibold text-indigo-600 dark:text-indigo-400 hover:underline flex items-center gap-1"
                >
                  <span>{language === 'hi' ? 'सभी देखें' : 'View All'}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

              {/* Class Cards Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-3">
                {['Class 6', 'Class 7', 'Class 8', 'Class 9', 'Class 10', 'Class 11', 'Class 12'].map((cls) => (
                  <button
                    key={cls}
                    onClick={() => {
                      setSelectedGrade(cls);
                      setCurrentTab('school');
                    }}
                    className={`p-4 rounded-2xl border text-center transition-all group ${
                      selectedGrade === cls
                        ? 'border-indigo-600 bg-indigo-50/70 dark:bg-indigo-950/40 text-indigo-900 dark:text-white font-bold'
                        : 'border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 hover:border-slate-300'
                    }`}
                  >
                    <div className="w-8 h-8 rounded-lg bg-indigo-50 dark:bg-indigo-950 text-indigo-600 dark:text-indigo-400 flex items-center justify-center mx-auto mb-2 group-hover:scale-110 transition-transform">
                      <GraduationCap className="w-4 h-4" />
                    </div>
                    <div className="text-xs sm:text-sm font-bold">{cls}</div>
                    <div className="text-[10px] text-slate-400 mt-0.5">
                      {cls === 'Class 11' || cls === 'Class 12' ? 'PCM/PCB/Arts' : 'All Subjects'}
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Featured Visual Diagram Explorer & Skill Spotlight */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Card 1: Interactive Diagram Feature */}
              <div className="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-indigo-600 dark:text-indigo-400 text-xs font-bold uppercase tracking-wider">
                    <Layers className="w-4 h-4" />
                    <span>{language === 'hi' ? 'AI चित्र एवं लेबल डायग्राम' : 'Interactive Visual Diagrams'}</span>
                  </div>
                  <span className="text-[11px] text-slate-400">Class 10 Biology</span>
                </div>

                <div className="rounded-2xl overflow-hidden bg-slate-950 border border-slate-800 aspect-video relative group">
                  <img
                    src={DIAGRAM_HEART.imageUrl}
                    alt="Human Heart"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent flex items-end p-4">
                    <span className="text-xs font-bold text-white">
                      {language === 'hi' ? DIAGRAM_HEART.titleHi : DIAGRAM_HEART.titleEn}
                    </span>
                  </div>
                </div>

                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                  {language === 'hi' ? DIAGRAM_HEART.descriptionHi : DIAGRAM_HEART.descriptionEn}
                </p>

                <button
                  onClick={() => {
                    setSelectedLesson(CHAPTER_LESSONS[0]);
                    setLessonActiveView('diagram');
                    setCurrentTab('school');
                  }}
                  className="w-full py-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-xs font-semibold text-slate-900 dark:text-white transition-colors flex items-center justify-center gap-1.5"
                >
                  <span>{language === 'hi' ? 'डायग्राम खोलें और हॉटस्पॉट देखें' : 'Open Interactive Hotspots'}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

              {/* Card 2: Smartphone Hardware Skill Feature */}
              <div className="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-amber-600 dark:text-amber-400 text-xs font-bold uppercase tracking-wider">
                    <Smartphone className="w-4 h-4" />
                    <span>{language === 'hi' ? 'स्मार्टफोन हार्डवेयर टियरडाउन' : 'Smartphone Hardware Teardown'}</span>
                  </div>
                  <span className="text-[11px] text-slate-400">Skill Development</span>
                </div>

                <div className="rounded-2xl overflow-hidden bg-slate-950 border border-slate-800 aspect-video relative group">
                  <img
                    src={DIAGRAM_SMARTPHONE.imageUrl}
                    alt="Smartphone Teardown"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent flex items-end p-4">
                    <span className="text-xs font-bold text-white">
                      {language === 'hi' ? DIAGRAM_SMARTPHONE.titleHi : DIAGRAM_SMARTPHONE.titleEn}
                    </span>
                  </div>
                </div>

                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                  {language === 'hi'
                    ? 'डिस्प्ले, प्रोसेसर (SoC), मदरबोर्ड, बैटरी, और कैमरा के सभी 12 मुख्य भागों का लाइव टियरडाउन सीखें।'
                    : 'Master the 12 primary components of mobile technology: SoCs, RAM, battery management, and camera sensors.'}
                </p>

                <button
                  onClick={() => setCurrentTab('skills')}
                  className="w-full py-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-xs font-semibold text-slate-900 dark:text-white transition-colors flex items-center justify-center gap-1.5"
                >
                  <span>{language === 'hi' ? 'मोबाइल टेक्नोलॉजी लैब खोलें' : 'Open Hardware Lab'}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Founder Tarun Sir Commitment Section */}
            <div className="p-8 rounded-3xl bg-gradient-to-r from-indigo-900 via-slate-900 to-indigo-950 text-white shadow-xl border border-indigo-800/40 space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <div className="text-xs font-mono text-amber-400 uppercase tracking-widest">
                    {language === 'hi' ? 'संस्थापक का संकल्प · तरुन सर' : "FOUNDER'S MISSION · TARUN SIR"}
                  </div>
                  <h3 className="text-2xl font-bold mt-1">
                    {language === 'hi'
                      ? 'सीमित संसाधनों में भी बड़ा विज़न संभव है'
                      : 'Building a World-Class Platform on Limited Resources'}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 max-w-xl mt-2 leading-relaxed">
                    {language === 'hi'
                      ? 'NEXTOF का निर्माण सीधे एंड्रॉइड स्मार्टफोन और मुफ्त ओपन-सोर्स टूल्स के दम पर किया जा सकता है। हमारे स्टेप-बाय-स्टेप गाइड को पढ़कर अपने फोन को ही अपना कोडिंग वर्कस्टेशन बनाएं।'
                      : 'You do not need capital or laptops to get started. NEXTOF is designed mobile-first so anyone with an Android phone can build, study, and teach.'}
                  </p>
                </div>

                <button
                  onClick={() => setCurrentTab('guide')}
                  className="px-5 py-3 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-xs sm:text-sm transition-all shrink-0 shadow-lg"
                >
                  {language === 'hi' ? 'संस्थापक रोडमैप देखें' : 'Read Founder Roadmap'}
                </button>
              </div>
            </div>
          </div>
        )}

        {/* ================= TAB 2: SCHOOL EDUCATION (CLASS 6-12) ================= */}
        {currentTab === 'school' && (
          <div className="space-y-6">
            {/* Grade & Stream Selector Bar */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
              <div className="flex items-center gap-2 overflow-x-auto pb-1 sm:pb-0">
                {['Class 6', 'Class 7', 'Class 8', 'Class 9', 'Class 10', 'Class 11', 'Class 12'].map((cls) => (
                  <button
                    key={cls}
                    onClick={() => setSelectedGrade(cls)}
                    className={`px-3 py-1.5 rounded-xl text-xs font-medium whitespace-nowrap transition-colors ${
                      selectedGrade === cls
                        ? 'bg-indigo-600 text-white font-bold'
                        : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200'
                    }`}
                  >
                    {cls}
                  </button>
                ))}
              </div>

              {/* Stream Switcher for High School */}
              {(selectedGrade === 'Class 11' || selectedGrade === 'Class 12') && (
                <div className="flex items-center gap-1 p-1 bg-slate-100 dark:bg-slate-800 rounded-xl">
                  {['PCM', 'PCB', 'Commerce', 'Arts'].map((st) => (
                    <button
                      key={st}
                      onClick={() => setSelectedStream(st)}
                      className={`px-2.5 py-1 text-xs font-medium rounded-lg transition-colors ${
                        selectedStream === st
                          ? 'bg-white dark:bg-slate-700 text-slate-900 dark:text-white font-bold shadow-xs'
                          : 'text-slate-600 dark:text-slate-400'
                      }`}
                    >
                      {st}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Chapter Selection Pill Strip */}
            <div className="flex items-center gap-2 overflow-x-auto pb-2">
              {CHAPTER_LESSONS.map((ch) => (
                <button
                  key={ch.id}
                  onClick={() => setSelectedLesson(ch)}
                  className={`px-4 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-colors flex items-center gap-2 ${
                    selectedLesson.id === ch.id
                      ? 'bg-slate-900 text-white dark:bg-white dark:text-slate-900 shadow-sm'
                      : 'bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-800 hover:border-slate-400'
                  }`}
                >
                  <BookOpen className="w-3.5 h-3.5" />
                  <span>{language === 'hi' ? ch.titleHi : ch.titleEn}</span>
                </button>
              ))}
            </div>

            {/* Lesson Module Mode Tabs */}
            <div className="flex items-center gap-2 border-b border-slate-200 dark:border-slate-800 pb-2">
              <button
                onClick={() => setLessonActiveView('teacher')}
                className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors flex items-center gap-1.5 ${
                  lessonActiveView === 'teacher'
                    ? 'bg-indigo-600 text-white font-semibold'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900'
                }`}
              >
                <Sparkles className="w-3.5 h-3.5" />
                <span>{language === 'hi' ? 'AI टीचर व ब्लैकबोर्ड' : 'AI Teacher Classroom'}</span>
              </button>

              <button
                onClick={() => setLessonActiveView('video')}
                className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors flex items-center gap-1.5 ${
                  lessonActiveView === 'video'
                    ? 'bg-indigo-600 text-white font-semibold'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900'
                }`}
              >
                <Video className="w-3.5 h-3.5" />
                <span>{language === 'hi' ? 'वीडियो क्लास' : 'Video Lecture'}</span>
              </button>

              {selectedLesson.diagram && (
                <button
                  onClick={() => setLessonActiveView('diagram')}
                  className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors flex items-center gap-1.5 ${
                    lessonActiveView === 'diagram'
                      ? 'bg-indigo-600 text-white font-semibold'
                      : 'text-slate-600 dark:text-slate-400 hover:text-slate-900'
                  }`}
                >
                  <Layers className="w-3.5 h-3.5" />
                  <span>{language === 'hi' ? 'इंटरैक्टिव डायग्राम' : 'Interactive Diagram'}</span>
                </button>
              )}

              <button
                onClick={() => setLessonActiveView('theory')}
                className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors flex items-center gap-1.5 ${
                  lessonActiveView === 'theory'
                    ? 'bg-indigo-600 text-white font-semibold'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900'
                }`}
              >
                <FileText className="w-3.5 h-3.5" />
                <span>{language === 'hi' ? 'थ्योरी व नोट्स' : 'Theory & Formulas'}</span>
              </button>

              <button
                onClick={() => setLessonActiveView('quiz')}
                className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors flex items-center gap-1.5 ${
                  lessonActiveView === 'quiz'
                    ? 'bg-indigo-600 text-white font-semibold'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900'
                }`}
              >
                <Award className="w-3.5 h-3.5" />
                <span>{language === 'hi' ? 'प्रैक्टिस टेस्ट' : '70-Question Practice'}</span>
              </button>
            </div>

            {/* View Sub-Renderer */}
            {lessonActiveView === 'teacher' && (
              <AITeacherClassroom
                lesson={selectedLesson}
                language={language}
                onSelectDiagram={() => setLessonActiveView('diagram')}
              />
            )}

            {lessonActiveView === 'video' && (
              <VideoPlayer
                lesson={selectedLesson}
                language={language}
                onOpenNotes={() => setLessonActiveView('theory')}
                onOpenQuiz={() => setLessonActiveView('quiz')}
              />
            )}

            {lessonActiveView === 'diagram' && selectedLesson.diagram && (
              <InteractiveDiagram
                diagram={selectedLesson.diagram}
                language={language}
                onSaveToDownloads={handleSaveDiagramToDownloads}
              />
            )}

            {lessonActiveView === 'theory' && (
              <div className="space-y-6">
                <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-4 shadow-sm">
                  <div className="flex items-center justify-between pb-3 border-b border-slate-100 dark:border-slate-800">
                    <div>
                      <span className="text-xs font-mono text-indigo-600 dark:text-indigo-400 uppercase tracking-widest">
                        {selectedLesson.grade} · {selectedLesson.subject}
                      </span>
                      <h3 className="text-xl font-bold text-slate-900 dark:text-white mt-1">
                        {language === 'hi' ? selectedLesson.titleHi : selectedLesson.titleEn}
                      </h3>
                    </div>

                    <button
                      onClick={() => handleSaveNotesToDownloads(selectedLesson)}
                      className="px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-semibold shadow-xs flex items-center gap-1.5 transition-colors"
                    >
                      <FolderDown className="w-4 h-4" />
                      <span>{language === 'hi' ? 'ऑफलाइन सेव करें' : 'Save Offline Notes'}</span>
                    </button>
                  </div>

                  {/* Complete Theory */}
                  <div className="space-y-3">
                    <h4 className="text-sm font-bold text-slate-900 dark:text-white">
                      {language === 'hi' ? 'संपूर्ण सिद्धांत (Complete Theory)' : 'Complete Chapter Theory'}
                    </h4>
                    <p className="text-sm leading-relaxed text-slate-700 dark:text-slate-300 whitespace-pre-line">
                      {language === 'hi' ? selectedLesson.theoryHi : selectedLesson.theoryEn}
                    </p>
                  </div>

                  {/* Formulas Strip */}
                  <div className="space-y-3 pt-3 border-t border-slate-100 dark:border-slate-800">
                    <h4 className="text-sm font-bold text-slate-900 dark:text-white">
                      {language === 'hi' ? 'महत्वपूर्ण सूत्र (Formulas)' : 'Key Formulas'}
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {selectedLesson.formulas.map((f, idx) => (
                        <div
                          key={idx}
                          className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-800 space-y-1 font-mono"
                        >
                          <div className="text-xs font-bold text-indigo-600 dark:text-indigo-400">
                            {language === 'hi' ? f.nameHi : f.nameEn}
                          </div>
                          <div className="text-base font-bold text-amber-500">{f.formula}</div>
                          <div className="text-[11px] text-slate-400 font-sans">
                            {language === 'hi' ? f.noteHi : f.noteEn}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Solved Examples */}
                  <div className="space-y-3 pt-3 border-t border-slate-100 dark:border-slate-800">
                    <h4 className="text-sm font-bold text-slate-900 dark:text-white">
                      {language === 'hi' ? 'हल सहित उदाहरण (Solved Examples)' : 'Solved Examples'}
                    </h4>
                    {selectedLesson.solvedExamples.map((ex, idx) => (
                      <div
                        key={idx}
                        className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/40 border border-slate-100 dark:border-slate-800 space-y-2 text-xs sm:text-sm"
                      >
                        <div className="font-bold text-slate-900 dark:text-white">
                          Q: {language === 'hi' ? ex.questionHi : ex.questionEn}
                        </div>
                        <div className="text-slate-700 dark:text-slate-300 whitespace-pre-line pl-3 border-l-2 border-indigo-500">
                          {language === 'hi' ? ex.solutionHi : ex.solutionEn}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {lessonActiveView === 'quiz' && (
              <QuizAssessment questions={selectedLesson.questions} language={language} />
            )}
          </div>
        )}

        {/* ================= TAB 3: SKILL LAB ================= */}
        {currentTab === 'skills' && (
          <SkillLab
            language={language}
            onOpenAITeacherWithTopic={(topic) => {
              setCurrentTab('teacher');
            }}
          />
        )}

        {/* ================= TAB 4: AI TEACHER DEDICATED ================= */}
        {currentTab === 'teacher' && (
          <AITeacherClassroom lesson={selectedLesson} language={language} />
        )}

        {/* ================= TAB 5: DOWNLOADS & OFFLINE ================= */}
        {currentTab === 'downloads' && <DownloadsLibrary language={language} />}

        {/* ================= TAB 6: FOUNDER GUIDE ================= */}
        {currentTab === 'guide' && <FounderRoadmapGuide language={language} />}
      </main>

      {/* Mobile Ergonomic Bottom Tab Navigation */}
      <BottomNav currentTab={currentTab} onSelectTab={setCurrentTab} language={language} />

      {/* Admin Dashboard Modal */}
      {showAdmin && <AdminDashboard language={language} onClose={() => setShowAdmin(false)} />}

      {/* Settings Modal */}
      <SettingsModal
        isOpen={showSettings}
        onClose={() => setShowSettings(false)}
        language={language}
        onToggleLanguage={toggleLanguage}
        isDark={isDark}
        onToggleTheme={toggleTheme}
      />
    </div>
  );
}
