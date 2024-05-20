import type { Config } from 'tailwindcss'
import defaultTheme from 'tailwindcss/defaultTheme'

const rem = (px: number): string => {
    return `${px * 0.0625}rem`
}

module.exports = {
    darkMode: ['class'],
    content: ['./src/**/*.{js,jsx,ts,tsx}', './*.html'],
    theme: {
        fontWeight: {
            100: '100',
            200: '200',
            300: '300',
            400: '400',
            500: '500',
            600: '600',
            700: '700',
            800: '800',
            900: '900',
        },
        fontSize: {
            10: rem(10),
            12: rem(12),
            14: rem(14),
            16: rem(16),
            18: rem(18),
            20: rem(20),
            22: rem(22),
            24: rem(24),
            26: rem(26),
            28: rem(28),
            32: rem(32),
            36: rem(36),
            42: rem(42),
            45: rem(45),
            48: rem(48),
        },
        extend: {
            spacing: {
                '4.5': rem(18),
            },
            screens: {
                xxs: '375px',
                xs: '425px',
                ...defaultTheme.screens,
            },
            colors: {},
        },
    },
    plugins: [require('tailwindcss-animate')],
} satisfies Config
