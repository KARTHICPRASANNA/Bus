import { React } from 'react';
import Doors from './Doors';
import Tyres from './Tyres';
import Windows from './Windows';
import Roof from './Roof';
import Luggage from './Luggage';
import FrontGlass from './FrontGlass';
import Sticker from './Sticker';
import RedLight from './RedLight';
import RearIndicator from './RearIndicator';

const style = (context) => {
	const { config: { dimensions: { busBody: { busBodyColor, top,
		left, width, height }}}} = context;

	return {
		backgroundColor: busBodyColor,
		top: `${ top }px`,
		left: `${ left }px`,
		width: `${ width }px`,
		height: `${ height }px`,
	};
};

const Bus = (context) =>
	<div
		className="busBody"
		style={ style(context) }
	>
		<Doors { ...context }/>
		<Tyres { ...context }/>
		<Windows/>
		<Roof { ...context }/>
		<Luggage/>
		<FrontGlass { ...context }/>
		<Sticker { ...context }/>
		<RedLight { ...context }/>
		<RearIndicator { ...context }/>
	</div>
	;

export default Bus;
