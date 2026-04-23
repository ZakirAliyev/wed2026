import './index.scss';
import iamge1 from '../../../assets/balacaSekil.webp';

import { motion } from 'framer-motion';

import { useMediaQuery } from "react-responsive";

import { useTranslation } from 'react-i18next';

function AboutEvent() {
    const { t } = useTranslation();
    const isMobile = useMediaQuery({ maxWidth: "768px" });

    return (
        <section id="aboutEvent">
            <div className="container">
                <div className="about-grid">
                    <motion.div 
                        className="text-side"
                        initial={{ opacity: 0, x: isMobile ? 0 : -50, y: isMobile ? 20 : 0 }}
                        whileInView={{ opacity: 1, x: 0, y: 0 }}
                        transition={{ duration: isMobile ? 0.6 : 1, ease: [0.33, 1, 0.68, 1] }}
                        viewport={{ once: false }}
                    >
                        <h2>{t('aboutEvent.title')}</h2>
                        <p>
                            {t('aboutEvent.description1')}
                            <br /><br />
                            {t('aboutEvent.description2')}
                            <br /><br />
                            {t('aboutEvent.description3')}
                        </p>
                    </motion.div>
                    <motion.div 
                        className="image-side"
                        initial={{ opacity: 0, x: isMobile ? 0 : 50, y: isMobile ? 20 : 0 }}
                        whileInView={{ opacity: 1, x: 0, y: 0 }}
                        transition={{ duration: isMobile ? 0.6 : 1, ease: [0.33, 1, 0.68, 1] }}
                        viewport={{ once: false }}
                    >
                        <div className="circular-logo-wrap">
                            {/* Using main logo as placeholder, styled in SCSS to look like wood-carved */}
                            <img src={iamge1} alt="WED logo" />
                        </div>
                    </motion.div>




                </div>
            </div>
        </section>
    );
}

export default AboutEvent;
