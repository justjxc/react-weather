import { IoIosSearch } from 'react-icons/io';
import getData from '../../utils/getData';
import { useTranslation } from 'react-i18next';

const SearchForm = ({ city, setCity, setWeather, colorScheme, lang }) => {
	const { t } = useTranslation();

	const bgColorLight = 'bg-white';
	const bgColorDark = 'bg-neutral-800';
	const textColorLight = 'text-black';
	const textColorDark = 'text-neutral-200';

	let bgColor = '';
	let textColor = '';

	if (colorScheme === 'dark') {
		bgColor = bgColorDark;
		textColor = textColorDark;
	} else {
		bgColor = bgColorLight;
		textColor = textColorLight;
	}

	return (
		<form onSubmit={e => getData(e, city, setCity, setWeather, lang)} className='flex items-center'>
			<div className='flex w-56 h-10 relative'>
				<input
					type='text'
					value={city}
					onChange={e => setCity(e.target.value)}
					placeholder={t('placeholder')}
					className={`${bgColor} ${textColor} border-none outline-none w-full h-full p-2 rounded-lg`}
				/>
				<button type='submit'>
					<IoIosSearch className='text-3xl text-neutral-500 absolute top-[0.4rem] right-2' />
				</button>
			</div>
		</form>
	);
};

export default SearchForm;
