import AboutSection from '../components/AboutSection';
import './About.css';

const About = () => {
    return (
        <main className="about-page">
            <div className="about-page__hero">
                <div className="container">
                    <h1 className="about-page__title">
                        About <span className="text-gold">Us</span>
                    </h1>
                    <p className="about-page__subtitle">
                        Discover the story behind The Umbrella Company
                    </p>
                </div>
            </div>

            <AboutSection isFullPage={true} />

            <section className="about-page__timeline section">
                <div className="container">
                    <h2 className="text-center mb-xl">Our <span className="text-gold">Journey</span></h2>

                    <div className="timeline">
                        <div className="timeline__item">
                            <div className="timeline__year">1985</div>
                            <div className="timeline__content">
                                <h3>The Beginning</h3>
                                <p>Founded as a small family workshop with a vision to create umbrellas that combine functionality with elegance.</p>
                            </div>
                        </div>
                        <div className="timeline__item">
                            <div className="timeline__year">1995</div>
                            <div className="timeline__content">
                                <h3>First Premium Line</h3>
                                <p>Launched our first premium collection featuring handcrafted handles and imported fabrics.</p>
                            </div>
                        </div>
                        <div className="timeline__item">
                            <div className="timeline__year">2005</div>
                            <div className="timeline__content">
                                <h3>National Recognition</h3>
                                <p>Awarded "Best Umbrella Manufacturer" and expanded operations across India.</p>
                            </div>
                        </div>
                        <div className="timeline__item">
                            <div className="timeline__year">2015</div>
                            <div className="timeline__content">
                                <h3>Innovation Era</h3>
                                <p>Introduced carbon fiber technology and automatic open/close mechanisms.</p>
                            </div>
                        </div>
                        <div className="timeline__item">
                            <div className="timeline__year">2023</div>
                            <div className="timeline__content">
                                <h3>Digital Transformation</h3>
                                <p>Launched online store, bringing our premium umbrellas to customers worldwide.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default About;
