import './index.scss';
import { FaInstagram, FaTwitter, FaTiktok } from 'react-icons/fa';

import { motion } from 'framer-motion';

function ContactUs() {
    const fadeUp = {
        hidden: { opacity: 0, y: 30 },
        visible: { 
            opacity: 1, 
            y: 0,
            transition: { duration: 0.8, ease: [0.33, 1, 0.68, 1] }
        }
    };

    return (
        <section id="contactUs">
            <div className="container">
                <motion.div 
                    className="contact-info"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ staggerChildren: 0.1 }}
                >
                    <motion.span className="small-tag" variants={fadeUp}>WED 2026</motion.span>
                    <motion.h2 variants={fadeUp}>Contact Us</motion.h2>
                    <motion.p variants={fadeUp}>
                        Reach out to us for inquiries, partnerships, or more information
                        about WED 2026. Our team is ready to support your ideas, guide
                        your participation, and collaborate on initiatives that
                        contribute to a more sustainable and resilient future.
                    </motion.p>
                    <motion.a href="mailto:Info@wed2026.az" className="email-link" variants={fadeUp}>
                        Info@wed2026.az
                    </motion.a>
                    <motion.span className='nenemki' variants={fadeUp}>Email</motion.span>
                    
                    <motion.div className="social-follow" variants={fadeUp}>
                        <span>Follow us:</span>
                        <div className="social-icons">
                            <a href="#"><FaInstagram /></a>
                            <a href="#"><FaTwitter /></a>
                            <a href="#"><FaTiktok /></a>
                        </div>
                    </motion.div>
                </motion.div>



            </div>
        </section>
    );
}

export default ContactUs;
