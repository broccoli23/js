class intro3 extends Phaser.Scene {
    constructor() {
      super("intro3");
  
      // Put global variable here
    }
  
    init(data) {
      this.playerPos = data.playerPos;
      this.inventory = data.inventory;
    }
  
    preload() {
      this.load.image("intro3IMG", "assets/intro3.jpg");
      this.load.spritesheet('kyzo', 'assets/Kyzo.png',{ frameWidth:64, frameHeight:64 });
      this.load.spritesheet('leon', 'assets/Leon.png',{ frameWidth:64, frameHeight:64 });
      this.load.spritesheet('sheldon', 'assets/Sheldon.png',{ frameWidth:64, frameHeight:64 });
    }
  
    create() {
      console.log("*** intro3 scene");
  
      // Check for spacebar or any key here
      var spaceDown = this.input.keyboard.addKey("SPACE");
  
      // On spacebar event, call the world scene
      spaceDown.on(
        "down",
        function () {
          console.log("Jump to intro4 scene");
  
        let playerPos = {};
        playerPos.x = 338;
        playerPos.y = 196;
        this.scene.start("intro4", { playerPos: playerPos });
        },
        this
      );
  
      this.intro = this.add.image(0, 0, 'intro3IMG').setOrigin(0, 0).setScale(1);

      //character display

      this.anims.create({
        key:'kyzo-down',
        frames:this.anims.generateFrameNumbers('kyzo',
        { start:131, end:138}),
        frameRate:5 ,
        repeat:-1
       });

       this.anims.create({
        key:'leon-down',
        frames:this.anims.generateFrameNumbers('leon',
        { start:131, end:138}),
        frameRate:5 ,
        repeat:-1
       });

       this.anims.create({
        key:'sheldon-down',
        frames:this.anims.generateFrameNumbers('sheldon',
        { start:131, end:138}),
        frameRate:5 ,
        repeat:-1
       });

      this.player = this.physics.add.sprite(920, 130, 'kyzo').play("kyzo-down").setScale(2.5);
      this.player = this.physics.add.sprite(720, 130, 'leon').play("leon-down").setScale(2.5);
      this.player = this.physics.add.sprite(1120, 130, 'sheldon').play("sheldon-down").setScale(2.5);
    }
  }
  