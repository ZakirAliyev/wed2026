import './index.scss';
import footerLogos from '../../../assets/Group 1.png';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

// English assets
import footerEng from '../../../assets/1920 1080.png';
import mobileEng from '../../../assets/9-16. 2.png';

// Azerbaijani assets
import webAz from '../../../assets/AZ.png';
import mobileAz from '../../../assets/9-16 AZ.png';

function Footer() {
    const { t, i18n } = useTranslation();
    const isAz = i18n.language === 'az';
    
    const desktopBg = isAz ? webAz : footerEng;
    const mobileBg = isAz ? mobileAz : mobileEng;

    return (
        <section 
            id="footer"
            style={{ 
                '--footer-bg': `url("${desktopBg}")`, 
                '--footer-mob-bg': `url("${mobileBg}")` 
            }}
        >
            <div className="footer-content">

                {/* Quote — top left */}
                <motion.div 
                    className="footer-text"
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, ease: [0.33, 1, 0.68, 1] }}
                    viewport={{ once: true }}
                >
        
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
                        <a href="https://eco.gov.az/" target="_blank" rel="noopener noreferrer">
                            <p>{t('footer.copyright')}</p>
                        </a>
                    </div>
                </div>



            </div>
        </section>
    );
}

export default Footer;
