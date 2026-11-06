import React from 'react';
import { usePWAInstall } from '../hooks/usePWAInstall';
import { Language } from '../types';
import { Download, Globe, Settings, Moon, Sun, Shield } from 'lucide-react';

interface NavbarProps {
  currentTab: string;
  onSelectTab: (tab: string) => void;
  language: Language;
  onToggleLanguage: () => void;
  isDark: boolean;
  onToggleTheme: () => void;
  onOpenSettings: () => void;
  onOpenAdmin: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentTab,
  onSelectTab,
  language,
  onToggleLanguage,
  isDark,
  onToggleTheme,
  onOpenSettings,
  onOpenAdmin,
}) => {
  const { isInstallable, install } = usePWAInstall();

  return (
    <header className="sticky top-0 z-40 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md border-b border-slate-200 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-8">
        {/* Zone 1: Brand Wordmark (Single Text Element) */}
        <button
          onClick={() => onSelectTab('home')}
          className="text-xl font-extrabold tracking-tight text-slate-900 dark:text-white flex items-center gap-2 whitespace-nowrap shrink-0 hover:opacity-90 transition-opacity"
        >
          <span className="w-8 h-8 rounded-lg bg-indigo-600 text-white flex items-center justify-center text-sm font-black shadow-sm">
            N
          </span>
          <span>NEXTOF</span>
        </button>

        {/* Zone 2: 4-5 Clean Single-Line Nav Links */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-600 dark:text-slate-300">
          <button
            onClick={() => onSelectTab('school')}
            className={`whitespace-nowrap shrink-0 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors ${
              currentTab === 'school' ? 'text-indigo-600 dark:text-indigo-400 font-semibold' : ''
            }`}
          >
            {language === 'hi' ? 'स्कूल शिक्षा' : 'School Education'}
          </button>

          <button
            onClick={() => onSelectTab('skills')}
            className={`whitespace-nowrap shrink-0 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors ${
              currentTab === 'skills' ? 'text-indigo-600 dark:text-indigo-400 font-semibold' : ''
            }`}
          >
            {language === 'hi' ? 'स्किल डेवलपमेंट' : 'Skill Development'}
          </button>

          <button
            onClick={() => onSelectTab('teacher')}
            className={`whitespace-nowrap shrink-0 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors ${
              currentTab === 'teacher' ? 'text-indigo-600 dark:text-indigo-400 font-semibold' : ''
            }`}
          >
            {language === 'hi' ? 'AI टीचर' : 'AI Teacher'}
          </button>

          <button
            onClick={() => onSelectTab('downloads')}
            className={`whitespace-nowrap shrink-0 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors ${
              currentTab === 'downloads' ? 'text-indigo-600 dark:text-indigo-400 font-semibold' : ''
            }`}
          >
            {language === 'hi' ? 'डाउनलोड्स' : 'Offline Library'}
          </button>

          <button
            onClick={() => onSelectTab('guide')}
            className={`whitespace-nowrap shrink-0 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors ${
              currentTab === 'guide' ? 'text-indigo-600 dark:text-indigo-400 font-semibold' : ''
            }`}
          >
            {language === 'hi' ? 'फाउंडर गाइड' : 'Founder Roadmap'}
          </button>
        </nav>

        {/* Zone 3: 1 Primary Action Area */}
        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
          {/* Language Switch */}
          <button
            onClick={onToggleLanguage}
            title="Toggle Hindi/English"
            className="flex items-center gap-1.5 px-2.5 py-1.5 text-xs font-semibold rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors whitespace-nowrap shrink-0"
          >
            <Globe className="w-3.5 h-3.5" />
            <span>{language === 'hi' ? 'English' : 'हिंदी'}</span>
          </button>

          {/* Theme Switch */}
          <button
            onClick={onToggleTheme}
            aria-label="Toggle theme"
            className="p-2 text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
          >
            {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>

          {/* Settings */}
          <button
            onClick={onOpenSettings}
            aria-label="Settings"
            className="p-2 text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
          >
            <Settings className="w-4 h-4" />
          </button>

          {/* Admin shortcut */}
          <button
            onClick={onOpenAdmin}
            aria-label="Admin console"
            title="Admin Console"
            className="p-2 text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
          >
            <Shield className="w-4 h-4" />
          </button>

          {/* Primary CTA (Install PWA if available, or Classroom CTA) */}
          {isInstallable ? (
            <button
              onClick={install}
              className="flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold text-white bg-indigo-600 hover:bg-indigo-700 rounded-lg shadow-sm transition-colors whitespace-nowrap shrink-0"
            >
              <Download className="w-3.5 h-3.5" />
              <span>{language === 'hi' ? 'ऐप इंस्टॉल करें' : 'Install App'}</span>
            </button>
          ) : (
            <button
              onClick={() => onSelectTab('teacher')}
              className="flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold text-white bg-indigo-600 hover:bg-indigo-700 rounded-lg shadow-sm transition-colors whitespace-nowrap shrink-0"
            >
              <span>{language === 'hi' ? 'AI क्लासरूम' : 'AI Classroom'}</span>
            </button>
          )}
        </div>
      </div>
    </header>
  );
};
