import { React } from 'react';
import OuterTyre from './OuterTyre';
import InnerTyre from './InnerTyre';

const Tyres = ({ config }) =>
	<div>
		<OuterTyre { ...config }/>
		<InnerTyre { ...config }/>
	</div>;

export default Tyres;
