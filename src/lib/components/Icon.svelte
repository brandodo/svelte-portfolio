<script>
	/**
	 * The SVG the icon should render. Import an SVG directly using Vite's `?raw` suffix, and pass it into this prop.
	 * @type {string}
	 * @required
	 */
	export let svg;
	/**
	 * The icon's size. `xs` is 1rem, `sm` is 1.25rem, `md` is 1.5rem, `lg` is 2rem, and
	 * `xl` is 2.5rem. Custom sizes may be passed using the `--svg-width` and
	 * --svg-height` CSS variable props. REM units are recommended.
	 * @type {'xs' | 'sm' | 'md' | 'lg' | 'xl'}
	 * @default "md"
	 */
	export let size = 'md';

	/**
	 * The icon's title. This should describe the icon's visual appearance, and
	 * will appear as a tooltip when the icon is hovered, as well as be read by
	 * screen readers. This component will attempt to extract the title from the
	 * passed SVG if available, but it is recommended to set it manually.
	 * @type {string}
	 */
	export let title = extractTitle(svg);

	/**
	 * The icon's viewbox. This is typically extracted from the passed SVG and
	 * does not need to be set manually. It is preferable for the passed
	 * SVG to contain this attribute. If this prop is set, it will take priority
	 * over the attributes included in the SVG.
	 */
	export let viewBox = extractSvgAttributes(svg).viewBox;

	/**
	 * The icon's stroke color. This is typically extracted from the passed SVG and
	 * does not need to be set manually. It is preferable for the passed
	 * SVG to contain this attribute. If this prop is set, it will take priority
	 * over the attributes included in the SVG.
	 * @type {string}
	 */
	export let stroke = extractSvgAttributes(svg).stroke;

	/**
	 * The icon's fill color. This is typically extracted from the passed SVG and
	 * does not need to be set manually. It is preferable for the passed
	 * SVG to contain this attribute. If this prop is set, it will take priority
	 * ver the attributes included in the SVG.
	 * @type {string}
	 */
	export let fill = extractSvgAttributes(svg).fill;

	/**
	 * Additional inline styles.
	 * @type {string}
	 */
	export let style = '';

	/**
	 * Additional svg attributes
	 * @type {import('svelte/elements').SVGAttributes}
	 * @default {}
	 */
	export let svgAttributes = {};

	const iconRemSizes = {
		xs: 1,
		sm: 1.25,
		md: 1.5,
		lg: 2,
		xl: 2.5
	};

	$: elements = prepareSvg(svg);

	function prepareSvg(passedSvg) {
		if (passedSvg.includes('<svg')) {
			return passedSvg.replace(/<svg[ \n]([^>]*)>/, '').replace('</svg>', '');
		}

		console.error(
			'ui-svelte Icon: Element passed to `svg` prop is not a valid SVG element. Please pass a valid SVG element.'
		);
		return undefined;
	}

	function extractSvgAttributes(passedSvg) {
		const viewBoxRegex = /<svg[^>]*\sviewBox="([\d\- \.]+)"[^>]*>/;
		const strokeRegex = /<svg[^>]*\sstroke="([^"]+)"[^>]*>/;
		const fillRegex = /<svg[^>]*\sfill="([^"]+)"[^>]*>/;

		const viewBoxMatch = viewBoxRegex.exec(passedSvg);
		const strokeMatch = strokeRegex.exec(passedSvg);
		const fillMatch = fillRegex.exec(passedSvg);

		return {
			viewBox: viewBoxMatch && viewBoxMatch[1],
			stroke: strokeMatch ? strokeMatch[1] : 'none',
			fill: fillMatch ? fillMatch[1] : 'none'
		};
	}

	function extractTitle(passedSvg) {
		const titleRegex = /<title>([^<]+)<\/title>/;
		const titleMatch = titleRegex.exec(passedSvg);

		if (titleMatch && titleMatch[1]) {
			return titleMatch && titleMatch[1];
		}

		console.error('ui-svelte Icon: No title found in provided SVG. Please set a title manually.');
	}
</script>

<svg
	{...svgAttributes}
	xmlns="http://www.w3.org/2000/svg"
	{viewBox}
	{stroke}
	{fill}
	style="width: var(--svg-width, {iconRemSizes[size]}rem); height:
    var(--svg-height, {iconRemSizes[size]}rem);{style}"
>
	{#if title}<title>{title}</title>{/if}
	{@html elements}
</svg>
