function GameConsole(systemName) {

  this.systemName = systemName;

}

GameConsole.prototype.play = function(game) {

  return 'this ' + this.systemName + 'plays' + this.game.title;

};

module.exports = GameConsole;