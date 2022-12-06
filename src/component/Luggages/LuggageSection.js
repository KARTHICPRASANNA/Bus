import { React } from 'react';

const LuggageSection = ({ luggageSection }) => {
	const { top, left, width, height, border } = luggageSection;

	return (
		<div
			className="luggageSection"
			style={ {
				top: `${ top }px`,
				left: `${ left }px`,
				width: `${ width }px`,
				height: `${ height }px`,
				border: `${ border }px double black`,
			} }
		/>);
};

export default LuggageSection;
