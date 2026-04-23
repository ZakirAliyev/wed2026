import {Outlet, useLocation} from "react-router-dom";
import {useState, useEffect, useLayoutEffect} from "react";
import SplashScreen from "../../components/UserComponents/SplashScreen";
import AOS from 'aos';
import 'aos/dist/aos.css';

function MainPage() {
    const [isSplashVisible, setIsSplashVisible] = useState(true);
    const location = useLocation();

    useLayoutEffect(() => {
        // Show splash screen and scroll to top on route change immediately before paint
        setIsSplashVisible(true);
        window.scrollTo(0, 0);
    }, [location.pathname]);


    useEffect(() => {
        if (isSplashVisible) {
            // Start animations 0.3s BEFORE the splash screen starts to fade
            const aosTimer = setTimeout(() => {
                AOS.init({
                    duration: 750,
                    easing: 'ease-in-out',
                    once: false,
                    mirror: true
                });
                AOS.refresh();
            }, 700);

            const timer = setTimeout(() => {
                setIsSplashVisible(false);
            }, 1000);

            return () => {
                clearTimeout(timer);
                clearTimeout(aosTimer);
            };
        }
    }, [isSplashVisible, location.pathname]);







    return (
        <>
            <SplashScreen isVisible={isSplashVisible} />
            <div className={`main-content ${isSplashVisible ? 'loading' : 'loaded'}`}>
                <Outlet/>
            </div>
        </>
    );
}

export default MainPage;