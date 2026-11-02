'use client'

import type { CSSProperties } from "react";
import { useSiteTranslations } from "@/app/i18n/site-locale";
import style from "./page.module.scss";

export function Home({data}:{data:Record<string, unknown>}){

    const {} = data;
    const text = useSiteTranslations().home;

    return (
        <div className={style.main}>
            <div className={style.presentation}>
                
                <h1 aria-label={text.title.join(" ")}>
                    <span className={`cursor-light ${style.titleLine}`} aria-hidden="true">
                        {Array.from(text.title[0]).map((letter, index) => (
                            <span
                                className={style.titleLetter}
                                style={{ "--letter-index": index } as CSSProperties}
                                key={`software-${index}`}
                            >
                                {letter}
                            </span>
                        ))}
                    </span>
                    <span className={`cursor-light ${style.titleLine}`} aria-hidden="true">
                        {Array.from(text.title[1]).map((letter, index) => (
                            <span
                                className={style.titleLetter}
                                style={{ "--letter-index": index + 8 } as CSSProperties}
                                key={`engineer-${index}`}
                            >
                                {letter}
                            </span>
                        ))}
                    </span>
                </h1>

                <h3 className="cursor-light">{text.description}</h3>
            </div>

            <div className={style.badges}>
                <div>
                    <h2 className="cursor-reactive cursor-light">+8</h2>
                    <h4 className="cursor-light">{text.experience}</h4>
                </div>

                <div>
                    <h2 className="cursor-reactive cursor-light">+15</h2>
                    <h4 className="cursor-light">{text.projects}</h4>
                </div>
            </div>
        </div>
    );

};