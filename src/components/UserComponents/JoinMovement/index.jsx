import { useRef } from 'react';
import './index.scss';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import videoSrc from '../../../assets/qax4.webm';

function JoinMovement() {
    const { t } = useTranslation();
    const containerRef = useRef(null);
    
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    const smoothProgress = useSpring(scrollYProgress, {
        stiffness: 70,
        damping: 25,
        restDelta: 0.001
    });

    // Text transforms - starts at the very end as the section begins to move upward
    const yTitle = useTransform(smoothProgress, [0.8, 1.0], [50, -250]);
    const yPara = useTransform(smoothProgress, [0.8, 1.0], [70, -230]);
    const yBtn = useTransform(smoothProgress, [0.8, 1.0], [90, -210]);
    
    // Video/Background transform - subtle parallax
    const yVideo = useTransform(smoothProgress, [0, 1], ["0%", "-10%"]);

    return (
        <section ref={containerRef} className="join-scroll-wrapper">
            <div id="joinMovement">
                <motion.div 
                    className="video-background-wrapper loaded"
                    style={{ y: yVideo }}
                >
                    <div className="video-shield"></div>
                    <video
                        autoPlay
                        muted
                        loop
                        playsInline
                        preload="auto"
                        className="background-video-native"
                    >
                        <source src={videoSrc} type="video/webm" />
                        Your browser does not support the video tag.
                    </video>
                </motion.div>
                <div className="join-overlay">
                    <div className="container">
                        <motion.div 
                            className="join-content"
                        >
                            <motion.h2 style={{ y: yTitle }}>
                                {t('joinMovement.title')}
                            </motion.h2>

                            <motion.p style={{ y: yPara }}>
                                {t('joinMovement.description')}
                            </motion.p>

                            <motion.div style={{ y: yBtn }}>
                                <a href="#" className="join-btn">
                                    <span>{t('joinMovement.register')}</span>
                                </a>
                            </motion.div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default JoinMovement;
