class intro7 extends Phaser.Scene {
    constructor() {
      super("intro7");
  
      // Put global variable here
    }
  
    init(data) {
      this.playerPos = data.playerPos;
      this.inventory = data.inventory;
    }
  
    preload() {
      this.load.image("intro7IMG", "assets/intro7.jpg");
      this.load.spritesheet('aidkitIMG', 'assets/aidkit.png',{ frameWidth:32, frameHeight:32 });
      this.load.spritesheet('torchIMG', 'assets/torch.png',{ frameWidth:32, frameHeight:32 });
      this.load.spritesheet('survivalknifeIMG', 'assets/survivalknife.png',{ frameWidth:32, frameHeight:32 });
      this.load.spritesheet('energybarIMG', 'assets/energybar.png',{ frameWidth:32, frameHeight:32 });
    }
  
    create() {
      console.log("*** intro7 scene");
  
      // Check for spacebar or any key here
      var spaceDown = this.input.keyboard.addKey("SPACE");
  
      // On spacebar event, call the world scene
      spaceDown.on(
        "down",
        function () {
          console.log("Jump to store scene");
        this.scene.start("store");
        },
        this
      );
  
      this.intro = this.add.image(0, 0, 'intro7IMG').setOrigin(0, 0).setScale(1);

      //item display

      this.anims.create({
        key:'aidkitAnim',
        frames:this.anims.generateFrameNumbers('aidkitIMG',
        { start:0, end:1 }),
        frameRate:4,
        repeat:-1
    });

    this.anims.create({
      key:'torchAnim',
      frames:this.anims.generateFrameNumbers('torchIMG',
      { start:0, end:1 }),
      frameRate:4,
      repeat:-1
  });

  this.anims.create({
    key:'survivalknifeAnim',
    frames:this.anims.generateFrameNumbers('survivalknifeIMG',
    { start:0, end:1 }),
    frameRate:4,
    repeat:-1
});

this.anims.create({
  key:'energybarAnim',
  frames:this.anims.generateFrameNumbers('energybarIMG',
  { start:0, end:1 }),
  frameRate:4,
  repeat:-1
});

      this.aidkit = this.physics.add.sprite(180, 600, 'aidkitIMG').play('aidkitAnim').setScale(4);
      this.torch = this.physics.add.sprite(380, 600, 'torchIMG').play('torchAnim').setScale(4);
      this.survivalknife = this.physics.add.sprite(580, 600, 'survivalknifeIMG').play('survivalknifeAnim').setScale(4);
      this.energybar = this.physics.add.sprite(780, 600, 'energybarIMG').play('energybarAnim').setScale(4);
    }

    store(player, tile) {
      console.log("store function");
      this.scene.start("store", {
        player: player,
        inventory: this.inventory,
      });
    }
  }
  
  