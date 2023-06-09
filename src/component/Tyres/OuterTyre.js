import { React } from 'react';
import Circle from './Circle';

const OuterTyre = ({ outerTyres }) => outerTyres.map((tyre, key) =>
	<Circle key={ key } { ... { ...tyre, style: 'tyre', border: `${ tyre.border }px solid grey` } }/>);

export default OuterTyre;
