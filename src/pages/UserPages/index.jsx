import {Outlet} from "react-router-dom";
import SmoothScroll from "../../components/UserComponents/SmoothScroll";

function MainPage() {
    return (
        <SmoothScroll>
            <div className="main-content loaded">
                <Outlet/>
            </div>
        </SmoothScroll>
    );
}

export default MainPage;