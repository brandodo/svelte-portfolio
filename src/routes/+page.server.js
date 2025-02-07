import { SECTION_NAMES } from '$lib/enums';
import { redirect } from '@sveltejs/kit';

export const load = ({ url }) => {
	let selectedSection;

	if (
		!url.searchParams.get('section') ||
		!Object.values(SECTION_NAMES).includes(url.searchParams.get('section'))
	) {
		redirect(303, `?section=${SECTION_NAMES.ABOUT}`);
	} else {
		selectedSection = url.searchParams.get('section');
	}

	return {
		selectedSection
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
