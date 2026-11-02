"use client";

import style from "./page.module.scss";
import { useSiteTranslations } from "@/app/i18n/site-locale";

type ExperienceEntry = {
    title: string;
    description: string;
    period: string;
};

type ExperienceData = {
    years?: string;
    entries?: ExperienceEntry[];
};

export function Experience({ data }: { data: ExperienceData }) {
    const text = useSiteTranslations().experience;
    const entries = data.entries ?? text.entries;

    return (
        <section className={style.experience} data-scroll-reveal>
            <div className={style.header} data-scroll-reveal>
                <h2>
                    <span className="cursor-light">{text.title[0]}</span>
                    <span className="cursor-light">{text.title[1]}</span>
                </h2>
            </div>

            <div className={style.list}>
                {entries.slice(0, 4).map((entry) => (
                    <article className={`${style.card} cursor-reactive`} key={`${entry.title}-${entry.period}`} data-scroll-reveal>
                        <div className={style.content}>
                            <h3 className="cursor-light">{entry.title}</h3>
                            <p className="cursor-light">{entry.description}</p>
                            <time className={style.period}>{entry.period}</time>
                        </div>

                        <div className={style.arrow} aria-hidden="true">
                            <svg viewBox="0 0 24 24" className={style.arrowIcon}>
                                <path d="M5 12h12" />
                                <path d="M13 5l7 7-7 7" />
                            </svg>
                        </div>
                    </article>
                ))}
            </div>
        </section>
    );
}