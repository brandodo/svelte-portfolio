import SvelteLogo from '$lib/assets/icons/Svelte-Logo.svg?raw';
import ReactLogo from '$lib/assets/icons/React-Logo.svg?raw';
import GraphQLLogo from '$lib/assets/icons/GraphQL-Logo.svg?raw';
import NodeLogo from '$lib/assets/icons/NodeJS-Logo.svg?raw';
import PostgresLogo from '$lib/assets/icons/Postgres-Logo.svg?raw';
import MongoLogo from '$lib/assets/icons/Mongo-Logo.svg?raw';
import MySQLLogo from '$lib/assets/icons/MySQL-Logo.svg?raw';
import FastifyLogo from '$lib/assets/icons/Fastify-Logo.svg?raw';
import DockerLogo from '$lib/assets/icons/Docker-Logo.svg?raw';
import ExpressLogo from '$lib/assets/icons/Express-Logo.svg?raw';
import SalesforceLogo from '$lib/assets/icons/Salesforce-Logo.svg?raw';
import ViralNationImage from '$lib/assets/images/viral-nation-logo.jpg';
import BrainStationImage from '$lib/assets/images/brainstation-logo.png';
import TheBayImage from '$lib/assets/images/the-bay-logo.jpg';

export const experiences = [
	{
		title: [
			{ name: 'Intermediate Software Engineer II', primary: true },
			{ name: 'Software Engineer', primary: false }
		],
		time: '2022 - Present',
		description: {
			light:
				"Build, ship, and maintain Viral Nation's suite of award winning applications. Coordinate within cross-functional teams, including developers, designers, and product managers to deliver human-centered and accessible web solutions, serving users from Fortune 500 companies, such as <b>Meta Platforms</b>, <b>Uber</b>, and <b>Activision/Blizzard</b>",
			dark: "Build their apps. Ship 'em. Keep 'em running. Work with whoever shows up – devs, designers, suit-types.  Make websites that work for anyone, even big shot companies like <b>Meta Platforms</b>, <b>Uber</b>, and <b>Activision/Blizzard</b>",
			snes: "I get to build some seriously cool, award-winning web apps. Teaming up with awesome devs, designers, and product folks to create user-friendly, accessible online experiences. Building stuff that even boss-level clients like <b>Meta</b>, <b>Uber</b>, and <b>Activision/Blizzard</b> love to use – and it's pretty fun!"
		},
		stack: [
			{ label: 'React', icon: ReactLogo },
			{ label: 'Svelte & Sveltekit', icon: SvelteLogo },
			{ label: 'GraphQL', icon: GraphQLLogo },
			{ label: 'NodeJS', icon: NodeLogo },
			{ label: 'Express', icon: ExpressLogo },
			{ label: 'Fastify', icon: FastifyLogo },
			{ label: 'MongoDB', icon: MongoLogo },
			{ label: 'Postgres', icon: PostgresLogo },
			{ label: 'Docker', icon: DockerLogo }
		],
		href: 'https://www.viralnation.com/',
		image: ViralNationImage,
		company: 'Viral Nation'
	},
	{
		title: [{ name: 'Teaching Assistant - Software Engineering (Part-time)', primary: true }],
		time: '2022 - 2023',
		description: {
			light:
				'Supported two cohorts through an 8 month long program, grading projects and assisting students with questions and course work. Led learning sessions to drive home core concepts, including responsive web design and accessibility',
			dark: 'Eight months. Graded projects: yes. Answered questions: also yes. Helped… facilitate program completion: mission… accomplished.',
			snes: 'mentored two cohorts through their 8-month coding quest. My role involved analyzing student builds (projects) and providing guidance to level them up.'
		},

		stack: [
			{ label: 'React', icon: ReactLogo },
			{ label: 'NodeJS', icon: NodeLogo },
			{ label: 'Express', icon: ExpressLogo },
			{ label: 'MySQL', icon: MySQLLogo }
		],
		href: 'https://brainstation.io/',
		image: BrainStationImage,
		company: 'BrainStation'
	},
	{
		title: [{ name: 'Site Operations Associate Manager', primary: true }],
		time: '2018 - 2022',
		description: {
			light:
				"Bridged cross-functional teams, coordinating iniatives in improving the user's online shopping experience on <b>thebay.com</b>. Worked with engineering, analytics, fulfillment, external vendors, and customer service to deliver exceptional quality at all points of the customer lifecycle",
			dark: 'Worked with Engineering, Analytics, Fulfillment, and Vendors – you know, the usual departments. My goal was to help deliver "exceptional quality" across the customer lifecycle. Reality was more like, "ensure things work and keep customers happy."',
			snes: "I played the role of Guild Leader, forging alliances across Engineering, Analytics, Fulfillment, and Support guilds. My quest: to optimize the user's online shopping journey, coordinating party-wide initiatives to enhance thebay.com experience."
		},
		stack: [{ label: 'Salesforce Commerce Cloud', icon: SalesforceLogo }],
		href: 'https://thebay.com/',
		image: TheBayImage,
		company: 'The Bay'
	}
];
