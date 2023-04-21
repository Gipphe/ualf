"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.asNumbers = void 0;
const Identity = (val) => ({
    map: (f) => Identity(f(val)),
    val: () => val,
});
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
const copyProp = (x, y) => (o) => {
    const k = {
        [y]: o[x],
    };
    return Object.assign(Object.assign({}, o), k);
};
const copySpecificProps = (x) => Identity(x)
    .map(copyProp("nanoseconds", "nano"))
    .map(copyProp("hours", "hour"))
    .map(copyProp("latitude", "lat"))
    .map(copyProp("longitude", "long"))
    .map(copyProp("longitude", "lng"))
    .map(copyProp("numberOfSensors", "numSensors"))
    .map(copyProp("degreesOfFreedom", "freedom"))
    .val();
const zipToObj = (keys) => (vals) => {
    return keys.reduce((acc, key, i) => {
        const val = vals[i];
        return Object.assign(Object.assign({}, acc), { [key]: val });
    }, {});
};
const zipAsObjWithSpecificKeys = zipToObj(keys);
const setDatePropertyFromProps = (o) => {
    const year = Number(o.year);
    const month = Number(o.month) - 1;
    const day = Number(o.day);
    const hours = Number(o.hours);
    const minutes = Number(o.minutes);
    const seconds = Number(o.seconds);
    const millis = Math.round(Number(o.nano) / 1000000);
    return Object.assign(Object.assign({}, o), { date: new Date(year, month, day, hours, minutes, seconds, millis) });
};
const convertStringsToNumbers = (x) => {
    const keys = objectKeys(x);
    return keys.reduce((acc, key) => (Object.assign(Object.assign({}, acc), { [key]: typeof x[key] === "string" ? Number(x[key]) : x[key] })), {});
};
const objectKeys = (o) => Object.keys(o);
const splitToArrayBySpace = (xs) => xs.split(" ");
const ualf = (x) => Identity(x)
    .map(splitToArrayBySpace)
    .map(zipAsObjWithSpecificKeys)
    .map(copySpecificProps)
    .map(setDatePropertyFromProps)
    .val();
exports.default = ualf;
const asNumbers = (x) => convertStringsToNumbers(ualf(x));
exports.asNumbers = asNumbers;
