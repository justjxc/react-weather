import { useTranslation } from 'react-i18next';
import RoseOfWind from '../RoseOfWind/RoseOfWind';

const WindInfo = ({ weather, colorScheme }) => {
	const { t } = useTranslation();

	const getTranslatedWinDir = dir => {
		const arr = dir.split('-');

		let result = '';
		let str = '';
		let str2 = '';

		arr.map(dir1 => {
			if (dir1.split(' ').length === 1) {
				str.length === 0 ? (str += t(dir1)) : (str2 += t(dir1));
			} else {
				dir1.split(' ').map(dir2 => {
					str2 += t(dir2);
				});
			}
		});

		if (str.length > 0 && str2.length > 0) str2 = '-' + str2;

		result += str + str2;

		return result;
	};

	return (
		<div className='mt-4 bg-transparent/10 rounded-2xl w-[120%] px-[22.4px] py-[25px] relative -left-[10%]'>
			<h2 className='border-b border-white/50 pb-2'>{t('wind')}</h2>

			<div className='flex justify-between items-center mt-2'>
				<div className='flex flex-col gap-4'>
					<p>{getTranslatedWinDir(weather.wind.dir)}</p>

					<p>
						{weather.wind.speed} {t('ms')}
					</p>
				</div>

				<RoseOfWind weather={weather} colorScheme={colorScheme} />
			</div>
		</div>
	);
};

export default WindInfo;
