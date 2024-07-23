////////////////////////////////////////////////////////
//
// access this function using updateInventory.call(this)
// Uses a JS function to prevent repeated codes
// 
///////////////////////////////////////////////////////
function updateInventory() {
    console.log("*** updateInventory()")
    // Emit events showInventory
    this.inventory = {}
    this.inventory.compass = window.compass
    this.inventory.map = window.map
    this.inventory.longbow = window.longbow
    this.inventory.aidkit = window.aidkit
    this.inventory.survivalknife = window.survivalknife
    this.inventory.energybar = window.energybar
    this.inventory.torch = window.torch
    this.inventory.heart = window.heart
     
    console.log('*** updateInventory() Emit event', this.inventory)
    this.invEvent = (event, data) =>  { 
			    this.scene.get('showInventory').events.emit(event, data); 
		    }
    this.invEvent("inventory", this.inventory);
  }
  
  ////////////////////////////////////////////////////////
  //
  // access this function with globalHitFire
  // Uses a JS function to prevent repeated codes
  // 
  ///////////////////////////////////////////////////////
  function globalHitEnemy(player,enemy) {
      console.log("*** player overlap enemy");
     
      // Shake screen
     this.cameras.main.shake(100);
     //this.hitenemySnd.play();
  
		  // deduct heart
      window.heart--;
      enemy.disableBody(true, true);
      
      // Call globalFunctions.js updateInventory
      updateInventory.call(this)
 
    if (window.heart == 0){
	    console.log("*** player gameOver");
      this.scene.start("gameOver");
      //this.loselifeSnd.play();
    }
  }

  // function globalAttackLeft() {
    
  //   console.log("attack left");

  //   this.bullet.x = this.player.x;
  //   this.bullet.y = this.player.y;

  //   this.bullet.setVisible(true);
  //   this.bullet.body.setEnable(true);

	//   // speed of the bullet
  //   this.bullet.body.setVelocityX(-500);
  // }

  // function globalAttackRight() {

  // console.log("attack right");

  // this.bullet.x = this.player.x;
  // this.bullet.y = this.player.y;

  // this.bullet.setVisible(true);
  // this.bullet.body.setEnable(true);

  // // speed of the bullet
  // this.bullet.body.setVelocityX(500);
// }
  
  ////////////////////////////////////////////////////////
  //
  // access this function with globalCollectKey
  // Uses a JS function to prevent repeated codes
  // 
  /////////////////////////////////////////////////////// 

 function globalCollectCompass(player,item) {
    console.log("*** player overlap item");

    this.collectItemSnd = this.sound.add("collectItem").setVolume(2);

    // play sound
    this.collectItemSnd.play()

	// increase key count
    window.compass++;
    item.disableBody(true, true);
    updateInventory.call(this);
}

function globalCollectMap(player,item) {
  console.log("*** player overlap item");

  this.collectItemSnd = this.sound.add("collectItem").setVolume(2);

    // play sound
    this.collectItemSnd.play()

// increase key count
  window.map++;
  item.disableBody(true, true);
  updateInventory.call(this)
}

function globalCollectLongbow(player,item) {
  console.log("*** player overlap item");

  this.collectItemSnd = this.sound.add("collectItem").setVolume(2);

    // play sound
    this.collectItemSnd.play()

// increase key count
  window.longbow++;
  item.disableBody(true, true);
  updateInventory.call(this)
}

function globalCollectAidkit(player,item) {
  console.log("*** player overlap item");

  this.collectItemSnd = this.sound.add("collectItem").setVolume(2);

    // play sound
    this.collectItemSnd.play()

// increase key count
  window.aidkit++;
  item.disableBody(true, true);
  updateInventory.call(this)
}

function globalCollectSurvivalknife(player,item) {
  console.log("*** player overlap item");

  this.collectItemSnd = this.sound.add("collectItem").setVolume(2);

    // play sound
    this.collectItemSnd.play()

// increase key count
  window.survivalknife++;
  item.disableBody(true, true);
  updateInventory.call(this)
}

function globalCollectTorch(player,item) {
  console.log("*** player overlap item");

  this.collectItemSnd = this.sound.add("collectItem").setVolume(2);

    // play sound
    this.collectItemSnd.play()

// increase key count
  window.torch++;
  item.disableBody(true, true);
  updateInventory.call(this)
}

function globalCollectEnergybar(player,item) {
  console.log("*** player overlap item");

  this.collectItemSnd = this.sound.add("collectItem").setVolume(2);

    // play sound
    this.collectItemSnd.play()

// increase key count
  window.energybar++;
  item.disableBody(true, true);
  updateInventory.call(this)
}