import { useState, useEffect } from 'react';
import './index.scss';
import { FaInstagram, FaFacebookF } from 'react-icons/fa';
import location from '../../../assets/location.webp';
import calendar from '../../../assets/calendar.webp';
import Countdown from '../Countdown';
import { useMediaQuery } from "react-responsive";
import arrow from "/src/assets/arrow.webp"

import { motion, useScroll, useTransform } from 'framer-motion';

import fullBg from '../../../assets/full.webp';
import patternBg from '../../../assets/pattern.png';
import daglarBg from '../../../assets/daglar.webp';

function Hero() {
    const { scrollY } = useScroll();
    const yBg = useTransform(scrollY, [0, 500], [0, 200]);
    const opacity = useTransform(scrollY, [0, 300], [1, 0]);

    const [activeStep, setActiveStep] = useState(0);
    const [daysLeft, setDaysLeft] = useState(0);
    const isMobile = useMediaQuery({ maxWidth: "768px" });
    const steps = [
        { idle: 'Start', hover: 'Start' },
        { idle: '1', hover: 'Forest' },
        { idle: '2', hover: 'Urban' },
        { idle: '3', hover: 'Energy' }
    ];

    const handleStepClick = (index) => {
        setActiveStep(index);
        const sectionId = index === 0 ? 'hero' : `theme-0${index}`;
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    useEffect(() => {
        const targetDate = new Date('June 5, 2026 00:00:00').getTime();
        const now = new Date().getTime();
        const days = Math.ceil((targetDate - now) / (1000 * 60 * 60 * 24));
        setDaysLeft(Math.max(0, days));
    }, []);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.5
            }
        }
    };

    const itemVariants = {
        hidden: { y: 30, opacity: 0 },
        visible: { 
            y: 0, 
            opacity: 1,
            transition: {
                duration: 0.8,
                ease: [0.33, 1, 0.68, 1] // Custom cubic-bezier for premium feel
            }
        }
    };

    return (
        <section id="hero">
            <motion.div 
                className="hero-layer hero-full"
                style={{ 
                    y: yBg,
                    backgroundImage: `url(${fullBg})`
                }}
            />
            <motion.div 
                className="hero-layer hero-pattern"
                style={{ 
                    y: yBg,
                    backgroundImage: `url(${patternBg})`
                }}
            />
            <motion.div 
                className="hero-layer hero-daglar"
                style={{ 
                    y: yBg,
                    backgroundImage: `url(${daglarBg})`
                }}
            />
            <div className="container">
                <motion.div 
                    className="sidebar-left"
                    initial={{ x: -50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 1, delay: 1 }}
                >
                    <span>Follow us</span>
                    <div className="social-icons">
                        <a href="#"><FaInstagram /></a>
                        <a href="#"><FaFacebookF /></a>
                    </div>
                </motion.div>

                <motion.div 
                    className="hero-content"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    <motion.div className="tagline" variants={itemVariants}>
                        <span className="line"></span>
                        <p>Celebrate Nature with Us</p>
                    </motion.div>

                    <motion.h1 variants={itemVariants}>
                        World Environment Day <br />2026
                    </motion.h1>

                    <motion.p className="hosted" variants={itemVariants}>
                        scroll down
                        <img src={arrow} alt={"bottom"} className={"arrow"} />
                        Hosted by the Ministry of <span>Ecology and Natural Resources of Azerbaijan</span>
                    </motion.p>

                    <motion.div className="location-pill" variants={itemVariants}>
                        <img src={location} alt="Location" className="icon" />
                        <span>Baku, Heydar Aliyev Center</span>
                        <img src={calendar} alt="Calendar" className="icon" />
                        <span>5–6 June</span>
                    </motion.div>

                </motion.div>

                <div className="countdown-wrapper">
                    <Countdown />
                </div>

                <div className="sidebar-right">




                    <div className="step-tracker">

                        <div className="steps-text">
                            {steps.map((step, index) => (
                                <div
                                    key={index}
                                    className={`step-item ${activeStep === index ? 'active' : ''}`}
                                    onClick={() => handleStepClick(index)}
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
