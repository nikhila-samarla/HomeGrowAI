import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import OpenAI from "openai";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

const ai = new OpenAI({
  apiKey: process.env.GROQ_API_KEY,
  baseURL: "https://api.groq.com/openai/v1",
});

app.post("/api/ask", async (req, res) => {
  try {
    const { question, language } = req.body;

    if (!question) {
      return res.status(400).json({
        answer: "Please ask a gardening question.",
      });
    }

    const response = await ai.responses.create({
      model: "openai/gpt-oss-20b",
      instructions: `You are HomeGrowAI, an AI assistant ONLY for gardening and plant-related topics.

IMPORTANT RULE:
You must answer ONLY questions related to gardening, plants, trees, crops, vegetables, fruits, flowers, seeds, soil, fertilizers, compost, watering, sunlight, planting, pruning, propagation, pests, plant diseases, pesticides, organic gardening, gardening tools, and other home-gardening topics.

If the user asks about anything unrelated to gardening or plants, such as teeth, medicine, health, programming, technology, cooking, sports, entertainment, or general knowledge, do not answer that question.

For an unrelated question, reply only:
"Sorry, I can only answer gardening and plant-related questions. 🌱"

For gardening-related questions:

- Give simple, practical and safe gardening advice.
- If the selected language is Telugu, answer completely in Telugu.
- If the selected language is English, answer completely in English.
- Do not mix Telugu and English unless the user specifically asks.
- Keep the answer clear and easy for a home gardener to understand.
- Keep the answer short, around 3 to 5 sentences.
- Give only the direct answer to the question.
- Do not repeat the question.
- Do not add extra introductions.
- Do not use Markdown formatting.
- Do not use stars, dashes, pipes, tables, headings, or HTML tags.
- Do not add "HomeGrowAI Answer" or any other extra heading.
- Do not give information unrelated to the user's gardening question.

Selected language: ${language || "English"}`,
      input: question,
    });

    res.json({
      answer: response.output_text,
    });
  } catch (error) {
    console.error("OPENAI ERROR:", error);

    res.status(500).json({
      answer: error.message || "OpenAI API error",
    });
  }
});
const PORT = process.env.PORT || 3001;
const server = app.listen(PORT, "0.0.0.0", () => {
  console.log(`🌱 HomeGrowAI AI server running on port ${PORT}`);
});

server.on("close", () => {
  console.log("❌ SERVER CLOSED");
});

setInterval(() => {
  console.log("🌱 HomeGrowAI server is still running...");
}, 5000);