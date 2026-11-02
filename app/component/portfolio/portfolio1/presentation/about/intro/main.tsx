"use client";

import style from "./main.module.scss";
import { useSiteTranslations } from "@/app/i18n/site-locale";

export function AboutIntro() {
    const text = useSiteTranslations().about;
    const stats = text.stats.map((label, index) => ({ value: ["8+", "15+", "3"][index], label }));

    return (
        <section className={style.intro} data-scroll-reveal>
            <header className={style.header} data-scroll-reveal>
                <h2>
                    <span className="cursor-light">{text.introTitle[0]}</span>
                    <span className="cursor-light">{text.introTitle[1]}</span>
                </h2>
            </header>

            <div className={style.body}>
                <div className={style.text} data-scroll-reveal>
                    <p className="cursor-light">
                        {text.paragraphs[0]}
                    </p>
                    <p className="cursor-light">
                        {text.paragraphs[1]}
                    </p>
                </div>

                <div className={style.stats} data-scroll-reveal>
                    {stats.map((stat) => (
                        <div className={style.stat} key={stat.label}>
                            <h3 className="cursor-reactive cursor-light">{stat.value}</h3>
                            <p className="cursor-light">{stat.label}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
