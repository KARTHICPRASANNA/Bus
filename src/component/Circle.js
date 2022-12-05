import { React } from 'react';

const Circle = ({ top, left, width, height, style }) =>
	<div
		style={ {
			top: `${ top }px`,
			left: `${ left }px`,
			width: `${ width }px`,
			height: `${ height }px`,

		} }
		className={ style }
	/>;

export default Circle;
