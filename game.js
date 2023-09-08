const StateEnum = Object.freeze({
	Initial:1,
	Difficulty: 2,
	PreGame:3,
	Game:4,
	PostGame:5,
});

var cursors;
var pressingLeft = false;
var pressingRight = false;
var pressingUp = false;
var pressingDown = false;
var buttonDown;
var buttonLeft;
var buttonRight;
var	buttonUp;
var loaded = false;
var lastTime = 0;
var time = 0;
var stateInit = false;
var stateFunctions =  [InitialState, DifficultyState, PreGameState, GameState, PostGameState];
var state = StateEnum.Initial;
var debugVar = false;


var config = {
	type: Phaser.CANVAS,
	physics: {
		default: 'arcade',
		arcade: {
			gravity: { y: 200 },
			useDamping: true,
			debug: debugVar
		}
	},
	scale: {
		mode: Phaser.Scale.FIT,
		width: 1280,
		height: 720,
		autocenter: Phaser.Scale.CENTER_HORIZONTALLY,
		orientation: Phaser.Scale.Orientation.LANDSCAPE
	},
	scene: {
		preload: preload,
		create: create,
		update: update
	}
};

var game = new Phaser.Game(config);

function preload ()
{

	if(window.innerHeight > window.innerWidth) //portrait
	{
		this.scale.lockOrientation(Phaser.Scale.Orientation.PORTRAIT);
		if(this.sys.game.device.browser.mobileSafari)
			this.scale.setGameSize(720, 1180);
		else
			this.scale.setGameSize(720, 1280);
	}
	if(window.innerWidth > window.innerHeight) //landscape
	{
		this.scale.lockOrientation(Phaser.Scale.Orientation.LANDSCAPE);
		this.scale.setGameSize(1280, 720);
	}

	var progressBar = this.add.graphics();
	var progressBox = this.add.graphics();
	progressBox.fillStyle(0x222222, 0.8);
	progressBox.fillRect(this.scale.width/2 - 160, this.scale.height/2, 320, 50);
	thisRef = this;
	this.load.on('progress', function (value) {
	    console.log(value);
	    console.log(value);
	    progressBar.clear();
	    progressBar.fillStyle(0xffffff, 1);
	    progressBar.fillRect(thisRef.scale.width/2 - 150, thisRef.scale.height/2 + 10, 300 * value, 30);
	});

	this.load.on('fileprogress', function (file) {
	    console.log(file.src);
	});

	this.load.on('complete', function () {
	    console.log('complete');
		progressBar.destroy();
		progressBox.destroy();
	});

	if(!loaded)
	{

	}
}

function create ()
{
	if(window.innerHeight > window.innerWidth) //portrait
	{

	}
	if(window.innerWidth > window.innerHeight) //landscape
	{

	}

	cursors = this.input.keyboard.createCursorKeys();
}

function PreGameState() {
	stateInit = false;
	state = StateEnum.Game;
}

function InitialState() {
	if(!stateInit) {
		stateInit = true;
	}
}

function DifficultyState() {
	if(!stateInit) {
		stateInit = true;
	}
}

function GameState() {
	if(!stateInit) {
		stateInit = true;
	}
}

function PostGameState() {
	if(!stateInit) {
		stateInit = true;
	}
}

function update()
{
	time = this.time.now;
	stateFunctions[state - 1]();
	lastTime = this.time.now;
}
