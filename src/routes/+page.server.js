import { roles } from '$lib/data/profile.js';

export const load = () => {
	return {
		roles
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
