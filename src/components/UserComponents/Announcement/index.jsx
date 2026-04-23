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
                    viewport={{ once: false, margin: "-100px" }}
                >
                    <motion.div className="badge-row" variants={fadeUp}>
                        <span className="line"></span>
                        About WED 2026
                    </motion.div>
                    <motion.h2 variants={fadeUp}>Republic of Azerbaijan to Host World Environment Day 2026</motion.h2>
                    <motion.p variants={fadeUp}>
                        Azerijan is accelerating its transition to renewable energy through large-scale solar and wind projects. Strategic investments aim to reduce emissions, increase energy efficiency, and support    clean energy future.
                        The programme will combine high-level discussions with public outdoor activities, creating an inclusive national celebration of nature and climate action. The event will take place on June 5 at the Heydar Aliyev Center and will include both closed sessions and an outdoor exhibition open to the public. 
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
