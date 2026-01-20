import { createContext, useContext, useState, useEffect } from 'react';

// Available themes
export const themes = {
    darkGold: {
        id: 'dark-gold',
        name: 'Dark Gold',
        icon: '🌙',
        colors: {
            primary: '#d4af37',
            primaryLight: '#e6c55a',
            primaryDark: '#b8860b',
            bgPrimary: '#0a0a0f',
            bgSecondary: '#12121a',
            bgTertiary: '#1a1a2e',
            textPrimary: '#ffffff',
            textSecondary: '#b0b0b0',
            textMuted: '#6b6b6b',
        }
    },
    lightClassic: {
        id: 'light-classic',
        name: 'Light Classic',
        icon: '☀️',
        colors: {
            primary: '#1a5f2a',
            primaryLight: '#2d8b47',
            primaryDark: '#134a20',
            bgPrimary: '#ffffff',
            bgSecondary: '#f5f5f5',
            bgTertiary: '#e8e8e8',
            textPrimary: '#1a1a1a',
            textSecondary: '#4a4a4a',
            textMuted: '#7a7a7a',
        }
    },
    darkOcean: {
        id: 'dark-ocean',
        name: 'Ocean Blue',
        icon: '🌊',
        colors: {
            primary: '#00bcd4',
            primaryLight: '#4dd0e1',
            primaryDark: '#0097a7',
            bgPrimary: '#0a1628',
            bgSecondary: '#0f1e32',
            bgTertiary: '#162a42',
            textPrimary: '#ffffff',
            textSecondary: '#a8c5d8',
            textMuted: '#5a7a8f',
        }
    },
    darkRose: {
        id: 'dark-rose',
        name: 'Rose Elegance',
        icon: '🌹',
        colors: {
            primary: '#e91e63',
            primaryLight: '#f06292',
            primaryDark: '#c2185b',
            bgPrimary: '#1a0a10',
            bgSecondary: '#2a1018',
            bgTertiary: '#3a1520',
            textPrimary: '#ffffff',
            textSecondary: '#d4a8b8',
            textMuted: '#8a5a6a',
        }
    },
    lightElegant: {
        id: 'light-elegant',
        name: 'Light Elegant',
        icon: '✨',
        colors: {
            primary: '#8b5cf6',
            primaryLight: '#a78bfa',
            primaryDark: '#7c3aed',
            bgPrimary: '#faf5ff',
            bgSecondary: '#f3e8ff',
            bgTertiary: '#e9d5ff',
            textPrimary: '#1e1b4b',
            textSecondary: '#4c1d95',
            textMuted: '#6b7280',
        }
    }
};

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
    const [currentTheme, setCurrentTheme] = useState(() => {
        const saved = localStorage.getItem('umbrella-theme');
        return saved && themes[saved] ? saved : 'darkGold';
    });

    useEffect(() => {
        localStorage.setItem('umbrella-theme', currentTheme);
        applyTheme(themes[currentTheme]);
    }, [currentTheme]);

    const applyTheme = (theme) => {
        const root = document.documentElement;
        const { colors } = theme;

        root.style.setProperty('--color-primary', colors.primary);
        root.style.setProperty('--color-primary-light', colors.primaryLight);
        root.style.setProperty('--color-primary-dark', colors.primaryDark);
        root.style.setProperty('--color-bg-primary', colors.bgPrimary);
        root.style.setProperty('--color-bg-secondary', colors.bgSecondary);
        root.style.setProperty('--color-bg-tertiary', colors.bgTertiary);
        root.style.setProperty('--color-text-primary', colors.textPrimary);
        root.style.setProperty('--color-text-secondary', colors.textSecondary);
        root.style.setProperty('--color-text-muted', colors.textMuted);

        // Update gradient based on theme
        const gradient = `linear-gradient(135deg, ${colors.primary} 0%, ${colors.primaryLight} 50%, ${colors.primary} 100%)`;
        root.style.setProperty('--gradient-gold', gradient);

        // Update card background for light themes
        const isLight = theme.id.includes('light');
        root.style.setProperty('--color-bg-card', isLight
            ? `rgba(255, 255, 255, 0.9)`
            : `rgba(26, 26, 46, 0.8)`
        );

        // Add theme class to body
        document.body.setAttribute('data-theme', theme.id);
    };

    const setTheme = (themeKey) => {
        if (themes[themeKey]) {
            setCurrentTheme(themeKey);
        }
    };

    const cycleTheme = () => {
        const themeKeys = Object.keys(themes);
        const currentIndex = themeKeys.indexOf(currentTheme);
        const nextIndex = (currentIndex + 1) % themeKeys.length;
        setCurrentTheme(themeKeys[nextIndex]);
    };

    return (
        <ThemeContext.Provider value={{
            theme: themes[currentTheme],
            currentTheme,
            setTheme,
            cycleTheme,
            themes
        }}>
            {children}
        </ThemeContext.Provider>
    );
};

export const useTheme = () => {
    const context = useContext(ThemeContext);
    if (!context) {
        throw new Error('useTheme must be used within a ThemeProvider');
    }
    return context;
};

export default ThemeContext;
