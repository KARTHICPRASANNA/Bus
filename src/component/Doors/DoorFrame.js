import { React } from 'react';

const DoorFrame = ({ door }) => {
	const { top, left, width, height, borderRadius, border } = door;

	return (
		<div
			className="door"
			style={ {
				top: `${ top }px`,
				left: `${ left }px`,
				width: `${ width }px`,
				height: `${ height }px`,
				borderRadius: `${ borderRadius }px`,
				border: `${ border }px solid black`,
			} }
		/>);
};

export default DoorFrame;
