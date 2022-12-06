import { React } from 'react';

const LuggageDoor = ({ top, left, width, height, border }) =>
	<div
		style={ {
			top: `${ top }px`,
			left: `${ left }px`,
			width: `${ width }px`,
			height: `${ height }px`,
			border: `${ border }px double black`,
		} }
		className="luggageDoorInterior"
	/>;

export default LuggageDoor;
