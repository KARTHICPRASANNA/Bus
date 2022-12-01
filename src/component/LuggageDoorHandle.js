import { React } from 'react';

const LuggageDoorHandle = ({ x }) =>
	<div
		style={ {
			right: `${ x }px`,
		} }
		className="luggageDoorHandle"
	/>;

export default LuggageDoorHandle;
