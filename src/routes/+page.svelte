<script>
	import About from '$lib/components/sections/About.svelte';
	import Projects from '$lib/components/sections/Projects.svelte';
	import Experience from '$lib/components/sections/Experience.svelte';
	import { page } from '$app/state';
	import { SECTION_NAMES } from '$lib/enums';

	let selectedSection = $derived(page.url.searchParams.get('section'));
	let { data } = $props();
</script>

<section
	id="home"
	class="relative my-8 flex h-[800px] flex-col items-center overflow-y-scroll px-4"
>
	{#if selectedSection === SECTION_NAMES.ABOUT}
		<About />
	{/if}

	{#if selectedSection === SECTION_NAMES.EXPERIENCE}
		<Experience experiences={data.experiences} />
	{/if}

	{#if selectedSection === SECTION_NAMES.PROJECTS}
		<Projects projects={data.projects} />
	{/if}
</section>
