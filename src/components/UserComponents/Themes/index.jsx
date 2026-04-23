import './index.scss';
import tebiet from '../../../assets/tebiet.png';
import tebiet2 from '../../../assets/tebiet2.png';
import tebiet3 from '../../../assets/tebiet3.png';
import arrow from '../../../assets/arrow.png';

const themes = [
    {
        number: '01',
        title: 'Forest Restoration',
        description: 'Extensive reforestation and afforestation programs are being implemented to restore degraded lands and expand green coverage across the country.',
        linkText: 'Watch Climate Story'
    },
    {
        number: '02',
        title: 'Development of Green Urban Environments',
        description: 'Urban sustainability is being promoted through the expansion of green spaces, investment in eco-friendly public transportation, and the adoption of sustainable building practices.',
        linkText: 'Watch Climate Story',
        reverse: true
    },
    {
        number: '03',
        title: 'Clean and Renewable Energy Sources',
        description: 'Azerbaijan is accelerating its transition toward renewable energy by investing in large-scale solar and wind projects.hese initiatives aim not only to reduce greenhouse gas emissions, but also to strengthen long-term energy security and diversify the national energy mix.',
        linkText: 'Watch Climate Story'
    }
];

function Themes() {
    const themeImages = [tebiet, tebiet2, tebiet3];

    return (
        <section id="themes">
            <div className="container">
                {themes.map((theme, index) => (
                    <div className={`theme-item ${theme.reverse ? 'reverse' : ''}`} key={index}>
                        <div className="theme-content">
                            <span className="theme-number">{theme.number}</span>
                            <h2 className="theme-title">{theme.title}</h2>
                            <p className="theme-desc">{theme.description}</p>
                            <a href="#" className="theme-link">{theme.linkText}
                                <img src={arrow} alt='Arrow'/>
                            </a>
                        </div>
                        <div className="theme-image">
                            <img src={themeImages[index]} alt={theme.title} />
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Themes;
