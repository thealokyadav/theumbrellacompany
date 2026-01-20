import './AboutSection.css';

const AboutSection = ({ isFullPage = false }) => {
    const features = [
        {
            icon: '✦',
            title: 'Handcrafted Excellence',
            description: 'Each umbrella is meticulously crafted by skilled artisans with decades of experience.'
        },
        {
            icon: '🛡',
            title: 'Lifetime Warranty',
            description: 'We stand behind our products with a comprehensive lifetime warranty on all premium items.'
        },
        {
            icon: '🌿',
            title: 'Sustainable Materials',
            description: 'We use eco-friendly materials and sustainable practices in our manufacturing process.'
        },
        {
            icon: '🎨',
            title: 'Bespoke Designs',
            description: 'Custom design services available for those seeking a truly unique umbrella experience.'
        }
    ];

    return (
        <section className={`about section ${isFullPage ? 'about--full' : ''}`}>
            <div className="container">
                <div className="about__wrapper">
                    <div className="about__content">
                        <span className="about__label">Our Story</span>
                        <h2 className="about__title">
                            Crafting <span className="text-gold">Legacy</span> Since 1985
                        </h2>
                        <p className="about__text">
                            For nearly four decades, The Umbrella Company has been synonymous with exceptional quality
                            and timeless elegance. What began as a small family workshop in the heart of India has
                            evolved into a premier destination for discerning individuals who appreciate the finer
                            things in life.
                        </p>
                        <p className="about__text">
                            Our master craftsmen blend traditional techniques passed down through generations with
                            modern innovation, creating umbrellas that are not merely functional accessories but
                            true works of art. Each piece tells a story of dedication, precision, and an unwavering
                            commitment to excellence.
                        </p>

                        {!isFullPage && (
                            <div className="about__stats-inline">
                                <div className="about__stat-item">
                                    <span className="about__stat-num">38+</span>
                                    <span className="about__stat-text">Years</span>
                                </div>
                                <div className="about__stat-item">
                                    <span className="about__stat-num">50+</span>
                                    <span className="about__stat-text">Artisans</span>
                                </div>
                                <div className="about__stat-item">
                                    <span className="about__stat-num">150K+</span>
                                    <span className="about__stat-text">Customers</span>
                                </div>
                            </div>
                        )}
                    </div>

                    <div className="about__visual">
                        <div className="about__image-container">
                            <img
                                src="https://images.unsplash.com/photo-1517686748843-bb360cfc62b3?w=600&h=700&fit=crop"
                                alt="Craftsman at work"
                                className="about__image"
                            />
                            <div className="about__image-decoration"></div>
                        </div>
                        {!isFullPage && (
                            <div className="about__experience-badge">
                                <span className="about__experience-num">38</span>
                                <span className="about__experience-text">Years of Excellence</span>
                            </div>
                        )}
                    </div>
                </div>

                {isFullPage && (
                    <>
                        <div className="about__features">
                            {features.map((feature, index) => (
                                <div key={index} className="about__feature card">
                                    <span className="about__feature-icon">{feature.icon}</span>
                                    <h3 className="about__feature-title">{feature.title}</h3>
                                    <p className="about__feature-desc">{feature.description}</p>
                                </div>
                            ))}
                        </div>

                        <div className="about__mission">
                            <div className="about__mission-content">
                                <h3>Our Mission</h3>
                                <p>
                                    To create exceptional umbrellas that combine artistry, durability, and style,
                                    providing our customers with products that transcend their functional purpose
                                    to become cherished possessions and symbols of refined taste.
                                </p>
                            </div>
                            <div className="about__mission-content">
                                <h3>Our Vision</h3>
                                <p>
                                    To be recognized globally as the premier destination for luxury umbrellas,
                                    setting the standard for quality, innovation, and customer experience in the industry.
                                </p>
                            </div>
                        </div>
                    </>
                )}
            </div>
        </section>
    );
};

export default AboutSection;
