import { rndValue } from '@laufire/utils/random';

const colors = ['CadetBlue', 'firebrick', 'paleVioletRed'];

const config = {
	dimensions: {
		busBody: {
			top: 100,
			left: 150,
			width: 1700,
			height: 600,
			busBodyColor: rndValue(colors),
		},
		tyre: {
			top: 490,
			left: 245,
			width: 200,
			height: 200,
		},
		rim: {
			top: 509,
			left: 272,
			width: 135,
			height: 150,
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
	},
};

export default config;
