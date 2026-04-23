import './index.scss';
import iamge1 from '../../../assets/balacaSekil.png';

function AboutEvent() {
    return (
        <section id="aboutEvent">
            <div className="container">
                <div className="about-grid">
                    <div className="text-side">
                        <h2>About the Event</h2>
                        <p>
                            World Environment Day is the United Nations' principal vehicle for
                            encouraging worldwide awareness and action for the environment. Held
                            annually since 1973, the Day has also become a vital platform for
                            promoting progress on the environmental dimensions of the Sustainable
                            Development Goals. With the United Nations Environment Programme
                            (UNEP) at the helm, over 150 countries participate each year. Major
                            corporations, non-governmental organizations, communities,
                            governments, and celebrities from across the world adopt the World
                            Environment Day brand to champion environmental causes.
                        </p>
                    </div>
                    <div className="image-side">
                        <div className="circular-logo-wrap">
                            {/* Using main logo as placeholder, styled in SCSS to look like wood-carved */}
                            <img src={iamge1} alt="WED logo" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default AboutEvent;
