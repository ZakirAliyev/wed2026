import {Outlet, useLocation} from "react-router-dom";
import {useState, useEffect, useLayoutEffect} from "react";
import SplashScreen from "../../components/UserComponents/SplashScreen";
import SmoothScroll from "../../components/UserComponents/SmoothScroll";

function MainPage() {
    const [isSplashVisible, setIsSplashVisible] = useState(true);
    const location = useLocation();

    useLayoutEffect(() => {
        // Show splash screen on route change
        setIsSplashVisible(true);
    }, [location.pathname]);


    useEffect(() => {
        if (isSplashVisible) {
            const timer = setTimeout(() => {
                setIsSplashVisible(false);
            }, 1000);

            return () => {
                clearTimeout(timer);
            };
        }
    }, [isSplashVisible, location.pathname]);







    return (
        <SmoothScroll>
            <SplashScreen isVisible={isSplashVisible} />
            <div className={`main-content ${isSplashVisible ? 'loading' : 'loaded'}`}>
                <Outlet/>
            </div>
        </SmoothScroll>
    );
}

export default MainPage;