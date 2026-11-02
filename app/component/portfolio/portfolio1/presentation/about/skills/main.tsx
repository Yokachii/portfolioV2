"use client";

import style from "./main.module.scss";
import { useSiteTranslations } from "@/app/i18n/site-locale";

type Skill = {
    name: string;
    mark: string;
    detail: string;
    tone: "lime" | "blue" | "coral" | "violet" | "neutral";
};

const skills: Skill[] = [
    { name: "React.js", mark: "R", detail: "UI library", tone: "blue" },
    { name: "Next.js", mark: "N", detail: "Web framework", tone: "neutral" },
    { name: "Node.js", mark: "N", detail: "JavaScript runtime", tone: "lime" },
    { name: "TypeScript", mark: "TS", detail: "Typed JavaScript", tone: "blue" },
    { name: "JavaScript", mark: "JS", detail: "Programming", tone: "coral" },
    { name: "C", mark: "C", detail: "Programming", tone: "blue" },
    { name: "Python", mark: "Py", detail: "Programming", tone: "blue" },
    { name: "PHP", mark: "Php", detail: "Server-side", tone: "violet" },
    { name: "HTML", mark: "5", detail: "Markup", tone: "coral" },
    { name: "SCSS", mark: "Sc", detail: "Stylesheets", tone: "violet" },
    { name: "Figma", mark: "Fg", detail: "Interface design", tone: "violet" },
    { name: "Git", mark: "Git", detail: "Version control", tone: "coral" },
];

export function AboutSkills() {
    const text = useSiteTranslations().about;
    const localizedSkills = skills.map((skill, index) => ({ ...skill, detail: text.skillDescriptions[index] }));

    return (
        <section className={style.skills} data-scroll-reveal>
            <header className={style.header} data-scroll-reveal>
                <h2>
                    <span className="cursor-light">{text.skillsTitle[0]}</span>
                    <span className="cursor-light">{text.skillsTitle[1]}</span>
                </h2>
            </header>

            <div className={style.grid}>
                {localizedSkills.map((skill) => (
                    <article className={`${style.card} cursor-reactive`} key={skill.name} data-scroll-reveal>
                        <div className={`${style.mark} ${style[skill.tone]}`} aria-hidden="true">
                            <span>{skill.mark}</span>
                        </div>
                        <h3 className="cursor-light">{skill.name}</h3>
                        <p>{skill.detail}</p>
                    </article>
                ))}
            </div>
        </section>
    );
}
