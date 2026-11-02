'use client';

import { InfoCard } from "@/app/component/portfolio/portfolio1/info_card/main";
import { SliderPart } from "@/app/component/portfolio/portfolio1/presentation/main";
import { Tools } from "@/app/component/portfolio/portfolio1/presentation/tools/main";
import { Projects } from "@/app/component/portfolio/portfolio1/presentation/projects/main";
import { Home } from "@/app/component/portfolio/portfolio1/presentation/home/main";
import { Experience } from "@/app/component/portfolio/portfolio1/presentation/experience/main";
import { Contact } from "@/app/component/portfolio/portfolio1/presentation/contact/main";
import style from "@/app/(site)/portfolio/page.module.scss";

export default function PortfolioPage() {
    return (
        <div className={style.portfolio}>
            <div className={style.presentation}>
                <div className={style.card_container}>
                    <InfoCard data={{ name: "Deconinck Elliot" }} />
                </div>
                <div className={style.slider_container}>
                    <SliderPart data={{}}>
                        <Home data={{}} />
                        <Projects />
                        <Experience data={{}} />
                        <Tools />
                    </SliderPart>
                </div>
            </div>
            <Contact />
        </div>
    );
}
