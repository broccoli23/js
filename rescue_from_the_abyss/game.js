var config = {
    type: Phaser.AUTO,
    // pixel size * tile map size * zoom 
    width: 32 *57.5,
    height: 32 * 28,
    physics: {
        default: 'arcade',
        arcade: {
            debug: true
        }
    },
    // scale: {
    //     mode: Phaser.Scale.FIT,
    //     autoCenter: Phaser.Scale.CENTER_BOTH
    // },
    backgroundColor: '#000000',
    pixelArt: true,
    scene: [preload, intro2, intro3, intro4, intro5, abandonbuilding, world, store, hospital, museum, gameOver, showInventory ]
};

var game = new Phaser.Game(config);

// Add variables here
window.heart = 3
window.map = 0
window.longbow = 0
window.compass = 0
window.aidkit = 0
window.survivalknife = 0
window.torch = 0
window.energybar = 0
