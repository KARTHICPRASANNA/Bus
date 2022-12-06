import { React } from 'react';

const LuggageSection = ({ luggageSection }) => {
	const { top, left, width, height } = luggageSection;

	return (
		<div
			className="luggageSection"
			style={ {
				top: `${ top }px`,
				left: `${ left }px`,
				width: `${ width }px`,
				height: `${ height }px`,
			} }
		/>);
};

export default LuggageSection;
