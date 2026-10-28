import "./Welcome.css";

function Welcome({ onEnter }) {
  return (
    <div className="welcome-page">
      <nav className="welcome-nav">
        <h2>🌱 HomeGrowAI</h2>
        <span>Grow Green, Live Green</span>
      </nav>

      <main className="welcome-content">
        <div className="welcome-icon">🌿</div>

        <p className="welcome-label">WELCOME TO OUR PROJECT</p>

        <h1>
          Grow Your Own
          <br />
          <span>Green Paradise</span>
        </h1>

        <p className="welcome-description">
          Discover the joy of home gardening with HomeGrowAI.
          Get helpful plant care guidance, explore gardening,
          and take your first step towards a greener home.
        </p>

        <button className="enter-button" onClick={() => onEnter("about")}>
          Enter Project <span>→</span>
        </button>

        <p className="welcome-footer">
          Smart Gardening • Healthy Living • Greener Future
        </p>
      </main>
    </div>
  );
}

export default Welcome;