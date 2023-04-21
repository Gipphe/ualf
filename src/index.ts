interface Identity<A> {
  map<B>(f: (x: A) => B): Identity<B>;
  val(): A;
}
const Identity = <A>(val: A): Identity<A> => ({
  map: (f) => Identity(f(val)),
  val: () => val,
});

type ObjKey = string | number | symbol;

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
] as const;

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

const copyProp =
  <
    NewKey extends ObjKey,
    Key extends string,
    Rec extends Record<Key, T>,
    T = string
  >(
    x: Key,
    y: NewKey
  ) =>
  (o: Rec): Rec & { [key in NewKey]: T } => {
    const k = {
      [y]: o[x],
    } as Record<NewKey, T>;
    return {
      ...o,
      ...k,
    };
  };

const copySpecificProps = (
  x: BaseKeys<string>
): BaseKeys<string> & ExtraKeys<string> =>
  Identity(x)
    .map(copyProp("nanoseconds", "nano"))
    .map(copyProp("hours", "hour"))
    .map(copyProp("latitude", "lat"))
    .map(copyProp("longitude", "long"))
    .map(copyProp("longitude", "lng"))
    .map(copyProp("numberOfSensors", "numSensors"))
    .map(copyProp("degreesOfFreedom", "freedom"))
    .val();

const zipToObj =
  <Key extends ObjKey, T>(keys: readonly Key[]) =>
  (vals: readonly T[]): { [key in Key]: T } => {
    return keys.reduce((acc, key, i) => {
      const val = vals[i];
      return {
        ...acc,
        [key]: val,
      };
    }, {} as { [key in Key]: T });
  };

const zipAsObjWithSpecificKeys: (vals: string[]) => BaseKeys<string> =
  zipToObj(keys);

const setDatePropertyFromProps = (
  o: BaseKeys<string> & ExtraKeys<string>
): Ualf<string> => {
  const year = Number(o.year);
  const month = Number(o.month) - 1;
  const day = Number(o.day);
  const hours = Number(o.hours);
  const minutes = Number(o.minutes);
  const seconds = Number(o.seconds);
  const millis = Math.round(Number(o.nano) / 1000000);
  return {
    ...o,
    date: new Date(year, month, day, hours, minutes, seconds, millis),
  };
};

const convertStringsToNumbers = (x: Ualf<string>): Ualf<number> => {
  const keys = objectKeys(x);
  return keys.reduce(
    (acc, key) => ({
      ...acc,
      [key]: typeof x[key] === "string" ? Number(x[key]) : x[key],
    }),
    {} as Ualf<number>
  );
};

const objectKeys = <Key extends ObjKey>(o: Record<Key, unknown>): Key[] =>
  Object.keys(o) as Key[];

const splitToArrayBySpace = (xs: string): string[] => xs.split(" ");

const ualf: (x: string) => Ualf<string> = (x: string): Ualf<string> =>
  Identity(x)
    .map(splitToArrayBySpace)
    .map(zipAsObjWithSpecificKeys)
    .map(copySpecificProps)
    .map(setDatePropertyFromProps)
    .val();

export default ualf;

export const asNumbers = (x: string): Ualf<number> =>
  convertStringsToNumbers(ualf(x));
