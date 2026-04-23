import './index.scss';
import { HiOutlineArrowUpRight } from 'react-icons/hi2';

function Announcement() {
    return (
        <section id="announcement">
            <div className="container">
                <div className="announcement-inner">
                    <div className="badge-row">
                        <span className="line"></span>
                        About WED 2026
                    </div>
                    <h2>Republic of Azerbaijan to Host World Environment Day 2026</h2>
                    <p>
                        Azerbaijan is proud to announce that it will host the United Nations' World Environment Day 2026.
                        This landmark event will bring together global leaders, scientists, activists, and citizens to
                        address the world's most pressing environmental challenges and inspire collective action.
                    </p>
                    <a href="#" className="cta-btn">
                        <span>Read more</span>
                        <HiOutlineArrowUpRight />
                    </a>
                </div>
            </div>
        </section>
    );
}

export default Announcement;
