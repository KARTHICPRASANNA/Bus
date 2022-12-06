import { React } from 'react';

const RearIndicator = ({ data }) => {
	const { rearIndicator:
		{ top, left, width, height }} = data;

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
