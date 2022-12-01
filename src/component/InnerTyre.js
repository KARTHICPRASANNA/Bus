import { range } from '@laufire/utils/collection';
import { React } from 'react';
import Circle from './Circle';

const multiplier = 375;
const tyreNumber = 2;
const margin = 1130;

const innerTyre = range(0, tyreNumber).map((tyre) => ({
	x: (tyre * margin) + multiplier,
}));

const InnerTyre = () => innerTyre.map((tyre, key) =>
	<Circle key={ key } { ... { ...tyre, style: 'rim' } }/>);

export default InnerTyre;
