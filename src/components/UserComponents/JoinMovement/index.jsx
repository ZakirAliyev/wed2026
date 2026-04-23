import './index.scss';
import logo from '../../../assets/logo.png';
import { HiOutlineArrowUpRight } from 'react-icons/hi2';

function JoinMovement() {
    return (
        <section id="joinMovement">
            <div className="join-overlay">
                <div className="container">
                    <div className="join-content">
                        <h2>Join the Movement for Nature</h2>
                        <p>Partner with us, share your initiative, or take part in shaping World Environment Day 2026.</p>
                        <a href="#" className="join-btn">
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
