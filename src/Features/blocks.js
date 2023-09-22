export default class BlockCovers{
    constructor(scene, x, y, right_image, left_image){
        this.scene = scene;
        this.right_block = new Phaser.GameObjects.Sprite(scene, x, y, right_image);
        scene.add.existing(this.right_block);
        scene.physics.add.existing(this.right_block);
        this.right_block.body.immovable = true;
        this.right_life = 0;
        this.right_block.setScale(2,2);

        this.left_block = new Phaser.GameObjects.Sprite(scene, x - 32, y, left_image);
        scene.add.existing(this.left_block);
        scene.physics.add.existing(this.left_block);
        this.left_block.body.immovable = true;
        this.left_block.draw
        this.left_life = 0;
        this.left_block.setScale(2,2);
    }

    damage_left_block(){
        if(this.left_life < 3){
            ++this.left_life;
            this.left_block.setFrame(this.left_life);
        }
        else{
            this.left_block.setActive(false).setVisible(false);
        }
    }

    damage_right_block(){
        if(right_life < 3){
            ++this.right_life;
            this.right_block.setFrame(this.left_life);
        }
        else{
            this.left_block.setActive(false).setVisible(false);
        }
    }
}