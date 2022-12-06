import { React } from 'react';
import OuterTyre from './OuterTyre';
import Rim from './Rim';
const Tyres = ({ data }) =>
	<div>
		<OuterTyre { ...data }/>
		<Rim { ...data }/>
	</div>;

export default Tyres;
