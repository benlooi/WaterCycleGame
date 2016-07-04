var game=new Phaser.Game(800,600,'',Phaser.AUTO,'');

game.state.add('preload',preload);
game.state.add('makeitrain',MakeRain);
game.state.add('evaporation',Evaporation);
game.state.add('menu',Menu);
game.state.add('cyberwellness',CyberWellness);

game.state.start('preload');