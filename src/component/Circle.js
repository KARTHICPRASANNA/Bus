import { React } from 'react';

const Circle = ({ x, top, width, height, style }) =>
	<div
		style={ {
			top: `${ top }px`,
			left: `${ x }px`,
			width: `${ width }px`,
			height: `${ height }px`,

		} }
		className={ style }
	/>;

export default Circle;
