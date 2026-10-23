import style from "./page.module.scss";

type ProjectItem = {
    title: string;
    description: string;
    image: string;
    href: string;
};

const projects: ProjectItem[] = [
    {
        title: "Framework Picture",
        description: "Front end page to present the work of a photographer, built with Next.js, featuring a responsive design and smooth animations.",
        image: "./projects/framework/main.png",
        href: "http://localhost:3000/projects/framework-picture"
    },
    {
            title: "Socket.IO Chess App",
            description: "A real-time multiplayer chess application built with Socket.IO & Next.js, allowing players to compete against each other online.",
        image: "./projects/chess/main.png",
        href: "http://localhost:3000/projects/chess-game"
    },
    {
        title: "3D Engine 2023",
        description: "A 3D engine built in PURE native web HTML JS PHP with no lib, and only divs perspective using CSS 3D transforms. Also my first big project",
        image: "./projects/3d-engine/cover.png",
        href: "http://localhost:3000/3d/engine2023"
    }
];

export function Projects() {
    return (
        <section className={style.projects} data-scroll-reveal>
            <div className={style.header} data-scroll-reveal>
                <h2>
                    <span className="cursor-light">RECENT</span>
                    <span className="cursor-light">PROJECTS</span>
                </h2>
            </div>

            <div className={style.list}>
                {projects.map((project) => (
                    <a key={project.title} href={project.href} className={`${style.card} cursor-reactive`} data-scroll-reveal>
                        <div className={style.imageWrap}>
                            <img src={project.image} alt={project.title} />
                        </div>

                        <div className={style.content}>
                            <h3 className="cursor-light">{project.title}</h3>
                            <p className="cursor-light">{project.description}</p>
                        </div>

                        <div className={style.arrow} aria-hidden="true">
                            <svg viewBox="0 0 24 24" className={style.arrowIcon}>
                                <path d="M5 12h12" />
                                <path d="M13 5l7 7-7 7" />
                            </svg>
                        </div>
                    </a>
                ))}
            </div>
        </section>
    );
}