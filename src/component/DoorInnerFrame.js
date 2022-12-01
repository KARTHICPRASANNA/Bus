import { range } from '@laufire/utils/collection';
import { React } from 'react';
import Rectangle from './Rectangle';

const multiplier = 75;
const doorCount = 2;
const margin = 110;

const doorInnerFrame = range(0, doorCount).map((door) => ({
	x: (door * margin) + multiplier,
}));

const DoorInnerFrame = () => doorInnerFrame.map((door, key) =>
	<Rectangle key={ key } { ...door }/>);

export default DoorInnerFrame;
