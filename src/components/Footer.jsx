import { Link } from 'react-router-dom';
import { categories } from '../data/products';
import './Footer.css';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    const quickLinks = [
        { path: '/', label: 'Home' },
        { path: '/products', label: 'All Products' },
        { path: '/about', label: 'About Us' },
        { path: '/contact', label: 'Contact' }
    ];

    const supportLinks = [
        { label: 'Shipping & Delivery', path: '/contact' },
        { label: 'Returns & Exchange', path: '/contact' },
        { label: 'Warranty Information', path: '/about' },
        { label: 'Care Instructions', path: '/about' }
    ];

    return (
        <footer className="footer">
            <div className="container">
                <div className="footer__top">
                    <div className="footer__brand">
                        <Link to="/" className="footer__logo">
                            <svg className="footer__logo-icon" viewBox="0 0 64 64" fill="none">
                                <defs>
                                    <linearGradient id="footerLogoGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                                        <stop offset="0%" stopColor="#d4af37" />
                                        <stop offset="100%" stopColor="#f4d160" />
                                    </linearGradient>
                                </defs>
                                <path d="M32 4C18.7 4 8 14.7 8 28c0 1.1.9 2 2 2h20v26c0 2.2 1.8 4 4 4s4-1.8 4-4V30h16c1.1 0 2-.9 2-2 0-13.3-10.7-24-24-24z" fill="url(#footerLogoGrad)" />
                            </svg>
                            <div className="footer__logo-text">
                                <span className="footer__logo-title">THE UMBRELLA</span>
                                <span className="footer__logo-subtitle">COMPANY</span>
                            </div>
                        </Link>
                        <p className="footer__tagline">
                            Crafting premium umbrellas since 1985. Where elegance meets protection.
                        </p>
                        <div className="footer__social">
                            <a href="#" className="footer__social-link" aria-label="Facebook">
                                <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
                                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                                </svg>
                            </a>
                            <a href="#" className="footer__social-link" aria-label="Instagram">
                                <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
                                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" fill="none" stroke="currentColor" strokeWidth="2" />
                                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" fill="none" stroke="currentColor" strokeWidth="2" />
                                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" stroke="currentColor" strokeWidth="2" />
                                </svg>
                            </a>
                            <a href="#" className="footer__social-link" aria-label="Twitter">
                                <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
                                    <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
                                </svg>
                            </a>
                            <a href="#" className="footer__social-link" aria-label="YouTube">
                                <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
                                    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" />
                                    <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" fill="#0a0a0f" />
                                </svg>
                            </a>
                        </div>
                    </div>

                    <div className="footer__links">
                        <div className="footer__links-group">
                            <h4 className="footer__links-title">Quick Links</h4>
                            <ul className="footer__links-list">
                                {quickLinks.map((link, index) => (
                                    <li key={index}>
                                        <Link to={link.path}>{link.label}</Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="footer__links-group">
                            <h4 className="footer__links-title">Categories</h4>
                            <ul className="footer__links-list">
                                {categories.slice(1, 5).map((category) => (
                                    <li key={category.id}>
                                        <Link to="/products">{category.name}</Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="footer__links-group">
                            <h4 className="footer__links-title">Support</h4>
                            <ul className="footer__links-list">
                                {supportLinks.map((link, index) => (
                                    <li key={index}>
                                        <Link to={link.path}>{link.label}</Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    <div className="footer__newsletter">
                        <h4 className="footer__links-title">Stay Updated</h4>
                        <p>Subscribe for exclusive offers and new arrivals.</p>
                        <form className="footer__newsletter-form" onSubmit={(e) => e.preventDefault()}>
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="footer__newsletter-input"
                            />
                            <button type="submit" className="btn btn-primary footer__newsletter-btn">
                                Subscribe
                            </button>
                        </form>
                    </div>
                </div>

                <div className="footer__bottom">
                    <p className="footer__copyright">
                        © {currentYear} The Umbrella Company. All rights reserved.
                    </p>
                    <div className="footer__legal">
                        <Link to="/contact">Privacy Policy</Link>
                        <Link to="/contact">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
