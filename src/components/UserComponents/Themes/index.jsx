import './index.scss';
import forest from '../../../assets/forest.webp';
import plant from '../../../assets/plant.webp';
import energy from '../../../assets/energy.webp';
import arrow from '../../../assets/arrow.webp';

import { useTranslation } from 'react-i18next';
import { useMediaQuery } from "react-responsive";
import { motion } from 'framer-motion';

function Themes() {
    const { t } = useTranslation();
    const isMobile = useMediaQuery({ maxWidth: "768px" });
    const themeImages = [forest, plant, energy];

    const themes = [
        {
            number: '01',
            title: t('themes.theme1.title'),
            description: t('themes.theme1.description'),
            linkText: t('themes.watchStory')
        },
        {
            number: '02',
            title: t('themes.theme2.title'),
            description: t('themes.theme2.description'),
            linkText: t('themes.watchStory'),
            reverse: true
        },
        {
            number: '03',
            title: t('themes.theme3.title'),
            description: t('themes.theme3.description'),
            linkText: t('themes.watchStory')
        }
    ];

    const cardVariants = {
        hidden: { opacity: 0, y: isMobile ? 30 : 50 },
        visible: { 
            opacity: 1, 
            y: 0,
            transition: {
                duration: 0.8,
                ease: [0.33, 1, 0.68, 1]
            }
        }
    };

    const imageVariants = {
        hidden: { 
            scale: isMobile ? 1 : 0.9, 
            opacity: 0,
            y: isMobile ? 20 : 0
        },
        visible: { 
            scale: 1, 
            opacity: 1,
            y: 0,
            transition: {
                duration: isMobile ? 0.6 : 1,
                ease: [0.33, 1, 0.68, 1]
            }
        }
    };

    return (
        <section id="themes">
            <div className="container">
                {themes.map((theme, index) => (
                    <div className={`theme-item ${theme.reverse ? 'reverse' : ''}`} key={index} id={`theme-${theme.number}`}>
                        <motion.div 
                            className="theme-content"
                            variants={cardVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: false, margin: "-100px" }}
                        >
                            <span className="theme-number">{theme.number}</span>
                            <h2 className="theme-title">{theme.title}</h2>
                            <p className="theme-desc">{theme.description}</p>
                        </motion.div>
                        <motion.div 
                            className="theme-image"
                            variants={imageVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: false, margin: "-100px" }}
                        >
                            <img src={themeImages[index]} alt={theme.title} />
                        </motion.div>
                    </div>


                ))}
            </div>
        </section>
    );
}

export default Themes;
