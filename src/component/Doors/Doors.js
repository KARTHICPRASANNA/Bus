import { React } from 'react';
import DoorFrame from './DoorFrame';
import DoorInnerFrame from './DoorInnerFrame';
import DoorHandle from './DoorHandle';

const Doors = ({ data }) =>
	<div>
		<DoorFrame { ...data }/>
		<DoorInnerFrame { ...data }/>
		<DoorHandle { ...data }/>
	</div>;

export default Doors;
