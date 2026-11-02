"use client";

import style from "./main.module.scss";
import { useSiteTranslations } from "@/app/i18n/site-locale";

export function AboutJourney() {
    const text = useSiteTranslations().about;

    return (
        <section className={style.journey} data-scroll-reveal>
            <header className={style.header} data-scroll-reveal>
                <h2>
                    <span className="cursor-light">{text.journeyTitle[0]}</span>
                    <span className="cursor-light">{text.journeyTitle[1]}</span>
                </h2>
            </header>

            <div className={style.list}>
                {text.journey.map((entry) => (
                    <article className={`${style.card} cursor-reactive`} key={`${entry.title}-${entry.period}`} data-scroll-reveal>
                        <div className={style.content}>
                            <div className={style.meta}>
                                <h3 className="cursor-light">{entry.title}</h3>
                                <span className={style.place}>{entry.place}</span>
                            </div>
                            <p className="cursor-light">{entry.description}</p>
                            <time className={style.period}>{entry.period}</time>
                        </div>

                    </article>
                ))}
            </div>
        </section>
    );
}
