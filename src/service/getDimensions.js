/* eslint-disable no-magic-numbers */
import { range } from '@laufire/utils/collection';
import { rndValue } from '@laufire/utils/random';

const colors = ['CadetBlue', 'firebrick', 'paleVioletRed'];

const outerTyreMultiplier = 1000;
const OuterTyreNumber = 2;
const OuterTyreMargin = 245;

const rimMultiplier = 1000;
const rimNumber = 2;
const rimMargin = 272;

const doorMultiplier = 108;
const doorCount = 2;
const doorMargin = 530;

const windowMultiplier = 350;
const windowCount = 4;
const windowMargin = 430;

const luggageDoorMultiplier = 231;
const luggageDoorCount = 2;
const luggageDoorMargin = 785;

const luggageHandleMultiplier = 230;
const luggageHandleCount = 2;
const luggageHandleMargin = 890;

const getBusBody = (size) => ({
	top: 100 * size,
	left: 150 * size,
	width: 1700 * size,
	height: 600 * size,
	busBodyColor: rndValue(colors),
	borderRadius: {
		topLeft: 100 * size,
		topRight: 50 * size,
		bottomRight: 50 * size,
		bottomLeft: 50 * size,
	},
	border: 2 * size,
});

const getDoor = (size) => ({
	top: 122 * size,
	left: 510 * size,
	width: 250 * size,
	height: 450 * size,
});

const getDoorHandle = (size) => ({
	top: 305 * size,
	left: 629 * size,
	width: 20 * size,
	height: 50 * size,
});

const getRoof = (size) => ({
	top: -30 * size,
	left: 115 * size,
	width: 1550 * size,
	height: 20 * size,
	borderRadius: {
		topLeft: 50 * size,
		topRight: 50 * size,
		bottomRight: 0,
		bottomLeft: 0,
	},
	border: 5 * size,
});

const getSticker = (size) => ({
	top: 290 * size,
	left: 770 * size,
	width: 925 * size,
	height: 0,
	border: 3 * size,
});

const getLuggageFrame = (size) => ({
	top: 344 * size,
	left: 780 * size,
	width: 460 * size,
	height: 230 * size,
});

const getLuggageSection = (size) => ({
	top: 344 * size,
	left: 1010 * size,
	width: 0,
	height: 230 * size,
});

const getFrontGlass = (size) => ({
	top: 0,
	left: 0,
	width: 105 * size,
	height: 215 * size,
	borderRadius: {
		topLeft: 100 * size,
		topRight: 0,
		bottomRight: 60 * size,
		bottomLeft: 0,
	},
	border: 2 * size,
});

const getRedLight = (size) => ({
	top: 360 * size,
	left: 1700 * size,
	width: 18 * size,
	height: 50 * size,
});

const getRearIndicator = (size) => ({
	top: 414 * size,
	left: 1700 * size,
	width: 18 * size,
	height: 50 * size,
});

const getOuterTyres = (size) => range(0, OuterTyreNumber).map((tyre) => ({
	top: 490 * size,
	left: ((tyre * outerTyreMultiplier) + OuterTyreMargin) * size,
	width: 200 * size,
	height: 200 * size,
}));

const getRims = (size) => range(0, rimNumber).map((tyre) => ({
	top: 509 * size,
	left: ((tyre * rimMultiplier) + rimMargin) * size,
	width: 135 * size,
	height: 150 * size,
}));

const getDoorInnerFrames = (size) => range(0, doorCount).map((door) => ({
	top: 145 * size,
	left: ((door * doorMultiplier) + doorMargin) * size,
	width: 100 * size,
	height: 400 * size,
}));

const getWindows = (size) => range(1, windowCount).map((window) => ({
	top: 30 * size,
	left: ((window * windowMultiplier) + windowMargin) * size,
	width: 180 * size,
	height: 180 * size,
}));

const getLuggageDoors = (size) => range(0, luggageDoorCount).map((door) => ({
	top: 567 * size,
	left: ((door * luggageDoorMultiplier) + luggageDoorMargin) * size,
	width: 220 * size,
	height: 0,
}));

const getLuggageDoorsHandles = (size) =>
	range(0, luggageHandleCount).map((handle) => ({
		top: 564 * size,
		left: ((handle * luggageHandleMultiplier)
			+ luggageHandleMargin) * size,
		width: 30 * size,
		height: 10 * size,
	}));

const getDimensions = (size) => ({
	busBody: getBusBody(size),
	door: getDoor(size),
	doorHandle: getDoorHandle(size),
	roof: getRoof(size),
	sticker: getSticker(size),
	luggageFrame: getLuggageFrame(size),
	luggageSection: getLuggageSection(size),
	frontGlass: getFrontGlass(size),
	redLight: getRedLight(size),
	rearIndicator: getRearIndicator(size),
	outerTyres: getOuterTyres(size),
	rims: getRims(size),
	doorInnerFrames: getDoorInnerFrames(size),
	windows: getWindows(size),
	luggageDoors: getLuggageDoors(size),
	luggageDoorsHandles: getLuggageDoorsHandles(size),
});

export default getDimensions;
