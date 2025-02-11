import { socials } from '$lib/data/profile.js';

export const load = ({ locals }) => {
	return { theme: locals.theme, socials };
};
