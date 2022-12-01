import { React } from 'react';

const LuggageDoorHandle = ({ x }) =>
	<div
		style={ {
			left: `${ x }px`,
		} }
		className="luggageDoorHandle"
	/>;

export default LuggageDoorHandle;
