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
import LinkIcon from '$lib/assets/icons/LinkIcon.svg?raw';

export const experiences = [
	{
		title: [
			{ name: 'Intermediate Software Engineer II', primary: true },
			{ name: 'Software Engineer', primary: false }
		],
		time: 'Nov 2022 — Present',
		description:
			"Build, ship, and maintain Viral Nation's suite of award winning applications. Coordinate within cross-functional teams, including developers, designers, and product managers to deliver human-centered and accessible web solutions, serving users from Fortune 500 companies, such as <b>Meta Platforms</b>, <b>Uber</b>, and <b>Activision/Blizzard</b>",
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
		links: [
			{
				title: 'SXSW 2024 Innovation Award',
				href: 'https://www.businesswire.com/news/home/20240314727908/en/Viral-Nations-AI-Powered-Brand-Safety-Solution-Wins-SXSW-Innovation-Award/',
				icon: LinkIcon
			},
			{
				title: 'CreatorOS 2.0 Press Release',
				href: 'https://www.viralnation.com/news-and-press/viral-nation-releases-brand-reputation-solution-2-0/',
				icon: LinkIcon
			},
			{
				title: 'Financial Post',
				href: 'https://financialpost.com/pmn/business-wire-news-releases-pmn/viral-nation-sets-itself-apart-in-the-rapidly-growing-creator-economy-with-launch-of-end-to-end-talent-management-and-analytics-platform-viral-nation_creatoros',
				icon: LinkIcon
			}
		],
		company: 'Viral Nation'
	},
	{
		title: [{ name: 'Teaching Assistant - Software Engineering (Part-time)', primary: true }],
		time: 'June 2022 — Oct 2024',
		description:
			'Supported two cohorts through an 8 month long program, grading projects and assisting students with questions and course work. Led learning sessions to drive home core concepts, including responsive web design and accessibility',
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
		time: 'Sept 2021 — Nov 2022',
		description:
			"Bridged cross-functional teams, coordinating iniatives in improving the user's online shopping experience on <b>thebay.com</b>. Worked with engineering, analytics, fulfillment, external vendors, and customer service to deliver exceptional quality at all points of the customer lifecycle",
		stack: [{ label: 'Salesforce Commerce Cloud', icon: SalesforceLogo }],
		href: 'https://thebay.com/',
		image: TheBayImage,
		company: 'The Bay'
	}
];
