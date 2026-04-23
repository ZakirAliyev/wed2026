import './index.scss';
import logo1 from '../../../assets/logo1.png';
import logo2 from '../../../assets/logo2.png';
import logo3 from '../../../assets/logo3.png';
import logo4 from '../../../assets/logo4.png';

function Footer() {
    return (
        <section id="footer">
            <div className="footer-content">

                {/* Quote — top left */}
                <div className="footer-text">
                    <p className="quote-text">
                        Inspired by nature.<br />
                        For climate. For our future.
                    </p>
                </div>

                {/* Bottom block */}
                <div className="footer-bottom-block">
                    <div className="footer-partners">

                        <div className="partner-logo-item">
                            <img src={logo1} alt="#ClimateAction" />
                        </div>

                        <span className="sep">|</span>

                        <div className="partner-logo-item">
                            <img src={logo2} alt="World Environment Day" />
                        </div>

                        <span className="sep">|</span>

                        <div className="partner-logo-item">
                            <img src={logo3} alt="UN Environment Programme" />
                        </div>

                        <span className="sep">|</span>

                        <div className="partner-logo-item">
                            <img src={logo4} alt="Azerbaijan Baku 2026" />
                        </div>

                    </div>

                    <div className="footer-copyright">
                        <p>© 2026 Ministry of Ecology and Natural Resources of Azerbaijan</p>
                    </div>
                </div>

            </div>
        </section>
    );
}

export default Footer;