import { useState, useEffect } from 'react';
import { testimonials } from '../data/testimonials';
import './Testimonials.css';

const Testimonials = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex((prev) => (prev + 1) % testimonials.length);
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    const renderStars = (rating) => {
        return Array(5).fill(0).map((_, i) => (
            <span key={i} className={`testimonials__star ${i < rating ? 'testimonials__star--filled' : ''}`}>
                ★
            </span>
        ));
    };

    return (
        <section className="testimonials section">
            <div className="testimonials__bg">
                <div className="testimonials__bg-glow"></div>
            </div>

            <div className="container">
                <div className="section-title">
                    <h2>What Our <span className="text-gold">Customers</span> Say</h2>
                    <p>Don't just take our word for it — hear from those who've experienced the difference.</p>
                </div>

                <div className="testimonials__grid">
                    {testimonials.slice(0, 3).map((testimonial, index) => (
                        <div key={testimonial.id} className="testimonial-card card">
                            <div className="testimonial-card__quote">"</div>
                            <p className="testimonial-card__text">{testimonial.text}</p>
                            <div className="testimonial-card__rating">
                                {renderStars(testimonial.rating)}
                            </div>
                            <div className="testimonial-card__author">
                                <img
                                    src={testimonial.image}
                                    alt={testimonial.name}
                                    className="testimonial-card__avatar"
                                />
                                <div className="testimonial-card__info">
                                    <span className="testimonial-card__name">{testimonial.name}</span>
                                    <span className="testimonial-card__role">{testimonial.role}, {testimonial.location}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Carousel for mobile */}
                <div className="testimonials__carousel">
                    <div className="testimonial-card card">
                        <div className="testimonial-card__quote">"</div>
                        <p className="testimonial-card__text">{testimonials[activeIndex].text}</p>
                        <div className="testimonial-card__rating">
                            {renderStars(testimonials[activeIndex].rating)}
                        </div>
                        <div className="testimonial-card__author">
                            <img
                                src={testimonials[activeIndex].image}
                                alt={testimonials[activeIndex].name}
                                className="testimonial-card__avatar"
                            />
                            <div className="testimonial-card__info">
                                <span className="testimonial-card__name">{testimonials[activeIndex].name}</span>
                                <span className="testimonial-card__role">
                                    {testimonials[activeIndex].role}, {testimonials[activeIndex].location}
                                </span>
                            </div>
                        </div>
                    </div>

                    <div className="testimonials__dots">
                        {testimonials.map((_, index) => (
                            <button
                                key={index}
                                className={`testimonials__dot ${index === activeIndex ? 'testimonials__dot--active' : ''}`}
                                onClick={() => setActiveIndex(index)}
                                aria-label={`Go to testimonial ${index + 1}`}
                            />
                        ))}
                    </div>
                </div>

                <div className="testimonials__trust">
                    <div className="testimonials__trust-item">
                        <span className="testimonials__trust-num">4.9/5</span>
                        <span className="testimonials__trust-text">Average Rating</span>
                    </div>
                    <div className="testimonials__trust-divider"></div>
                    <div className="testimonials__trust-item">
                        <span className="testimonials__trust-num">10K+</span>
                        <span className="testimonials__trust-text">5-Star Reviews</span>
                    </div>
                    <div className="testimonials__trust-divider"></div>
                    <div className="testimonials__trust-item">
                        <span className="testimonials__trust-num">98%</span>
                        <span className="testimonials__trust-text">Would Recommend</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
