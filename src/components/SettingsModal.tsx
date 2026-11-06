import React, { useState } from 'react';
import { Language } from '../types';
import {
  Settings,
  X,
  User,
  Globe,
  Moon,
  Sun,
  Shield,
  Volume2,
  Bell,
  HelpCircle,
  HardDrive,
  FileText,
  Check,
} from 'lucide-react';

interface SettingsModalProps {
  isOpen: boolean;
  onClose: () => void;
  language: Language;
  onToggleLanguage: () => void;
  isDark: boolean;
  onToggleTheme: () => void;
}

export const SettingsModal: React.FC<SettingsModalProps> = ({
  isOpen,
  onClose,
  language,
  onToggleLanguage,
  isDark,
  onToggleTheme,
}) => {
  const [activeTab, setActiveTab] = useState<'learning' | 'account' | 'display' | 'privacy'>('learning');
  const [voiceSpeed, setVoiceSpeed] = useState('0.95');
  const [fontSize, setFontSize] = useState('medium');
  const [savedMsg, setSavedMsg] = useState(false);

  if (!isOpen) return null;

  const handleSave = () => {
    setSavedMsg(true);
    setTimeout(() => {
      setSavedMsg(false);
      onClose();
    }, 1000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 overflow-y-auto">
      <div className="w-full max-w-xl bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-2xl overflow-hidden my-6">
        {/* Modal Header */}
        <div className="p-5 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <Settings className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
            <h3 className="text-base font-bold text-slate-900 dark:text-white">
              {language === 'hi' ? 'ऐप सेटिंग्स एवं प्राथमिकताएं' : 'Settings & Preferences'}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 rounded-lg"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Setting Category Tabs */}
        <div className="flex items-center gap-1 p-2 bg-slate-100 dark:bg-slate-800/60 border-b border-slate-200 dark:border-slate-800 text-xs font-medium">
          <button
            onClick={() => setActiveTab('learning')}
            className={`px-3 py-1.5 rounded-lg transition-colors ${
              activeTab === 'learning'
                ? 'bg-white dark:bg-slate-700 text-slate-900 dark:text-white font-bold shadow-xs'
                : 'text-slate-600 dark:text-slate-400'
            }`}
          >
            {language === 'hi' ? 'अध्ययन' : 'Learning'}
          </button>
          <button
            onClick={() => setActiveTab('display')}
            className={`px-3 py-1.5 rounded-lg transition-colors ${
              activeTab === 'display'
                ? 'bg-white dark:bg-slate-700 text-slate-900 dark:text-white font-bold shadow-xs'
                : 'text-slate-600 dark:text-slate-400'
            }`}
          >
            {language === 'hi' ? 'डिस्प्ले' : 'Display'}
          </button>
          <button
            onClick={() => setActiveTab('account')}
            className={`px-3 py-1.5 rounded-lg transition-colors ${
              activeTab === 'account'
                ? 'bg-white dark:bg-slate-700 text-slate-900 dark:text-white font-bold shadow-xs'
                : 'text-slate-600 dark:text-slate-400'
            }`}
          >
            {language === 'hi' ? 'खाता' : 'Account'}
          </button>
          <button
            onClick={() => setActiveTab('privacy')}
            className={`px-3 py-1.5 rounded-lg transition-colors ${
              activeTab === 'privacy'
                ? 'bg-white dark:bg-slate-700 text-slate-900 dark:text-white font-bold shadow-xs'
                : 'text-slate-600 dark:text-slate-400'
            }`}
          >
            {language === 'hi' ? 'गोपनीयता' : 'Privacy'}
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 space-y-5 text-xs sm:text-sm">
          {/* TAB: LEARNING */}
          {activeTab === 'learning' && (
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-bold text-slate-900 dark:text-white">
                    {language === 'hi' ? 'प्राथमिक भाषा' : 'Primary Language'}
                  </div>
                  <div className="text-xs text-slate-400">
                    {language === 'hi' ? 'हिंदी और अंग्रेजी में तुरंत बदलें' : 'Switch UI and Teacher to Hindi/English'}
                  </div>
                </div>
                <button
                  onClick={onToggleLanguage}
                  className="px-3 py-1.5 rounded-xl border border-slate-200 dark:border-slate-700 font-semibold text-xs text-indigo-600 dark:text-indigo-400 hover:bg-slate-100 dark:hover:bg-slate-800"
                >
                  {language === 'hi' ? 'Switch to English' : 'हिंदी में बदलें'}
                </button>
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <div className="font-bold text-slate-900 dark:text-white">
                    {language === 'hi' ? 'AI टीचर बोलने की गति' : 'AI Teacher Voice Pace'}
                  </div>
                  <div className="text-xs text-slate-400">
                    {language === 'hi' ? 'कक्षा में समझाने की गति' : 'Audio narration speed'}
                  </div>
                </div>
                <select
                  value={voiceSpeed}
                  onChange={(e) => setVoiceSpeed(e.target.value)}
                  className="p-1.5 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-xs"
                >
                  <option value="0.8">0.8x (धीमा / Relaxed)</option>
                  <option value="0.95">1.0x (सामान्य / Standard)</option>
                  <option value="1.2">1.2x (तीव्र / Fast)</option>
                </select>
              </div>
            </div>
          )}

          {/* TAB: DISPLAY */}
          {activeTab === 'display' && (
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-bold text-slate-900 dark:text-white">
                    {language === 'hi' ? 'डार्क / लाइट मोड' : 'Dark / Light Mode'}
                  </div>
                  <div className="text-xs text-slate-400">
                    {language === 'hi' ? 'आंखों के आराम के लिए' : 'Toggle theme appearance'}
                  </div>
                </div>
                <button
                  onClick={onToggleTheme}
                  className="p-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 hover:bg-slate-200"
                >
                  {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
                </button>
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <div className="font-bold text-slate-900 dark:text-white">
                    {language === 'hi' ? 'फ़ॉन्ट का आकार' : 'Reading Font Size'}
                  </div>
                  <div className="text-xs text-slate-400">
                    {language === 'hi' ? 'अध्ययन सामग्री की स्पष्टता' : 'Text size for lessons'}
                  </div>
                </div>
                <select
                  value={fontSize}
                  onChange={(e) => setFontSize(e.target.value)}
                  className="p-1.5 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-xs"
                >
                  <option value="small">Small</option>
                  <option value="medium">Medium (Standard)</option>
                  <option value="large">Large</option>
                </select>
              </div>
            </div>
          )}

          {/* TAB: ACCOUNT */}
          {activeTab === 'account' && (
            <div className="space-y-4">
              <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-indigo-600 text-white flex items-center justify-center font-bold">
                  S
                </div>
                <div>
                  <div className="font-bold text-slate-900 dark:text-white">Student Learner</div>
                  <div className="text-xs text-slate-400">student@nextof.org · Class 10/12</div>
                </div>
              </div>
              <div className="text-xs text-slate-500">
                {language === 'hi'
                  ? 'पब्लिक बीटा में सभी सामग्री बिना किसी अनिवार्य रजिस्ट्रेशन के मुफ्त उपलब्ध है।'
                  : 'In this public release, all courses and skills are accessible free without mandatory paywalls.'}
              </div>
            </div>
          )}

          {/* TAB: PRIVACY */}
          {activeTab === 'privacy' && (
            <div className="space-y-3 text-xs leading-relaxed text-slate-600 dark:text-slate-400">
              <div className="font-bold text-slate-900 dark:text-white">
                {language === 'hi' ? 'गोपनीयता नीति (Privacy Policy)' : 'Privacy Policy'}
              </div>
              <p>
                NEXTOF respects student privacy and strictly adheres to COPPA / GDPR child safety principles. We never sell personal information, and API keys are strictly handled on protected server proxies.
              </p>
              <div className="font-bold text-slate-900 dark:text-white pt-2">
                {language === 'hi' ? 'सेवा की शर्तें (Terms of Service)' : 'Terms of Service'}
              </div>
              <p>
                Educational content is verified against open curriculum boards. Videos are streamed strictly inside the app; unauthorized redistribution is prohibited.
              </p>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between bg-slate-50 dark:bg-slate-900/50">
          <span className="text-[11px] text-slate-400">NEXTOF v1.0.0 · Tarun Sir</span>
          <button
            onClick={handleSave}
            className="flex items-center gap-1.5 px-4 py-2 text-xs font-semibold rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white transition-colors"
          >
            {savedMsg ? <Check className="w-3.5 h-3.5" /> : null}
            <span>{savedMsg ? 'Saved' : 'Save & Close'}</span>
          </button>
        </div>
      </div>
    </div>
  );
};
