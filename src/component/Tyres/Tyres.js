import { React } from 'react';
import OuterTyre from './OuterTyre';
import Rim from './Rim';
const Tyres = ({ config }) =>
	<div>
		<OuterTyre { ...config }/>
		<Rim { ...config }/>
	</div>;

export default Tyres;
