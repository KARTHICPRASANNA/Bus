/* eslint-disable no-magic-numbers */
import { rndValue } from '@laufire/utils/random';
import { range } from '@laufire/utils/collection';

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

const size = 1;

const config = {
	dimensions: {
		busBody: {
			top: 100 * size,
			left: 150 * size,
			width: 1700 * size,
			height: 600 * size,
			busBodyColor: rndValue(colors),
		},
		door: {
			top: 122 * size,
			left: 510 * size,
			width: 250 * size,
			height: 450 * size,
		},
		doorHandle: {
			top: 305 * size,
			left: 629 * size,
			width: 20 * size,
			height: 50 * size,
		},
		roof: {
			top: -30 * size,
			left: 115 * size,
			width: 1550 * size,
			height: 20 * size,
		},
		sticker: {
			top: 290 * size,
			left: 770 * size,
			width: 925 * size,
			height: 0,
		},
		luggageFrame: {
			top: 344 * size,
			left: 780 * size,
			width: 460 * size,
			height: 230 * size,
		},
		luggageSection: {
			top: 344 * size,
			left: 1010 * size,
			width: 0,
			height: 230 * size,
		},
		frontGlass: {
			top: 0,
			left: 0,
			width: 105 * size,
			height: 215 * size,
		},
		redLight: {
			top: 360 * size,
			left: 1700 * size,
			width: 18 * size,
			height: 50 * size,
		},
		rearIndicator: {
			top: 414 * size,
			left: 1700 * size,
			width: 18 * size,
			height: 50 * size,
		},
		outerTyres: range(0, OuterTyreNumber).map((tyre) => ({
			top: 490 * size,
			left: ((tyre * outerTyreMultiplier) + OuterTyreMargin) * size,
			width: 200 * size,
			height: 200 * size,
		})),
		rims: range(0, rimNumber).map((tyre) => ({
			top: 509 * size,
			left: ((tyre * rimMultiplier) + rimMargin) * size,
			width: 135 * size,
			height: 150 * size,
		})),
		doorInnerFrames: range(0, doorCount).map((door) => ({
			top: 145 * size,
			left: ((door * doorMultiplier) + doorMargin) * size,
			width: 100 * size,
			height: 400 * size,
		})),
		windows: range(1, windowCount).map((window) => ({
			top: 30 * size,
			left: ((window * windowMultiplier) + windowMargin) * size,
			width: 180 * size,
			height: 180 * size,
		})),
		luggageDoors: range(0, luggageDoorCount).map((door) => ({
			top: 567 * size,
			left: ((door * luggageDoorMultiplier) + luggageDoorMargin) * size,
			width: 220 * size,
			height: 0,
		})),
		luggageDoorsHandles: range(0, luggageHandleCount).map((handle) => ({
			top: 564 * size,
			left: ((handle * luggageHandleMultiplier)
			+ luggageHandleMargin) * size,
			width: 30 * size,
			height: 10 * size,
		})),
	},
};

export default config;
