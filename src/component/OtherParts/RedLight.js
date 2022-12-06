import { React } from 'react';

const RedLight = ({ data }) => {
	const { redLight:
		{ top, left, width, height, borderRadius, border }} = data;

	return (
		<div
			className="redLight"
			style={ {
				top: `${ top }px`,
				left: `${ left }px`,
				width: `${ width }px`,
				height: `${ height }px`,
				borderRadius: `${ borderRadius }px`,
				border: `${ border }px solid black`,
			} }
		/>);
};

export default RedLight;
