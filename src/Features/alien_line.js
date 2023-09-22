export default class AlienLine {
    constructor(scene, xPos, yPos, stepInX, image){
        this.scene = scene;
        this.animImage = image;
        this.group = this.scene.physics.add.group({
            key: image,
            repeat: 12,
            setXY: {
                x: xPos,
                y: yPos,
                stepX: stepInX,
                stepY: 0
            },
        setScale: { x: 1.5, y: 1.5  },
        immovable: true,
        allowGravity: false
        });
    }

    playAnimations(){
        this.group.playAnimation(this.animImage);
    }
}