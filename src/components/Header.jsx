import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';
import './Header.css';

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        setIsMobileMenuOpen(false);
    }, [location]);

    const navLinks = [
        { path: '/', label: 'Home' },
        { path: '/products', label: 'Products' },
        { path: '/about', label: 'About Us' },
        { path: '/contact', label: 'Contact' }
    ];

    return (
        <header className={`header ${isScrolled ? 'header--scrolled' : ''}`}>
            <div className="header__container">
                {/* Logo */}
                <Link to="/" className="header__logo">
                    <svg className="header__logo-icon" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <defs>
                            <linearGradient id="logoGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                                <stop offset="0%" stopColor="#d4af37" />
                                <stop offset="100%" stopColor="#f4d160" />
                            </linearGradient>
                        </defs>
                        <path d="M32 4C18.7 4 8 14.7 8 28c0 1.1.9 2 2 2h20v26c0 2.2 1.8 4 4 4s4-1.8 4-4V30h16c1.1 0 2-.9 2-2 0-13.3-10.7-24-24-24z" fill="url(#logoGrad)" />
                    </svg>
                    <div className="header__logo-text">
                        <span className="header__logo-title">THE UMBRELLA</span>
                        <span className="header__logo-subtitle">COMPANY</span>
                    </div>
                </Link>

                {/* Desktop Navigation */}
                <nav className="header__nav">
                    {navLinks.map((link) => (
                        <Link
                            key={link.path}
                            to={link.path}
                            className={`header__nav-link ${location.pathname === link.path ? 'header__nav-link--active' : ''}`}
                        >
                            {link.label}
                        </Link>
                    ))}
                </nav>

                {/* Actions */}
                <div className="header__actions">
                    <ThemeToggle />
                    <Link to="/products" className="header__cta btn btn-primary">
                        Shop Now
                    </Link>
                </div>

                {/* Mobile Menu Toggle */}
                <button
                    className={`header__mobile-toggle ${isMobileMenuOpen ? 'header__mobile-toggle--open' : ''}`}
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    aria-label="Toggle menu"
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
            </div>

            {/* Mobile Menu */}
            <div className={`header__mobile-menu ${isMobileMenuOpen ? 'header__mobile-menu--open' : ''}`}>
                <nav className="header__mobile-nav">
                    {navLinks.map((link) => (
                        <Link
                            key={link.path}
                            to={link.path}
                            className={`header__mobile-link ${location.pathname === link.path ? 'header__mobile-link--active' : ''}`}
                        >
                            {link.label}
                        </Link>
                    ))}
                    <Link to="/products" className="btn btn-primary" style={{ marginTop: '1rem' }}>
                        Shop Now
                    </Link>
                </nav>
            </div>
        </header>
    );
};

export default Header;
