var config = {
    type: Phaser.WEBGL,
    // pixel size * tile map size * zoom 
    width: 32 *57.5,
    height: 32 * 28,
    physics: {
        default: 'arcade',
        arcade: {
            debug: false
        }
    },
    scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH
    },
    backgroundColor: '#000000',
    pixelArt: true,
    scene: [preload, intro1, intro2, intro3, intro4, gamecontrol, intro5, abandonbuilding, intro6, world, intro7, intro8, gamecontrolshoot, intro9, intro10, intro11, intro12, store, hospital, museum, gameOver, winningscene, showInventory ]
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
window.leon = 0
window.sheldon = 0