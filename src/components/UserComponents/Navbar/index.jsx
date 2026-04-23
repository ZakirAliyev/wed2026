import { useState } from 'react';
import './index.scss';
import logo from "../../../assets/logo.png";
import { HiOutlineArrowUpRight, HiOutlineBars3, HiOutlineXMark } from 'react-icons/hi2';
import Countdown from '../Countdown';

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <section id="navbar">
            <div className="container">
                <nav>
                    <div className="branding">
                        <img src={logo} alt="Logo" />
                    </div>

                    <Countdown />

                    {/* Desktop about link */}
                    <div className="about desktop-only">
                        <a href="#">
                            <span>About event</span>
                            <HiOutlineArrowUpRight />
                        </a>
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
                        <a href="#" onClick={() => setMenuOpen(false)}>
                            <span>About event</span>
                            <HiOutlineArrowUpRight />
                        </a>
                    </div>
                )}
            </div>
        </section>
    );
}

export default Navbar;