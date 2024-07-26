const getWindDirection = deg => {
	switch (true) {
		case (deg >= 348.75 && deg <= 360) || (deg >= 0 && deg <= 11.25):
			return 'north';

		case deg >= 11.25 && deg <= 33.75:
			return 'north-north east';

		case deg >= 33.75 && deg <= 56.25:
			return 'noth east';

		case deg >= 56.25 && deg <= 78.75:
			return 'east-north east';

		case deg >= 78.75 && deg <= 101.25:
			return 'east';

		case deg >= 101.25 && deg <= 123.75:
			return 'east-south east';

		case deg >= 123.75 && deg <= 146.25:
			return 'south east';

		case deg >= 146.25 && deg <= 168.75:
			return 'south-south east';

		case deg >= 168.75 && deg <= 191.25:
			return 'south';

		case deg >= 191.25 && deg <= 213.75:
			return 'south-south west';

		case deg >= 213.75 && deg <= 236.25:
			return 'south west';

		case deg >= 236.25 && deg <= 258.75:
			return 'west-south west';

		case deg >= 258.75 && deg <= 281.25:
			return 'west';

		case deg >= 281.25 && deg <= 303.75:
			return 'west-north west'; //W-NW

		case deg >= 303.75 && deg <= 326.25:
			return 'north west'; //NW

		case deg >= 326.25 && deg <= 348.75:
			return 'north-north west'; //N-NW

		default:
			console.log('Wrong angle');
	}
};

export default getWindDirection;
