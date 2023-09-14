const HORIZONTAL_VELOCITY = 500;

export default class Player extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, texture){
        super(scene, x, y, texture);
        this.scene = scene;
        scene.add.existing(this);
        scene.physics.add.existing(this);
        this.setScale(3, 3);
        this.body.immovable = true;
        this.body.setCollideWorldBounds(true);

        this.lifes = 1;
        this.canMove = true;
    }

    check_movement(direction){
        this.body.setVelocityX(HORIZONTAL_VELOCITY * direction);
    }

    reset_movement(){
        this.body.setVelocityX(0);
    }

    fire_bullet(){
        console.log("FIRE!");
    }
}