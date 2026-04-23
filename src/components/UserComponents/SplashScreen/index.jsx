import React from 'react';
import './index.scss';
import logo from '../../../assets/logo.png';
import { PulseLoader } from 'react-spinners';

const SplashScreen = ({ isVisible }) => {
    return (
        <div className={`splash-screen ${isVisible ? 'visible' : 'hidden'}`}>
            <div className="splash-content">
                <img src={logo} alt="Logo" className="splash-logo" />
                <div className="splash-loader">
                    <PulseLoader size={8} color="#fff" />
                </div>
            </div>
        </div>
    );
};

export default SplashScreen;
