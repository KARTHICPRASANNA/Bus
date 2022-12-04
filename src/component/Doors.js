import { React } from 'react';
import DoorFrame from './DoorFrame';
import DoorInnerFrame from './DoorInnerFrame';
import DoorHandle from './DoorHandle';

const Doors = () =>
	<div>
		<DoorFrame/>
		<DoorInnerFrame/>
		<DoorHandle/>
	</div>;

export default Doors;
