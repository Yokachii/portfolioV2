"use client";

import { ChangeEvent, CSSProperties, useMemo, useState } from "react";
import { blogsDatas } from "@/app/data/blog";
import { useSiteLocale, useSiteTranslations } from "@/app/i18n/site-locale";
import { translateProjectTag } from "@/app/i18n/translations";
import Image from "next/image";
import style from "@/app/(site)/projects/page.module.scss";

type SortOrder = "newest" | "oldest";

const projects = Object.entries(blogsDatas).map(([id, project]) => ({ id, ...project }));

export default function ProjectIndexPage() {
    const locale = useSiteLocale();
    const text = useSiteTranslations().projectIndex;
    const [query, setQuery] = useState("");
    const [selectedTag, setSelectedTag] = useState("all");
    const [sortOrder, setSortOrder] = useState<SortOrder>("newest");

    const tags = useMemo(
        () => Array.from(new Set(projects.flatMap((project) => project.tags))).sort(),
        [],
    );

    const localizedProjects = useMemo(
        () => projects.map((project) => ({
            ...project,
            header: project[locale].header,
        })),
        [locale],
    );

    const filteredProjects = useMemo(() => {
        const normalizedQuery = query.trim().toLowerCase();
        return localizedProjects
            .filter((project) => {
                const searchableTags = project.tags.map((tag) => translateProjectTag(locale, tag)).join(" ");
                const searchableText = `${project.header.title} ${project.header.description} ${searchableTags}`.toLowerCase();
                return (!normalizedQuery || searchableText.includes(normalizedQuery))
                    && (selectedTag === "all" || project.tags.includes(selectedTag));
            })
            .sort((first, second) => {
                const difference = new Date(first.createdAt).getTime() - new Date(second.createdAt).getTime();
                return sortOrder === "newest" ? -difference : difference;
            });
    }, [localizedProjects, locale, query, selectedTag, sortOrder]);

    function handleQueryChange(event: ChangeEvent<HTMLInputElement>) {
        setQuery(event.target.value);
    }

    return (
        <div className={style.about}>
            <div className={style.content}>
                <header className={style.intro}>
                    <h1 aria-label={text.title.join(" ")}>
                        {text.title.map((line, lineIndex) => (
                            <span className={`cursor-light ${style.titleLine}`} aria-hidden="true" key={line}>
                                {Array.from(line).map((letter, index) => (
                                    <span className={style.titleLetter} style={{ "--letter-index": lineIndex * 12 + index } as CSSProperties} key={`${lineIndex}-${index}`}>
                                        {letter === " " ? "\u00A0" : letter}
                                    </span>
                                ))}
                            </span>
                        ))}
                    </h1>
                    <p className={`cursor-light ${style.lead}`}>{text.lead}</p>
                </header>

                <div className={style.listing}>
                    <div className={style.toolbar} role="search" aria-label={text.filterLabel}>
                        <label className={style.searchLabel}>
                            <span className={`cursor-light ${style.controlLabel}`}>{text.searchLabel}</span>
                            <input type="search" value={query} onChange={handleQueryChange} placeholder={text.searchPlaceholder} />
                        </label>
                        <label>
                            <span className={`cursor-light ${style.controlLabel}`}>{text.sortLabel}</span>
                            <select value={sortOrder} onChange={(event) => setSortOrder(event.target.value as SortOrder)}>
                                <option value="newest">{text.newest}</option>
                                <option value="oldest">{text.oldest}</option>
                            </select>
                        </label>
                    </div>

                    <div className={style.tags} aria-label={text.categoriesLabel}>
                        <button
                            type="button"
                            className={`cursor-reactive cursor-light ${selectedTag === "all" ? style.activeTag : ""}`.trim()}
                            aria-pressed={selectedTag === "all"}
                            onClick={() => setSelectedTag("all")}
                        >
                            {text.allProjects}
                        </button>
                        {tags.map((tag) => (
                            <button
                                type="button"
                                key={tag}
                                className={`cursor-reactive cursor-light ${selectedTag === tag ? style.activeTag : ""}`.trim()}
                                aria-pressed={selectedTag === tag}
                                onClick={() => setSelectedTag(tag)}
                            >
                                {translateProjectTag(locale, tag)}
                            </button>
                        ))}
                    </div>

                    <p className={`cursor-light ${style.resultCount}`}>
                        {filteredProjects.length} {filteredProjects.length === 1 ? text.resultSingular : text.resultPlural}
                    </p>

                    <div className={style.projectGrid}>
                        {filteredProjects.map((project) => (
                            <article className={style.projectCard} key={project.id}>
                                <a href={project.url ?? `/${locale}/projects/${project.id}`} className={style.imageLink} tabIndex={-1} aria-hidden="true">
                                    <Image src={project.coverImage} alt="" width={900} height={506} />
                                </a>
                                <div className={style.cardBody}>
                                    <time className="cursor-light" dateTime={project.createdAt}>
                                        {new Date(project.createdAt).toLocaleDateString(locale === "fr" ? "fr-FR" : "en-US", { year: "numeric", month: "long", day: "numeric" })}
                                    </time>
                                    <h2 className="cursor-light">
                                        <a href={`/${locale}/projects/${project.id}`}>{project.header.title}</a>
                                    </h2>
                                    <p className="cursor-light">{project.header.description}</p>
                                    <div className={style.cardTags}>
                                        {project.tags.map((tag) => <span key={tag}>{translateProjectTag(locale, tag)}</span>)}
                                    </div>
                                </div>
                            </article>
                        ))}
                    </div>

                    {filteredProjects.length === 0 && <p className={`cursor-light ${style.emptyState}`}>{text.empty}</p>}
                </div>
            </div>
        </div>
    );
}
