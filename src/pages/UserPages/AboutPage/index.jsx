import Navbar from "../../../components/UserComponents/Navbar/index.jsx";
import Footer from "../../../components/UserComponents/Footer/index.jsx";
import AboutHero from "../../../components/UserComponents/AboutHero/index.jsx";
import AboutEvent from "../../../components/UserComponents/AboutEvent/index.jsx";
import ContactUs from "../../../components/UserComponents/ContactUs/index.jsx";
import "./index.scss";

function AboutPage() {
    return (
        <div id="aboutPage">
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
