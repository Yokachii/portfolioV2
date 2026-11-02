import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { locales, type Locale } from "../i18n/translations";

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
    const { lang } = await params;
    if (!locales.includes(lang as Locale)) notFound();

    return lang === "fr"
        ? { title: "Elliot Deconinck — Portfolio", description: "Portfolio d'Elliot Deconinck, développeur logiciel et systèmes embarqués." }
        : { title: "Elliot Deconinck — Portfolio", description: "Portfolio of Elliot Deconinck, software and embedded systems developer." };
}

export function generateStaticParams() {
    return locales.map((lang) => ({ lang }));
}

export default async function LocaleLayout({
    children,
    params,
}: Readonly<{
    children: React.ReactNode;
    params: Promise<{ lang: string }>;
}>) {
    const { lang } = await params;
    if (!locales.includes(lang as Locale)) notFound();

    return children;
}
