"use client";

import Image from "next/image";
import style from "./page.module.scss";
import { useSiteLocale, useSiteTranslations } from "@/app/i18n/site-locale";

type ProjectItem = {
    title: string;
    description: string;
    image: string;
    href: string;
};

export function Projects() {
    const locale = useSiteLocale();
    const text = useSiteTranslations().projectHighlights;
    const projects: ProjectItem[] = text.items.map((item) => ({
        ...item,
        href: item.href.startsWith("/projects/") ? `/${locale}${item.href}` : item.href,
    }));

    return (
        <section className={style.projects} data-scroll-reveal>
            <div className={style.header} data-scroll-reveal>
                <h2>
                    <span className="cursor-light">{text.title[0]}</span>
                    <span className="cursor-light">{text.title[1]}</span>
                </h2>
            </div>

            <div className={style.list}>
                {projects.map((project) => (
                    <a key={project.title} href={project.href} className={`${style.card} cursor-reactive`} data-scroll-reveal>
                        <div className={style.imageWrap}>
                            <Image src={project.image} alt={project.title} width={900} height={600} />
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