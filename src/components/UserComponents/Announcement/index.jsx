import './index.scss';
import { HiOutlineArrowUpRight } from 'react-icons/hi2';

import { motion } from 'framer-motion';

function Announcement() {
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
                    viewport={{ once: true, margin: "-100px" }}
                >
                    <motion.div className="badge-row" variants={fadeUp}>
                        <span className="line"></span>
                        About WED 2026
                    </motion.div>
                    <motion.h2 variants={fadeUp}>Republic of Azerbaijan to Host World Environment Day 2026</motion.h2>
                    <motion.p variants={fadeUp}>
                        Azerbaijan is proud to announce that it will host the United Nations' World Environment Day 2026.
                        This landmark event will bring together global leaders, scientists, activists, and citizens to
                        address the world's most pressing environmental challenges and inspire collective action.
                    </motion.p>

                    <motion.a href="#" className="cta-btn" variants={fadeUp}>
                        <span>Read more</span>
                        <HiOutlineArrowUpRight />
                    </motion.a>
                </motion.div>





            </div>
        </section>
    );
}

export default Announcement;
