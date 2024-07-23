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
    this.enemy3 = this.physics.add.sprite(836, 973, 'enemy').play("enemy-left");

    this.tweens.add({
      targets: this.enemy3,
      x: 319,
      flipX: true,
      yoyo: true,
      duration: 2500,
      repeat: -1
  })

  this.enemy5 = this.physics.add.sprite(1395, 546, 'enemy').play("enemy-left");

    this.tweens.add({
      targets: this.enemy5,
      x: 1248,
      flipX: true,
      yoyo: true,
      duration: 1500,
      repeat: -1
  })

  this.enemy7 = this.physics.add.sprite(1379, 1007, 'enemy').play("enemy-left");

    this.tweens.add({
      targets: this.enemy7,
      x: 1092,
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

    this.buildingLayer = map.createLayer(
      "buildingLayer",
      [townTiles, buildingTiles, roadTiles, hospitalbdTiles, marketbdTiles],
      0,
      0
    );

    this.enemy2 = this.physics.add.sprite(963, 497, 'enemy').play("enemy-left");

    this.tweens.add({
      targets: this.enemy2,
      x: 530,
      flipX: true,
      yoyo: true,
      duration: 3000,
      repeat: -1
  })

  this.enemy8 = this.physics.add.sprite(746, 950, 'enemy').play("enemy-down");

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

    this.windturbineLayer = map.createLayer(
      "windturbineLayer",
      [townTiles, buildingTiles, roadTiles, hospitalbdTiles, marketbdTiles],
      0,
      0
    );

    this.enemy4 = this.physics.add.sprite(1453, 579, 'enemy').play("enemy-down");

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

    this.signboardLayer = map.createLayer(
      "signboardLayer",
      [townTiles, buildingTiles, roadTiles, hospitalbdTiles, marketbdTiles],
      0,
      0
    );

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
this.player.body.setSize(this.player.width * 0.5, this.player.height * 0.7)

this.buildingLayer2 = map.createLayer(
  "buildingLayer2",
  [townTiles, buildingTiles, roadTiles, hospitalbdTiles, marketbdTiles],
  0,
  0
);

this.buildingLayer3 = map.createLayer(
  "buildingLayer3",
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

    // Add main player here with physics.add.sprite
    this.enemy1 = this.physics.add.sprite(456, 520, 'enemy').play("enemy-down");

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

    // get the tileIndex number in json, +1
    //mapLayer.setTileIndexCallback(11, this.room1, this);

    // Add custom properties in Tiled called "mouintain" as bool

    // What will collider witg what layers
    //this.physics.add.collider(mapLayer, this.player);
    this.buildingLayer1.setCollisionByProperty({ building: true });
    // this.buildingLayer.setCollisionByExclusion(-1, true);
    // this.buildingLayer1.setCollisionByExclusion(-1, true);
    // // this.buildingLayer2.setCollisionByExclusion(-1, false);

    // this.physics.add.collider(this.buildingLayer, this.player)
    this.physics.add.collider(this.buildingLayer1, this.player)

      // debug player
      window.player = this.player
   
   

    // create the arrow keys
    //this.cursors = this.input.keyboard.createCursorKeys();

    // camera follow player
    //this.cameras.main.startFollow(this.player);

    this.tint = this.add.image(0, 0, 'tintIMG').setOrigin(0, 0).setScale(1);
  } /////////////////// end of create //////////////////////////////

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

// player go into store
if (
  this.player.x > 1730 &&
  this.player.x < 1827 &&
  this.player.y > 757 &&
  this.player.y < 789
) 
{
  console.log('player touch door')
  this.store();
}

if (
  this.player.x > 193 &&
  this.player.x < 257 &&
  this.player.y > 1027 &&
  this.player.y < 1091
) 
{
  console.log('player touch door')
  this.hospital();
}

if (
  this.player.x > 1625 &&
  this.player.x < 1689 &&
  this.player.y > 275 &&
  this.player.y < 339
) 
{
  console.log('player touch door')
  this.museum();
}

  } /////////////////// end of update //////////////////////////////



  // Function to jump to store
  store(player, tile) {
    console.log("store function");
    this.scene.start("store", {
      player: player,
      inventory: this.inventory,
    });
  }

  hospital(player, tile) {
    console.log("hospital function");
    this.scene.start("hospital", {
      player: player,
      inventory: this.inventory,
    });
  }

  museum(player, tile) {
    console.log("museum function");
    this.scene.start("museum", {
      player: player,
      inventory: this.inventory,
    });
  }
} //////////// end of class world ////////////////////////
