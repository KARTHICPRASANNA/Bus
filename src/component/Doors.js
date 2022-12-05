import { React } from 'react';
import DoorFrame from './DoorFrame';
import DoorInnerFrame from './DoorInnerFrame';
import DoorHandle from './DoorHandle';

const Doors = ({ config }) =>
	<div>
		<DoorFrame { ...config }/>
		<DoorInnerFrame { ...config }/>
		<DoorHandle { ...config }/>
	</div>;

export default Doors;
