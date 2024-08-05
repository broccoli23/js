class museum extends Phaser.Scene {
    constructor() {
      super({
        key: "museum",
      });
  
      // Put global variable here
    }
  
    // incoming data from scene below
    init(data) {
      this.playerPos = data.playerPos;
      this.inventory = data.inventory;
    }
  
    preload() {
  
      // this is the exported JSON map file
      this.load.tilemapTiledJSON("museum", "assets/museum.tmj");
  
      this.load.image("townIMG", "assets/town.png");
      this.load.image("interiorIMG", "assets/interior.png");
      this.load.image("tint", "assets/tint.png");
      this.load.image("hospitalIMG", "assets/hospital.png");
      this.load.image("museumIMG", "assets/museum.png");
      this.load.spritesheet('kyzo', 'assets/Kyzo.png',{ frameWidth:64, frameHeight:64 });
      this.load.spritesheet('sheldonIMG', 'assets/Sheldon.png',{ frameWidth:64, frameHeight:64 });
      this.load.spritesheet('taurak', 'assets/taurak.png',{ frameWidth:64, frameHeight:64 });
      this.load.image("arrowleftIMG", "assets/arrowleft.png");
      this.load.image("arrowupIMG", "assets/arrowup.png");
      this.load.image("arrowdownIMG", "assets/arrowdown.png");
      this.load.image("arrowrightIMG", "assets/arrowright.png");
      this.load.spritesheet('oozeIMG', 'assets/ooze.png',{ frameWidth:32, frameHeight:32 });

    }

      create() {
        console.log("*** museum scene");
    
        // Create the map from main
        let map = this.make.tilemap({
          key: "museum",
        });
    
        // Load the game tiles
        // 1st parameter is name in Tiled,
        // 2nd parameter is key in Preload
        let townTiles = map.addTilesetImage("town", "townIMG");
        let interiorTiles = map.addTilesetImage("interior", "interiorIMG");
        let hospitalTiles = map.addTilesetImage("hospital", "hospitalIMG");
        let museumTiles = map.addTilesetImage("museum", "museumIMG");

    
        let tilesArray = [townTiles, interiorTiles, hospitalTiles, museumTiles];
        // Load in layers by layers
        this.baseLayer = map.createLayer(
          "baseLayer",
          [townTiles, interiorTiles, hospitalTiles, museumTiles],
          0,
          0
        );

        this.floorLayer = map.createLayer(
          "floorLayer",
          [townTiles, interiorTiles, hospitalTiles, museumTiles],
          0,
          0
        );
    
        this.wallLayer = map.createLayer(
          "wallLayer",
          [townTiles, interiorTiles, hospitalTiles, museumTiles],
          0,
          0
        )
        
        this.furnitureLayer = map.createLayer(
          "furnitureLayer",
          [townTiles, interiorTiles, hospitalTiles, museumTiles],
          0,
          0
        )

        this.furnitureLayer2 = map.createLayer(
          "furnitureLayer2",
          [townTiles, interiorTiles, hospitalTiles, museumTiles],
          0,
          0
        )

        this.furnitureLayer3 = map.createLayer(
          "furnitureLayer3",
          [townTiles, interiorTiles, hospitalTiles, museumTiles],
          0,
          0
        )

        this.objectLayer = map.createLayer(
          "objectLayer",
            [townTiles, interiorTiles, hospitalTiles, museumTiles],
            0,
            0
          )

        // kyzo is the alias in preload 
       let start  = map.findObject("objectLayer",(obj) => obj.name === "start");
       this.player = this.physics.add.sprite(start.x, start.y, 'kyzo');
       this.player.body.setSize(this.player.width * 0.5, this.player.height * 0.7)

       // debug player
       window.player = this.player


      this.anims.create({
      key:'kyzo-up',
      frames:this.anims.generateFrameNumbers('kyzo',
      { start:105, end:112}),
      frameRate:5 ,
      repeat:-1
     });

      this.anims.create({
      key:'kyzo-left',
      frames:this.anims.generateFrameNumbers('kyzo',
      { start:118, end:125}),
      frameRate:5 ,
      repeat:-1
     });

      this.anims.create({
      key:'kyzo-down',
      frames:this.anims.generateFrameNumbers('kyzo',
      { start:131, end:138}),
      frameRate:5 ,
      repeat:-1
     });

      this.anims.create({
      key:'kyzo-right',
      frames:this.anims.generateFrameNumbers('kyzo',
      { start:144, end:151}),
      frameRate:5 ,
      repeat:-1
      });

      //enemy
      this.anims.create({
        key:'taurak-up',
        frames:this.anims.generateFrameNumbers('taurak',
        { start:105, end:112}),
        frameRate:5 ,
        repeat:-1
    });
    
    this.anims.create({
        key:'taurak-left',
        frames:this.anims.generateFrameNumbers('taurak',
        { start:118, end:125}),
        frameRate:5 ,
        repeat:-1
    });
    
      this.anims.create({
        key:'taurak-down',
        frames:this.anims.generateFrameNumbers('taurak',
        { start:131, end:138}),
        frameRate:5 ,
        repeat:-1
    });
    
    this.anims.create({
      key:'taurak-right',
      frames:this.anims.generateFrameNumbers('taurak',
      { start:144, end:151}),
      frameRate:5 ,
      repeat:-1
    });

    this.taurak1 = this.physics.add.sprite(1158, 315, 'taurak').play("taurak-left"); 
    this.taurak1.body.setSize(this.taurak1.width * 0.5, this.taurak1.height * 0.9)
    this.taurak2 = this.physics.add.sprite(309, 305, 'taurak').play("taurak-left"); 
    this.taurak2.body.setSize(this.taurak2.width * 0.5, this.taurak2.height * 0.9)
    this.taurak3 = this.physics.add.sprite(900, 974, 'taurak').play("taurak-left"); 
    this.taurak3.body.setSize(this.taurak3.width * 0.5, this.taurak3.height * 0.9)

    // Call globalFunction globalHitEnemy on overlap  
  this.physics.add.overlap(this.player, this.taurak1, globalHitEnemy, null, this);
  this.physics.add.overlap(this.player, this.taurak2, globalHitEnemy, null, this);
  this.physics.add.overlap(this.player, this.taurak3, globalHitEnemy, null, this);

       //sheldon
       this.anims.create({
        key:'sheldon-down',
        frames:this.anims.generateFrameNumbers('sheldonIMG',
        { start:131, end:138}), 
        frameRate:5 ,
        repeat:-1
        });
 
        this.sheldon = this.physics.add.sprite(282, 905, 'sheldonIMG').play("sheldon-down");
 
        this.physics.add.overlap(this.player, this.sheldon, globalCollectSheldon, null, this);
 

this.tint = this.add.image(0, 0, 'tintIMG').setOrigin(0, 0).setScale(1);


//enemy shoots player
this.anims.create({
  key:'oozeAnim',
  frames:this.anims.generateFrameNumbers('oozeIMG',
  { start:0, end:6 }),
  frameRate:3,
  repeat:-1
});

this.ooze1 = this.physics.add.sprite(this.taurak1.x, this.taurak1.y, "oozeIMG").play("oozeAnim");
this.ooze2 = this.physics.add.sprite(this.taurak2.x, this.taurak2.y, "oozeIMG").play("oozeAnim");
this.ooze3 = this.physics.add.sprite(this.taurak3.x, this.taurak3.y, "oozeIMG").play("oozeAnim");

this.timer= this.time.addEvent({
  delay: 2000,
  callback: this.shootOoze,
  callbackScope: this,
  loop: true,
});

this.timer2 = this.time.addEvent({
  delay: 5000,
  callback: this.resetOoze,
  callbackScope: this,
  loop: true,
});

this.physics.add.overlap(this.player,[this.ooze1,this.ooze2,this.ooze3], globalHitOoze, null, this);

      // set collision
      this.wallLayer.setCollisionByExclusion(-1, true);
      this.physics.add.collider(this.wallLayer, this.player);
      this.furnitureLayer.setCollisionByExclusion(-1, true);
      this.physics.add.collider(this.furnitureLayer, this.player);
      this.furnitureLayer2.setCollisionByExclusion(-1, true);
      this.physics.add.collider(this.furnitureLayer2, this.player);
      this.furnitureLayer3.setCollisionByExclusion(-1, true);
      this.physics.add.collider(this.furnitureLayer3, this.player);
    
     // create the arrow keys
     this.cursors = this.input.keyboard.createCursorKeys();

     // camera follow player
    this.cameras.main.startFollow(this.player);

    this.physics.world.bounds.width = this.baseLayer.width;
    this.physics.world.bounds.height = this.baseLayer.height;
    
    this.player.setCollideWorldBounds(true)
      }

      update() {

        this.angle1= Phaser.Math.Angle.BetweenPoints(this.taurak1, this.player);
        this.angle2= Phaser.Math.Angle.BetweenPoints(this.taurak2, this.player);
        this.angle3= Phaser.Math.Angle.BetweenPoints(this.taurak3, this.player);


        let speed = 200;
    
    
        if (this.cursors.left.isDown) {
          this.player.body.setVelocityX(-speed);
          this.player.body.setVelocityY(0);
          this.player.anims.play("kyzo-left", true); 
      } else if (this.cursors.right.isDown) {
          this.player.body.setVelocityX(speed);
          this.player.body.setVelocityY(0);
          this.player.anims.play("kyzo-right", true);
      } else if (this.cursors.up.isDown) {
          this.player.body.setVelocityY(-speed);
          this.player.body.setVelocityX(0);
          this.player.anims.play("kyzo-up", true);
      } else if (this.cursors.down.isDown) {
          this.player.body.setVelocityY(speed);
          this.player.body.setVelocityX(0);
          this.player.anims.play("kyzo-down", true);
      } else {
          this.player.anims.stop();
          this.player.body.setVelocity(0, 0);
      }

    if (
        this.player.x > 990 &&
        this.player.x < 1054 &&
        this.player.y > 43 &&
        this.player.y < 107 &&
        window.map > 0 &&
        window.longbow > 0 &&
        window.compass > 0 &&
        window.aidkit > 0 &&
        window.survivalknife > 0 &&
        window.torch > 0 &&
        window.energybar > 0 &&
        window.leon > 0 &&
        window.sheldon > 0
      ) 

      {
        console.log('player touch door')
        this.intro12();
      }
      }/////////////////// end of update //////////////////////////////
      intro12(player, tile) {
        console.log("intro12 function");
        this.scene.start("intro12");
      }
 
      shootOoze (){
        console.log("shoot ooze", this.angle1)

        this.physics.velocityFromRotation(this.angle1, 300, this.ooze1.body.velocity);
        this.physics.velocityFromRotation(this.angle2, 300, this.ooze2.body.velocity);
        this.physics.velocityFromRotation(this.angle3, 300, this.ooze3.body.velocity);
        
 
 
      }

      resetOoze() {
        console.log("Reset ooze location")
        this.ooze1.x = this.taurak1.x
        this.ooze1.y = this.taurak1.y
        this.ooze2.x = this.taurak2.x
        this.ooze2.y = this.taurak2.y
        this.ooze3.x = this.taurak3.x
        this.ooze3.y = this.taurak3.y
      }
    }
       