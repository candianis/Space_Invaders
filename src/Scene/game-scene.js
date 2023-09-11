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
    }

    preload(){

    }

    create(){

    }

    update(){

    }
}