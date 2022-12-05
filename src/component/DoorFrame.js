import { React } from 'react';

const DoorFrame = ({ dimensions }) => {
	const { door: { top, left, width, height }} = dimensions;

	return (
		<div
			className="door"
			style={ {
				top: `${ top }px`,
				left: `${ left }px`,
				width: `${ width }px`,
				height: `${ height }px`,
			} }
		/>);
};

export default DoorFrame;
