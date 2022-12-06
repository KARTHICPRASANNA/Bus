import { React } from 'react';

const DoorHandle = ({ doorHandle }) => {
	const { top, left, width, height } = doorHandle;

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
