import { useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';

const lngs = {
	en: { nativeName: 'EN' },
	ru: { nativeName: 'RU' },
};

const LanguageSwitchBtn = ({ setLang }) => {
	const { i18n } = useTranslation();

	const select = useRef(null);

	useEffect(() => {
		Array.from(select.current.children).map(child => {
			if (child.value === i18n.resolvedLanguage) select.current.value = child.value;
		});
	}, []);

	const handleSelectChange = () => {
		i18n.changeLanguage(select.current.value);

		setLang(prev => (prev === 'en' ? 'ru' : 'en'));
	};

	return (
		<div>
			<select ref={select} className='bg-transparent outline-none' onChange={handleSelectChange}>
				{Object.keys(lngs).map(lng => {
					return (
						<option key={lng} value={lng} className='capitalize bg-blue-700 w-20'>
							{lngs[lng].nativeName}
						</option>
					);
				})}
			</select>
		</div>
	);
};

export default LanguageSwitchBtn;
