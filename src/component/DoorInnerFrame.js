import { range } from '@laufire/utils/collection';
import { React } from 'react';
import Rectangle from './Rectangle';

const multiplier = 110;
const doorCount = 2;
const margin = 75;

const doorInnerFrame = range(0, doorCount).map((door) => ({
	x: (door * multiplier) + margin,
}));

const DoorInnerFrame = () => doorInnerFrame.map((door, key) =>
	<Rectangle key={ key } { ...door }/>);

export default DoorInnerFrame;
