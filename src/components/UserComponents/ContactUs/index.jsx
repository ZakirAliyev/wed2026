import './index.scss';
import { FaInstagram, FaTwitter, FaTiktok } from 'react-icons/fa';

function ContactUs() {
    return (
        <section id="contactUs">
            <div className="container">
                <div className="contact-info">
                    <span className="small-tag">WED 2026</span>
                    <h2>Contact Us</h2>
                    <p>
                        Reach out to us for inquiries, partnerships, or more information
                        about WED 2026. Our team is ready to support your ideas, guide
                        your participation, and collaborate on initiatives that
                        contribute to a more sustainable and resilient future.
                    </p>
                    <a href="mailto:Info@wed2026.az" className="email-link">
                        Info@wed2026.az
                    </a>
                    <span className='nenemki'>Email</span>
                    
                    <div className="social-follow">
                        <span>Follow us:</span>
                        <div className="social-icons">
                            <a href="#"><FaInstagram /></a>
                            <a href="#"><FaTwitter /></a>
                            <a href="#"><FaTiktok /></a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ContactUs;
