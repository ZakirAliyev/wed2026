import './index.scss';
import tebiet from '../../../assets/tebiet.webp';
import tebiet2 from '../../../assets/tebiet2.webp';
import tebiet3 from '../../../assets/tebiet3.webp';
import arrow from '../../../assets/arrow.webp';

const themes = [
    {
        number: '01',
        title: 'Biodiversity conservation and ecosystem restoration',
        description: 'Azerbaijan is expanding nature protected areas, restoring degraded forests and lands, ecosystems from the Caspian Sea coastline to inland landscapes through afforestation, biodiversity conservation and sustainable environmental management practices to strengthen climate resilience, positioning nature as a key solution to climate change.',
        linkText: 'Watch Climate Story'
    },
    {
        number: '02',
        title: 'Climate action',
        description: 'Azerbaijan aims to balance socio-economic priorities with environmental sustainability, ensuring that climate action efforts across the economy align with the country’s commitments under NDC 3.0 within the framework of the Paris Agreement, while reinforcing its national policy framework to support sustainable development.',
        linkText: 'Watch Climate Story',
        reverse: true
    },
    {
        number: '03',
        title: 'Renewable Energy',
        description: 'Azeribaijan is accelerating its transition to renewable energy through large-scale solar and wind projects. Strategic investments aim to reduce emissions, increase energy efficiency, and support clean energy future.',
        linkText: 'Watch Climate Story'
    }
];

import { motion } from 'framer-motion';

import { useMediaQuery } from "react-responsive";

function Themes() {
    const isMobile = useMediaQuery({ maxWidth: "768px" });
    const themeImages = [tebiet, tebiet2, tebiet3];

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
                            <a href="#" className="theme-link">{theme.linkText}
                                <img src={arrow} alt='Arrow'/>
                            </a>
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
