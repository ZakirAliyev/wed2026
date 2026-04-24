import { useRef } from 'react';
import './index.scss';
import { HiOutlineArrowUpRight } from 'react-icons/hi2';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { useTranslation } from 'react-i18next';

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
    const opacity = useTransform(smoothProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

    return (
        <section ref={containerRef} className="join-scroll-wrapper">
            <div id="joinMovement">
                <motion.div 
                    className="video-background-wrapper loaded"
                    style={{ y: yVideo }}
                >
                    <div className="video-shield"></div>
                    <iframe 
                        src="https://www.youtube.com/embed/excOjuhP2tg?autoplay=1&mute=1&controls=0&loop=1&playlist=excOjuhP2tg&modestbranding=1&rel=0&iv_load_policy=3&vq=hd2160&disablekb=1&playsinline=1&fs=0&autohide=1&showinfo=0" 
                        title="YouTube video player" 
                        frameBorder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                        className="background-video-iframe"
                    ></iframe>
                </motion.div>
                <div className="join-overlay">
                    <div className="container">
                        <motion.div 
                            className="join-content"
                            style={{ opacity }}
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
                                    <HiOutlineArrowUpRight />
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
