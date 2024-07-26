import React from 'react';

import cloud from '../../assets/weather-svg/cloud-outline.svg';
import sun from '../../assets/weather-svg/sun-outline.svg';
import drop from '../../assets/weather-svg/drop.svg';

const Preloader = () => {
	return (
		<div className={'w-screen h-screen bg-white overflow-hidden absolute flex justify-center items-center'}>
			<div className='w-32 h-32 flex justify-center items-center relative'>
				<img src={sun} alt='' className='z h-16 absolute top-2 -right-2 animate-spin-slow' />

				<img src={cloud} alt='' className='z-10' />

				<div>
					<img src={drop} alt='' className='absolute z-0 h-5 bottom-5 left-4 animate-drop' />
					<img src={drop} alt='' className='absolute z-0 h-5 bottom-5 left-10 animate-drop ' style={{ animationDelay: '.2s' }} />
					<img src={drop} alt='' className='absolute z-0 h-5 bottom-5 left-16 animate-drop' />
					<img src={drop} alt='' className='absolute z-0 h-5 bottom-5 left-[5.5rem] animate-drop ' style={{ animationDelay: '.2s' }} />
				</div>
			</div>
		</div>
	);
};

export default Preloader;
