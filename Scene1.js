class Scene1 extends Phaser.Scene {

	constructor() {
		super("bootGame")
	}

	create() {
		var text = this.add.text(20, 20, "Please, enter you name")
        var scene2 = this.scene
        var element = this.add.dom(config.width / 2, 200).createFromCache('nameform')
        element.addListener('click')

        element.on('click', function(event){
            if (event.target.name === 'loginButton'){
                var inputUsername = this.getChildByName('username')
                if (inputUsername.value !== '' && inputUsername.value.length >= 3 && inputUsername.value.length <= 6)
                    scene2.start('playGame', {username: inputUsername.value})
                else (text.setText('Error. Name must not be empty.\nThe name must be between 3 and 6 characters long.'))
            }
        })
		


        this.anims.create({
            key: 'left',
            frames: this.anims.generateFrameNumbers('dude', {start: 1, end: 3 }),
            frameRate: 10,
            repeat: -1
        });

        this.anims.create({
            key: 'snowball',
            frames: this.anims.generateFrameNumbers('snowball', {start: 0, end: 5 }),
            frameRate: 10,
            repeat: -1
        });


        this.anims.create({
            key: 'standing_left',
            frames: [ { key: 'dude', frame: 4 } ],
            frameRate: 20
        });

        this.anims.create({
            key: 'standing_right',
            frames: [ { key: 'dude', frame: 5 } ],
            frameRate: 20
        });

        this.anims.create({
            key: 'jumping_right',
            frames: [ { key: 'dude', frame: 9 } ],
            frameRate: 1
        });

        this.anims.create({
            key: 'jumping_left',
            frames: [ { key: 'dude', frame: 0 } ],
            frameRate: 1
        });

        this.anims.create({
            key: 'right',
            frames: this.anims.generateFrameNumbers('dude', { start: 6, end: 8 }),
            frameRate: 10,
            repeat: -1
        });

        this.anims.create({
            key: "coins",
            frames: this.anims.generateFrameNumbers("coin",{start: 0, end: 2}),
            frameRate: 5,
            repeat: -1
        });

        this.anims.create({
            key: "turkey_left",
            frames: this.anims.generateFrameNumbers("turkey", {start: 0, end: 1}),
            frameRate: 5,
            repeat: -1
        });


        this.anims.create({
            key: "turkey_right",
            frames: this.anims.generateFrameNumbers("turkey",{start: 2, end: 3}),
            frameRate: 5,
            repeat: -1
        });

        this.anims.create({
            key: 'turkey_standing',
            frames: [{key: 'turkey', frame: 0}],
            frameRate: 20
        });


	}

	preload ()
    {
        this.load.image('sky', 'assets/my-sky.png')
        this.load.image('bg2', 'assets/bg2.png');
        this.load.image('ground', 'assets/block.png')
        this.load.spritesheet('coin', 'assets/coin.png', {
        	frameWidth: 24,
        	frameHeight: 34
        });

        this.load.spritesheet('turkey', 'assets/turkey.png', {frameWidth: 32, frameHeight: 48})
        this.load.spritesheet('dude', 'assets/mario.png', {frameWidth: 32, frameHeight: 48})
        this.load.spritesheet('snowball', 'assets/snowball.png', {frameWidth: 24, frameHeight: 12})

        this.load.bitmapFont('myFont', 'assets/fonts/font.png', 'assets/fonts/font.xml')

        this.load.html('nameform', 'assets/text/loginform.html')
    }


}