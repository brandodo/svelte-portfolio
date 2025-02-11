import ReactLogo from '$lib/assets/icons/React-Logo.svg?raw';
import NodeLogo from '$lib/assets/icons/NodeJS-Logo.svg?raw';
import ExpressLogo from '$lib/assets/icons/Express-Logo.svg?raw';
import MongoLogo from '$lib/assets/icons/Mongo-Logo.svg?raw';
import VercelLogo from '$lib/assets/icons/VercelIcon.svg?raw';
import NextLogo from '$lib/assets/icons/NextJSIcon.svg?raw';
import MySQLLogo from '$lib/assets/icons/MySQL-Logo.svg?raw';
import AimBeatsCover from '$lib/assets/images/aimBeats.png';
import GithubIcon from '$lib/assets/icons/GithubIcon.svg?raw';
import LoomIcon from '$lib/assets/icons/LoomIcon.svg?raw';
import FlexoOffice from '$lib/assets/images/flexoOfficeLogo.jpg';

export const projects = [
	{
		name: 'Flexo Office',
		image: FlexoOffice,
		description: 'A workplace tool for task management and collaboration',
		tools: [
			{ label: 'React', icon: ReactLogo },
			{ label: 'NextJS', icon: NextLogo },
			{ label: 'MongoDB', icon: MongoLogo }
		],
		links: [
			{
				title: 'Github',
				href: 'https://github.com/brandodo/flexooffice_v2',
				icon: GithubIcon
			},
			{
				title: 'Demo',
				href: 'https://flexooffice-v2.vercel.app/',
				icon: VercelLogo
			}
		]
	},
	{
		name: 'aimBeats',
		image: AimBeatsCover,
		description: "A circle clicking rhythm game built using music data from Spotify's Web API",
		github: 'https://github.com/brandodo/capstone-client',
		tools: [
			{ label: 'React', icon: ReactLogo },
			{ label: 'NodeJS', icon: NodeLogo },
			{ label: 'Express', icon: ExpressLogo },
			{ label: 'MySQL', icon: MySQLLogo }
		],
		links: [
			{
				title: 'Github',
				href: 'https://github.com/brandodo/capstone-client',
				icon: GithubIcon
			},
			{
				title: 'Loom Demo',
				href: 'https://www.loom.com/share/d7e289c4e6d94f1982ada8ea62019dc7?sid=73d3e658-6b02-4b82-a794-b2aef14660d9',
				icon: LoomIcon
			}
		]
	}
];
