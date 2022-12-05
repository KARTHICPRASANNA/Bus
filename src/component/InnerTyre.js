import { React } from 'react';
import Circle from './Circle';

const InnerTyre = ({ dimensions }) => dimensions.innerTyre.map((tyre, key) =>
	<Circle key={ key } { ... { ...tyre, style: 'rim' } }/>);

export default InnerTyre;
