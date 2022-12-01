import { range } from '@laufire/utils/collection';
import { React } from 'react';
import Circle from './Circle';

const multiplier = 1000;
const tyreNumber = 2;
const margin = 272;

const innerTyre = range(0, tyreNumber).map((tyre) => ({
	x: (tyre * multiplier) + margin,
}));

const InnerTyre = () => innerTyre.map((tyre, key) =>
	<Circle key={ key } { ... { ...tyre, style: 'rim' } }/>);

export default InnerTyre;
