class gamecontrolshoot extends Phaser.Scene {
    constructor() {
      super("gamecontrolshoot");
  
      // Put global variable here
    }
  
    init(data) {
      this.playerPos = data.playerPos;
      this.inventory = data.inventory;
    }
  
    preload() {
      this.load.image("gamecontrolshootIMG", "assets/gamecontrolshoot.jpg");
    }
  
    create() {
      console.log("*** gamecontrolshoot scene");
  
      // Check for spacebar or any key here
      var spaceDown = this.input.keyboard.addKey("SPACE");
  
      // On spacebar event, call the world scene
      spaceDown.on(
        "down",
        function () {
          console.log("Jump to hospital scene");
        this.scene.start("hospital");
        },
        this
      );
  
      this.intro = this.add.image(0, 0, 'gamecontrolshootIMG').setOrigin(0, 0).setScale(1);

    }

    hospital(player, tile) {
      console.log("hospital function");
      this.scene.start("hospital", {
        player: player,
        inventory: this.inventory,
      });
    }
  }
  