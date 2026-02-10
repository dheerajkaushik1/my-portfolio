"use client";
import { useState } from "react"
import type { ReactNode } from "react"

type Layer = "internshala" | "python";

export default function Education() {

    const [activeLayer, setActiveLayer] = useState<Layer>("internshala");

    const layerContent: Record<Layer, React.ReactNode> = {
        internshala: (
            <div className="flex flex-col gap-3">
                <h2 className="text-[25px] font-semibold animate-h">Web Development with AI</h2>
                <p className="text-[var(--text-on-secondary)] font-medium text-[15px]">Internshala • Online</p>
                <ul className="list-disc pl-5 space-y-1">
                    <li>Covered HTML, CSS, JavaScript, React, MySQL, and PHP</li>
                    <li>Completed with certification</li>
                    <li>Recognized as a top performer in the course</li>
                    <li>Focused on frontend development and practical projects</li>
                </ul>
            </div>
        ),

        python: (
            <div className="flex flex-col gap-3">
                <h2 className="text-[25px] font-semibold animate-h">Python & SQL</h2>
                <p className="text-[var(--text-on-secondary)] font-medium text-[15px]">Offline Training Program</p>
                <ul className="list-disc pl-5 space-y-1">
                    <li>Learned Python fundamentals and logic building</li>
                    <li>Worked with SQL for database operations</li>
                    <li>Developed projects using Python and SQL</li>
                    <li>Practiced problem-solving and debugging skills</li>
                </ul>
            </div>
        )
    }


    return (
        <section id="education" className="h-auto w-full flex flex-col gap-7 py-10 items-center bg-[var(--bg-secondary)]">
            <div>
                <h1 className="text-[40px] font-bold text-center animate-h">My Education</h1>
                <h3 className="text-[18px] md:text-[25px] font-medium text-center animate-h">My academic background and learning journey</h3>
            </div>
            <div className="w-[90%] bg-[var(--bg-tertiary)] h-auto pb-10 px-10 flex flex-col gap-4 py-5 rounded-2xl">
                <div>
                    <h1 className="text-[30px] md:text-[25px] font-bold animate-h">Bachelor of Computer Applictions (BCA)</h1>
                    <p className="text-[var(--text-on-secondary)]">Ahir College</p>
                    <p className="font-medium">2024-2028 | Currently in 2nd Year.</p>
                </div>
                <div>
                    <h3 className="text-[18px] font-semibold mb-2 animate-h">Focus Areas</h3>
                    <ul className="list-disc pl-10 text-[15px] font-normal animate-b">
                        <li>Computer Fundamentals</li>
                        <li>Web Development</li>
                        <li>Databases and programming basics</li>
                        <li>Programming languages - C, C++, Java</li>
                    </ul>
                </div>
                <div className="flex flex-col gap-5 mt-7 w-full">
                    <h2 className="text-[20px] font-semibold">Skill Layers</h2>
                    <div className="flex gap-5">
                        <button className="btn-primary animate-b "
                            onClick={() => {
                                setActiveLayer("internshala")
                            }}>
                            Web Development with AI
                        </button>
                        <button className="btn-primary animate-b"
                            onClick={() => setActiveLayer("python")}>
                            Python & SQL
                        </button>
                    </div>
                    <div className="border-2 md:w-[90%] h-auto rounded-2xl bg-[var(--bg-secondary)] px-10 py-5 pb-10 animate-h">
                        {layerContent[activeLayer]}
                    </div>
                </div>
            </div>
        </section>
    )
}