"use client";

import { useEffect, useRef } from "react";

export default function FadeIn({ children, className = "", delay = 0 }) {
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("vis");
          }
        });
      },
      { threshold: 0.08, rootMargin: "0px 0px -40px 0px" }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const delayClass = delay > 0 ? ` fi-delay-${delay}` : "";

  return (
    <div ref={ref} className={`fi${delayClass} ${className}`}>
      {children}
    </div>
  );
}
