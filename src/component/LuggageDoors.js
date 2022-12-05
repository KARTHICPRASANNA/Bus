import { React } from 'react';
import LuggageDoor from './LuggageDoor';

const LuggageDoors = ({ dimensions }) =>
	dimensions.luggageDoors.map((door, key) =>
		<LuggageDoor key={ key } { ...door }/>);

export default LuggageDoors;
