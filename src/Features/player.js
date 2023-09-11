const HORIZONTAL_VELOCITY = 500;

export default class Player extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, texture){
        super(scene, x, y, texture);
        this.scene = scene;
        scene.add.existing(this);
        scene.physics.add.existing(this);
        scene.input.keyboard.on("keydown", this.CheckMovement, this);
        scene.input.keyboard.on("keyup", this.resetSpeed, this);
        this.setScale(10, 10);
        this.body.immovable = true;
        this.body.setCollideWorldBounds(true);

        this.lifes = 1;
        this.canMove = true;

    }

    CheckMovement(){
        if(this.canMove){
            if(event.keyCode === Phaser.Input.Keyboard.KeyCodes.A || event.keyCode === Phaser.Input.Keyboard.KeyCodes.LEFT)
                this.body.velocity.x = -HORIZONTAL_VELOCITY;
            if(event.keyCode === Phaser.Input.Keyboard.KeyCodes.D || event.keyCode === Phaser.Input.Keyboard.KeyCodes.RIGHT)
                this.body.velocity.x = HORIZONTAL_VELOCITY;
        }
    }

    resetSpeed(){
        this.body.velocity.x = 0;
    }
}