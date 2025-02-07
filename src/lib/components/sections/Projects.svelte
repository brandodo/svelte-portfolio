<script>
	import { Card, CardContent } from '$lib/components/ui/card';
	import { fly } from 'svelte/transition';
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

	import Icon from '../Icon.svelte';
	import { page } from '$app/state';
	import { Badge } from '../ui/badge';

	let theme = $derived(page.data.theme);

	const projects = {
		'Viral Nation Secure': {
			description:
				'An award-winning, cutting-edge influencer vetting tool that empowers brands to stay ahead of risks, navigate blind spots, and ensure perfect brand alignment—delivering scalable, AI-driven reputation management.',
			'v1.0': {
				href: '',
				stack: [
					{ label: 'React', icon: ReactLogo },
					{ label: 'GraphQL', icon: GraphQLLogo },
					{ label: 'NodeJS', icon: NodeLogo },
					{ label: 'Express', icon: ExpressLogo },
					{ label: 'MongoDB', icon: MongoLogo }
				]
			},
			'v2.0': {
				href: 'https://www.viralnation.com/solution/secure/',
				stack: [
					{ label: 'Svelte & Sveltekit', icon: SvelteLogo },
					{ label: 'NodeJS', icon: NodeLogo },
					{ label: 'Fastify', icon: FastifyLogo },
					{ label: 'Postgres', icon: PostgresLogo },
					{ label: 'Docker', icon: DockerLogo }
				]
			},
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
			]
		},
		'Viral Nation CreatorOS': {
			description:
				'A powerful, all-in-one platform that seamlessly connects creators, talent agents, and brands. Designed for efficiency and integration, it streamlines the entire creator management process—enabling effortless collaboration, data-driven insights, and advanced brand reputation management.',
			'v1.0': {
				href: '',
				stack: [
					{ label: 'React', icon: ReactLogo },
					{ label: 'GraphQL', icon: GraphQLLogo },
					{ label: 'NodeJS', icon: NodeLogo },
					{ label: 'Express', icon: ExpressLogo },
					{ label: 'MongoDB', icon: MongoLogo }
				]
			},
			'v2.0': {
				href: '',
				stack: [
					{ label: 'Svelte & Sveltekit', icon: SvelteLogo },
					{ label: 'NodeJS', icon: NodeLogo },
					{ label: 'Fastify', icon: FastifyLogo },
					{ label: 'Postgres', icon: PostgresLogo },
					{ label: 'Docker', icon: DockerLogo }
				]
			},
			links: [
				{
					title: '',
					href: 'https://www.viralnation.com/solution/creatoros/',
					icon: ExternalLinkIcon
				},
				{
					title: 'Financial Post',
					href: 'https://financialpost.com/pmn/business-wire-news-releases-pmn/viral-nation-sets-itself-apart-in-the-rapidly-growing-creator-economy-with-launch-of-end-to-end-talent-management-and-analytics-platform-viral-nation_creatoros',
					icon: LinkIcon
				}
			]
		}
		// 'Spotify AI Playlist': {
		// 	'v1.0': {
		// 		href: '',
		// 		stack: [
		// 			{ label: 'React', icon: ReactLogo },
		// 			{ label: 'GraphQL', icon: GraphQLLogo },
		// 			{ label: 'NodeJS', icon: NodeLogo },
		// 			{ label: 'Express', icon: ExpressLogo }
		// 		]
		// 	}
		// }
	};
</script>

<div
	class="flex h-40 w-[80%] flex-wrap items-center justify-center gap-y-5"
	in:fly={{ x: 150, duration: 1000 }}
>
	{#each Object.entries(projects) as [category, items]}
		<Card
			class="flex w-full rounded-none border-none shadow-none duration-300 hover:border-2 hover:bg-secondary hover:shadow-lg "
		>
			<CardContent class="w-full">
				<h3 class="mb-6 text-2xl font-bold">
					{category}
				</h3>
				<div class="flex flex-col flex-wrap gap-5">
					{#each Object.entries(items) as [key, item]}
						{#if key === 'links'}
							<div class="flex flex-col items-start gap-2 md:flex-row md:items-center">
								{#each item as link}
									<Badge
										href={link.href}
										target="_blank"
										class="flex items-center justify-center gap-1 rounded-none py-2"
									>
										<Icon svg={link.icon} size="xs" />
										{#if link.title}
											<p>{link.title}</p>
										{/if}
									</Badge>
								{/each}
							</div>
						{:else if key === 'description'}
							<p>{item}</p>
						{:else if typeof item === 'object'}
							<div class="flex items-center gap-2">
								<h4 class="font-bold">{key}</h4>

								{#each item.stack as skill}
									<Icon
										svg={skill.icon}
										title={skill.label}
										size="lg"
										fill={theme === 'light' ? '#000 ' : '#fff'}
									/>
								{/each}
							</div>
						{/if}
					{/each}
				</div>
			</CardContent>
		</Card>
	{/each}
</div>
