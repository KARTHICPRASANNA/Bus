import { React } from 'react';

const Window = ({ size, x, y }) =>
	<div
		style={ {
			width: `${ size }px`,
			height: `${ size }px`,
			left: `${ x }px`,
			top: `${ y }px`,
			position: 'absolute',
		} }
		className="window"
	/>;

export default Window;
