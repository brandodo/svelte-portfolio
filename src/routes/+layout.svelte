<script>
	import { Button } from '$lib/components/ui/button';
	import '../app.css';
	import { SECTION_NAMES } from '$lib/enums';
	import { page } from '$app/state';
	import GithubIcon from '$lib/assets/icons/GithubIcon.svg?raw';
	import LinkedInIcon from '$lib/assets/icons/LinkedInIcon.svg?raw';
	import EmailIcon from '$lib/assets/icons/EmailIcon.svg?raw';
	import SunIcon from '$lib/assets/icons/SunIcon.svg?raw';
	import MoonIcon from '$lib/assets/icons/MoonIcon.svg?raw';
	import SNESIcon from '$lib/assets/icons/SNESIcon.svg?raw';
	import darkBiden from '$lib/assets/images/darkbiden.png';

	import {
		Tooltip,
		TooltipContent,
		TooltipProvider,
		TooltipTrigger
	} from '$lib/components/ui/tooltip';
	import { Button as FormButton } from '$lib/components/ui/form';
	import { enhance } from '$app/forms';
	import Icon from '$lib/components/Icon.svelte';
	import { fly } from 'svelte/transition';

	let { data, children } = $props();
	let selectedSection = $derived(page.url.searchParams.get('section'));
	let theme = $derived(data.theme);

	// @ts-ignore
	const submitUpdateTheme = ({ action }) => {
		const theme = action.searchParams.get('theme');

		if (theme) {
			document.documentElement.setAttribute('data-theme', theme);
		}
	};
	const socials = [
		{ icon: LinkedInIcon, href: 'https://linkedin.com/in/ong-brandon/', label: '/in/ong-brandon' },
		{ icon: GithubIcon, href: 'https://github.com/brandodo', label: '/brandodo' },
		{ icon: EmailIcon, href: 'mailto:brandonong93@gmail.com', label: 'brandonong93@gmail.com' }
	];
</script>

<form
	method="POST"
	use:enhance={submitUpdateTheme}
	data-sveltekit-keepfocus
	data-sveltekit-noscroll
	class="absolute right-5 top-5 z-10 flex flex-col gap-2"
>
	<FormButton
		formaction="/?/setTheme&theme=light"
		class="min-w-screen {theme === 'light' ? '' : 'text-zinc-500'}"
		size="icon"
		variant="icon"
		><Icon svg={SunIcon} size="lg" />
	</FormButton>

	<FormButton
		formaction="/?/setTheme&theme=dark"
		class="min-w-screen {theme === 'dark' ? '' : 'text-zinc-500'}"
		size="icon"
		variant="icon"
		><Icon svg={MoonIcon} size="lg" />
	</FormButton>

	<FormButton
		formaction="/?/setTheme&theme=snes"
		class="min-w-screen {theme === 'snes' ? '' : 'text-zinc-500'}"
		size="icon"
		variant="icon"
		><Icon svg={SNESIcon} size="lg" />
	</FormButton>
</form>

{#if theme === 'dark'}
	<img
		src={darkBiden}
		alt="Profile"
		class="absolute -left-11 -top-4 w-36 rotate-[135deg]"
		in:fly={{ x: 0, y: 50, duration: 500 }}
		out:fly={{ x: 0, y: 50, duration: 250 }}
	/>
{/if}
<main class="align-center relative flex h-screen w-full flex-col justify-center text-foreground">
	<nav class="align-center flex w-full justify-center gap-2 pt-20">
		<Button
			href={`?section=${SECTION_NAMES.ABOUT}`}
			variant={selectedSection === SECTION_NAMES.ABOUT ? 'ghost' : 'default'}
			class="rounded-none {selectedSection === SECTION_NAMES.ABOUT ? 'hover:bg-transparent' : ''}"
			>ABOUT</Button
		>
		<Button
			href={`?section=${SECTION_NAMES.EXPERIENCE}`}
			variant={selectedSection === SECTION_NAMES.EXPERIENCE ? 'ghost' : 'default'}
			class="rounded-none {selectedSection === SECTION_NAMES.EXPERIENCE
				? 'hover:bg-transparent'
				: ''}">EXPERIENCE</Button
		>
		<Button
			href={`?section=${SECTION_NAMES.PROJECTS}`}
			variant={selectedSection === SECTION_NAMES.PROJECTS ? 'ghost' : 'default'}
			class="rounded-none  {selectedSection === SECTION_NAMES.PROJECTS
				? 'hover:bg-transparent'
				: ''}">PROJECTS</Button
		>
	</nav>

	{@render children()}

	<footer class="w-full">
		<TooltipProvider>
			<div class="align-center flex justify-center">
				{#each socials as social}
					<Tooltip>
						<TooltipTrigger>
							{#snippet child({ props: triggerProps })}
								<a
									href={social.href}
									target="_blank"
									rel="noopener noreferrer"
									class="flex size-16 items-center justify-center rounded-xl transition-transform hover:scale-110"
									{...triggerProps}
								>
									<Icon svg={social.icon} size="xl" />
								</a>
							{/snippet}
						</TooltipTrigger>
						<TooltipContent class="">{social.label}</TooltipContent>
					</Tooltip>
				{/each}
			</div>
		</TooltipProvider>
	</footer>
</main>
