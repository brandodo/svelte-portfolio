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

			<CardContent class="flex w-full flex-col gap-4">
				<div class="flex items-center">
					<h3 class="text-2xl font-bold">
						{project.name}
					</h3>
				</div>

				<div class="flex flex-col flex-wrap gap-3 px-2">
					<p>{project.description}</p>

					<div class="flex gap-2">
						{#each project.tools as tool}
							<Icon
								svg={tool.icon}
								title={tool.label}
								size="lg"
								fill={theme === 'light' ? '#000 ' : '#fff'}
							/>
						{/each}
					</div>
				</div>

				<div class="flex items-start gap-2 flex-row flex-wrap">
					{#each project.links as link}
						<Badge
							href={link.href}
							target="_blank"
							class="links flex items-center justify-center gap-1 rounded-none py-2"
						>
							<Icon svg={link.icon} size="xs" />
							{#if link.title}
								<p>{link.title}</p>
							{/if}
						</Badge>
					{/each}
				</div>
			</CardContent>
		</Card>

		{#if i < projects.length - 1}
			<hr class="w-1/4 self-center" />
		{/if}
	{/each}
</div>
