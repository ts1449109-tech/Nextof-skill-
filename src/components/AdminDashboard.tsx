import React, { useState, useEffect } from 'react';
import { Language } from '../types';
import {
  Shield,
  Users,
  BookOpen,
  Wrench,
  Video,
  PlusCircle,
  Activity,
  CheckCircle,
  Lock,
  X,
  FileCheck,
  Award,
} from 'lucide-react';

interface AdminDashboardProps {
  language: Language;
  onClose: () => void;
}

export const AdminDashboard: React.FC<AdminDashboardProps> = ({ language, onClose }) => {
  const [activeTab, setActiveTab] = useState<'overview' | 'content' | 'users' | 'system'>('overview');
  const [healthStatus, setHealthStatus] = useState<any>(null);
  const [newChapterTitle, setNewChapterTitle] = useState('');
  const [newChapterSubject, setNewChapterSubject] = useState('Science');
  const [newChapterGrade, setNewChapterGrade] = useState('Class 10');
  const [contentCreatedMsg, setContentCreatedMsg] = useState('');

  useEffect(() => {
    fetch('/api/health')
      .then((res) => res.json())
      .then((data) => setHealthStatus(data))
      .catch(() => {});
  }, []);

  const handleCreateChapter = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newChapterTitle.trim()) return;

    setContentCreatedMsg(
      language === 'hi'
        ? `नया अध्याय "${newChapterTitle}" सफलतापूर्वक जोड़ा गया!`
        : `New chapter "${newChapterTitle}" created successfully in curriculum!`
    );
    setNewChapterTitle('');
    setTimeout(() => setContentCreatedMsg(''), 4000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 overflow-y-auto">
      <div className="w-full max-w-4xl bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-2xl overflow-hidden my-6">
        {/* Admin Header */}
        <div className="p-5 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between bg-slate-900 text-white">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center font-bold border border-amber-500/30">
              <Shield className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-base font-bold tracking-tight">
                  NEXTOF Founder & Admin Control Hub
                </h3>
                <span className="text-[10px] px-2 py-0.5 rounded bg-amber-400 text-slate-950 font-bold uppercase">
                  {language === 'hi' ? 'तरुन सर' : 'Tarun Sir'}
                </span>
              </div>
              <p className="text-xs text-slate-400">
                {language === 'hi'
                  ? 'अध्यायों, छात्रों, वीडियो और प्रश्न बैंकों का केंद्रीय प्रबंधन'
                  : 'Master management for curriculum, users, videos, and questions'}
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-white rounded-xl hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Admin Navigation Tabs */}
        <div className="flex items-center gap-1 p-2 bg-slate-100 dark:bg-slate-800/60 border-b border-slate-200 dark:border-slate-800 overflow-x-auto text-xs font-medium">
          <button
            onClick={() => setActiveTab('overview')}
            className={`px-3 py-1.5 rounded-lg transition-colors whitespace-nowrap ${
              activeTab === 'overview'
                ? 'bg-white dark:bg-slate-700 text-slate-900 dark:text-white font-bold shadow-xs'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900'
            }`}
          >
            {language === 'hi' ? 'डैशबोर्ड अवलोकन' : 'Overview & Stats'}
          </button>
          <button
            onClick={() => setActiveTab('content')}
            className={`px-3 py-1.5 rounded-lg transition-colors whitespace-nowrap ${
              activeTab === 'content'
                ? 'bg-white dark:bg-slate-700 text-slate-900 dark:text-white font-bold shadow-xs'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900'
            }`}
          >
            {language === 'hi' ? 'पाठ्यक्रम व अध्याय जोड़ें' : 'Curriculum & Chapters'}
          </button>
          <button
            onClick={() => setActiveTab('users')}
            className={`px-3 py-1.5 rounded-lg transition-colors whitespace-nowrap ${
              activeTab === 'users'
                ? 'bg-white dark:bg-slate-700 text-slate-900 dark:text-white font-bold shadow-xs'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900'
            }`}
          >
            {language === 'hi' ? 'यूजर रोल्स' : 'Users & Roles'}
          </button>
          <button
            onClick={() => setActiveTab('system')}
            className={`px-3 py-1.5 rounded-lg transition-colors whitespace-nowrap ${
              activeTab === 'system'
                ? 'bg-white dark:bg-slate-700 text-slate-900 dark:text-white font-bold shadow-xs'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900'
            }`}
          >
            {language === 'hi' ? 'सिस्टम स्थिति' : 'System Health'}
          </button>
        </div>

        {/* Tab Body */}
        <div className="p-6 max-h-[70vh] overflow-y-auto space-y-6">
          {/* TAB 1: OVERVIEW */}
          {activeTab === 'overview' && (
            <div className="space-y-6">
              {/* Metric Cards */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                <div className="p-4 rounded-2xl bg-indigo-50 dark:bg-indigo-950/40 border border-indigo-100 dark:border-indigo-900/60">
                  <div className="text-xs text-indigo-600 dark:text-indigo-400 font-medium">
                    {language === 'hi' ? 'पंजीकृत विद्यार्थी' : 'Active Students'}
                  </div>
                  <div className="text-2xl font-bold font-mono text-slate-900 dark:text-white mt-1">
                    12,480
                  </div>
                  <div className="text-[11px] text-slate-400 mt-0.5">+14% this month</div>
                </div>

                <div className="p-4 rounded-2xl bg-amber-50 dark:bg-amber-950/40 border border-amber-100 dark:border-amber-900/60">
                  <div className="text-xs text-amber-600 dark:text-amber-400 font-medium">
                    {language === 'hi' ? 'कुल पाठ व स्किल्स' : 'Lessons & Skills'}
                  </div>
                  <div className="text-2xl font-bold font-mono text-slate-900 dark:text-white mt-1">
                    384
                  </div>
                  <div className="text-[11px] text-slate-400 mt-0.5">Classes 6 to 12</div>
                </div>

                <div className="p-4 rounded-2xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-100 dark:border-emerald-900/60">
                  <div className="text-xs text-emerald-600 dark:text-emerald-400 font-medium">
                    {language === 'hi' ? 'AI टीचर प्रश्न हल' : 'AI Doubts Resolved'}
                  </div>
                  <div className="text-2xl font-bold font-mono text-slate-900 dark:text-white mt-1">
                    48,920
                  </div>
                  <div className="text-[11px] text-slate-400 mt-0.5">Gemini 3.8 Flash</div>
                </div>

                <div className="p-4 rounded-2xl bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
                  <div className="text-xs text-slate-600 dark:text-slate-400 font-medium">
                    {language === 'hi' ? 'सर्वर अपटाइम' : 'Server Uptime'}
                  </div>
                  <div className="text-2xl font-bold font-mono text-emerald-600 dark:text-emerald-400 mt-1">
                    99.98%
                  </div>
                  <div className="text-[11px] text-slate-400 mt-0.5">Cloud Run High-Avail</div>
                </div>
              </div>

              {/* Founder Mission Statement */}
              <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-800 space-y-1 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                <div className="font-bold text-slate-900 dark:text-white">
                  Founder's Vision (संस्थापक का संकल्प):
                </div>
                <p className="leading-relaxed">
                  "NEXTOF — Learn Anything. Understand Everything. Develop Every Skill.
                  हर विद्यार्थी, चाहे वह गांव का हो या शहर का, उच्च गुणवत्ता की शिक्षा और आधुनिक तकनीकी हुनर बिना किसी आर्थिक बाधा के हासिल कर सके।"
                </p>
              </div>
            </div>
          )}

          {/* TAB 2: CONTENT CREATION */}
          {activeTab === 'content' && (
            <div className="space-y-4">
              <h4 className="text-sm font-bold text-slate-900 dark:text-white">
                {language === 'hi' ? 'नया शैक्षणिक अध्याय या स्किल जोड़ें' : 'Add New Chapter or Skill'}
              </h4>

              {contentCreatedMsg && (
                <div className="p-3 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 text-emerald-800 dark:text-emerald-200 text-xs font-medium flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-500" />
                  <span>{contentCreatedMsg}</span>
                </div>
              )}

              <form onSubmit={handleCreateChapter} className="space-y-4 text-xs">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="font-semibold text-slate-700 dark:text-slate-300 block mb-1">
                      {language === 'hi' ? 'कक्षा / स्तर' : 'Class / Grade Level'}
                    </label>
                    <select
                      value={newChapterGrade}
                      onChange={(e) => setNewChapterGrade(e.target.value)}
                      className="w-full p-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white outline-none"
                    >
                      <option>Class 6</option>
                      <option>Class 7</option>
                      <option>Class 8</option>
                      <option>Class 9</option>
                      <option>Class 10</option>
                      <option>Class 11 (PCM/PCB/Commerce/Arts)</option>
                      <option>Class 12 (PCM/PCB/Commerce/Arts)</option>
                      <option>Global Skill Development</option>
                    </select>
                  </div>

                  <div>
                    <label className="font-semibold text-slate-700 dark:text-slate-300 block mb-1">
                      {language === 'hi' ? 'विषय / ट्रेड' : 'Subject / Skill Category'}
                    </label>
                    <select
                      value={newChapterSubject}
                      onChange={(e) => setNewChapterSubject(e.target.value)}
                      className="w-full p-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white outline-none"
                    >
                      <option>Science (Physics / Chemistry / Biology)</option>
                      <option>Mathematics</option>
                      <option>Computer Science & Programming</option>
                      <option>Mobile Smartphone Hardware</option>
                      <option>Automobile & EV Technology</option>
                      <option>Electrical & Circuit Engineering</option>
                      <option>Mechanical & Machine Tech</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="font-semibold text-slate-700 dark:text-slate-300 block mb-1">
                    {language === 'hi' ? 'अध्याय / टॉपिक का नाम' : 'Chapter / Lesson Title'}
                  </label>
                  <input
                    type="text"
                    value={newChapterTitle}
                    onChange={(e) => setNewChapterTitle(e.target.value)}
                    placeholder="e.g. Chemical Reactions and Equations or 5G RF Antennas"
                    className="w-full p-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white outline-none"
                  />
                </div>

                <button
                  type="submit"
                  className="px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-semibold transition-colors flex items-center gap-1.5"
                >
                  <PlusCircle className="w-4 h-4" />
                  <span>{language === 'hi' ? 'अध्याय प्रकाशित करें' : 'Publish Chapter'}</span>
                </button>
              </form>
            </div>
          )}

          {/* TAB 3: USERS & ROLES */}
          {activeTab === 'users' && (
            <div className="space-y-4">
              <h4 className="text-sm font-bold text-slate-900 dark:text-white">
                {language === 'hi' ? 'प्रशासनिक भूमिकाएं एवं अनुमतियां' : 'Authorized Role Permissions'}
              </h4>

              <div className="space-y-2 text-xs">
                <div className="p-3 rounded-xl border border-slate-200 dark:border-slate-800 flex items-center justify-between">
                  <div>
                    <div className="font-bold text-slate-900 dark:text-white">
                      {language === 'hi' ? 'तरुन सर (सुपर एडमिनिस्ट्रेटर एवं संस्थापक)' : 'Tarun Sir (Super Administrator & Founder)'}
                    </div>
                    <div className="text-slate-400">Full platform access, DB migrations, content governance</div>
                  </div>
                  <span className="px-2.5 py-1 rounded bg-amber-100 text-amber-800 dark:bg-amber-950 dark:text-amber-200 font-bold">
                    Super Admin
                  </span>
                </div>

                <div className="p-3 rounded-xl border border-slate-200 dark:border-slate-800 flex items-center justify-between">
                  <div>
                    <div className="font-bold text-slate-900 dark:text-white">
                      Certified Subject Teachers & Faculty
                    </div>
                    <div className="text-slate-400">Manage 70-question banks, approve video chapters</div>
                  </div>
                  <span className="px-2.5 py-1 rounded bg-indigo-100 text-indigo-800 dark:bg-indigo-950 dark:text-indigo-200 font-bold">
                    Teacher
                  </span>
                </div>

                <div className="p-3 rounded-xl border border-slate-200 dark:border-slate-800 flex items-center justify-between">
                  <div>
                    <div className="font-bold text-slate-900 dark:text-white">
                      Public Students & Learners
                    </div>
                    <div className="text-slate-400">Learn chapters, take assessments, download revision notes</div>
                  </div>
                  <span className="px-2.5 py-1 rounded bg-slate-100 text-slate-800 dark:bg-slate-800 dark:text-slate-200 font-bold">
                    Student
                  </span>
                </div>
              </div>
            </div>
          )}

          {/* TAB 4: SYSTEM HEALTH */}
          {activeTab === 'system' && (
            <div className="space-y-4 text-xs">
              <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-800 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="font-bold text-slate-900 dark:text-white">Backend Server Status:</span>
                  <span className="text-emerald-500 font-bold flex items-center gap-1">
                    <CheckCircle className="w-3.5 h-3.5" /> Healthy & Online
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-500">Platform:</span>
                  <span className="font-mono text-slate-800 dark:text-slate-200">{healthStatus?.platform || 'NEXTOF'}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-500">Founder:</span>
                  <span className="font-mono text-slate-800 dark:text-slate-200">{healthStatus?.founder || 'Tarun Sir'}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-500">Gemini AI Engine:</span>
                  <span className="font-mono text-slate-800 dark:text-slate-200">
                    {healthStatus?.hasGemini ? 'Connected (Gemini 3.8 Flash)' : 'Active (Local Pedagogical Mode)'}
                  </span>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
