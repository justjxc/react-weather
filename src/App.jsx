import React, { Suspense, useEffect, useState } from 'react';
import { useLocalStorage } from './utils/useLocalStorage';
import i18n from './i18n';

import getData from './utils/getData';
import detectDarkMode from './utils/detectDarkMode';
import Layout from './components/Layout/Layout';
import Preloader from './components/Preloader/Preloader';
import DarkModeBtn from './components/DarkModeBtn/DarkModeBtn';
import SearchForm from './components/SearchForm/SearchFrom';
import MainInfo from './components/MainInfo/MainInfo';
import AdditionalInfo from './components/AdditionalInfo/AdditionalInfo';
import LanguageSwitchBtn from './components/LanguageSwitchBtn/LanguageSwitchBtn';

const initialValue = {
	cityEn: '',
	cityRu: '',
	temp: '',
	tempFeelsLike: '',
	humidity: '',
	pressure: '',
	sky: '',
	wind: {
		deg: '',
		dir: '',
		speed: '',
	},
	icon: '',
};

const App = () => {
	const [city, setCity] = useState('');
	const [weather, setWeather] = useState(initialValue);
	const [isLoaded, setIsLoaded] = useState(false);
	const [colorScheme, setColorScheme] = useLocalStorage('weatherAppColorScheme', detectDarkMode());
	const [lang, setLang] = useState(i18n.translator.language);

	const gradientColorLight = 'from-blue-400 to-blue-800';
	const gradientColorDark = 'from-blue-950 to-slate-950';

	let gradientColor = '';

	colorScheme === 'dark' ? (gradientColor = gradientColorDark) : (gradientColor = gradientColorLight);

	useEffect(() => {
		if (navigator.geolocation) {
			navigator.geolocation.getCurrentPosition(
				position => {
					const lat = position.coords.latitude;
					const lon = position.coords.longitude;

					const request = `https://api-bdc.net/data/reverse-geocode?latitude=${lat}&longitude=${lon}&localityLanguage=en&key=${process.env.REACT_APP_GEOCODER_API_KEY}`;

					fetch(request, { method: 'GET' })
						.then(response => response.json())
						.then(data => {
							setCity(data.city);
							getData(null, data.city, setCity, setWeather, lang);
						})
						.catch(error => console.log(error.message));
				},
				() => {
					console.log('error');
				}
			);
		}
	}, []);

	useEffect(() => {
		getData(null, weather.cityEn, setCity, setWeather, lang);
	}, [lang]);

	const weatherIconUrl = `https://openweathermap.org/img/wn/${weather.icon}@2x.png`;

	const listItems = [
		{
			id: Math.floor(Math.random() * Date.now()).toString(16),
			textLeft: 'feelsLike',
			textRight: weather.tempFeelsLike,
			symbol: 'temp',
		},

		{
			id: Math.floor(Math.random() * Date.now()).toString(16),
			textLeft: 'humidity',
			textRight: weather.humidity,
			symbol: 'percent',
		},

		{
			id: Math.floor(Math.random() * Date.now()).toString(16),
			textLeft: 'pressure',
			textRight: weather.pressure,
			symbol: 'mmhg',
		},
	];

	const toggleColorScheme = () => {
		setColorScheme(prev => (prev === 'light' ? 'dark' : 'light'));
	};

	return (
		<Layout colorScheme={colorScheme}>
			<div
				onLoad={() => setIsLoaded(true)}
				className={`bg-gradient-to-b ${gradientColor} transition-all duration-300 text-center p-12 pt-6 rounded-2xl flex justify-between items-center shadow-card`}
			>
				<div className='flex flex-col items-center'>
					<div className='w-full flex justify-between mb-4'>
						<LanguageSwitchBtn setLang={setLang} />

						<DarkModeBtn colorScheme={colorScheme} toggleColorScheme={toggleColorScheme} />
					</div>

					<SearchForm city={city} setCity={setCity} setWeather={setWeather} colorScheme={colorScheme} lang={lang} />

					<MainInfo weather={weather} weatherIconUrl={weatherIconUrl} lang={lang} />

					<AdditionalInfo listItems={listItems} weather={weather} colorScheme={colorScheme} />
				</div>
			</div>

			{!isLoaded && <Preloader isLoaded={isLoaded} />}
		</Layout>
	);
};

export default App;
