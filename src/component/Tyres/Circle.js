import { React } from 'react';

const Circle = ({ top, left, width, height, style, borderRadius, border }) =>
	<div
		style={ {
			top: `${ top }px`,
			left: `${ left }px`,
			width: `${ width }px`,
			height: `${ height }px`,
			borderRadius: `${ borderRadius }px`,
			border: border,
		} }
		className={ style }
	/>;

export default Circle;
