import { React } from 'react';

const Sticker = ({ config }) => {
	const { dimensions: { sticker: { top, left, width, height }}} = config;

	return (
		<div
			className="sticker"
			style={ {
				top: `${ top }px`,
				left: `${ left }px`,
				width: `${ width }px`,
				height: `${ height }px`,
			} }
		/>);
};

export default Sticker;
