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
                days: days.toString().padStart(2, '0'),
                hours: hours.toString().padStart(2, '0'),
                minutes: minutes.toString().padStart(2, '0'),
                seconds: seconds.toString().padStart(2, '0')
            });
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    return (
        <div className="countdown">
            <div className="box">
                <span className="number">{timeLeft.days}</span>
                <span className="label">Days</span>
            </div>
            <span className="separator">:</span>
            <div className="box">
                <span className="number">{timeLeft.hours}</span>
                <span className="label">Hours</span>
            </div>
            <span className="separator">:</span>
            <div className="box">
                <span className="number">{timeLeft.minutes}</span>
                <span className="label">Minutes</span>
            </div>
            <span className="separator">:</span>
            <div className="box">
                <span className="number">{timeLeft.seconds}</span>
                <span className="label">Seconds</span>
            </div>
        </div>
    );
}

export default Countdown;
