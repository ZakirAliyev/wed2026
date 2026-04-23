import { useRef } from 'react';
import './index.scss';
import { HiOutlineArrowUpRight } from 'react-icons/hi2';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useTranslation } from 'react-i18next';

function JoinMovement() {
    const { t } = useTranslation();
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    // Parallax transforms - synchronized to keep them close while moving
    const yTitle = useTransform(scrollYProgress, [0, 1], [150, -450]);
    const yPara = useTransform(scrollYProgress, [0, 1], [166, -434]); // 16px offset preserved
    const yBtn = useTransform(scrollYProgress, [0, 1], [182, -418]); // another 16px offset
    const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

    return (
        <section ref={containerRef} className="join-scroll-wrapper">
            <div id="joinMovement">
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
