import { React } from 'react';
import Rectangle from './Rectangle';

const DoorInnerFrame = ({ dimensions }) =>
	dimensions.doorInnerFrames.map((door, key) =>
		<Rectangle key={ key } { ...{ ...dimensions, data: door } }/>);

export default DoorInnerFrame;
