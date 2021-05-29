module.exports = {
    purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        colors: {
            transparent: 'transparent',
            current: 'currentColor',
            blue: {
                DEFAULT: '#00AEEF',
                dark: '#00a4e5',
            },
            white: {
                DEFAULT: '#FFFFFF',
            },
            gray: {
                darkest: '#74777a',
                dark: '#939699',
                DEFAULT: '#c0ccda',
                light: '#e0e6ed',
                lightest: '#f9fafc',
            },
        },
        extend: {},
    },
    variants: {
        extend: {},
    },
    plugins: [],
}
