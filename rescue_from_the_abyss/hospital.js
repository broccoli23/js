class hospital extends Phaser.Scene {
    constructor() {
      super({
        key: "hospital",
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
      this.load.tilemapTiledJSON("hospital", "assets/hospital.tmj");
  
      
      this.load.image("townIMG", "assets/town.png");
      this.load.image("interiorIMG", "assets/interior.png");
      this.load.image("hospitalIMG", "assets/hospital.png");
      this.load.image("tint", "assets/tint.png");
      this.load.spritesheet('kyzo', 'assets/Kyzo.png',{ frameWidth:64, frameHeight:64 });
      this.load.spritesheet('enemy', 'assets/gravewalker.png',{ frameWidth:64, frameHeight:64 });
      this.load.spritesheet('leon', 'assets/Leon.png',{ frameWidth:64, frameHeight:64 });
    

    }

      create() {
        console.log("*** hospital scene");
    
        // Create the map from main
        let map = this.make.tilemap({
          key: "hospital",
        });

        // Load the game tiles
        // 1st parameter is name in Tiled,
        // 2nd parameter is key in Preload
        let townTiles = map.addTilesetImage("town", "townIMG");
        let interiorTiles = map.addTilesetImage("interior", "interiorIMG");
        let hospitalTiles = map.addTilesetImage("hospital", "hospitalIMG");

    
        let tilesArray = [townTiles, interiorTiles, hospitalTiles];
        // Load in layers by layers
        this.baseLayer = map.createLayer(
          "baseLayer",
          [townTiles, interiorTiles, hospitalTiles],
          0,
          0
        );

        this.floorLayer = map.createLayer(
          "floorLayer",
          [townTiles, interiorTiles, hospitalTiles],
          0,
          0
        );
        
        this.furnitureLayer2 = map.createLayer(
          "furnitureLayer2",
          [townTiles, interiorTiles, hospitalTiles],
          0,
          0
        )

        this.furnitureLayer = map.createLayer(
          "furnitureLayer",
          [townTiles, interiorTiles, hospitalTiles],
          0,
          0
        )
    
    
        this.objectLayer = map.createLayer(
          "objectLayer",
          [townTiles, interiorTiles, hospitalTiles],
          0,
          0
        );

        // kyzo is the alias in preload 
        let start  = map.findObject("objectLayer",(obj) => obj.name === "start");
        this.player = this.physics.add.sprite(start.x, start.y, 'kyzo');
        this.player.body.setSize(this.player.width * 0.5, this.player.height * 0.7)

        this.wallLayer = map.createLayer(
          "wallLayer",
          [townTiles, interiorTiles, hospitalTiles],
          0,
          0
        )

        this.wallLayer2 = map.createLayer(
          "wallLayer2",
          [townTiles, interiorTiles, hospitalTiles],
          0,
          0
        )

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
        key:'enemy-up',
        frames:this.anims.generateFrameNumbers('enemy',
        { start:105, end:112}),
        frameRate:5 ,
        repeat:-1
    });
    
    this.anims.create({
        key:'enemy-left',
        frames:this.anims.generateFrameNumbers('enemy',
        { start:118, end:125}),
        frameRate:5 ,
        repeat:-1
    });
    
      this.anims.create({
        key:'enemy-down',
        frames:this.anims.generateFrameNumbers('enemy',
        { start:131, end:138}),
        frameRate:5 ,
        repeat:-1
    });
    
    this.anims.create({
      key:'enemy-right',
      frames:this.anims.generateFrameNumbers('enemy',
      { start:144, end:151}),
      frameRate:5 ,
      repeat:-1
    });
  
      this.enemy1 = this.physics.add.sprite(1067, 227, 'enemy').play("enemy-up");
      this.enemy2 = this.physics.add.sprite(1203, 220, 'enemy').play("enemy-left");
      this.enemy3 = this.physics.add.sprite(1147, 317, 'enemy').play("enemy-left");
      this.enemy4 = this.physics.add.sprite(1063, 484, 'enemy').play("enemy-up");
      this.enemy5 = this.physics.add.sprite(893, 374, 'enemy').play("enemy-right");
      this.enemy6 = this.physics.add.sprite(713, 584, 'enemy').play("enemy-right");
      this.enemy7 = this.physics.add.sprite(694, 254, 'enemy').play("enemy-down");
      this.enemy8 = this.physics.add.sprite(557, 387, 'enemy').play("enemy-right");
      this.enemy8 = this.physics.add.sprite(390, 330, 'enemy').play("enemy-down");
      this.enemy9 = this.physics.add.sprite(557, 217, 'enemy').play("enemy-left");
      this.enemy10 = this.physics.add.sprite(257, 527, 'enemy').play("enemy-up");
      this.enemy11 = this.physics.add.sprite(120, 367, 'enemy').play("enemy-right");
      this.enemy12 = this.physics.add.sprite(87, 214, 'enemy').play("enemy-left");
      this.enemy13 = this.physics.add.sprite(220, 160, 'enemy').play("enemy-up");

      // Call globalFunction globalHitEnemy on overlap
  // this.physics.add.overlap(this.player, this.enemy1, globalHitEnemy, null, this);
  // this.physics.add.overlap(this.player, this.enemy2, globalHitEnemy, null, this);
  // this.physics.add.overlap(this.player, this.enemy3, globalHitEnemy, null, this);
  // this.physics.add.overlap(this.player, this.enemy4, globalHitEnemy, null, this);
  // this.physics.add.overlap(this.player, this.enemy5, globalHitEnemy, null, this);
  // this.physics.add.overlap(this.player, this.enemy6, globalHitEnemy, null, this);
  // this.physics.add.overlap(this.player, this.enemy7, globalHitEnemy, null, this);
  // this.physics.add.overlap(this.player, this.enemy8, globalHitEnemy, null, this);
  // this.physics.add.overlap(this.player, this.enemy9, globalHitEnemy, null, this);
  // this.physics.add.overlap(this.player, this.enemy10, globalHitEnemy, null, this);
  // this.physics.add.overlap(this.player, this.enemy11, globalHitEnemy, null, this);
  // this.physics.add.overlap(this.player, this.enemy12, globalHitEnemy, null, this);
  // this.physics.add.overlap(this.player, this.enemy13, globalHitEnemy, null, this);


  //leon
  this.anims.create({
    key:'leon-down',
    frames:this.anims.generateFrameNumbers('leon',
    { start:131, end:138}),
    frameRate:5 ,
    repeat:-1
   });

   this.leon = this.physics.add.sprite(280, 100, 'leon').play("leon-down");

  //  this.physics.add.overlap(this.player, this.leon, globalCollectLeon, null, this);

  //shooting
//   this.bullet = this.physics.add.sprite(
//     this.player.x,
//     this.player.y,
//     "bullet"
//   )
//   this.bullet.setVisible(false);

//   let attackLeft = this.input.keyboard.addKey("z");
//  let attackRight = this.input.keyboard.addKey("x");

// attackLeft.on(
//   "down",
//   function () {
//     this.globalAttackLeft();
//   },
//   this
// );

// attackRight.on(
//   "down",
//   function () {
//     this.globalAttackRight();
//   },
//   this
// );



      // set collision
      this.wallLayer.setCollisionByExclusion(-1, true);
      this.physics.add.collider(this.wallLayer, this.player);
      this.furnitureLayer.setCollisionByExclusion(-1, true);
      this.physics.add.collider(this.furnitureLayer, this.player);
      this.furnitureLayer2.setCollisionByExclusion(-1, true);
      this.physics.add.collider(this.furnitureLayer2, this.player);
      this.wallLayer2.setCollisionByExclusion(-1, true);
      this.physics.add.collider(this.wallLayer2, this.player);

     // create the arrow keys
     this.cursors = this.input.keyboard.createCursorKeys();

     // camera follow player
    this.cameras.main.startFollow(this.player);

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
        this.player.x > 1041 &&
        this.player.x < 1105 &&
        this.player.y > 46 &&
        this.player.y < 110
      ) 
      {
        console.log('player touch door')
        this.world();
      }
      }/////////////////// end of update //////////////////////////////
      world(player, tile) {
        console.log("world function");
        let playerPos = {};
        playerPos.x = 300;
        playerPos.y = 1100;
        this.scene.start("world", { playerPos: playerPos });
      }
    }
       