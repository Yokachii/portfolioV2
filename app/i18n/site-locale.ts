"use client";

import { useParams } from "next/navigation";
import { locales, translations, type Locale } from "./translations";

export function useSiteLocale(): Locale {
    const params = useParams<{ lang: string }>();
    return locales.includes(params.lang as Locale) ? params.lang as Locale : "en";
}

export function useSiteTranslations() {
    return translations[useSiteLocale()];
}
