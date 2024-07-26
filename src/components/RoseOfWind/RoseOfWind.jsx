import { useEffect, useRef } from 'react';
import LongArrow from './../LongArrow/LongArrow';
import { useTranslation } from 'react-i18next';

const RoseOfWind = ({ weather, colorScheme }) => {
	const { t } = useTranslation();

	useEffect(() => {
		changeWindArrow(weather.wind.deg);
	}, [weather]);

	const windArrow = useRef(null);

	const changeWindArrow = deg => {
		const newDeg = (deg + 180) % 360;

		windArrow.current.style.transform = `rotate(${newDeg}deg)`;
	};

	const borderColorLight = 'fill-white';
	const borderColorBlack = 'fill-neutral-200';
	let borderColor = '';

	colorScheme === 'black' ? (borderColor = borderColorBlack) : (borderColor = borderColorLight);

	return (
		<div className='w-[120px] h-[120px] flex justify-center items-center relative text-sm'>
			<span className='absolute top-0'>{t('north')}</span>
			<span className='absolute right-0'>{t('east')}</span>
			<span className='absolute bottom-0'>{t('south')}</span>
			<span className='absolute left-0'>{t('west')}</span>
			<div className={`w-[65%] h-[65%]  border-[3px] ${borderColor} rounded-full`}>
				<div ref={windArrow} className='transition-all duration-300'>
					<LongArrow colorScheme={colorScheme} />
				</div>
			</div>
		</div>
	);
};

export default RoseOfWind;
