import { React } from 'react';
import Rectangle from './Rectangle';

const DoorInnerFrame = ({ doorInnerFrames }) =>
	doorInnerFrames.map((door, key) =>
		<Rectangle key={ key } { ...{ ...doorInnerFrames, data: door } }/>);

export default DoorInnerFrame;
