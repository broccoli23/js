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

        this.objectLayer = map.createLayer(
          "objectLayer",
            [townTiles, interiorTiles, hospitalTiles, museumTiles],
            0,
            0
          )

        // kyzo is the alias in preload 
       let start  = map.findObject("objectLayer",(obj) => obj.name === "start");
       this.player = this.physics.add.sprite(start.x, start.y, 'kyzo');

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

      // set collision
      // this.furnitureLayer.setCollisionByProperty({ shelf: true });
      // this.furnitureLayer.setCollisionByProperty({ table: true });
      // this.wallLayer.setCollisionByProperty({ wall: true });
      // this.physics.add.collider(this.furnitureLayer, this.player)
      // this.physics.add.collider(this.wallLayer, this.player)

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
        this.player.x > 990 &&
        this.player.x < 1054 &&
        this.player.y > 43 &&
        this.player.y < 107
      ) 
      {
        console.log('player touch door')
        this.world();
      }
      }/////////////////// end of update //////////////////////////////
      world(player, tile) {
        console.log("world function");
        let playerPos = {};
        playerPos.x = 1670;
        playerPos.y = 387;
        this.scene.start("world", { playerPos: playerPos });
      }
    }
       