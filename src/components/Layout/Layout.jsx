import React from 'react';

const Layout = ({ children, colorScheme }) => {
	const classNameLight = 'flex justify-center items-center w-screen h-screen transition text-white';
	const classNameDark = 'flex justify-center items-center w-screen h-screen bg-neutral-900 transition text-neutral-200';

	let className;

	colorScheme === 'dark' ? (className = classNameDark) : (className = classNameLight);

	return <div className={className}>{children}</div>;
};

export default Layout;
