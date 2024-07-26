import SmallText from '../SmallText/SmallText';

const ListItem = ({ textLeft, textRight, symbol }) => {
	return (
		<li className='w-full flex justify-between items-center border-b border-white/50'>
			<span>{textLeft}</span>
			<span>
				{textRight}
				<SmallText text={symbol} />
			</span>
		</li>
	);
};

export default ListItem;
