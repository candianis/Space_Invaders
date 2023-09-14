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
        this.cursors = null;

        this.textureSpriteSheet = null;
    }

    preload(){
        this.textureSpriteSheet = this.load.spritesheet({ key: 'invader1',    url: '../../assets/Textures/invader.png',     frameConfig: { frameWidth: 16, frameHeight: 16, startFrame: 0, endFrame: 1 }});
        this.textureSpriteSheet = this.load.spritesheet({ key: 'invader2',    url: '../../assets/Textures/invader2.png',    frameConfig: { frameWidth: 16, frameHeight: 16, startFrame: 0, endFrame: 1 }});
        this.textureSpriteSheet = this.load.spritesheet({ key: 'invader3',    url: '../../assets/Textures/invader3.png',    frameConfig: { frameWidth: 16, frameHeight: 16, startFrame: 0, endFrame: 1 }});
        this.textureSpriteSheet = this.load.spritesheet({ key: 'invader4',    url: '../../assets/Textures/invader4.png',    frameConfig: { frameWidth: 16, frameHeight: 16, startFrame: 0, endFrame: 1 }});
        this.textureSpriteSheet = this.load.spritesheet({ key: 'invader5',    url: '../../assets/Textures/invader5.png',    frameConfig: { frameWidth: 16, frameHeight: 16, startFrame: 0, endFrame: 1 }});
        this.textureSpriteSheet = this.load.spritesheet({ key: 'death',       url: '../../assets/Textures/death.png',       frameConfig: { frameWidth: 16, frameHeight: 16, startFrame: 0, endFrame: 2 }});
        this.textureSpriteSheet = this.load.spritesheet({ key: 'right-block', url: '../../assets/Textures/right_block.png', frameConfig: { frameWidth: 16, frameHeight: 16, startFrame: 0, endFrame: 3 }});
        this.textureSpriteSheet = this.load.spritesheet({ key: 'left-block',  url: '../../assets/Textures/left_block.png',  frameConfig: { frameWidth: 16, frameHeight: 16, startFrame: 0, endFrame: 3 }});


        this.load.image('player', '../assets/Textures/player.png');
        this.load.image('mini-boss', '../assets/Textures/mini-boss.png');
    }

    create(){
        //Textures
        this.player = new Player(this, this.config.width / 2, 450, 'invader1');

        //Animations
        this.anims.create({
            key: "invader1",
            frames: this.anims.generateFrameNumbers("invader1", { start: 0, end: 1 }),
            frameRate: 1,
            repeat: 1
          });

        //Inputs
        this.cursors = this.input.keyboard.createCursorKeys();
        this.cursors.left.on("down", () => {
            this.player.check_movement(-1);
        });
        this.cursors.right.on("down", () => {
            this.player.check_movement(1);
        });
        this.cursors.left.on("up", () => {
            this.player.reset_movement();
        });
        this.cursors.right.on("up", () => {
            this.player.reset_movement();
        });

        this.cursors.space.on("down", () => {
            this.player.fire_bullet();
        })
    }

    update(){
        this.player.anims.play('invader1', true);
    }
}