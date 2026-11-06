import React from 'react';
import { Home, BookOpen, Wrench, Sparkles, FolderDown, Compass } from 'lucide-react';
import { Language } from '../types';

interface BottomNavProps {
  currentTab: string;
  onSelectTab: (tab: string) => void;
  language: Language;
}

export const BottomNav: React.FC<BottomNavProps> = ({ currentTab, onSelectTab, language }) => {
  const tabs = [
    {
      id: 'home',
      labelEn: 'Home',
      labelHi: 'होम',
      icon: Home,
    },
    {
      id: 'school',
      labelEn: 'School',
      labelHi: 'स्कूल',
      icon: BookOpen,
    },
    {
      id: 'skills',
      labelEn: 'Skills',
      labelHi: 'स्किल्स',
      icon: Wrench,
    },
    {
      id: 'teacher',
      labelEn: 'AI Teacher',
      labelHi: 'AI टीचर',
      icon: Sparkles,
    },
    {
      id: 'downloads',
      labelEn: 'Library',
      labelHi: 'लाइब्रेरी',
      icon: FolderDown,
    },
    {
      id: 'guide',
      labelEn: 'Roadmap',
      labelHi: 'रोडमैप',
      icon: Compass,
    },
  ];

  return (
    <nav className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border-t border-slate-200 dark:border-slate-800">
      <div className="grid grid-cols-6 items-center h-16 px-1">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = currentTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => onSelectTab(tab.id)}
              className={`flex flex-col items-center justify-center h-full min-h-[44px] transition-colors ${
                isActive
                  ? 'text-indigo-600 dark:text-indigo-400 font-medium'
                  : 'text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200'
              }`}
            >
              <Icon className={`w-5 h-5 ${isActive ? 'stroke-[2.5]' : 'stroke-[1.8]'}`} />
              <span className="text-[10px] tracking-tight mt-1 truncate max-w-[54px]">
                {language === 'hi' ? tab.labelHi : tab.labelEn}
              </span>
            </button>
          );
        })}
      </div>
    </nav>
  );
};
