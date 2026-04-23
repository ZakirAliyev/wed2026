import './index.scss';
import footerLogos from '../../../assets/logolar.png';

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
                        viewport={{ once: false }}
                    >
                        <div className="partner-combined-logos">
                            <img src={footerLogos} alt="Partners" />
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