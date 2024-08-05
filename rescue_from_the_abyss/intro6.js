class intro6 extends Phaser.Scene {
    constructor() {
      super("intro6");
  
      // Put global variable here
    }
  
    init(data) {
      this.playerPos = data.playerPos;
      this.inventory = data.inventory;
    }
  
    preload() {
      this.load.image("intro6IMG", "assets/intro6.jpg");
    }
  
    create() {
      console.log("*** intro6 scene");
  
      // Check for spacebar or any key here
      var spaceDown = this.input.keyboard.addKey("SPACE");
  
      // On spacebar event, call the world scene
      spaceDown.on(
        "down",
        function () {
          console.log("Jump to abandonbuilding scene");
  
        let playerPos = {};
        playerPos.x = 979;
        playerPos.y = 603;
        this.scene.start("world", { playerPos: playerPos });
        },
        this
      );
  
      this.intro = this.add.image(0, 0, 'intro6IMG').setOrigin(0, 0).setScale(1);
    }
  }
  
  