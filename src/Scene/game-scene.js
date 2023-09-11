import Player from "../Features/player.js";

export default class GameScene extends Phaser.Scene {
    constructor(config){
        super( {key: 'SceneA', active: true} );
        this.config = config;
        this.player = null;
        this.layers = {
            background: null,
            game: null,
            ui:null
        }

        this.textureSpriteSheet = null;
    }

    preload(){
        this.textureSpriteSheet = this.load.spritesheet('space-invaders', '../../assets/Textures/SpaceInvaders.png', {frameWidth: 16, frameHeight: 16});
    }

    create(){
        this.player = new Player(this, 200, 450, 'space-invaders');
    }

    update(){

    }
}