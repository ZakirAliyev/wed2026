import Navbar from "../../../components/UserComponents/Navbar/index.jsx";
import Footer from "../../../components/UserComponents/Footer/index.jsx";
import AboutHero from "../../../components/UserComponents/AboutHero/index.jsx";
import AboutEvent from "../../../components/UserComponents/AboutEvent/index.jsx";
import ContactUs from "../../../components/UserComponents/ContactUs/index.jsx";
import SEO from "../../../components/SEO/index.jsx";
import "./index.scss";

function AboutPage() {
    return (
        <div id="aboutPage">
            <SEO 
                title="About Event"
                description="Learn about the mission, goals, and international cooperation behind World Environment Day 2026 in Baku."
                canonical="https://wed2026.az/about"
            />
            <section id="aboutHeroSection">
                <Navbar />
                <AboutHero />
            </section>
            <main id="aboutMainContent">
                <AboutEvent />
                <ContactUs />
                <Footer />
            </main>
        </div>


    );
}

export default AboutPage;
