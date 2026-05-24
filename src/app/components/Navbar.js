"use client";

import { useState, useEffect, useCallback } from "react";

const NAV_ITEMS = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      // Determine active section
      const sections = document.querySelectorAll("section[id]");
      let current = "";
      sections.forEach((sec) => {
        const top = sec.offsetTop - 120;
        if (window.scrollY >= top) current = sec.id;
      });
      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = useCallback(
    (e, href) => {
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        const offset = 80;
        const top =
          target.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({ top, behavior: "smooth" });
      }
      setIsOpen(false);
    },
    []
  );

  const scrollToTop = useCallback(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <nav className={scrolled ? "scrolled" : ""}>
      <div
        className="nav-logo"
        onClick={scrollToTop}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => e.key === "Enter" && scrollToTop()}
      >
        Tamanna B.
      </div>
      <button
        className={`hamburger${isOpen ? " open" : ""}`}
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle navigation menu"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
      <ul className={`nav-links${isOpen ? " open" : ""}`}>
        {NAV_ITEMS.map((item) => (
          <li key={item.href}>
            <a
              href={item.href}
              className={activeSection === item.href.slice(1) ? "active" : ""}
              onClick={(e) => handleNavClick(e, item.href)}
            >
              {item.label}
            </a>
          </li>
        ))}
        <li className="nav-resume-li">
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="nav-resume-btn"
          >
            Resume ↗
          </a>
        </li>
      </ul>
    </nav>
  );
}
