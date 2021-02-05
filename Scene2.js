class Scene2 extends Phaser.Scene {

		constructor() {
		super("playGame")
		this.score = 0
	}

	init (data) {
		this.username = data.username
	}

	create () {

        //  A simple background for our game
        this.background = this.add.tileSprite(0, 0, 2048, 1532, 'sky').setScale(0.5)
        this.background.setOrigin(0,0)

        this.bg_2 = this.add.tileSprite(0, 240, 800, 600, "bg2")
    	this.bg_2.setOrigin(0, 0);
    	this.bg_2.setScrollFactor(0, 1);

 	    this.player = new Player(this)
        //this.snowball = new Snowball()
 	    
 	    //  The platforms group contains the ground and the 2 ledges we can jump on
        this.platforms = this.physics.add.staticGroup();

        for (var x = 16; x < 800; x = x+32) {
        	this.platforms.create(x, 584, 'ground');
        }

        for (var x = 464; x < 800; x = x+32) {
             this.platforms.create(x, 432, 'ground');
        }

        for (var x = 16; x < 336; x = x+32) {
             this.platforms.create(x, 282, 'ground');
        }

        for (var x = 562; x < 800; x = x+32) {
             this.platforms.create(x, 160, 'ground');
        }

        this.physics.add.collider(this.player, this.platforms);


        this.coins = this.physics.add.group()
        this.snowballs = this.physics.add.group()

        var maxObjects = 7
        for (var i = 1; i <= maxObjects; i++) {
      		var coin = new Coin(this)
      		this.coins.add(coin)
       		coin.setPosition(i*100, 0)

    	}

        this.physics.add.collider(this.coins, this.platforms);


        this.turkeys = this.add.group();
        //this.physics.add.collider(this.turkeys, this.platforms);

        //  Checks to see if the player overlaps with any of the coins, if he does call the collectCoin function
        this.physics.add.overlap(this.player, this.coins, this.collectCoin, null, this);
        this.physics.add.collider(this.player, this.turkeys, this.hitTurkey, null, this);

        this.myCam = this.cameras.main;
		this.myCam.setBounds(0, 0, 800, 600)
		this.myCam.setZoom(1.2, 1.2)

    	// making the camera follow the player
    	this.myCam.startFollow(this.player);

    	var graphics = this.add.graphics()
		graphics.fillStyle(0x000000, 1)
	    graphics.beginPath()
	    graphics.moveTo(0, 0)
	    graphics.lineTo(800, 0)
	    graphics.lineTo(800, 80)
	    graphics.lineTo(0, 80)
	    graphics.lineTo(0, 0)
	    //
	    graphics.closePath()
	    graphics.fillPath()
	    graphics.setScrollFactor(0, 0)

        //  The score
        this.usernameText = this.add.bitmapText(560, 55, 'myFont', 'NAME: ' + this.username.toUpperCase(), 32)
        this.usernameText.setOrigin(0, 0)
		this.usernameText.setScrollFactor(0, 0)
        this.scoreText = this.add.bitmapText(100, 55, 'myFont', 'SCORE: 0000' + this.score, 32)
        this.scoreText.setScrollFactor(0, 0)
	}


    update ()
    {
    	this.bg_2.tilePositionX = this.myCam.scrollX * .6;

    	for(var i = 0; i < this.turkeys.getChildren().length; i++){
      		var turkey = this.turkeys.getChildren()[i]
      		turkey.update()
    	}

        if (!this.gameOver)
        {
        	this.player.update()
        	this.background.tilePositionX -=0.3
        }
    }

    collectCoin (player, coin)
    {
        coin.disableBody(true, true)
        //  Add and update the score
        this.score += 10;
        var scoreFormated = this.zeroPad(this.score, 5)
        this.scoreText.setText('SCORE: ' + scoreFormated)

        if (this.coins.countActive(true) === 0)
        {
            //  A new batch of coins to collect
            this.coins.children.iterate(function (child) {
                child.enableBody(true, child.x, 0, true, true);
            });

            var turkey = new Turkey(this)

        }
    }

    hitTurkey (player, turkey)
    {
        this.physics.pause();
        player.setTint(0xff0000);
        this.anims.pauseAll()
        this.gameOver = true;
    }

    zeroPad(number, size) {
    	var stringNumber = String(number)
    	while (stringNumber.length < (size || 2)) {
    		stringNumber = '0' + stringNumber
    	}
    	return stringNumber
    }

}
