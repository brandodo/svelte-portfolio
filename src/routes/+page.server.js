import { roles, captions } from '$lib/data/profile.js';

export const load = () => {
	return {
		roles,
		captions
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
