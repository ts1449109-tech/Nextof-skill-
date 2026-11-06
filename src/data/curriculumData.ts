import { ChapterLesson, SkillCourse, EducationalDiagram } from '../types';

export const DIAGRAM_HEART: EducationalDiagram = {
  id: 'diag-heart',
  titleEn: 'Human Heart Internal Chambers & Blood Flow',
  titleHi: 'मानव हृदय: आंतरिक संरचना और रक्त प्रवाह प्रणाली',
  imageUrl: '/src/assets/images/diagram_human_heart_1793979148050.jpg',
  category: 'biology',
  descriptionEn: 'Four-chambered muscular organ that pumps deoxygenated blood to the lungs and oxygen-rich blood to the entire body.',
  descriptionHi: 'चार कोष्ठकों वाला पेशीय अंग जो फेफड़ों में अशुद्ध रक्त और पूरे शरीर में ऑक्सीजन युक्त शुद्ध रक्त पंप करता है।',
  hotspots: [
    {
      id: 'hs-aorta',
      x: 65,
      y: 20,
      titleEn: 'Aorta (Arch)',
      titleHi: 'महाधमनी (Aorta)',
      descEn: 'The largest artery in the body; carries oxygen-rich blood pumped from the left ventricle to systemic circulation.',
      descHi: 'शरीर की सबसे बड़ी धमनी; बाएं निलय से ऑक्सीजन युक्त रक्त पूरे शरीर तक पहुंचाती है।',
    },
    {
      id: 'hs-ra',
      x: 35,
      y: 55,
      titleEn: 'Right Atrium (दायां अलिंद)',
      titleHi: 'दायां अलिंद',
      descEn: 'Receives deoxygenated blood from the upper and lower body via superior and inferior vena cava.',
      descHi: 'सुपीरियर और इन्फीरियर वेना कावा के माध्यम से शरीर से अशुद्ध (डी-ऑक्सीजनेटेड) रक्त प्राप्त करता है।',
    },
    {
      id: 'hs-lv',
      x: 60,
      y: 72,
      titleEn: 'Left Ventricle (बायां निलय)',
      titleHi: 'बायां निलय',
      descEn: 'Has thickest muscular walls to generate high pressure for pumping oxygenated blood into the aorta.',
      descHi: 'इसकी दीवारें सबसे मोटी और मजबूत होती हैं ताकि रक्त को उच्च दबाव के साथ महाधमनी में भेजा जा सके।',
    },
    {
      id: 'hs-valves',
      x: 50,
      y: 60,
      titleEn: 'Tricuspid & Bicuspid Valves',
      titleHi: 'त्रिकपर्दी व द्विकपर्दी वाल्व',
      descEn: 'One-way flap valves that prevent the backflow of blood into atria during ventricular contraction (systole).',
      descHi: 'एकतरफा कपाट जो निलय के संकुचन के दौरान रक्त को वापस अलिंद में जाने से रोकते हैं।',
    },
  ],
};

export const DIAGRAM_SMARTPHONE: EducationalDiagram = {
  id: 'diag-smartphone',
  titleEn: 'Modern Smartphone Hardware Architecture & Teardown',
  titleHi: 'स्मार्टफोन हार्डवेयर संरचना और कॉम्पोनेन्ट टियरडाउन',
  imageUrl: '/src/assets/images/diagram_smartphone_teardown_1793979149213.jpg',
  category: 'mobile_tech',
  descriptionEn: 'Complete layered view of smartphone internal engineering: Display panel, main PCB motherboard, SoC, battery, and antennas.',
  descriptionHi: 'स्मार्टफोन के भीतरी इलेक्ट्रॉनिक घटकों का सम्पूर्ण विश्लेषण: डिस्प्ले, मुख्य पीसीबी मदरबोर्ड, प्रोसेसर, बैटरी और एंटीना।',
  hotspots: [
    {
      id: 'hs-soc',
      x: 52,
      y: 49,
      titleEn: 'Snapdragon SoC & Motherboard',
      titleHi: 'सिस्टम ऑन चिप (SoC) व मदरबोर्ड',
      descEn: 'The brain of the mobile. Integrates CPU, Adreno GPU, NPU for AI tasks, and 5G modem on a single 4nm silicon die.',
      descHi: 'स्मार्टफोन का मुख्य मस्तिष्क। इसमें सीपीयू, जीपीयू, एआई प्रोसेसर और 5जी मॉडम एक ही 4nm चिप पर लगे होते हैं।',
    },
    {
      id: 'hs-battery',
      x: 53,
      y: 65,
      titleEn: 'Lithium-Ion Battery Pack',
      titleHi: 'लिथियम-आयन बैटरी पैक (4800mAh)',
      descEn: 'Supplies regulated 3.85V-4.4V direct current with internal Protection Circuit Module (PCM) to prevent overcharging.',
      descHi: '3.85V-4.4V डीसी पावर प्रदान करती है। इसमें ओवरहीटिंग और शॉर्ट-सर्किट से बचाव के लिए पीसीएम सुरक्षा सर्किट होता है।',
    },
    {
      id: 'hs-display',
      x: 50,
      y: 30,
      titleEn: 'AMOLED Display & Digitizer',
      titleHi: 'एमोलेड डिस्प्ले व टच डिजिटाइज़र',
      descEn: 'Emits light per-pixel without backlight. Flexible OLED substrate with capacitive touch matrix on top.',
      descHi: 'प्रत्येक पिक्सल स्वयं प्रकाश उत्सर्जित करता है। इसके ऊपर कैपेसिटिव टच डिजिटाइज़र परत होती है।',
    },
    {
      id: 'hs-camera',
      x: 60,
      y: 40,
      titleEn: 'Triple Camera Sensor Module',
      titleHi: 'ट्रिपल कैमरा सेंसर व OIS लेंस',
      descEn: 'High-resolution CMOS image sensor with Optical Image Stabilization (OIS) gyros and voice-coil motor focus.',
      descHi: 'ऑप्टिकल इमेज स्टेबिलाइज़ेशन (OIS) के साथ उच्च गुणवत्ता वाला कैमरा सेंसर जो स्थिर वीडियो और स्पष्ट फोटो लेता है।',
    },
  ],
};

export const DIAGRAM_EV: EducationalDiagram = {
  id: 'diag-ev',
  titleEn: 'Electric Vehicle (EV) Powertrain & Skateboard Chassis',
  titleHi: 'इलेक्ट्रिक वाहन (EV) चेसिस व पावरट्रेन प्रणाली',
  imageUrl: '/src/assets/images/diagram_ev_car_powertrain_1793979148606.jpg',
  category: 'ev_tech',
  descriptionEn: 'Structural skateboard design with underfloor battery pack, inverter converter, and direct-drive electric motor.',
  descriptionHi: 'गाड़ी के फर्श में स्थित बैटरी पैक, पावर इन्वर्टर और पहियों को शक्ति देने वाली इलेक्ट्रिक मोटर का तकनीकी मॉडल।',
  hotspots: [
    {
      id: 'hs-ev-battery',
      x: 48,
      y: 52,
      titleEn: 'Lithium-Ion Traction Battery Pack',
      titleHi: 'हाई-वोल्टेज बैटरी पैक (560V)',
      descEn: 'High-voltage DC power source enclosed in reinforced steel/aluminum with liquid coolant circulation channels.',
      descHi: 'हाई-वोल्टेज डीसी ऊर्जा स्रोत। बैटरी को ठंडा रखने के लिए इसमें लिक्विड कूलेंट चैनल लगे होते हैं।',
    },
    {
      id: 'hs-ev-motor',
      x: 70,
      y: 35,
      titleEn: 'Electric Drive Motor (150kW)',
      titleHi: 'इलेक्ट्रिक ड्राइव मोटर (150kW)',
      descEn: 'Permanent Magnet AC Synchronous Motor delivering instant torque from 0 RPM directly to the differential.',
      descHi: 'शून्य आरपीएम से ही अधिकतम टॉर्क देने वाली स्थायी चुंबक एसी मोटर, जो पहियों को तीव्र गति प्रदान करती है।',
    },
    {
      id: 'hs-ev-inverter',
      x: 74,
      y: 55,
      titleEn: 'Power Inverter & Bi-directional Converter',
      titleHi: 'पावर इन्वर्टर व कनवर्टर',
      descEn: 'Converts battery DC to 3-phase AC for the motor, and reverses current during regenerative braking to recharge the battery.',
      descHi: 'बैटरी के डीसी करंट को मोटर के लिए एसी में बदलता है, और ब्रेक लगाने पर ऊर्जा को वापस बैटरी में भरता है।',
    },
  ],
};

export const CHAPTER_LESSONS: ChapterLesson[] = [
  {
    id: 'class-10-bio-heart',
    grade: 'Class 10',
    subject: 'Science (Biology)',
    titleEn: 'Life Processes: Circulatory System and Human Heart',
    titleHi: 'जैव प्रक्रम: परिसंचरण तंत्र एवं मानव हृदय की कार्यप्रणाली',
    introductionEn: 'The human circulatory system is a marvel of biological engineering. To sustain life, every single cell needs a constant supply of oxygen, nutrients, and waste removal. The heart functions as a non-stop muscular pump, executing over 100,000 beats daily.',
    introductionHi: 'मानव परिसंचरण तंत्र प्रकृति का एक अद्भुत जैव-इंजीनियरिंग चमत्कार है। जीवन को निरंतर बनाए रखने के लिए प्रत्येक कोशिका को ऑक्सीजन, पोषक तत्व और अपशिष्ट निष्कासन की आवश्यकता होती है। हमारा हृदय प्रतिदिन 1,00,000 से अधिक बार बिना रुके धड़कने वाला एक शक्तिशाली पंप है।',
    theoryEn: `Double Circulation Mechanism:
In humans, blood passes through the heart TWICE during each complete cardiac cycle.
1. Pulmonary Circulation:
Right Ventricle pumps deoxygenated blood to the lungs via the pulmonary artery. In the alveoli, carbon dioxide is released and oxygen is absorbed. The oxygenated blood returns to the Left Atrium via pulmonary veins.

2. Systemic Circulation:
The Left Ventricle contracts with powerful force, pushing oxygen-rich blood into the Aorta, which distributes it to the brain, muscles, and organs. Oxygen is delivered, metabolic waste collected, and veins return it back to the Right Atrium.

Cardiac Cycle & Valves:
- Systole: Phase of contraction when blood is ejected into arteries.
- Diastole: Phase of relaxation when heart chambers fill with blood.
- Valves (Tricuspid, Bicuspid/Mitral, Semilunar) ensure strictly unidirectional blood flow.`,
    theoryHi: `दोहरा परिसंचरण (Double Circulation):
मानव शरीर में रक्त एक पूर्ण चक्र में हृदय से दो बार होकर गुजरता है।
1. फुफ्फुसीय परिसंचरण (Pulmonary Circulation):
दायां निलय अशुद्ध रक्त को फुफ्फुस धमनी के जरिए फेफड़ों में भेजता है। फेफड़ों में कार्बन डाइऑक्साइड बाहर निकलती है और ऑक्सीजन रक्त में घुलती है। शुद्ध रक्त फुफ्फुस शिराओं द्वारा बाएं अलिंद में लौटता है।

2. दैहिक परिसंचरण (Systemic Circulation):
बायां निलय उच्च दबाव के साथ संकुचित होता है और शुद्ध रक्त को महाधमनी (Aorta) में भेजता है, जहां से यह पूरे शरीर के अंगों में वितरित होता है।

कपाट (Valves) का कार्य:
हृदय के वाल्व रक्त को केवल एक ही दिशा में बहने देते हैं, विपरीत दिशा में बहने से रोकते हैं।`,
    definitions: [
      {
        termEn: 'Double Circulation',
        termHi: 'दोहरा परिसंचरण',
        meaningEn: 'A circulatory system where blood travels through the heart twice in one complete cycle: once to lungs (pulmonary) and once to body tissues (systemic).',
        meaningHi: 'वह प्रणाली जिसमें रक्त एक पूरे चक्र के दौरान हृदय से दो बार गुजरता है: एक बार फेफड़ों में और दूसरी बार पूरे शरीर में।',
      },
      {
        termEn: 'Cardiac Output',
        termHi: 'कार्डियक आउटपुट',
        meaningEn: 'The volume of blood pumped by each ventricle per minute. Cardiac Output = Stroke Volume × Heart Rate (Approx. 5 Liters/min).',
        meaningHi: 'प्रत्येक निलय द्वारा प्रति मिनट पंप किए जाने वाले रक्त की मात्रा (लगभग 5 लीटर प्रति मिनट)।',
      },
      {
        termEn: 'Hypertension',
        termHi: 'उच्च रक्तचाप (हाई ब्लड प्रेशर)',
        meaningEn: 'Persistently elevated arterial pressure above 140/90 mmHg, putting strain on heart and blood vessels.',
        meaningHi: 'धमनियों में रक्त का दबाव लगातार 140/90 mmHg से अधिक रहना।',
      },
    ],
    formulas: [
      {
        nameEn: 'Cardiac Output Formula',
        nameHi: 'कार्डियक आउटपुट सूत्र',
        formula: 'CO = SV × HR',
        noteEn: 'SV = Stroke Volume (~70 mL), HR = Heart Rate (~72 bpm) => CO ≈ 5040 mL/min (5.04 L/min)',
        noteHi: 'स्ट्रोक वॉल्यूम (70 मिली) × हृदय गति (72 धड़कन/मिनट) = लगभग 5 लीटर प्रति मिनट',
      },
      {
        nameEn: 'Normal Blood Pressure',
        nameHi: 'सामान्य रक्तचाप मान',
        formula: 'BP = 120 / 80 mmHg',
        noteEn: '120 mmHg is systolic pressure (contraction); 80 mmHg is diastolic pressure (relaxation)',
        noteHi: '120 mmHg सिस्टोलिक (संकुचन) और 80 mmHg डायस्टोलिक (विश्राम) दबाव होता है',
      },
    ],
    solvedExamples: [
      {
        questionEn: 'If an athlete has a resting heart rate of 55 beats per minute and a stroke volume of 90 mL per beat, calculate their total cardiac output in liters per minute.',
        questionHi: 'यदि किसी एथलीट की आराम की स्थिति में हृदय गति 55 धड़कन प्रति मिनट है और प्रत्येक धड़कन पर स्ट्रोक वॉल्यूम 90 मिलीलीटर है, तो उसका कुल कार्डियक आउटपुट लीटर/मिनट में ज्ञात कीजिए।',
        solutionEn: `Given:
Stroke Volume (SV) = 90 mL
Heart Rate (HR) = 55 beats/min

Formula:
Cardiac Output (CO) = SV × HR
CO = 90 mL × 55
CO = 4950 mL/min
Converting to liters: 4950 / 1000 = 4.95 Liters/minute.`,
        solutionHi: `हल:
स्ट्रोक वॉल्यूम (SV) = 90 mL
हृदय गति (HR) = 55 beats/min

सूत्र:
कार्डियक आउटपुट = SV × HR
= 90 × 55 = 4950 मिलीलीटर प्रति मिनट।
लीटर में = 4.95 लीटर प्रति मिनट।`,
      },
    ],
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
    videoDuration: '32:15',
    videoChapters: [
      { time: 0, labelEn: '01. Structure of Human Heart', labelHi: '01. मानव हृदय की संरचना' },
      { time: 480, labelEn: '02. Four Chambers & Valves', labelHi: '02. चार कोष्ठक और वाल्व' },
      { time: 1020, labelEn: '03. Double Circulation Explained', labelHi: '03. दोहरा परिसंचरण समझें' },
      { time: 1540, labelEn: '04. Blood Pressure Measurement', labelHi: '04. रक्तचाप मापन' },
    ],
    subtitles: {
      en: [
        { start: 0, end: 10, text: 'Welcome to NEXTOF Class 10 Biology with Tarun Sir.' },
        { start: 11, end: 25, text: 'Today we explore the magnificent human heart and blood circulation.' },
        { start: 26, end: 50, text: 'Notice how the left ventricle has the thickest muscle wall to pump oxygenated blood.' },
      ],
      hi: [
        { start: 0, end: 10, text: 'NEXTOF कक्षा 10 विज्ञान में आपका स्वागत है।' },
        { start: 11, end: 25, text: 'आज हम मानव हृदय और रक्त परिसंचरण तंत्र की पूरी कार्यप्रणाली समझेंगे।' },
        { start: 26, end: 50, text: 'ध्यान से देखें कि बायां निलय सबसे मोटी मांसपेशी से बना होता है जो पूरे शरीर में रक्त भेजता है।' },
      ],
    },
    diagram: DIAGRAM_HEART,
    revisionNotesEn: [
      'The human heart has 4 chambers: Right & Left Atria (receiving), Right & Left Ventricles (pumping).',
      'Right side deals strictly with deoxygenated blood; Left side deals with oxygenated blood.',
      'Valves (Tricuspid, Bicuspid, Semilunar) prevent reverse backflow.',
      'Pulmonary artery is the ONLY artery in human body carrying deoxygenated blood.',
      'Pulmonary vein is the ONLY vein carrying oxygen-rich blood.',
      'Normal human blood pressure benchmark is 120/80 mm of Hg measured with Sphygmomanometer.',
    ],
    revisionNotesHi: [
      'मानव हृदय में 4 कोष्ठक होते हैं: 2 अलिंद (रक्त ग्रहण करने वाले) और 2 निलय (रक्त पंप करने वाले)।',
      'हृदय का दायां भाग अशुद्ध रक्त और बायां भाग शुद्ध रक्त का संचालन करता है।',
      'वाल्व रक्त को कभी भी उल्टी दिशा में बहने नहीं देते।',
      'फुफ्फुस धमनी एकमात्र ऐसी धमनी है जो अशुद्ध रक्त ले जाती है।',
      'फुफ्फुस शिरा एकमात्र ऐसी शिरा है जो शुद्ध रक्त ले जाती है।',
      'सामान्य रक्तचाप 120/80 mmHg होता है जिसे स्फाइग्मोमैनोमीटर से नापा जाता है।',
    ],
    questions: [
      {
        id: 'q-heart-1',
        type: 'mcq',
        difficulty: 'beginner',
        questionEn: 'Which chamber of the human heart receives oxygenated blood directly from the lungs?',
        questionHi: 'मानव हृदय का कौन सा कोष्ठक सीधे फेफड़ों से ऑक्सीजन युक्त शुद्ध रक्त प्राप्त करता है?',
        optionsEn: ['Right Atrium', 'Left Atrium', 'Right Ventricle', 'Left Ventricle'],
        optionsHi: ['दायां अलिंद', 'बायां अलिंद', 'दायां निलय', 'बायां निलय'],
        correctAnswer: 1,
        explanationEn: 'Oxygenated blood from the lungs returns through the pulmonary veins into the Left Atrium.',
        explanationHi: 'फेफड़ों से शुद्ध रक्त फुफ्फुस शिराओं के माध्यम से बाएं अलिंद (Left Atrium) में आता है।',
      },
      {
        id: 'q-heart-2',
        type: 'mcq',
        difficulty: 'intermediate',
        questionEn: 'Why do the ventricles have much thicker muscular walls than the atria?',
        questionHi: 'निलय (Ventricles) की दीवारें अलिंद की तुलना में अधिक मोटी और मजबूत क्यों होती हैं?',
        optionsEn: [
          'Because they have to pump blood with high pressure to distant organs',
          'Because they hold more blood volume',
          'To prevent carbon dioxide leakage',
          'Because they are exposed to acidic fluids',
        ],
        optionsHi: [
          'क्योंकि उन्हें उच्च दबाव के साथ रक्त को दूरस्थ अंगों तक पंप करना होता है',
          'क्योंकि उनमें अधिक मात्रा में रक्त भरा रहता है',
          'कार्बन डाइऑक्साइड के रिसाव को रोकने के लिए',
          'अम्लीय तरल पदार्थों के संपर्क के कारण',
        ],
        correctAnswer: 0,
        explanationEn: 'Atria only receive and drop blood into adjacent ventricles, while ventricles must generate massive pressure to push blood throughout the entire body.',
        explanationHi: 'निलय को पूरे शरीर में रक्त पहुंचाने के लिए भारी दबाव उत्पन्न करना पड़ता है, इसलिए उनकी दीवारें मोटी होती हैं।',
      },
      {
        id: 'q-heart-3',
        type: 'numerical',
        difficulty: 'intermediate',
        questionEn: 'If a person beats their heart 75 times per minute with a stroke volume of 70 mL, what is their Cardiac Output in Liters?',
        questionHi: 'यदि किसी व्यक्ति का हृदय 75 धड़कन प्रति मिनट और 70 mL स्ट्रोक वॉल्यूम पर कार्य करता है, तो उसका कार्डियक आउटपुट कितने लीटर होगा?',
        optionsEn: ['4.50 L', '5.25 L', '6.10 L', '3.80 L'],
        optionsHi: ['4.50 लीटर', '5.25 लीटर', '6.10 लीटर', '3.80 लीटर'],
        correctAnswer: 1,
        explanationEn: 'CO = 75 × 70 mL = 5,250 mL = 5.25 Liters/min.',
        explanationHi: 'कार्डियक आउटपुट = 75 × 70 mL = 5,250 mL = 5.25 लीटर प्रति मिनट।',
      },
      {
        id: 'q-heart-4',
        type: 'conceptual',
        difficulty: 'advanced',
        questionEn: 'What is the evolutionary advantage of complete separation of oxygenated and deoxygenated blood in mammals and birds?',
        questionHi: 'स्तनधारियों और पक्षियों में शुद्ध और अशुद्ध रक्त का पूर्ण पृथक्करण क्या विकासवादी लाभ प्रदान करता है?',
        optionsEn: [
          'Allows highly efficient oxygen delivery to maintain high metabolic rate and constant warm body temperature',
          'Reduces heart weight by half',
          'Enables respiration under water',
          'Prevents blood from coagulating inside veins',
        ],
        optionsHi: [
          'शरीर का निश्चित तापमान बनाए रखने और उच्च ऊर्जा की आवश्यकता हेतु अत्यधिक कुशल ऑक्सीजन आपूर्ति सुनिश्चित करता है',
          'हृदय के वजन को आधा कर देता है',
          'पानी के भीतर सांस लेने में मदद करता है',
          'शिराओं में रक्त का थक्का जमने से रोकता है',
        ],
        correctAnswer: 0,
        explanationEn: 'Warm-blooded animals (homeotherms) require enormous metabolic energy to maintain constant body temperatures, necessitating zero mixing of deoxygenated blood.',
        explanationHi: 'समतापी जीवों को शरीर का तापमान स्थिर रखने के लिए बहुत अधिक ऊर्जा की आवश्यकता होती है, जो रक्त के न मिलने से ही संभव है।',
      },
    ],
  },
  {
    id: 'class-12-physics-electricity',
    grade: 'Class 12',
    subject: 'Physics (PCM)',
    titleEn: 'Current Electricity: Ohm’s Law, Drift Velocity & Kirchhoff’s Laws',
    titleHi: 'विद्युत धारा: ओम का नियम, अनुगमन वेग एवं किरचॉफ के नियम',
    introductionEn: 'Electric current powers modern human civilization. From smartphone microprocessors to electric vehicle motors, mastering charge movement, resistance, and circuit laws is the foundation of electrical engineering and modern physics.',
    introductionHi: 'विद्युत धारा आधुनिक मानव सभ्यता की रीढ़ है। स्मार्टफोन प्रोसेसर से लेकर इलेक्ट्रिक कारों की मोटर तक, आवेश के प्रवाह और परिपथ के नियमों को समझना भौतिकी और इंजीनियरिंग की पहली सीढ़ी है।',
    theoryEn: `Microscopic View of Current:
Electric current is defined as the rate of flow of electric charge across a cross-section:
I = dQ/dt = n × e × A × vd
Where:
- n: electron density
- e: elementary charge (1.6 × 10^-19 C)
- A: cross-sectional area
- vd: drift velocity of conduction electrons

Ohm’s Law & Resistivity:
At constant temperature and physical dimensions, current through a conductor is proportional to the potential difference across it:
V = I × R
Resistance R = ρ × (L / A), where ρ is the specific resistivity of the material.

Kirchhoff’s Laws:
1. Kirchhoff’s Current Law (KCL - Junction Rule): Σ I = 0 at any node (Law of Conservation of Charge).
2. Kirchhoff’s Voltage Law (KVL - Loop Rule): Σ ΔV = 0 around any closed mesh (Law of Conservation of Energy).`,
    theoryHi: `विद्युत धारा का सूक्ष्म दृष्टिकोण:
विद्युत धारा आवेश के प्रवाह की दर है: I = Q / t
इलेक्ट्रॉनों के अनुगमन वेग (Drift Velocity) के साथ संबंध:
I = n × e × A × vd

ओम का नियम (Ohm's Law):
स्थिर ताप और भौतिक अवस्थाओं में चालक के सिरों पर लगाया गया विभवांतर उसमें बहने वाली धारा के समानुपाती होता है:
V = I × R
प्रतिरोध R = ρ × (L / A)

किरचॉफ के नियम:
1. संधि नियम (KCL): किसी विद्युत परिपथ में किसी भी संधि पर मिलने वाली सभी धाराओं का बीजगणितीय योग शून्य होता है (आवेश संरक्षण)।
2. लूप नियम (KVL): किसी बंद लूप में विभव परिवर्तनों का बीजगणितीय योग शून्य होता है (ऊर्जा संरक्षण)।`,
    definitions: [
      {
        termEn: 'Drift Velocity (vd)',
        termHi: 'अनुगमन वेग (Drift Velocity)',
        meaningEn: 'The average velocity with which free electrons drift towards the positive potential under the influence of an applied external electric field (~10^-4 m/s).',
        meaningHi: 'विद्युत क्षेत्र के प्रभाव में मुक्त इलेक्ट्रॉनों का धनात्मक सिरे की ओर औसत धीमी गति से खिसकना।',
      },
      {
        termEn: 'Resistivity (ρ)',
        termHi: 'विशिष्ट प्रतिरोध / प्रतिरोधकता',
        meaningEn: 'An intrinsic material property defined as the resistance of a conductor having unit length and unit cross-sectional area. Measured in Ohm-meter (Ω·m).',
        meaningHi: 'किसी पदार्थ की इकाई लंबाई और इकाई अनुप्रस्थ काट वाले तार का प्रतिरोध। इसकी इकाई ओम-मीटर (Ω·m) है।',
      },
    ],
    formulas: [
      {
        nameEn: 'Ohm’s Law',
        nameHi: 'ओम का नियम',
        formula: 'V = I × R',
        noteEn: 'Voltage (V) = Current (Amperes) × Resistance (Ohms)',
        noteHi: 'विभवांतर = धारा (एम्पीयर) × प्रतिरोध (ओम)',
      },
      {
        nameEn: 'Resistance vs Dimensions',
        nameHi: 'प्रतिरोध व भौतिक आयाम',
        formula: 'R = ρ × (L / A)',
        noteEn: 'Longer wire = higher resistance; thicker wire = lower resistance',
        noteHi: 'लंबाई बढ़ने पर प्रतिरोध बढ़ता है, मोटाई बढ़ने पर घटता है',
      },
      {
        nameEn: 'Electrical Power',
        nameHi: 'विद्युत शक्ति',
        formula: 'P = V × I = I² × R = V² / R',
        noteEn: 'Power in Watts (Joules per second)',
        noteHi: 'शक्ति वाट में (जूल प्रति सेकंड)',
      },
    ],
    solvedExamples: [
      {
        questionEn: 'A copper wire of length 2 m and cross-sectional area 1.7 × 10^-6 m² has a resistivity of 1.7 × 10^-8 Ω·m. Calculate its resistance and the current when connected to a 10V battery.',
        questionHi: '2 मीटर लंबे तांबे के तार का अनुप्रस्थ काट क्षेत्रफल 1.7 × 10^-6 m² और प्रतिरोधकता 1.7 × 10^-8 Ω·m है। इसका प्रतिरोध और 10V बैटरी लगाने पर धारा ज्ञात करें।',
        solutionEn: `R = ρ × (L / A)
R = (1.7 × 10^-8) × (2 / (1.7 × 10^-6)) = 0.02 Ω

By Ohm's Law:
I = V / R = 10 / 0.02 = 500 Amperes.`,
        solutionHi: `हल:
R = ρ × (L / A)
R = (1.7 × 10^-8) × 2 / (1.7 × 10^-6) = 0.02 ओम।

ओम के नियम से:
I = V / R = 10 / 0.02 = 500 एम्पीयर।`,
      },
    ],
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
    videoDuration: '45:10',
    videoChapters: [
      { time: 0, labelEn: '01. Electric Current & Free Electrons', labelHi: '01. विद्युत धारा और मुक्त इलेक्ट्रॉन' },
      { time: 600, labelEn: '02. Derivation of Ohm’s Law', labelHi: '02. ओम के नियम का निगमन' },
      { time: 1400, labelEn: '03. Kirchhoff’s First and Second Laws', labelHi: '03. किरचॉफ के प्रथम व द्वितीय नियम' },
      { time: 2200, labelEn: '04. Wheatstone Bridge & Potentiometer', labelHi: '04. व्हीटस्टोन सेतु एवं विभवमापी' },
    ],
    subtitles: {
      en: [
        { start: 0, end: 12, text: 'NEXTOF Physics with Tarun Sir: Class 12 Current Electricity.' },
        { start: 13, end: 35, text: 'Remember, electrons move very slowly with drift velocity, but the electric field propagates at nearly speed of light.' },
      ],
      hi: [
        { start: 0, end: 12, text: 'NEXTOF कक्षा 12 भौतिकी में आपका स्वागत है।' },
        { start: 13, end: 35, text: 'इलेक्ट्रॉन बहुत धीमी गति से खिसकते हैं, लेकिन विद्युत क्षेत्र प्रकाश की गति से संचालित होता है।' },
      ],
    },
    revisionNotesEn: [
      'Current is a scalar quantity even though it has direction, because it follows scalar addition.',
      'Drift velocity vd is directly proportional to electric field: vd = μE, where μ is electron mobility.',
      'Temperature coefficient of resistance (α) is positive for metals and negative for semiconductors.',
      'Kirchhoff’s Current Law is based on Conservation of Charge.',
      'Kirchhoff’s Loop Law is based on Conservation of Energy.',
    ],
    revisionNotesHi: [
      'विद्युत धारा एक अदिश राशि है क्योंकि यह सदिश योग के नियमों का पालन नहीं करती।',
      'धातुओं का प्रतिरोध तापमान बढ़ाने पर बढ़ता है, जबकि अर्धचालकों (Semiconductors) का घटता है।',
      'किरचॉफ का संधि नियम आवेश संरक्षण पर आधारित है।',
      'किरचॉफ का लूप नियम ऊर्जा संरक्षण पर आधारित है।',
    ],
    questions: [
      {
        id: 'q-elec-1',
        type: 'mcq',
        difficulty: 'beginner',
        questionEn: 'Kirchhoff’s First Rule (Junction rule ΣI = 0) is a direct consequence of which conservation law?',
        questionHi: 'किरचॉफ का प्रथम नियम (संधि नियम ΣI = 0) किस संरक्षण नियम पर आधारित है?',
        optionsEn: ['Conservation of Energy', 'Conservation of Charge', 'Conservation of Momentum', 'Conservation of Mass'],
        optionsHi: ['ऊर्जा का संरक्षण', 'आवेश का संरक्षण', 'संवेग का संरक्षण', 'द्रव्यमान का संरक्षण'],
        correctAnswer: 1,
        explanationEn: 'Electric charge can neither accumulate nor be destroyed at a circuit junction node.',
        explanationHi: 'किसी परिपथ संधि पर न तो आवेश नष्ट हो सकता है और न ही संचित हो सकता है। यह आवेश संरक्षण पर आधारित है।',
      },
      {
        id: 'q-elec-2',
        type: 'numerical',
        difficulty: 'intermediate',
        questionEn: 'If a wire of resistance 16 Ω is stretched to double its original length keeping volume constant, what is its new resistance?',
        questionHi: 'यदि 16 ओम प्रतिरोध वाले तार को खींचकर उसकी लंबाई दोगुनी कर दी जाए, तो उसका नया प्रतिरोध क्या होगा?',
        optionsEn: ['32 Ω', '64 Ω', '8 Ω', '16 Ω'],
        optionsHi: ['32 ओम', '64 ओम', '8 ओम', '16 ओम'],
        correctAnswer: 1,
        explanationEn: 'When length doubles, area halves (since Volume = L × A is constant). R_new = ρ × (2L / (A/2)) = 4 × R_old = 4 × 16 = 64 Ω.',
        explanationHi: 'लंबाई दोगुनी होने पर क्षेत्रफल आधा हो जाता है। अतः प्रतिरोध 4 गुना हो जाता है: 4 × 16 = 64 ओम।',
      },
    ],
  },
];

export const SKILL_COURSES: SkillCourse[] = [
  {
    id: 'skill-mobile-tech',
    category: 'mobile_tech',
    titleEn: 'Mobile & Smartphone Technology: Zero to Hardware Pro',
    titleHi: 'मोबाइल व स्मार्टफोन टेक्नोलॉजी: संपूर्ण हार्डवेयर एवं रिपेयरिंग कोर्स',
    taglineEn: 'Master modern smartphone architecture, component diagnostics, micro-soldering and firmware.',
    taglineHi: 'स्मार्टफोन के सभी पुर्जों की पहचान, कार्यप्रणाली, सर्किट टेस्टिंग और रिपेयरिंग सीखें।',
    level: 'Zero to Hero',
    descriptionEn: 'Detailed hands-on curriculum covering every smartphone component: AMOLED screens, touch digitizers, Qualcomm Snapdragon SoCs, LPDDR5X RAM, UFS 4.0 storage, lithium battery chemistry, camera OIS sensors, sub-boards, and RF antennas.',
    descriptionHi: 'स्मार्टफोन के प्रत्येक घटक की विस्तृत जानकारी: एमोलेड स्क्रीन, टच डिजिटाइज़र, क्वालकॉम स्नैपड्रैगन प्रोसेसर, एलपीडीडीआर5एक्स रैम, यूएफएस स्टोरेज, लिथियम बैटरी, कैमरा सेंसर और 5जी एंटीना।',
    imageUrl: '/src/assets/images/diagram_smartphone_teardown_1793979149213.jpg',
    videoDuration: '58:40',
    practicalDemonstrationEn: 'Step-by-step disassembly using heat gun at 80°C, suction cups, ESD safe pry tools, multimeter voltage test on VBUS line, and battery connector impedance test.',
    practicalDemonstrationHi: '80°C पर हीट गन से बैक पैनल खोलना, ईएसडी सुरक्षित टूल्स का उपयोग, मल्टीमीटर से वीबस लाइन पर 5V टेस्टिंग, और बैटरी कनेक्टर का ओह्म टेस्ट।',
    careerOpportunitiesEn: [
      'Smartphone Hardware Repair Engineer (स्मार्टफोन हार्डवेयर इंजीनियर)',
      'Mobile Assembly & Testing Technician (मोबाइल टेस्टिंग तकनीशियन)',
      'Smartphone R&D Quality Control Specialist (क्वालिटी कंट्रोल स्पेशलिस्ट)',
      'Independent Mobile Service Center Entrepreneur (मोबाइल रिपेयरिंग सेंटर संचालक)',
    ],
    careerOpportunitiesHi: [
      'स्मार्टफोन हार्डवेयर रिपेयर इंजीनियर',
      'मोबाइल असेंबली व टेस्टिंग तकनीशियन',
      'गुणवत्ता नियंत्रण (QC) विशेषज्ञ',
      'अपना स्वयं का मोबाइल सर्विस सेंटर व व्यवसाय',
    ],
    components: [
      {
        id: 'comp-display',
        nameEn: 'AMOLED Display & Touch Digitizer',
        nameHi: 'एमोलेड डिस्प्ले व टच डिजिटाइज़र',
        imageUrl: '/src/assets/images/diagram_smartphone_teardown_1793979149213.jpg',
        functionEn: 'Outputs visual pixels with 120Hz refresh rate and captures user capacitive finger inputs.',
        functionHi: '120Hz रिफ्रेश रेट के साथ दृश्य दिखाता है और उंगलियों के स्पर्श इनपुट को ग्रहण करता है।',
        workingPrincipleEn: 'Organic light emitting diodes produce RGB light without backlight. Capacitive grid detects electrostatic charge disturbances.',
        workingPrincipleHi: 'ऑर्गेनिक डायोड स्वयं प्रकाश बनाते हैं। कैपेसिटिव ग्रिड उंगली के स्पर्श से वोल्टेज में आए सूक्ष्म बदलाव को पहचानती है।',
        locationEn: 'Front outer assembly of the smartphone glued into the aluminum mid-frame.',
        locationHi: 'फोन का सामने का मुख्य भाग जो एल्यूमीनियम फ्रेम में चिपका रहता है।',
        connectionEn: 'Connects to main PCB motherboard via a high-density 40-pin flex cable (MIPI DSI protocol).',
        connectionHi: '40-पिन फ्लेक्स केबल के माध्यम से मदरबोर्ड से जुड़ा होता है।',
        safetyTipsEn: 'Never bend the flex cable past 90 degrees; use 80°C heating mat to soften adhesive safely.',
        safetyTipsHi: 'डिस्प्ले केबल को 90 डिग्री से अधिक कभी न मोड़ें; गोंद ढीला करने के लिए 80 डिग्री से अधिक तापमान न दें।',
      },
      {
        id: 'comp-soc',
        nameEn: 'Processor / SoC (System-on-Chip)',
        nameHi: 'प्रोसेसर / सिस्टम-ऑन-चिप (SoC)',
        imageUrl: '/src/assets/images/diagram_smartphone_teardown_1793979149213.jpg',
        functionEn: 'Executes operating system kernel, apps, AI vision models, graphics rendering, and 5G cellular communication.',
        functionHi: 'एंड्रॉइड ओएस, ऐप्स, कैमरा प्रोसेसिंग, गेमिंग और 5जी नेटवर्क का पूरा नियंत्रण करता है।',
        workingPrincipleEn: 'Billions of nanoscale FinFET transistors etched onto silicon operating at clock speeds up to 3.3 GHz.',
        workingPrincipleHi: 'सिलिकॉन चिप पर बने अरबों नैनोस्केल ट्रांजिस्टर जो 3.3 GHz तक की गति पर डेटा प्रोसेस करते हैं।',
        locationEn: 'Mounted on the top section of the main motherboard PCB underneath copper graphite heat shield.',
        locationHi: 'मदरबोर्ड के ऊपरी भाग में कॉपर/ग्रेफाइट हीट शील्ड के नीचे लगा होता है।',
        connectionEn: 'Ball Grid Array (BGA) soldering directly onto the multi-layer printed circuit board.',
        connectionHi: 'बीजीए (Ball Grid Array) सोल्डरिंग द्वारा मदरबोर्ड से जुड़ा रहता है।',
        safetyTipsEn: 'Avoid excessive hot-air rework beyond 240°C without flux to prevent PCB delamination or dead solder balls.',
        safetyTipsHi: 'बिना फ्लक्स के 240 डिग्री से अधिक गर्म हवा न दें, अन्यथा चिप के सोल्डर बॉल्स पिघलकर आपस में चिपक जाएंगे।',
      },
      {
        id: 'comp-battery',
        nameEn: 'Lithium-Ion Battery with Protection Board',
        nameHi: 'लिथियम-आयन बैटरी व सुरक्षा बोर्ड',
        imageUrl: '/src/assets/images/diagram_smartphone_teardown_1793979149213.jpg',
        functionEn: 'Stores chemical energy and releases regulated direct electric current to power all phone circuits.',
        functionHi: 'रासायनिक ऊर्जा को विद्युत ऊर्जा में बदलकर फोन के सभी सर्किट को पावर प्रदान करती है।',
        workingPrincipleEn: 'Lithium ions move from cathode (Lithium Cobalt Oxide) to anode (graphite) during charging, and reverse during discharge.',
        workingPrincipleHi: 'चार्जिंग के दौरान लिथियम आयन कैथोड से एनोड की ओर जाते हैं, और डिस्चार्जिंग पर वापस लौटकर करंट बनाते हैं।',
        locationEn: 'Occupies over 60% of internal volume in the center cavity behind the rear panel.',
        locationHi: 'फोन के बीच के 60% हिस्से में स्थित होती है।',
        connectionEn: 'Secured via battery connector socket on the motherboard with dedicated battery data line (BSI/NTC temp sensor).',
        connectionHi: 'मदरबोर्ड पर बैटरी सॉकेट से जुड़ी होती है जिसमें तापमान जांचने वाला NTC सेंसर पिन भी होता है।',
        safetyTipsEn: 'CRITICAL: Never puncture or bend lithium pouch cells! Puncturing causes violent thermal runaway and fire.',
        safetyTipsHi: 'अत्यंत महत्वपूर्ण: बैटरी में कभी सुई या नुकीली चीज़ न चुभोएं! इससे रासायनिक आग लग सकती है।',
      },
    ],
    questions: [
      {
        id: 'q-mob-1',
        type: 'mcq',
        difficulty: 'beginner',
        questionEn: 'Which tool is essential to discharge static electricity before opening a smartphone motherboard?',
        questionHi: 'स्मार्टफोन का मदरबोर्ड खोलने से पहले स्थिर विद्युत (Static Electricity) से बचाव के लिए क्या आवश्यक है?',
        optionsEn: ['Anti-static ESD wrist strap', 'Magnetic screwdriver', 'Magnifying glass', 'Acetone liquid'],
        optionsHi: ['एंटी-स्टैटिक ईएसडी कलाई का पट्टा (ESD Wrist Strap)', 'चुंबकीय पेचकस', 'मैग्निफाइंग ग्लास', 'एसीटोन तरल'],
        correctAnswer: 0,
        explanationEn: 'Electrostatic discharge (ESD) can destroy delicate silicon gates on SoC and RAM chips instantly.',
        explanationHi: 'शरीर की स्टैटिक बिजली फोन की नाजुक चिप्स को जला सकती है, इसलिए ईएसडी स्ट्रैप जरूरी है।',
      },
      {
        id: 'q-mob-2',
        type: 'mcq',
        difficulty: 'intermediate',
        questionEn: 'If a smartphone turns on with sound and vibration, but the display remains completely dark, which component is most likely faulty?',
        questionHi: 'यदि स्मार्टफोन चालू होने पर ध्वनि और कंपन करता है लेकिन स्क्रीन बिल्कुल काली रहती है, तो क्या खराब होने की सबसे अधिक संभावना है?',
        optionsEn: ['AMOLED display panel or backlight / display flex cable', 'Main processor SoC', 'Microphone', 'Vibration motor'],
        optionsHi: ['एमोलेड डिस्प्ले पैनल या डिस्प्ले फ्लेक्स केबल', 'मुख्य प्रोसेसर (SoC)', 'माइक्रोफोन', 'वाइब्रेशन मोटर'],
        correctAnswer: 0,
        explanationEn: 'The phone OS and board are working (vibrating and sound), meaning the display panel or its connector flex is damaged.',
        explanationHi: 'फोन बूट हो रहा है और आवाज दे रहा है, इसका अर्थ है कि मदरबोर्ड ठीक है परंतु स्क्रीन या उसका पत्ता खराब है।',
      },
    ],
  },
  {
    id: 'skill-ev-tech',
    category: 'automobile_ev',
    titleEn: 'Electric Vehicles (EV) Technology & Powertrain Engineering',
    titleHi: 'इलेक्ट्रिक वाहन (EV) तकनीक: पावरट्रेन, बैटरी पैक एवं डायग्नोस्टिक्स',
    taglineEn: 'Master high-voltage battery architecture, electric traction motors, regenerative braking and charging protocols.',
    taglineHi: 'ईवी बैटरी मैनेजमेंट सिस्टम (BMS), मोटर कंट्रोलर, चार्जर और सुरक्षा सीखें।',
    level: 'Beginner to Pro',
    descriptionEn: 'Comprehensive engineering coverage of 2-wheel and 4-wheel electric vehicles: 400V-800V skateboard architecture, DC fast charging (CCS2/CHAdeMO), inverter switching using SiC MOSFETs, motor torque curves, and workshop high-voltage safety.',
    descriptionHi: 'दोपहिया और चारपहिया इलेक्ट्रिक वाहनों की संपूर्ण तकनीकी शिक्षा: हाई वोल्टेज आर्किटेक्चर, डीसी फास्ट चार्जिंग, मोटर टॉर्क और वर्कशॉप सुरक्षा।',
    imageUrl: '/src/assets/images/diagram_ev_car_powertrain_1793979148606.jpg',
    videoDuration: '49:15',
    practicalDemonstrationEn: 'High-voltage interlock loop (HVIL) verification, insulated Class 0 1000V glove inspection, and battery module balancing test.',
    practicalDemonstrationHi: 'हाई-वोल्टेज सुरक्षा लूप की जांच, 1000V इंसुलेटेड दस्तानों का उपयोग और बैटरी सेल वोल्टेज संतुलन।',
    careerOpportunitiesEn: [
      'EV Powertrain Diagnostic Specialist (ईवी पावरट्रेन तकनीशियन)',
      'High-Voltage Battery Pack Technician (बैटरी पैक इंजीनियर)',
      'EV Charging Station Installation Engineer (चार्जिंग स्टेशन इंजीनियर)',
      'Automotive EV Conversion Specialist (ईवी रूपांतरण विशेषज्ञ)',
    ],
    careerOpportunitiesHi: [
      'ईवी पावरट्रेन डायग्नोस्टिक तकनीशियन',
      'हाई-वोल्टेज बैटरी पैक इंजीनियर',
      'ईवी चार्जिंग स्टेशन तकनीशियन',
      'इलेक्ट्रिक वाहन रूपांतरण विशेषज्ञ',
    ],
    components: [
      {
        id: 'comp-bms',
        nameEn: 'Battery Management System (BMS)',
        nameHi: 'बैटरी मैनेजमेंट सिस्टम (BMS)',
        imageUrl: '/src/assets/images/diagram_ev_car_powertrain_1793979148606.jpg',
        functionEn: 'Monitors individual cell voltages, temperature sensors, state of charge (SoC), and balances cells during charging.',
        functionHi: 'प्रत्येक बैटरी सेल के वोल्टेज और तापमान पर नजर रखता है तथा ओवरचार्जिंग से बचाता है।',
        workingPrincipleEn: 'Microcontroller reads ADC voltage sensors on every parallel cell string and activates bypass bleed resistors for balancing.',
        workingPrincipleHi: 'माइक्रोकंट्रोलर हर सेल के वोल्टेज को मापकर ज्यादा चार्ज वाले सेल को संतुलित करता है।',
        locationEn: 'Mounted directly on or inside the sealed high-voltage traction battery enclosure.',
        locationHi: 'बैटरी पैक के सीलबंद बॉक्स के अंदर स्थित होता है।',
        connectionEn: 'Communicates with vehicle ECU via robust automotive CAN bus protocol.',
        connectionHi: 'कैन बस (CAN Bus) वायर के द्वारा गाड़ी के मुख्य कंप्यूटर से जुड़ा होता है।',
        safetyTipsEn: 'Always disconnect low-voltage 12V auxiliary power and wait 5 minutes for discharge before touching BMS leads.',
        safetyTipsHi: 'बीएमएस को छूने से पहले 12V सहायक बैटरी का कनेक्शन हटाएं और 5 मिनट डिस्चार्ज होने दें।',
      },
    ],
    questions: [
      {
        id: 'q-ev-1',
        type: 'mcq',
        difficulty: 'beginner',
        questionEn: 'What does Regenerative Braking do in an Electric Vehicle?',
        questionHi: 'इलेक्ट्रिक वाहन में रिजनरेटिव ब्रेकिंग (Regenerative Braking) का क्या कार्य है?',
        optionsEn: [
          'Converts kinetic energy of the moving vehicle back into electrical energy to charge the battery',
          'Sprays coolant water on the disc brakes',
          'Disconnects the steering wheel for safety',
          'Burns fuel to stop the wheels faster',
        ],
        optionsHi: [
          'गाड़ी की गतिज ऊर्जा को वापस विद्युत ऊर्जा में बदलकर बैटरी को चार्ज करता है',
          'ब्रेक डिस्क पर ठंडा पानी छिड़कता है',
          'सुरक्षा के लिए स्टीयरिंग को अलग कर देता है',
          'पहियों को रोकने के लिए पेट्रोल जलाता है',
        ],
        correctAnswer: 0,
        explanationEn: 'When braking, the electric motor acts as a generator, creating opposing magnetic drag that slows the car while recharging the battery.',
        explanationHi: 'ब्रेक लगाने पर मोटर एक जनरेटर की तरह काम करती है, जिससे गाड़ी धीमी भी होती है और बैटरी में करंट भी भरता है।',
      },
    ],
  },
];
