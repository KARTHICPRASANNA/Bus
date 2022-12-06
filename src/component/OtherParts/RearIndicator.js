import { React } from 'react';

const RearIndicator = ({ data }) => {
	const { rearIndicator:
		{ top, left, width, height, border }} = data;

	return (
		<div
			className="rearIndicator"
			style={ {
				top: `${ top }px`,
				left: `${ left }px`,
				width: `${ width }px`,
				height: `${ height }px`,
				border: `${ border }px solid black`,
			} }
		/>);
};

export default RearIndicator;
