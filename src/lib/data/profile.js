import GithubIcon from '$lib/assets/icons/GithubIcon.svg?raw';
import LinkedInIcon from '$lib/assets/icons/LinkedInIcon.svg?raw';
import EmailIcon from '$lib/assets/icons/EmailIcon.svg?raw';

export const socials = [
	{ icon: LinkedInIcon, href: 'https://linkedin.com/in/ong-brandon/', label: '/in/ong-brandon' },
	{ icon: GithubIcon, href: 'https://github.com/brandodo', label: '/brandodo' },
	{ icon: EmailIcon, href: 'mailto:brandonong93@gmail.com', label: 'brandonong93@gmail.com' }
];

/**
 * @type {Record<string, string[]>}
 */
export const roles = {
	light: ['Full Stack Software Engineer', 'Human-Centered Developer', 'Front-End Specialist'],
	dark: ['I build websites', 'I make tech suck less for humans', 'I make pretty buttons work'],
	snes: ['Level 99 Code Architect', 'NPC-Friendly Developer', 'UI/UX Quest Master']
};

/**
 * @type {Record<string, string>}
 */
export const captions = {
	light:
		'I develop web solutions that are functional, universally accessible, and aesthetically pleasing.',
	dark: "I build websites that work, are usable by everyone, and don't offend the eye. What else do you want?",
	snes: "It's not god-tier, but the sites are stable, <i>actually</i> accessible, and… look, they won't give you graphical glitches, okay?  It's a playable build."
};
