
var preload = {

	preload:function () {
		var sky_sprite= game.add.bitmapData(800,600);
		//game.physics.startSystem(Phaser.Physics.ARCADE);
		//create gradient
		var grd = sky_sprite.context.createLinearGradient(0, 0, 0, 800);
		grd.addColorStop(0,'#4C9AE6');
		grd.addColorStop(0.4,'#57BAF7');
		grd.addColorStop(1,'#ffffff');
		//create sky
		sky_sprite.ctx.beginPath();
		sky_sprite.ctx.rect(0,0,800,600);
		sky_sprite.ctx.fillStyle=grd;
		
		
		sky_sprite.ctx.fill();

		var sky_gray_sprite= game.add.bitmapData(800,600);
		//game.physics.startSystem(Phaser.Physics.ARCADE);
		//create gradient
		var graygrd = sky_gray_sprite.context.createLinearGradient(0, 0, 0, 800);
		graygrd.addColorStop(0,'#5A4D5B');
		graygrd.addColorStop(0.4,'#727B91');
		graygrd.addColorStop(1,'#ffffff');
		//create sky
		sky_gray_sprite.ctx.beginPath();
		sky_gray_sprite.ctx.rect(0,0,800,600);
		sky_gray_sprite.ctx.fillStyle=graygrd;
		
		
		sky_gray_sprite.ctx.fill();

		var orange_button = game.add.bitmapData(200,80);
		var btn_grd=orange_button.ctx.createLinearGradient(0,0,0,100);

		var normalColor1="#D4273F";
		var normalColor2="#EAA953";
		var normalColor3="#A4112E";
		btn_grd.addColorStop(0,normalColor1);
		btn_grd.addColorStop(0.5,normalColor2);
		btn_grd.addColorStop(1,normalColor3);
		orange_button.ctx.beginPath();
		orange_button.ctx.moveTo(10,0);
		orange_button.ctx.lineTo(190,0);
		orange_button.ctx.bezierCurveTo(195,5,205,15,200,10);
		orange_button.ctx.lineTo(200,70);
		orange_button.ctx.bezierCurveTo(195,75,185,85,190,80);
		orange_button.ctx.lineTo(10,80);
		orange_button.ctx.bezierCurveTo(5,75,-5,65,0,70);
		orange_button.ctx.lineTo(0,10);
		orange_button.ctx.bezierCurveTo(5,5,15,-5,10,0);

		var green_button = game.add.bitmapData(200,80);
		var btn_grd=green_button.ctx.createLinearGradient(0,0,0,100);

		var green1="#D4273F";
		var green2="#EAA953";
		var green3="#A4112E";
		btn_grd.addColorStop(0,green1);
		btn_grd.addColorStop(0.5,green2);
		btn_grd.addColorStop(1,green3);
		green_button.ctx.beginPath();
		green_button.ctx.moveTo(10,0);
		green_button.ctx.lineTo(190,0);
		green_button.ctx.bezierCurveTo(195,5,205,15,200,10);
		green_button.ctx.lineTo(200,70);
		green_button.ctx.bezierCurveTo(195,75,185,85,190,80);
		green_button.ctx.lineTo(10,80);
		green_button.ctx.bezierCurveTo(5,75,-5,65,0,70);
		green_button.ctx.lineTo(0,10);
		green_button.ctx.bezierCurveTo(5,5,15,-5,10,0);




		green_button.ctx.fillStyle=btn_grd;
		green_button.ctx.fill();


		var water=game.add.bitmapData(800,100);
		var water_grd=water.ctx.createLinearGradient(0,0,0,100);
		water_grd.addColorStop(0,"#8993E5");
		water_grd.addColorStop(1,"#D0D5E5");
		water.ctx.beginPath();
		water.ctx.rect(0,0,800,100);
		water.ctx.fillStyle=water_grd;
		water.ctx.fill();

		var rain=game.add.bitmapData(4,10);
		rain.ctx.beginPath();
		rain.ctx.rect(0,0,4,10);
		rain.ctx.fillStyle="#86198E";
		rain.ctx.fill();

		var home_button= game.add.bitmapData(50,50);
		home_button.ctx.beginPath();
		home_button.ctx.arc(25,25,25,0,Math.PI*2,false);
		home_button.ctx.fillStyle="#74116F";
		home_button.ctx.fill();
		//thermometer
		var thermo= game.add.bitmapData(10,120);

		thermo.ctx.beginPath();
		thermo.ctx.rect(0,0,10,120);
		thermo.ctx.fillStyle="#C71F27";
		thermo.ctx.fill();

		//menuboard
		var menuboard=game.add.bitmapData(150,400);
		menuboard.ctx.beginPath();
		menuboard.ctx.rect(0,0,150,400);
		menuboard.ctx.fillStyle="#B29A4A";
		menuboard.ctx.strokeStyle="#3C1A0B";
		menuboard.ctx.lineStyle="dashed";
		menuboard.ctx.fill();
		menuboard.ctx.stroke();


		game.cache.addBitmapData('sky',sky_sprite);
		game.cache.addBitmapData('graysky',sky_gray_sprite);
		game.cache.addBitmapData('button',green_button);
		game.cache.addBitmapData('thermo',thermo);
		game.cache.addBitmapData('home',home_button);
		game.cache.addBitmapData('menuboard',menuboard);
		game.cache.addBitmapData('water',water);
		game.cache.addBitmapData('rain',rain);
		game.load.image('cloud1','assets/images/cloud1.png');
		game.load.image('school_logo','assets/images/andersonpr.png');
		game.load.image('hps','assets/images/hps.png');
		game.load.spritesheet('snowflakes','assets/images/snowflakes.png',17,17);
		game.load.spritesheet('kid','assets/images/apskid.png',48,48);
		game.load.spritesheet('fruitnveg','assets/images/fruitnveg32wh37.png',32,32);
	},
	create: function () {

		game.state.start('makeitrain');
	}
}