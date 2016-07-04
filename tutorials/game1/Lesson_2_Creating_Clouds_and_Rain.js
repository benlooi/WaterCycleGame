/*

//Welcome to your first game!
//You will learn how to create a game with some simple code. 
//First, open the File in assets > js > make_it_rain.js

//Copy the following lines into the file.
// These are the things we need to make the game work.
//var is a variable. We use var to give a name to something we want to work on.

//SO, in the game, we will have a sky with clouds, and the clouds will rain or snow when we click on some buttons.
//Do you know how rain and clouds are formed?

//When water vapour condenses in the colder parts in the sky, it forms clouds. 
//These clouds will have more and more water vapour until it becomes so heavy, the water vapour forms back into water!

//The water will start falling from the clouds, creating rain. In some countries, the weather gets cold in winter.
//The falling rain actually freezes on its way down, and becomes snow.

//Do you know at what temperature water freezes?

//This are the things we need in the game:
var sky;
var cloud,clouds;

var rain;
var snowflakes;
var element;

var cloudTime=0;
//let's make some buttons to click on to call SNOW or RAIN
var text;
var button,snowbuttonText,rainbuttonText;
var snowButton;
var rainButton;
var hover_button;
var thisbutton;
//let's make it fancy ...we will fade the scene in gently
var sceneFader;

//we will create a thermometer to show the TEMPERATURE of the weather
var thermometer;

	//This is the Scene object. Here's where all the code goes to create the game
	var MakeRain = {
		preload: function () {
			//nothing to preload...we have preloaded stuff in the PRELOAD state.
		},
//remove the line 50 when your teacher tells you to.
*/

		create: function () {
			//here's where we add sky, clouds and other stuff to the game, as well as some instructions
			//This is like a "cover" that will slowly turn transparent to create the fade-in effect
			var fader=game.add.bitmapData(800,600);
				fader.ctx.beginPath();
				fader.ctx.rect(0,0,800,600);
				fader.ctx.fillStyle = "#000000";
				fader.ctx.fill();
		

		//let's add a sky first

		sky=game.add.sprite(0,0,game.cache.getBitmapData('sky'));
		
		//make it rain!
		


		
	//clouds

		clouds=game.add.group();
		clouds.enableBody=true;
		clouds.createMultiple(10,'cloud1');
		clouds.setAll('outOfBoundsKill',true);
		clouds.setAll('checkWorldBounds',true);
		
		clouds.setAll('anchor.x',0.5);
		clouds.setAll('anchor.y',0.5);

		//next we will add a thermometer
		thermometer=game.add.sprite(700,420,game.cache.getBitmapData('thermo'));
		thermometer.anchor.setTo(0.5,1);
		var style={fill:"white",fontWeight:100,font:"14px Helvetica"};
		game.add.text(720,300,"28 Deg Celcius",style);
		game.add.text(720,370,"0 Deg Celcius",style);
		game.add.text(720,400,"-4 Deg Celcius",style);
		
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
			//here is where the game rules are set. The game loop. The game will check these rules 60 times every second

		}

	}
//here is where we write other instructions that will be used in the Scene MakeRain above!
function doSomething1 () {
//do nothing for now

}

function doSomething2 () {
//don't worry, we will do some nifty stuff here!

}