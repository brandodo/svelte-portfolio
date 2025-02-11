<script>
	import { Card, CardContent } from '$lib/components/ui/card';
	import { fly } from 'svelte/transition';
	import Icon from '$lib/components/Icon.svelte';
	import { page } from '$app/state';
	import { Badge } from '$lib/components/ui/badge';
	import ExternalLinkIcon from '$lib/assets/icons/External-Link.svg?raw';

	let theme = $derived(page.data.theme);
	let { data } = $props();
	let { projects } = data;
</script>

<div class="flex flex-wrap items-center justify-center gap-y-5" in:fly={{ x: 150, duration: 1000 }}>
	{#each projects as project, i}
		<Card
			class="group flex h-fit w-full flex-col items-center rounded-none border-none shadow-none duration-300 hover:bg-secondary hover:opacity-100 hover:shadow-lg lg:w-full lg:flex-row lg:opacity-75 "
		>
			<img
				src={project.image}
				alt={project.name}
				class="hidden max-h-[400px] w-1/4 object-cover object-center p-5 shadow-xl duration-300 [transform:perspective(1000px)_rotateX(10deg)_rotateY(25deg)_rotateZ(-3deg)] group-hover:shadow-none group-hover:[transform:perspective(1000px)_rotateX(0deg)_rotateY(0deg)_rotateZ(0deg)] lg:flex"
			/>

			<CardContent class="w-full">
				<div class="flex items-center">
					<h3 class="text-2xl font-bold">
						{project.name}
					</h3>

					<Badge
						href={project.product.href}
						target="_blank"
						variant="ghost"
						class="no-wrap flex h-fit items-center justify-center gap-1 rounded-none border-none py-2 transition hover:-translate-y-1  hover:translate-x-1 hover:text-zinc-500"
					>
						<Icon svg={ExternalLinkIcon} size="sm" />
					</Badge>
				</div>

				<div class="flex flex-col flex-wrap gap-5 px-2 pt-1">
					<p>{project.description[theme]}</p>

					{#each project.versions as version}
						<div class="flex items-center gap-2">
							<h4 class="font-bold">{version.version}</h4>

							{#each version.stack as skill}
								<Icon
									svg={skill.icon}
									title={skill.label}
									size="lg"
									fill={theme === 'light' ? '#000 ' : '#fff'}
								/>
							{/each}
						</div>
					{/each}

					<div class="flex flex-col items-start gap-2 md:flex-row md:items-center">
						{#each project.links as link}
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
				</div>
			</CardContent>
		</Card>

		{#if i < projects.length - 1}
			<hr class="w-1/4 self-center" />
		{/if}
	{/each}
</div>
