class intro8 extends Phaser.Scene {
    constructor() {
      super("intro8");
  
      // Put global variable here
    }
  
    init(data) {
      this.playerPos = data.playerPos;
      this.inventory = data.inventory;
    }
  
    preload() {
      this.load.image("intro8IMG", "assets/intro8.jpg");
    }
  
    create() {
      console.log("*** intro8 scene");
  
      // Check for spacebar or any key here
      var spaceDown = this.input.keyboard.addKey("SPACE");
  
      // On spacebar event, call the world scene
      spaceDown.on(
        "down",
        function () {
          console.log("Jump to world scene");
          let playerPos = {};
          playerPos.x = 1609;
          playerPos.y = 823;
          this.scene.start("world", { playerPos: playerPos });
          },
        this
      );
  
      this.intro = this.add.image(0, 0, 'intro8IMG').setOrigin(0, 0).setScale(1);
    }

  }
  
  