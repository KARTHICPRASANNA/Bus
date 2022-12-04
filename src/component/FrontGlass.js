import { React } from 'react';

const FrontGlass = ({ config }) => {
	const { dimensions: { frontGlass: { top, left, width, height }}} = config;

	return (
		<div
			className="frontGlass"
			style={ {
				top: `${ top }px`,
				left: `${ left }px`,
				width: `${ width }px`,
				height: `${ height }px`,
			} }
		/>);
};

export default FrontGlass;
