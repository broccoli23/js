class abandonbuilding extends Phaser.Scene {
    constructor() {
      super({
        key: "abandonbuilding",
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
      this.load.tilemapTiledJSON("abandonbuilding", "assets/abandonbuilding.tmj");
  
      
      this.load.image("townIMG", "assets/town.png");
      this.load.image("classroomIMG", "assets/classroom.png");
      this.load.image("genericIMG", "assets/generic.png");
      this.load.image("interiorIMG", "assets/interior.png");
      this.load.image("tintIMG", "assets/tint.png");
      this.load.image("basementIMG", "assets/basement.png");
      this.load.spritesheet('kyzo', 'assets/Kyzo.png',{ frameWidth:64, frameHeight:64 });
      this.load.spritesheet('mapIMG', 'assets/map.png',{ frameWidth:32, frameHeight:32 });
      this.load.spritesheet('compassIMG', 'assets/compass.png',{ frameWidth:32, frameHeight:32 });
      this.load.spritesheet('longbowIMG', 'assets/longbow.png',{ frameWidth:64, frameHeight:64 });
    }

      create() {
        console.log("*** abandonbuilding scene");
    
        // Create the map from main
        let map = this.make.tilemap({
          key: "abandonbuilding",
        });
    
        // Load the game tiles
        // 1st parameter is name in Tiled,
        // 2nd parameter is key in Preload
        let townTiles = map.addTilesetImage("town", "townIMG");
        let classroomTiles = map.addTilesetImage("classroom", "classroomIMG");
        let genericTiles = map.addTilesetImage("generic", "genericIMG");
        let interiorTiles = map.addTilesetImage("interior", "interiorIMG");
        let basementTiles = map.addTilesetImage("basement", "basementIMG");

    
        let tilesArray = [townTiles, classroomTiles, genericTiles, interiorTiles, basementTiles];
        // Load in layers by layers
        this.baseLayer = map.createLayer(
          "baseLayer",
          [townTiles, classroomTiles, genericTiles, interiorTiles, basementTiles],
          0,
          0
        );
    
        this.wallLayer = map.createLayer(
          "wallLayer",
          [townTiles, classroomTiles, genericTiles, interiorTiles, basementTiles],
          0,
          0
        )
        this.carpetLayer = map.createLayer(
          "carpetLayer",
          [townTiles, classroomTiles, genericTiles, interiorTiles, basementTiles],
          0,
          0
        )

        this.furnitureLayer = map.createLayer(
          "furnitureLayer",
          [townTiles, classroomTiles, genericTiles, interiorTiles, basementTiles],
          0,
          0
        )
    
    
        this.objectLayer = map.createLayer(
          "objectLayer",
          [townTiles, classroomTiles, genericTiles, interiorTiles, basementTiles],
          0,
          0
        );

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

        // kyzo is the alias in preload 
        //  let start  = map.findObject("objectLayer",(obj) => obj.name === "start");
       this.player = this.physics.add.sprite(this.playerPos.x, this.playerPos.y, 'kyzo');
       this.player.body.setSize(this.player.width * 0.5, this.player.height * 0.7)

       this.map = this.physics.add.sprite(100, 250, 'mapIMG').play('mapAnim')
       this.compass = this.physics.add.sprite(365, 459, 'compassIMG').play('compassAnim')
       this.longbow = this.physics.add.sprite(498, 190, 'longbowIMG').play('longbowAnim')

//        const fx1 = this.map.postFX.addGlow(0xffffff, 4, 0, false, 0.5, 32);
    
// this.tweens.add({
//       targets: fx1,
//       outerStrength: 15,
//       yoyo: true,
//       loop: -1,
//       ease: "sine.inout",
//     });

//     const fx2 = this.compass.postFX.addGlow(0xffffff, 4, 0, false, 0.5, 32);
    
// this.tweens.add({
//       targets: fx2,
//       outerStrength: 15,
//       yoyo: true,
//       loop: -1,
//       ease: "sine.inout",
//     });

//     const fx3 = this.longbow.postFX.addGlow(0xffffff, 4, 0, false, 0.5, 32);
    
// this.tweens.add({
//       targets: fx3,
//       outerStrength: 15,
//       yoyo: true,
//       loop: -1,
//       ease: "sine.inout",
//     });

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

      //overlap
      this.physics.add.overlap(this.player, this.map, globalCollectMap, null, this);
      this.physics.add.overlap(this.player, this.longbow, globalCollectLongbow, null, this);
      this.physics.add.overlap(this.player, this.compass, globalCollectCompass, null, this);

      // set collision
      this.carpetLayer.setCollisionByProperty({ stairs: true });
      this.furnitureLayer.setCollisionByProperty({ furniture: true });
      this.objectLayer.setCollisionByProperty({ wall: true });
      this.objectLayer.setCollisionByProperty({ furniture: true });
      this.wallLayer.setCollisionByExclusion(-1, true);
      this.physics.add.collider(this.furnitureLayer, this.player)
      this.physics.add.collider(this.carpetLayer, this.player)
      this.physics.add.collider(this.objectLayer, this.player)
      this.physics.add.collider(this.wallLayer, this.player)

     // create the arrow keys
     this.cursors = this.input.keyboard.createCursorKeys();

     // camera follow player
    this.cameras.main.startFollow(this.player);

       // Call to update inventory items
   this.time.addEvent({
    delay: 100,
    callback: updateInventory,
    callbackScope: this,
    loop: false,
  });
  
  // start another scene in parallel
  this.scene.launch("showInventory");

  this.tint = this.add.image(0, 0, 'tintIMG').setOrigin(0, 0).setScale(1);

      }

      update() {
        let speed = 200;
    
    if (this.cursors.left.isDown) {
        this.player.body.setVelocityX(-speed);
        this.player.anims.play("kyzo-left", true); // walk left
    } else if (this.cursors.right.isDown) {
        this.player.body.setVelocityX(speed);
        this.player.anims.play("kyzo-right", true);
    } else if (this.cursors.up.isDown) {
        this.player.body.setVelocityY(-speed);
        this.player.anims.play("kyzo-up", true);
    } else if (this.cursors.down.isDown) {
        this.player.body.setVelocityY(speed);
        this.player.anims.play("kyzo-down", true);
    } else {
        this.player.anims.stop();
        this.player.body.setVelocity(0, 0);
    }

    if (
        this.player.x > 371 &&
        this.player.x < 435 &&
        this.player.y > 32 &&
        this.player.y < 96 &&
        window.map > 0 &&
        window.longbow > 0 &&
        window.compass > 0
      ) 
      {
        console.log('player touch door')
        this.world();
      }
      }/////////////////// end of update //////////////////////////////

      world(player, tile) {
        console.log("world function");
        let playerPos = {};
        playerPos.x = 979;
        playerPos.y =603;
        this.scene.start("world", { playerPos: playerPos });
      }
    }
       