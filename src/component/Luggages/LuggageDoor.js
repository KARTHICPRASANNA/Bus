import { React } from 'react';

const LuggageDoor = ({ top, left, width, height }) =>
	<div
		style={ {
			top: `${ top }px`,
			left: `${ left }px`,
			width: `${ width }px`,
			height: `${ height }px`,
		} }
		className="luggageDoorInterior"
	/>;

export default LuggageDoor;
