import './index.scss';
import iamge1 from '../../../assets/balacaSekil.png';

import { motion } from 'framer-motion';

function AboutEvent() {
    return (
        <section id="aboutEvent">
            <div className="container">
                <div className="about-grid">
                    <motion.div 
                        className="text-side"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1, ease: [0.33, 1, 0.68, 1] }}
                        viewport={{ once: true }}
                    >
                        <h2>About the Event</h2>
                        <p>
                            World Environment Day is the United Nations' principal vehicle for
                            encouraging worldwide awareness and action for the environment. Held
                            annually since 1973, the Day has also become a vital platform for
                            promoting progress on the environmental dimensions of the Sustainable
                            Development Goals. With the United Nations Environment Programme
                            (UNEP) at the helm, over 150 countries participate each year. Major
                            corporations, non-governmental organizations, communities,
                            governments, and celebrities from across the world adopt the World
                            Environment Day brand to champion environmental causes.
                        </p>
                    </motion.div>
                    <motion.div 
                        className="image-side"
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1, ease: [0.33, 1, 0.68, 1] }}
                        viewport={{ once: true }}
                    >
                        <div className="circular-logo-wrap">
                            {/* Using main logo as placeholder, styled in SCSS to look like wood-carved */}
                            <img src={iamge1} alt="WED logo" />
                        </div>
                    </motion.div>




                </div>
            </div>
        </section>
    );
}

export default AboutEvent;
