import { React } from 'react';

const Roof = ({ config }) => {
	const { dimensions: { roof: { top, left, width, height }}} = config;

	return (
		<div
			className="roof"
			style={ {
				top: `${ top }px`,
				left: `${ left }px`,
				width: `${ width }px`,
				height: `${ height }px`,
			} }
		/>);
};

export default Roof;
