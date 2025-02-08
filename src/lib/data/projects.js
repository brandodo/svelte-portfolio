import SvelteLogo from '$lib/assets/icons/Svelte-Logo.svg?raw';
import ReactLogo from '$lib/assets/icons/React-Logo.svg?raw';
import GraphQLLogo from '$lib/assets/icons/GraphQL-Logo.svg?raw';
import NodeLogo from '$lib/assets/icons/NodeJS-Logo.svg?raw';
import PostgresLogo from '$lib/assets/icons/Postgres-Logo.svg?raw';
import FastifyLogo from '$lib/assets/icons/Fastify-Logo.svg?raw';
import DockerLogo from '$lib/assets/icons/Docker-Logo.svg?raw';
import ExpressLogo from '$lib/assets/icons/Express-Logo.svg?raw';
import MongoLogo from '$lib/assets/icons/Mongo-Logo.svg?raw';
import ExternalLinkIcon from '$lib/assets/icons/External-Link.svg?raw';
import LinkIcon from '$lib/assets/icons/LinkIcon.svg?raw';

export const projects = [
	{
		name: 'Viral Nation Secure',
		description:
			'An award-winning, cutting-edge influencer vetting tool that empowers brands to stay ahead of risks, navigate blind spots, and ensure perfect brand alignment—delivering scalable, AI-driven reputation management.',
		links: [
			{ title: '', href: 'https://www.viralnation.com/solution/secure/', icon: ExternalLinkIcon },
			{
				title: 'SXSW 2024 Innovation Award',
				href: 'https://www.businesswire.com/news/home/20240314727908/en/Viral-Nations-AI-Powered-Brand-Safety-Solution-Wins-SXSW-Innovation-Award/',
				icon: LinkIcon
			},
			{
				title: 'v2.0 Press Release',
				href: 'https://www.viralnation.com/news-and-press/viral-nation-releases-brand-reputation-solution-2-0/',
				icon: LinkIcon
			}
		],
		versions: [
			{
				version: 'v1.0',
				href: '',
				stack: [
					{ label: 'React', icon: ReactLogo },
					{ label: 'GraphQL', icon: GraphQLLogo },
					{ label: 'NodeJS', icon: NodeLogo },
					{ label: 'Express', icon: ExpressLogo },
					{ label: 'MongoDB', icon: MongoLogo }
				]
			},
			{
				version: 'v2.0',
				href: 'https://www.viralnation.com/solution/secure/',
				stack: [
					{ label: 'Svelte & Sveltekit', icon: SvelteLogo },
					{ label: 'NodeJS', icon: NodeLogo },
					{ label: 'Fastify', icon: FastifyLogo },
					{ label: 'Postgres', icon: PostgresLogo },
					{ label: 'Docker', icon: DockerLogo }
				]
			}
		]
	},
	{
		name: 'Viral Nation CreatorOS',
		description:
			'A powerful, all-in-one platform that seamlessly connects creators, talent agents, and brands. Designed for efficiency and integration, it streamlines the entire creator management process—enabling effortless collaboration, data-driven insights, and advanced brand reputation management.',
		links: [
			{
				title: '',
				href: 'https://www.viralnation.com/solution/creatoros/',
				icon: ExternalLinkIcon
			},
			{
				title: 'Financial Post',
				href: 'https://financialpost.com/pmn/business-wire-news-releases-pmn/viral-nation-sets-its-apart-in-the-rapidly-growing-creator-economy-with-launch-of-end-to-end-talent-management-and-analytics-platform-viral-nation_creatoros',
				icon: LinkIcon
			}
		],
		versions: [
			{
				version: 'v1.0',
				href: '',
				stack: [
					{ label: 'React', icon: ReactLogo },
					{ label: 'GraphQL', icon: GraphQLLogo },
					{ label: 'NodeJS', icon: NodeLogo },
					{ label: 'Express', icon: ExpressLogo },
					{ label: 'MongoDB', icon: MongoLogo }
				]
			},
			{
				version: 'v2.0',
				href: '',
				stack: [
					{ label: 'Svelte & Sveltekit', icon: SvelteLogo },
					{ label: 'NodeJS', icon: NodeLogo },
					{ label: 'Fastify', icon: FastifyLogo },
					{ label: 'Postgres', icon: PostgresLogo },
					{ label: 'Docker', icon: DockerLogo }
				]
			}
		]
	}
];
