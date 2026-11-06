import { useState, useEffect, useCallback, useRef } from 'react';
import { Language } from '../types';

export function useSpeech() {
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [isSupported, setIsSupported] = useState(false);
  const [voices, setVoices] = useState<SpeechSynthesisVoice[]>([]);
  const utteranceRef = useRef<SpeechSynthesisUtterance | null>(null);

  useEffect(() => {
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      setIsSupported(true);
      const updateVoices = () => {
        const available = window.speechSynthesis.getVoices();
        setVoices(available);
      };
      updateVoices();
      window.speechSynthesis.onvoiceschanged = updateVoices;
    }
  }, []);

  const stop = useCallback(() => {
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      setIsSpeaking(false);
    }
  }, []);

  const speak = useCallback(
    (text: string, lang: Language = 'hi', rate: number = 0.95) => {
      if (typeof window === 'undefined' || !('speechSynthesis' in window)) return;

      stop();

      // Clean speech text
      const cleanText = text.replace(/[*#_~`[\]()]/g, ' ').replace(/\s+/g, ' ').trim();
      if (!cleanText) return;

      const utterance = new SpeechSynthesisUtterance(cleanText);
      utteranceRef.current = utterance;
      utterance.rate = rate;
      utterance.pitch = 1.0;

      // Select voice based on language
      const targetLang = lang === 'hi' ? 'hi-IN' : 'en-US';
      const matchedVoice =
        voices.find((v) => v.lang.includes(lang === 'hi' ? 'hi' : 'en')) ||
        voices.find((v) => v.lang.startsWith(lang));

      if (matchedVoice) {
        utterance.voice = matchedVoice;
      }
      utterance.lang = targetLang;

      utterance.onstart = () => setIsSpeaking(true);
      utterance.onend = () => setIsSpeaking(false);
      utterance.onerror = () => setIsSpeaking(false);

      window.speechSynthesis.speak(utterance);
    },
    [voices, stop]
  );

  return {
    speak,
    stop,
    isSpeaking,
    isSupported,
  };
}
