import SunIcon from '$lib/assets/icons/SunIcon.svg?raw';
import MoonIcon from '$lib/assets/icons/MoonIcon.svg?raw';
import SNESIcon from '$lib/assets/icons/SNESIcon.svg?raw';
import brandon from '$lib/assets/images/brandon.jpg';
import darkBrandon from '$lib/assets/images/brandomeme.jpeg';
import MarioBrandon from '$lib/assets/images/MarioBrandon.png';

export const ROUTES = {
	HOME: '/',
	EXPERIENCE: '/experience',
	PROJECTS: '/projects'
};

export const THEMES = [
	{
		name: 'light',
		icon: SunIcon,
		profile: brandon
	},
	{
		name: 'dark',
		icon: MoonIcon,
		profile: darkBrandon
	},
	{
		name: 'snes',
		icon: SNESIcon,
		profile: MarioBrandon
	}
];
