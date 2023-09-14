const VELOCITY = 15;

export default class Bullet extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, texture){
        super(scene, x, y, texture);
        scene.add.existing(this);
        
    }
}