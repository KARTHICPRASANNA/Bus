import { React } from 'react';

const RedLight = ({ config }) => {
	const { dimensions: { redLight:
		{ top, left, width, height }}} = config;

	return (
		<div
			className="redLight"
			style={ {
				top: `${ top }px`,
				left: `${ left }px`,
				width: `${ width }px`,
				height: `${ height }px`,
			} }
		/>);
};

export default RedLight;
