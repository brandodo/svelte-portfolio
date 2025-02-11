<script>
	import { page } from '$app/state';
	import { ROUTES } from '$lib/enums';
	import { Tabs, TabsList, TabsTrigger } from '$lib/components/ui/tabs';
	let pathname = $state(page.url.pathname);
</script>

<nav class="flex w-full items-center justify-center gap-2">
	<Tabs bind:value={pathname}>
		<TabsList>
			{#each Object.entries(ROUTES) as [key, route]}
				<a href={route}>
					<TabsTrigger value={route} class="font-bold">
						{key}
					</TabsTrigger>
				</a>
			{/each}
		</TabsList>
	</Tabs>
</nav>
