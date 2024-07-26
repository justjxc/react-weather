import { useTranslation } from 'react-i18next';
import ListItem from '../ListItem/ListItem';
import WindInfo from '../WindInfo/WindInfo';

const AdditionalInfo = ({ listItems, weather, colorScheme }) => {
	const { t } = useTranslation();

	return (
		<div className='w-full'>
			<ul className='flex flex-col justify-between items-center w-full mt-8 gap-4'>
				{listItems.map(item => {
					return <ListItem key={item.id} textLeft={t(item.textLeft)} textRight={item.textRight} symbol={t(item.symbol)} />;
				})}
			</ul>

			<WindInfo weather={weather} colorScheme={colorScheme} />
		</div>
	);
};

export default AdditionalInfo;
