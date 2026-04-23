import { useState, useEffect } from 'react';
import './index.scss';
import { FaInstagram, FaFacebookF } from 'react-icons/fa';
import location from '../../../assets/location.png';
import calendar from '../../../assets/calendar.png';
import Countdown from '../Countdown';
import {useMediaQuery} from "react-responsive";
import arrow from "/src/assets/arrow.png"

function Hero() {
    const [activeStep, setActiveStep] = useState(0);
    const [daysLeft, setDaysLeft] = useState(0);
const isMobile = useMediaQuery({maxWidth:"768px"});
    const steps = [
        { idle: 'Start', hover: 'Start' },
        { idle: '1', hover: 'Home' },
        { idle: '2', hover: 'About' },
        { idle: '3', hover: 'Contact' }
    ];

    useEffect(() => {
        const targetDate = new Date('June 5, 2026 00:00:00').getTime();
        const now = new Date().getTime();
        const days = Math.ceil((targetDate - now) / (1000 * 60 * 60 * 24));
        setDaysLeft(Math.max(0, days));
    }, []);

    return (
        <section id="hero">
            <div className="container">
                <div className="sidebar-left" data-aos="fade-right" data-aos-delay="200">
                    <span>Follow us</span>
                    <div className="social-icons">
                        <a href="#"><FaInstagram /></a>
                        <a href="#"><FaFacebookF /></a>
                    </div>
                </div>

                <div className="hero-content">
                    <div className="tagline" data-aos="fade-up" data-aos-delay="400">
                        <span className="line"></span>
                        <p>Celebrate Nature with Us</p>
                    </div>

                    <h1 data-aos="fade-up" data-aos-delay="600">World Environment Day <br />2026</h1>

                    <p className="hosted" data-aos="fade-up" data-aos-delay="800">
                        scroll down
                        <img src={arrow} alt={"bottom"} className={"arrow"}/>
                        Hosted by the Ministry of <span>Ecology and Natural Resources of Azerbaijan</span>
                    </p>

                    <div className="location-pill" data-aos="fade-up" data-aos-delay="1000">
                        <img src={location} alt="Location" className="icon" />
                        <span>Baku, Heydar Aliyev Center</span>
                        <img src={calendar} alt="Calendar" className="icon" />
                        <span>5–6 June</span>
                    </div>

                </div>

                <div className="countdown-wrapper">
                    <Countdown/>
                </div>

                <div className="sidebar-right">




                    <div className="step-tracker">

                        <div className="steps-text">
                            {steps.map((step, index) => (
                                <div
                                    key={index}
                                    className={`step-item ${activeStep === index ? 'active' : ''}`}
                                    onClick={() => setActiveStep(index)}
                                >
                                    <span className="idle">{step.idle}</span>
                                    <span className="hover">{step.hover}</span>
                                </div>
                            ))}
                        </div>
                        <div className="line-container">
                            <div
                                className="active-bar"
                                style={{ transform: `translateY(${activeStep * 50}px)` }}
                            ></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Hero;
