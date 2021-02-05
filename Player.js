class Player extends Phaser.GameObjects.Sprite {

	constructor(scene) {

		super(scene, 100, 540, 'dude')
        //this.scene = scene
		scene.add.existing(this)
		scene.physics.world.enableBody(this)
		this.dir = 'right'
		this.body.setCollideWorldBounds(true);
		this.cursors = scene.input.keyboard.createCursorKeys()
        scene.input.on('pointerdown', this.shoot, scene)
	}

    getDir() {
        return this.dir
    }

    shoot(){
        var snowball = new Snowball(this.scene)
        this.scene.snowballs.add(this)
    }

	update() {

        if(this.scene.input)

		if (this.cursors.left.isDown)
        {

            this.body.setVelocityX(-160)
            this.anims.play('left', true)
            this.dir = 'left'
        }

        else if (this.cursors.right.isDown)
        {
        	
            this.body.setVelocityX(160);
            this.anims.play('right', true);
            this.dir = 'right'
        }

        else
        {
            this.body.setVelocityX(0);
            if (this.dir === 'right')
            	this.anims.play('standing_' + this.dir)
            else if (this.dir === 'left')
            	this.anims.play('standing_' + this.dir)
        }

        if (this.cursors.up.isDown && this.body.touching.down)
        {
            this.body.setVelocityY(-330);
        }

        if (!this.body.touching.down)
        {
        	if (this.dir === 'right')
            	this.anims.play('jumping_' + this.dir);
            else if (this.dir === 'left')
            	this.anims.play('jumping_' + this.dir)

        }

	}
}