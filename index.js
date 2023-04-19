const R = require("ramda");

const ph = R.__;
const keys = [
  "version",
  "year",
  "month",
  "day",
  "hours",
  "minutes",
  "seconds",
  "nanoseconds",
  "latitude",
  "longitude",
  "peakCurrent",
  "multiplicity",
  "numberOfSensors",
  "degreesOfFreedom",
  "ellipseAngle",
  "semiMajorAxis",
  "semiMinorAxis",
  "chiSquareValue",
  "riseTime",
  "peakToZeroTime",
  "maxRateOfRise",
  "cloudIndicator",
  "angleIndicator",
  "signalIndicator",
  "timingIndicator",
];
const copyProp = function copyProp(x, y) {
  return R.converge(R.assoc(y), [R.prop(x), R.identity]);
};
const copySpecificProps = R.pipe(
  copyProp("nanoseconds", "nano"),
  copyProp("hours", "hour"),
  copyProp("latitude", "lat"),
  copyProp("longitude", "long"),
  copyProp("longitude", "lng"),
  copyProp("numberOfSensors", "numSensors"),
  copyProp("degreesOfFreedom", "freedom")
);
const zipAsObjWithSpecificKeys = R.zipObj(keys);
const setDatePropertyFromProps = R.converge(R.assoc("date"), [
  R.pipe(
    R.props(["year", "month", "day", "hours", "minutes", "seconds", "nano"]),
    R.map(Number),
    R.adjust(1, R.subtract(ph, 1)),
    R.adjust(6, R.pipe(R.divide(ph, 1000000), Math.round)),
    R.apply(R.construct(Date))
  ),
  R.identity,
]);
const convertStringsToNumbers = R.map(
  R.ifElse(R.pipe(R.type, R.equals("String")), Number, R.identity)
);
const splitToArrayBySpace = R.split(" ");

module.exports = R.pipe(
  splitToArrayBySpace,
  zipAsObjWithSpecificKeys,
  copySpecificProps,
  setDatePropertyFromProps
);
module.exports.asNumbers = R.pipe(module.exports, convertStringsToNumbers);
