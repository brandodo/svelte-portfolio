import { ROUTES } from '$lib/enums';
import { redirect } from '@sveltejs/kit';
import { sequence } from '@sveltejs/kit/hooks';

/** @type {import('@sveltejs/kit').Handle} */
const handleRedirectRoute = async ({ event, resolve }) => {
	const { url } = event;

	if (!Object.values(ROUTES).some((route) => route === url.pathname)) {
		redirect(303, ROUTES.HOME);
	}
	return await resolve(event);
};

/** @type {import('@sveltejs/kit').Handle} */
const setTheme = async ({ event, resolve }) => {
	let theme = null;
	const newTheme = event.url.searchParams.get('theme');
	const cookieTheme = event.cookies.get('theme');

	if (newTheme) {
		theme = newTheme;
	} else if (cookieTheme) {
		theme = cookieTheme;
	} else {
		theme = 'light';
	}

	event.cookies.set('theme', theme, { path: '/' });
	event.locals.theme = theme;

	return await resolve(event, {
		transformPageChunk: ({ html }) => html.replace('data-theme=""', `data-theme="${theme}"`)
	});
};

export const handle = sequence(handleRedirectRoute, setTheme);
