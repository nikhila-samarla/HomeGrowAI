import { useState } from "react";
import Welcome from "./Welcome";
import About from "./About";
import "./App.css";
const API_URL = import.meta.env.VITE_API_URL || "http://localhost:3001";
function App() {
  const [currentPage, setCurrentPage] = useState("welcome");
  const [language, setLanguage] = useState("English");
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
if (currentPage === "welcome") {
  return <Welcome onEnter={() => setCurrentPage("about")} />;
}

if (currentPage === "about") {
  return <About onEnter={() => setCurrentPage("chat")} />;
}
  
  const startVoice = async () => {
  const SpeechRecognition =
    window.SpeechRecognition || window.webkitSpeechRecognition;

  if (!SpeechRecognition) {
    alert("Voice recognition is not supported in this browser. Please try Chrome.");
    return;
  }

  window.speechSynthesis.cancel();
  setQuestion("");
  setAnswer("");

  try {
    await navigator.mediaDevices.getUserMedia({ audio: true })
      .then((stream) => stream.getTracks().forEach((track) => track.stop()));

    const recognition = new SpeechRecognition();
    recognition.lang = language === "English" ? "en-IN" : "te-IN";
    recognition.continuous = false;
    recognition.interimResults = true;
    recognition.maxAlternatives = 1;

    let finalText = "";
    let submitted = false;

    recognition.onresult = (event) => {
      let text = "";

      for (let i = 0; i < event.results.length; i++) {
        text += event.results[i][0].transcript;
      }

      setQuestion(text.trim());
      console.log("Recognized speech:", text.trim());
      if (event.results[event.results.length - 1].isFinal) {
        finalText = text.trim();
      }
    };

    recognition.onerror = (event) => {
      console.error("Voice error:", event.error);
      alert("Voice error: " + event.error);

      if (event.error === "not-allowed") {
        alert("Please allow microphone access for HomeGrowAI.");
      } else if (event.error !== "no-speech" && event.error !== "aborted") {
        console.error("Voice recognition failed:", event.error);
      }
    };

     recognition.onend = () => {
  if (finalText && !submitted) {
    submitted = true;

    setQuestion(finalText);

    handleAsk(finalText);
  }
};

    recognition.start();
  } catch (error) {
    console.error("Microphone error:", error);
    alert("Please allow microphone access for HomeGrowAI.");
  }
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
    setAnswer("");
    setQuestion("");
    setLanguage((previousLanguage) =>
      previousLanguage === "English" ? "Telugu" : "English"
    );
  }}
>
  {language}
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
  <h3>AI Gardening</h3>
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

<section className="contact-section">
  <h2>Contact Us</h2>
  <p>Have questions or suggestions about HomeGrowAI?</p>
  <p>We would love to hear from you!</p>
  <p>📞 Contact Number: +91 2346579801</p>
  <p>✉️ Email: homegrowai@gmail.com</p>
</section>

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