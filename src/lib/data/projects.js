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
import CreatosOSImage from '$lib/assets/images/CreatorOS-Image.webp';
import SecureImage from '$lib/assets/images/Secure-Image.webp';

export const projects = [
	{
		name: 'Viral Nation Secure',
		image: SecureImage,
		description: {
			light:
				'An award-winning, cutting-edge influencer vetting tool that empowers brands to stay ahead of risks, navigate blind spots, and ensure perfect brand alignment—delivering scalable, AI-driven reputation management.',
			dark: '"Award-winning" influencer vetting? Okay. Does it actually prevent PR disasters? Yes. Does it scale? Yes. Is it AI-driven? Sure. Bottom line: it\'s a tool for managing influencer risk. Use it.',
			snes: 'Level up your brand defense with this award-winning influencer vetting tool. Navigate influencer blind spots and stay ahead of reputational risks with cutting-edge AI.'
		},
		product: {
			href: 'https://www.viralnation.com/solution/secure/',
			icon: ExternalLinkIcon
		},
		links: [
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
		image: CreatosOSImage,
		description: {
			light:
				'A powerful, all-in-one platform that seamlessly connects creators, talent agents, and brands. Designed for efficiency and integration, it streamlines the entire creator management process—enabling effortless collaboration, data-driven insights, and advanced brand reputation management.',
			dark: "Cut the buzzwords. This platform connects creators, agents, and brands. It's built to make creator management… manageable. Get data, track reputation, streamline workflows. It\'s software to help you run your influencer campaigns without completely losing your mind. All in one place. Finally.",
			snes: 'All-in-one command center for influencer marketing dominance.  Forge alliances, streamline management, and achieve ruthless efficiency. Data-driven insights and reputation firewalls ensure flawless brand control.'
		},
		product: {
			href: 'https://www.viralnation.com/solution/creatoros/',
			icon: ExternalLinkIcon
		},
		links: [
			{
				title: 'Financial Post',
				href: 'https://financialpost.com/pmn/business-wire-news-releases-pmn/viral-nation-sets-itself-apart-in-the-rapidly-growing-creator-economy-with-launch-of-end-to-end-talent-management-and-analytics-platform-viral-nation_creatoros',
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
