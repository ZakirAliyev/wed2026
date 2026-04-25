import './styles/main.scss';
import {createBrowserRouter} from "react-router";
import {ROUTES} from "./routes/ROUTES.jsx";
import {RouterProvider} from "react-router-dom";
import {Suspense, useState} from "react";
import SplashScreen from "./components/SplashScreen/SplashScreen";

function App() {
    const [showSplash, setShowSplash] = useState(true);
    const routes = createBrowserRouter(ROUTES);

    return (
        <Suspense fallback={null}>
            {showSplash && <SplashScreen onComplete={() => setShowSplash(false)} />}
            <RouterProvider router={routes}/>
        </Suspense>
    )
}

export default App