export type Language = 'hi' | 'en';

export type UserRole = 'student' | 'teacher' | 'admin';

export interface UserProfile {
  id: string;
  name: string;
  email: string;
  grade: string;
  language: Language;
  preferredVoice: string;
  points: number;
  completedLessons: string[];
  savedNotes: string[];
  streakDays: number;
}

export interface Question {
  id: string;
  type: 'mcq' | 'short' | 'numerical' | 'conceptual';
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  questionEn: string;
  questionHi: string;
  optionsEn?: string[];
  optionsHi?: string[];
  correctAnswer: number | string;
  explanationEn: string;
  explanationHi: string;
}

export interface DiagramHotspot {
  id: string;
  x: number; // percentage
  y: number; // percentage
  titleEn: string;
  titleHi: string;
  descEn: string;
  descHi: string;
}

export interface EducationalDiagram {
  id: string;
  titleEn: string;
  titleHi: string;
  imageUrl: string;
  category: 'biology' | 'mobile_tech' | 'ev_tech' | 'physics' | 'electronics';
  descriptionEn: string;
  descriptionHi: string;
  hotspots: DiagramHotspot[];
}

export interface ChapterLesson {
  id: string;
  titleEn: string;
  titleHi: string;
  grade: string;
  subject: string;
  introductionEn: string;
  introductionHi: string;
  theoryEn: string;
  theoryHi: string;
  definitions: { termEn: string; termHi: string; meaningEn: string; meaningHi: string }[];
  formulas: { nameEn: string; nameHi: string; formula: string; noteEn: string; noteHi: string }[];
  solvedExamples: { questionEn: string; questionHi: string; solutionEn: string; solutionHi: string }[];
  videoUrl: string;
  videoDuration: string;
  videoChapters: { time: number; labelEn: string; labelHi: string }[];
  subtitles: {
    en: { start: number; end: number; text: string }[];
    hi: { start: number; end: number; text: string }[];
  };
  diagram?: EducationalDiagram;
  questions: Question[];
  revisionNotesEn: string[];
  revisionNotesHi: string[];
}

export interface SkillComponent {
  id: string;
  nameEn: string;
  nameHi: string;
  imageUrl: string;
  functionEn: string;
  functionHi: string;
  workingPrincipleEn: string;
  workingPrincipleHi: string;
  locationEn: string;
  locationHi: string;
  connectionEn: string;
  connectionHi: string;
  safetyTipsEn: string;
  safetyTipsHi: string;
}

export interface SkillCourse {
  id: string;
  category: 'mobile_tech' | 'automobile_ev' | 'electronics' | 'electrical' | 'mechanical' | 'coding_it';
  titleEn: string;
  titleHi: string;
  taglineEn: string;
  taglineHi: string;
  level: 'Beginner to Pro' | 'Zero to Hero';
  descriptionEn: string;
  descriptionHi: string;
  imageUrl: string;
  components: SkillComponent[];
  practicalDemonstrationEn: string;
  practicalDemonstrationHi: string;
  careerOpportunitiesEn: string[];
  careerOpportunitiesHi: string[];
  videoDuration: string;
  questions: Question[];
}

export interface DownloadedItem {
  id: string;
  title: string;
  category: 'notes' | 'diagram' | 'practice_set' | 'formula_sheet';
  sizeKb: number;
  dateDownloaded: string;
  content: string;
  imageUrl?: string;
}
