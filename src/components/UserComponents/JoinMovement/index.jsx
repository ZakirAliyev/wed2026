import './index.scss';
import logo from '../../../assets/logo.png';
import { HiOutlineArrowUpRight } from 'react-icons/hi2';

import { motion } from 'framer-motion';

function JoinMovement() {
    return (
        <section id="joinMovement">
            <div className="join-overlay">
                <div className="container">
                    <motion.div 
                        className="join-content"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, ease: [0.33, 1, 0.68, 1] }}
                        viewport={{ once: true }}
                    >
                        <h2>Join the Movement for Nature</h2>

                        <p>Partner with us, share your initiative, or take part in shaping World Environment Day 2026.</p>

                        <a href="#" className="join-btn">
                            <span>Register Now</span>
                            <HiOutlineArrowUpRight />
                        </a>
                    </motion.div>





                </div>
            </div>
        </section>
    );
}

export default JoinMovement;
