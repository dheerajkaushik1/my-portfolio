export default function Skills() {
  return (
    <section
      id="skills"
      className="min-h-screen w-full bg-[var(--bg-secondary)] flex flex-col justify-around items-center relative px-4 sm:px-6 md:px-10 pt-20 gap-10 pb-10"
    >
      <h1 className="text-[var(--text-on-primary)] font-bold text-[28px] sm:text-[32px] md:text-[40px] animate-h mb-10 md:mb-20 text-center">
        Techs I work with...
      </h1>

      <div className="flex flex-col md:flex-row justify-around items-center w-full gap-16 md:gap-0">
        <div className="relative h-[260px] sm:h-[300px] w-[260px] sm:w-[300px] animate-h">
          <div className="h-[80px] sm:h-[100px] w-[140px] sm:w-[150px] bg-[var(--bg-primary)] absolute -top-[40px] sm:-top-[50px] right-0 z-0 border flex justify-center py-1 rounded-2xl">
            <h1 className="font-bold text-[20px] sm:text-[25px] animate-pulse">Frontend</h1>
          </div>
          <div className="h-full w-full bg-[var(--bg-primary)] z-10 absolute border-2 rounded-2xl rounded-tr-none flex items-center justify-center hover:shadow-[0_10px_30px_rgba(34,197,94,0.25)] transition-all duration-500">
            <ul className="list-disc flex flex-col gap-2 text-lg sm:text-2xl">
              <li className="animate-b">React.js</li>
              <li className="animate-b">Next.js</li>
              <li className="animate-b">Tailwind CSS</li>
              <li className="animate-b">Javascript</li>
              <li className="animate-b">HTML5</li>
              <li className="animate-b">CSS3</li>
            </ul>
          </div>
        </div>

        <div className="relative h-[260px] sm:h-[300px] w-[260px] sm:w-[300px] animate-h">
          <div className="h-[80px] sm:h-[100px] w-[140px] sm:w-[150px] bg-[var(--bg-primary)] absolute -top-[40px] sm:-top-[50px] right-0 z-0 border flex justify-center py-1 rounded-2xl">
            <h1 className="font-bold text-[20px] sm:text-[25px] animate-pulse">Backend</h1>
          </div>
          <div className="h-full w-full bg-[var(--bg-primary)] z-10 absolute border-2 rounded-2xl rounded-tr-none flex justify-center p-6 sm:p-10 hover:shadow-[0_10px_30px_rgba(34,197,94,0.25)] transition-all duration-500">
            <ul className="list-disc flex flex-col gap-2 text-lg sm:text-2xl animate-b">
              <li className="animate-b">Python</li>
              <li className="animate-b">Django</li>
              <li className="animate-b">PHP (Basics)</li>
              <li className="animate-b">SQL</li>
            </ul>
          </div>
        </div>

        <div className="relative h-[260px] sm:h-[300px] w-[260px] sm:w-[300px] animate-h">
          <div className="h-[80px] sm:h-[100px] w-[140px] sm:w-[150px] bg-[var(--bg-primary)] absolute -top-[40px] sm:-top-[50px] right-0 z-0 border flex justify-center py-1 rounded-2xl">
            <h1 className="font-bold text-[20px] sm:text-[25px] animate-pulse">Database</h1>
          </div>
          <div className="h-full w-full bg-[var(--bg-primary)] z-10 absolute border-2 rounded-2xl rounded-tr-none p-6 sm:p-10 flex justify-center hover:shadow-[0_10px_30px_rgba(34,197,94,0.25)] transition-all duration-500">
            <ul className="list-disc flex flex-col gap-2 text-lg sm:text-2xl animate-b">
              <li className="animate-b">MySQL</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="h-auto w-full sm:w-[90%] md:w-[80%] border-2 bg-[var(--bg-primary)] p-6 sm:p-8 md:p-10 rounded-lg animate-h hover:shadow-[0_10px_30px_rgba(34,197,94,0.25)] transition-all duration-500">
        <h1 className="text-[20px] sm:text-[22px] md:text-[25px] font-bold mb-4 animate-i text-center md:text-left">
          Currently Expanding
        </h1>
        <p className="text-[15px] sm:text-[16px] md:text-[18px] font-medium animate-b text-center md:text-left">
          My primary strength is frontend development. Alongside this, I’m consistently improving my backend skills to better understand full-stack workflows.
        </p>
      </div>
    </section>
  );
}
