import { projects } from '$lib/data/projects.js';

export const load = () => {
	return {
		projects
	};
};

export const actions = {
	setTheme: async ({ url, cookies }) => {
		const theme = url.searchParams.get('theme');

		if (theme) {
			cookies.set('theme', theme, { path: '/' });
		}
	}
};
