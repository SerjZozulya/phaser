class Turkey extends Phaser.GameObjects.Sprite {

	constructor(scene) {
    	var x = (scene.player.x < 400) ? Phaser.Math.Between(400, 768) : Phaser.Math.Between(32, 400)
    	var y = 16

    	super(scene, x, y, "turkey")
    	this.dir = (x < 400) ? 'right' : 'left'
    	this.wallCollision = true

    	scene.add.existing(this)

    	this.play("turkey_" + this.dir)
    	scene.physics.world.enableBody(this)

    	if (this.dir == 'right')
    		this.body.velocity.x = Phaser.Math.Between(80, 100)
    	else if(this.dir == 'left')
    		this.body.velocity.x = Phaser.Math.Between(-100, -80)

    	scene.turkeys.add(this)
    	this.body.setCollideWorldBounds(true)
    	this.body.setBounce(1, 1)

	}

	update() {
		this.checkWallCollisions()	
	}


	checkWallCollisions() {
		if(this.body.onWall() && this.wallCollision) {
			this.wallCollision = false
			if(this.dir == 'right') {
				this.dir = 'left'
				this.anims.play('turkey_'+ this.dir)
			}
			else {						
				this.dir = 'right'
				this.anims.play('turkey_'+ this.dir)
			}
			setTimeout(()=>{this.wallCollision = true}, 400)
		}
			
	}	
}