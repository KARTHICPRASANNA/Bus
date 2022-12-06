import { React } from 'react';

const DoorFrame = ({ door }) => {
	const { top, left, width, height } = door;

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
