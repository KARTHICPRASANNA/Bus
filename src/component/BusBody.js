import { React } from 'react';

const BusBody = ({ config }) =>
	<div
		className="busBody"
		style={ { backgroundColor: config.busBodyColor } }
	/>;

export default BusBody;
