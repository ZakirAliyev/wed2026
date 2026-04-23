import './index.scss';
import { HiOutlineArrowUpRight } from 'react-icons/hi2';

import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

function Announcement() {
    const { t } = useTranslation();
    const fadeUp = {
        hidden: { opacity: 0, y: 30 },
        visible: { 
            opacity: 1, 
            y: 0,
            transition: { duration: 0.8, ease: [0.33, 1, 0.68, 1] }
        }
    };

    return (
        <section id="announcement">
            <div className="container">
                <motion.div 
                    className="announcement-inner"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, margin: "-100px" }}
                >
                    <motion.div className="badge-row" variants={fadeUp}>
                        <span className="line"></span>
                        {t('announcement.badge')}
                    </motion.div>
                    <motion.h2 variants={fadeUp}>{t('announcement.title')}</motion.h2>
                    <motion.p variants={fadeUp}>
                        {t('announcement.description')}
                    </motion.p>

                    <motion.a href="#" className="cta-btn" variants={fadeUp}>
                        <span>{t('announcement.readMore')}</span>
                        <HiOutlineArrowUpRight />
                    </motion.a>
                </motion.div>





            </div>
        </section>
    );
}

export default Announcement;
