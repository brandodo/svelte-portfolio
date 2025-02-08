import { SECTION_NAMES } from '$lib/enums';
import { redirect } from '@sveltejs/kit';
import { projects } from '$lib/data/projects.js';
import { experiences } from '$lib/data/experiences.js';

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
		selectedSection,
		projects,
		experiences
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
