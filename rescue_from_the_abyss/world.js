class world extends Phaser.Scene {
  constructor() {
    super({
      key: "world",
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
    this.load.tilemapTiledJSON("world", "assets/town.tmj");

    
    this.load.image("townIMG", "assets/town.png");
    this.load.image("buildingIMG", "assets/building.png");
    this.load.image("roadIMG", "assets/road.png");
    this.load.image("hospitalbdIMG", "assets/hospitalbd.png");
    this.load.image("marketbdIMG", "assets/marketbd.png");
    this.load.image("tintIMG", "assets/tint.png");
    this.load.image("exitIMG", "assets/exit.png");
    this.load.image("marketbannerIMG", "assets/marketbanner.png");
    this.load.image("museumbannerIMG", "assets/museumbanner.png");
    this.load.image("hospitalbannerIMG", "assets/hospitalbanner.png");
    this.load.spritesheet('heartIMG', 'assets/heartanim.png',{ frameWidth:32, frameHeight:32 });
    this.load.spritesheet('kyzo', 'assets/Kyzo.png',{ frameWidth:64, frameHeight:64 });
    this.load.spritesheet('enemy', 'assets/gravewalker.png',{ frameWidth:64, frameHeight:64 });
    
  

    
  }

  create() {
    console.log("*** world scene");

    // Create the map from main
    let map = this.make.tilemap({
      key: "world",
    });

    // Enable debugging
    window.player = this.player;

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

    // Load the game tiles
    // 1st parameter is name in Tiled,
    // 2nd parameter is key in Preload
    let townTiles = map.addTilesetImage("town", "townIMG");
    let buildingTiles = map.addTilesetImage("building", "buildingIMG");
    let roadTiles = map.addTilesetImage("road", "roadIMG");
    let hospitalbdTiles = map.addTilesetImage("hospitalbd", "hospitalbdIMG");
    let marketbdTiles = map.addTilesetImage("marketbd", "marketbdIMG");

    let tilesArray = [townTiles, buildingTiles, roadTiles, hospitalbdTiles, marketbdTiles];
    // Load in layers by layers
    this.baseLayer = map.createLayer(
      "baseLayer",
      [townTiles, buildingTiles, roadTiles, hospitalbdTiles, marketbdTiles],
      0,
      0
    );

    this.groundLayer = map.createLayer(
      "groundLayer",
      [townTiles, buildingTiles, roadTiles, hospitalbdTiles, marketbdTiles],
      0,
      0
    )

    this.destroyroadLayer = map.createLayer(
      "destroyroadLayer",
      [townTiles, buildingTiles, roadTiles, hospitalbdTiles, marketbdTiles],
      0,
      0
    )

    this.enemy1 = this.physics.add.sprite(456, 520, 'enemy').play("enemy-down");
    this.enemy1.body.setSize(this.enemy1.width * 0.5, this.enemy1.height * 0.9)

    this.tweens.add({
      targets: this.enemy1,
      y: 1160,
      flipY: false,
      yoyo: true,
      duration: 2000,
      repeat: -1,

      onYoyo: () => {
          //console.log('onYoyo, play enemy1-up anims');
          this.enemy1.play ("enemy-up")
        
      },
      onRepeat: () => {
          //console.log('onRepeat, play enemy1-down anims');
          this.enemy1.play ("enemy-down")
      },
  })

    this.enemy3 = this.physics.add.sprite(836, 973, 'enemy').play("enemy-left");
    this.enemy3.body.setSize(this.enemy3.width * 0.5, this.enemy3.height * 0.9)

    this.tweens.add({
      targets: this.enemy3,
      x: 319,
      flipX: true,
      yoyo: true,
      duration: 2500,
      repeat: -1
  })

  this.enemy5 = this.physics.add.sprite(1395, 546, 'enemy').play("enemy-left");
  this.enemy5.body.setSize(this.enemy5.width * 0.5, this.enemy5.height * 0.9)

    this.tweens.add({
      targets: this.enemy5,
      x: 1248,
      flipX: true,
      yoyo: true,
      duration: 1500,
      repeat: -1
  })

    this.buildingLayer1 = map.createLayer(
      "buildingLayer1",
      [townTiles, buildingTiles, roadTiles, hospitalbdTiles, marketbdTiles],
      0,
      0
    );

    this.enemy2 = this.physics.add.sprite(963, 497, 'enemy').play("enemy-left");
    this.enemy2.body.setSize(this.enemy2.width * 0.5, this.enemy2.height * 0.9)

    this.tweens.add({
      targets: this.enemy2,
      x: 530,
      flipX: true,
      yoyo: true,
      duration: 3000,
      repeat: -1
  })

  this.enemy8 = this.physics.add.sprite(746, 950, 'enemy').play("enemy-down");
  this.enemy8.body.setSize(this.enemy8.width * 0.5, this.enemy8.height * 0.9)

this.tweens.add({
  targets: this.enemy8,
  y: 1120,
  flipY: false,
  yoyo: true,
  duration: 2000,
  repeat: -1,

  onYoyo: () => {
      //console.log('onYoyo, play enemy1-up anims');
      this.enemy8.play ("enemy-up")
    
  },
  onRepeat: () => {
      //console.log('onRepeat, play enemy1-down anims');
      this.enemy8.play ("enemy-down")
  },
})

    this.enemy4 = this.physics.add.sprite(1453, 579, 'enemy').play("enemy-down");
    this.enemy4.body.setSize(this.enemy4.width * 0.5, this.enemy4.height * 0.9)

  this.tweens.add({
    targets: this.enemy4,
    y: 1000,
    flipY: false,
    yoyo: true,
    duration: 2000,
    repeat: -1,

    onYoyo: () => {
        //console.log('onYoyo, play enemy1-up anims');
        this.enemy4.play ("enemy-up")
      
    },
    onRepeat: () => {
        //console.log('onRepeat, play enemy1-down anims');
        this.enemy4.play ("enemy-down")
    },
})

this.enemy6 = this.physics.add.sprite(1720, 300, 'enemy').play("enemy-down");
this.enemy6.body.setSize(this.enemy6.width * 0.5, this.enemy6.height * 0.9)

this.tweens.add({
  targets: this.enemy6,
  y: 512,
  flipY: false,
  yoyo: true,
  duration: 2000,
  repeat: -1,

  onYoyo: () => {
      //console.log('onYoyo, play enemy1-up anims');
      this.enemy6.play ("enemy-up")
    
  },
  onRepeat: () => {
      //console.log('onRepeat, play enemy1-down anims');
      this.enemy6.play ("enemy-down")
  },
})

    this.itemLayer = map.createLayer(
      "itemLayer",
      [townTiles, buildingTiles, roadTiles, hospitalbdTiles, marketbdTiles],
      0,
      0
    );

    this.cartonLayer = map.createLayer(
      "cartonLayer",
      [townTiles, buildingTiles, roadTiles, hospitalbdTiles, marketbdTiles],
      0,
      0
    );

// kyzo is the alias in preload 
let start  = map.findObject("objectLayer",(obj) => obj.name === "start");

this.player = this.physics.add.sprite(this.playerPos.x, this.playerPos.y, 'kyzo');
this.player.body.setSize(this.player.width * 0.5, this.player.height * 0.9)

this.windturbineLayer = map.createLayer(
  "windturbineLayer",
  [townTiles, buildingTiles, roadTiles, hospitalbdTiles, marketbdTiles],
  0,
  0
);

this.enemy7 = this.physics.add.sprite(1379, 1000, 'enemy').play("enemy-left");
this.enemy7.body.setSize(this.enemy7.width * 0.5, this.enemy7.height * 0.9)

this.tweens.add({
  targets: this.enemy7,
  x: 1092,
  flipX: true,
  yoyo: true,
  duration: 1500,
  repeat: -1
})


this.signboardLayer = map.createLayer(
  "signboardLayer",
  [townTiles, buildingTiles, roadTiles, hospitalbdTiles, marketbdTiles],
  0,
  0
);

this.buildingLayer2 = map.createLayer(
  "buildingLayer2",
  [townTiles, buildingTiles, roadTiles, hospitalbdTiles, marketbdTiles],
  0,
  0
);

this.buildingLayer = map.createLayer(
  "buildingLayer",
  [townTiles, buildingTiles, roadTiles, hospitalbdTiles, marketbdTiles],
  0,
  0
);



    // create the arrow keys
    this.cursors = this.input.keyboard.createCursorKeys();

    // camera follow player
    this.cameras.main.startFollow(this.player);

    // Add any text to the game
    this.add.text(10, 10, "Add any text here", {
      font: "30px Courier",
      fill: "#00FFFF",
    });


    let key1 = this.input.keyboard.addKey(49);

    key1.on('down', function(){
      console.log("Key 1 pressed")
      this.scene.start("store");
      }, this );

  // Call globalFunction globalHitEnemy on overlap
  this.physics.add.overlap(this.player, this.enemy1, globalHitEnemy, null, this);
  this.physics.add.overlap(this.player, this.enemy2, globalHitEnemy, null, this);
  this.physics.add.overlap(this.player, this.enemy3, globalHitEnemy, null, this);
  this.physics.add.overlap(this.player, this.enemy4, globalHitEnemy, null, this);
  this.physics.add.overlap(this.player, this.enemy5, globalHitEnemy, null, this);
  this.physics.add.overlap(this.player, this.enemy6, globalHitEnemy, null, this);
  this.physics.add.overlap(this.player, this.enemy7, globalHitEnemy, null, this);
  this.physics.add.overlap(this.player, this.enemy8, globalHitEnemy, null, this);

    // Add time event / movement here

    // What will collider witg what layers
    this.buildingLayer1.setCollisionByExclusion(-1, true);
    this.cartonLayer.setCollisionByExclusion(-1, true);
    this.physics.add.collider(this.buildingLayer1, this.player)
    this.physics.add.collider(this.cartonLayer, this.player)

    //collect heart
    this.anims.create({
      key:'heartAnim',
      frames:this.anims.generateFrameNumbers('heartIMG',
      { start:0, end:1}),
      frameRate:5 ,
      repeat:-1
    });

    this.heart1 = this.physics.add.sprite(1249, 832, "heartIMG").play("heartAnim")
    this.heart2 = this.physics.add.sprite(1323, 337, "heartIMG").play("heartAnim")
    this.heart3 = this.physics.add.sprite(599, 1179, "heartIMG").play("heartAnim")
    this.heart4 = this.physics.add.sprite(360, 887, "heartIMG").play("heartAnim")
    this.heart5 = this.physics.add.sprite(735, 590, "heartIMG").play("heartAnim")


    this.physics.add.overlap(this.player, [this.heart1,this.heart2,this.heart3,this.heart4,this.heart5], globalCollectHeart, null, this);

      // debug player
      window.player = this.player
   
    // create the arrow keys
    //this.cursors = this.input.keyboard.createCursorKeys();

    // camera follow player
    //this.cameras.main.startFollow(this.player);

    this.tint = this.add.image(0, 0, 'tintIMG').setOrigin(0, 0).setScale(1);

    this.exit = this.add.image(1800,342, 'exitIMG').setOrigin(0,0).setScale(0.7);
    this.marketbanner = this.add.image(1730,640, 'marketbannerIMG').setOrigin(0,0).setScale(0.7);
    this.museumbanner = this.add.image(1610,120, 'museumbannerIMG').setOrigin(0,0).setScale(0.7);
    this.hospitalbanner = this.add.image(80,715, 'hospitalbannerIMG').setOrigin(0,0).setScale(1);

    this.physics.world.bounds.width = this.baseLayer.width;
    this.physics.world.bounds.height = this.baseLayer.height;
    
    this.player.setCollideWorldBounds(true)
  } /////////////////// end of create //////////////////////////////

  update() {
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

// player go into store
if (
  this.player.x > 1730 &&
  this.player.x < 1827 &&
  this.player.y > 757 &&
  this.player.y < 829 &&
  window.map > 0 &&
  window.longbow > 0 &&
  window.compass > 0
) 
{
  console.log('player touch door')
  this.intro7();
}

if (
  this.player.x > 193 &&
  this.player.x < 257 &&
  this.player.y > 1027 &&
  this.player.y < 1091 &&
  window.map > 0 &&
  window.longbow > 0 &&
  window.compass > 0 &&
  window.aidkit > 0 &&
  window.survivalknife > 0 &&
  window.torch > 0 &&
  window.energybar > 0
) 
{
  console.log('player touch door')
  this.intro9();
}

if (
  this.player.x > 1625 &&
  this.player.x < 1689 &&
  this.player.y > 275 &&
  this.player.y < 339 &&
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
  this.intro11();
}

if (
  this.player.x > 1866 &&
  this.player.x < 1930 &&
  this.player.y > 371 &&
  this.player.y < 435 &&
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
  this.winningscene();
}

  } /////////////////// end of update //////////////////////////////



  // Function to jump to store
  intro7(player, tile) {
    console.log("intro7 function");
    this.scene.start("intro7", {
      player: player,
      inventory: this.inventory,
    });
  }

  intro9(player, tile) {
    console.log("intro9 function");
    this.scene.start("intro9", {
      player: player,
      inventory: this.inventory,
    });
  }

  intro11(player, tile) {
    console.log("intro11 function");
    this.scene.start("intro11", {
      player: player,
      inventory: this.inventory,
    });
  }

  winningscene(player, tile) {
    console.log("winningscene function");
    this.scene.start("winningscene", {
      player: player,
      inventory: this.inventory,
    });
  }
} //////////// end of class world ////////////////////////
