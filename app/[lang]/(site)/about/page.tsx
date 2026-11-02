"use client";

import type { CSSProperties } from "react";
import { SliderPart } from "@/app/component/portfolio/portfolio1/presentation/main";
import { AboutIntro } from "@/app/component/portfolio/portfolio1/presentation/about/intro/main";
import { AboutJourney } from "@/app/component/portfolio/portfolio1/presentation/about/journey/main";
import { AboutSkills } from "@/app/component/portfolio/portfolio1/presentation/about/skills/main";
import { Contact } from "@/app/component/portfolio/portfolio1/presentation/contact/main";
import { useSiteTranslations } from "@/app/i18n/site-locale";
import style from "@/app/(site)/about/page.module.scss";

export default function About() {
    const text = useSiteTranslations().about;

    return (
        <div className={style.about}>
            <div className={style.content}>
                <div style={{ height: "100vh" }}>
                    <h1 aria-label={text.title.join(" ")}>
                        {text.title.map((line, lineIndex) => (
                            <span className={`cursor-light ${style.titleLine}`} aria-hidden="true" key={line}>
                                {Array.from(line).map((letter, index) => (
                                    <span
                                        className={style.titleLetter}
                                        style={{ "--letter-index": lineIndex * 5 + index } as CSSProperties}
                                        key={`${lineIndex}-${index}`}
                                    >
                                        {letter === " " ? "\u00A0" : letter}
                                    </span>
                                ))}
                            </span>
                        ))}
                    </h1>
                    <p className={`cursor-light ${style.lead}`}>{text.lead}</p>
                </div>
                <div className={style.slider_container}>
                    <SliderPart data={{}}>
                        <AboutIntro />
                        <AboutJourney />
                        <AboutSkills />
                    </SliderPart>
                </div>
            </div>
            <Contact />
        </div>
    );
}
