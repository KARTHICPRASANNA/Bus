import { range } from '@laufire/utils/collection';
import { React } from 'react';
import LuggageDoor from './LuggageDoor';

const multiplier = 454;
const doorCount = 2;
const margin = 296;

const doors = range(0, doorCount).map((door) => ({
	x: (door * margin) + multiplier,
}));

const LuggageDoors = () => doors.map((door, key) =>
	<LuggageDoor key={ key } { ...door }/>);

export default LuggageDoors;
