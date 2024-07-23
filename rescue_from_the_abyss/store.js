class store extends Phaser.Scene {
    constructor() {
      super({
        key: "store",
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
      this.load.tilemapTiledJSON("store", "assets/store.tmj");
  
      
      this.load.image("townIMG", "assets/town.png");
      this.load.image("classroomIMG", "assets/classroom.png");
      this.load.image("groceryIMG", "assets/grocery.png");
      this.load.image("tint", "assets/tint.png");
      this.load.image("interiorIMG", "assets/interior.png");
      this.load.image("officeIMG", "assets/office.png");
      this.load.spritesheet('kyzo', 'assets/Kyzo.png',{ frameWidth:64, frameHeight:64 });
      this.load.spritesheet('aidkitIMG', 'assets/aidkit.png',{ frameWidth:32, frameHeight:32 });
      this.load.spritesheet('torchIMG', 'assets/torch.png',{ frameWidth:32, frameHeight:32 });
      this.load.spritesheet('survivalknifeIMG', 'assets/survivalknife.png',{ frameWidth:32, frameHeight:32 });
      this.load.spritesheet('energybarIMG', 'assets/energybar.png',{ frameWidth:32, frameHeight:32 });

    }

      create() {
        console.log("*** store scene");
    
        // Create the map from main
        let map = this.make.tilemap({
          key: "store",
        });
    
        // Load the game tiles
        // 1st parameter is name in Tiled,
        // 2nd parameter is key in Preload
        let townTiles = map.addTilesetImage("town", "townIMG");
        let classroomTiles = map.addTilesetImage("classroom", "classroomIMG");
        let groceryTiles = map.addTilesetImage("grocery", "groceryIMG");
        let interiorTiles = map.addTilesetImage("interior", "interiorIMG");
        let officeTiles = map.addTilesetImage("office", "officeIMG");

    
        let tilesArray = [townTiles, classroomTiles, groceryTiles, interiorTiles, officeTiles];
        // Load in layers by layers
        let floorLayer = map.createLayer(
          "floorLayer",
          [townTiles, classroomTiles, groceryTiles, interiorTiles, officeTiles],
          0,
          0
        );
    
        let wallLayer = map.createLayer(
          "wallLayer",
          [townTiles, classroomTiles, groceryTiles, interiorTiles, officeTiles],
          0,
          0
        )

        let wallLayer2 = map.createLayer(
          "wallLayer2",
          [townTiles, classroomTiles, groceryTiles, interiorTiles, officeTiles],
          0,
          0
        )
    
        let furnitureLayer = map.createLayer(
          "furnitureLayer",
          [townTiles, classroomTiles, groceryTiles, interiorTiles, officeTiles],
          0,
          0
        )

        let furnitureLayer2 = map.createLayer(
          "furnitureLayer2",
          [townTiles, classroomTiles, groceryTiles, interiorTiles, officeTiles],
          0,
          0
        )
    
    
        let itemLayer = map.createLayer(
          "itemLayer",
          [townTiles, classroomTiles, groceryTiles, interiorTiles, officeTiles],
          0,
          0
        );

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

        // kyzo is the alias in preload 
       let start  = map.findObject("objectLayer",(obj) => obj.name === "start");
       this.player = this.physics.add.sprite(start.x, start.y, 'kyzo');
       this.player.body.setSize(this.player.width * 0.5, this.player.height * 0.7)

       this.aidkit = this.physics.add.sprite(64, 204, 'aidkiIMG').play('aidkitAnim')
       this.torch = this.physics.add.sprite(597, 724, 'torchIMG').play('torchAnim')
       this.survivalknife = this.physics.add.sprite(260, 1108, 'survivalknifeIMG').play('survivalknifeAnim')
       this.energybar = this.physics.add.sprite(1177, 921, 'energybarIMG').play('energybarAnim')

       const fx4 = this.aidkit.postFX.addGlow(0xffffff, 4, 0, false, 0.5, 32);
       const fx5 = this.torch.postFX.addGlow(0xffffff, 4, 0, false, 0.5, 32);
       const fx6 = this.survivalknife.postFX.addGlow(0xffffff, 4, 0, false, 0.5, 32);
       const fx7 = this.energybar.postFX.addGlow(0xffffff, 4, 0, false, 0.5, 32);
       
       this.tweens.add({
        targets: [fx4, fx5, fx6,fx7],
        outerStrength: 15,
        yoyo: true,
        loop: -1,
        ease: "sine.inout",
      });
  

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
      this.physics.add.overlap(this.player, this.aidkit, globalCollectAidkit, null, this);
      this.physics.add.overlap(this.player, this.torch, globalCollectTorch, null, this);
      this.physics.add.overlap(this.player, this.survivalknife, globalCollectSurvivalknife, null, this);
      this.physics.add.overlap(this.player, this.energybar, globalCollectEnergybar, null, this);

      //set collision
      // this.wallLayer.setCollisionByExclusion(-1, true);
      // this.wallLayer2.setCollisionByExclusion(-1, true);
      // this.furnitureLayer.setCollisionByExclusion(-1, true);
      // this.furnitureLayer2.setCollisionByExclusion(-1, true);
      // this.physics.add.collider(this.wallLayer, this.player);
      // this.physics.add.collider(this.wallLayer2, this.player);
      // this.physics.add.collider(this.furnitureLayer, this.player);
      // this.physics.add.collider(this.furnitureLayer2, this.player);

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
        this.player.x > 943 &&
        this.player.x < 1071 &&
        this.player.y > 36 &&
        this.player.y < 120
      ) 
      {
        console.log('player touch door')
        this.world();
      }
      }/////////////////// end of update /////////////////////////////

      world(player, tile) {
        console.log("world function");
        let playerPos = {};
        playerPos.x = 1609;
        playerPos.y = 823;
        this.scene.start("world", { playerPos: playerPos });
      }
    }
       