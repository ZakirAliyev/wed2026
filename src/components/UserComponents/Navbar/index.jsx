import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './index.scss';
import logo from "../../../assets/logo.webp";
import { HiOutlineArrowUpRight, HiOutlineBars3, HiOutlineXMark, HiOutlineSquares2X2, HiOutlineGlobeAlt, HiChevronDown } from 'react-icons/hi2';
import Countdown from '../Countdown';
import { useTranslation } from 'react-i18next';

function Navbar() {
    const { t, i18n } = useTranslation();
    const [menuOpen, setMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [langOpen, setLangOpen] = useState(false);
    const location = useLocation();
    const langRef = useRef(null);
    const isAboutPage = location.pathname === '/about';

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 400);
        };
        window.addEventListener('scroll', handleScroll);

        const handleClickOutside = (event) => {
            if (langRef.current && !langRef.current.contains(event.target)) {
                setLangOpen(false);
            }
        };
        window.addEventListener('mousedown', handleClickOutside);

        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
        setLangOpen(false);
    };

    const currentLang = i18n.language.split('-')[0];

    return (
        <section id="navbar" className={scrolled ? 'scrolled' : ''}>
            <div className="container">
                <nav>
                    <div className="branding">
                        <Link to="/">
                            <img src={logo} alt="Logo" />
                        </Link>
                    </div>

                    <div className="navbar-countdown-wrapper">
                        {!isAboutPage && <Countdown />}
                    </div>

                    <div className="nav-actions">
                        {/* Desktop link + Language Icon */}
                        <div className="about desktop-only">
                            <Link to={isAboutPage ? "/" : "/about"}>
                                <span>{isAboutPage ? t('navbar.home') : t('navbar.aboutEvent')}</span>
                            </Link>
                            
                            <div className="lang-trigger-wrapper" ref={langRef}>
                                <button className="lang-icon-btn" onClick={() => setLangOpen(!langOpen)}>
                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M18.125 10C18.125 12.1549 17.269 14.2215 15.7452 15.7452C14.2215 17.269 12.1549 18.125 10 18.125M18.125 10C18.125 7.84512 17.269 5.77849 15.7452 4.25476C14.2215 2.73102 12.1549 1.875 10 1.875M18.125 10C18.125 12.0712 14.4875 13.75 10 13.75C5.5125 13.75 1.875 12.0712 1.875 10M18.125 10C18.125 7.92875 14.4875 6.25 10 6.25C5.5125 6.25 1.875 7.92875 1.875 10M10 18.125C7.84512 18.125 5.77849 17.269 4.25476 15.7452C2.73102 14.2215 1.875 12.1549 1.875 10M10 18.125C12.0712 18.125 13.75 14.4875 13.75 10C13.75 5.5125 12.0712 1.875 10 1.875M10 18.125C7.92875 18.125 6.25 14.4875 6.25 10C6.25 5.5125 7.92875 1.875 10 1.875M10 1.875C7.84512 1.875 5.77849 2.73102 4.25476 4.25476C2.73102 5.77849 1.875 7.84512 1.875 10" stroke="white"/>
                                    </svg>
                                </button>

                                {langOpen && (
                                    <div className="lang-dropdown">
                                        <button onClick={() => changeLanguage('az')} className={currentLang === 'az' ? 'active' : ''}>
                                            Azerbaijani
                                        </button>
                                        <button onClick={() => changeLanguage('en')} className={currentLang === 'en' ? 'active' : ''}>
                                            English
                                        </button>
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* Mobile hamburger */}
                        <button
                            className="hamburger"
                            onClick={() => setMenuOpen(!menuOpen)}
                            aria-label="Toggle menu"
                        >
                            {menuOpen ? <HiOutlineXMark /> : <HiOutlineBars3 />}
                        </button>
                    </div>
                </nav>

                {/* Mobile dropdown menu */}
                {menuOpen && (
                    <div className="mobile-menu">
                        <Link to={isAboutPage ? "/" : "/about"} onClick={() => setMenuOpen(false)}>
                            <span>{isAboutPage ? t('navbar.home') : t('navbar.aboutEvent')}</span>
                            {isAboutPage ? <HiOutlineSquares2X2 /> : <HiOutlineArrowUpRight />}
                        </Link>
                    </div>
                )}
            </div>
        </section>
    );
}

export default Navbar;