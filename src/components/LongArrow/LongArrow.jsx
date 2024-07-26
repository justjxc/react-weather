const LongArrow = ({ colorScheme }) => {
	const fillLight = 'fill-white';
	const fillBlack = 'fill-neutral-200';
	let fill = '';

	colorScheme === 'black' ? (fill = fillBlack) : (fill = fillLight);

	return (
		<svg
			className='-rotate-[90deg]'
			version='1.1'
			xmlns='http://www.w3.org/2000/svg'
			xmlnsXlink='http://www.w3.org/1999/xlink'
			x='0px'
			y='0px'
			viewBox='0 0 256 256'
			xmlSpace='preserve'
		>
			<g>
				<path className={fill} d='M10,123.8h219.1v8.4H10V123.8z' />
				<path className={fill} d='M203.9,115.4L246,128l-42.1,12.6V115.4z' />
			</g>
		</svg>
	);
};

export default LongArrow;
