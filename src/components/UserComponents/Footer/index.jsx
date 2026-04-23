import './index.scss';
import logo1 from '../../../assets/logo1.png';
import logo2 from '../../../assets/logo2.png';
import logo3 from '../../../assets/logo3.png';
import logo4 from '../../../assets/logo4.png';

import { motion } from 'framer-motion';

function Footer() {
    return (
        <section id="footer">
            <div className="footer-content">

                {/* Quote — top left */}
                <motion.div 
                    className="footer-text"
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, ease: [0.33, 1, 0.68, 1] }}
                    viewport={{ once: true }}
                >
                    <p className="quote-text">
                        Inspired by nature.<br />
                        For climate. For our future.
                    </p>
                </motion.div>


                {/* Bottom block */}
                <div className="footer-bottom-block">
                    <motion.div 
                        className="footer-partners"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.2, ease: [0.33, 1, 0.68, 1] }}
                        viewport={{ once: true }}
                    >

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

                    </motion.div>

                    <div className="footer-copyright">
                        <p>© 2026 Ministry of Ecology and Natural Resources of Azerbaijan</p>
                    </div>
                </div>



            </div>
        </section>
    );
}

export default Footer;