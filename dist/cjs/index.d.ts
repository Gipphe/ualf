declare const keys: readonly ["version", "year", "month", "day", "hours", "minutes", "seconds", "nanoseconds", "latitude", "longitude", "peakCurrent", "multiplicity", "numberOfSensors", "degreesOfFreedom", "ellipseAngle", "semiMajorAxis", "semiMinorAxis", "chiSquareValue", "riseTime", "peakToZeroTime", "maxRateOfRise", "cloudIndicator", "angleIndicator", "signalIndicator", "timingIndicator"];
type BaseKeys<T> = Record<(typeof keys)[number], T>;
interface ExtraKeys<T> {
    hour: T;
    nano: T;
    lat: T;
    long: T;
    lng: T;
    numSensors: T;
    freedom: T;
}
interface WithDate {
    date: Date;
}
export type Ualf<T = string> = BaseKeys<T> & ExtraKeys<T> & WithDate;
declare const ualf: (x: string) => Ualf<string>;
export default ualf;
export declare const asNumbers: (x: string) => Ualf<number>;
