import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import FadeIn from "./components/FadeIn";
import ScrollEffects from "./components/ScrollEffects";

export default function Home() {
  return (
    <>
      <ScrollEffects />
      <Navbar />
      <Hero />

      {/* ===== ABOUT ===== */}
      <section id="about" className="about-bg">
        <div className="container">
          <FadeIn>
            <div className="sec-label">About Me</div>
            <h2 className="sec-title">A bit about who I am</h2>
            <div className="divider" />
          </FadeIn>
          <div className="about-grid">
            <FadeIn className="about-text">
              <p>
                I am a <strong>B.Tech Graduate in AI &amp; Data Science </strong>from Poornima College of Engineering, Jaipur (Batch of 2022–2026). I like working across the stack — some days I&apos;m training a Random Forest model and checking precision-recall tradeoffs, other days I&apos;m writing Flask APIs or figuring out why a database migration broke.
              </p>
              <p>
                My internship at <strong>Celebal Technologies</strong> taught me
                that real ML work is mostly about cleaning messy data and picking
                the right evaluation metric. My current role at{" "}
                <strong>Nessco</strong> has pushed me into backend systems, LLM
                APIs, and full ERP modules with actual users.
              </p>
              <p>
                Outside of work, I built <strong>HiveFlow</strong> — a team task
                manager I started for myself and kept expanding until it could
                handle organizations and Kanban boards. I like shipping things
                that solve a real problem, even a small one.
              </p>
              <div style={{ marginTop: "1.5rem" }}>
                <a
                  href="/Tamanna_Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                  style={{ fontSize: ".88rem" }}
                >
                  View Resume ↗
                </a>
              </div>
            </FadeIn>
            <FadeIn>
              <div className="skill-group">
                <div className="skill-cat">Machine Learning</div>
                <div className="pills">
                  <span className="pill">Regression &amp; Classification</span>
                  <span className="pill">Random Forest</span>
                  <span className="pill">SVM</span>
                  <span className="pill">Feature Engineering</span>
                  <span className="pill">Model Evaluation</span>
                </div>
              </div>
              <div className="skill-group">
                <div className="skill-cat">Libraries &amp; Data</div>
                <div className="pills">
                  <span className="pill teal">scikit-learn</span>
                  <span className="pill teal">pandas</span>
                  <span className="pill teal">NumPy</span>
                  <span className="pill teal">Matplotlib</span>
                  <span className="pill teal">OpenCV</span>
                  <span className="pill teal">Seaborn</span>
                </div>
              </div>
              <div className="skill-group">
                <div className="skill-cat">Backend &amp; Web</div>
                <div className="pills">
                  <span className="pill">Python · Java · SQL</span>
                  <span className="pill">Flask · REST APIs</span>
                  <span className="pill">SQLAlchemy</span>
                  <span className="pill">React · TypeScript</span>
                  <span className="pill">HTML · Tailwind CSS</span>
                </div>
              </div>
              <div className="skill-group">
                <div className="skill-cat">Deployment &amp; Tools</div>
                <div className="pills">
                  <span className="pill amber">Streamlit</span>
                  <span className="pill amber">Render · Gunicorn</span>
                  <span className="pill amber">MySQL · SQLite</span>
                  <span className="pill amber">Git · Jupyter</span>
                  <span className="pill amber">LLM APIs (Gemini)</span>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ===== EXPERIENCE ===== */}
      <section id="experience">
        <div className="container">
          <FadeIn>
            <div className="sec-label">Experience &amp; Education</div>
            <h2 className="sec-title">Where I&apos;ve worked &amp; studied</h2>
            <div className="divider" />
          </FadeIn>
          <div className="timeline">
            <FadeIn className="tl-item">
              <div className="tl-dot current" />
              <div className="tl-date">2026 – Present</div>
              <h3>Software Engineering Intern</h3>
              <div className="tl-org">Nessco Paper Cup Machine</div>
              <ul>
                <li>
                  Working on an ERP system — contributed to attendance tracking,
                  face-based check-in, and payroll modules used by actual
                  employees.
                </li>
                <li>
                  The attendance system handles geofencing, auto-checkout, and
                  overtime opt-in — built to be race-safe so two simultaneous
                  requests don&apos;t create duplicate records.
                </li>
                <li>
                  The face verification part runs entirely in the browser (no
                  heavy server-side ML), producing a 128-number fingerprint that
                  gets matched against what was enrolled.
                </li>
                <li>
                  Built backend features using Next.js API routes with Prisma +
                  PostgreSQL, and connected LLM APIs (Gemini) for natural
                  language data queries.
                </li>
              </ul>
            </FadeIn>

            <FadeIn className="tl-item">
              <div className="tl-dot" />
              <div className="tl-date">June 2025 – August 2025</div>
              <h3>Data Science Intern</h3>
              <div className="tl-org">Celebal Technologies</div>
              <ul>
                <li>
                  Built end-to-end ML pipelines — from raw data to a deployed
                  Streamlit app — for two projects: house price prediction and
                  credit risk classification.
                </li>
                <li>
                  Learned quickly that accuracy alone is a bad metric for
                  imbalanced datasets; switched to precision-recall and F1-score
                  for the credit scoring model.
                </li>
                <li>
                  Used resampling to handle class imbalance and compared Linear
                  Regression, Random Forest, and SVM side by side using
                  cross-validation.
                </li>
                <li>
                  Deployed both models as interactive Streamlit apps for
                  non-technical stakeholders to try out.
                </li>
              </ul>
            </FadeIn>

            <FadeIn className="tl-item">
              <div className="tl-dot" />
              <div className="tl-date">2022 – 2026</div>
              <h3>
                B.Tech — Artificial Intelligence &amp; Data Science
              </h3>
              <div className="tl-org">
                Poornima College of Engineering, Jaipur
              </div>
              <ul>
                <li>
                  Coursework covering ML, Data Mining, Image Processing,
                  Information Retrieval, DSA, Computer Networks, DBMS, and
                  Operating Systems.
                </li>
                <li>
                  Runner-up at AADHAR-XI Technical Project Competition (2023),
                  organised by Zircon Club.
                </li>
              </ul>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ===== CURRENT WORK ===== */}
      <section
        id="current"
        className="current-bg"
        style={{ paddingTop: 0, paddingBottom: "5.5rem" }}
      >
        <div className="container">
          <FadeIn>
            <div className="sec-label">Current Work Highlight</div>
            <h2 className="sec-title">What I&apos;m building at Nessco</h2>
            <div className="divider" />
            <div className="work-card">
              <div className="work-header">
                <div className="work-icon">🏢</div>
                <div>
                  <h3>HR &amp; Payroll ERP System</h3>
                  <p>
                    Next.js 15 · Prisma · PostgreSQL · face-api.js · LLM APIs
                  </p>
                </div>
              </div>
              <p style={{ color: "var(--muted)", fontSize: ".93rem" }}>
                A full ERP used by a real organization — I work across three
                tightly connected modules that handle everything from someone
                clocking in at 9am to their payslip at month end.
              </p>
              <div className="work-modules">
                <div className="module">
                  <div className="module-name">📍 Attendance</div>
                  <p>
                    Check-in/check-out with geofencing, IP whitelisting, shift
                    overrides, auto-checkout, and overtime opt-in. A single
                    idempotent punch endpoint handles everything safely.
                  </p>
                </div>
                <div className="module">
                  <div className="module-name">🔍 Face Verification</div>
                  <p>
                    Browser-side biometrics using face-api.js — detects faces,
                    runs liveness checks across 3 frames, and sends only a
                    128-float &quot;fingerprint&quot; to the server, never raw
                    photo features.
                  </p>
                </div>
                <div className="module">
                  <div className="module-name">💰 Payroll Engine</div>
                  <p>
                    Live payroll that recalculates every time someone views it.
                    Handles PF, ESI, PT, TDS, overtime multipliers, pro-rated
                    salaries, and leave deductions — all driven by per-org
                    config.
                  </p>
                </div>
                <div className="module">
                  <div className="module-name">🤖 AI Data Queries</div>
                  <p>
                    Natural language interface over company data using Gemini
                    APIs — ingests CSV/JSON/TXT files and generates charts and
                    reports from structured outputs.
                  </p>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ===== PROJECTS ===== */}
      <section id="projects">
        <div className="container">
          <FadeIn>
            <div className="sec-label">Projects</div>
            <h2 className="sec-title">Things I&apos;ve built on my own</h2>
            <div className="divider" />
          </FadeIn>
          <div className="proj-grid">
            <FadeIn className="proj-card">
              <div className="proj-top">
                <div className="proj-icon">💳</div>
                <span className="proj-badge">ML · Deployed</span>
              </div>
              <h3>Credit Scoring System</h3>
              <p>
                Predicts whether a loan applicant is a good or bad credit risk
                using the German Credit dataset. The main challenge was the class
                imbalance — solved with resampling, then evaluated with
                precision-recall instead of accuracy. Hit ~80% with Random
                Forest.
              </p>
              <div className="tags">
                <span className="tag">Python</span>
                <span className="tag">Random Forest</span>
                <span className="tag">scikit-learn</span>
                <span className="tag">pandas</span>
                <span className="tag">Joblib</span>
                <span className="tag">Streamlit</span>
              </div>
              <div className="proj-links">
                <a
                  href="https://github.com/bhrigu136/Credit-Scoring-using-Random-Forest"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  ⎋ GitHub
                </a>
                <a
                  href="https://credit-scoring-using-random-forest-y4swxuubrbctwhjx6jxwte.streamlit.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  ↗ Live App
                </a>
              </div>
            </FadeIn>

            <FadeIn className="proj-card">
              <div className="proj-top">
                <div className="proj-icon">🎬</div>
                <span className="proj-badge">ML · Deployed</span>
              </div>
              <h3>Movie Recommendation System</h3>
              <p>
                Content-based recommender that suggests 5 similar movies based on
                what you pick. Pulls genres, cast, director, and overview
                together into a single feature, vectorizes it, then uses cosine
                similarity to rank results. Posters are fetched live from TMDB.
              </p>
              <div className="tags">
                <span className="tag">Python</span>
                <span className="tag">scikit-learn</span>
                <span className="tag">CountVectorizer</span>
                <span className="tag">TMDB API</span>
                <span className="tag">Streamlit</span>
                <span className="tag">Pickle</span>
              </div>
              <div className="proj-links">
                <a
                  href="https://github.com/bhrigu136/movie-recommender-system"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  ⎋ GitHub
                </a>
                <a
                  href="https://movie-recommender-system-527ydffaajaykatymnjsl8.streamlit.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  ↗ Live App
                </a>
              </div>
            </FadeIn>

            <FadeIn className="proj-card">
              <div className="proj-top">
                <div className="proj-icon">🏠</div>
                <span className="proj-badge">ML · Internship</span>
              </div>
              <h3>House Price Prediction</h3>
              <p>
                Regression project from my Celebal internship. Compared Linear
                Regression, Random Forest, and SVM on the same dataset using
                cross-validation to see which actually generalizes better, not
                just which looks good on training data.
              </p>
              <div className="tags">
                <span className="tag">Python</span>
                <span className="tag">Linear Regression</span>
                <span className="tag">Random Forest</span>
                <span className="tag">SVM</span>
                <span className="tag">scikit-learn</span>
                <span className="tag">Streamlit</span>
              </div>
              <div className="proj-links">
                <a
                  href="https://github.com/bhrigu136/House-Price-Prediction"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  ⎋ GitHub
                </a>
                <a
                  href="https://house-price-prediction-dzypzeofxzpdrl7wtp8ies.streamlit.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  ↗ Live App
                </a>
              </div>
            </FadeIn>

            <FadeIn className="proj-card">
              <div className="proj-top">
                <div className="proj-icon">🐝</div>
                <span className="proj-badge">Full-Stack</span>
              </div>
              <h3>HiveFlow — Team Task Manager</h3>
              <p>
                Started as my personal to-do list, then grew into a full team
                workspace. Has organizations, Kanban boards, real-time
                notifications, Google Calendar sync, CSV export, and a
                forgot-password OTP flow. No frontend framework — just Flask,
                plain JS, and hand-written CSS.
              </p>
              <div className="tags">
                <span className="tag">Flask</span>
                <span className="tag">SQLAlchemy</span>
                <span className="tag">OAuth 2.0</span>
                <span className="tag">PostgreSQL</span>
                <span className="tag">Flask-Login</span>
                <span className="tag">Render</span>
              </div>
              <div className="proj-links">
                <a
                  href="https://github.com/bhrigu136/hiveflow"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  ⎋ GitHub
                </a>
                <a
                  href="https://hiveflow-nadp.onrender.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  ↗ Live Demo
                </a>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ===== ACHIEVEMENT ===== */}
      <section style={{ padding: "3rem 2rem" }}>
        <div className="container">
          <FadeIn>
            <div className="ach-card">
              <div className="ach-icon">🥈</div>
              <div>
                <h3>
                  Runner-up — AADHAR-XI Technical Project Competition (2023)
                </h3>
                <p>
                  Won second place at a college-level Technical Project
                  Competition and Exhibition organised by the Zircon Club at
                  Poornima College of Engineering. One of the bigger highlights
                  from my first year.
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ===== CONTACT ===== */}
      <section id="contact" className="contact-bg">
        <div className="container">
          <FadeIn>
            <div className="sec-label">Contact</div>
            <h2 className="sec-title">Let&apos;s talk</h2>
            <div className="divider" />
          </FadeIn>
          <div className="contact-grid">
            <FadeIn>
              <p className="contact-text">
                I&apos;m looking for opportunities in Data Science, ML, Backend
                Development — or a mix. If you have something interesting in
                mind, feel free to reach out. I reply to every message.
              </p>
              <div className="contact-links">
                <a
                  href="mailto:bhrigunathtamanna@gmail.com"
                  className="c-link"
                >
                  <span className="ic">✉</span> bhrigunathtamanna@gmail.com
                </a>
                <a href="tel:+918233535365" className="c-link">
                  <span className="ic">📞</span> +91-8233535365
                </a>
                <a
                  href="https://github.com/bhrigu136"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="c-link"
                >
                  <span className="ic">⎋</span> github.com/bhrigu136
                </a>
                <a
                  href="https://www.linkedin.com/in/tamanna-bhrigunath"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="c-link"
                >
                  <span className="ic">in</span>{" "}
                  linkedin.com/in/tamanna-bhrigunath
                </a>
              </div>
            </FadeIn>
            <FadeIn>
              <div className="avail-box">
                <div className="avail-badge">
                  <span className="avail-dot" /> Available right now
                </div>
                <p>
                  Actively seeking full-time roles or freelance projects focused on Data Science, Machine Learning, or AI Engineering. Based in Jaipur, open to remote work.
                </p>
                <a
                  href="mailto:bhrigunathtamanna@gmail.com"
                  className="btn btn-primary"
                >
                  Send a message →
                </a>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      <footer>
        Built by <strong>Tamanna Bhrigunath</strong> · 2026 · Jaipur, India
      </footer>
    </>
  );
}
