import PlayerBullet from "./bullet.js";

export default class PlayerGun {
    constructor(scene, holder, bulletAmount){
        this.scene = scene;
        this.holder = holder;
        this.lastFired = 0;

        this.bullets = scene.add.group({
            classType: PlayerBullet,
            maxSize: bulletAmount,
            runChildUpdate: true
        });
    }
}