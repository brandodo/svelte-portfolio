<script>
	import { page } from '$app/state';
	import { Button } from '$lib/components/ui/button';
	import { ROUTES } from '$lib/enums';

	let homeRoute = ROUTES.HOME;
	let experienceRoute = ROUTES.EXPERIENCE;
	let projectsRoute = ROUTES.PROJECTS;
	let pathname = $derived(page.url.pathname);
</script>

<nav class="flex w-full items-center justify-center gap-2">
	<Button
		href={homeRoute}
		variant={pathname === homeRoute ? 'ghost' : 'default'}
		class="rounded-none {pathname === homeRoute ? 'hover:bg-transparent' : ''}">HOME</Button
	>
	<Button
		href={experienceRoute}
		variant={pathname === experienceRoute ? 'ghost' : 'default'}
		class="rounded-none {pathname === experienceRoute ? 'hover:bg-transparent' : ''}"
		>EXPERIENCE</Button
	>
	<Button
		href={projectsRoute}
		variant={pathname === projectsRoute ? 'ghost' : 'default'}
		class="rounded-none  {pathname === projectsRoute ? 'hover:bg-transparent' : ''}"
		>PROJECTS</Button
	>
</nav>
