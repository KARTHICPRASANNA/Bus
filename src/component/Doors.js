import { React } from 'react';
import DoorFrame from './Doors/DoorFrame';
import DoorInnerFrame from './Doors/DoorInnerFrame';
import DoorHandle from './Doors/DoorHandle';

const Doors = ({ config }) =>
	<div>
		<DoorFrame { ...config }/>
		<DoorInnerFrame { ...config }/>
		<DoorHandle { ...config }/>
	</div>;

export default Doors;
