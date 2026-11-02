"use client";

import style from "./main.module.scss";
import { useSiteTranslations } from "@/app/i18n/site-locale";

type Tool = {
    name: string;
    mark: string;
    detail: string;
    tone: "lime" | "blue" | "coral" | "violet" | "neutral";
};

const tools: Tool[] = [
    { name: "React.js", mark: "R", detail: "UI library", tone: "blue" },
    { name: "Next.js", mark: "N", detail: "Web framework", tone: "neutral" },
    { name: "Node.js", mark: "N", detail: "JavaScript runtime", tone: "lime" },
    { name: "JavaScript", mark: "JS", detail: "Programming", tone: "coral" },
    { name: "TypeScript", mark: "TS", detail: "Typed JavaScript", tone: "blue" },
    { name: "PHP", mark: "Php", detail: "Server-side", tone: "violet" },
    { name: "HTML", mark: "5", detail: "Markup", tone: "coral" },
    { name: "SCSS", mark: "Sc", detail: "Stylesheets", tone: "violet" },
    { name: "Sass", mark: "Sa", detail: "CSS preprocessor", tone: "coral" },
    { name: "C", mark: "C", detail: "Programming", tone: "blue" },
    { name: "Python", mark: "Py", detail: "Programming", tone: "blue" },
    { name: "Figma", mark: "Fg", detail: "Interface design", tone: "violet" },
    { name: "Canva", mark: "Cv", detail: "Visual design", tone: "blue" },
    { name: "Vercel", mark: "V", detail: "Deployment", tone: "neutral" },
    { name: "Visual Studio", mark: "VS", detail: "Code editor", tone: "blue" },
    { name: "Git", mark: "Git", detail: "Version control", tone: "coral" },
];

export function Tools() {
    const text = useSiteTranslations().tools;
    const localizedTools = tools.map((tool, index) => ({ ...tool, detail: text.descriptions[index] }));

    return (
        <section className={style.tools} data-scroll-reveal>
            <header className={style.header} data-scroll-reveal>
                <h2>
                    <span className="cursor-light">{text.title[0]}</span>
                    <span className="cursor-light">{text.title[1]}</span>
                </h2>
            </header>

            <div className={style.grid}>
                {localizedTools.map((tool) => (
                    <article className={`${style.card} cursor-reactive`} key={tool.name} data-scroll-reveal>
                        <div className={`${style.mark} ${style[tool.tone]}`} aria-hidden="true">
                            <span>{tool.mark}</span>
                        </div>
                        <h3 className="cursor-light">{tool.name}</h3>
                        <p>{tool.detail}</p>
                    </article>
                ))}
            </div>
        </section>
    );
}