var rain;
var sky;
var cloud,clouds;
var cloudTime=0;
var text;
var button,snowbuttonText,rainbuttonText;
var snowButton;
var rainButton;
var snowflakes;
var element;
var hover_button;
var thisbutton;
var sceneFader;
var thermometer;


var MakeRain = {

	create: function () {
		var fader=game.add.bitmapData(800,600);
		fader.ctx.beginPath();
		fader.ctx.rect(0,0,800,600);
		fader.ctx.fillStyle = "#000000";
		fader.ctx.fill();
		

		

		sky=game.add.sprite(0,0,game.cache.getBitmapData('sky'));
		
		//make it rain!
		
		thermometer=game.add.sprite(700,420,game.cache.getBitmapData('thermo'));
		thermometer.anchor.setTo(0.5,1);
		var style={fill:"white",fontWeight:100,font:"14px Helvetica"};
		game.add.text(720,300,"28 Deg Celcius",style);
		game.add.text(720,370,"0 Deg Celcius",style);
		game.add.text(720,400,"-4 Deg Celcius",style);


		
	//clouds

		clouds=game.add.group();
		clouds.enableBody=true;
		clouds.createMultiple(10,'cloud1');
		clouds.setAll('outOfBoundsKill',true);
		clouds.setAll('checkWorldBounds',true);
		
		clouds.setAll('anchor.x',0.5);
		clouds.setAll('anchor.y',0.5);

		
//add a button 
		normalColor1="#D4273F";
		normalColor2="#EAA953";
		normalColor3="#A4112E";
		var button = game.add.bitmapData(200,80);
		var btn_grd=button.ctx.createLinearGradient(0,0,0,100);
		btn_grd.addColorStop(0,normalColor1);
		btn_grd.addColorStop(0.5,normalColor2);
		btn_grd.addColorStop(1,normalColor3);
		button.ctx.beginPath();
		button.ctx.rect(0,0,200,80);
		button.ctx.fillStyle=btn_grd;
		button.ctx.fill();

		hover_button = game.add.bitmapData(200,80);
		hover_btn_grd=hover_button.ctx.createLinearGradient(0,0,0,100);
		hover_btn_grd.addColorStop(0,"#0C770E");
		hover_btn_grd.addColorStop(0.5,"#11BD14");
		hover_btn_grd.addColorStop(1,"#076009");
		hover_button.ctx.beginPath();
		hover_button.ctx.rect(0,0,200,80);
		hover_button.ctx.fillStyle=hover_btn_grd;
		hover_button.ctx.fill();

element="rain";
		snowButton=game.add.sprite(100,400,game.cache.getBitmapData("button"));
		snowbuttonText=game.add.text(110,410,"Make it Snow");
		snowButton.text="Make it Snow";
		snowButton.inputEnabled=true;
		snowButton.input.useHandCursor = true;
		snowButton.events.onInputOver.add(highlightButton,this);
		snowButton.events.onInputOut.add(restoreButton,this);
		snowButton.events.onInputDown.add(makeSnow,this);
		
		
		rainButton=game.add.sprite(400,400,hover_button);
		rainbuttonText=game.add.text(410,410,"Make it Rain");
		rainButton.text="Make it Rain";
		rainButton.inputEnabled=true;
		rainButton.input.useHandCursor = true;
		rainButton.events.onInputOver.add(highlightButton,this);
		rainButton.events.onInputOut.add(restoreButton,this);
		
		rainButton.events.onInputDown.add(makeRain,this);
		

		//evaporation scene button
		evaButton = game.add.sprite(500,500,game.cache.getBitmapData("button"));
		evaButton.scale.setTo(0.5);
		evaButton.inputEnabled=true;
		evaButton.events.onInputDown.add(goEvaporationState,this);
		var evaText=game.add.text(evaButton.x+10,evaButton.y+10,"Next",{font:"20px Impact",fill:"white"});
		sceneFader=game.add.sprite(0,0,fader);
		game.add.tween(sceneFader).to({alpha:0},3000,"Linear",true);

		game.add.sprite(350,450,'kid');
	var logo=game.add.sprite(50,510,'school_logo');
	logo.scale.setTo(0.3);
	text=game.add.text(150,550,"When water condenses in the sky they become clouds. \n When it gets heavy it turns to rain.",{font:"20px Arial",fill:'white'})




	},
	update: function () {
		this.makeClouds(element);


		


	},
	makeClouds: function (element) {
		if(game.time.now>cloudTime){
			cloud=clouds.getFirstExists(false);
		cloud.reset(-100,50);

		
		game.add.tween(cloud).to({x:1400},6000,"Linear",true);
		this.makeRain(cloud,element);


		cloudTime=game.time.now+2000;
		cloud.events.onOutOfBounds.add(function (cloud) {cloud.kill();console.log("kill!");},this);

		}
		
	},
	makeRain: function (cloud,element) {

		var emitter = game.add.emitter(cloud.x, cloud.y, 500);

	emitter.width = cloud.width;
	// emitter.angle = 30; // uncomment to set an angle for the rain.
//emitter.angle = 30;
	if (element == "rain"){


	emitter.makeParticles(game.cache.getBitmapData('rain'));


	emitter.minParticleScale = 0.1;
	emitter.maxParticleScale = 0.8;

	emitter.setYSpeed(300, 500);
	emitter.setXSpeed(-50, 5);

	emitter.minRotation = 0;
	emitter.maxRotation = 0;
	emitter.checkWorldBounds=true;
	emitter.outOfBoundsKill=true;
} else if (element=="snow"){
	emitter = game.add.emitter(cloud.x, cloud.y,500);
    emitter.makeParticles('snowflakes', [0, 1, 2, 3, 4, 5]);
    emitter.maxParticleScale = 0.6;
    emitter.minParticleScale = 0.2;
    emitter.setYSpeed(300, 500);
	emitter.setXSpeed(-50, 5);
    emitter.gravity = 0;
    emitter.width = cloud.width;
    emitter.minRotation = 0;
    emitter.maxRotation = 40;
}

	emitter.start(false, 1600, 5, 0);
	game.add.tween(emitter).to({x:1300},6000,"Linear",true).onComplete.add(killEmitter,this);
	
	
	console.log(emitter);
	},
	

}

function killEmitter(emitter){
	emitter.destroy();
	console.log("emitter "+emitter.name+" destroyed.");
}
function killCloud(cloud){
	cloud.kill();
	console.log("cloud "+cloud+" destroyed.");
}

function makeSnow () {
	element="snow";
	console.log("snow!");
	//sky_sprite.ctx.fillStyle="#948096";
	//sky_sprite.ctx.fill();
	sky.loadTexture(game.cache.getBitmapData("sky"),0);
	game.add.tween(thermometer.scale).to({y:0.1},1000,Phaser.Easing.Bounce.Out,true);
	
}
function makeRain () {
	element="rain";
	console.log("rain!");
	sky.loadTexture(game.cache.getBitmapData("graysky"),0);
	game.add.tween(thermometer.scale).to({y:1},1000,Phaser.Easing.Bounce.Out,true);

}

function highlightButton(button) {
	console.log(button.text+" positions :"+button.x+button.y);
	
	thistext=button.text;
	currentX=button.x;
	currentY=button.y;
	
		var thisbutton=game.add.bitmapData(200,80);
		var this_grd=thisbutton.ctx.createLinearGradient(0,0,0,100);
		this_grd.addColorStop(0,"#0C770E");
		this_grd.addColorStop(0.5,"#11BD14");
		this_grd.addColorStop(1,"#076009");
		thisbutton.ctx.beginPath();
		thisbutton.ctx.rect(0,0,200,80);
		
		
		thisbutton.ctx.fillStyle=this_grd;
		thisbutton.ctx.fill();

		game.add.sprite(currentX,currentY,thisbutton);
		game.add.text(currentX+10,currentY+10,thistext);

		

}
function restoreButton(button) {

console.log(button.text);
	thistext=button.text;
	currentX=button.x;
	currentY=button.y;


		var thisbutton=game.add.bitmapData(200,80);
		var this_grd=thisbutton.ctx.createLinearGradient(0,0,0,100);
		this_grd.addColorStop(0,"#D4273F");
		this_grd.addColorStop(0.5,"#375F1E");
		this_grd.addColorStop(1,"#A4112E");;
		thisbutton.ctx.beginPath();
		thisbutton.ctx.rect(0,0,200,80);

		
		thisbutton.ctx.fillStyle=this_grd;
		thisbutton.ctx.fill();

		game.add.sprite(currentX,currentY,thisbutton);
		game.add.text(currentX+10,currentY+10,thistext);

		var shape=game.add.bitmapData(300,300);
		shape.ctx.beginPath();
		shape.ctx.lineJoin = 'miter';
		shape.ctx.lineCap = 'butt';
		shape.ctx.lineWidth = 1.000000;
		shape.ctx.fillStyle = 'rgb(128, 0, 128)';
		shape.ctx.moveTo(31.428571, 840.933590);
		shape.ctx.bezierCurveTo(31.428571, 840.933590, 94.007054, 734.084510, 145.714290, 855.219300);
		shape.ctx.bezierCurveTo(164.517020, 899.268540, 105.714290, 932.362160, 142.857140, 949.505020);
		shape.ctx.bezierCurveTo(180.000000, 966.647880, 225.714290, 1012.362200, 171.428570, 1020.933600);
		shape.ctx.bezierCurveTo(117.142860, 1029.505000, 28.571429, 1043.790700, 45.714286, 1000.933600);
		shape.ctx.bezierCurveTo(62.857143, 958.076450, 94.285714, 958.076450, 71.428571, 929.505020);
		shape.ctx.bezierCurveTo(48.571429, 900.933590, 40.000000, 852.362160, 31.428571, 840.933590);
		shape.ctx.fill();

		

}
function goEvaporationState() {

	game.state.start('menu');
}



