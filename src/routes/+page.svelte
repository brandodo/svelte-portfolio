<script>
	import { page } from '$app/state';
	import { fly } from 'svelte/transition';
	import { onMount } from 'svelte';
	import { THEMES } from '$lib/enums';

	let { data } = $props();
	let { captions, roles } = data;
	let currentRole = $state(0);

	/**
	 * @type {string}
	 */
	let theme = $derived(page.data.theme);

	let taglines = $derived(roles[theme]);

	onMount(() => {
		const tagline = setInterval(() => {
			currentRole = (currentRole + 1) % roles[theme].length;
		}, 3500);

		return () => clearInterval(tagline);
	});
</script>

<div
	in:fly={{ y: -50, duration: 1000 }}
	class="relative flex h-full flex-col items-center justify-center space-y-4 px-4 text-center"
>
	<div class="relative size-24 md:size-32">
		{#each THEMES as th, i}
			<img
				src={th.profile}
				alt="Profile"
				class="absolute mx-auto size-24 rounded-full p-1 md:size-32 {theme === th.name
					? 'z-10'
					: `-z-${10 * (i + 1)}`}"
				class:active={theme === th.name}
			/>
		{/each}
	</div>
	<h2 class="text-lg tracking-tighter md:text-5xl">Hi, I'm</h2>

	<h1 class="text-5xl font-bold tracking-tighter md:text-8xl">Brandon Ong</h1>

	<div class="h-8 overflow-hidden">
		{#each taglines as role, i}
			{#if i === currentRole}
				<p
					in:fly={{ x: 450, duration: 1250 }}
					class="text-lg font-light text-primary/80 md:text-2xl"
				>
					{role}
				</p>
			{/if}
		{/each}
	</div>

	<p class="text-md mx-auto max-w-xl text-muted-foreground md:text-lg">
		{@html captions[theme]}
	</p>
</div>

<style>
	.active {
		animation: fade 0.35s ease-in-out;
	}

	@keyframes fade {
		0% {
			rotate: 0deg;
			backface-visibility: hidden;
			/* opacity: 0; */
		}

		100% {
			rotate: 360deg;
			backface-visibility: hidden;
			/* opacity: 1; */
		}
	}
</style>
