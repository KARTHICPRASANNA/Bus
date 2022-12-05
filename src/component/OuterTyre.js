import { React } from 'react';
import Circle from './Circle';

const OuterTyre = ({ dimensions }) => dimensions.outerTyre.map((tyre, key) =>
	<Circle key={ key } { ... { ...tyre, style: 'tyre' } }/>);

export default OuterTyre;
