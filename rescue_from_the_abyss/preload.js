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
      this.load.audio("death","assets/death.mp3");
      this.load.audio("collectPlayer","assets/collectPlayer.mp3");
      this.load.audio("damage","assets/damage.mp3");
      this.load.audio("enemydamage","assets/enemydamage.mp3");
      this.load.audio("winningsound","assets/winningsound.mp3");
      this.load.image("preloadIMG", "assets/preload.jpg");
    }
  
    create() {
      console.log("*** preload scene");


      // turn on loop, adjust the volume
      window.music = this.sound.add("bgmusic",{loop: true}).setVolume(0.08);
      // start the background musicc
      window.music.play(); 
  
      // Check for spacebar or any key here
      var spaceDown = this.input.keyboard.addKey("SPACE");
  
      // On spacebar event, call the world scene
      spaceDown.on(
        "down",
        function () {
          console.log("Jump to intro1 scene");
  
        let playerPos = {};
        playerPos.x = 338;
        playerPos.y = 196;
        this.scene.start("intro1", { playerPos: playerPos });
        },
        this
      );

      this.preload = this.add.image(0, 0, 'preloadIMG').setOrigin(0, 0).setScale(1);
    }
  }
  