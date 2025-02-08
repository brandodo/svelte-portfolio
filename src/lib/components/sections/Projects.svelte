<script>
	import { Card, CardContent } from '$lib/components/ui/card';
	import { fly } from 'svelte/transition';
	import Icon from '../Icon.svelte';
	import { page } from '$app/state';
	import { Badge } from '../ui/badge';

	let theme = $derived(page.data.theme);
	let { projects } = $props();
</script>

<div
	class="flex h-40 w-[80%] flex-wrap items-center justify-center gap-y-5"
	in:fly={{ x: 150, duration: 1000 }}
>
	{#each projects as project}
		<Card
			class="flex w-full rounded-none border-none shadow-none duration-300 hover:border-2 hover:bg-secondary hover:shadow-lg "
		>
			<CardContent class="w-full">
				<h3 class="mb-6 text-2xl font-bold">
					{project.name}
				</h3>
				<div class="flex flex-col flex-wrap gap-5">
					<p>{project.description}</p>

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
