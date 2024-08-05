class intro11 extends Phaser.Scene {
    constructor() {
      super("intro11");
  
      // Put global variable here
    }
  
    init(data) {
      this.playerPos = data.playerPos;
      this.inventory = data.inventory;
    }
  
    preload() {
      this.load.image("intro11IMG", "assets/intro11.jpg");
      this.load.spritesheet('sheldon', 'assets/Sheldon.png',{ frameWidth:64, frameHeight:64 });
      this.load.spritesheet('taurak', 'assets/taurak.png',{ frameWidth:64, frameHeight:64 });
      this.load.spritesheet('oozeIMG', 'assets/ooze.png',{ frameWidth:32, frameHeight:32 });
    }
  
    create() {
      console.log("*** intro11 scene");
  
      // Check for spacebar or any key here
      var spaceDown = this.input.keyboard.addKey("SPACE");
  
           // On spacebar event, call the world scene
           spaceDown.on(
            "down",
            function () {
              console.log("Jump to museum scene");
            this.scene.start("museum");
            },
            this
          );
  
      this.intro = this.add.image(0, 0, 'intro11IMG').setOrigin(0, 0).setScale(1);

      this.anims.create({
        key:'sheldon-down',
        frames:this.anims.generateFrameNumbers('sheldon',
        { start:131, end:138}),
        frameRate:5 ,
        repeat:-1
       });

       this.player = this.physics.add.sprite(600, 600, 'sheldon').play("sheldon-down").setScale(2.5);

        
    this.anims.create({
      key:'taurak-right',
      frames:this.anims.generateFrameNumbers('taurak',
      { start:144, end:151}),
      frameRate:5 ,
      repeat:-1
    });
       
       this.taurak1 = this.physics.add.sprite(200, 600, 'taurak').play("taurak-right").setScale(2.5);
       ; 

       this.anims.create({
        key:'oozeAnim',
        frames:this.anims.generateFrameNumbers('oozeIMG',
        { start:0, end:6 }),
        frameRate:3,
        repeat:-1
      });

       this.ooze1 = this.physics.add.sprite(this.taurak1.x, this.taurak1.y, "oozeIMG").play("oozeAnim");

       this.timer= this.time.addEvent({
         delay: 2000,
         callback: this.shootOoze,
         callbackScope: this,
         loop: true,
       });
       
       this.timer2 = this.time.addEvent({
         delay: 2000,
         callback: this.resetOoze,
         callbackScope: this,
         loop: true,
       });


    }

    update() {
      this.angle1= Phaser.Math.Angle.BetweenPoints(this.taurak1, this.player);
    }

    shootOoze (){
      console.log("shoot ooze", this.angle1)

      this.physics.velocityFromRotation(this.angle1, 100, this.ooze1.body.velocity);
    }

    resetOoze() {
      console.log("Reset ooze location")
      this.ooze1.x = this.taurak1.x
      this.ooze1.y = this.taurak1.y
    }

    museum(player, tile) {
      console.log("museum function");
      this.scene.start("museum", {
        player: player,
        inventory: this.inventory,
      });
    }
  }
  
  