'use strict';

function Game(config) {
	this.config = config;
	this.game = this.config.game;
}

Game.prototype.constructor = Game;

Game.prototype = {
	init: function() {
		this.stage.backgroundColor = 0x3141df;

		this.upKey = this.game.input.keyboard.addKey(Phaser.Keyboard.UP);
		this.rightKey = this.game.input.keyboard.addKey(Phaser.Keyboard.RIGHT);
		this.leftKey = this.game.input.keyboard.addKey(Phaser.Keyboard.LEFT);
		this.downKey = this.game.input.keyboard.addKey(Phaser.Keyboard.DOWN);
	},
	preload: function() {
		//this.loadSounds();
		
		//this.game.load.image(this.BACKGROUND,'assets/images/background.png');
    },
    loadSounds: function() {
    	// Load Sounds
		this.game.load.audio('background', ['assets/sounds/background-music.wav']);
		this.game.load.audio('beep', ['assets/sounds/cowntdown-beep.wav']);
		this.game.load.audio('go-tone', ['assets/sounds/go-tone.wav']);
		this.game.load.audio('hit-object', ['assets/sounds/hit-object.wav']);
		this.game.load.audio('jetski-loop', ['assets/sounds/jetski-loop.wav']);
		this.game.load.audio('open-sea-ambience', ['assets/sounds/open-sea-ambience-loop.wav']);
		this.game.load.audio('crash', ['assets/sounds/crash.wav']);
    },
	create: function() {
		var countdown = new Countdown(this.game,0,0);
	},
	update: function() {},
	render: function() {}
};