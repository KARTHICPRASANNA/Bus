import { range } from '@laufire/utils/collection';
import { React } from 'react';
import LuggageDoor from './LuggageDoor';

const multiplier = 231;
const doorCount = 2;
const margin = 454;

const doors = range(0, doorCount).map((door) => ({
	x: (door * multiplier) + margin,
}));

const LuggageDoors = () => doors.map((door, key) =>
	<LuggageDoor key={ key } { ...door }/>);

export default LuggageDoors;
