var tap = require('tap');
var ualf = require('.');

var res = ualf('0 2017 10 16 16 01 07 345596160 65.5204 12.7377 -87 0 12 17 134.27 0.40 0.40 0.72 13.1 10.0 -0.0 1 1 0 1');
tap.type(res, 'object');
tap.equal(res.version, '0');
tap.equal(res.year, '2017');
tap.equal(res.month, '10');
tap.equal(res.day, '16');
tap.equal(res.date.getFullYear(), 2017);
tap.equal(res.date.getMonth(), 9);
tap.equal(res.date.getDate(), 16);
tap.equal(res.date.getHours(), 16);
tap.equal(res.date.getMinutes(), 1);
tap.equal(res.date.getSeconds(), 7);
tap.equal(res.date.getMilliseconds(), 346);
tap.equal(res.hours, '16');
tap.equal(res.hour, '16');
tap.equal(res.minutes, '01');
tap.equal(res.seconds, '07');
tap.equal(res.nanoseconds, '345596160');
tap.equal(res.nano, '345596160');
tap.equal(res.latitude, '65.5204');
tap.equal(res.lat, '65.5204');
tap.equal(res.longitude, '12.7377');
tap.equal(res.long, '12.7377');
tap.equal(res.lng, '12.7377');
tap.equal(res.peakCurrent, '-87');
tap.equal(res.multiplicity, '0');
tap.equal(res.numSensors, '12');
tap.equal(res.numberOfSensors, '12');
tap.equal(res.freedom, '17');
tap.equal(res.degreesOfFreedom, '17');
tap.equal(res.ellipseAngle, '134.27');
tap.equal(res.semiMajorAxis, '0.40');
tap.equal(res.semiMinorAxis, '0.40');
tap.equal(res.chiSquareValue, '0.72');
tap.equal(res.riseTime, '13.1');
tap.equal(res.peakToZeroTime, '10.0');
tap.equal(res.maxRateOfRise, '-0.0');
tap.equal(res.cloudIndicator, '1');
tap.equal(res.angleIndicator, '1');
tap.equal(res.signalIndicator, '0');
tap.equal(res.timingIndicator, '1');

var numRes = ualf.asNumbers('0 2017 10 16 16 01 07 345596160 65.5204 12.7377 -87 0 12 17 134.27 0.40 0.40 0.72 13.1 10.0 -0.0 1 1 0 1');
tap.type(numRes, 'object');
tap.equal(numRes.version, 0);
tap.equal(numRes.year, 2017);
tap.equal(numRes.month, 10);
tap.equal(numRes.day, 16);
tap.equal(numRes.date.getFullYear(), 2017);
tap.equal(numRes.date.getMonth(), 9);
tap.equal(numRes.date.getDate(), 16);
tap.equal(numRes.date.getHours(), 16);
tap.equal(numRes.date.getMinutes(), 1);
tap.equal(numRes.date.getSeconds(), 7);
tap.equal(numRes.date.getMilliseconds(), 346);
tap.equal(numRes.hours, 16);
tap.equal(numRes.hour, 16);
tap.equal(numRes.minutes, 1);
tap.equal(numRes.seconds, 7);
tap.equal(numRes.nanoseconds, 345596160);
tap.equal(numRes.nano, 345596160);
tap.equal(numRes.latitude, 65.5204);
tap.equal(numRes.lat, 65.5204);
tap.equal(numRes.longitude, 12.7377);
tap.equal(numRes.long, 12.7377);
tap.equal(numRes.lng, 12.7377);
tap.equal(numRes.peakCurrent, -87);
tap.equal(numRes.multiplicity, 0);
tap.equal(numRes.numSensors, 12);
tap.equal(numRes.numberOfSensors, 12);
tap.equal(numRes.freedom, 17);
tap.equal(numRes.degreesOfFreedom, 17);
tap.equal(numRes.ellipseAngle, 134.27);
tap.equal(numRes.semiMajorAxis, 0.40);
tap.equal(numRes.semiMinorAxis, 0.40);
tap.equal(numRes.chiSquareValue, 0.72);
tap.equal(numRes.riseTime, 13.1);
tap.equal(numRes.peakToZeroTime, 10.0);
tap.equal(numRes.maxRateOfRise, -0.0);
tap.equal(numRes.cloudIndicator, 1);
tap.equal(numRes.angleIndicator, 1);
tap.equal(numRes.signalIndicator, 0);
tap.equal(numRes.timingIndicator, 1);
