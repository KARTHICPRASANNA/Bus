import { React } from 'react';

const RedLight = ({ data }) => {
	const { redLight:
		{ top, left, width, height }} = data;

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
