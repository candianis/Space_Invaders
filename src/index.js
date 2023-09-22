import GameScene from "./Scene/game-scene.js";

const SHARED_CONFIG = {
  width: 800,
  height: 480,
}

var config = {
	type: Phaser.CANVAS,
  ...SHARED_CONFIG,
	physics: {
		default: 'arcade',
		arcade: {
			gravity: { y: 0 },
			useDamping: true,
			debug: true
		}
	},
	backgroundColor: '#000000',
	scale: {
		mode: Phaser.Scale.FIT,
		autocenter: Phaser.Scale.CENTER_HORIZONTALLY,
		orientation: Phaser.Scale.Orientation.LANDSCAPE
	},

  scene: [new GameScene(SHARED_CONFIG)]
};

var game = new Phaser.Game(config);