export default function Projects() {
  return (
    <section
      id="projects"
      className="h-auto w-full flex flex-col gap-10 py-10 pb-15 items-center px-4 sm:px-6"
    >
      <h1 className="text-[28px] sm:text-[32px] md:text-[40px] font-bold text-center animate-h">
        What I have worked on
      </h1>

      <div className="pt-10 md:py-20 shadow-[0_10px_40px_rgba(34,197,94,0.45)] pro-1 w-full md:w-[90%] border rounded-2xl h-auto relative flex flex-col md:flex-row mb-15">
        <h2 className="text-[18px] sm:text-[20px] font-bold absolute top-3 left-5 animate-h">
          Project 01
        </h2>

        <div className="h-[300px] md:h-[100%] w-full md:w-1/2 flex justify-center items-center">
          <div className="h-[250px] sm:h-[300px] md:h-[400px] w-[90%] md:w-[80%] overflow-hidden rounded-2xl shadow-[0_10px_40px_rgba(34,197,94,0.45)]">
            <img
              src="/project-1.png"
              alt=""
              className="object-cover h-full w-full animate-i rounded-2xl"
            />
          </div>
        </div>

        <div className="h-auto md:h-full w-full md:w-1/2 relative flex flex-col justify-center px-4 sm:px-6 md:px-10 gap-2 py-6 md:py-0">
          <h1 className="mb-3 md:mb-5 text-[26px] sm:text-[30px] md:text-[35px] font-bold animate-h">
            TaskFlow Pro
          </h1>
          <h3 className="text-[20px] sm:text-[22px] md:text-[25px] font-medium animate-h">
            About:
          </h3>
          <p className="font-medium animate-b text-sm sm:text-base">
            TaskFlow Pro is a frontend-focused task management application built with React. It demonstrates clean UI design, reusable components, and smooth user interactions. The project showcases dashboards, task cards, status indicators, and form layouts, focusing purely on user experience and interface structure without backend logic.
          </p>
          <h3 className="text-[20px] sm:text-[22px] md:text-[25px] font-medium animate-h">
            Tech:
          </h3>
          <p className="font-medium animate-b text-sm sm:text-base">
            React.js, CSS3, javascript, HTML5
          </p>
          <div className="flex gap-4 sm:gap-5 mt-4 sm:mt-6 flex-wrap">
            <a href="https://taskflow-pro-app.netlify.app/" target="_blank" rel="noopener">
              <button className="btn-secondary animate-b">Live Demo</button>
            </a>
            <a href="https://github.com/dheerajkaushik1/taskflow-pro" target="_blank" rel="noopener">
              <button className="btn-secondary animate-b">Github</button>
            </a>
          </div>
        </div>
      </div>

      <div className="pt-10 md:py-20 h-auto shadow-[0_10px_40px_rgba(34,197,94,0.45)] pro-2 w-full md:w-[90%] border rounded-2xl relative flex flex-col md:flex-row">
        <h2 className="text-[18px] sm:text-[20px] font-bold absolute top-3 right-5 animate-h">
          Project 02
        </h2>

        <div className="h-auto md:h-full w-full md:w-1/2 relative flex flex-col justify-center px-4 sm:px-6 md:px-10 gap-2 py-6 md:py-0 order-2 md:order-1">
          <h1 className="mb-3 md:mb-5 text-[26px] sm:text-[30px] md:text-[35px] font-bold animate-h">
            Therapist Profile
          </h1>
          <h3 className="text-[20px] sm:text-[22px] md:text-[25px] font-medium animate-h">
            About:
          </h3>
          <p className="font-medium animate-b text-sm sm:text-base">
            A modern therapist website homepage developed with Next.js and Tailwind CSS, designed to clearly communicate services, professional background, and contact information. The layout emphasizes readability, calm aesthetics, and user-friendly navigation, making it easy for visitors to understand therapy offerings, credentials, and office details.
          </p>
          <h3 className="text-[20px] sm:text-[22px] md:text-[25px] font-medium animate-h">
            Tech:
          </h3>
          <p className="font-medium animate-b text-sm sm:text-base">
            React.js, Next.js, Tailwind CSS, Javascript, HTML5
          </p>
          <div className="flex gap-4 sm:gap-5 mt-4 sm:mt-6 flex-wrap">
            <a href="https://therapist-profile.vercel.app/" target="_blank" rel="noopener">
              <button className="btn-secondary animate-b">Live Demo</button>
            </a>
            <a href="https://github.com/dheerajkaushik1/therapist-profile" target="_blank" rel="noopener">
              <button className="btn-secondary animate-b">Github</button>
            </a>
          </div>
        </div>

        <div className="h-[300px] md:h-full w-full md:w-1/2 flex justify-center items-center order-1 md:order-2">
          <div className="h-[250px] sm:h-[300px] md:h-[400px] w-[90%] md:w-[80%] overflow-hidden rounded-2xl shadow-[0_10px_40px_rgba(34,197,94,0.45)]">
            <img
              src="/project-2.png"
              alt=""
              className="object-cover h-full w-full animate-i rounded-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
