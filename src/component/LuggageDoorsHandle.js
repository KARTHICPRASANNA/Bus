import { range } from '@laufire/utils/collection';
import { React } from 'react';
import LuggageDoorHandle from './LuggageDoorHandle';

const multiplier = 230;
const handleCount = 2;
const margin = 890;

const doorHandle = range(0, handleCount).map((handle) => ({
	x: (handle * multiplier) + margin,
}));

const LuggageDoorsHandle = () => doorHandle.map((handle, key) =>
	<LuggageDoorHandle key={ key } { ...handle }/>);

export default LuggageDoorsHandle;
