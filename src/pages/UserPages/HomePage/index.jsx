import Navbar from "../../../components/UserComponents/Navbar/index.jsx";
import Footer from "../../../components/UserComponents/Footer/index.jsx";
import Hero from "../../../components/UserComponents/Hero/index.jsx";
import Themes from "../../../components/UserComponents/Themes/index.jsx";
import Announcement from "../../../components/UserComponents/Announcement/index.jsx";
import JoinMovement from "../../../components/UserComponents/JoinMovement/index.jsx";
import "./index.scss";

function HomePage() {
    return (
        <div id="homePage">
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