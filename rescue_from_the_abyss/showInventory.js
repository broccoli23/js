class showInventory extends Phaser.Scene {

    constructor ()
    {
        super({ key: 'showInventory',
        active: false });
    }

    init(data) {
        this.player = data.player;
        this.inventory = data.inventory;
    }

    preload(){
        //Load heart image
        this.load.image('heart', 'assets/heart.png');
        this.load.image('compassOl', 'assets/compassoutline.png');
        this.load.image('compass', 'assets/compassshowinventory.png');
        this.load.image('mapOl', 'assets/mapoutline.png');
        this.load.image('map', 'assets/mapshowinventory.png');
        this.load.image('longbowOl', 'assets/longbowoutline.png');
        this.load.image('longbow', 'assets/longbowshowinventory.png');
        this.load.image('aidkitOl', 'assets/aidkitoutline.png');
        this.load.image('aidkit', 'assets/aidkitshowinventory.png');
        this.load.image('survivalknifeOl', 'assets/survivalknifeoutline.png');
        this.load.image('survivalknife', 'assets/survivalknifeshowinventory.png');
        this.load.image('torchOl', 'assets/torchoutline.png');
        this.load.image('torch', 'assets/torchshowinventory.png');
        this.load.image('energybarOl', 'assets/energybaroutline.png');
        this.load.image('energybar', 'assets/energybarshowinventory.png');
    }

    create () {


        //Place hearts at the top screen
        console.log("***showInventory");
        this.scene.bringToTop("showInventory");

        //black bar
        var rect = new Phaser.Geom.Rectangle(0, 0, 1840, 60);
        var graphics = this.add.graphics({ fillStyle: { color: '5c5e60' } });
        graphics.fillRectShape(rect).setScrollFactor(0)

       // Setup heart but visible to false
       this.heartimg1 = this.add.image (100,32,'heart').setScrollFactor(0).setVisible(false).setScale(0.5);
       this.heartimg2 = this.add.image (170,32,'heart').setScrollFactor(0).setVisible(false).setScale(0.5);
       this.heartimg3 = this.add.image (240,32,'heart').setScrollFactor(0).setVisible(false).setScale(0.5);

       // collect item but outline to collected item
       this.compassOl = this.add.image (400, 32, 'compassOl').setScrollFactor(0).setVisible(true).setScale(0.5);     
       this.compass = this.add.image (400, 32, 'compass').setScrollFactor(0).setVisible(false).setScale(0.5);  
       this.mapOl = this.add.image (470, 32, 'mapOl').setScrollFactor(0).setVisible(true).setScale(0.5);     
       this.map = this.add.image (470, 32, 'map').setScrollFactor(0).setVisible(false).setScale(0.5);  
       this.longbowOl = this.add.image (540, 32, 'longbowOl').setScrollFactor(0).setVisible(true).setScale(0.7);  
       this.longbow = this.add.image (540, 32, 'longbow').setScrollFactor(0).setVisible(false).setScale(0.7);   
       this.aidkitOl = this.add.image (610, 32, 'aidkitOl').setScrollFactor(0).setVisible(true).setScale(0.5);     
       this.aidkit = this.add.image (610, 32, 'aidkit').setScrollFactor(0).setVisible(false).setScale(0.5);  
       this.survivalknifeOl = this.add.image (680, 32, 'survivalknifeOl').setScrollFactor(0).setVisible(true).setScale(0.5);      
       this.survivalknife = this.add.image (680, 32, 'survivalknife').setScrollFactor(0).setVisible(false).setScale(0.5);  
       this.torchOl = this.add.image (750, 32, 'torchOl').setScrollFactor(0).setVisible(true).setScale(0.5);    
       this.torch = this.add.image (750, 32, 'torch').setScrollFactor(0).setVisible(false).setScale(0.5);  
       this.energybarOl = this.add.image (820, 32, 'energybarOl').setScrollFactor(0).setVisible(true).setScale(0.5);   
       this.energybar = this.add.image (820, 32, 'energybar').setScrollFactor(0).setVisible(false).setScale(0.5);  
       this.leon = this.add.image (820, 32, 'leon').setScrollFactor(0).setVisible(false).setScale(0.5);  

               
       // Recv an event, call the method
       this.events.on('inventory', this.updateScreen, this)

    } //end of create

    updateScreen(data){
        console.log('Received event inventory', data);

        if ( data.compass > 0 ) {
            // toggle the setVisible from false to true
            this.compassOl.setVisible(false);
            this.compass.setVisible(true);
        }

        if ( data.map > 0 ) {
            // toggle the setVisible from false to true
            this.mapOl.setVisible(false);
            this.map.setVisible(true);
        }

        if ( data.longbow > 0 ) {
            // toggle the setVisible from false to true
            this.longbowOl.setVisible(false);
            this.longbow.setVisible(true);
        }

        if ( data.aidkit > 0 ) {
            // toggle the setVisible from false to true
            this.aidkitOl.setVisible(false);
            this.aidkit.setVisible(true);
        }

        if ( data.survivalknife > 0 ) {
            // toggle the setVisible from false to true
            this.survivalknifeOl.setVisible(false);
            this.survivalknife.setVisible(true);
        }

        if ( data.torch > 0 ) {
            // toggle the setVisible from false to true
            this.torchOl.setVisible(false);
            this.torch.setVisible(true);
        }

        if ( data.energybar > 0 ) {
            // toggle the setVisible from false to true
            this.energybarOl.setVisible(false);
            this.energybar.setVisible(true);
        }

        switch ( data.heart ) {

            case 3: 
                this.heartimg1.setVisible(true)
                this.heartimg2.setVisible(true)
                this.heartimg3.setVisible(true)
                break;
    
            case 2:
                this.heartimg1.setVisible(true)
                this.heartimg2.setVisible(true)
                this.heartimg3.setVisible(false)
                break;
    
            case 1:
                this.heartimg1.setVisible(true)
                this.heartimg2.setVisible(false)
                this.heartimg3.setVisible(false)
                break;
             
            case 0:
                this.heartimg1.setVisible(false)
                this.heartimg2.setVisible(false)
                this.heartimg3.setVisible(false)
                break;    
    
            default:
            break;
        }
    
    }

} // end of class
