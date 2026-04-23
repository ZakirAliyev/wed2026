import './index.scss';
import tebiet from '../../../assets/tebiet.png';
import tebiet2 from '../../../assets/tebiet2.png';
import tebiet3 from '../../../assets/tebiet3.png';
import arrow from '../../../assets/arrow.png';

const themes = [
    {
        number: '01',
        title: 'Forest Restoration',
        description: 'Extensive reforestation and afforestation programs are being implemented to restore degraded lands and expand green coverage across the country.',
        linkText: 'Watch Climate Story'
    },
    {
        number: '02',
        title: 'Development of Green Urban Environments',
        description: 'Urban sustainability is being promoted through the expansion of green spaces, investment in eco-friendly public transportation, and the adoption of sustainable building practices.',
        linkText: 'Watch Climate Story',
        reverse: true
    },
    {
        number: '03',
        title: 'Clean and Renewable Energy Sources',
        description: 'Azerbaijan is accelerating its transition toward renewable energy by investing in large-scale solar and wind projects.hese initiatives aim not only to reduce greenhouse gas emissions, but also to strengthen long-term energy security and diversify the national energy mix.',
        linkText: 'Watch Climate Story'
    }
];

import { motion } from 'framer-motion';

function Themes() {
    const themeImages = [tebiet, tebiet2, tebiet3];

    const cardVariants = {
        hidden: { opacity: 0, y: 50 },
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
        hidden: { scale: 0.8, opacity: 0 },
        visible: { 
            scale: 1, 
            opacity: 1,
            transition: {
                duration: 1,
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
                            viewport={{ once: true, margin: "-100px" }}
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
                            viewport={{ once: true, margin: "-100px" }}
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
