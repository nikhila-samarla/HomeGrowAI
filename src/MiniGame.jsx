import { useState } from "react";
import "./MiniGame.css";

const questions = [
  {
    question: "Which part of a plant absorbs water?",
    options: ["Leaves", "Roots", "Flowers", "Fruits"],
    answer: "Roots",
  },
  {
    question: "Which natural material is used to make compost?",
    options: ["Plastic", "Glass", "Dry leaves", "Metal"],
    answer: "Dry leaves",
  },
  {
    question: "When is a good time to water plants?",
    options: ["Morning", "Midnight", "Afternoon heat", "Never"],
    answer: "Morning",
  },
  {
    question: "Which plant is commonly grown in kitchen gardens?",
    options: ["Curry leaves", "Pine tree", "Cactus only", "Bamboo"],
    answer: "Curry leaves",
  },
  {
    question: "Which helps protect plants naturally from some pests?",
    options: ["Neem", "Plastic", "Paint", "Salt"],
    answer: "Neem",
  },
];

function MiniGame() {
  const [game, setGame] = useState("menu");
  const [questionIndex, setQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [selected, setSelected] = useState("");
  const [showResult, setShowResult] = useState(false);
  const [plantGuess, setPlantGuess] = useState("");

  const currentQuestion = questions[questionIndex];

  const chooseAnswer = (option) => {
    if (showResult) return;

    setSelected(option);
    setShowResult(true);

    if (option === currentQuestion.answer) {
      setScore((previous) => previous + 1);
    }
  };

  const nextQuestion = () => {
    if (questionIndex === questions.length - 1) {
      setGame("result");
    } else {
      setQuestionIndex((previous) => previous + 1);
      setSelected("");
      setShowResult(false);
    }
  };

  const restart = () => {
    setGame("menu");
    setQuestionIndex(0);
    setScore(0);
    setSelected("");
    setShowResult(false);
    setPlantGuess("");
  };

  return (
    <section className="mini-game-page" id="games-section">
      <header className="game-heading">
        <p>LEARN • PLAY • GROW</p>
        <h1>🌱 HomeGrowAI Mini Games</h1>
        <p>
          Test your gardening knowledge and have fun
          while learning how to care for plants!
        </p>
      </header>

      {game === "menu" && (
        <div className="game-menu">
          <div className="game-option">
            <span>🧠</span>
            <h2>Gardening Quiz</h2>
            <p>Answer five questions about plants and gardening.</p>
            <button onClick={() => setGame("quiz")}>
              Play Quiz
            </button>
          </div>

          <div className="game-option">
            <span>🌿</span>
            <h2>Guess the Plant</h2>
            <p>Look at the clue and identify the plant.</p>
            <button onClick={() => setGame("plant")}>
              Play Game
            </button>
          </div>
        </div>
      )}

      {game === "quiz" && (
        <div className="game-card">
          <p className="game-count">
            Question {questionIndex + 1} of {questions.length}
          </p>

          <div className="game-progress">
            <div
              style={{
                width: `${((questionIndex + 1) / questions.length) * 100}%`,
              }}
            />
          </div>

          <h2>{currentQuestion.question}</h2>

          <div className="quiz-options">
            {currentQuestion.options.map((option) => (
              <button
                key={option}
                className={
                  showResult && option === currentQuestion.answer
                    ? "correct"
                    : showResult && option === selected
                    ? "incorrect"
                    : ""
                }
                onClick={() => chooseAnswer(option)}
                disabled={showResult}
              >
                {option}
              </button>
            ))}
          </div>

          {showResult && (
            <p className="game-feedback">
              {selected === currentQuestion.answer
                ? "🎉 Correct! Well done!"
                : `Not quite! The correct answer is ${currentQuestion.answer}.`}
            </p>
          )}

          {showResult && (
            <button className="game-main-button" onClick={nextQuestion}>
              {questionIndex === questions.length - 1
                ? "See My Score"
                : "Next Question"}
            </button>
          )}
        </div>
      )}

      {game === "result" && (
        <div className="game-card game-result">
          <span>🏆</span>
          <h2>Quiz Completed!</h2>
          <h1>{score} / {questions.length}</h1>
          <p>
            {score === 5
              ? "Excellent! You are a gardening expert!"
              : "Good effort! Keep learning and growing!"}
          </p>
          <button className="game-main-button" onClick={restart}>
            Play Again
          </button>
        </div>
      )}

      {game === "plant" && (
        <div className="game-card plant-game">
          <span>🌿</span>
          <h2>Guess the Plant!</h2>
          <p>
            I have green leaves and am commonly used in
            Indian cooking. I add a special aroma to food.
            Which plant am I?
          </p>

          <div className="quiz-options">
            {["Rose", "Curry Leaves", "Sunflower", "Lotus"].map(
              (plant) => (
                <button
                  key={plant}
                  className={plantGuess === plant ? "selected" : ""}
                  onClick={() => setPlantGuess(plant)}
                  disabled={!!plantGuess}
                >
                  {plant}
                </button>
              )
            )}
          </div>

          {plantGuess && (
            <p className="game-feedback">
              {plantGuess === "Curry Leaves"
                ? "🎉 Correct! Curry leaves are commonly used in Indian cooking."
                : "🌱 Good try! The correct answer is Curry Leaves."}
            </p>
          )}

          <button className="game-main-button" onClick={restart}>
            Back to Games
          </button>
        </div>
      )}
    </section>
  );
}

export default MiniGame;