# ualf

> LLPS/CGLSS (UALF) data parser

[![Package status](https://img.shields.io/npm/v/ualf.svg?style=flat-square)](https://www.npmjs.com/package/ualf)
[![Build status](https://img.shields.io/circleci/project/github/Gipphe/ualf.svg?style=flat-square)](https://circleci.com/gh/Gipphe/ualf)
[![Code coverage](https://img.shields.io/coveralls/Gipphe/ualf.svg?style=flat-square)](https://coveralls.io/github/Gipphe/ualf)
[![License](https://img.shields.io/github/license/Gipphe/ualf.svg?style=flat-square)](https://opensource.org/licenses/MIT)

A tiny package for parsing LLPS/CGLSS (UALF) strings.

* [Getting Started](#getting-started)
  * [Installing](#installing)
  * [Usage](#usage)
* [Specification](#specification)
* [Contribution](#contribution)
* [Compatibility](#compatibility)
* [Changelog](#changelog)
* [Versioning](#versioning)
* [License](#license)
* [Further reading](#further-reading)

## Getting started

### Installing

Use the following command to add it to your `dependencies`:

```shell
npm install --save ualf
```

### Usage

```javascript
var ualf = require('ualf');

ualf(
  '0 2017 10 16 16 01 07 345596160 65.5204 12.7377 -87 ' +
  '0 12 17 134.27 0.40 0.40 0.72 13.1 10.0 -0.0 1 1 0 1'
);
```

output is an object with the following key-value pairs for the given string above:

```javascript
({
  version: "0",
  date: Date,
  year: "2017",
  month: "10",
  day: "16",
  hour: "16",
  hours: "16",
  minutes: "01",
  seconds: "07",
  nanoseconds: "345596160",
  nano: "345596160",
  latitude: "65.5204",
  lat: "65.5204",
  longitude: "12.7377",
  long: "12.7377",
  lng: "12.7377",
  peakCurrent: "-87",
  multiplicity: "0",
  numSensors: "12",
  numberOfSensors: "12",
  freedom: "17",
  degreesOfFreedom: "17",
  ellipseAngle: "134.27",
  semiMajorAxis: "0.40",
  semiMinorAxis: "0.40",
  chiSquareValue: "0.72",
  riseTime: "13.1",
  peakToZeroTime: "10.0",
  maxRateOfRise: "-0.0",
  cloudIndicator: "1",
  angleIndicator: "1",
  signalIndicator: "0",
  timingIndicator: "1"
})
```

For numerical output, use the attached `asNumbers` function:

```javascript
var ualf = require('ualf').asNumbers;

ualf(
  '0 2017 10 16 16 01 07 345596160 65.5204 12.7377 -87 ' +
  '0 12 17 134.27 0.40 0.40 0.72 13.1 10.0 -0.0 1 1 0 1'
);
```

output is an object with the following key-value pairs for the given string above:

```javascript
({
  version: 0,
  date: Date,
  year: 2017,
  month: 10,
  day: 16,
  hour: 16,
  hours: 16,
  minutes: 01,
  seconds: 07,
  nanoseconds: 345596160,
  nano: 345596160,
  latitude: 65.5204,
  lat: 65.5204,
  longitude: 12.7377,
  long: 12.7377,
  lng: 12.7377,
  peakCurrent: -87,
  multiplicity: 0,
  numSensors: 12,
  numberOfSensors: 12,
  freedom: 17,
  degreesOfFreedom: 17,
  ellipseAngle: 134.27,
  semiMajorAxis: 0.40,
  semiMinorAxis: 0.40,
  chiSquareValue: 0.72,
  riseTime: 13.1,
  peakToZeroTime: 10.0,
  maxRateOfRise: -0.0,
  cloudIndicator: 1,
  angleIndicator: 1,
  signalIndicator: 0,
  timingIndicator: 1
})
```

## Specification

The UALF "specification" looks something like
[this](https://beta.api.met.no/images/UALF_format.png). Each of these named segments have been
extracted as their own key-value pair of the resulting object returned from calling this package.
All values are kept as strings to retain leading zeroes.

```javascript
{
  version,
  date,            // Date object with the passed date and time
  year,
  month,
  day,
  hour,
  hours,           // alias for `hour`
  minutes,
  seconds,
  nanoseconds,
  nano,            // alias for `nanoseconds`
  latitude,
  lat,             // alias for `latitude`
  longitude,
  long,            // alias for `longitude`
  lng,             // alias for `longitude`
  peakCurrent,
  multiplicity,
  numberOfSensors,
  numSensors,      // alias for `numberOfSensors`
  degreesOfFreedom,
  freedom,         // alias for `degreesOfFreedom`
  ellipseAngle,
  semiMajorAxis,
  semiMinorAxis,
  chiSquareValue,
  riseTime,
  peakToZeroTime,
  maxRateOfRise,
  cloudIndicator,
  angleIndicator,
  signalIndicator,
  timingIndicator
}
```

## Contribution

This package is open to pull requests. To set up the test environment, fork it, clone it, and run

```javascript
npm install
```

in the package's folder.

Run the command

```javascript
npm test
```

to run unit tests.

## Compatibility

This package is compatible with Node versions all the way down to 8.11.1.

## Changelog

Changelog is available at [the repository](http://github.com/Gipphe/ualf/blob/master/CHANGELOG.md).

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the
[tags on this repository](https://github.com/Gipphe/ualf/tags).

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Further reading

For more information on the specifics of LLPS/CGLSS, and their data format UALF, check
[this document](http://www.gentoogeek.org/files/lightning_MARSS_poster.pdf)
or
[this abstract](https://ams.confex.com/ams/Annual2005/webprogram/Paper85823.html).
