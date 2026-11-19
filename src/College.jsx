import "./College.css";

const highlights = [
  { icon: "🏫", title: "Lush Green", subtitle: "Green Campus" },
  { icon: "📚", title: "UG & PG", subtitle: "Programs Offered" },
  { icon: "🤝", title: "MoU", subtitle: "Industry Collaborations" },
  { icon: "🌐", title: "100 Mbps", subtitle: "Campus Wi-Fi" },
];

const facilities = [
  "Spacious infrastructure for seminars, conferences and workshops",
  "Regular classroom seminars, group discussions and quizzes",
  "Department association activities and professional activities",
  "Industry-oriented teaching and learning process",
  "Learning and extracurricular activities",
  "Technology forums and hobby clubs",
  "Counselling for professional and personal development",
  "Educational tours and classroom learning activities",
];

function College() {
  return (
    <div className="college-page">

      <section className="college-hero">
        <div className="college-hero-content">
          <span className="college-tag">🏛 ABOUT THE INSTITUTION</span>
          <h1>
            Ramachandra
            <span> College of Engineering</span>
          </h1>
          <p>
            A leading engineering institution committed to
            education, innovation and shaping future engineers
            who make a positive impact on society.
          </p>
          <div className="college-tags">
            <span>📍 Eluru, Andhra Pradesh</span>
            <span>🏛 Autonomous Institution</span>
            <span>🎓 JNTU Kakinada Affiliated</span>
          </div>
        </div>
      </section>

      <section className="college-highlights">
        {highlights.map((item, index) => (
          <div className="highlight-item" key={index}>
            <span>{item.icon}</span>
            <h2>{item.title}</h2>
            <p>{item.subtitle}</p>
          </div>
        ))}
      </section>

      <div className="college-layout">

        <main className="college-main">

          <section className="college-section" id="institution">
            <h2>🏛 About the Institution</h2>
            <img
              className="campus-photo"
              src="/college-campus.jpg"
              alt="Ramachandra College of Engineering campus"
            />
            <p>
              Ramachandra College of Engineering (RCE) is located
              in Eluru, Andhra Pradesh. The institution focuses on
              providing quality engineering education and creating
              opportunities for students to develop their knowledge,
              skills and confidence.
            </p>
            <p>
              The college aims to encourage academic learning,
              practical experience, innovation and overall student
              development.
            </p>
            <div className="college-info-banner">
              <span>🏫</span>
              <div>
                <h3>Autonomous Institution</h3>
                <p>
                  An educational environment that encourages
                  learning, technical development and innovation.
                </p>
              </div>
            </div>
          </section>

          <section className="college-section" id="academic">
            <h2>🎓 Academic Excellence</h2>
            <p>
              The college provides undergraduate and postgraduate
              engineering programs. Students are encouraged to
              strengthen their technical knowledge through
              classroom learning, practical activities and projects.
            </p>
            <blockquote>
              Learning, innovation and practical experience help
              students prepare for their future careers.
            </blockquote>
            <p>
              Faculty guidance, academic activities and teamwork
              support students in their educational journey.
            </p>
          </section>

          <section className="college-section" id="achievements">
            <h2>🏆 Student Achievements & Support</h2>
            <p>
              Students are encouraged to participate in technical
              events, seminars, workshops, competitions and
              extracurricular activities.
            </p>
            <div className="college-mini-grid">
              <div>💡 Technical activities</div>
              <div>👩‍💻 Student projects</div>
              <div>🎤 Seminars and workshops</div>
              <div>🤝 Teamwork and collaboration</div>
            </div>
          </section>

          <section className="college-section" id="facilities">
            <h2>🏫 Infrastructure & Facilities</h2>
            <p>
              The campus provides facilities and learning spaces
              that support academic activities and student
              development.
            </p>
            <div className="facility-grid">
              {facilities.map((facility, index) => (
                <div className="facility-item" key={index}>
                  <span>☑️</span>
                  {facility}
                </div>
              ))}
            </div>
          </section>

          <section className="college-csp">
            <span>🌱</span>
            <h2>Our Community Service Project</h2>
            <h3>HomeGrowAI – Your AI-powered Home Gardening Assistant</h3>
            <p>
              As part of our Community Service Project, we developed
              HomeGrowAI to encourage traditional home gardening.
              The project helps families explore ways to grow
              vegetables, fruits and useful plants in available
              spaces at home.
            </p>
            <p>
              Through this initiative, we aim to promote healthy
              living, environmental awareness and the productive
              use of natural resources.
            </p>
            <strong>🌿 Grow Green, Live Green!</strong>
          </section>

        </main>

        <aside className="college-sidebar">
          <div className="sidebar-card">
            <h3>🏛 College at a Glance</h3>
            <small>INSTITUTION</small>
            <p>Ramachandra College of Engineering (RCE)</p>

            <small>LOCATION</small>
            <p>Eluru, Andhra Pradesh</p>

            <small>FOUNDED BY</small>
            <p>Narayana Educational Institutions</p>

            <small>MANAGED BY</small>
            <p>Genie Driven Educational Society</p>

            <small>AFFILIATION</small>
            <p>JNTU Kakinada</p>

            <small>TYPE</small>
            <p>Private Engineering College</p>

            <small>PROGRAMS</small>
            <p>UG & PG Engineering Programs</p>
          </div>

          <div className="sidebar-project">
            <h3>🌱 CSP Village Project</h3>
            <p>
              Our Community Service Project promotes traditional
              home gardening and environmental awareness in
              Suryaraopeta village.
            </p>
            <span>HomeGrowAI 🌿</span>
          </div>

          <div className="sidebar-card page-links">
            <h3>📋 On This Page</h3>
            <a href="#institution">🏛 About the Institution</a>
            <a href="#academic">🎓 Academic Excellence</a>
            <a href="#achievements">🏆 Student Achievements</a>
            <a href="#facilities">🏫 Infrastructure & Facilities</a>
          </div>
        </aside>

      </div>
    </div>
  );
}

export default College;