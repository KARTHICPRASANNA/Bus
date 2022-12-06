import { React } from 'react';
import LuggageDoorHandle from './LuggageDoorHandle';

const LuggageDoorsHandle = ({ luggageDoorsHandles }) =>
	luggageDoorsHandles.map((handle, key) =>
		<LuggageDoorHandle key={ key } { ...handle }/>);

export default LuggageDoorsHandle;
