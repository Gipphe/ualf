declare function ualf(x: string): ualf.Ualf | unknown;

declare namespace ualf {
  interface Ualf<T = string> {
    version: T;
    year: T;
    month: T;
    day: T;
    hours: T;
    hour: T;
    minutes: T;
    seconds: T;
    nanoseconds: T;
    nano: T;
    latitude: T;
    lat: T;
    longitude: T;
    long: T;
    lng: T;
    peakCurrent: T;
    multiplicity: T;
    TOfSensors: T;
    numSensors: T;
    degreesOfFreedom: T;
    freedom: T;
    ellipseAngle: T;
    semiMajorAxis: T;
    semiMinorAxis: T;
    chiSquareValue: T;
    riseTime: T;
    peakToZeroTime: T;
    maxRateOfRise: T;
    cloudIndicator: T;
    angleIndicator: T;
    signalIndicator: T;
    timingIndicator: T;
    date: Date;
  }
  type UalfNumbers = Ualf<number>;

  function asNumbers(x: string): ualf.UalfNumbers | unknown;
}

export = ualf;
