import { React } from 'react';
import BusBody from './BusBody';
import Doors from './Doors';
import DoorHandle from './DoorHandle';
import Tyres from './Tyres';
import Windows from './Windows';
import Roof from './Roof';
import LuggageFrame from './LuggageFrame';
import LuggageSection from './LuggageSection';
import LuggageDoors from './LuggageDoors';
import LuggageDoorsHandle from './LuggageDoorsHandle';
import FrontGlass from './FrontGlass';
import Sticker from './Sticker';

const Bus = (context) =>
	<div>
		<BusBody { ...context }/>
		<Doors/>
		<DoorHandle/>
		<Tyres/>
		<Windows/>
		<Roof/>
		<LuggageFrame/>
		<LuggageSection/>
		<LuggageDoors/>
		<LuggageDoorsHandle/>
		<FrontGlass/>
		<Sticker/>
	</div>;

export default Bus;
