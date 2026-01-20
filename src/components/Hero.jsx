import { Link } from 'react-router-dom';
import './Hero.css';
import heroUmbrella from '../assets/umbrellas/hero_umbrella.png';

const Hero = () => {
    return (
        <section className="hero">
            {/* Background Elements */}
            <div className="hero__bg">
                <div className="hero__bg-gradient"></div>
                <div className="hero__bg-pattern"></div>
                <div className="hero__bg-glow"></div>
            </div>

            <div className="hero__container container">
                <div className="hero__content">
                    <div className="hero__badge animate-fade-in-up">
                        <span className="hero__badge-icon">☂</span>
                        <span>Premium Quality Since 1985</span>
                    </div>

                    <h1 className="hero__title animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
                        Shelter in <span className="text-gold">Elegance</span>
                    </h1>

                    <p className="hero__subtitle animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                        Discover our handcrafted collection of luxury umbrellas. Each piece is a masterwork
                        of design, durability, and distinction — crafted for those who refuse to compromise.
                    </p>

                    <div className="hero__cta animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
                        <Link to="/products" className="btn btn-primary">
                            Explore Collection
                        </Link>
                        <Link to="/about" className="btn btn-secondary">
                            Our Story
                        </Link>
                    </div>

                    <div className="hero__stats animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
                        <div className="hero__stat">
                            <span className="hero__stat-number">38+</span>
                            <span className="hero__stat-label">Years of Excellence</span>
                        </div>
                        <div className="hero__stat">
                            <span className="hero__stat-number">150K+</span>
                            <span className="hero__stat-label">Happy Customers</span>
                        </div>
                        <div className="hero__stat">
                            <span className="hero__stat-number">100%</span>
                            <span className="hero__stat-label">Handcrafted</span>
                        </div>
                    </div>
                </div>

                <div className="hero__visual animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                    <div className="hero__umbrella-showcase">
                        <div className="hero__umbrella-glow"></div>
                        <img
                            src={heroUmbrella}
                            alt="Premium Umbrella"
                            className="hero__umbrella-image"
                        />
                        <div className="hero__floating-badge hero__floating-badge--1">
                            <span className="hero__floating-icon">✦</span>
                            <span>Premium Quality</span>
                        </div>
                        <div className="hero__floating-badge hero__floating-badge--2">
                            <span className="hero__floating-icon">🛡</span>
                            <span>Lifetime Warranty</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <div className="hero__scroll">
                <span>Scroll to explore</span>
                <div className="hero__scroll-line"></div>
            </div>
        </section>
    );
};

export default Hero;
