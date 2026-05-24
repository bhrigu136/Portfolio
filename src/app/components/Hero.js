"use client";

import { useEffect, useRef, useState, useCallback } from "react";

// ======== PARTICLE CANVAS ========
function HeroCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    let w, h;
    let animId;
    const particles = [];
    const mouse = { x: null, y: null };
    const PARTICLE_COUNT = 80;
    const CONNECTION_DIST = 130;

    function resize() {
      w = canvas.width = canvas.offsetWidth;
      h = canvas.height = canvas.offsetHeight;
    }

    class Particle {
      constructor() {
        this.x = Math.random() * w;
        this.y = Math.random() * h;
        this.vx = (Math.random() - 0.5) * 0.4;
        this.vy = (Math.random() - 0.5) * 0.4;
        this.r = Math.random() * 1.8 + 0.5;
        this.alpha = Math.random() * 0.5 + 0.2;
      }
      update() {
        this.x += this.vx;
        this.y += this.vy;
        if (this.x < 0 || this.x > w) this.vx *= -1;
        if (this.y < 0 || this.y > h) this.vy *= -1;
      }
      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(167,139,250,${this.alpha})`;
        ctx.fill();
      }
    }

    resize();
    for (let i = 0; i < PARTICLE_COUNT; i++) particles.push(new Particle());

    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    };
    const handleMouseLeave = () => {
      mouse.x = null;
      mouse.y = null;
    };

    canvas.addEventListener("mousemove", handleMouseMove);
    canvas.addEventListener("mouseleave", handleMouseLeave);
    window.addEventListener("resize", resize);

    function animate() {
      ctx.clearRect(0, 0, w, h);
      particles.forEach((p) => {
        p.update();
        p.draw();
      });

      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < CONNECTION_DIST) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            const alpha = (1 - dist / CONNECTION_DIST) * 0.12;
            ctx.strokeStyle = `rgba(124,58,237,${alpha})`;
            ctx.lineWidth = 0.6;
            ctx.stroke();
          }
        }
        if (mouse.x !== null) {
          const dx = particles[i].x - mouse.x;
          const dy = particles[i].y - mouse.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 160) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(mouse.x, mouse.y);
            const alpha = (1 - dist / 160) * 0.2;
            ctx.strokeStyle = `rgba(6,182,212,${alpha})`;
            ctx.lineWidth = 0.8;
            ctx.stroke();
          }
        }
      }
      animId = requestAnimationFrame(animate);
    }
    animate();

    return () => {
      cancelAnimationFrame(animId);
      canvas.removeEventListener("mousemove", handleMouseMove);
      canvas.removeEventListener("mouseleave", handleMouseLeave);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return <canvas ref={canvasRef} className="hero-canvas" />;
}

// ======== TYPED TEXT ========
function TypedText() {
  const [text, setText] = useState("");
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    const phrases = [
      "AI & Data Science",
      "Backend Development",
      "Machine Learning",
      "Full-Stack Engineering",
    ];
    let phraseIdx = 0,
      charIdx = 0,
      isDeleting = false;
    let timeout;

    function type() {
      const current = phrases[phraseIdx];
      if (!isDeleting) {
        setText(current.slice(0, charIdx + 1));
        charIdx++;
        if (charIdx === current.length) {
          isDeleting = true;
          timeout = setTimeout(type, 1800);
          return;
        }
        timeout = setTimeout(type, 70 + Math.random() * 30);
      } else {
        setText(current.slice(0, charIdx - 1));
        charIdx--;
        if (charIdx === 0) {
          isDeleting = false;
          phraseIdx = (phraseIdx + 1) % phrases.length;
          timeout = setTimeout(type, 400);
          return;
        }
        timeout = setTimeout(type, 35);
      }
    }

    timeout = setTimeout(type, 1200);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <p className="hero-role">
      {text}
      <span className="typed-cursor" />
    </p>
  );
}

// ======== COUNTER STATS ========
function CounterStats() {
  const ref = useRef(null);
  const [projects, setProjects] = useState(0);
  const [internships, setInternships] = useState(0);
  const [triggered, setTriggered] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting && !triggered) {
            setTriggered(true);
            animateCount(setProjects, 5, "+");
            animateCount(setInternships, 2, "");
          }
        });
      },
      { threshold: 0.5 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [triggered]);

  function animateCount(setter, target) {
    let current = 0;
    const increment = target / 40;
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        current = target;
        clearInterval(timer);
      }
      setter(Math.floor(current));
    }, 30);
  }

  return (
    <div className="hero-stats" ref={ref}>
      <div className="stat">
        <div className="stat-num">{projects}+</div>
        <div className="stat-label">Projects Shipped</div>
      </div>
      <div className="stat">
        <div className="stat-num">{internships}</div>
        <div className="stat-label">Internships</div>
      </div>
      <div className="stat">
        <div className="stat-num">2026</div>
        <div className="stat-label">B.Tech Grad</div>
      </div>
      <div className="stat">
        <div className="stat-num">🥈</div>
        <div className="stat-label">Tech Competition</div>
      </div>
    </div>
  );
}

// ======== HERO SECTION ========
export default function Hero() {
  const handleAnchorClick = useCallback((e, href) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      const offset = 80;
      const top = target.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: "smooth" });
    }
  }, []);

  return (
    <section id="hero">
      <HeroCanvas />
      <div className="hero-glow" />
      <div className="hero-dots" />
      <div className="hero-content">
        <div className="badge">
          <span className="badge-dot" /> Open to full-time roles
        </div>
        <h1 className="hero-heading">
          <span className="grad">Tamanna Bhrigunath</span>
        </h1>
        <TypedText />
        <p className="hero-sub">
          B.Tech Graduate (Batch of 2022–2026) specializing in Data Science &amp; AI. I enjoy building intelligent predictive models, machine learning systems, and robust backend architectures.
        </p>
        <div className="cta-row">
          <a
            href="#projects"
            className="btn btn-primary"
            onClick={(e) => handleAnchorClick(e, "#projects")}
          >
            See My Projects
          </a>
          <a href="mailto:bhrigunathtamanna@gmail.com" className="btn btn-outline">
            Get In Touch
          </a>
        </div>
        <CounterStats />
      </div>
    </section>
  );
}
