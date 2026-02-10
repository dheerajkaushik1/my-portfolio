"use client";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav
      className="w-full flex justify-between items-center z-50 bg-[var(--bg-transparent)] px-4 md:px-10 py-0 h-[10vh] backdrop-blur-sm sticky top-0 
      shadow-[0_8px_30px_rgba(34,197,94,0.15)]"
    >
      <div className="w-1/2 h-full">
        <a
          href="#"
          className="group relative text-[24px] md:text-[30px] font-bold font-mono overflow-hidden flex gap-5 items-center px-2 h-full animate-h"
        >
          <h1 className="text-[24px] md:text-[30px] absolute left-0 translate-x-0 group-hover:translate-x-full group-hover:opacity-0 transition-all duration-700">
            Dheeraj Kaushik
          </h1>
          <h2 className="text-[18px] md:text-[25px] opacity-0 absolute left-0 translate-x-full group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-700">
            React Frontend Developer
          </h2>
        </a>
      </div>

      {/* Desktop links */}
      <div className="hidden md:flex gap-7 text-[20px] font-semibold">
        <a href="#about" className="hover:bg-[var(--bg-tertiary)] p-2 rounded-2xl hover:text-[var(--text-on-tertiary)] transition-all duration-700 animate-b">About</a>
        <a href="#skills" className="hover:bg-[var(--bg-tertiary)] p-2 rounded-2xl hover:text-[var(--text-on-tertiary)] transition-all duration-700 animate-b">Skills</a>
        <a href="#projects" className="hover:bg-[var(--bg-tertiary)] p-2 rounded-2xl hover:text-[var(--text-on-tertiary)] transition-all duration-700 animate-b">Projects</a>
        <a href="#contact" className="hover:bg-[var(--bg-tertiary)] p-2 rounded-2xl hover:text-[var(--text-on-tertiary)] transition-all duration-700 animate-b">Contact</a>
      </div>


    {/* Mobile Nav */}
      <button
        onClick={() => setOpen(!open)}
        className="md:hidden text-3xl px-2"
      >
        ☰
      </button>

      {open && (
        <div className="absolute top-[10vh] left-0 w-full bg-[var(--bg-secondary)] flex flex-col items-center gap-4 py-6 md:hidden">
          <a onClick={() => setOpen(false)} href="#about" className="p-2">About</a>
          <a onClick={() => setOpen(false)} href="#skills" className="p-2">Skills</a>
          <a onClick={() => setOpen(false)} href="#projects" className="p-2">Projects</a>
          <a onClick={() => setOpen(false)} href="#contact" className="p-2">Contact</a>
        </div>
      )}
    </nav>
  );
}
