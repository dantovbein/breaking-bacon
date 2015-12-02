(function(){

'use strict';

var BreakingBacon = {};

var game = new Phaser.Game(800,600,Phaser.AUTO);

game.state.add('BreakingBacon.Game',new Game({ game: game }));

game.state.start('BreakingBacon.Game');

})();