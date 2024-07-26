import { IoMdMoon, IoMdSunny } from 'react-icons/io';

const DarkModeBtn = ({ colorScheme, toggleColorScheme }) => {
	const btnStyle = 'flex items-center border-[3px] rounded-full h-[32px] w-[56px] relative';
	const iconStyleDark = 'w-[80%] h-[80%] opacity-0 scale-0 absolute transition duration-300';
	const iconStyleLight = 'w-[80%] h-[80%] opacity-1 scale-1 absolute transition duration-300';

	let btnStyleColor = '';
	let iconWrapStyle = '';
	let iconStyleColor = '';

	if (colorScheme === 'dark') {
		iconWrapStyle = 'left-[22px] bg-neutral-700';
		btnStyleColor = 'border-neutral-700';
		iconStyleColor = 'fill-white';
	} else {
		iconWrapStyle = '-left-[2px] bg-white';
		btnStyleColor = 'border-white';
		iconStyleColor = 'fill-yellow-400';
	}

	return (
		<button onClick={toggleColorScheme} className={`${btnStyle} ${btnStyleColor}`}>
			<div className={`w-[30px] h-[30px] transition-all duration-300 rounded-full flex justify-center items-center absolute ${iconWrapStyle}`}>
				<IoMdMoon className={colorScheme === 'light' ? `${iconStyleDark} ${iconStyleColor}` : `${iconStyleLight} ${iconStyleColor}`} />
				<IoMdSunny className={colorScheme === 'dark' ? `${iconStyleDark} ${iconStyleColor}` : `${iconStyleLight} ${iconStyleColor}`} />
			</div>
		</button>
	);
};

export default DarkModeBtn;
