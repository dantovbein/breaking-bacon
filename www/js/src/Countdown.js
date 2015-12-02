'use strict';

function Countdown(game,x,y) {
	Phaser.Group.call(this,game);

	this.COUNTDOWN_1 = "countdown1";
	this.COUNTDOWN_2 = "countdown2";
	this.COUNTDOWN_3 = "countdown3";
	this.COUNTDOWN_GO = "countdownGo";

	this.game = game;
	this.game.load.image(this.COUNTDOWN_1,'assets/images/countdown-1.png');
	this.game.load.image(this.COUNTDOWN_2,'assets/images/countdown-2.png');
	this.game.load.image(this.COUNTDOWN_3,'assets/images/countdown-3.png');
	this.game.load.image(this.COUNTDOWN_GO,'assets/images/countdown-go.png');

	this.create(0,0,this.COUNTDOWN_GO);
	//this.game.add(this);
	//this.create();
}

Countdown.prototype = Object.create(Phaser.Group.prototype);

Countdown.prototype.constructor = Countdown

Countdown.prototype.create = function() {
	Phaser.Group.prototype.create.call(this);
	console.log("create");
}

Countdown.prototype.create = function() {
	Phaser.Group.prototype.create.call(this);
	console.log("create")
}

Countdown.prototype.update = function() {
	//console.log("update")
}


/*
this.game.load.image(this.COUNTDOWN_1,'assets/images/countdown-1.png');
this.game.load.image(this.COUNTDOWN_2,'assets/images/countdown-2.png');
this.game.load.image(this.COUNTDOWN_3,'assets/images/countdown-3.png');
this.game.load.image(this.COUNTDOWN_GO,'assets/images/countdown-go.png');
		*/