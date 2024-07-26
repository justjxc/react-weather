const SmallText = ({ text }) => {
	if (text !== '\u2103' && text !== '%') {
		return <span className='text-xs'>{text}</span>;
	} else {
		return <span>{text}</span>;
	}
};

export default SmallText;
