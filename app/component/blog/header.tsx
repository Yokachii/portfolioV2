'use client'

import React from "react";
import { HeaderType } from "@/app/types/blog";
import type { Locale } from "@/app/i18n/translations";
import { translateProjectTag } from "@/app/i18n/translations";
import style from "./main.module.scss";

export function BlogHeader({ data, date, tags, locale = "fr" }: { data: HeaderType; date?: string; tags?: string[]; locale?: Locale }) {

    const { description, title } = data;

    return (
        <header className={style.blogHeader}>
            {(date || tags?.length) && (
                <div className={style.blogMeta}>
                    {date && (
                        <time className="cursor-light" dateTime={date}>
                            {new Date(date).toLocaleDateString(locale === "fr" ? "fr-FR" : "en-US", { year: "numeric", month: "long", day: "numeric" })}
                        </time>
                    )}
                    {tags?.length ? (
                        <div className={style.blogTags}>
                            {tags.map((tag) => <span key={tag}>{translateProjectTag(locale, tag)}</span>)}
                        </div>
                    ) : null}
                </div>
            )}
            <h1 className={`cursor-light ${style.bigblogtitle}`}>{title}</h1>
            <h2 className={`cursor-light ${style.blogdescription}`}>{description}</h2>
        </header>
    );

};