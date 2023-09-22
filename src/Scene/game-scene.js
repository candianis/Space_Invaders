import AlienLine from "../Features/alien_line.js";
import BlockCover from "../Features/blocks.js";
import PlayerGun from "../Features/main-gun.js";
import Player from "../Features/player.js";

const MIN_HEIGHT = 200;

export default class GameScene extends Phaser.Scene {
    constructor(config){
        super( {key: 'SceneA', active: true} );
        this.config = config;
        this.player = null;
        this.player_gun = null;
        this.invaders1 = null;
        this.invaders2 = null;
        this.invaders3 = null;
        this.invaders4 = null;
        this.invaders5 = null;
        this.cover1 = null;
        this.cover2 = null;
        this.cover3 = null;
        this.cover4 = null;
        this.cover5 = null;
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
        this.load.image('bullet', '../assets/Textures/bullet.png');
    }

    create(){
        //Textures
        this.player = new Player(this, this.config.width / 2, 450, 'player');
        this.player_gun = new PlayerGun(this, this.player, 'bullet', 1);
        this.invaders1 = new AlienLine(this, 200, MIN_HEIGHT,        32, 'invader1');
        this.invaders2 = new AlienLine(this, 200, MIN_HEIGHT -  32,  32, 'invader2');
        this.invaders3 = new AlienLine(this, 200, MIN_HEIGHT -  64,  32, 'invader3');
        this.invaders4 = new AlienLine(this, 200, MIN_HEIGHT -  96,  32, 'invader4');
        this.invaders5 = new AlienLine(this, 200, MIN_HEIGHT - 128,  32, 'invader5');
        this.cover1 = new BlockCover(this, 200, 400, 'right-block', 'left-block');
        this.cover2 = new BlockCover(this, 300, 400, 'right-block', 'left-block');
        this.cover3 = new BlockCover(this, 400, 400, 'right-block', 'left-block');
        this.cover4 = new BlockCover(this, 500, 400, 'right-block', 'left-block');
        this.cover5 = new BlockCover(this, 600, 400, 'right-block', 'left-block');

        //Animations
        this.anims.create({
            key: "invader1",
            frames: this.anims.generateFrameNumbers("invader1", { start: 0, end: 1 }),
            frameRate: 1,
            repeat: -1
        });

        this.anims.create({
            key: "invader2",
            frames: this.anims.generateFrameNumbers("invader2", { start: 0, end: 1 }),
            frameRate: 1,
            repeat: -1
        });

        this.anims.create({
            key: "invader3",
            frames: this.anims.generateFrameNumbers("invader3", { start: 0, end: 1 }),
            frameRate: 1,
            repeat: -1
        });

        this.anims.create({
            key: "invader4",
            frames: this.anims.generateFrameNumbers("invader4", { start: 0, end: 1 }),
            frameRate: 1,
            repeat: -1
        }); 
        
        this.anims.create({
            key: "invader5",
            frames: this.anims.generateFrameNumbers("invader5", { start: 0, end: 1 }),
            frameRate: 1,
            repeat: -1
        });    
        
        this.anims.create({
            key: "death",
            frames: this.anims.generateFrameNumbers("death", { start: 0, end: 2}),
            frameRate: 5,
            repeat: 0
        });

        this.invaders1.playAnimations();
        this.invaders2.playAnimations();
        this.invaders3.playAnimations();
        this.invaders4.playAnimations();
        this.invaders5.playAnimations();

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

        });

        //Collisions
        this.physics.add.collider(this.player_gun.bullets, this.invaders1.group, (bullet, invader) =>{
            bullet.disappear();
            invader.destroy(true);
        }, null, this);

    }

    update(time, delta){
        if(this.cursors.space.isDown && time > this.player_gun.lastFired){
            const bullet = this.player_gun.bullets.get();
            if(bullet){
                bullet.fire(this.player.x, this.player.y);
                this.player_gun.lastFired = time + 500;
            }
        }
        
    }
}