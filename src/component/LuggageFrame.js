import { React } from 'react';

const LuggageFrame = ({ dimensions }) => {
	const { luggageFrame: { top, left, width, height }} = dimensions;

	return (
		<div
			className="luggageFrame"
			style={ {
				top: `${ top }px`,
				left: `${ left }px`,
				width: `${ width }px`,
				height: `${ height }px`,
			} }
		/>);
};

export default LuggageFrame;
