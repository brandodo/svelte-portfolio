<script>
	import { page } from '$app/state';
	import { fly } from 'svelte/transition';
	import { onMount } from 'svelte';
	import brandon from '$lib/assets/images/brandon.jpg';

	let { data } = $props();
	let { roles } = data;
	let currentRole = $state(0);

	/**
	 * @type {string}
	 */
	let theme = $derived(page.data.theme);

	onMount(() => {
		const tagline = setInterval(() => {
			currentRole = (currentRole + 1) % roles.length;
		}, 3500);

		return () => clearInterval(tagline);
	});
</script>

<div
	in:fly={{ y: -50, duration: 1000 }}
	class="relative flex h-full flex-col items-center justify-center space-y-4 px-4 text-center"
>
	<div class="relative size-24 md:size-32">
		<img src={brandon} alt="Profile" class="absolute mx-auto size-24 rounded-full p-1 md:size-32" />
	</div>
	<h2 class="text-lg tracking-tighter md:text-5xl">Hi, I'm</h2>

	<h1 class="text-5xl font-bold tracking-tighter md:text-8xl">Brandon Ong</h1>

	<div class="h-8 overflow-hidden">
		{#each roles as role, i}
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
		I develop web solutions that are functional, universally accessible, and aesthetically pleasing.
	</p>
</div>
