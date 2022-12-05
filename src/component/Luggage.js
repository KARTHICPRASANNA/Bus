import { React } from 'react';
import LuggageFrame from './LuggageFrame';
import LuggageSection from './LuggageSection';
import LuggageDoors from './LuggageDoors';
import LuggageDoorsHandle from './LuggageDoorsHandle';

const Luggage = ({ config }) =>
	<div>
		<LuggageFrame { ...config }/>
		<LuggageSection { ...config }/>
		<LuggageDoors { ...config }/>
		<LuggageDoorsHandle { ...config }/>
	</div>;

export default Luggage;
