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
	copyProp('degreesOfFreedom', 'freedom')
);
var zipAsObjWithSpecificKeys = R.zipObj(keys);
var setDatePropertyFromProps = R.converge(R.assoc('date'), [
	R.pipe(
		R.props(['year', 'month', 'day', 'hours', 'minutes', 'seconds', 'nano']),
		R.map(Number),
		R.adjust(R.subtract(ph, 1), 1),
		R.adjust(R.pipe(R.divide(ph, 1000000), Math.round), 6),
		R.apply(R.construct(Date))
	),
	R.identity,
]);
var convertStringsToNumbers = R.map(R.ifElse(
	R.pipe(R.type, R.equals('String')),
	Number,
	R.identity
));
var splitToArrayBySpace = R.split(' ');
var isConfigNumberPropTrue = R.ifElse(R.pipe(R.type, R.equals('Object')), R.propEq('number', true), R.F);

module.exports = function ualf(str, config) {
	return R.pipe(
		splitToArrayBySpace,
		zipAsObjWithSpecificKeys,
		copySpecificProps,
		setDatePropertyFromProps,
		R.ifElse(
			R.partial(isConfigNumberPropTrue, [config]),
			convertStringsToNumbers,
			R.identity
		)
	)(str);
};
