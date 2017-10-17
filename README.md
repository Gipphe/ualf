# ualf

> LPSS/CGLSS (UALF) data parser

[![Package status](https://img.shields.io/npm/v/ualf.svg?style=flat-square)](https://www.npmjs.com/package/ualf)
[![Build status](https://img.shields.io/circleci/project/github/Gipphe/ualf.svg?style=flat-square)](https://circleci.com/gh/Gipphe/ualf)
[![License](https://img.shields.io/github/license/Gipphe/ualf.svg?style=flat-square)](https://opensource.org/licenses/MIT)

A tiny package for parsing LPSS/CGLSS (UALF) strings.

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

ualf('0 2017 10 16 16 01 07 345596160 65.5204 12.7377 -87 0 12 17 134.27 0.40 0.40 0.72 13.1 10.0 -0.0 1 1 0 1');
//=> { version: ..., year: ..., month: ..., day: ..., hours: ..., ... }
```

## Specification

The UALF "specification" looks something like [this](https://beta.api.met.no/images/UALF_format.png). Each of these named segments have been extracted as their own key-value pair of the resulting object returned from calling this package. All values are kept as strings to retain leading zeroes.

```javascript
{
  version,
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

in the package's folder. This will install `tap`, the only direct dependency.

Run the command

```javascript
npm test
```

to run unit tests.

## Compatibility

This package even works with ES3, meaning you can use it in IE 7 and 8 without issue.

## Changelog

Changelog is available at [the repository](http://github.com/Gipphe/ualf/blob/master/CHANGELOG.md).

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/Gipphe/ualf/tags).

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Further reading

For more information on the specifics of LPSS/CGLSS, and their data format UALF, check
[this document](http://www.gentoogeek.org/files/lightning_MARSS_poster.pdf)
or
[this abstract](https://ams.confex.com/ams/Annual2005/webprogram/Paper85823.html).
