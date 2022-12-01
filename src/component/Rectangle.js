import { React } from 'react';

const Rectangle = ({ x }) =>
	<div
		style={ {
			left: `${ x }px`,
		} }
		className="doorInterior"
	/>;

export default Rectangle;
