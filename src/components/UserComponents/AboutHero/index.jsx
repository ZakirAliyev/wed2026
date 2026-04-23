import './index.scss';

import { motion } from 'framer-motion';

function AboutHero() {
    return (
        <section id="aboutHero">
            <div className="container">
                <motion.div 
                    className="content"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.2, ease: [0.33, 1, 0.68, 1] }}
                >
                    <h1>World Environment Day 2026:<br />A Global Call for Climate Action</h1>
                </motion.div>



            </div>
        </section>
    );
}

export default AboutHero;
