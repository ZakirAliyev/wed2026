import './index.scss';
import iamge1 from '../../../assets/balacaSekil.webp';

import { motion } from 'framer-motion';

import { useMediaQuery } from "react-responsive";

function AboutEvent() {
    const isMobile = useMediaQuery({ maxWidth: "768px" });

    return (
        <section id="aboutEvent">
            <div className="container">
                <div className="about-grid">
                    <motion.div 
                        className="text-side"
                        initial={{ opacity: 0, x: isMobile ? 0 : -50, y: isMobile ? 20 : 0 }}
                        whileInView={{ opacity: 1, x: 0, y: 0 }}
                        transition={{ duration: isMobile ? 0.6 : 1, ease: [0.33, 1, 0.68, 1] }}
                        viewport={{ once: false }}
                    >
                        <h2>About the Event</h2>
                        <p>
                            World Environment Day is the United Nations’ leading global platform for environmental action, observed annually since 1973. Led by UNEP, it brings together governments, businesses, and communities across more than 150 countries to promote sustainability and environmental responsibility.
                            The 2026 celebration , hosted by Azerbaijan in Baku, focuses on climate action, emphasizing the urgent need to respond to the signals of a changing Earth and strengthen the connection between climate action and nature. Under the global call on: “Inspired by Nature. For Climate.For our Future”, event will invite the international community to advance cooperation, share solutions, and accelerate progress towards a climate-resilient future by harnessing the power of nature.
                            The event will take place on June 5 at the Heydar Aliyev Center and will include both closed sessions and an outdoor exhibition open to the public.
                        </p>
                    </motion.div>
                    <motion.div 
                        className="image-side"
                        initial={{ opacity: 0, x: isMobile ? 0 : 50, y: isMobile ? 20 : 0 }}
                        whileInView={{ opacity: 1, x: 0, y: 0 }}
                        transition={{ duration: isMobile ? 0.6 : 1, ease: [0.33, 1, 0.68, 1] }}
                        viewport={{ once: false }}
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
