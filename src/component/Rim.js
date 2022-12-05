import { React } from 'react';
import Circle from './Circle';

const Rim = ({ dimensions }) => dimensions.rim.map((tyre, key) =>
	<Circle key={ key } { ... { ...tyre, style: 'rim' } }/>);

export default Rim;
