import { React } from 'react';

const LuggageDoorHandle = ({ top, left, width, height }) =>
	<div
		style={ {
			top: `${ top }px`,
			left: `${ left }px`,
			width: `${ width }px`,
			height: `${ height }px`,
		} }
		className="luggageDoorHandle"
	/>;

export default LuggageDoorHandle;
