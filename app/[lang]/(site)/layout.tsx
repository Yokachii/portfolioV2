'use client';

import { Suspense, useEffect, useRef, useState } from "react";
import type { CSSProperties } from "react";
import { usePathname, useRouter } from "next/navigation";
import { CursorFollower } from "@/app/component/portfolio/portfolio1/cursor_follower/main";
import { PortfolioNav, type PortfolioNavItem } from "@/app/component/portfolio/portfolio1/navigation/main";
import { NavParamSync, PageTransitionProvider, usePageTransition } from "@/app/(site)/transition-context";
import { useSiteLocale, useSiteTranslations } from "@/app/i18n/site-locale";
import style from "@/app/(site)/layout.module.scss";

function resolveActiveNavId(pathname: string): string | null {
    const normalized = pathname.replace(/^\/(en|fr)(?=\/|$)/, "").replace(/\/+$/, "") || "/";
    if (normalized === "/projects") return "projects";
    if (normalized === "/about") return "about";
    if (normalized === "/" || normalized === "/portfolio") return "portfolio";
    return null;
}

const NAV_LOAD_DELAY: Record<string, string> = {
    home: "5500ms",
    portfolio: "5500ms",
    projects: "2200ms",
    about: "2000ms",
    default: "2200ms",
};

function ShellChrome({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();
    const router = useRouter();
    const locale = useSiteLocale();
    const text = useSiteTranslations();
    const { isLeaving, hasLoadedFromNav, phase, navigate } = usePageTransition();
    const [isLoaded, setIsLoaded] = useState(false);
    const [isNavVisible, setIsNavVisible] = useState(true);
    const lastScrollY = useRef(0);

    useEffect(() => {
        const frame = window.requestAnimationFrame(() => setIsLoaded(true));
        return () => window.cancelAnimationFrame(frame);
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            const shouldHide = currentScrollY > 24 && currentScrollY > lastScrollY.current;
            setIsNavVisible(!shouldHide);
            lastScrollY.current = currentScrollY;
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        handleScroll();
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    useEffect(() => {
        document.documentElement.lang = locale;
    }, [locale]);

    const activeNavId = resolveActiveNavId(pathname);
    const chromeReady = isLoaded || hasLoadedFromNav;
    const navDelay = NAV_LOAD_DELAY[activeNavId ?? "default"] ?? NAV_LOAD_DELAY.default;
    const prefix = `/${locale}`;
    const navItems: PortfolioNavItem[] = [
        {
            id: "projects",
            label: text.navigation.projects,
            href: `${prefix}/projects`,
            icon: <svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3.5" y="4.5" width="7" height="7" rx="1.5" /><rect x="13.5" y="4.5" width="7" height="4.5" rx="1.5" /><rect x="13.5" y="13.5" width="7" height="6" rx="1.5" /><rect x="3.5" y="13.5" width="7" height="6" rx="1.5" /></svg>,
        },
        {
            id: "portfolio",
            label: text.navigation.portfolio,
            href: `${prefix}`,
            icon: <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 8.5A2.5 2.5 0 0 1 6.5 6h11A2.5 2.5 0 0 1 20 8.5v7A2.5 2.5 0 0 1 17.5 18h-11A2.5 2.5 0 0 1 4 15.5v-7Z" /><path d="M8 6V4.5A1.5 1.5 0 0 1 9.5 3h5A1.5 1.5 0 0 1 16 4.5V6" /><path d="M8 12h8" /></svg>,
        },
        {
            id: "about",
            label: text.navigation.about,
            href: `${prefix}/about`,
            icon: <svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="8" r="3.5" /><path d="M5 19.5c.9-2.9 3.2-4.5 7-4.5s6.1 1.6 7 4.5" /></svg>,
        },
    ];

    const handleNavigate = (href: string) => {
        if (href === pathname) return false;
        navigate(href);
        return true;
    };

    return (
        <div className={style.shell} style={{ "--nav-load-delay": navDelay } as CSSProperties}>
            <CursorFollower />
            <div className={`${style.navShell} ${chromeReady ? style.loaded : ""} ${hasLoadedFromNav ? style.instant : ""}`}>
                <PortfolioNav
                    items={navItems}
                    ariaLabel={text.navigation.label}
                    currentPage={activeNavId ?? undefined}
                    isVisible={isNavVisible}
                    onNavigate={handleNavigate}
                />
            </div>
            <div className={`${style.languageShell} ${chromeReady ? style.loaded : ""} ${hasLoadedFromNav ? style.instant : ""}`}>
                <label className={`${style.languageControl} cursor-light`}>
                    <span className={style.visuallyHidden}>{text.chooseLanguage}</span>
                    <select
                        aria-label={text.chooseLanguage}
                        value={locale}
                        onChange={(event) => {
                            const nextLocale = event.target.value;
                            const route = pathname.replace(/^\/(en|fr)(?=\/|$)/, "") || "";
                            router.push(`/${nextLocale}${route}`);
                        }}
                    >
                        <option value="en">English</option>
                        <option value="fr">Français</option>
                    </select>
                    <svg viewBox="0 0 16 16" aria-hidden="true"><path d="m4 6 4 4 4-4" /></svg>
                </label>
            </div>
            <div className={style.background}></div>
            <Suspense fallback={null}><NavParamSync /></Suspense>
            <div className={`${style.page}${isLeaving ? ` ${style.pageLeaving}` : ""}`} data-transition={phase}>
                <div key={pathname} className={hasLoadedFromNav ? style.pageEntering : undefined}>
                    {children}
                </div>
            </div>
        </div>
    );
}

export default function SiteLayout({ children }: { children: React.ReactNode }) {
    return <PageTransitionProvider><ShellChrome>{children}</ShellChrome></PageTransitionProvider>;
}
