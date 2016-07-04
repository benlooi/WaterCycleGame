var buttons= [
	{name:"Transpiration",
	launch:"Transpiration"},
	{name:"Respiration",
	launch:"Respiration"},
	{name:"Evaporation",
	launch:"evaporation"},
	{name:"Condensation",
	launch:"Condensation"},
	
	{name:"CyberWellness",
	launch:"cyberwellness"}
]



var buttonsGroup;
var button;

var Menu = {

	create: function () {
		var style={font:"32px Helvetica",fill:"#E5D598",fontWeight:100};
		var Title=game.add.text(200,50,'The Water Cycle',style);
		Title.anchor.setTo(0.5);

		buttonsGroup=game.add.group();
		for (var i=0;i<buttons.length;i++) {
			var buttonTextStyle={font:"20px Impact",fill:"#5F3218",fontWeight:100};
			var button=buttonsGroup.create(i+100,i*100+100,game.cache.getBitmapData('button'));
			game.add.text(i+110,i*100+130,buttons[i].name,buttonTextStyle);
			button.inputEnabled=true;
			button.input.useHandCursor=true;
			button.launch=buttons[i].launch;
			button.events.onInputDown.add(this.goToState,this);

		}
		

		


	},
	goToState: function (button) {
		
			game.state.start(button.launch);
		}
}


