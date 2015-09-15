var Watch = require('./Watch');
var Tablet = require('./Tablet');

function SmartWatch(systemName) {

  Watch.call(this);

}

SmartWatch.prototype.wear = function(bodyPart) {

  this.bodyPart = bodyPart;

};

SmartWatch.prototype.touch = function(x,y) {

  return {

    x : x,
    y : y

  };

};

module.exports = SmartWatch;