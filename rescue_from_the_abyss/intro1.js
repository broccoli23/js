class intro1 extends Phaser.Scene {
    constructor() {
      super("intro1");
  
      // Put global variable here
    }
  
    init(data) {
      this.playerPos = data.playerPos;
      this.inventory = data.inventory;
    }
  
    preload() {
      this.load.image("intro1IMG", "assets/intro1.jpg");
    }
  
    create() {
      console.log("*** intro1 scene");

    
  
      // Check for spacebar or any key here
      var spaceDown = this.input.keyboard.addKey("SPACE");
  
      // On spacebar event, call the world scene
      spaceDown.on(
        "down",
        function () {
          console.log("Jump to intro2 scene");
  
        let playerPos = {};
        playerPos.x = 338;
        playerPos.y = 196;
        this.scene.start("intro2", { playerPos: playerPos });
        },
        this
      );
  
      this.intro = this.add.image(0, 0, 'intro1IMG').setOrigin(0, 0).setScale(1);
    }
  }
  