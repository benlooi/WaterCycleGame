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
	create: function () {
		//here's where we add sky, clouds and other stuff to the game, as well as some instructions

	},
	update: function () {
		//here is where the game rules are set. The game loop. The game will check these rules 60 times every second
		
	}

}