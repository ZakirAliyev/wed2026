import './index.scss';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { useMediaQuery } from "react-responsive";
import { useTranslation } from 'react-i18next';

function AboutHero() {
    const { t } = useTranslation();
    const isMobile = useMediaQuery({ maxWidth: "768px" });
    const targetRef = useRef(null);

    const { scrollYProgress } = useScroll({
        target: targetRef,
        offset: ["start start", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);

    return (
        <section id="aboutHero" ref={targetRef}>
            <motion.div 
                className="background"
                style={{ y }}
            />
            <div className="container">
                <motion.div 
                    className="content"
                    initial={{ opacity: 0, y: isMobile ? 20 : 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: isMobile ? 0.8 : 1.2, ease: [0.33, 1, 0.68, 1] }}
                >
                    <h1>{t('aboutHero.title')}</h1>
                </motion.div>
            </div>
        </section>
    );
}

export default AboutHero;
