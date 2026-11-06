import React, { useState } from 'react';
import { Language } from '../types';
import {
  Compass,
  Smartphone,
  Server,
  Database,
  DollarSign,
  ShieldCheck,
  Video,
  Sparkles,
  Layers,
  ChevronRight,
  BookOpen,
  Cpu,
  Lock,
} from 'lucide-react';

interface FounderRoadmapGuideProps {
  language: Language;
}

export const FounderRoadmapGuide: React.FC<FounderRoadmapGuideProps> = ({ language }) => {
  const [activeSection, setActiveSection] = useState<string>('phone_dev');

  const sections = [
    {
      id: 'vision_arch',
      icon: Layers,
      titleEn: '1. Technical Architecture & Vision',
      titleHi: '1. तकनीकी आर्किटेक्चर एवं विजन',
    },
    {
      id: 'phone_dev',
      icon: Smartphone,
      titleEn: '2. Smartphone Development Setup (No Laptop Needed)',
      titleHi: '2. स्मार्टफोन से कोडिंग कैसे करें (बिना लैपटॉप)',
    },
    {
      id: 'free_paid',
      icon: DollarSign,
      titleEn: '3. Zero-Budget: Free vs Paid Tools',
      titleHi: '3. फ्री बनाम पेड सेवाएं (शून्य बजट योजना)',
    },
    {
      id: 'database',
      icon: Database,
      titleEn: '4. Scalable Database & Schema',
      titleHi: '4. डेटाबेस डिजाइन एवं यूजर डेटा',
    },
    {
      id: 'ai_teacher',
      icon: Sparkles,
      titleEn: '5. AI Teacher & Blackboard System',
      titleHi: '5. AI टीचर एवं डिजिटल बोर्ड प्रणाली',
    },
    {
      id: 'video_stream',
      icon: Video,
      titleEn: '6. Protected Video Streaming Architecture',
      titleHi: '6. सुरक्षित वीडियो स्ट्रीमिंग (नो डाउनलोड)',
    },
    {
      id: 'security',
      icon: ShieldCheck,
      titleEn: '7. Security, HTTPS & API Protection',
      titleHi: '7. साइबर सुरक्षा एवं एपीआई प्राइवेसी',
    },
    {
      id: 'roadmap',
      icon: Compass,
      titleEn: '8. 4-Stage Roadmap & Real Operating Costs',
      titleHi: '8. चरणबद्ध रोडमैप एवं संचालन लागत',
    },
  ];

  return (
    <div className="space-y-6">
      {/* Founder Tribute Banner */}
      <div className="p-6 rounded-3xl bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 text-white shadow-xl border border-indigo-900/40 relative overflow-hidden">
        <div className="relative z-10 space-y-2">
          <div className="flex items-center gap-2 text-amber-400 text-xs font-mono font-bold uppercase tracking-wider">
            <Sparkles className="w-4 h-4" />
            <span>NEXTOF FOUNDER BLUEPRINT · TARUN SIR</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
            {language === 'hi'
              ? 'तरुन सर के लिए संपूर्ण तकनीकी गाइड एवं स्मार्टफोन रोडमैप'
              : 'Complete Technical Blueprint & Android Phone Roadmap for Tarun Sir'}
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 max-w-2xl leading-relaxed">
            {language === 'hi'
              ? 'बिना लैपटॉप और सीमित बजट में भी विश्वस्तरीय प्लेटफॉर्म बनाया जा सकता है। यहाँ NEXTOF को स्मार्टफोन से शुरू करने और लाखों विद्यार्थियों तक पहुँचाने का 100% व्यावहारिक खाका है।'
              : 'You do not need an expensive laptop or massive budget to build NEXTOF. Here is your practical, step-by-step master guide to build and scale directly from your Android phone.'}
          </p>
        </div>
      </div>

      {/* Guide Navigation Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Navigation Sidebar (4 cols) */}
        <div className="lg:col-span-4 space-y-2">
          {sections.map((sec) => {
            const Icon = sec.icon;
            const isSelected = activeSection === sec.id;
            return (
              <button
                key={sec.id}
                onClick={() => setActiveSection(sec.id)}
                className={`w-full text-left p-3.5 rounded-2xl border transition-all text-xs font-medium flex items-center justify-between ${
                  isSelected
                    ? 'border-indigo-600 bg-indigo-50/70 dark:bg-indigo-950/40 text-indigo-900 dark:text-white font-bold shadow-xs'
                    : 'border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 hover:border-slate-300'
                }`}
              >
                <div className="flex items-center gap-2.5">
                  <Icon className={`w-4 h-4 ${isSelected ? 'text-indigo-600 dark:text-indigo-400' : 'text-slate-400'}`} />
                  <span className="truncate max-w-[210px] sm:max-w-[240px]">
                    {language === 'hi' ? sec.titleHi : sec.titleEn}
                  </span>
                </div>
                <ChevronRight className="w-3.5 h-3.5 opacity-50 shrink-0" />
              </button>
            );
          })}
        </div>

        {/* Content Details (8 cols) */}
        <div className="lg:col-span-8 p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-6">
          {/* SECTION 1: Vision & Architecture */}
          {activeSection === 'vision_arch' && (
            <div className="space-y-4 animate-in fade-in duration-200">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
                <Layers className="w-5 h-5 text-indigo-600" />
                <span>
                  {language === 'hi' ? 'NEXTOF सिस्टम आर्किटेक्चर' : 'NEXTOF System Architecture'}
                </span>
              </h3>

              <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-800 space-y-2 text-xs sm:text-sm leading-relaxed text-slate-700 dark:text-slate-300">
                <p>
                  {language === 'hi'
                    ? 'NEXTOF को तीन मुख्य स्तरों (3-Tier Scalable Architecture) पर डिजाइन किया गया है:'
                    : 'NEXTOF is engineered on a decoupled 3-tier cloud architecture:'}
                </p>
                <ul className="list-disc pl-5 space-y-1.5">
                  <li>
                    <strong>Frontend (PWA & Android App):</strong> React 19 + Tailwind CSS + PWA Service Worker. फोन में बिल्कुल नेटिव ऐप की तरह इंस्टॉल होता है (Add to Home Screen).
                  </li>
                  <li>
                    <strong>Backend & API Gateway:</strong> Node.js / Express proxy जो सीधे AI मॉडल्स (Google Gemini 3.8 Flash) को कॉल करता है ताकि सीक्रेट API कीज़ कभी भी फोन या ब्राउज़र में लीक न हों।
                  </li>
                  <li>
                    <strong>Storage & Database:</strong> यूजर प्रोग्रेस, क्विज़ स्कोर और नोट्स के लिए PostgreSQL / Cloud Firestore, तथा वीडियो स्ट्रीमिंग के लिए Cloudflare R2 / AWS CloudFront.
                  </li>
                </ul>
              </div>
            </div>
          )}

          {/* SECTION 2: Smartphone Coding Setup */}
          {activeSection === 'phone_dev' && (
            <div className="space-y-4 animate-in fade-in duration-200">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
                <Smartphone className="w-5 h-5 text-indigo-600" />
                <span>
                  {language === 'hi'
                    ? 'एंड्रॉइड स्मार्टफोन से कोडिंग कैसे करें'
                    : 'Coding Directly on an Android Smartphone'}
                </span>
              </h3>

              <div className="p-4 rounded-2xl bg-indigo-50/70 dark:bg-indigo-950/40 border border-indigo-100 dark:border-indigo-900/60 text-xs sm:text-sm text-indigo-950 dark:text-indigo-200 leading-relaxed">
                <strong>{language === 'hi' ? 'तरुन सर के लिए शुभ संदेश:' : 'Founder Note:'}</strong>{' '}
                {language === 'hi'
                  ? 'आपको लैपटॉप खरीदने के लिए परेशान होने की बिल्कुल जरूरत नहीं है! आपके फोन में ही पूरा Linux और VS Code जैसा वातावरण चल सकता है।'
                  : 'You do not need a computer. Your modern Android smartphone can run full Linux, Node.js, Git, and web servers!'}
              </div>

              <div className="space-y-3 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 space-y-1">
                  <div className="font-bold text-slate-900 dark:text-white flex items-center gap-2">
                    <span className="w-5 h-5 rounded-full bg-indigo-600 text-white flex items-center justify-center text-xs">
                      1
                    </span>
                    <span>Termux (F-Droid से डाउनलोड करें)</span>
                  </div>
                  <p className="pl-7 text-xs text-slate-500">
                    यह आपके फोन पर एक पूरा लिनक्स टर्मिनल खोल देता है। इसमें <code>pkg install nodejs git</code> टाइप करके Node.js और Git 2 मिनट में इंस्टॉल हो जाता है।
                  </p>
                </div>

                <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 space-y-1">
                  <div className="font-bold text-slate-900 dark:text-white flex items-center gap-2">
                    <span className="w-5 h-5 rounded-full bg-indigo-600 text-white flex items-center justify-center text-xs">
                      2
                    </span>
                    <span>Acode Editor (Google Play Store)</span>
                  </div>
                  <p className="pl-7 text-xs text-slate-500">
                    एक शानदार मोबाइल कोड एडिटर जिसमें सिंटैक्स हाइलाइटिंग, गिट सपोर्ट और टच कीबोर्ड शॉर्टकट हैं।
                  </p>
                </div>

                <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 space-y-1">
                  <div className="font-bold text-slate-900 dark:text-white flex items-center gap-2">
                    <span className="w-5 h-5 rounded-full bg-indigo-600 text-white flex items-center justify-center text-xs">
                      3
                    </span>
                    <span>GitHub Mobile & Vercel Web Dashboard</span>
                  </div>
                  <p className="pl-7 text-xs text-slate-500">
                    कोड को GitHub पर सेव करें और Vercel या Google Cloud Run पर फ्री में 1-क्लिक डिप्लॉय करें।
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* SECTION 3: Free vs Paid */}
          {activeSection === 'free_paid' && (
            <div className="space-y-4 animate-in fade-in duration-200">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
                <DollarSign className="w-5 h-5 text-emerald-600" />
                <span>
                  {language === 'hi' ? 'शून्य बजट: फ्री बनाम पेड टूल्स' : 'Zero Budget: Free vs Paid Tools'}
                </span>
              </h3>

              <div className="space-y-3 text-xs sm:text-sm">
                <div className="p-4 rounded-xl bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-900/60 text-emerald-950 dark:text-emerald-200 space-y-1">
                  <div className="font-bold">🟢 100% Free Tools (शुरुआत के लिए पर्याप्त):</div>
                  <ul className="list-disc pl-5 space-y-1 mt-1 text-xs">
                    <li><strong>Google AI Studio Gemini API:</strong> Free Tier (15 RPM) - AI टीचर और सवाल-जवाब के लिए फ्री।</li>
                    <li><strong>Vercel / Cloud Run:</strong> Free Hosting - हर महीने 100GB तक डेटा और सर्वरलेस फंक्शंस फ्री।</li>
                    <li><strong>Supabase / Neon DB:</strong> 500MB फ्री PostgreSQL डेटाबेस (लाखों स्टूडेंट्स के अकाउंट्स के लिए काफी)।</li>
                    <li><strong>Cloudflare:</strong> फ्री SSL सर्टिफिकेट, DDoS सुरक्षा और DNS.</li>
                  </ul>
                </div>

                <div className="p-4 rounded-xl bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-900/60 text-amber-950 dark:text-amber-200 space-y-1">
                  <div className="font-bold">🟡 Paid Only When You Scale (जब 50,000+ छात्र आ जाएं):</div>
                  <ul className="list-disc pl-5 space-y-1 mt-1 text-xs">
                    <li>Custom Domain (.com / .in): लगभग ₹600 - ₹900 प्रति वर्ष।</li>
                    <li>Video Bandwidth (Cloudflare Stream): $5/महीना जब वीडियो स्ट्रीमिंग बहुत ज्यादा बढ़ जाए।</li>
                  </ul>
                </div>
              </div>
            </div>
          )}

          {/* SECTION 4: Database Design */}
          {activeSection === 'database' && (
            <div className="space-y-4 animate-in fade-in duration-200">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
                <Database className="w-5 h-5 text-indigo-600" />
                <span>
                  {language === 'hi' ? 'डेटाबेस डिजाइन एवं टेबल्स' : 'Database Design & Entities'}
                </span>
              </h3>

              <div className="p-4 rounded-xl bg-slate-900 text-slate-200 font-mono text-xs overflow-x-auto border border-slate-800 space-y-2">
                <div className="text-amber-400">// Primary PostgreSQL / Firestore Collections:</div>
                <div>1. users (id, name, email, grade, role, preferred_lang, streak, created_at)</div>
                <div>2. courses (id, category, title, class_level, syllabus_board)</div>
                <div>3. lessons (id, course_id, chapter_no, title, theory_text, formulas, video_url)</div>
                <div>4. questions (id, lesson_id, type, difficulty, question, options, correct_ans, explanation)</div>
                <div>5. progress (id, user_id, lesson_id, quiz_score, completed_at, is_downloaded)</div>
                <div>6. admin_audit (id, admin_id, action, target_table, timestamp)</div>
              </div>
            </div>
          )}

          {/* SECTION 5: AI Teacher & Blackboard */}
          {activeSection === 'ai_teacher' && (
            <div className="space-y-4 animate-in fade-in duration-200">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-indigo-600" />
                <span>
                  {language === 'hi' ? 'AI टीचर एवं डिजिटल ब्लैकबोर्ड' : 'AI Teacher System & Blackboard'}
                </span>
              </h3>

              <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-800 text-xs sm:text-sm text-slate-700 dark:text-slate-300 space-y-2 leading-relaxed">
                <p>
                  {language === 'hi'
                    ? 'AI शिक्षक को केवल एक चैटबॉट नहीं, बल्कि एक असली कक्षा के गुरुजी की तरह बनाया गया है:'
                    : 'The AI teacher is engineered as a real pedagogical tutor rather than a plain chatbot:'}
                </p>
                <ul className="list-disc pl-5 space-y-1.5 text-xs">
                  <li><strong>Voice Engine:</strong> Web Speech API / Gemini Speech TTS जो हिंदी और अंग्रेजी दोनों में बोलती है।</li>
                  <li><strong>Chalkboard Rendering:</strong> ब्लैकबोर्ड पर सूत्र और चरणबद्ध नोट्स ऑटोमैटिक लिखे जाते हैं।</li>
                  <li><strong>Student-Paced:</strong> छात्र कभी भी रोककर "सर यह दोबारा समझाइए" या "सर इसका सरल उदाहरण दीजिए" कह सकते हैं।</li>
                </ul>
              </div>
            </div>
          )}

          {/* SECTION 6: Video Streaming Protection */}
          {activeSection === 'video_stream' && (
            <div className="space-y-4 animate-in fade-in duration-200">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
                <Video className="w-5 h-5 text-indigo-600" />
                <span>
                  {language === 'hi' ? 'सुरक्षित वीडियो स्ट्रीमिंग (नो डाउनलोड नियम)' : 'Protected Video Streaming Architecture'}
                </span>
              </h3>

              <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-800 text-xs sm:text-sm text-slate-700 dark:text-slate-300 space-y-2 leading-relaxed">
                <p>
                  {language === 'hi'
                    ? 'तरुन सर के निर्देशानुसार, ऐप में कोई भी वीडियो डाउनलोड बटन नहीं दिया गया है:'
                    : 'Per founder instructions, video downloads are blocked and replaced with protected in-app streaming:'}
                </p>
                <ul className="list-disc pl-5 space-y-1.5 text-xs">
                  <li><strong>HLS Chunk Streaming:</strong> वीडियो को .mp4 के रूप में नहीं, बल्कि 6-सेकंड के .ts या .m4s एनक्रिप्टेड चंक्स में स्ट्रीम किया जाता है।</li>
                  <li><strong>No Direct File URL:</strong> वीडियो लिंक समय-सीमित (Signed Token) होता है जो 30 मिनट में एक्सपायर हो जाता है।</li>
                  <li><strong>Right-click & Save Prevention:</strong> ब्राउज़र का डिफ़ॉल्ट डाउनलोड मेनू बंद कर दिया गया है।</li>
                </ul>
              </div>
            </div>
          )}

          {/* SECTION 7: Security */}
          {activeSection === 'security' && (
            <div className="space-y-4 animate-in fade-in duration-200">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
                <Lock className="w-5 h-5 text-indigo-600" />
                <span>
                  {language === 'hi' ? 'साइबर सुरक्षा एवं प्राइवेसी' : 'Enterprise Security & Privacy'}
                </span>
              </h3>

              <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-800 text-xs sm:text-sm text-slate-700 dark:text-slate-300 space-y-2 leading-relaxed">
                <ul className="list-disc pl-5 space-y-1.5 text-xs">
                  <li><strong>Zero Key Exposure:</strong> जेमिनी API की हमेशा सर्वर (server.ts) में सुरक्षित रहती है।</li>
                  <li><strong>Child Privacy (COPPA/GDPR-K Compliance):</strong> विद्यार्थियों से केवल पढ़ाई के लिए आवश्यक डेटा ही मांगा जाता है, कोई अवांछित ट्रैकिंग नहीं।</li>
                  <li><strong>Role-Based Access Control (RBAC):</strong> एडमिन पैनल केवल तरुन सर और अधिकृत व्यवस्थापक के पासवर्ड से ही खुलता है।</li>
                </ul>
              </div>
            </div>
          )}

          {/* SECTION 8: 4-Stage Roadmap */}
          {activeSection === 'roadmap' && (
            <div className="space-y-4 animate-in fade-in duration-200">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
                <Compass className="w-5 h-5 text-indigo-600" />
                <span>
                  {language === 'hi' ? '4-चरणीय व्यावहारिक विकास रोडमैप' : 'Realistic 4-Stage Scaling Roadmap'}
                </span>
              </h3>

              <div className="space-y-3 text-xs sm:text-sm">
                <div className="p-3.5 rounded-xl border border-indigo-200 dark:border-indigo-900 bg-indigo-50/50 dark:bg-indigo-950/30">
                  <div className="font-bold text-indigo-900 dark:text-indigo-200">
                    चरण 1: वर्किंग PWA व कोर फाउंडेशन (वर्तमान संस्करण)
                  </div>
                  <p className="text-slate-600 dark:text-slate-400 mt-1">
                    कक्षा 6-12 का ढांचा, मोबाइल व ईवी स्किल लैब, डिजिटल ब्लैकबोर्ड, AI वॉइस टीचर, प्रोटेक्टेड वीडियो प्लेयर, ऑफलाइन डाउनलोड्स।
                  </p>
                </div>

                <div className="p-3.5 rounded-xl border border-slate-200 dark:border-slate-800">
                  <div className="font-bold text-slate-900 dark:text-white">
                    चरण 2: Google Play Store रिलीज (TWA / Capacitor)
                  </div>
                  <p className="text-slate-600 dark:text-slate-400 mt-1">
                    वर्तमान PWA को Bubblewrap या Capacitor के माध्यम से .apk और .aab में पैक करके Google Play Store पर पब्लिश करना ($25 वन-टाइम रजिस्ट्रेशन)।
                  </p>
                </div>

                <div className="p-3.5 rounded-xl border border-slate-200 dark:border-slate-800">
                  <div className="font-bold text-slate-900 dark:text-white">
                    चरण 3: सम्पूर्ण 70-प्रश्न बैंक एवं सभी राज्य बोर्ड
                  </div>
                  <p className="text-slate-600 dark:text-slate-400 mt-1">
                    CBSE, ICSE, UP, Bihar, Maharashtra बोर्ड के सभी अध्यायों का चरणबद्ध संकलन और प्रमाणित मॉडल पेपर्स।
                  </p>
                </div>

                <div className="p-3.5 rounded-xl border border-slate-200 dark:border-slate-800">
                  <div className="font-bold text-slate-900 dark:text-white">
                    चरण 4: ग्लोबल भाषाएं व मान्यता प्राप्त सर्टिफिकेशन
                  </div>
                  <p className="text-slate-600 dark:text-slate-400 mt-1">
                    तमिल, तेलुगु, बंगाली, स्पेनिश, फ्रेंच में अनुवाद और नेशनल स्किल डेवलपमेंट कॉरपोरेशन (NSDC) के साथ सर्टिफिकेशन साझेदारी।
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
