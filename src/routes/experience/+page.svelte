<script>
	import { fly } from 'svelte/transition';
	import { Card, CardContent } from '$lib/components/ui/card';
	import ExternalLinkIcon from '$lib/assets/icons/External-Link.svg?raw';
	import Icon from '$lib/components/Icon.svelte';
	import { page } from '$app/state';
	import { Badge } from '$lib/components/ui/badge';

	let theme = $derived(page.data.theme);
	let { data } = $props();
	let { experiences } = data;
</script>

<div class="relative flex h-screen w-full flex-col gap-y-5" in:fly={{ x: -150, duration: 1000 }}>
	{#each experiences as experience, i}
		<Card
			class="group flex w-full flex-col rounded-none border-none shadow-none transition duration-300 hover:bg-secondary hover:shadow-lg md:flex-row"
		>
			<a href={experience.href} target="_blank">
				<CardContent class="flex w-full flex-col items-start">
					<div class="flex flex-col items-start gap-2 md:flex-row md:items-center">
						<div>
							{#each experience.title as title}
								{#if title.primary}
									<h2 class="text-xl font-bold group-hover:text-slate-500 md:text-2xl">
										{title.name} · {experience.company}
									</h2>
								{:else}
									<h2
										class="text-md text-xl font-bold text-zinc-500 group-hover:text-slate-500 md:text-lg"
									>
										{title.name}
									</h2>
								{/if}
							{/each}
						</div>

						<Badge
							href=""
							target="_blank"
							variant="ghost"
							class="no-wrap flex h-fit items-center justify-center gap-1 rounded-none border-none py-2 transition group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-slate-500"
						>
							<Icon svg={ExternalLinkIcon} size="sm" />
						</Badge>
					</div>

					<div class="mx-2 mb-4 mt-2">
						<p class="flex text-sm text-zinc-500">{experience.time}</p>

						<p>{@html experience.description[theme]}</p>
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
				</CardContent>
			</a>
		</Card>

		{#if i < experiences.length - 1}
			<hr class="w-1/4 self-center" />
		{/if}
	{/each}
</div>
