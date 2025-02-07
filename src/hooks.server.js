export const handle = async ({ event, resolve }) => {
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
