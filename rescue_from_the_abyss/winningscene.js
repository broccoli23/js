class winningscene extends Phaser.Scene {
  constructor() {
    super("winningscene");

    // Put global variable here
  }

  preload() {
    this.load.image("win", "assets/win.jpg");
  }

  create() {
    console.log("*** winningscene scene");

    // Add image and detect spacebar keypress
    this.add.image(0, 0, 'win').setOrigin(0, 0);

    // Check for spacebar or any key here
    var spaceDown = this.input.keyboard.addKey("SPACE");

    // On spacebar event, call the world scene
    spaceDown.on("down", function () {
    console.log("Jump to tutorial scene");
    window.heart = 3;
    window.map = 0;
    window.longbow = 0;
    window.compass = 0;
    window.aidkit = 0;
    window.survivalknife = 0;
    window.torch = 0;
    window.energybar = 0;
    
    this.scene.start("preload");
      },
      this
    );
  }
}

