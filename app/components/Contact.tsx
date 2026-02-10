export default function Contact() {
    return (
        <section id="contact" className="h-auto py-10 w-full flex flex-col md:flex-row">
            <div className="md:h-auto md:w-[40%]  flex justify-center items-center">
                <div className="shadow-[0_10px_30px_rgba(34,197,94,0.25)] h-auto w-[90%] rounded-2xl overflow-hidden">
                    <img src="/my-img-2.jpeg" alt="" className="h-[400px] md:h-[600px] w-full object-cover rounded-2xl animate-i" />
                </div>
            </div>
            <div className="h-auto md:w-[60%] flex flex-col justify-center  p-10 gap-5">
                <div className="flex flex-col gap-3">
                    <h1 className="text-[35px] font-bold animate-h">Let's Connect</h1>
                    <p className="text-[16px] animate-b text-[var(--text-on-secondary)] md:w-[80%] w-full">
                        I am currently available for freelance work. If you have any questions or would like to work together, please don't hesitate to contact me.
                    </p>
                </div>
                <div className="flex flex-col gap-3">
                    <h1 className="text-[30px] font-semibold animate-h">
                        Start a Conversation
                    </h1>
                    <ul className="text-[16px] animate-h">
                        <li className="flex gap-2">
                            <span className="text-[var(--accent-green)] text-xl">✓</span>
                            <span>Open to frontend roles</span>
                        </li>
                        <li className="flex gap-2">
                            <span className="text-[var(--accent-green)] text-xl">✓</span>
                            <span>Available for internships</span>
                        </li>
                        <li className="flex gap-2">
                            <span className="text-[var(--accent-green)] text-xl">✓</span>
                            <span>Open to freelance opportunities</span>
                        </li>
                    </ul>
                </div>
                <div className="flex flex-col gap-3">
                    <h1 className="text-[30px] font-semibold animate-h">Contact Options</h1>
                    <div className="h-auto w-full rounded-2xl bg-[var(--bg-secondary)] relative">
                        <div className="w-[60%] h-[80%] flex gap-10 p-5 flex-wrap justify-between">
                            <a href="mailto:dheerajkaushik428@gmail.com" rel="noopener" target="_blank" className="flex items-center gap-2">
                                <img src="/email-2.png" alt="" className="h-10 rounded-full w-10 animate-i" />
                                <span className="animate-h">Email</span>
                            </a>
                            <a href="https://www.linkedin.com/in/dheeraj-kaushik-01f5" rel="noopener" target="_blank" className="flex items-center gap-2">
                                <img src="/linkedin-2.png" alt="" className="h-10 rounded-full w-10 animate-i" />
                                <span className="animate-h">Linkedin</span>
                            </a>
                            <a href="https://github.com/dheerajkaushik1" rel="noopener" target="_blank" className="flex items-center gap-2">
                                <img src="/github-2.png" alt="" className="h-10 rounded-full w-10 animate-i" />
                                <span className="animate-h">GitHub</span>
                            </a>
                            <a href="https://wa.me/919306479470" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                                <img src="/whatsapp-2.png" alt="" className="h-10 rounded-full w-10 animate-i" />
                                <span className="animate-h">Whatsapp</span>
                            </a>
                        </div>
                        <a href="/Dheeraj-Kaushik-Resume.pdf" target="_blank" rel="noopener noreferrer">
                            <button className="btn-primary absolute right-5 bottom-5 animate-b">View Resume</button>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}