import { rndValue } from '@laufire/utils/random';
import { range } from '@laufire/utils/collection';

const colors = ['CadetBlue', 'firebrick', 'paleVioletRed'];

const outerTyreMultiplier = 1000;
const OuterTyreNumber = 2;
const OuterTyreMargin = 245;

const innerTyreMultiplier = 1000;
const innerTyreNumber = 2;
const innerTyreMargin = 272;

const config = {
	dimensions: {
		busBody: {
			top: 100,
			left: 150,
			width: 1700,
			height: 600,
			busBodyColor: rndValue(colors),
		},
		window: {
			top: 30,
			left: 350,
			width: 180,
			height: 180,
		},
		door: {
			bottom: 20,
			right: 930,
			width: 250,
			height: 450,
		},
		doorInterior: {
			top: 145,
			width: 100,
			height: 400,
		},
		doorHandle: {
			bottom: 240,
			right: 1050,
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
			bottom: 20,
			right: 450,
			width: 460,
			height: 230,
		},
		luggageSection: {
			bottom: 20,
			right: 680,
			height: 230,
		},
		luggageDoorInterior: {
			bottom: 25,
			width: 220,
		},
		luggageDoorHandle: {
			bottom: 25,
			width: 30,
			height: 10,
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
		outerTyre: range(0, OuterTyreNumber).map((tyre) => ({
			top: 490,
			x: (tyre * outerTyreMultiplier) + OuterTyreMargin,
			width: 200,
			height: 200,
		})),
		innerTyre: range(0, innerTyreNumber).map((tyre) => ({
			top: 509,
			x: (tyre * innerTyreMultiplier) + innerTyreMargin,
			width: 135,
			height: 150,
		})),

	},
};

export default config;
