class intro5 extends Phaser.Scene {
    constructor() {
      super("intro5");
  
      // Put global variable here
    }
  
    init(data) {
      this.playerPos = data.playerPos;
      this.inventory = data.inventory;
    }
  
    preload() {
      this.load.image("intro5IMG", "assets/intro5.jpg");
      this.load.spritesheet('mapIMG', 'assets/map.png',{ frameWidth:32, frameHeight:32 });
      this.load.spritesheet('compassIMG', 'assets/compass.png',{ frameWidth:32, frameHeight:32 });
      this.load.spritesheet('longbowIMG', 'assets/longbow.png',{ frameWidth:64, frameHeight:64 });
    }
  
    create() {
      console.log("*** intro5 scene");
  
      // Check for spacebar or any key here
      var spaceDown = this.input.keyboard.addKey("SPACE");
  
      // On spacebar event, call the world scene
      spaceDown.on(
        "down",
        function () {
          console.log("Jump to abandonbuilding scene");
  
        let playerPos = {};
        playerPos.x = 338;
        playerPos.y = 196;
        this.scene.start("abandonbuilding", { playerPos: playerPos });
        },
        this
      );
  
      this.intro = this.add.image(0, 0, 'intro5IMG').setOrigin(0, 0).setScale(1);

      //character display
      this.anims.create({
        key:'mapAnim',
        frames:this.anims.generateFrameNumbers('mapIMG',
        { start:0, end:1 }),
        frameRate:4,
        repeat:-1
    });

    this.anims.create({
      key:'compassAnim',
      frames:this.anims.generateFrameNumbers('compassIMG',
      { start:0, end:1 }),
      frameRate:4,
      repeat:-1
  });

  this.anims.create({
    key:'longbowAnim',
    frames:this.anims.generateFrameNumbers('longbowIMG',
    { start:0, end:1 }),
    frameRate:4,
    repeat:-1
});

       this.map = this.physics.add.sprite(180, 600, 'mapIMG').play('mapAnim').setScale(4);
       this.compass = this.physics.add.sprite(380, 600, 'compassIMG').play('compassAnim').setScale(4);
       this.longbow = this.physics.add.sprite(580, 600, 'longbowIMG').play('longbowAnim').setScale(2);


      // Add any text in the main page
      // this.add.text(10, 10, "Press spacebar to continue", {
      //   font: "30px Courier",
      //   fill: "#FFFFFF",
      // });
  
      // Create all the game animations here
    }
  }
  