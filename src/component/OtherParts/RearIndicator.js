import { React } from 'react';

const RearIndicator = ({ config }) => {
	const { dimensions: { rearIndicator:
		{ top, left, width, height }}} = config;

	return (
		<div
			className="rearIndicator"
			style={ {
				top: `${ top }px`,
				left: `${ left }px`,
				width: `${ width }px`,
				height: `${ height }px`,
			} }
		/>);
};

export default RearIndicator;
