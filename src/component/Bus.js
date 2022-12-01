import { React } from 'react';
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
import RedLight from './RedLight';
import RearIndicator from './RearIndicator';

const Bus = ({ config }) =>
	<div className="busBody" style={ { backgroundColor: config.busBodyColor } }>
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
		<RedLight/>
		<RearIndicator/>
	</div>;

export default Bus;
