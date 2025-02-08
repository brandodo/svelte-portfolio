<script>
	import { fly } from 'svelte/transition';
	import brandon from '$lib/assets/images/brandon.jpg';
	import darkBrandon from '$lib/assets/images/brandomeme.jpeg';
	import darkBiden from '$lib/assets/images/darkbiden.png';
	import { onMount } from 'svelte';
	import { page } from '$app/state';

	/**
	 * @type {Record<string, string[]>}
	 */
	const roles = {
		light: ['Full Stack Software Engineer', 'Human-Centered Developer', 'Front-End Specialist'],
		dark: ['I build websites', 'I make tech suck less for humans', 'I make pretty buttons work'],
		snes: ['Level 99 Code Architect', 'NPC-Friendly Developer', 'UI/UX Quest Master']
	};

	/**
	 * @type {Record<string, string>}
	 */
	const captions = {
		light:
			'I develop web solutions that are functional, universally accessible, and aesthetically pleasing.',
		dark: "I build websites that work, are usable by everyone, and don't offend the eye. What else do you want?",
		snes: "It's not god-tier, but the sites are stable, <i>actually</i> accessible, and… look, they won't give you graphical glitches, okay?  It's a playable build."
	};

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
	in:fly={{ y: 50, duration: 1000 }}
	class="relative flex h-full flex-col items-center justify-center space-y-4 px-4 text-center"
>
	<div class="relative">
		<img
			src={theme === 'dark' ? darkBrandon : brandon}
			alt="Profile"
			class="relative z-10 mx-auto size-32 rounded-full p-1"
		/>
	</div>
	<h2 class="text-3xl tracking-tighter md:text-5xl">Hi, I'm</h2>

	<h1 class="text-7xl font-bold tracking-tighter md:text-8xl">Brandon Ong</h1>

	<div class="h-8 overflow-hidden">
		{#each taglines as role, i}
			{#if i === currentRole}
				<p in:fly={{ x: 450, duration: 1250 }} class="text-2xl font-light text-primary/80">
					{role}
				</p>
			{/if}
		{/each}
	</div>

	<p class="mx-auto max-w-xl text-lg text-muted-foreground">
		{@html captions[theme]}
	</p>
</div>

<style>
	@keyframes spin {
		from {
			transform: rotate(0deg);
		}
		to {
			transform: rotate(360deg);
		}
	}
</style>
