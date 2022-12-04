import { React } from 'react';
import LuggageFrame from './LuggageFrame';
import LuggageSection from './LuggageSection';
import LuggageDoors from './LuggageDoors';
import LuggageDoorsHandle from './LuggageDoorsHandle';

const Luggage = () =>
	<div>
		<LuggageFrame/>
		<LuggageSection/>
		<LuggageDoors/>
		<LuggageDoorsHandle/>
	</div>;

export default Luggage;
