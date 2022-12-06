import { React } from 'react';

const LuggageFrame = ({ luggageFrame }) => {
	const { top, left, width, height, border } = luggageFrame;

	return (
		<div
			className="luggageFrame"
			style={ {
				top: `${ top }px`,
				left: `${ left }px`,
				width: `${ width }px`,
				height: `${ height }px`,
				border: `${ border }px solid black`,
			} }
		/>);
};

export default LuggageFrame;
