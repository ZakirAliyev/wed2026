import React, { useEffect, useState, useMemo, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { useMediaQuery } from 'react-responsive';
import './SplashScreen.scss';

// Desktop Videos
import videoEngPc from '../../assets/Logo 16x9 ENG.webm';
import videoAzePc from '../../assets/MAIN LOGO 16x9 AZE (online-video-cutter.com).mp4';

// Mobile Videos
import videoEngMb from '../../assets/MAIN LOGO 9x16 ENG.webm';
import videoAzeMb from '../../assets/MAIN LOGO 9x16 AZE.webm';

const SplashScreen = ({ onComplete }) => {
  const { i18n } = useTranslation();
  const isMobile = useMediaQuery({ query: '(max-width: 768px)' });
  const [isVisible, setIsVisible] = useState(true);

  const videoSrc = useMemo(() => {
    const lang = (i18n.language || 'en').split('-')[0].toLowerCase();
    
    if (isMobile) {
      return lang === 'az' ? videoAzeMb : videoEngMb;
    }
    return lang === 'az' ? videoAzePc : videoEngPc;
  }, [i18n.language, isMobile]);

  const isMp4 = videoSrc.endsWith('.mp4');

  useEffect(() => {
    // 8-second safety timer
    const timer = setTimeout(() => {
      handleComplete();
    }, 8000);

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
        key={videoSrc}
      >
        <source src={videoSrc} type={isMp4 ? "video/mp4" : "video/webm"} />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default SplashScreen;
