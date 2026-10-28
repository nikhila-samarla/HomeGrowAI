function About({ onEnter }) {
  const features = [
    {
      icon: "🌱",
      title: "Why HomeGrowAI?",
      text: "We created HomeGrowAI to make home gardening easier and help people care for plants with confidence."
    },
    {
      icon: "🤖",
      title: "AI-Powered Guidance",
      text: "Ask gardening questions and get helpful guidance about watering, sunlight, soil, fertilizers, pests and plant diseases."
    },
    {
      icon: "🌿",
      title: "Our Purpose",
      text: "We want to encourage people to grow plants at home and create greener, healthier living spaces."
    },
    {
      icon: "🌏",
      title: "English & Telugu",
      text: "Users can explore gardening guidance in English or Telugu, making plant care easier to understand."
    }
  ];

  return (
    <div style={{
      minHeight: "100vh",
      background: "#f4f7ec",
      color: "#20452b",
      fontFamily: "Arial, sans-serif"
    }}>
      <nav style={{
        padding: "22px 7%",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        background: "#ffffff"
      }}>
        <h2 style={{ margin: 0, color: "#24683b" }}>🌱 HomeGrowAI</h2>
        <span style={{ color: "#55745d", fontSize: "14px" }}>
          Grow Green, Live Green
        </span>
      </nav>

      <header style={{
        padding: "65px 8%",
        textAlign: "center",
        background: "linear-gradient(135deg, #dcefd2, #f4f7ec)"
      }}>
        <p style={{
          color: "#39804a",
          fontWeight: "bold",
          letterSpacing: "3px",
          fontSize: "13px"
        }}>
          ABOUT OUR PROJECT
        </p>

        <h1 style={{
          fontSize: "clamp(36px, 6vw, 60px)",
          margin: "15px 0",
          color: "#194b2b"
        }}>
          Growing a Greener <span style={{ color: "#3b8b4a" }}>Tomorrow</span>
        </h1>

        <p style={{
          maxWidth: "720px",
          margin: "0 auto",
          lineHeight: 1.9,
          color: "#4d6953",
          fontSize: "17px"
        }}>
          HomeGrowAI is your AI-powered home gardening companion.
          Learn how to grow and care for plants with simple guidance
          in English and Telugu.
        </p>
      </header>

      <main style={{
        maxWidth: "1150px",
        margin: "0 auto",
        padding: "45px 22px"
      }}>
        <section style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
          gap: "28px",
          alignItems: "center",
          marginBottom: "55px"
        }}>
          <img
            src="https://images.unsplash.com/photo-1416879595882-3373a0480b5b?auto=format&fit=crop&w=1000&q=85"
            alt="Green plants growing in a home garden"
            style={{
              width: "100%",
              height: "330px",
              objectFit: "cover",
              borderRadius: "22px",
              boxShadow: "0 12px 30px #244d2c20"
            }}
          />

          <div style={{ padding: "10px" }}>
            <p style={{
              color: "#39804a",
              fontWeight: "bold",
              letterSpacing: "2px"
            }}>
              OUR STORY
            </p>

            <h2 style={{ fontSize: "32px", color: "#194b2b" }}>
              A little help can grow something beautiful.
            </h2>

            <p style={{ lineHeight: 1.9, color: "#506a55" }}>
              Many people want to grow plants at home but may not know
              where to begin or how to solve common gardening problems.
              HomeGrowAI was created to make useful gardening knowledge
              easier to access whenever people need it.
            </p>

            <p style={{ lineHeight: 1.9, color: "#506a55" }}>
              By combining artificial intelligence with simple explanations,
              our project helps users take small steps towards greener homes.
            </p>
          </div>
        </section>

        <section style={{ textAlign: "center", marginBottom: "25px" }}>
          <p style={{
            color: "#39804a",
            fontWeight: "bold",
            letterSpacing: "2px"
          }}>
            WHAT MAKES US SPECIAL
          </p>
          <h2 style={{ fontSize: "34px", marginTop: "8px" }}>
            Gardening made simpler
          </h2>
        </section>

        <section style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(225px, 1fr))",
          gap: "20px"
        }}>
          {features.map((feature) => (
            <article key={feature.title} style={{
              background: "#ffffff",
              borderRadius: "20px",
              padding: "25px",
              border: "1px solid #e0eadb",
              boxShadow: "0 8px 25px #244d2c0d"
            }}>
              <div style={{ fontSize: "38px" }}>{feature.icon}</div>
              <h3 style={{ color: "#27673a", marginBottom: "12px" }}>
                {feature.title}
              </h3>
              <p style={{
                lineHeight: 1.8,
                color: "#5a705e",
                fontSize: "14px"
              }}>
                {feature.text}
              </p>
            </article>
          ))}
        </section>

        <section style={{
          marginTop: "45px",
          padding: "35px 25px",
          borderRadius: "22px",
          textAlign: "center",
          color: "#ffffff",
          background: "linear-gradient(135deg, #286a3c, #17452a)"
        }}>
          <h2 style={{ fontSize: "30px" }}>Every plant makes a difference 🌍</h2>
          <button
  onClick={onEnter}
  style={{
    marginTop: "20px",
    padding: "14px 28px",
    border: "none",
    borderRadius: "30px",
    background: "#ffffff",
    color: "#286a3c",
    fontSize: "16px",
    fontWeight: "bold",
    cursor: "pointer"
  }}
>
  Enter HomeGrowAI →
</button>
          <p style={{ lineHeight: 1.8, maxWidth: "650px", margin: "12px auto" }}>
            Our vision is to inspire more people to discover the joy of
            gardening and build a greener future, one plant at a time.
          </p>
        </section>
      </main>

      <footer style={{
        textAlign: "center",
        padding: "25px",
        color: "#55745d",
        fontSize: "13px"
      }}>
        HomeGrowAI • Smart Gardening • Healthy Living • Greener Future
      </footer>
    </div>
  );
}

export default About;