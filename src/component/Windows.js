import { range } from '@laufire/utils/collection';
import { React } from 'react';
import Window from './Window';

const multiplier = 350;
const windowCount = 4;

const windows = range(1, windowCount).map((window) => ({
	size: 200,
	x: window * multiplier,
	y: 150,
}));

const Windows = () => windows.map((window, key) =>
	<Window key={ key } { ...window }/>);

export default Windows;
