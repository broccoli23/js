class preload extends Phaser.Scene {
    constructor() {
      super("preload");
  
      // Put global variable here
    }
  
    init(data) {
      this.playerPos = data.playerPos;
      this.inventory = data.inventory;
    }
  
    preload() {
      this.load.audio("bgmusic","assets/bgmusic.mp3");
      this.load.audio("collectItem","assets/collectItem.mp3");
      this.load.image("intro1IMG", "assets/intro1.jpg");
    }
  
    create() {
      console.log("*** preload scene");

      

      // turn on loop, adjust the volume
      this.music = this.sound.add("bgmusic",{loop: true}).setVolume(0.08);
      // start the background musicc
      this.music.play(); 
  
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
      // Add any text in the main page
      // this.add.text(10, 10, "Press spacebar to continue", {
      //   font: "30px Courier",
      //   fill: "#FFFFFF",
      // });
  
      // Create all the game animations here
    }
  }
  