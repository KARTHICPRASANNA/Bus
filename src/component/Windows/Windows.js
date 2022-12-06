import { React } from 'react';
import Window from './Window';

const Windows = ({ data }) => data.windows.map((window, key) =>
	<Window key={ key } { ...{ ...data, data: window } }/>);

export default Windows;
