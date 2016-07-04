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

