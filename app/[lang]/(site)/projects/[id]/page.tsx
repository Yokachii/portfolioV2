import Link from "next/link";
import { notFound } from "next/navigation";
import { BlogHeader } from "@/app/component/blog/header";
import { BlogMain } from "@/app/component/blog/textField";
import { ScrollReveal } from "@/app/component/blog/scrollReveal/main";
import { blogsDatas } from "@/app/data/blog";
import { locales, translations, type Locale } from "@/app/i18n/translations";
import style from "@/app/(site)/projects/[id]/page.module.scss";

export default async function ProjectPage({
    params,
}: {
    params: Promise<{ lang: string; id: string }>;
}) {
    const { lang, id } = await params;
    if (!locales.includes(lang as Locale)) notFound();

    const locale = lang as Locale;
    const project = blogsDatas[id];
    if (!project) notFound();

    const data = project[locale];
    const text = translations[locale].projectDetail;

    return (
        <div className={style.project}>
            <div className={style.content}>
                <Link href={`/${locale}/projects`} className={`cursor-light ${style.backLink}`}>
                    <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M15 5l-7 7 7 7" /></svg>
                    {text.back}
                </Link>
                <BlogHeader data={data.header} date={project.createdAt} tags={project.tags} locale={locale} />
                <ScrollReveal><BlogMain data={data.main} /></ScrollReveal>
            </div>
        </div>
    );
}
