import { range } from '@laufire/utils/collection';
import { React } from 'react';
import Circle from './Circle';

const multiplier = 1000;
const tyreNumber = 2;
const margin = 245;

const outerTyre = range(0, tyreNumber).map((tyre) => ({
	x: (tyre * multiplier) + margin,
}));

const OuterTyre = () => outerTyre.map((tyre, key) =>
	<Circle key={ key } { ... { ...tyre, style: 'tyre' } }/>);

export default OuterTyre;
