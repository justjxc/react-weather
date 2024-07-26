const MainInfo = ({ weather, weatherIconUrl, lang }) => {
	let city = '';

	if (lang === 'en') city = weather.cityEn;
	if (lang === 'ru') city = weather.cityRu;

	return (
		<div className='flex flex-col items-center'>
			<p className='text-2xl mt-6 font-semibold'>{city}</p>

			<img src={weatherIconUrl} alt='weather icon' className='' />

			<p className='text-3xl'>
				{weather.temp}
				{'\u2103'}
			</p>

			<p className='text-lg font-thin mt-2'>{weather.sky}</p>
		</div>
	);
};

export default MainInfo;
