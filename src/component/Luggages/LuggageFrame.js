import { React } from 'react';

const LuggageFrame = ({ luggageFrame }) => {
	const { top, left, width, height } = luggageFrame;

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
