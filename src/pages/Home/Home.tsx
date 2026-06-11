import { Sections } from "./sections";
import { Component } from "@/components";

const Home = () => {
    return (
        <main>
            <Sections.Hero />
            <Component.Reveal><Sections.WorkGrid /></Component.Reveal>
            <Component.Reveal><Sections.About /></Component.Reveal>
            <Component.Reveal><Sections.CTA /></Component.Reveal>
        </main>
    )
}

export { Home }
