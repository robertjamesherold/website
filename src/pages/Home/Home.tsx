import { Sections } from "./sections";

const Home = () => {
    return (
        <main>
            <Sections.Hero />
            <Sections.WorkGrid />
            <Sections.About />
            <Sections.CTA />
        </main>
    )
}

export { Home }