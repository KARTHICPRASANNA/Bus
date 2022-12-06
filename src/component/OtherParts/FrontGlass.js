import { React } from 'react';

const FrontGlass = ({ data }) => {
	const { frontGlass: { top, left, width, height,
		borderRadius, border }} = data;

	return (
		<div
			className="frontGlass"
			style={ {
				top: `${ top }px`,
				left: `${ left }px`,
				width: `${ width }px`,
				height: `${ height }px`,
				borderTopLeftRadius: `${ borderRadius.topLeft }px`,
				borderTopRightRadius: `${ borderRadius.topRight }px`,
				borderBottomRightRadius: `${ borderRadius.bottomRight }px`,
				borderBottomLeftRadius: `${ borderRadius.bottomLeft }px`,
				border: `${ border }px solid wheat`,
			} }
		/>);
};

export default FrontGlass;
