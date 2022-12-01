import { React } from 'react';

const LuggageDoor = ({ x }) =>
	<div
		style={ {
			right: `${ x }px`,
		} }
		className="luggageDoorInterior"
	/>;

export default LuggageDoor;
