import './index.scss';
import logo from '../../../assets/logo.png';
import { HiOutlineArrowUpRight } from 'react-icons/hi2';

function JoinMovement() {
    return (
        <section id="joinMovement">
            <div className="join-overlay">
                <div className="container">
                    <div className="join-content">
                        <h2 data-aos="fade-down" data-aos-delay="200">Join the Movement for Nature</h2>

                        <p data-aos="fade-left" data-aos-delay="200">Partner with us, share your initiative, or take part in shaping World Environment Day 2026.</p>

                        <a href="#" className="join-btn" data-aos="fade-right" data-aos-delay="600">
                            <span>Register Now</span>
                            <HiOutlineArrowUpRight />
                        </a>
                    </div>





                </div>
            </div>
        </section>
    );
}

export default JoinMovement;
