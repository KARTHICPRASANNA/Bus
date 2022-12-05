import { React } from 'react';

const Window = ({ data }) =>
	<div
		style={ {
			top: `${ data.top }px`,
			left: `${ data.left }px`,
			width: `${ data.width }px`,
			height: `${ data.height }px`,
		} }
		className="window"
	/>;

export default Window;
