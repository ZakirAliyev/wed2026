import { useState, useEffect } from 'react';
import './index.scss';
import { FaInstagram, FaFacebookF } from 'react-icons/fa';
import locationIcon from '../../../assets/location.webp';
import calendarIcon from '../../../assets/calendar.webp';
import Countdown from '../Countdown';
import { useMediaQuery } from "react-responsive";
import arrow from "/src/assets/arrow.webp"
import { useTranslation } from 'react-i18next';

import { motion, useScroll, useTransform } from 'framer-motion';

import fullBg from '../../../assets/full.webp';
import patternBg from '../../../assets/pattern.png';
import daglarBg from '../../../assets/daglar.webp';

function Hero() {
    const { t } = useTranslation();
    const { scrollY } = useScroll();
    const yBg = useTransform(scrollY, [0, 500], [0, 200]);

    const [activeStep, setActiveStep] = useState(0);
    const isMobile = useMediaQuery({ maxWidth: "768px" });

    const steps = [
        { idle: t('hero.steps.start'), hover: t('hero.steps.start') },
        { idle: '1', hover: t('hero.steps.forest') },
        { idle: '2', hover: t('hero.steps.urban') },
        { idle: '3', hover: t('hero.steps.energy') }
    ];

    const handleStepClick = (index) => {
        setActiveStep(index);
        const sectionId = index === 0 ? 'hero' : `theme-0${index}`;
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

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
                ease: [0.33, 1, 0.68, 1]
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
                    <span>{t('hero.followUs')}</span>
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
                        <p>{t('hero.tagline')}</p>
                    </motion.div>

                    <motion.h1 variants={itemVariants}>
                        {t('hero.title')}
                    </motion.h1>

                    <motion.p className="hosted" variants={itemVariants}>
                        {t('hero.scrollDown')}
                        <img src={arrow} alt={"bottom"} className={"arrow"} />
                        {t('hero.hostedBy')} <span>{t('hero.ministryName')}</span>
                    </motion.p>

                    <motion.div className="location-pill" variants={itemVariants}>
                        <img src={locationIcon} alt="Location" className="icon" />
                        <span>{t('hero.location')}</span>
                        <img src={calendarIcon} alt="Calendar" className="icon" />
                        <span>{t('hero.date')}</span>
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
