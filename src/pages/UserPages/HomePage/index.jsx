import Navbar from "../../../components/UserComponents/Navbar/index.jsx";
import Footer from "../../../components/UserComponents/Footer/index.jsx";
import Hero from "../../../components/UserComponents/Hero/index.jsx";
import Themes from "../../../components/UserComponents/Themes/index.jsx";
import Announcement from "../../../components/UserComponents/Announcement/index.jsx";
import JoinMovement from "../../../components/UserComponents/JoinMovement/index.jsx";
import SEO from "../../../components/SEO/index.jsx";
import "./index.scss";

function HomePage() {
    return (
        <div id="homePage">
            <SEO 
                title="Home"
                description="Join the global call for climate action and sustainability at World Environment Day 2026 in Baku, Azerbaijan."
                canonical="https://wed2026.az/"
            />
            <section id="heroSection">
                <Navbar />
                <Hero />
            </section>
            <main id="mainContent">
                <Themes />
                <Announcement />
                <JoinMovement />
                <Footer />
            </main>
        </div>


    );
}

export default HomePage;