var Phone = require('./Phone');
var Tablet = require('./Tablet');
var GameConsole = require('./GameConsole');
var WebBrowser = require('./WebBrowser');

function SmartPhone(phoneNumber, systemName) {

  Phone.call(this, phoneNumber);
  GameConsole.call(this, 'Smart Phone');

}

SmartPhone.prototype.callPhone = function(phoneNumber) {

  return this.phoneNumber + ' calls ' + phoneNumber;

};

SmartPhone.prototype.touch = function(x,y) {

  return {

    x : x,
    y : y

  };

};

SmartPhone.prototype.play = function(game) {

  return this.systemName + ' plays ' + game.title;

};

SmartPhone.prototype.open = function(url) {

  return 'Browsing to ' + url;

};

module.exports = SmartPhone;