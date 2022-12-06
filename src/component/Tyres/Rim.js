import { React } from 'react';
import Circle from './Circle';

const Rim = ({ rims }) => rims.map((tyre, key) =>
	<Circle key={ key } { ... { ...tyre, style: 'rim' } }/>);

export default Rim;
