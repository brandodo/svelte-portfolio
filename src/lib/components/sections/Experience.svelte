<script>
	import { fly } from 'svelte/transition';
	import ViralNationImage from '$lib/assets/images/viral-nation-logo.jpg';
	import BrainStationImage from '$lib/assets/images/brainstation-logo.png';
	import TheBayImage from '$lib/assets/images/the-bay-logo.jpg';
	import { Card, CardContent } from '$lib/components/ui/card';
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
	import ExternalLinkIcon from '$lib/assets/icons/External-Link.svg?raw';
	import Icon from '../Icon.svelte';
	import { page } from '$app/state';
	import { Badge } from '../ui/badge';

	let theme = $derived(page.data.theme);

	const experiences = [
		{
			title: ['Intermediate Software Engineer II', 'Software Engineer'],
			time: '2022 - Present',
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
			company: 'Viral Nation'
		},
		{
			title: 'Teaching Assistant - Software Engineering (Part-time)',
			time: '2022 - 2023',
			description:
				"Led learning sessions for 2 different cohorts enrolled in BrainStation's Software Engineering Bootcamp. Graded and provided guidance on course projects and curriculum to help students complete the program as per course standards.",
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
			title: 'Site Operations Associate Manager',
			time: '2018 - 2022',
			description:
				"Bridged cross-functional teams, coordinating iniatives in improving the user's online shopping experience on <b>thebay.com</b>. Worked with engineering, analytics, fulfillment, external vendors, and customer service to deliver exceptional quality at all points of the customer lifecycle",
			stack: [{ label: 'Salesforce Commerce Cloud', icon: SalesforceLogo }],
			href: 'https://thebay.com/',
			image: TheBayImage,
			company: 'The Bay'
		}
	];
</script>

<div
	class="relative flex h-full w-[80%] flex-col gap-y-5 md:w-[80%]"
	in:fly={{ x: -150, duration: 1000 }}
>
	{#each experiences as experience, i}
		<Card
			class="group flex w-full flex-col rounded-none border-none shadow-none transition duration-300 hover:border-2 hover:bg-secondary hover:shadow-lg md:flex-row"
		>
			<CardContent class="flex w-full flex-col items-start gap-4 ">
				<div>
					{#if Array.isArray(experience.title)}
						{#each experience.title as title, i}
							<h2
								class={`font-bold ${i === 0 ? 'md:text-2x text-xl' : 'text-md text-zinc-400 md:text-lg'}`}
							>
								{i === 0 ? `${title} · ${experience.company}` : title}
							</h2>
						{/each}
					{:else}
						<h2 class="md:text-2x text-xl font-bold">
							{experience.title} · {experience.company}
						</h2>
					{/if}
				</div>

				<div class="m-2">
					<p class="text-md text-zinc-400">{experience.time}</p>

					<p>{@html experience.description}</p>
				</div>

				<div class="flex flex-wrap items-center gap-2">
					{#each experience.stack as stack}
						<Icon
							svg={stack.icon}
							size="lg"
							title={stack.label}
							fill={theme === 'light' ? '#000' : '#fff'}
						/>
					{/each}
				</div>

				<Badge
					href={experience.href}
					target="_blank"
					class="no-wrap flex items-center justify-center gap-1 rounded-none  py-2"
				>
					<Icon svg={ExternalLinkIcon} size="xs" />
				</Badge>
			</CardContent>
		</Card>

		{#if i < experiences.length - 1}
			<hr class="w-1/3 self-center" />
		{/if}
	{/each}
</div>
