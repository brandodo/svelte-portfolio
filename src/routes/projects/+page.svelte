<script>
	import { Card, CardContent } from '$lib/components/ui/card';
	import { fly } from 'svelte/transition';
	import Icon from '$lib/components/Icon.svelte';
	import { page } from '$app/state';
	import { Badge } from '$lib/components/ui/badge';

	let theme = $derived(page.data.theme);
	let { data } = $props();
	let { projects } = data;
</script>

<div
	class="flex w-[80%] flex-wrap items-center justify-center gap-y-5"
	in:fly={{ x: 150, duration: 1000 }}
>
	{#each projects as project, i}
		<Card
			class="flex h-fit w-full flex-col rounded-none border-4 shadow-none duration-300 hover:bg-secondary hover:shadow-lg lg:w-full lg:flex-row "
		>
			<img
				src={project.image}
				alt={project.name}
				class="max-h-[400px] w-full object-cover object-center p-5 lg:w-1/3 lg:max-w-[400px]"
			/>

			<CardContent class="w-full">
				<h3 class="mb-6 text-2xl font-bold">
					{project.name}
				</h3>
				<div class="flex flex-col flex-wrap gap-5">
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
	{/each}
</div>
