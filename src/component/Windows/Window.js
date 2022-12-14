import { React } from 'react';

const Window = ({ data }) =>
	<div
		style={ {
			top: `${ data.top }px`,
			left: `${ data.left }px`,
			width: `${ data.width }px`,
			height: `${ data.height }px`,
			borderRadius: `${ data.borderRadius }px`,
			border: `${ data.border }px solid black`,
			backgroundImage: `url(${ process.env.PUBLIC_URL + data.backgroundImage })`,
		} }
		className="window"
	/>;

export default Window;
