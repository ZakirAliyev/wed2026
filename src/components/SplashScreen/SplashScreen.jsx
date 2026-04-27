import React, { useEffect, useState } from 'react';
import './SplashScreen.scss';
import alphaVideo from '../../assets/logo mp4.mp4';

const SplashScreen = ({ onComplete }) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // 8-second safety timer
    const timer = setTimeout(() => {
      handleComplete();
    }, 2600);

    return () => clearTimeout(timer);
  }, []);

  const handleComplete = () => {
    setIsVisible(false);
    setTimeout(() => {
      onComplete();
    }, 600);
  };

  return (
    <div className={`splash-screen ${!isVisible ? 'fade-out' : ''}`}>
      <video
        autoPlay
        muted
        playsInline
        webkitPlaysInline="true"
        preload="auto"
        onEnded={handleComplete}
        className="splash-video"
      >
        <source src={alphaVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default SplashScreen;
