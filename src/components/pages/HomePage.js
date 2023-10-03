import Hero from "../sections/homePage/Hero";
import Specials from "../sections/homePage/Specials";
import Testimonials from "../sections/homePage/Testimonials";
import About from "../sections/homePage/About";


export default function HomePage() {
    return (
        <>
            <main>
                <Hero />
                <Specials />
                <Testimonials />
                <About />
            </main>
        </>
    );
}

