class intro10 extends Phaser.Scene {
    constructor() {
      super("intro10");
  
      // Put global variable here
    }
  
    init(data) {
      this.playerPos = data.playerPos;
      this.inventory = data.inventory;
    }
  
    preload() {
      this.load.image("intro10IMG", "assets/intro10.jpg");
    }
  
    create() {
      console.log("*** intro10 scene");
  
      // Check for spacebar or any key here
      var spaceDown = this.input.keyboard.addKey("SPACE");
  
      // On spacebar event, call the world scene
      spaceDown.on(
        "down",
        function () {
          console.log("Jump to world scene");
          let playerPos = {};
          playerPos.x = 300;
          playerPos.y = 1100;
          this.scene.start("world", { playerPos: playerPos });
          },
        this
      );
  
      this.intro = this.add.image(0, 0, 'intro10IMG').setOrigin(0, 0).setScale(1);
    }

  }
  
  