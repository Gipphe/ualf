var R = require('ramda');

var ph = R.__; // eslint-disable-line no-underscore-dangle
var keys = [
	'version',
	'year',
	'month',
	'day',
	'hours',
	'minutes',
	'seconds',
	'nanoseconds',
	'latitude',
	'longitude',
	'peakCurrent',
	'multiplicity',
	'numberOfSensors',
	'degreesOfFreedom',
	'ellipseAngle',
	'semiMajorAxis',
	'semiMinorAxis',
	'chiSquareValue',
	'riseTime',
	'peakToZeroTime',
	'maxRateOfRise',
	'cloudIndicator',
	'angleIndicator',
	'signalIndicator',
	'timingIndicator',
];
var copyProp = function copyProp(x, y) {
	return R.converge(R.assoc(y), [R.prop(x), R.identity]);
};
var copySpecificProps = R.pipe(
	copyProp('nanoseconds', 'nano'),
	copyProp('hours', 'hour'),
	copyProp('latitude', 'lat'),
	copyProp('longitude', 'long'),
	copyProp('longitude', 'lng'),
	copyProp('numberOfSensors', 'numSensors'),
	copyProp('degreesOfFreedom', 'freedom'),
);
var zipAsObjWithSpecificKeys = R.zipObj(keys);
var setDatePropertyFromProps = R.converge(R.assoc('date'), [
	R.pipe(
		R.props(['year', 'month', 'day', 'hours', 'minutes', 'seconds', 'nano']),
		R.map(Number),
		R.adjust(1, R.subtract(ph, 1)),
		R.adjust(6, R.pipe(R.divide(ph, 1000000), Math.round)),
		R.apply(R.construct(Date)),
	),
	R.identity,
]);
var convertStringsToNumbers = R.map(R.ifElse(
	R.pipe(R.type, R.equals('String')),
	Number,
	R.identity,
));
var splitToArrayBySpace = R.split(' ');

module.exports = R.pipe(
	splitToArrayBySpace,
	zipAsObjWithSpecificKeys,
	copySpecificProps,
	setDatePropertyFromProps,
);
module.exports.asNumbers = R.pipe(
	module.exports,
	convertStringsToNumbers,
);
