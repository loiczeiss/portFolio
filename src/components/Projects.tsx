function Projects() {
    // Array of project objects
    const projectsData = [
        {
            title: "Fragments of identity",
            description: "2025/PeplexityAPI(sonar)/deepgram(STT)/Next.js/Tailwindcss/Vercel",
            url: "https://ai-entity.vercel.app/"},
        {
            title: "Reo-groupe",
            description: "2025/PayloadCMS/Next.js/Tailwindcss/Vercel",
            url: "https://reo-groupe.fr/"
        },
        {
            title: "UnderAchievers",
            description: "2025/Next.js/Tailwindcss/Prisma/Supabase/NextAuth/Vercel",
            url: "https://underachievers.vercel.app/"
        },
        {
            title: "WeatherApp 2.0",
            description: "2024/Next.js/Tailwindcss/Vercel/RestAPI",
            url: "https://riviereweather.vercel.app/"
        },
        {
            title: "RetroPokedex",
            description: "2023/Reactjs/Tailwindcss/GraphQL",
            url: "https://loiczeiss.github.io/RetroPokedex/"
        },
        {
            title: "URL Shortener",
            description: "2024/Reactjs/Tailwindcss/RestAPI",
            url: "https://loiczeiss.github.io/shortUrl/"
        },
        {
            title: "IP Adress",
            description: "2024/Reactjs/Leaflet/Context.js",
            url: "https://loiczeiss.github.io/ipAddress/"
        },
        {
            title: "REST Countries",
            description: "2024/Reactjs/Tailwindcss/Redux/Node",
            url: "https://loiczeiss.github.io/restCountries/"
        },
        {
            title: "Weather App but a cool one...",
            description: "2022/Reactjs/Tailwindcss/Axios/RestAPI",
            url: "https://loiczeiss.github.io/weatherapp/"
        },
        {
            title: "Age Calculator",
            description: "2023/Reactjs/Tailwindcss",
            url: "https://loiczeiss.github.io/AgeCalculator/"
        },
        {
            title: "GoT HangMan",
            description: "2022/Reactjs/PureCss",
            url: "https://loiczeiss.github.io/HangManGoT/"
        }
    ];

    return (
        <div
            className="w-full sm:w-[70%] flex self-start md:self-end mt-10 mb-10 sm:mt-20 mr-0 sm:mr-5 max-h-[calc(100%-80px)] overflow-y-auto overflow-x-hidden scrollbar-hide px-3 sm:px-0">
            <div className="mb-5 w-full space-y-4">
                <ul>
                    <li className="text-start md:text-end text-xl mr-0 sm:mr-5 text-black dark:text-white">■ Projects
                    </li>
                </ul>
                {projectsData.map((project, index) => (
                    <div key={index}
                         className="text-start md:text-end font-neueMontreal text-black dark:text-white group w-full">
                        <a
                            href={project.url}
                            className="inline-block w-full group-hover:text-gray-600 dark:group-hover:text-gray-300 space-y-2"
                        >
                            <p className="text-start md:text-end text-xl md:text-3xl lg:text-5xl mr-0 sm:mr-5 text-black dark:text-white group-hover:text-gray-600 dark:group-hover:text-gray-300 text-wrap text-pretty break-words">
                                {project.title}
                            </p>
                            <p className="text-start md:text-end mr-0 sm:mr-5 pb-2 text-black text-xs md:text-base text-wrap text-pretty break-words dark:text-white group-hover:text-gray-600 dark:group-hover:text-gray-300">
                                {project.description}
                            </p>
                        </a>
                    </div>
                ))}
            </div>
        </div>
    );
}

    export default Projects;
