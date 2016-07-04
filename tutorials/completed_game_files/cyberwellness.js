var CyberWellness = {

	create: function () {
		var logo=game.add.sprite(700,50,'hps');
		var topText= [{letter:"S",color:"#AC3F1E"},{letter:"T",color:"#3842AC"},{letter:"O",color:"#2C5C2B"},{letter:"P",color:"#5C1123"}]
		var bottomText= "CYBERBULLYING";

		for (var t=0;t<topText.length;t++){
			var circle= game.add.bitmapData(50,50);
			circle.ctx.beginPath();
			circle.ctx.arc(25,25,25,0, 2 * Math.PI, false);
			circle.ctx.fillStyle=topText[t].color;
			circle.ctx.fill();
			var Lettre=game.add.sprite(t*60+100,200,circle);
			Lettre.inputEnabled=true;

			Lettre.events.onInputOver.add(bounce,this);
			//Lettre.anchor.setTo(0.5);
			var style={font:"30px Arial",fill:"#ffffff"}
			var letter=game.add.text(Lettre.x+15,Lettre.y+5,topText[t].letter,style);

			
			}

			game.inputEnabled=true;
			game.input.onDown.add(fruity,this);
			game.add.text(80,300,bottomText,style);
		

		
	}


}

function bounce (circle) {
	var newY;
	if (circle.y>199){
		newY=100;
	} else {
		newY=200;
	}
	console.log('mouseover');
	game.add.tween(circle).to({y:newY},1000,Phaser.Easing.Bounce.Out,true);
}
function fruity(pointer) {
	var emitter=game.add.emitter(pointer.x,pointer.y,50);
	 emitter.makeParticles('fruitnveg', [0, 1, 2, 3, 4, 5,6,7,8,9,10,11,12,13,14]);
    emitter.maxParticleScale = 0.6;
    emitter.minParticleScale = 0.2;
    emitter.setYSpeed(-150, 200);
	emitter.setXSpeed(-100, 100);
    emitter.gravity = 200;
    emitter.width = 10;
    emitter.minRotation = 40;
    emitter.maxRotation = 180;

    emitter.start(false, 1000, null, 0);
}