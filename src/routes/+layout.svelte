<script>
	import '../app.css';
	import GithubIcon from '$lib/assets/icons/GithubIcon.svg?raw';
	import LinkedInIcon from '$lib/assets/icons/LinkedInIcon.svg?raw';
	import EmailIcon from '$lib/assets/icons/EmailIcon.svg?raw';
	import SunIcon from '$lib/assets/icons/SunIcon.svg?raw';
	import MoonIcon from '$lib/assets/icons/MoonIcon.svg?raw';
	import SNESIcon from '$lib/assets/icons/SNESIcon.svg?raw';
	import darkBiden from '$lib/assets/images/darkbiden.png';
	import SpaceInvaderIcon from '$lib/assets/images/SpaceInvaderIcon.svg?raw';
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
	import Navigation from '$lib/components/Navigation.svelte';

	let { data, children } = $props();
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

<main
	class="relative flex h-dvh w-full flex-col items-center justify-center overflow-hidden py-20 text-foreground"
>
	<form
		method="POST"
		use:enhance={submitUpdateTheme}
		data-sveltekit-keepfocus
		data-sveltekit-noscroll
		class="absolute right-5 top-5 z-10 flex gap-2 sm:flex-col"
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
		<div>
			<img
				src={darkBiden}
				alt="Profile"
				class="absolute -left-11 -top-4 w-36 rotate-[135deg]"
				in:fly={{ x: 0, y: 50, duration: 500 }}
				out:fly={{ x: 0, y: 50, duration: 250 }}
			/>
		</div>
	{/if}

	{#if theme === 'snes'}
		<div
			in:fly={{ x: 0, y: 50, duration: 500 }}
			out:fly={{ x: 0, y: 50, duration: 250 }}
			class="absolute -bottom-12 -left-12 h-fit w-fit rotate-[45deg] opacity-50"
		>
			<Icon svg={SpaceInvaderIcon} --svg-width="12rem" --svg-height="12rem" />
		</div>
	{/if}

	<Navigation />
	
	<section
		class="no-scrollbar relative my-5 flex h-[800px] flex-col items-center overflow-y-scroll md:w-[80%]"
	>
		{@render children()}
	</section>

	<footer class="w-full">
		<TooltipProvider>
			<div class="flex items-center justify-center">
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
