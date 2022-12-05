import { React } from 'react';

const DoorHandle = ({ dimensions }) => {
	const { doorHandle: { top, left, width, height }} = dimensions;

	return (
		<div
			className="doorHandle"
			style={ {
				top: `${ top }px`,
				left: `${ left }px`,
				width: `${ width }px`,
				height: `${ height }px`,
			} }
		/>);
};

export default DoorHandle;
