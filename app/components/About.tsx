"use client";
import { useState, useEffect } from "react";

type AboutTab = "Who" | "What" | "How";

export default function About(){
    const [active, setActive] = useState<AboutTab>("Who");

    useEffect(() => {
        const images = document.querySelectorAll(".animate-i");

        const observer3 = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if(entry.isIntersecting){
                    entry.target.classList.add("animate-image");
                    observer3.unobserve(entry.target);
                }
            })
        },
        {threshold: 0.2}
    )

    images.forEach(image => {
        observer3.observe(image);
    })
    },[])

    const content: Record<AboutTab, string[]> = {
        Who: [
            "Hi, my name is Dheeraj Kaushik.",
            "I’m a full stack developer who enjoys turning ideas into clean, functional web experiences.",
            "I focus on building interfaces that feel simple, intuitive, and purposeful.",
            "I value clarity in both code and design, keeping things readable and maintainable.",
            "I’m curious by nature and constantly learning better ways to solve problems.",
            "I like working on products that are useful, scalable, and user-focused."
        ],
        What: [
            "I am a fronend developer with a passion for creating engaging and user-friendly interfaces.",
            "I build modern web applications using React, Next.js, and related frontend tools.",
            "I design reusable UI components and maintain consistent design systems.",
            "I work with APIs, databases, and backend logic when needed.",
            "I focus on performance, accessibility, and responsive layouts.",
            "I structure projects so they scale cleanly as features grow."
        ],
        How: [
            "I start by understanding the user flow and translating designs into reusable React components.",
            "I structure components with clear separation of concerns to keep the UI scalable and maintainable.",
            "I use Tailwind CSS to build responsive layouts while maintaining consistent spacing and typography.",
            "I focus on writing clean, semantic HTML and well-structured CSS for accessibility and clarity.",
            "I manage state thoughtfully in React to avoid unnecessary re-renders and complexity.",
            "I optimize performance by handling conditional rendering, lazy loading, and efficient component updates.",
            "I test layouts and interactions across different screen sizes and browsers.",
            "I continuously refactor UI code to improve readability, reusability, and performance."
        ]
    }

    return(
        <section
            id="about"
            className="h-auto md:h-screen w-full bg-[var(--bg-secondary)] flex flex-col md:flex-row overflow-hidden relative"
        >
            <div className="w-full md:w-1/2 h-[40vh] md:h-full flex items-center justify-center">
                <div className="h-[90%] w-[90%] md:h-[80%] md:w-[80%] rounded-2xl overflow-hidden">
                    <img
                        src="/my-img-1.png"
                        alt=""
                        className="h-full w-full object-cover rounded-2xl object-top animate-i"
                    />
                </div>
            </div>

            <div className="w-full md:w-1/2 h-auto md:h-full flex flex-col justify-center px-4 sm:px-6 md:px-12 gap-6 md:gap-7 relative">
                <h1 className="text-[28px] sm:text-[32px] md:text-[40px] text-[var(--text-on-secondary)] font-bold text-center md:text-left md:absolute md:top-0 md:left-0">
                    About Me
                </h1>

                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center md:justify-between">
                    <button className="btn-primary animate-b" onClick={() => setActive("Who")}>
                        Who I am ?
                    </button>
                    <button className="btn-primary animate-b" onClick={() => setActive("What")}>
                        What I do ?
                    </button>
                    <button className="btn-primary animate-b" onClick={() => setActive("How")}>
                        How I work ?
                    </button>
                </div>

                <div className="overflow-auto h-[260px] sm:h-[300px] flex flex-col gap-4">
                    {content[active].map((line, idx) => (
                        <p key={`${active}-${idx}`} className="transition-all duration-300 animate-i text-sm sm:text-base">
                            {line}
                        </p>
                    ))}
                </div>

                <a href="/Dheeraj-Kaushik-Resume.pdf" download className="mx-auto md:mx-0">
                    <button className="btn-secondary w-fit animate-b">
                        Download CV
                    </button>
                </a>
            </div>
        </section>
    )
}
