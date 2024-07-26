import getWindDirection from './getWindDirection';

const getData = async (e, city, setCity, setWeather, lang) => {
	if (e !== null) e.preventDefault();

	if (city !== '') {
		const requestGeo = `http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=5&appid=${process.env.REACT_APP_API_KEY}`;

		const resGeo = fetch(requestGeo, { method: 'GET' })
			.then(response => response.json())
			.then(data => {
				return data[0];
			});

		const geoData = await resGeo;

		if (geoData) {
			const requestWeather = `https://api.openweathermap.org/data/2.5/weather?lat=${geoData.lat}&lon=${geoData.lon}&units=metric&lang=${lang}&appid=${process.env.REACT_APP_API_KEY}`;

			const resWeather = fetch(requestWeather, { method: 'GET' })
				.then(response => response.json())
				.then(data => {
					return data;
				});

			const weatherData = await resWeather;

			setWeather({
				cityEn: geoData.local_names.en,
				cityRu: geoData.local_names.ru,
				temp: Math.round(weatherData.main.temp),
				tempFeelsLike: Math.round(weatherData.main.feels_like),
				humidity: weatherData.main.humidity,
				pressure: weatherData.main.pressure,
				sky: weatherData.weather[0].description,
				wind: {
					deg: weatherData.wind.deg,
					dir: getWindDirection(weatherData.wind.deg),
					speed: Math.round(weatherData.wind.speed),
				},
				icon: weatherData.weather[0].icon,
			});
		} else {
			alert('City not found');
		}

		setCity('');
	}
};

export default getData;
