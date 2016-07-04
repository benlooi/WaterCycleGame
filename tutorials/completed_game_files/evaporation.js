var vapor;
var cursors;
var kid;
var bullet,cloud;
var menuGroup;
var showMenu=false;
var Evaporation = {

	create: function () {
		 game.physics.startSystem(Phaser.Physics.ARCADE);

		var sunray=game.add.bitmapData(200,200);
		var sunray_grd=sunray.ctx.createRadialGradient(100,100,1,100,100,200);
		sunray_grd.addColorStop(0,"#F0F204");
		sunray_grd.addColorStop(0.5,"rgba(255,255,255,0)");

		sunray.ctx.beginPath();
		sunray.ctx.arc(100, 100, 100, 0, 2 * Math.PI, false);
		sunray.ctx.fillStyle=sunray_grd;
		sunray.ctx.fill();


		var sun= game.add.bitmapData(50,50);
		sun.ctx.beginPath();
		sun.ctx.arc(25, 25, 25, 0, 2 * Math.PI, false);
		sun.ctx.fillStyle="#FFFC36";
		sun.ctx.fill();

		game.add.sprite(0,0,game.cache.getBitmapData('sky'));
		var sunhalo=game.add.sprite(700,50,sunray);
sunhalo.anchor.setTo(0.5);
		game.add.sprite(sunhalo.x-25,sunhalo.y-25,sun);

		game.add.sprite(0,500,game.cache.getBitmapData('water'));

		this.startEvaporation();

		kid=game.add.sprite(350,450,'kid');
	var logo=game.add.sprite(50,510,'school_logo');
	
	//homeButton=game.add.sprite(50,50,game.cache.getBitmapData('home'));
	//homeButton.inputEnabled=true;
	//homeButton.events.onInputDown.add(toggleMenu,this);
	
//menuGroup=game.add.sprite(0,80,game.cache.getBitmapData('menuboard'));


	logo.scale.setTo(0.3);
	logo.inputEnabled=true;
	logo.events.onInputDown.add(goBack,this);

	 cursors = game.input.keyboard.createCursorKeys();
	 cursors.up.onDown.add(shootCloud,this);

	},
	update: function () {
		game.physics.arcade.collide(cloud,bullet,makeRain2,null,this);

	},
	startEvaporation: function () {



		var emitter = game.add.emitter(game.world.centerX,500, 800);


	emitter.width = game.world.width;
	// emitter.angle = 30; // uncomment to set an angle for the rain.
//emitter.angle = 30;
	


	emitter.makeParticles(game.cache.getBitmapData("rain"));
	emitter.alpha=0.5;

	emitter.minParticleScale = 0.1;
	emitter.maxParticleScale = 0.8;

	emitter.setYSpeed(-300, -500);
	emitter.setXSpeed(-50, 5);

	emitter.minRotation = 0;
	emitter.maxRotation = 0;
	emitter.checkWorldBounds=true;
	emitter.outOfBoundsKill=true;


	emitter.start(false, 1600, 5, 0);
	game.add.tween(emitter).to({alpha:0},6000,"Linear",true).onComplete.add(formClouds,this);
	

	}
}


function formClouds() {
	console.log("make clouds");
	cloud=game.add.sprite(300,50,'cloud1');
	game.physics.arcade.enable(cloud);
	cloud.alpha=0;
	game.add.tween(cloud).to({alpha:1},1000,"Linear",true).onComplete.add(showText,this);

}
function showText () {
	var style={font:"20px Helvetica",fill:"white"}
	var slideText=game.add.text(150,550,"Water evaporates and condenses high up in the sky to form clouds. \n Press UP arrow to for a surprise!",style);
	

}

function goBack () {
	game.state.start('level1');
}

function shootCloud() {
	bullet = game.add.sprite(kid.x,kid.y,game.cache.getBitmapData('rain'));
	game.physics.arcade.enable(bullet);
	game.add.tween(bullet).to({y:-100},1000,"Linear",true);

}
function makeRain2 () {
	console.log("hit");
	bullet.kill();
	var emitter = game.add.emitter(cloud.x, cloud.y, 500);

	emitter.width = cloud.width;
	// emitter.angle = 30; // uncomment to set an angle for the rain.
//emitter.angle = 30;
	


	emitter.makeParticles(game.cache.getBitmapData('rain'));


	emitter.minParticleScale = 0.1;
	emitter.maxParticleScale = 0.8;

	emitter.setYSpeed(300, 500);
	emitter.setXSpeed(-50, 5);

	emitter.minRotation = 0;
	emitter.maxRotation = 0;
	emitter.checkWorldBounds=true;
	emitter.outOfBoundsKill=true;


	emitter.start(false, 1600, 5, 0);
	game.add.tween(cloud).to({x:1300},6000,"Linear",true).onComplete.add(function(){game.state.start('evaporation');},this);
	game.add.tween(emitter).to({x:1300},6000,"Linear",true).onComplete.add(killEmitter,this);
	
}

function toggleMenu() {

	showMenu=!showMenu;
	console.log(showMenu);
	if (showMenu==true){
		game.add.tween(menuGroup).to({x:50},500,Phaser.Easing.Bounce.Out,true);
	} else if (showMenu==false){
		game.add.tween(menuGroup).to({x:-350},500,Phaser.Easing.Bounce.Out,true);
	}
}
