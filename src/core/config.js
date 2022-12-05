import { rndValue } from '@laufire/utils/random';
import { range } from '@laufire/utils/collection';

const colors = ['CadetBlue', 'firebrick', 'paleVioletRed'];

const outerTyreMultiplier = 1000;
const OuterTyreNumber = 2;
const OuterTyreMargin = 245;

const rimMultiplier = 1000;
const rimNumber = 2;
const rimMargin = 272;

const doorMultiplier = 110;
const doorCount = 2;
const doorMargin = 75;

const windowMultiplier = 350;
const windowCount = 4;

const luggageDoorMultiplier = 231;
const luggageDoorCount = 2;
const luggageDoorMargin = 785;

const luggageHandleMultiplier = 230;
const luggageHandleCount = 2;
const luggageHandleMargin = 890;

const config = {
	dimensions: {
		busBody: {
			top: 100,
			left: 150,
			width: 1700,
			height: 600,
			busBodyColor: rndValue(colors),
		},
		door: {
			top: 122,
			left: 510,
			width: 250,
			height: 450,
		},
		doorHandle: {
			top: 305,
			left: 630,
			width: 20,
			height: 50,
		},
		roof: {
			top: -30,
			left: 115,
			width: 1550,
			height: 20,
		},
		sticker: {
			top: 290,
			left: 770,
			width: 925,
			height: 0,
		},
		luggageFrame: {
			top: 344,
			left: 780,
			width: 460,
			height: 230,
		},
		luggageSection: {
			top: 344,
			left: 1010,
			width: 0,
			height: 230,
		},
		frontGlass: {
			top: 0,
			left: 0,
			width: 105,
			height: 215,
		},
		redLight: {
			top: 360,
			left: 1700,
			width: 18,
			height: 50,
		},
		rearIndicator: {
			top: 414,
			left: 1700,
			width: 18,
			height: 50,
		},
		outerTyres: range(0, OuterTyreNumber).map((tyre) => ({
			top: 490,
			left: (tyre * outerTyreMultiplier) + OuterTyreMargin,
			width: 200,
			height: 200,
		})),
		rims: range(0, rimNumber).map((tyre) => ({
			top: 509,
			left: (tyre * rimMultiplier) + rimMargin,
			width: 135,
			height: 150,
		})),
		doorInnerFrames: range(0, doorCount).map((door) => ({
			top: 145,
			left: (door * doorMultiplier) + doorMargin,
			width: 100,
			height: 400,
		})),
		windows: range(1, windowCount).map((window) => ({
			top: 30,
			left: window * windowMultiplier,
			width: 180,
			height: 180,
		})),
		luggageDoors: range(0, luggageDoorCount).map((door) => ({
			top: 567,
			left: (door * luggageDoorMultiplier) + luggageDoorMargin,
			width: 220,
			height: 0,
		})),
		luggageDoorsHandles: range(0, luggageHandleCount).map((handle) => ({
			top: 564,
			left: (handle * luggageHandleMultiplier) + luggageHandleMargin,
			width: 30,
			height: 10,
		})),
	},
};

export default config;
