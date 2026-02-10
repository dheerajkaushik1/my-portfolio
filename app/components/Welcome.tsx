"use client";
import { useEffect } from "react";

export default function Welcome() {

  useEffect(() => {
    const elements = document.querySelectorAll(".animate-h");
    const elements2 = document.querySelectorAll(".animate-b");

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-heading");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    const observer2 = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-button");
            observer2.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    elements.forEach(el => observer.observe(el));
    elements2.forEach(el => observer2.observe(el));
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen w-full hero-bg flex items-center px-4 sm:px-6"
    >
      <div className="absolute bottom-0 left-0 w-full h-32 sm:h-44 bg-gradient-to-b from-transparent to-[var(--bg-secondary)]"></div>

      <div className="relative flex items-center flex-col w-full h-auto">
        <div className="shadow-[0_20px_60px_rgba(0,0,0,0.45)] flex flex-col gap-4 rounded-2xl px-5 sm:px-7 py-8 sm:py-10 bg-[var(--bg-secondary)] animate-h w-full max-w-xl">
          <h1 className="text-4xl sm:text-6xl font-bold text-[var(--text-on-primary)] animate-h">
            Hi,
          </h1>
          <h1 className="text-4xl sm:text-6xl font-bold text-[var(--text-on-primary)] animate-h text-center sm:text-left">
            This is Dheeraj Kaushik
          </h1>
          <p className="mt-2 sm:mt-4 text-[var(--text-on-primary)] font-medium text-base sm:text-[20px] animate-b text-center sm:text-left">
            React Frontend Developer
          </p>
          <a
            href="https://github.com/dheerajkaushik1?tab=repositories"
            rel="noopener"
            target="_blank"
            className="w-full"
          >
            <button className="w-full animate-b p-3 rounded-2xl btn-secondary active:scale-[0.9] text-sm sm:text-base">
              Visit My Works &rarr;
            </button>
          </a>
        </div>
      </div>
    </section>
  );
}
