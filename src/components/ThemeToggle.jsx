import { useState, useRef, useEffect } from 'react';
import { useTheme, themes } from '../context/ThemeContext';
import './ThemeToggle.css';

const ThemeToggle = () => {
    const { theme, currentTheme, setTheme } = useTheme();
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const handleThemeSelect = (themeKey) => {
        setTheme(themeKey);
        setIsOpen(false);
    };

    return (
        <div className="theme-toggle" ref={dropdownRef}>
            <button
                className="theme-toggle__btn"
                onClick={() => setIsOpen(!isOpen)}
                aria-label="Toggle theme menu"
                title={`Current: ${theme.name}`}
            >
                <span className="theme-toggle__icon">{theme.icon}</span>
                <span className="theme-toggle__label">{theme.name}</span>
                <svg
                    className={`theme-toggle__arrow ${isOpen ? 'theme-toggle__arrow--open' : ''}`}
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                >
                    <path d="M3 4.5L6 7.5L9 4.5" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
            </button>

            <div className={`theme-toggle__dropdown ${isOpen ? 'theme-toggle__dropdown--open' : ''}`}>
                <div className="theme-toggle__dropdown-header">Choose Theme</div>
                {Object.entries(themes).map(([key, themeOption]) => (
                    <button
                        key={key}
                        className={`theme-toggle__option ${currentTheme === key ? 'theme-toggle__option--active' : ''}`}
                        onClick={() => handleThemeSelect(key)}
                    >
                        <span className="theme-toggle__option-icon">{themeOption.icon}</span>
                        <span className="theme-toggle__option-name">{themeOption.name}</span>
                        <span
                            className="theme-toggle__option-preview"
                            style={{
                                background: `linear-gradient(135deg, ${themeOption.colors.bgPrimary} 50%, ${themeOption.colors.primary} 50%)`
                            }}
                        ></span>
                        {currentTheme === key && (
                            <span className="theme-toggle__option-check">✓</span>
                        )}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default ThemeToggle;
