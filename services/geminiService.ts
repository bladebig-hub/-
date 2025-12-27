import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const generateCheckInMessage = async (merchantName: string, checkInCount: number): Promise<string> => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `为用户在"${merchantName}"的第${checkInCount}次打卡生成一段简短、有趣、充满活力的中文祝贺语（最多20字）。
      语境是"工体·燃冬冰雪嘉年华"活动。
      语气应该兴奋、游戏化，让人感到惊喜。
      只返回纯文本内容。`,
    });
    return response.text?.trim() || `太棒了！你已成功在 ${merchantName} 完成打卡！`;
  } catch (error) {
    console.error("Gemini API Error:", error);
    return `欢迎来到 ${merchantName}！打卡成功。`;
  }
};

export const generateLuckyFortune = async (): Promise<string> => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `为刚刚赢得优惠券的用户生成一句简短的中文好运签文（类似幸运饼干，最多10字）。富有冬日、温暖或好运的意象。`,
    });
    return response.text?.trim() || "好运与你同在！";
  } catch (error) {
    return "祝你今天好运爆棚！";
  }
};