import { React } from 'react';
import LuggageDoor from './LuggageDoor';

const LuggageDoors = ({ luggageDoors }) =>
	luggageDoors.map((door, key) =>
		<LuggageDoor key={ key } { ...door }/>);

export default LuggageDoors;
