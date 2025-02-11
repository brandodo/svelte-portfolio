<script>
	import '../app.css';
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
	import Navigation from '$lib/components/Navigation.svelte';
	import { THEMES } from '$lib/enums';

	let { data, children } = $props();
	let { socials } = data;
	let theme = $state(data.theme);

	// @ts-ignore
	const submitUpdateTheme = ({ action }) => {
		const newTheme = action.searchParams.get('theme');
		theme = newTheme;

		if (newTheme) {
			document.documentElement.setAttribute('data-theme', newTheme);
		}
	};
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
		{#each THEMES as th}
			<FormButton
				formaction="/?/setTheme&theme={th.name}"
				class="min-w-screen {theme === th.name ? '' : 'text-zinc-500'}"
				size="icon"
				variant="icon"
				><Icon svg={th.icon} size="lg" />
			</FormButton>
		{/each}
	</form>

	<img
		src={darkBiden}
		alt="Profile"
		class="absolute -left-11 -top-4 hidden w-36"
		class:biden={theme === 'dark'}
	/>

	<div class="absolute -bottom-12 -left-12 hidden h-fit w-fit" class:alien={theme === 'snes'}>
		<Icon svg={SpaceInvaderIcon} --svg-width="12rem" --svg-height="12rem" />
	</div>

	<Navigation />

	<section
		class="no-scrollbar relative my-5 flex h-[800px] max-w-[1200px] flex-col items-center overflow-y-scroll md:w-[80%]"
	>
		{@render children()}
	</section>

	<footer>
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

<style>
	.biden {
		display: flex;
		animation: peekaboo 0.25s ease-in-out;
		animation-fill-mode: forwards;
		rotate: 135deg;
	}

	.alien {
		display: flex;
		animation: peekaboo 0.25s ease-in-out;
		animation-fill-mode: forwards;
		rotate: 45deg;
	}

	@keyframes peekaboo {
		0% {
			transform: translate(25%, 150%);
			opacity: 0;
		}
		100% {
			transform: translate(0, 0);
			opacity: 1;
		}
	}
</style>
