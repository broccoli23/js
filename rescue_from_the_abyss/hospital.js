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
      this.load.spritesheet('leonIMG', 'assets/Leon.png',{ frameWidth:64, frameHeight:64 });
      this.load.image("arrowleftIMG", "assets/arrowleft.png");
      this.load.image("arrowupIMG", "assets/arrowup.png");
      this.load.image("arrowdownIMG", "assets/arrowdown.png");
      this.load.image("arrowrightIMG", "assets/arrowright.png");

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
  
      this.enemy1 = this.physics.add.sprite(1067, 250, 'enemy').play("enemy-up"); 
      this.enemy1.body.setSize(this.enemy1.width * 0.5, this.enemy1.height * 0.9)
      this.enemy2 = this.physics.add.sprite(1147, 317, 'enemy').play("enemy-left");
      this.enemy2.body.setSize(this.enemy2.width * 0.5, this.enemy2.height * 0.9)
      this.enemy3 = this.physics.add.sprite(1063, 484, 'enemy').play("enemy-up");
      this.enemy3.body.setSize(this.enemy3.width * 0.5, this.enemy3.height * 0.9)
      this.enemy4 = this.physics.add.sprite(893, 374, 'enemy').play("enemy-right");
      this.enemy4.body.setSize(this.enemy4.width * 0.5, this.enemy4.height * 0.9)
      this.enemy5 = this.physics.add.sprite(713, 584, 'enemy').play("enemy-right");
      this.enemy5.body.setSize(this.enemy5.width * 0.5, this.enemy5.height * 0.9)
      this.enemy6 = this.physics.add.sprite(694, 254, 'enemy').play("enemy-down");
      this.enemy6.body.setSize(this.enemy6.width * 0.5, this.enemy6.height * 0.9)
      this.enemy7 = this.physics.add.sprite(557, 387, 'enemy').play("enemy-right");
      this.enemy7.body.setSize(this.enemy7.width * 0.5, this.enemy7.height * 0.9)
      this.enemy8 = this.physics.add.sprite(390, 330, 'enemy').play("enemy-down");
      this.enemy8.body.setSize(this.enemy8.width * 0.5, this.enemy8.height * 0.9)
      this.enemy9 = this.physics.add.sprite(557, 217, 'enemy').play("enemy-left");
      this.enemy9.body.setSize(this.enemy9.width * 0.5, this.enemy9.height * 0.9)
      this.enemy10 = this.physics.add.sprite(257, 527, 'enemy').play("enemy-up");
      this.enemy10.body.setSize(this.enemy10.width * 0.5, this.enemy10.height * 0.9)
      this.enemy11 = this.physics.add.sprite(120, 367, 'enemy').play("enemy-right");
      this.enemy11.body.setSize(this.enemy11.width * 0.5, this.enemy11.height * 0.9)
      this.enemy12 = this.physics.add.sprite(87, 214, 'enemy').play("enemy-left");
      this.enemy12.body.setSize(this.enemy12.width * 0.5, this.enemy12.height * 0.9)
      this.enemy13 = this.physics.add.sprite(220, 160, 'enemy').play("enemy-up");
      this.enemy13.body.setSize(this.enemy13.width * 0.5, this.enemy13.height * 0.9)

      // Call globalFunction globalHitEnemy on overlap
  this.physics.add.overlap(this.player, this.enemy1, globalHitEnemy, null, this);
  this.physics.add.overlap(this.player, this.enemy2, globalHitEnemy, null, this);
  this.physics.add.overlap(this.player, this.enemy3, globalHitEnemy, null, this);
  this.physics.add.overlap(this.player, this.enemy4, globalHitEnemy, null, this);
  this.physics.add.overlap(this.player, this.enemy5, globalHitEnemy, null, this);
  this.physics.add.overlap(this.player, this.enemy6, globalHitEnemy, null, this);
  this.physics.add.overlap(this.player, this.enemy7, globalHitEnemy, null, this);
  this.physics.add.overlap(this.player, this.enemy8, globalHitEnemy, null, this);
  this.physics.add.overlap(this.player, this.enemy9, globalHitEnemy, null, this);
  this.physics.add.overlap(this.player, this.enemy10, globalHitEnemy, null, this);
  this.physics.add.overlap(this.player, this.enemy11, globalHitEnemy, null, this);
  this.physics.add.overlap(this.player, this.enemy12, globalHitEnemy, null, this);
  this.physics.add.overlap(this.player, this.enemy13, globalHitEnemy, null, this);



  //leon
  this.anims.create({
    key:'leon-down',
    frames:this.anims.generateFrameNumbers('leonIMG',
    { start:131, end:138}),
    frameRate:5 ,
    repeat:-1
   });

   this.leon = this.physics.add.sprite(280, 100, 'leonIMG').play("leon-down");

   this.physics.add.overlap(this.player, this.leon, globalCollectLeon, null, this);

//shooting
this.arrowleft = this.physics.add.sprite(this.player.x, this.player.y, "arrowleftIMG")
this.arrowleft.setScale(0.5)
this.arrowleft.setVisible(false);
this.arrowup = this.physics.add.sprite(this.player.x, this.player.y, "arrowupIMG")
this.arrowup.setScale(0.5)
this.arrowup.setVisible(false);
this.arrowright = this.physics.add.sprite(this.player.x, this.player.y, "arrowrightIMG")
this.arrowright.setScale(0.5)
this.arrowright.setVisible(false);
this.arrowdown = this.physics.add.sprite(this.player.x, this.player.y, "arrowdownIMG")
this.arrowdown.setScale(0.5)
this.arrowdown.setVisible(false);

let attackLeft = this.input.keyboard.addKey("a");
let attackRight = this.input.keyboard.addKey("d");
let attackUp = this.input.keyboard.addKey("w");
let attackDown = this.input.keyboard.addKey("s");


attackLeft.on(
  "down",
  function () {
    this.attackLeft();
  },
  this
);

attackRight.on(
  "down",
  function () {
    this.attackRight();
  },
  this
);

attackUp.on(
  "down",
  function () {
    this.attackUp();
  },
  this
);

attackDown.on(
  "down",
  function () {
    this.attackDown();
  },
  this
);

this.physics.add.overlap([this.arrowup,this.arrowleft,this.arrowdown,this.arrowright], [this.enemy1, this.enemy2, this.enemy3, this.enemy4, 
  this.enemy5, this.enemy6, this.enemy7, this.enemy8, this.enemy9, this.enemy10, 
  this.enemy11, this.enemy12, this.enemy13], globalShootEnemy, null, this);


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

    // this.tint = this.add.image(0, 0, 'tintIMG').setOrigin(0, 0).setScale(1);

    this.baseLayer.setPipeline("Light2D").setAlpha(0.2);
    this.floorLayer.setPipeline("Light2D").setAlpha(0.2);
    this.objectLayer.setPipeline("Light2D").setAlpha(0.2);
    this.wallLayer.setPipeline("Light2D").setAlpha(0.2);
    this.wallLayer2.setPipeline("Light2D").setAlpha(0.2);
    this.furnitureLayer.setPipeline("Light2D").setAlpha(0.2);
    this.furnitureLayer2.setPipeline("Light2D").setAlpha(0.2);
    this.leon.setPipeline("Light2D").setAlpha(0.2);
    this.enemy1.setPipeline("Light2D").setAlpha(0.2);
    this.enemy2.setPipeline("Light2D").setAlpha(0.2);
    this.enemy3.setPipeline("Light2D").setAlpha(0.2);
    this.enemy4.setPipeline("Light2D").setAlpha(0.2);
    this.enemy5.setPipeline("Light2D").setAlpha(0.2);
    this.enemy6.setPipeline("Light2D").setAlpha(0.2);
    this.enemy7.setPipeline("Light2D").setAlpha(0.2);
    this.enemy8.setPipeline("Light2D").setAlpha(0.2);
    this.enemy9.setPipeline("Light2D").setAlpha(0.2);
    this.enemy10.setPipeline("Light2D").setAlpha(0.2);
    this.enemy11.setPipeline("Light2D").setAlpha(0.2);
    this.enemy12.setPipeline("Light2D").setAlpha(0.2);
    this.enemy13.setPipeline("Light2D").setAlpha(0.2);

    this.lights.enable();
    this.lights.setAmbientColor(0x080808);
    
    this.spotlight = this.lights
      .addLight(this.player.x, this.player.y)
      .setRadius(300, 300)
      .setIntensity(7);

    this.physics.world.bounds.width = this.baseLayer.width;
    this.physics.world.bounds.height = this.baseLayer.height;
    
    this.player.setCollideWorldBounds(true)
      }

      update() {
        this.spotlight.x = this.player.x + 8;
        this.spotlight.y = this.player.y - 5;

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
        this.player.x > 1041 &&
        this.player.x < 1105 &&
        this.player.y > 46 &&
        this.player.y < 110 &&
        window.map > 0 &&
        window.longbow > 0 &&
        window.compass > 0 &&
        window.aidkit > 0 &&
        window.survivalknife > 0 &&
        window.torch > 0 &&
        window.energybar > 0 &&
        window.leon > 0 
      ) 
      {
        console.log('player touch door')
        this.intro10();
      }
      }/////////////////// end of update //////////////////////////////
      intro10(player, tile) {
        console.log("intro10 function");
        this.scene.start("intro10");
      }
    
      attackLeft() {
    
        console.log("attack left");
    
        this.arrowleft.x = this.player.x;
        this.arrowleft.y = this.player.y;
    
        this.arrowleft.setVisible(true);
        this.arrowleft.body.setEnable(true);
    
        // speed of the bullet
        this.arrowleft.body.setVelocityY(0);
        this.arrowleft.body.setVelocityX(-500);
      }
    
      attackRight() {
        
        console.log("attack right");
    
        this.arrowright.x = this.player.x;
        this.arrowright.y = this.player.y;
    
        this.arrowright.setVisible(true);
        this.arrowright.body.setEnable(true);
    
        // speed of the bullet
        this.arrowright.body.setVelocityX(500);
        this.arrowright.body.setVelocityY(0);
      }

      attackUp() {
        
        console.log("attack up");
    
        this.arrowup.x = this.player.x;
        this.arrowup.y = this.player.y;
    
        this.arrowup.setVisible(true);
        this.arrowup.body.setEnable(true);
    
        // speed of the bullet
        this.arrowup.body.setVelocityY(-500);
        this.arrowup.body.setVelocityX(0);
      }

      attackDown() {
        
        console.log("attack down");
    
        this.arrowdown.x = this.player.x;
        this.arrowdown.y = this.player.y;
    
        this.arrowdown.setVisible(true);
        this.arrowdown.body.setEnable(true);
    
        // speed of the bullet
        this.arrowdown.body.setVelocityY(500);
        this.arrowdown.body.setVelocityX(0);
      }
    
    }
       