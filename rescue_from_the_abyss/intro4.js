class intro4 extends Phaser.Scene {
    constructor() {
      super("intro4");
  
      // Put global variable here
    }
  
    init(data) {
      this.playerPos = data.playerPos;
      this.inventory = data.inventory;
    }
  
    preload() {
      this.load.image("intro4IMG", "assets/intro4.jpg");
      this.load.spritesheet('trophy', 'assets/trophy.png',{ frameWidth:64, frameHeight:64 });
    }
  
    create() {
      console.log("*** intro4 scene");
  
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
  
      this.intro = this.add.image(0, 0, 'intro4IMG').setOrigin(0, 0).setScale(1);

      //character display
      this.anims.create({
        key:'trophyAnim',
        frames:this.anims.generateFrameNumbers('trophy',
        { start:0, end:1 }),
        frameRate:2,
        repeat:-1
    });

      this.trophy = this.physics.add.sprite(920, 200, 'trophy').play('trophyAnim').setScale(4);


      // Add any text in the main page
      // this.add.text(10, 10, "Press spacebar to continue", {
      //   font: "30px Courier",
      //   fill: "#FFFFFF",
      // });
  
      // Create all the game animations here
    }
  }
  