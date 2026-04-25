import React, { useEffect, useState, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { useMediaQuery } from 'react-responsive';
import './SplashScreen.scss';

// Desktop Videos
import videoEngPc from '../../assets/Logo 16x9 ENG.webm';
import videoAzePc from '../../assets/MAIN LOGO 16x9 AZE.webm';

// Mobile Videos
import videoEngMb from '../../assets/MAIN LOGO 9x16 ENG.webm';
import videoAzeMb from '../../assets/MAIN LOGO 9x16 AZE.webm';

const SplashScreen = ({ onComplete }) => {
  const { i18n } = useTranslation();
  const isMobile = useMediaQuery({ query: '(max-width: 768px)' });
  const [isVisible, setIsVisible] = useState(true);

  const videoSrc = useMemo(() => {
    // Get the base language (e.g., 'az' from 'az-AZ')
    const lang = (i18n.language || 'en').split('-')[0].toLowerCase();
    
    if (isMobile) {
      return lang === 'az' ? videoAzeMb : videoEngMb;
    }
    return lang === 'az' ? videoAzePc : videoEngPc;
  }, [i18n.language, isMobile]);

  useEffect(() => {
    const timer = setTimeout(() => {
      handleComplete();
    }, 8000); // 8 seconds as requested

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
        onEnded={handleComplete}
        className="splash-video"
        key={videoSrc} // Key ensures video reloads if source changes
      >
        <source src={videoSrc} type="video/webm" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default SplashScreen;
