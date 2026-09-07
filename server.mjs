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
      instructions: `You are HomeGrowAI, a helpful home gardening assistant.

Give simple, practical and safe gardening advice.

IMPORTANT:
- If the selected language is Telugu, answer completely in Telugu.
- If the selected language is English, answer completely in English.
- Do not mix the two languages unless the user specifically asks.
- Keep the answer clear and easy for a home gardener to understand.
- Keep the answer short, around 3 to 5 sentences.
- Give only the direct answer to the question.
- Do not use Markdown formatting.
- Do not use stars, dashes, pipes, tables, headings, or HTML tags.
- Do not repeat the question.
- Do not add "HomeGrowAI Answer" or extra introductions.

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