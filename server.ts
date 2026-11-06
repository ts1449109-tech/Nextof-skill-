import express from 'express';
import { createServer as createViteServer } from 'vite';
import path from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';
import { GoogleGenAI } from '@google/genai';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT ? parseInt(process.env.PORT, 10) : 3000;

app.use(express.json({ limit: '10mb' }));

// Server-side Gemini API client (safe initialization)
let aiClient: GoogleGenAI | null = null;
if (process.env.GEMINI_API_KEY) {
  aiClient = new GoogleGenAI({
    apiKey: process.env.GEMINI_API_KEY,
    httpOptions: {
      headers: {
        'User-Agent': 'aistudio-build',
      },
    },
  });
}

// AI Teacher & Classroom explanation endpoint
app.post('/api/ai/teacher', async (req, res) => {
  try {
    const { topic, subject, grade, language, studentQuestion, mode } = req.body;

    if (!aiClient) {
      // High-quality pedagogical fallback when API key is pending
      const isHindi = language === 'hi';
      const fallbackResponse = isHindi
        ? `नमस्ते! मैं आपका NEXTOF AI Teacher हूँ। तरुन सर के विज़न के अनुसार, आज हम '${topic || subject}' को बिल्कुल आसान और व्यावहारिक तरीके से समझेंगे। 

मुख्य सिद्धांत:
1. हर कॉन्सेप्ट को असल दुनिया के उदाहरण से जोड़ें।
2. फ़ॉर्मूला और पार्ट्स को चरणबद्ध याद रखें।
3. कोई भी डाउट हो तो मुझसे तुरंत पूछें!`
        : `Welcome to NEXTOF AI Classroom! Following Tarun Sir's vision, today we are breaking down '${topic || subject}' step-by-step with practical clarity.

Key Takeaways:
1. Every principle connects directly to real-world applications.
2. Follow step-by-step formulas and component diagrams.
3. Feel free to ask any question anytime!`;

      return res.json({
        success: true,
        teachingText: fallbackResponse,
        boardItems: [
          `Topic: ${topic || 'Key Principles'}`,
          `Formula / Concept: V = I × R or E = mc²`,
          `Practical Rule: Always inspect connections first`,
        ],
        teacherPrompt: 'What part would you like me to demonstrate next?',
      });
    }

    const systemPrompt = `You are the master AI Teacher on NEXTOF, a global education and skill platform founded by Tarun Sir.
Your mission: Teach with extreme patience, clarity, encouragement, and practical mastery.
Target: Grade/Category ${grade || 'General'}, Subject: ${subject || 'Science/Skills'}.
Language requested: ${language === 'hi' ? 'Hindi (or Hinglish if natural)' : 'English (with clear simple terms)'}.
Mode: ${mode || 'classroom'}.
Keep your explanation structured:
1. Easy-to-understand analogy / real-world context
2. Step-by-step technical or conceptual theory
3. Board notes (formulas, steps, components)
4. A quick check question to see if the student understood.
Formatting: Plain text with clean formatting. Do not use markdown headers with ### everywhere.`;

    const userPrompt = studentQuestion
      ? `Student asks: "${studentQuestion}" on topic "${topic}". Explain clearly and kindly.`
      : `Teach the topic: "${topic}" in subject "${subject}". Break it down into clear, engaging classroom steps.`;

    const response = await aiClient.models.generateContent({
      model: 'gemini-3.8-flash',
      contents: userPrompt,
      config: {
        systemInstruction: systemPrompt,
      },
    });

    const teachingText = response.text || 'Explanation generated successfully.';

    res.json({
      success: true,
      teachingText,
      boardItems: [
        `Topic: ${topic}`,
        `Core Principle: Step-by-step mastery`,
        `Founder: Tarun Sir's NEXTOF Mission`,
      ],
      teacherPrompt: 'Does this make sense? You can ask any follow-up question!',
    });
  } catch (error: any) {
    console.error('AI Teacher error:', error?.message || error);
    res.status(500).json({
      success: false,
      error: 'AI Teacher encountered a temporary issue. Please try again.',
      details: error?.message,
    });
  }
});

// AI Quick Doubt Solver endpoint
app.post('/api/ai/ask', async (req, res) => {
  try {
    const { question, language, context } = req.body;
    if (!question) {
      return res.status(400).json({ error: 'Question is required' });
    }

    if (!aiClient) {
      return res.json({
        answer: language === 'hi'
          ? `आपके प्रश्न: "${question}" का उत्तर: NEXTOF पर हम हर सवाल को बहुत बुनियादी स्तर से समझाते हैं। कृपया इस कॉन्सेप्ट के डायग्राम और नोट्स भी देखें!`
          : `For your question: "${question}": On NEXTOF, every concept is broken down into simple, memorable principles. Be sure to check the interactive diagram and revision notes!`,
      });
    }

    const response = await aiClient.models.generateContent({
      model: 'gemini-3.8-flash',
      contents: `Student Question: ${question}\nContext: ${context || 'General Study'}\nAnswer simply, encouragingly, and accurately in ${language === 'hi' ? 'Hindi' : 'English'}. Include a real-world tip.`,
    });

    res.json({
      answer: response.text || 'Answer generated.',
    });
  } catch (err: any) {
    res.status(500).json({ error: err.message });
  }
});

// App Info & Health Check
app.get('/api/health', (req, res) => {
  res.json({
    status: 'ok',
    platform: 'NEXTOF - Global AI Education & Skill Development',
    founder: 'Tarun Sir',
    version: '1.0.0',
    hasGemini: !!aiClient,
  });
});

async function startServer() {
  const isProd = process.env.NODE_ENV === 'production';

  if (!isProd) {
    // Mount Vite dev server in middleware mode
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    // Production static serving
    const distPath = path.resolve(__dirname, 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.resolve(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`🚀 NEXTOF Server running on http://0.0.0.0:${PORT}`);
  });
}

startServer();
