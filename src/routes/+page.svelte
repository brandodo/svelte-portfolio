<script>
	import { page } from '$app/state';
	import { fly } from 'svelte/transition';
	import { onMount } from 'svelte';
	import { THEMES } from '$lib/enums';

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
		{#each THEMES as th}
			<img
				src={th.profile}
				alt="Profile"
				class="relative z-10 mx-auto size-24 rounded-full p-1 md:size-32 {theme === th.name
					? 'flex'
					: 'hidden'}"
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
		animation: fade 0.25s ease-in-out;
	}

	@keyframes fade {
		0% {
			rotate: 0deg;
			backface-visibility: hidden;
			opacity: 0;
		}

		100% {
			rotate: 360deg;
			backface-visibility: hidden;
			opacity: 1;
		}
	}
</style>
