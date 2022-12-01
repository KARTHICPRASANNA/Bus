import { React } from 'react';

const Circle = ({ x, style }) =>
	<div
		style={ {
			left: `${ x }px`,
		} }
		className={ style }
	/>;

export default Circle;
