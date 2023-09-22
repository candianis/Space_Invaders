const VELOCITY = 15;

export default class PlayerBullet extends Phaser.GameObjects.Image {
    constructor(scene){
        super(scene, 0, 0, 'bullet');
        scene.add.existing(this);
        scene.physics.add.existing(this);
        this.speed = 1;
        this.maxDistance = 20;
    }

    fire(x, y){
        this.setPosition(x,y);
        this.setActive(true);
        this.setVisible(true);
    }

    disappear(){
        this.setActive(false);
        this.setVisible(false);
    }

    update(time, delta){
        this.y += this.speed * delta * -1;
        if(this.y < this.maxDistance) {
            this.disappear();
        }
    }
}