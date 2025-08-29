import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				// Romantic color palette
				'love-pink': 'hsl(var(--love-pink))',
				'love-pink-light': 'hsl(var(--love-pink-light))',
				'love-pink-dark': 'hsl(var(--love-pink-dark))',
				'warm-peach': 'hsl(var(--warm-peach))',
				'soft-lavender': 'hsl(var(--soft-lavender))',
				'golden-glow': 'hsl(var(--golden-glow))',
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			backgroundImage: {
				'gradient-romantic': 'var(--gradient-romantic)',
				'gradient-sunset': 'var(--gradient-sunset)',
				'gradient-dreamy': 'var(--gradient-dreamy)',
			},
			boxShadow: {
				'romantic': 'var(--shadow-romantic)',
				'soft': 'var(--shadow-soft)',
				'glow': 'var(--shadow-glow)',
			},
			transitionTimingFunction: {
				'romantic': 'var(--transition-romantic)',
				'bounce-custom': 'var(--transition-bounce)',
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
				'float-hearts': {
					'0%, 100%': {
						transform: 'translateY(0) rotate(0deg)',
						opacity: '0.7'
					},
					'25%': {
						transform: 'translateY(-10px) rotate(5deg)',
						opacity: '1'
					},
					'75%': {
						transform: 'translateY(-5px) rotate(-3deg)',
						opacity: '0.8'
					}
				},
				'drive-car': {
					'0%': {
						transform: 'translateX(calc(100vw + 100px))'
					},
					'100%': {
						transform: 'translateX(-100px)'
					}
				},
				'pulse-heart': {
					'0%, 100%': {
						transform: 'scale(1)'
					},
					'50%': {
						transform: 'scale(1.1)'
					}
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'float-hearts': 'float-hearts 3s ease-in-out infinite',
				'drive-car': 'drive-car 4s linear infinite',
				'pulse-heart': 'pulse-heart 1.5s ease-in-out infinite',
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
