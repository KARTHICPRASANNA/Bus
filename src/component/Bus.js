import { React } from 'react';
import Doors from './Doors/Doors';
import Tyres from './Tyres/Tyres';
import Windows from './Windows/Windows';
import Roof from './OtherParts/Roof';
import Luggage from './Luggages/Luggage';
import FrontGlass from './OtherParts/FrontGlass';
import Sticker from './OtherParts/Sticker';
import RedLight from './OtherParts/RedLight';
import RearIndicator from './OtherParts/RearIndicator';

const style = (context) => {
	const { data: { busBody: { busBodyColor, top,
		left, width, height, borderRadius, border }}} = context;

	return {
		backgroundColor: busBodyColor,
		top: `${ top }px`,
		left: `${ left }px`,
		width: `${ width }px`,
		height: `${ height }px`,
		borderTopLeftRadius: `${ borderRadius.topLeft }px`,
		borderTopRightRadius: `${ borderRadius.topRight }px`,
		borderBottomRightRadius: `${ borderRadius.bottomRight }px`,
		borderBottomLeftRadius: `${ borderRadius.bottomLeft }px`,
		border: `${ border }px solid black`,
	};
};

const Bus = (context) =>
	<div
		className="busBody"
		style={ style(context) }
	>
		<Doors { ...context }/>
		<Tyres { ...context }/>
		<Windows { ...context }/>
		<Roof { ...context }/>
		<Luggage { ...context }/>
		<FrontGlass { ...context }/>
		<Sticker { ...context }/>
		<RedLight { ...context }/>
		<RearIndicator { ...context }/>
	</div>
	;

export default Bus;
