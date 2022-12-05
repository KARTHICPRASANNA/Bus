import { React } from 'react';
import Circle from './Circle';

const OuterTyre = ({ dimensions }) => dimensions.outerTyres.map((tyre, key) =>
	<Circle key={ key } { ... { ...tyre, style: 'tyre' } }/>);

export default OuterTyre;