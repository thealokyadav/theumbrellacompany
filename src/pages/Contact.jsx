import { useState } from 'react';
import './Contact.css';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
    });
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // In a real app, this would send the data to a backend
        console.log('Form submitted:', formData);
        setSubmitted(true);
        setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
        setTimeout(() => setSubmitted(false), 5000);
    };

    return (
        <main className="contact-page">
            <div className="contact-page__hero">
                <div className="container">
                    <h1 className="contact-page__title">
                        Contact <span className="text-gold">Us</span>
                    </h1>
                    <p className="contact-page__subtitle">
                        We'd love to hear from you. Reach out for inquiries, support, or custom orders.
                    </p>
                </div>
            </div>

            <section className="contact-page__content section">
                <div className="container">
                    <div className="contact-page__grid">
                        <div className="contact-page__info">
                            <h2>Get in Touch</h2>
                            <p>Have questions about our products or need assistance with your order? Our team is here to help.</p>

                            <div className="contact-page__details">
                                <div className="contact-page__detail">
                                    <div className="contact-page__detail-icon">📍</div>
                                    <div className="contact-page__detail-content">
                                        <h4>Visit Us</h4>
                                        <p>123 Umbrella Street, Fashion District<br />Mumbai, Maharashtra 400001</p>
                                    </div>
                                </div>

                                <div className="contact-page__detail">
                                    <div className="contact-page__detail-icon">📞</div>
                                    <div className="contact-page__detail-content">
                                        <h4>Call Us</h4>
                                        <p>+91 98765 43210<br />Mon-Sat, 10 AM - 7 PM</p>
                                    </div>
                                </div>

                                <div className="contact-page__detail">
                                    <div className="contact-page__detail-icon">✉️</div>
                                    <div className="contact-page__detail-content">
                                        <h4>Email Us</h4>
                                        <p>hello@theumbrellacompany.in<br />support@theumbrellacompany.in</p>
                                    </div>
                                </div>
                            </div>

                            <div className="contact-page__hours">
                                <h4>Business Hours</h4>
                                <ul>
                                    <li><span>Monday - Friday:</span> 10:00 AM - 7:00 PM</li>
                                    <li><span>Saturday:</span> 10:00 AM - 5:00 PM</li>
                                    <li><span>Sunday:</span> Closed</li>
                                </ul>
                            </div>
                        </div>

                        <div className="contact-page__form-wrapper card">
                            <h3>Send a Message</h3>

                            {submitted && (
                                <div className="contact-page__success">
                                    <span>✓</span> Thank you! Your message has been sent. We'll get back to you soon.
                                </div>
                            )}

                            <form className="contact-page__form" onSubmit={handleSubmit}>
                                <div className="contact-page__form-row">
                                    <div className="contact-page__form-group">
                                        <label htmlFor="name">Full Name</label>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            placeholder="Your name"
                                            required
                                        />
                                    </div>
                                    <div className="contact-page__form-group">
                                        <label htmlFor="email">Email Address</label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            placeholder="Your email"
                                            required
                                        />
                                    </div>
                                </div>

                                <div className="contact-page__form-row">
                                    <div className="contact-page__form-group">
                                        <label htmlFor="phone">Phone Number</label>
                                        <input
                                            type="tel"
                                            id="phone"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            placeholder="Your phone"
                                        />
                                    </div>
                                    <div className="contact-page__form-group">
                                        <label htmlFor="subject">Subject</label>
                                        <select
                                            id="subject"
                                            name="subject"
                                            value={formData.subject}
                                            onChange={handleChange}
                                            required
                                        >
                                            <option value="">Select a subject</option>
                                            <option value="inquiry">Product Inquiry</option>
                                            <option value="order">Order Support</option>
                                            <option value="custom">Custom Order</option>
                                            <option value="wholesale">Wholesale Inquiry</option>
                                            <option value="other">Other</option>
                                        </select>
                                    </div>
                                </div>

                                <div className="contact-page__form-group">
                                    <label htmlFor="message">Message</label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        placeholder="How can we help you?"
                                        rows="5"
                                        required
                                    ></textarea>
                                </div>

                                <button type="submit" className="btn btn-primary">
                                    Send Message
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Contact;
