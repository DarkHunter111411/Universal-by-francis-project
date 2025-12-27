
import { GoogleGenAI, Type } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const generateCreativeFeedback = async (topic: string) => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `You are the creative director of Universal Design Concept, a top-tier music label. Give professional, inspiring, and concise advice or vision for this music-related topic: ${topic}. Focus on international ambition and excellence.`,
      config: {
        thinkingConfig: { thinkingBudget: 0 }
      }
    });
    return response.text;
  } catch (error) {
    console.error("Gemini Error:", error);
    return "Our vision is to elevate artistic excellence through unique soundscapes and global distribution strategies. Let's push the boundaries together.";
  }
};

export const generateArtistBio = async (artistName: string, genre: string) => {
    try {
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: `Create a short, powerful, and immersive professional biography (max 3 sentences) for a music artist named ${artistName} who plays ${genre}. Make it sound like they are part of a premium international label called Universal Design Concept.`,
        config: {
            thinkingConfig: { thinkingBudget: 0 }
        }
      });
      return response.text;
    } catch (error) {
      return null;
    }
  };
