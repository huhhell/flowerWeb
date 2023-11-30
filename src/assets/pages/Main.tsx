import Intro from "../components/Intro/Intro.tsx";
import AboutUs from "../components/AboutUs/AboutUs.tsx";
import WhyUs from "../components/WhuUs/WhyUs.tsx";
import Contact from "../components/Contact/Contact.tsx";
import Wedding from "../components/Wedding/Wedding.tsx";
import Reviews from "../components/Reviews/Reviews.tsx";

export default function Main() {
    return <>
        <Intro />
        <AboutUs />
        <WhyUs />
        <Contact />
        <Wedding />
        <Reviews />
    </>
}