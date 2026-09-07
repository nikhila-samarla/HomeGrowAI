import { useState } from "react";
import "./App.css";
const API_URL = import.meta.env.VITE_API_URL || "http://localhost:3001";
function App() {
  const [language, setLanguage] = useState("English");
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const startVoice = () => {
  const SpeechRecognition =
    window.SpeechRecognition || window.webkitSpeechRecognition;

  if (!SpeechRecognition) {
    alert("Voice recognition is not supported in this browser.");
    return;
  }

  const recognition = new SpeechRecognition();

  recognition.lang = language === "English" ? "en-IN" : "te-IN";
  recognition.continuous = false;
  recognition.interimResults = false;

  recognition.onresult = (event) => {
    const spokenText = event.results[0][0].transcript;
    setQuestion(spokenText);
  };
  recognition.onend = () => {                                                                                                                                                                                                                                          

    setTimeout(() => {
      document.querySelector(".ask-btn")?.click();
    }, 500);
  };

  recognition.onerror = (event) => {
    console.error("Voice error:", event.error);
  };

  recognition.start();
};

  const title = "HomeGrowAI"
      

  const subtitle = "Your AI-powered home gardening assistant";

  const placeholder =
    language === "English"
      ? "Ask anything about gardening..."
      : "తోట గురించి ఏదైనా అడగండి...";

  const askText =
    language === "English"
      ? "Ask HomeGrowAI"
      : "HomeGrowAI ని అడగండి";

  return (
    <div className="app">
      <header className="navbar">
        <div className="logo">
          🌱 <span>HomeGrowAI</span>
        </div>

        <button
          className="language-btn"
          onClick={() => {
            window.speechSynthesis.cancel();
            setLanguage(language === "English" ? "Telugu" : "English")
          } }
        >
          {language === "English" ? "English" : "తెలుగు"}
        </button>
      </header>

      <main className="hero">
        <div className="plant-icon">🌿</div>

        <h1>{title}</h1>

        <p className="subtitle">{subtitle}</p>

        <div className="chat-card">
          <h2>{askText}</h2>

          <p>
            {language === "English"
              ? "Get simple and practical advice for growing plants at home."
              : "ఇంట్లో మొక్కలను పెంచడానికి సులభమైన మరియు ఉపయోగకరమైన సలహాలను పొందండి."}
          </p>

          <textarea
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            placeholder={placeholder}
          />
          {answer && (
  <div className="answer-box">
    <h3>
      {language === "English" ? "🌱 HomeGrowAI Answer" : "🌱 HomeGrowAI సమాధానం"}
    </h3>
    <p>{answer}</p>
  </div>
)}

          <div className="button-row">
            <button
             className="voice-btn"
              onClick={startVoice}
            >
              🎤 {language === "English" ? "Voice" : "వాయిస్"}
            </button>

            <button
              className="ask-btn"
              onClick={async () => {
  if (!question.trim()) {
    alert(
      language === "English"
        ? "Please enter a gardening question."
        : "దయచేసి తోటకు సంబంధించిన ప్రశ్నను నమోదు చేయండి."
    );
    return;
  }

  try {
    const response = await fetch(`${API_URL}/api/ask`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        question: question,
        language: language,
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.answer || "AI request failed");
    }

    const cleanAnswer = data.answer
  .replace(/<br\s*\/?>/gi, "\n")
  .replace(/\*\*/g, "")
  .replace(/#{1,6}\s?/g, "")
  .replace(/^[-|]+\s*/gm, "")
  .replace(/\|/g, "")
  .trim();

setAnswer(cleanAnswer);

const speech = new SpeechSynthesisUtterance(cleanAnswer);
speech.lang = language === "English" ? "en-IN" : "te-IN";
if (language === "Telugu") {
  const teluguVoice = window.speechSynthesis
    .getVoices()
    .find((voice) => voice.lang.toLowerCase().startsWith("te"));

  if (teluguVoice) {
    speech.voice = teluguVoice;
  }
}
speech.rate = 0.9;
speech.pitch = 1;
window.speechSynthesis.cancel();
window.speechSynthesis.speak(speech);
  } catch (error) {
    console.error("FRONTEND ERROR:", error);

    alert(error.message);
  }
}}
            >
              🌱 {language === "English" ? "Ask" : "అడగండి"}
            </button>
          </div>
        </div>

        <div className="features">
          <div className="feature">
  <span>🤖</span>
  <h3>{language === "English" ? "AI Gardening" : "AI తోటపని"}</h3>
  <p>
    {language === "English"
      ? "Ask open-ended gardening questions."
      : "తోటపనికి సంబంధించిన ఏ ప్రశ్ననైనా అడగండి."}
  </p>
</div>

<div className="feature">
  <span>🌱</span>
  <h3>{language === "English" ? "Plant Care" : "మొక్కల సంరక్షణ"}</h3>
  <p>
    {language === "English"
      ? "Get guidance for healthy plants."
      : "ఆరోగ్యకరమైన మొక్కల కోసం మార్గదర్శకత్వం పొందండి."}
  </p>
</div>

<div className="feature">
  <span>🎤</span>
  <h3>{language === "English" ? "Voice Support" : "వాయిస్ సహాయం"}</h3>
  <p>
    {language === "English"
      ? "Ask questions using your voice."
      : "మీ వాయిస్‌తో ప్రశ్నలను అడగండి."}
  </p>
</div>
        </div>
      </main>

      <footer>
        <p>
  🌿 {language === "English"
    ? "HomeGrowAI • Smart Gardening for Everyone"
    : "HomeGrowAI • అందరికీ స్మార్ట్ తోటపని"}
</p>
      </footer>
    </div>
  );
}

export default App;