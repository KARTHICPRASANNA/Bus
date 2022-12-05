import { React } from 'react';
import LuggageDoorHandle from './LuggageDoorHandle';

const LuggageDoorsHandle = ({ dimensions }) =>
	dimensions.luggageDoorsHandles.map((handle, key) =>
		<LuggageDoorHandle key={ key } { ...handle }/>);

export default LuggageDoorsHandle;
