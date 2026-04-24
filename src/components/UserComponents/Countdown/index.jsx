import { useState, useEffect, useMemo } from 'react';
import Lottie from 'lottie-react';
import { useTranslation } from 'react-i18next';
import originalAnimationData from '../../../assets/daysToGo.json';
import './index.scss';

function Countdown() {
    const { t } = useTranslation();
    const [timeLeft, setTimeLeft] = useState({
        days: '0'
    });

    useEffect(() => {
        const targetDate = new Date('June 5, 2026 00:00:00').getTime();

        const calculateTime = () => {
            const now = new Date().getTime();
            const distance = targetDate - now;

            if (distance < 0) {
                setTimeLeft({ days: '0' });
                return;
            }

            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            setTimeLeft({
                days: days.toString()
            });
        };

        calculateTime(); // Initial run
        const timer = setInterval(calculateTime, 1000 * 60 * 60); // Check every hour

        return () => clearInterval(timer);
    }, []);

    // Stabilize animationData - hide internal text once
    const animationData = useMemo(() => {
        const data = JSON.parse(JSON.stringify(originalAnimationData));
        data.layers.forEach(layer => {
            if (layer.nm === "123" || layer.nm === "days to go!") {
                if (layer.t && layer.t.d && layer.t.d.k[0]) {
                    layer.t.d.k[0].s.t = ""; // Hide internal text
                }
            }
        });
        return data;
    }, []);

    return (
        <div className="lottie-countdown-wrapper">
            <div className="lottie-container-relative">
                <Lottie 
                    animationData={animationData} 
                    loop={true} 
                    className="lottie-player"
                />
                
                {/* Dynamic Overlay */}
                <div className="countdown-overlay-content">
                    <span className="overlay-number">{timeLeft.days}</span>
                    <div className="overlay-label">
                        <span>{t('countdown.days')}</span>
                        <span>{t('countdown.toGo')}</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Countdown;
