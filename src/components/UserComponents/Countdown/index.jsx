import { useState, useEffect } from 'react';
import './index.scss';

function Countdown() {
    const [timeLeft, setTimeLeft] = useState({
        days: '00',
        hours: '00',
        minutes: '00',
        seconds: '00'
    });

    useEffect(() => {
        const targetDate = new Date('June 5, 2026 00:00:00').getTime();

        const timer = setInterval(() => {
            const now = new Date().getTime();
            const distance = targetDate - now;

            if (distance < 0) {
                clearInterval(timer);
                return;
            }

            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);

            setTimeLeft({
                days: days.toString(),
                hours: hours.toString().padStart(2, '0'),
                minutes: minutes.toString().padStart(2, '0'),
                seconds: seconds.toString().padStart(2, '0')
            });
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    return (
        <div className="new-countdown">
            <div className="left-side">
                <div className="circle-icon">
                    <div className="inner-circle"></div>
                </div>
            </div>
            <div className="right-side">
                <span className="days-number">{timeLeft.days}</span>
                <div className="days-label">
                    <span className="days-word">days</span>
                    <span className="to-go">to go!</span>
                </div>
            </div>
        </div>
    );
}

export default Countdown;
