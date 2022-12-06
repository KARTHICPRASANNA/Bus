import { React } from 'react';
import LuggageFrame from './LuggageFrame';
import LuggageSection from './LuggageSection';
import LuggageDoors from './LuggageDoors';
import LuggageDoorsHandle from './LuggageDoorsHandle';

const Luggage = ({ data }) =>
	<div>
		<LuggageFrame { ...data }/>
		<LuggageSection { ...data }/>
		<LuggageDoors { ...data }/>
		<LuggageDoorsHandle { ...data }/>
	</div>;

export default Luggage;
