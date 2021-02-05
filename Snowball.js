class Snowball extends Phaser.Physics.Arcade.Sprite {

	constructor(scene) {
		var x = 500
    	var y = 500
		super(scene, x, y, 'snowball')
		// player.scene.add.existing(this)
		// player.scene.snowballs.add(this)
    	// var gfx = player.scene.add.graphics().setDefaultStyles({ lineStyle: { width: 5, color: 0xffdd00, alpha: 0.5 } });
    	// var line = new Phaser.Geom.Line();
    	// var angle = 0;


    	// player.scene.input.on('pointermove', function (pointer) {
     //    	angle = Phaser.Math.Angle.BetweenPoints(player, pointer);
     //    	Phaser.Geom.Line.SetToAngle(line, player.x, player.y, angle, 128);
     //    	gfx.clear().strokeLineShape(line);
    	// }, player.scene);

     //    player.scene.input.on('pointerup', function () {
     //    	var chick = player.scene.physics.add.sprite(player.x, player.y, 'snowball')
     //    	player.scene.snowballs.add(this)
     //        chick.enableBody(true, player.x, player.y, true, true)
     //        chick.play('snowball')
     //        physics.velocityFromRotation(angle, 600, chick.body.velocity)
     //    }, player.scene)
	}

	// update(){
	// 	var player = this.scene.player
	// 	this.x = player.x
	// 	this.y = player.y
	// 	if(player.getDir() === 'right')
	// 		this.setFlipX(true)
	// 	else
	// 		this.setFlipX(false)
	// }

}