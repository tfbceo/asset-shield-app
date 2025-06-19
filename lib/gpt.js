import { Configuration, OpenAIApi } from "openai";
const configuration = new Configuration({ apiKey: process.env.OPENAI_API_KEY });
const openai = new OpenAIApi(configuration);
export async function evaluateUserProfile(data) {
  const prompt = `You are an expert in consumer finance. Given the data: ${JSON.stringify(data)}, determine if bankruptcy, negotiation, or asset protection is best. Respond with an action plan.`;
  const response = await openai.createChatCompletion({
    model: "gpt-4",
    messages: [{ role: "user", content: prompt }],
  });
  return response.data.choices[0].message.content;
}