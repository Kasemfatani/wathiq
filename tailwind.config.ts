import type { Config } from 'tailwindcss';
import { custom } from 'zod';

const config: Config = {
  darkMode: ['class'],
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
  	extend: {
  		container: {},
  		screens: {
  			custom: '1500px',
  			custom2: '1700px',
  			custom3: '1200px'
  		},
  		backgroundImage: {
  			'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
  			'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
  			AboutHead: 'linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5)), url("/aboutHead.jpeg")',
  			SignUpHead: 'linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5)), url("/signUp.jpeg")',
  			VerificationHead: 'linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5)), url("/Verification.jpg")',
  			PaymentHead: 'linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5)), url("/payment.jpeg")'
  		},
  		colors: {
  			primaryColor: '#025AB4',
  			secColor: '#1AC5BD',
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			}
  		},
  		boxShadow: {
  			custom: '30px 0px 0px 0 rgba(250, 132, 67, 1)',
  			travel: '-25px -43px 0px 0 rgba(255, 243, 237, 1)',
  			contact: '-25px -36px 0px 0 rgba(255, 243, 237, 1)',
  			sm: '0px 0px 30px 0 rgba(250, 132, 67, 1)',
  			reserv: '0px 0px 30px 0 rgba(0, 0, 0, .1)'
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
  		animation: {
  			'background-position-spin': 'background-position-spin 3000ms infinite alternate',
  			'border-beam': 'border-beam calc(var(--duration)*1s) infinite linear',
  			meteor: 'meteor 5s linear infinite',
  			marquee: 'marquee var(--duration) infinite linear',
  			'marquee-vertical': 'marquee-vertical var(--duration) linear infinite'
  		},
  		keyframes: {
  			'background-position-spin': {
  				'0%': {
  					backgroundPosition: 'top center'
  				},
  				'100%': {
  					backgroundPosition: 'bottom center'
  				}
  			},
  			'border-beam': {
  				'100%': {
  					'offset-distance': '100%'
  				}
  			},
  			meteor: {
  				'0%': {
  					transform: 'rotate(215deg) translateX(0)',
  					opacity: '1'
  				},
  				'70%': {
  					opacity: '1'
  				},
  				'100%': {
  					transform: 'rotate(215deg) translateX(-500px)',
  					opacity: '0'
  				}
  			},
  			marquee: {
  				from: {
  					transform: 'translateX(0)'
  				},
  				to: {
  					transform: 'translateX(calc(-100% - var(--gap)))'
  				}
  			},
  			'marquee-vertical': {
  				from: {
  					transform: 'translateY(0)'
  				},
  				to: {
  					transform: 'translateY(calc(-100% - var(--gap)))'
  				}
  			}
  		}
  	}
  },
  plugins: [require('tailwindcss-animate')],
};
export default config;
