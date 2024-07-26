import { useEffect, useState } from 'react';

const getLocalStorageValue = (key, defaultValue) => {
	const savedValue = JSON.parse(localStorage.getItem(key));
	return savedValue || defaultValue;
};

export const useLocalStorage = (key, defaultValue) => {
	const [value, setValue] = useState(() => getLocalStorageValue(key, defaultValue));

	useEffect(() => {
		localStorage.setItem(key, JSON.stringify(value));
	}, [key, value]);

	return [value, setValue];
};
