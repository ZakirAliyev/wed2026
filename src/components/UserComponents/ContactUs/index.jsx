import './index.scss';
import { FaInstagram, FaFacebookF, FaTwitter, FaTiktok } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

function ContactUs() {
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
        <section id="contactUs">
            <div className="container">
                <motion.div 
                    className="contact-info"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, margin: "-100px" }}
                    transition={{ staggerChildren: 0.1 }}
                >
                    <motion.span className="small-tag" variants={fadeUp}>{t('contactUs.tag')}</motion.span>
                    <motion.h2 variants={fadeUp}>{t('contactUs.title')}</motion.h2>
                    <motion.p variants={fadeUp}>
                        {t('contactUs.description')}
                    </motion.p>
                    <motion.a href="mailto:Info@wed2026.az" className="email-link" variants={fadeUp}>
                        Info@wed2026.az
                    </motion.a>
                    <motion.span className='nenemki' variants={fadeUp}>{t('contactUs.emailLabel')}</motion.span>
                    
                    <motion.div className="social-follow" variants={fadeUp}>
                        <span>{t('contactUs.followUs')}</span>
                        <div className="social-icons">
                            <a href="https://www.instagram.com/ecogovaz/" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
                            <a href="https://www.facebook.com/share/1Gdf69Crvd/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
                            <a href="#"><FaTwitter /></a>
                            <a href="#"><FaTiktok /></a>
                        </div>
                    </motion.div>
                </motion.div>



            </div>
        </section>
    );
}

export default ContactUs;
