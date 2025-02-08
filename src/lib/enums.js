import SunIcon from '$lib/assets/icons/SunIcon.svg?raw';
import MoonIcon from '$lib/assets/icons/MoonIcon.svg?raw';
import SNESIcon from '$lib/assets/icons/SNESIcon.svg?raw';

export const ROUTES = {
	HOME: '/',
	EXPERIENCE: '/experience',
	PROJECTS: '/projects'
};

export const THEMES = [
	{
		name: 'light',
		icon: SunIcon
	},
	{
		name: 'dark',
		icon: MoonIcon
	},
	{
		name: 'snes',
		icon: SNESIcon
	}
];
