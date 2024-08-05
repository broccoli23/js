class intro9 extends Phaser.Scene {
    constructor() {
      super("intro9");
  
      // Put global variable here
    }
  
    init(data) {
      this.playerPos = data.playerPos;
      this.inventory = data.inventory;
    }
  
    preload() {
      this.load.image("intro9IMG", "assets/intro9.jpg");
      this.load.spritesheet('leon', 'assets/Leon.png',{ frameWidth:64, frameHeight:64 });
      
    }
  
    create() {
      console.log("*** intro9 scene");
  
      // Check for spacebar or any key here
      var spaceDown = this.input.keyboard.addKey("SPACE");
  
      // On spacebar event, call the world scene
      spaceDown.on(
        "down",
        function () {
          console.log("Jump to gamecontrolshoot scene");
  
        let playerPos = {};
        playerPos.x = 338;
        playerPos.y = 196;
        this.scene.start("gamecontrolshoot", { playerPos: playerPos });
        },
        this
      );
  
      this.intro = this.add.image(0, 0, 'intro9IMG').setOrigin(0, 0).setScale(1);


      this.anims.create({
        key:'leon-down',
        frames:this.anims.generateFrameNumbers('leon',
        { start:131, end:138}),
        frameRate:5 ,
        repeat:-1
       });

      this.player = this.physics.add.sprite(400, 600, 'leon').play("leon-down").setScale(2.5);

    }
  }
  
  