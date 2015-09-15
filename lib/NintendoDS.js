var GameConsole = require('./GameConsole');
var WebBrowser = require('./WebBrowser');

function NintendoDS() {

  GameConsole.call(this, 'Nintendo DS');
  this.systemName = 'Nintendo DS';

}

NintendoDS.prototype.play = function(game) {

  return this.systemName + ' plays ' + game.title;

};

NintendoDS .prototype.open = function(url) {

  return 'Browsing to ' + url;

};

module.exports = NintendoDS;