import { React } from 'react';

const Rectangle = ({ data }) =>
	<div
		style={ {
			top: `${ data.top }px`,
			left: `${ data.left }px`,
			width: `${ data.width }px`,
			height: `${ data.height }px`,
			border: `${ data.border }px double black`,
		} }
		className="doorInterior"
	/>;

export default Rectangle;
