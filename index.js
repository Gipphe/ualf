const R = require('ramda');

module.exports = function ualf(str, config) {
	const number = (config && config.number) || false;
	const res = str.split(' ');
	const date = new Date(
		res[1],
		Number(res[2]) - 1,
		res[3],
		res[4],
		res[5],
		res[6],
		Math.round(res[7] / 1000000)
	);
	const result = {
		version: res[0],
		date,
		year: res[1],
		month: res[2],
		day: res[3],
		hour: res[4],
		hours: res[4],
		minutes: res[5],
		seconds: res[6],
		nanoseconds: res[7],
		nano: res[7],
		latitude: res[8],
		lat: res[8],
		longitude: res[9],
		long: res[9],
		lng: res[9],
		peakCurrent: res[10],
		multiplicity: res[11],
		numSensors: res[12],
		numberOfSensors: res[12],
		freedom: res[13],
		degreesOfFreedom: res[13],
		ellipseAngle: res[14],
		semiMajorAxis: res[15],
		semiMinorAxis: res[16],
		chiSquareValue: res[17],
		riseTime: res[18],
		peakToZeroTime: res[19],
		maxRateOfRise: res[20],
		cloudIndicator: res[21],
		angleIndicator: res[22],
		signalIndicator: res[23],
		timingIndicator: res[24],
	};
	if (number) {
		return R.map(R.ifElse(
			R.pipe(R.type, R.equals('String')),
			Number,
			R.identity
		))(result);
	}
	return result;
};
