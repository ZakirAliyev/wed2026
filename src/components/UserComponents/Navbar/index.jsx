import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './index.scss';
import logo from "../../../assets/logo.png";
import { HiOutlineArrowUpRight, HiOutlineBars3, HiOutlineXMark, HiOutlineSquares2X2 } from 'react-icons/hi2';
import Countdown from '../Countdown';

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();
    const isAboutPage = location.pathname === '/about';

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 400) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <section id="navbar" className={scrolled ? 'scrolled' : ''}>
            <div className="container">
                <nav>
                    <div className="branding">
                        <Link to="/">
                            <img src={logo} alt="Logo" />
                        </Link>
                    </div>

                    {!isAboutPage && <Countdown />}

                    {/* Desktop link */}
                    <div className="about desktop-only">
                        <Link to={isAboutPage ? "/" : "/about"}>
                            <span>{isAboutPage ? "Home page" : "About event"}</span>
                            {isAboutPage ? <HiOutlineSquares2X2 /> : <HiOutlineArrowUpRight />}
                        </Link>
                    </div>

                    {/* Mobile hamburger */}
                    <button
                        className="hamburger"
                        onClick={() => setMenuOpen(!menuOpen)}
                        aria-label="Toggle menu"
                    >
                        {menuOpen ? <HiOutlineXMark /> : <HiOutlineBars3 />}
                    </button>
                </nav>

                {/* Mobile dropdown menu */}
                {menuOpen && (
                    <div className="mobile-menu">
                        <Link to={isAboutPage ? "/" : "/about"} onClick={() => setMenuOpen(false)}>
                            <span>{isAboutPage ? "Home page" : "About event"}</span>
                            {isAboutPage ? <HiOutlineSquares2X2 /> : <HiOutlineArrowUpRight />}
                        </Link>
                    </div>
                )}
            </div>
        </section>
    );
}

export default Navbar;