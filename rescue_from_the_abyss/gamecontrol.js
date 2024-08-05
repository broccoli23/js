class gamecontrol extends Phaser.Scene {
    constructor() {
      super("gamecontrol");
  
      // Put global variable here
    }
  
    init(data) {
      this.playerPos = data.playerPos;
      this.inventory = data.inventory;
    }
  
    preload() {
      this.load.image("gamecontrolIMG", "assets/gamecontrol.jpg");
    }
  
    create() {
      console.log("*** gamecontrol scene");
  
      // Check for spacebar or any key here
      var spaceDown = this.input.keyboard.addKey("SPACE");
  
      // On spacebar event, call the world scene
      spaceDown.on(
        "down",
        function () {
          console.log("Jump to intro5 scene");
  
        let playerPos = {};
        playerPos.x = 338;
        playerPos.y = 196;
        this.scene.start("intro5", { playerPos: playerPos });
        },
        this
      );
  
      this.intro = this.add.image(0, 0, 'gamecontrolIMG').setOrigin(0, 0).setScale(1);

    }
  }
  