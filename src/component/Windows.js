import { React } from 'react';
import Window from './Window';

const Windows = ({ config }) => config.dimensions.windows.map((window, key) =>
	<Window key={ key } { ...{ ...config, data: window } }/>);

export default Windows;
