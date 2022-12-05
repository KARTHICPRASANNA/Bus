import { React } from 'react';

const LuggageSection = ({ dimensions }) => {
	const { luggageSection: { top, left, width, height }} = dimensions;

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
