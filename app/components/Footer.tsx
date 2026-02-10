export default function Footer() {
  return (
    <footer id="footer" className="w-full bg-[var(--bg-primary)] border-t border-white/10">
      <div className="max-w-6xl mx-auto px-6 py-12 flex flex-col items-center gap-6 text-center">
        <div>
          <h2 className="text-2xl font-bold animate-h">Dheeraj Kaushik</h2>
          <p className="text-[var(--text-on-secondary)] animate-h">
            React Frontend Developer
          </p>
        </div>

        <p className="max-w-xl text-sm text-[var(--text-on-secondary)] animate-b">
          I enjoy building clean, user-focused interfaces with attention to detail,
          performance, and thoughtful interactions.
        </p>

        <div className="flex md:gap-4 flex-wrap w-[70%] md:w-full md:justify-center justify-around gap-3">
          <a
            href="mailto:dheerajkaushik428@gmail.com"
            className="btn-secondary animate-b"
          >
            Email
          </a>

          <a
            href="https://www.linkedin.com/in/dheeraj-kaushik-01f5"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary animate-b"
          >
            LinkedIn
          </a>

          <a
            href="https://github.com/dheerajkaushik1"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary animate-b"
          >
            GitHub
          </a>

          <a
            href="https://wa.me/919306479470"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary animate-b"
          >
            WhatsApp
          </a>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-white/10 my-4" />

        <p className="text-xs text-white/50 animate-b">
          © 2026 Dheeraj Kaushik • Built with Next.js & Tailwind CSS
        </p>
      </div>
    </footer>
  );
}
